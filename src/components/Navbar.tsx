import React, { useState, useEffect } from 'react';
import { PageId, Currency } from '../types';
import { HOTEL_INFO, CURRENCY_RATES } from '../data/hotelData';
import { Phone, Menu, X, Calendar, Globe } from 'lucide-react';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (roomId?: string) => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenBooking,
  currency,
  onCurrencyChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'facilities', label: 'Facilities & Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-purple-950/90 backdrop-blur-md border-b border-purple-800/40 shadow-xl py-3'
          : 'bg-gradient-to-b from-purple-950/90 via-purple-950/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Zone 1: Brand Title Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-700 flex items-center justify-center text-white font-serif-luxury font-bold text-xl shadow-md border border-purple-400/30 group-hover:scale-105 transition-transform">
              Q
            </div>
            <div>
              <span className="text-lg sm:text-xl font-serif-luxury font-bold tracking-tight text-white block leading-none">
                Q Loft Hotels
              </span>
              <span className="text-[10px] tracking-widest text-purple-300 uppercase font-medium block mt-0.5">
                Bedok · Singapore
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-800/60 text-white shadow-sm border border-purple-500/30'
                      : 'text-purple-200 hover:text-white hover:bg-purple-900/40'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions (Currency, Phone, Book CTA) */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Currency Selector */}
            <div className="relative flex items-center bg-purple-900/40 border border-purple-700/50 rounded-lg px-2 py-1 text-xs text-purple-200">
              <Globe className="w-3.5 h-3.5 mr-1.5 text-purple-300 shrink-0" />
              <select
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value as Currency)}
                className="bg-transparent text-purple-100 font-medium focus:outline-none cursor-pointer pr-1"
              >
                {(Object.keys(CURRENCY_RATES) as Currency[]).map((curr) => (
                  <option key={curr} value={curr} className="bg-purple-950 text-white">
                    {CURRENCY_RATES[curr].symbol} {curr}
                  </option>
                ))}
              </select>
            </div>

            {/* Clickable Phone Link */}
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="hidden lg:flex items-center gap-1.5 text-xs text-purple-200 hover:text-white transition-colors py-1 px-2.5 rounded-lg hover:bg-purple-900/30"
              title="Call Reception"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold tracking-wide">{HOTEL_INFO.phone}</span>
            </a>

            {/* Prominent Book Now CTA Button */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-md shadow-amber-900/20 hover:shadow-amber-500/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-purple-950" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-md text-xs font-semibold text-purple-950 bg-amber-300 hover:bg-amber-200 transition-colors"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-purple-200 hover:text-white hover:bg-purple-900/50 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-purple-950/95 backdrop-blur-xl border-b border-purple-800/60 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-purple-800/80 text-white border-l-4 border-amber-400 font-semibold'
                      : 'text-purple-200 hover:bg-purple-900/50 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-purple-800/50 space-y-3">
            <div className="flex items-center justify-between text-xs text-purple-200 px-2">
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-purple-400" /> Currency:
              </span>
              <select
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value as Currency)}
                className="bg-purple-900 border border-purple-700 text-white rounded px-2 py-1 text-xs"
              >
                {(Object.keys(CURRENCY_RATES) as Currency[]).map((curr) => (
                  <option key={curr} value={curr}>
                    {CURRENCY_RATES[curr].symbol} {curr}
                  </option>
                ))}
              </select>
            </div>

            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-purple-900/60 border border-purple-700/50 text-purple-100 text-xs font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Hotel: {HOTEL_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg text-center text-xs font-semibold text-purple-950 bg-gradient-to-r from-amber-300 to-amber-400 shadow-md"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
