import React, { useState } from 'react';
import { PageId, Currency } from '../types';
import { ROOMS, HOTEL_INFO, CURRENCY_RATES, DEFAULT_FALLBACK_IMAGE } from '../data/hotelData';
import {
  Calendar,
  BedDouble,
  Users,
  Maximize,
  Wifi,
  Check,
  Eye,
  ShieldCheck,
  Phone,
  Sparkles,
  Search,
  CheckCircle2,
  Filter,
  Camera
} from 'lucide-react';

interface RoomsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (roomId?: string) => void;
  onViewRoomDetails: (roomId: string) => void;
  currency: Currency;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onNavigate,
  onOpenBooking,
  onViewRoomDetails,
  currency,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [guestFilter, setGuestFilter] = useState<number>(0);

  const rateObj = CURRENCY_RATES[currency];

  const categories = ['All', 'Loft', 'Executive', 'Family', 'Standard'];

  const filteredRooms = ROOMS.filter((room) => {
    const matchesCategory = activeCategory === 'All' || room.category === activeCategory;
    const matchesGuests = guestFilter === 0 || room.maxGuests >= guestFilter;
    return matchesCategory && matchesGuests;
  });

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_FALLBACK_IMAGE;
  };

  return (
    <div className="pt-20 pb-20 space-y-16">
      
      {/* Rooms Hero Banner with Background Image */}
      <section className="relative py-24 bg-purple-950 overflow-hidden border-b border-purple-800/40">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1600&q=80&auto=format&fit=crop"
            alt="Q Loft Hotels Accommodations Banner"
            onError={handleImageError}
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/80 to-purple-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-300 bg-purple-900/90 border border-purple-700/50 px-3.5 py-1 rounded-full backdrop-blur-md shadow-md">
            Boutique Accommodations
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-white tracking-tight drop-shadow-md">
            Rooms & Loft Suites
          </h1>
          <p className="text-xs sm:text-base text-purple-100 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Choose from our modern mezzanine lofts, executive queen rooms, and spacious family suites in Bedok. All equipped with high-speed Wi-Fi, air conditioning, and plush bedding.
          </p>
        </div>
      </section>

      {/* Filter Bar & Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-2xl bg-purple-900/40 border border-purple-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <span className="text-xs text-purple-400 font-semibold mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-300 text-purple-950 font-bold shadow'
                    : 'bg-purple-950/60 text-purple-200 hover:text-white hover:bg-purple-800/50'
                }`}
              >
                {cat === 'All' ? 'All Rooms' : cat}
              </button>
            ))}
          </div>

          {/* Guest Capacity Filter */}
          <div className="flex items-center gap-2 w-full md:w-auto text-xs text-purple-200">
            <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Capacity:</span>
            <select
              value={guestFilter}
              onChange={(e) => setGuestFilter(Number(e.target.value))}
              className="bg-purple-950 border border-purple-700/60 text-white rounded-lg px-2.5 py-1.5 text-xs focus:outline-none"
            >
              <option value={0}>Any Occupancy</option>
              <option value={1}>1+ Guest</option>
              <option value={2}>2+ Guests</option>
              <option value={4}>4 Guests (Family)</option>
            </select>
          </div>

        </div>
      </section>

      {/* Detailed Room Cards Listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredRooms.length === 0 ? (
          <div className="text-center py-16 bg-purple-950/50 rounded-2xl border border-purple-800/60 space-y-3">
            <p className="text-sm text-purple-300">No rooms match the selected filter criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setGuestFilter(0);
              }}
              className="px-4 py-2 text-xs font-semibold text-purple-950 bg-amber-300 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {filteredRooms.map((room) => {
              const priceConverted = Math.round(room.priceSGD * rateObj.rateFromSGD);

              return (
                <div
                  key={room.id}
                  className="bg-purple-950/90 border border-purple-800/60 rounded-3xl overflow-hidden shadow-2xl hover:border-amber-400/40 transition-all duration-300 flex flex-col lg:flex-row justify-between"
                >
                  {/* Left Column: Room Photo Gallery Preview */}
                  <div className="lg:w-5/12 relative flex flex-col justify-between bg-purple-900 border-b lg:border-b-0 lg:border-r border-purple-800/60">
                    <div className="relative h-64 lg:h-full min-h-[260px] overflow-hidden group">
                      <img
                        src={room.image}
                        alt={room.name}
                        onError={handleImageError}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/20 to-transparent" />

                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="bg-purple-950/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-semibold text-amber-300 border border-purple-700/50 shadow">
                          {room.category} Category
                        </span>
                      </div>

                      {/* Photo Gallery Thumbnails */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                        {room.images.map((imgUrl, imgIdx) => (
                          <div
                            key={imgIdx}
                            onClick={() => onViewRoomDetails(room.id)}
                            className="w-14 h-12 rounded-lg overflow-hidden border border-purple-500/60 shadow-lg cursor-pointer hover:border-amber-400 transition-all shrink-0"
                          >
                            <img
                              src={imgUrl}
                              alt={`${room.name} thumbnail ${imgIdx}`}
                              onError={handleImageError}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        <div
                          onClick={() => onViewRoomDetails(room.id)}
                          className="px-2 py-3 rounded-lg bg-purple-950/85 backdrop-blur-md border border-purple-600/50 text-[10px] text-amber-300 font-semibold cursor-pointer hover:bg-purple-900 flex items-center gap-1"
                        >
                          <Camera className="w-3 h-3" />
                          <span>Photos</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Details & Actions */}
                  <div className="lg:w-7/12 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-900/80 pb-4">
                        <div>
                          <h2 className="text-2xl font-serif-luxury font-bold text-white">
                            {room.name}
                          </h2>
                          <p className="text-xs text-purple-300 mt-0.5">{room.tagline}</p>
                        </div>

                        <div className="bg-purple-900/80 border border-amber-400/30 px-3.5 py-2 rounded-xl text-left sm:text-right shrink-0">
                          <span className="text-[10px] text-purple-300 block">Rate per night</span>
                          <span className="text-xl font-serif-luxury font-bold text-amber-300">
                            {rateObj.symbol}{priceConverted} <span className="text-xs text-purple-200 font-sans">{currency}</span>
                          </span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                        {room.fullDescription}
                      </p>

                      {/* Specs Row */}
                      <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-purple-900/40 border border-purple-800/50 text-xs text-purple-200">
                        <div className="flex items-center gap-2">
                          <BedDouble className="w-4 h-4 text-amber-400 shrink-0" />
                          <div>
                            <span className="text-[10px] text-purple-400 block">Bed</span>
                            <span className="font-medium text-white">{room.bedType}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-amber-400 shrink-0" />
                          <div>
                            <span className="text-[10px] text-purple-400 block">Occupancy</span>
                            <span className="font-medium text-white">Max {room.maxGuests} Guests</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Maximize className="w-4 h-4 text-amber-400 shrink-0" />
                          <div>
                            <span className="text-[10px] text-purple-400 block">Size</span>
                            <span className="font-medium text-white">{room.sizeSqm} m²</span>
                          </div>
                        </div>
                      </div>

                      {/* Room Amenities Checklist */}
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                          Key Amenities & Facilities:
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                          {room.facilities.map((fac, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-1.5 text-purple-200">
                              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span className="line-clamp-1">{fac}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-purple-800/60">
                      <button
                        onClick={() => onViewRoomDetails(room.id)}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-purple-200 bg-purple-900/60 hover:bg-purple-800 border border-purple-700/50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Eye className="w-4 h-4 text-purple-300" />
                        <span>View Full Room Details & Photos</span>
                      </button>

                      <button
                        onClick={() => onOpenBooking(room.id)}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book {room.name}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Room Booking Guarantee Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-purple-700/60 bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 shadow-2xl p-8 sm:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
                Need Special Room Arrangements?
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
                Contact Reception for Group & Extended Stay Inquiries
              </h3>
              <p className="text-xs text-purple-200">
                Planning an extended stay in Singapore or group travel? Our reservation team is happy to assist with custom room allocation and inquiries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="px-6 py-3 rounded-xl font-semibold text-xs text-white bg-purple-800/80 hover:bg-purple-700 border border-purple-600/50 flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call +65 8774 6318</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3 rounded-xl font-semibold text-xs text-purple-950 bg-amber-300 hover:bg-amber-200 shadow cursor-pointer"
              >
                Book Room Now
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
