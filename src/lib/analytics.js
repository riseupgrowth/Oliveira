import { BUSINESS } from '@/data/site';

/**
 * Google Ads conversion tracking.
 *
 * Everything here is a no-op until BUSINESS.tracking.googleAdsId is filled in,
 * so the site can ship before the Ads account is configured: no external script
 * is loaded, no cookies are set, and no console noise is produced.
 */

const isBrowser = typeof window !== 'undefined';

const getConfig = () => BUSINESS.tracking || {};

let initialized = false;

/**
 * Loads the Google tag (gtag.js) and starts listening for phone-call clicks.
 * Safe to call more than once.
 */
export function initTracking() {
  if (!isBrowser || initialized) return;

  const { googleAdsId } = getConfig();
  if (!googleAdsId) return; // Not configured yet — do nothing at all.

  initialized = true;

  // gtag.js is ~150 KB: fetch it after the page has loaded so it doesn't compete
  // with the hero. Calls made before then are queued in dataLayer and replayed.
  const loadTag = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`;
    document.head.appendChild(script);
  };
  const whenIdle = () => (window.requestIdleCallback ? window.requestIdleCallback(loadTag, { timeout: 3000 }) : setTimeout(loadTag, 1500));
  if (document.readyState === 'complete') whenIdle();
  else window.addEventListener('load', whenIdle, { once: true });

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', googleAdsId);

  listenForPhoneClicks();
}

/**
 * One delegated listener covers every `tel:` link on the site — header, footer,
 * floating button, contact cards — including any added later.
 */
function listenForPhoneClicks() {
  document.addEventListener(
    'click',
    (event) => {
      const link = event.target.closest?.('a[href^="tel:"]');
      if (link) trackConversion('phoneCall');
    },
    { capture: true }
  );
}

/**
 * Reports a conversion to Google Ads.
 * @param {'formSubmit'|'phoneCall'} kind - which configured conversion to send
 */
export function trackConversion(kind) {
  if (!isBrowser) return;

  const { googleAdsId, conversionLabels } = getConfig();
  const label = conversionLabels?.[kind];

  if (!googleAdsId || !label || typeof window.gtag !== 'function') return;

  window.gtag('event', 'conversion', {
    send_to: `${googleAdsId}/${label}`,
  });
}
