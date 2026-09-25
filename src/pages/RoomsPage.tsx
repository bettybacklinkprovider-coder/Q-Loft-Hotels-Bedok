import React, { useState } from 'react';
import { PageId, Currency } from '../types';
import { ROOMS, HOTEL_INFO, CURRENCY_RATES } from '../data/hotelData';
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
  Filter
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

  return (
    <div className="pt-20 pb-20 space-y-16">
      
      {/* Rooms Hero Banner */}
      <section className="relative py-20 bg-purple-950 overflow-hidden border-b border-purple-800/40">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={ROOMS[0].image}
            alt="Q Loft Rooms Hero"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter blur-xs"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-purple-950/80 to-purple-950" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-300 bg-purple-900/60 border border-purple-700/50 px-3.5 py-1 rounded-full">
            Boutique Accommodations
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-white tracking-tight">
            Rooms & Loft Suites
          </h1>
          <p className="text-xs sm:text-base text-purple-200 max-w-2xl mx-auto">
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
            {filteredRooms.map((room, idx) => {
              const priceConverted = Math.round(room.priceSGD * rateObj.rateFromSGD);
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={room.id}
                  className="bg-purple-950/90 border border-purple-800/60 rounded-3xl overflow-hidden shadow-2xl hover:border-amber-400/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
                >
                  {/* Image Block */}
                  <div className={`relative h-72 lg:h-auto lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={room.image}
                      alt={room.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent lg:hidden" />
                    
                    <div className="absolute top-4 left-4 bg-purple-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-purple-700/50 text-xs font-semibold text-amber-300">
                      {room.category} Category
                    </div>
                  </div>

                  {/* Room Info Block */}
                  <div className={`p-8 lg:col-span-7 flex flex-col justify-between space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-800/60 pb-4">
                        <div>
                          <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
                            {room.name}
                          </h2>
                          <p className="text-xs text-amber-300 mt-0.5">{room.tagline}</p>
                        </div>

                        {/* Pricing Badge */}
                        <div className="text-left sm:text-right bg-purple-900/60 border border-amber-400/30 px-4 py-2 rounded-xl shrink-0">
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
                        <span>View Full Room Details</span>
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
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 border border-purple-700/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
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
              className="px-6 py-3 rounded-xl font-semibold text-xs text-white bg-purple-800/80 hover:bg-purple-700 border border-purple-600/50 flex items-center justify-center gap-2"
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
      </section>

    </div>
  );
};
