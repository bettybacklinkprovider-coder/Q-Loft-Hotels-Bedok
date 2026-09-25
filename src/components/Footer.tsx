import React from 'react';
import { PageId } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MapPin, Mail, Clock, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-purple-950 text-purple-200 border-t border-purple-800/40 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-purple-800/50">
          
          {/* Column 1: Logo & Hotel Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-700 flex items-center justify-center text-white font-serif-luxury font-bold text-2xl shadow-lg border border-purple-400/30">
                Q
              </div>
              <div>
                <span className="text-xl font-serif-luxury font-bold text-white block">
                  Q Loft Hotels
                </span>
                <span className="text-[10px] tracking-widest text-purple-400 uppercase font-medium">
                  Bedok · Singapore
                </span>
              </div>
            </div>

            <p className="text-xs text-purple-300 leading-relaxed">
              Q Loft Hotels @ Bedok offers premium, boutique accommodation in East Singapore. Designed for comfort, convenience, and seamless hospitality near Changi Airport, Expo, and Simpang Bedok.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-purple-950 transition-colors shadow"
              >
                Book Your Stay
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('rooms')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Rooms & Accommodation</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('facilities')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Hotel Facilities & Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Contact & Map Location</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking()}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 text-amber-300 font-medium"
                >
                  <span>Online Room Reservation</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              Hotel Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-purple-200">{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="text-white hover:text-amber-300 transition-colors font-semibold"
                >
                  {HOTEL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${HOTEL_INFO.email}`}
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  {HOTEL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-purple-300">
                  Check-in: {HOTEL_INFO.checkInTime} | Check-out: {HOTEL_INFO.checkOutTime}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Location Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              Bedok Location
            </h4>
            <p className="text-xs text-purple-300 leading-relaxed">
              Opposite Simpang Bedok food enclave. 12 mins to Changi Airport, 1 MRT stop to Singapore EXPO.
            </p>

            <div className="p-3 rounded-xl bg-purple-900/50 border border-purple-800/60 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Best Rate Direct Guarantee</span>
              </div>
              <p className="text-[11px] text-purple-300">
                Book directly on our website for complimentary Wi-Fi and direct guest support.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-400 gap-4">
          <div>
            © {currentYear} {HOTEL_INFO.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-purple-300">Bedok, Singapore</span>
            <span>·</span>
            <button onClick={() => handleNav('contact')} className="hover:text-purple-200 transition-colors">
              Guest Support
            </button>
            <span>·</span>
            <button onClick={onOpenBooking} className="hover:text-amber-300 transition-colors text-amber-400">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
