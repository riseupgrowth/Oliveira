import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/data/site';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const solid = isScrolled || !isHome;

  const linkClass = (active) =>
    `font-semibold text-sm tracking-wide uppercase transition-colors duration-300 ${
      solid
        ? active
          ? 'text-brand-green'
          : 'text-gray-700 hover:text-brand-green'
        : active
          ? 'text-brand-green-lime'
          : 'text-white hover:text-brand-green-lime'
    }`;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className={`hidden md:block transition-colors duration-300 ${solid ? 'bg-brand-green-dark' : 'bg-black/30'}`}>
        <div className="container-tight flex justify-between items-center h-9 text-xs text-white/90">
          <span className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-brand-green-light" />
            Serving Boston&apos;s South Shore · Licensed &amp; Insured
          </span>
          <a href={BUSINESS.phoneHref} className="flex items-center gap-2 font-semibold hover:text-brand-green-lime transition-colors">
            <Phone className="w-3.5 h-3.5 text-brand-green-light" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="container-tight flex justify-between items-center h-20">
        <Link to="/" className="flex items-center" aria-label="Oliveira Landscaping home">
          <img src={BUSINESS.logo} alt="Oliveira Landscaping Construction logo" className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) =>
            link.to.includes('#') ? (
              <Link key={link.name} to={link.to} className={linkClass(false)}>
                {link.name}
              </Link>
            ) : (
              <NavLink key={link.name} to={link.to} className={({ isActive }) => linkClass(isActive)}>
                {link.name}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact">
            <Button className="btn-custom-green">Get a Free Estimate</Button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden transition-colors duration-300 ${solid ? 'text-brand-green-dark' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-xl overflow-hidden"
          >
            <div className="flex flex-col items-stretch p-5 gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="font-semibold text-gray-700 hover:text-brand-green hover:bg-brand-cream rounded-lg w-full py-3 px-3 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="mt-3">
                <Button className="btn-custom-green w-full">Get a Free Estimate</Button>
              </Link>
              <a href={BUSINESS.phoneHref} className="mt-2 flex items-center justify-center gap-2 text-brand-green-dark font-bold py-2">
                <Phone className="w-4 h-4" /> {BUSINESS.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
