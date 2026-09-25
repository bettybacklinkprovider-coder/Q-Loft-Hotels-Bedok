import React from 'react';
import { PageId } from '../types';
import { HOTEL_FACILITIES, HOTEL_INFO, NEARBY_ATTRACTIONS, DEFAULT_FALLBACK_IMAGE } from '../data/hotelData';
import {
  Bed,
  Wifi,
  Wind,
  Headphones,
  MapPin,
  Sparkles,
  Briefcase,
  ShieldCheck,
  Clock,
  Shirt,
  Luggage,
  Utensils,
  Plane,
  Train,
  CheckCircle2,
  Calendar,
  Phone
} from 'lucide-react';

interface FacilitiesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    Bed: <Bed className="w-5 h-5 text-amber-400" />,
    Wifi: <Wifi className="w-5 h-5 text-amber-400" />,
    Wind: <Wind className="w-5 h-5 text-amber-400" />,
    Headphones: <Headphones className="w-5 h-5 text-amber-400" />,
    MapPin: <MapPin className="w-5 h-5 text-amber-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
    Briefcase: <Briefcase className="w-5 h-5 text-amber-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-400" />,
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_FALLBACK_IMAGE;
  };

  const additionalServices = [
    {
      title: "24/7 Front Desk & Check-in",
      desc: "Round-the-clock reception assistance for smooth check-ins, late arrivals, and guest inquiries.",
      icon: <Clock className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Complimentary Luggage Storage",
      desc: "Secure storage for your suitcases before check-in or after check-out so you can explore Singapore freely.",
      icon: <Luggage className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Daily Housekeeping & Linen",
      desc: "Daily room cleaning, fresh towel replenishment, and meticulous room sanitization standards.",
      icon: <Shirt className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Simpang Bedok Dining Enclave",
      desc: "Located opposite famous local restaurants, 24-hour supper spots, and authentic Singapore hawker food.",
      icon: <Utensils className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Changi Airport Proximity",
      desc: "Just 12-15 minutes away from Changi Airport Terminals 1-4 and Jewel Changi.",
      icon: <Plane className="w-5 h-5 text-amber-400" />
    },
    {
      title: "MRT & Transit Access",
      desc: "Short walk to Tanah Merah MRT station (EW4/CG) connecting directly to Changi Airport and City Centre.",
      icon: <Train className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <div className="pt-20 pb-20 space-y-16">
      
      {/* Hero Banner with Background Image */}
      <section className="relative py-24 bg-purple-950 overflow-hidden border-b border-purple-800/40">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80&auto=format&fit=crop"
            alt="Q Loft Facilities Banner"
            onError={handleImageError}
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/80 to-purple-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-300 bg-purple-900/90 border border-purple-700/50 px-3.5 py-1 rounded-full backdrop-blur-md shadow-md">
            Guest Comforts & Services
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-white tracking-tight drop-shadow-md">
            Facilities & Services
          </h1>
          <p className="text-xs sm:text-base text-purple-100 max-w-2xl mx-auto leading-relaxed drop-shadow">
            From high-speed optical Wi-Fi and individual climate control to 24/7 guest assistance and prime Bedok food enclave access—discover everything Q Loft Hotels offers.
          </p>
        </div>
      </section>

      {/* Primary Facilities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Hotel Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
            Comprehensive Hotel Facilities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOTEL_FACILITIES.map((fac) => (
            <div
              key={fac.id}
              className="bg-purple-950/90 border border-purple-800/60 hover:border-amber-400/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden bg-purple-900">
                <img
                  src={fac.image}
                  alt={fac.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/30 to-transparent" />

                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-purple-950/90 border border-purple-600/50 flex items-center justify-center shadow-md backdrop-blur-md">
                  {iconMap[fac.iconName] || <Bed className="w-5 h-5 text-amber-400" />}
                </div>

                {fac.highlight && (
                  <span className="absolute top-3 right-3 bg-purple-950/90 border border-amber-400/40 text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg backdrop-blur-md">
                    {fac.highlight}
                  </span>
                )}
              </div>

              {/* Card Details */}
              <div className="p-5 space-y-2 flex-1">
                <h3 className="text-lg font-serif-luxury font-bold text-white group-hover:text-amber-300 transition-colors">
                  {fac.title}
                </h3>
                <p className="text-xs text-purple-300 leading-relaxed">
                  {fac.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guest Services Showcase */}
      <section className="py-16 bg-purple-900/30 border-y border-purple-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Personalized Assistance
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
              Dedicated Guest Services
            </h2>
            <p className="text-xs sm:text-sm text-purple-300">
              Designed to make your Singapore journey smooth, relaxed, and worry-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((srv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-purple-950/90 border border-purple-800/60 flex items-start gap-4 shadow-lg hover:border-amber-400/40 transition-all"
              >
                <div className="p-3 rounded-xl bg-purple-900/80 border border-purple-700/50 shrink-0">
                  {srv.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-serif-luxury font-bold text-white">{srv.title}</h4>
                  <p className="text-xs text-purple-300 leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Nearby Enclave & Convenience Highlights with Photos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Bedok Convenience
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
            Nearby Attractions & Transport
          </h2>
          <p className="text-xs sm:text-sm text-purple-300">
            Enjoy strategic access to East Singapore's finest dining and transit hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEARBY_ATTRACTIONS.map((attr, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-purple-950/80 border border-purple-800/60 hover:border-amber-400/40 transition-all overflow-hidden shadow-xl space-y-0"
            >
              <div className="relative h-44 overflow-hidden bg-purple-900">
                <img
                  src={attr.image}
                  alt={attr.name}
                  onError={handleImageError}
                  className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/30 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-300 bg-purple-950/90 px-2.5 py-1 rounded border border-purple-700/50 backdrop-blur-md">
                    {attr.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 bg-purple-950/90 backdrop-blur-md px-2.5 py-1 rounded text-xs font-bold text-white border border-purple-700/50">
                  {attr.timeByTransport}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-lg font-serif-luxury font-bold text-white">{attr.name}</h3>
                <p className="text-xs text-purple-300 leading-relaxed">{attr.description}</p>
                
                <div className="pt-2 flex items-center gap-1.5 text-xs text-amber-300 border-t border-purple-900/60">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Distance: {attr.distance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-purple-700/60 bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 shadow-2xl p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white max-w-xl mx-auto">
            Ready to Experience Our Services at Q Loft Hotels?
          </h3>
          <p className="text-xs sm:text-sm text-purple-200 max-w-lg mx-auto leading-relaxed">
            Book your room directly today for direct guest support, flexible check-in, and best available rates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3 rounded-xl font-semibold text-xs text-purple-950 bg-amber-300 hover:bg-amber-200 shadow cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Room Now</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 rounded-xl font-semibold text-xs text-white bg-purple-900/70 hover:bg-purple-800 border border-purple-600/50 backdrop-blur-md cursor-pointer flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Contact Desk</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
