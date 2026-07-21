import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';
import { BUSINESS, SERVICES, ALL_TOWNS } from '@/data/site';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-green-deep text-white pt-20 pb-8">
      <div className="container-tight">
        <div className="grid md:grid-cols-12 gap-12 mb-14">
          <div className="md:col-span-4">
            <img src={BUSINESS.logo} alt="Oliveira Landscaping Construction logo" className="h-20 mb-5" />
            <p className="text-white/70 max-w-md leading-relaxed">
              Your trusted partner for premium landscaping, hardscape, and outdoor living spaces across Boston&apos;s
              South Shore. Licensed, insured, and proudly local.
            </p>
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-10 h-10 bg-white/10 rounded-full items-center justify-center hover:bg-brand-green-lime hover:text-brand-green-dark transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-heading text-lg font-bold mb-5">Explore</h3>
            <ul className="space-y-3 text-white/75">
              <li><Link to="/about" className="hover:text-brand-green-light transition-colors">About Us</Link></li>
              <li><Link to="/#services" className="hover:text-brand-green-light transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-green-light transition-colors">Gallery</Link></li>
              <li><Link to="/service-areas" className="hover:text-brand-green-light transition-colors">Service Areas</Link></li>
              <li><Link to="/contact" className="hover:text-brand-green-light transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-heading text-lg font-bold mb-5">Services</h3>
            <ul className="space-y-3 text-white/75">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to="/#services" className="hover:text-brand-green-light transition-colors">{s.title}</Link>
                </li>
              ))}
              <li><Link to="/#services" className="hover:text-brand-green-light transition-colors">Retaining Walls & Stonework</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-heading text-lg font-bold mb-5">Contact</h3>
            <ul className="space-y-4 text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand-green-light" />
                <span>{BUSINESS.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-brand-green-light" />
                <a href={BUSINESS.phoneHref} className="hover:text-brand-green-light transition-colors">{BUSINESS.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand-green-light" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-brand-green-light transition-colors break-all">{BUSINESS.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 text-brand-green-light" />
                <span>{BUSINESS.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-xs uppercase tracking-widest text-brand-green-light font-semibold mb-3">Proudly Serving the South Shore</p>
          <p className="text-sm text-white/60 leading-relaxed">{ALL_TOWNS.join(' · ')}</p>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-sm text-white/60">© {year} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex items-center gap-5 text-sm">
            <Link to="/privacy" className="text-white/60 hover:text-brand-green-light transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/60 hover:text-brand-green-light transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
