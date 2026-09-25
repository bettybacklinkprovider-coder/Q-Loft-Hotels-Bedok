import React, { useState } from 'react';
import { Room, Currency, BookingDetails } from '../types';
import { ROOMS, HOTEL_INFO, CURRENCY_RATES } from '../data/hotelData';
import { X, Calendar, Users, CheckCircle2, Phone, Mail, User, ShieldCheck, ArrowRight, BedDouble } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string;
  currency: Currency;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedRoomId,
  currency,
}) => {
  const defaultRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];

  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [step, setStep] = useState<'details' | 'confirm'>('details');
  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(tomorrowStr);
  const [guests, setGuests] = useState(2);
  const [roomId, setRoomId] = useState(defaultRoom.id);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [bookingResult, setBookingResult] = useState<BookingDetails | null>(null);

  if (!isOpen) return null;

  const currentRoom = ROOMS.find((r) => r.id === roomId) || ROOMS[0];
  const rateObj = CURRENCY_RATES[currency];

  // Calculate nights
  const dIn = new Date(checkIn);
  const dOut = new Date(checkOut);
  const diffTime = Math.max(dOut.getTime() - dIn.getTime(), 1000 * 3600 * 24);
  const totalNights = Math.ceil(diffTime / (1000 * 3600 * 24)) || 1;

  const pricePerNightConverted = Math.round(currentRoom.priceSGD * rateObj.rateFromSGD);
  const totalPriceConverted = pricePerNightConverted * totalNights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) return;

    const ref = 'QLB-' + Math.floor(100000 + Math.random() * 900000);
    const details: BookingDetails = {
      checkIn,
      checkOut,
      guests,
      roomId,
      guestName,
      guestEmail,
      guestPhone,
      specialRequests,
      currency,
      totalNights,
      totalPrice: totalPriceConverted,
      bookingRef: ref,
    };

    setBookingResult(details);
    setStep('confirm');
  };

  const handleReset = () => {
    setStep('details');
    setBookingResult(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-purple-950 border border-purple-700/60 rounded-2xl shadow-2xl overflow-hidden text-purple-100 my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-purple-800/60 bg-purple-900/40">
          <div>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-amber-300 block">
              Direct Hotel Booking
            </span>
            <h3 className="text-xl font-serif-luxury font-bold text-white">
              {step === 'details' ? 'Reserve Your Stay at Q Loft Hotels' : 'Reservation Confirmed!'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-purple-300 hover:text-white hover:bg-purple-800/50 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {step === 'details' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Room Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                Select Room / Suite
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ROOMS.map((r) => {
                  const isSelected = r.id === roomId;
                  const roomPriceConverted = Math.round(r.priceSGD * rateObj.rateFromSGD);
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRoomId(r.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-purple-800/80 border-amber-400 ring-2 ring-amber-400/30'
                          : 'bg-purple-900/30 border-purple-800/60 hover:bg-purple-900/60 hover:border-purple-600'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">{r.name}</span>
                        <span className="text-xs font-semibold text-amber-300">
                          {rateObj.symbol}{roomPriceConverted}/nt
                        </span>
                      </div>
                      <p className="text-[11px] text-purple-300 mt-1 line-clamp-1">{r.tagline}</p>
                      <div className="flex items-center gap-2 mt-2 text-[10px] text-purple-400">
                        <span className="flex items-center gap-1">
                          <BedDouble className="w-3 h-3" /> {r.bedType}
                        </span>
                        <span>·</span>
                        <span>Max {r.maxGuests} Guests</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date & Guest Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-purple-900/40 border border-purple-800/50">
              <div>
                <label className="block text-[11px] font-medium text-purple-300 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" /> Check-in Date
                </label>
                <input
                  type="date"
                  min={todayStr}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-purple-950 border border-purple-700/60 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-purple-300 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" /> Check-out Date
                </label>
                <input
                  type="date"
                  min={checkIn}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-purple-950 border border-purple-700/60 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-purple-300 mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-amber-400" /> Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-purple-950 border border-purple-700/60 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  {Array.from({ length: currentRoom.maxGuests }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price Summary Strip */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-900 to-indigo-950 border border-amber-400/30">
              <div>
                <span className="text-xs text-purple-300 block">Total Stay Duration:</span>
                <span className="text-sm font-semibold text-white">
                  {totalNights} {totalNights === 1 ? 'Night' : 'Nights'} ({rateObj.symbol}
                  {pricePerNightConverted} / night)
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-purple-300 block">Estimated Total</span>
                <span className="text-xl font-serif-luxury font-bold text-amber-300">
                  {rateObj.symbol}
                  {totalPriceConverted} {currency}
                </span>
              </div>
            </div>

            {/* Guest Personal Information */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                Guest Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-purple-300 mb-1 flex items-center gap-1">
                    <User className="w-3 h-3 text-purple-400" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Tan"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-purple-900/50 border border-purple-700/60 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-purple-300 mb-1 flex items-center gap-1">
                    <Mail className="w-3 h-3 text-purple-400" /> Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-purple-900/50 border border-purple-700/60 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-purple-300 mb-1 flex items-center gap-1">
                  <Phone className="w-3 h-3 text-purple-400" /> Contact Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+65 9123 4567"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full bg-purple-900/50 border border-purple-700/60 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] text-purple-300 mb-1">
                  Special Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Quiet room preference, late check-in time..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-purple-900/50 border border-purple-700/60 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-between border-t border-purple-800/60">
              <div className="flex items-center gap-1.5 text-[11px] text-purple-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No instant charge. Pay at front desk check-in.</span>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl font-semibold text-xs text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-lg cursor-pointer flex items-center gap-2"
              >
                <span>Confirm Reservation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Receipt State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs text-amber-300 font-medium uppercase tracking-widest block">
                Booking Reference
              </span>
              <p className="text-2xl font-mono font-bold text-white mt-1">
                {bookingResult?.bookingRef}
              </p>
              <p className="text-xs text-purple-300 mt-2">
                Thank you, <strong className="text-white">{bookingResult?.guestName}</strong>! Your reservation request at Q Loft Hotels @ Bedok has been logged.
              </p>
            </div>

            <div className="bg-purple-900/40 border border-purple-800/60 rounded-xl p-4 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-purple-800/40 pb-2">
                <span className="text-purple-300">Hotel:</span>
                <span className="text-white font-medium">{HOTEL_INFO.name}</span>
              </div>
              <div className="flex justify-between border-b border-purple-800/40 pb-2">
                <span className="text-purple-300">Room:</span>
                <span className="text-white font-medium">{currentRoom.name}</span>
              </div>
              <div className="flex justify-between border-b border-purple-800/40 pb-2">
                <span className="text-purple-300">Check-in:</span>
                <span className="text-white font-medium">{bookingResult?.checkIn} (from 3:00 PM)</span>
              </div>
              <div className="flex justify-between border-b border-purple-800/40 pb-2">
                <span className="text-purple-300">Check-out:</span>
                <span className="text-white font-medium">{bookingResult?.checkOut} (by 11:00 AM)</span>
              </div>
              <div className="flex justify-between border-b border-purple-800/40 pb-2">
                <span className="text-purple-300">Total Price:</span>
                <span className="text-amber-300 font-bold">
                  {rateObj.symbol}{bookingResult?.totalPrice} {currency} ({totalNights} nights)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Contact:</span>
                <span className="text-white">{bookingResult?.guestPhone}</span>
              </div>
            </div>

            <p className="text-[11px] text-purple-300">
              A confirmation email has been dispatched to <span className="text-white underline">{bookingResult?.guestEmail}</span>. Need assistance? Call our reception desk at <strong className="text-amber-300">{HOTEL_INFO.phone}</strong>.
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl font-semibold text-xs text-purple-950 bg-amber-300 hover:bg-amber-200 shadow cursor-pointer"
            >
              Close & Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
