import React from 'react';
import { PageId, Currency } from '../types';
import { HOTEL_INFO, ROOMS, HOTEL_FACILITIES, WHY_STAY_REASONS, CURRENCY_RATES } from '../data/hotelData';
import {
  Calendar,
  Phone,
  MapPin,
  CheckCircle2,
  Bed,
  Wifi,
  Wind,
  Headphones,
  Sparkles,
  ArrowRight,
  Eye,
  Star,
  ExternalLink,
  ShieldCheck,
  Building,
  Navigation
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (roomId?: string) => void;
  onViewRoomDetails: (roomId: string) => void;
  currency: Currency;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onViewRoomDetails,
  currency,
}) => {
  const rateObj = CURRENCY_RATES[currency];

  const iconMap: Record<string, React.ReactNode> = {
    Bed: <Bed className="w-6 h-6 text-amber-400" />,
    Wifi: <Wifi className="w-6 h-6 text-amber-400" />,
    Wind: <Wind className="w-6 h-6 text-amber-400" />,
    Headphones: <Headphones className="w-6 h-6 text-amber-400" />,
    MapPin: <MapPin className="w-6 h-6 text-amber-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
  };

  return (
    <div className="space-y-0">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-purple-950">
        {/* Background Photo with Gradient Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_INFO.heroImage}
            alt="Q Loft Hotels Bedok Exterior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/90 via-purple-950/80 to-purple-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.25)_0,transparent_75%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Location pill indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/80 border border-purple-500/40 backdrop-blur-md text-xs text-purple-200 shadow-lg">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-medium tracking-wide">359A Bedok Rd, Bedok, Singapore 469548</span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-luxury font-bold text-white tracking-tight leading-[1.1] drop-shadow-md">
            Welcome to <span className="text-purple-gradient block sm:inline">Q Loft Hotels @ Bedok</span>
          </h1>

          {/* Short Welcoming Description */}
          <p className="text-base sm:text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Experience boutique luxury, modern loft suites, and warm Singaporean hospitality located directly across Bedok’s famous culinary enclave, minutes to Changi Airport and Singapore EXPO.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-xl shadow-amber-950/40 transform hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-purple-950" />
              <span>Book Your Stay</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-purple-900/70 hover:bg-purple-800/90 border border-purple-500/40 backdrop-blur-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Key Quick Badges */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div className="p-3 rounded-xl bg-purple-950/75 border border-purple-800/60 backdrop-blur-md shadow-lg">
              <span className="text-[10px] text-purple-300 uppercase tracking-widest block font-medium">Location</span>
              <span className="text-xs font-bold text-white block mt-0.5">Bedok, Singapore</span>
            </div>
            <div className="p-3 rounded-xl bg-purple-950/75 border border-purple-800/60 backdrop-blur-md shadow-lg">
              <span className="text-[10px] text-purple-300 uppercase tracking-widest block font-medium">Changi Airport</span>
              <span className="text-xs font-bold text-white block mt-0.5">12 Mins Drive</span>
            </div>
            <div className="p-3 rounded-xl bg-purple-950/75 border border-purple-800/60 backdrop-blur-md shadow-lg">
              <span className="text-[10px] text-purple-300 uppercase tracking-widest block font-medium">Transit</span>
              <span className="text-xs font-bold text-white block mt-0.5">Tanah Merah MRT</span>
            </div>
            <div className="p-3 rounded-xl bg-purple-950/75 border border-purple-800/60 backdrop-blur-md shadow-lg">
              <span className="text-[10px] text-purple-300 uppercase tracking-widest block font-medium">Food Enclave</span>
              <span className="text-xs font-bold text-amber-300 block mt-0.5">Simpang Bedok (1m)</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT THE HOTEL */}
      <section className="py-20 bg-purple-950 text-purple-100 relative overflow-hidden border-t border-purple-800/40">
        {/* Background Image Scrim */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src={HOTEL_INFO.lobbyImage}
            alt="Q Loft Hotels Lobby"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter grayscale"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Feature Highlights Panel with Background Image */}
            <div className="relative rounded-3xl overflow-hidden border border-purple-800/80 shadow-2xl space-y-6">
              <div className="absolute inset-0 z-0">
                <img
                  src={HOTEL_INFO.lobbyImage}
                  alt="Hotel Reception Lobby"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/85 to-purple-950/70" />
              </div>

              <div className="relative z-10 p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400 text-purple-950 flex items-center justify-center font-bold shadow-lg shrink-0">
                    <Star className="w-6 h-6 fill-purple-950" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif-luxury font-bold text-white">Boutique Comfort in East Singapore</h4>
                    <p className="text-xs text-purple-200">Contemporary architecture tailored for leisure & business</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-purple-950/80 border border-purple-800/60 backdrop-blur-md space-y-1">
                    <span className="text-2xl font-serif-luxury font-bold text-amber-300">24/7</span>
                    <p className="text-xs font-semibold text-white">Front Desk Service</p>
                    <p className="text-[10px] text-purple-300">Round-the-clock guest support</p>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-950/80 border border-purple-800/60 backdrop-blur-md space-y-1">
                    <span className="text-2xl font-serif-luxury font-bold text-amber-300">1 Gbps</span>
                    <p className="text-xs font-semibold text-white">Free Optical Wi-Fi</p>
                    <p className="text-[10px] text-purple-300">Ultra-fast fiber connectivity</p>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-950/80 border border-purple-800/60 backdrop-blur-md space-y-1">
                    <span className="text-2xl font-serif-luxury font-bold text-amber-300">12 Mins</span>
                    <p className="text-xs font-semibold text-white">Changi Airport</p>
                    <p className="text-[10px] text-purple-300">Quick taxi / train access</p>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-950/80 border border-purple-800/60 backdrop-blur-md space-y-1">
                    <span className="text-2xl font-serif-luxury font-bold text-amber-300">50m</span>
                    <p className="text-xs font-semibold text-white">Simpang Bedok</p>
                    <p className="text-[10px] text-purple-300">Iconic 24h hawker enclave</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                  About Q Loft Hotels
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
                  Refined Hospitality in the Heart of Bedok
                </h2>
              </div>

              <p className="text-sm text-purple-200 leading-relaxed">
                Q Loft Hotels @ Bedok offers a harmonious blend of chic urban design and tranquil residential serenity. Located in Bedok on the eastern corridor of Singapore, our property provides seamless connectivity to both business hubs and iconic leisure destinations.
              </p>

              <p className="text-sm text-purple-200 leading-relaxed">
                Whether you are visiting Singapore for trade exhibitions at Singapore EXPO, catching a transit flight at Changi Airport, or indulging in local hawker delicacies at Simpang Bedok, our hotel ensures every guest enjoys plush bedding, high-speed Wi-Fi, air-conditioned sanctuary, and 24/7 dedicated reception.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Modern Mezzanine Lofts</h5>
                    <p className="text-[11px] text-purple-300">Dual-level spatial architecture</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Culinary Paradise</h5>
                    <p className="text-[11px] text-purple-300">Steps from Simpang Bedok</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('facilities')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-amber-200 group cursor-pointer"
                >
                  <span>Explore Hotel Facilities & Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: ROOMS & ACCOMMODATION */}
      <section className="py-20 bg-purple-900/30 text-purple-100 border-t border-purple-800/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block mb-2">
                Rooms & Accommodation
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
                Thoughtfully Designed Guest Rooms
              </h2>
            </div>

            <button
              onClick={() => onNavigate('rooms')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-800/60 hover:bg-purple-800 border border-purple-600/40 text-xs font-semibold text-purple-100 transition-colors shrink-0 cursor-pointer"
            >
              <span>View All Rooms Page</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS.slice(0, 3).map((room) => {
              const priceConverted = Math.round(room.priceSGD * rateObj.rateFromSGD);
              return (
                <div
                  key={room.id}
                  className="bg-purple-950/90 border border-purple-800/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl group flex flex-col justify-between hover:border-amber-400/50"
                >
                  {/* Card Room Photo Background Header */}
                  <div className="relative h-48 overflow-hidden bg-purple-900">
                    <img
                      src={room.image}
                      alt={room.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/30 to-transparent" />
                    
                    <span className="absolute top-3 left-3 bg-purple-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider text-purple-200 border border-purple-700/50">
                      {room.category} Category
                    </span>

                    <span className="absolute bottom-3 right-3 bg-purple-950/90 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-400/40 text-amber-300 font-serif-luxury font-bold text-sm shadow">
                      {rateObj.symbol}{priceConverted} <span className="text-[10px] font-sans text-purple-300">/ night</span>
                    </span>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    {/* Room Info */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-serif-luxury font-bold text-white group-hover:text-amber-300 transition-colors">
                        {room.name}
                      </h3>
                      <p className="text-xs text-purple-300 leading-relaxed">
                        {room.description}
                      </p>

                      <div className="pt-2 space-y-1.5 text-xs text-purple-200">
                        <div className="flex items-center justify-between">
                          <span className="text-purple-400">Bedding:</span>
                          <span className="font-medium text-white">{room.bedType}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-purple-400">Capacity:</span>
                          <span className="font-medium text-white">Up to {room.maxGuests} Guests</span>
                        </div>
                      </div>
                    </div>

                    {/* Room Card Footer Actions */}
                    <div className="pt-4 grid grid-cols-2 gap-3 border-t border-purple-800/60">
                      <button
                        onClick={() => onViewRoomDetails(room.id)}
                        className="px-3 py-2 rounded-lg text-xs font-medium text-purple-200 bg-purple-900/60 hover:bg-purple-800/80 border border-purple-700/50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-purple-300" />
                        <span>Details</span>
                      </button>

                      <button
                        onClick={() => onOpenBooking(room.id)}
                        className="px-3 py-2 rounded-lg text-xs font-semibold text-purple-950 bg-amber-300 hover:bg-amber-200 transition-colors shadow flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Book Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4: HOTEL FACILITIES */}
      <section className="py-20 bg-purple-950 text-purple-100 border-t border-purple-800/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Hotel Amenities
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
              Essential Guest Facilities
            </h2>
            <p className="text-xs sm:text-sm text-purple-300">
              Everything required for an effortless, enjoyable stay in Singapore.
            </p>
          </div>

          {/* Facility Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOTEL_FACILITIES.slice(0, 6).map((fac) => (
              <div
                key={fac.id}
                className="bg-purple-900/40 border border-purple-800/60 hover:border-amber-400/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                {/* Photo header for facility */}
                <div className="relative h-40 overflow-hidden bg-purple-950">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/40 to-transparent" />
                  
                  {fac.highlight && (
                    <div className="absolute top-3 right-3 bg-purple-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-400/40 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                      {fac.highlight}
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-purple-950/80 backdrop-blur-md border border-purple-600/50 flex items-center justify-center shadow-md">
                    {iconMap[fac.iconName] || <Bed className="w-5 h-5 text-amber-400" />}
                  </div>
                </div>

                <div className="p-6 space-y-2">
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

        </div>
      </section>

      {/* SECTION 5: WHY STAY WITH US */}
      <section className="py-20 bg-purple-950 text-purple-100 border-t border-purple-800/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Guest Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
              Why Stay With Q Loft Hotels @ Bedok
            </h2>
            <p className="text-xs sm:text-sm text-purple-300">
              Discover what makes our Bedok property a top choice for travelers visiting Singapore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_STAY_REASONS.map((reason) => (
              <div
                key={reason.number}
                className="relative rounded-2xl overflow-hidden border border-purple-800/60 hover:border-amber-400/50 transition-all duration-300 shadow-xl group flex flex-col justify-between min-h-[260px]"
              >
                {/* Background Photo with Scrim */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/90 to-purple-950/70" />
                </div>

                <div className="relative z-10 p-6 space-y-4 flex flex-col justify-between h-full">
                  {/* Number Badge Header */}
                  <div>
                    <div className="inline-block bg-purple-900/90 backdrop-blur-md px-3.5 py-1 rounded-xl border border-amber-400/40 text-amber-300 font-serif-luxury font-bold text-sm shadow">
                      {reason.number}
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-serif-luxury font-bold text-white group-hover:text-amber-300 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-xs text-purple-200 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: CONTACT & BOOKING CTA */}
      <section className="py-20 bg-purple-950 text-purple-100 border-t border-purple-800/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="relative rounded-3xl overflow-hidden border border-purple-700/60 shadow-2xl">
            {/* CTA Background Photo with Scrim */}
            <div className="absolute inset-0 z-0">
              <img
                src={HOTEL_INFO.heroImage}
                alt="Hotel exterior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-950/95 via-indigo-950/90 to-purple-950/95" />
            </div>

            <div className="relative z-10 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              {/* Call to Action Text */}
              <div className="space-y-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
                  Plan Your Trip
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white leading-tight">
                  Plan Your Stay at Q Loft Hotels @ Bedok
                </h2>
                <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                  Ready to experience boutique comfort in Singapore? Book directly with us for best room rates, flexible dates, and personalized assistance.
                </p>

                {/* Hotel Contact Box */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-purple-400 uppercase tracking-widest block">Direct Phone</span>
                      <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="text-base font-bold text-white hover:text-amber-300 transition-colors">
                        {HOTEL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-purple-400 uppercase tracking-widest block">Hotel Address</span>
                      <span className="text-xs font-semibold text-white block">{HOTEL_INFO.address}</span>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={() => onOpenBooking()}
                    className="px-6 py-3 rounded-xl font-semibold text-xs text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-lg cursor-pointer flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Your Stay</span>
                  </button>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3 rounded-xl font-semibold text-xs text-white bg-purple-900/70 hover:bg-purple-800/90 border border-purple-600/50 backdrop-blur-md cursor-pointer flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Contact Us</span>
                  </button>
                </div>
              </div>

              {/* Embedded Map Visual Box */}
              <div className="bg-purple-950/85 backdrop-blur-md border border-purple-800/80 rounded-2xl p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-purple-800/60">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Navigation className="w-4 h-4 text-amber-400" />
                    <span>Bedok Road Location</span>
                  </div>
                  <span className="text-[10px] text-purple-300 bg-purple-900 px-2 py-0.5 rounded">
                    Singapore 469548
                  </span>
                </div>

                {/* Visual Map Mockup with Location Photo Background */}
                <div className="relative h-48 bg-slate-900 rounded-xl overflow-hidden border border-purple-800/60 flex items-center justify-center p-4 text-center">
                  <img
                    src="/src/assets/images/facility_bedok_location_1790325982040.jpg"
                    alt="Bedok location map view"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover filter brightness-50"
                  />
                  <div className="absolute inset-0 bg-purple-950/60 backdrop-blur-xs" />
                  
                  <div className="relative z-10 space-y-2">
                    <div className="w-10 h-10 rounded-full bg-amber-400 text-purple-950 flex items-center justify-center mx-auto shadow-lg animate-bounce">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-white block">Q Loft Hotels @ Bedok</span>
                    <span className="text-[11px] text-purple-200 block">359A Bedok Rd, Singapore 469548</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-purple-200">
                  <div className="flex justify-between">
                    <span className="text-purple-400">MRT Station:</span>
                    <span className="font-semibold text-white">Tanah Merah MRT (700m)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-400">Airport Access:</span>
                    <span className="font-semibold text-white">12 mins drive to SIN</span>
                  </div>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(HOTEL_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl text-center text-xs font-medium text-amber-300 bg-purple-900/60 hover:bg-purple-800/80 border border-purple-700/50 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
