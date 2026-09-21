import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from '@/App';

// useLayoutEffect is a no-op during SSR; alias it to avoid noisy build warnings.
React.useLayoutEffect = React.useEffect;

// Build-time only: renders a route to static HTML (see tools/prerender-routes.js).
export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>,
  );
  return { html, helmet: helmetContext.helmet };
}
