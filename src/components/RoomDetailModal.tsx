import React, { useState } from 'react';
import { Room, Currency } from '../types';
import { CURRENCY_RATES, HOTEL_INFO, DEFAULT_FALLBACK_IMAGE } from '../data/hotelData';
import { X, Check, BedDouble, Users, Maximize, Wifi, ShieldCheck, Calendar, Sparkles, Camera } from 'lucide-react';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
  currency: Currency;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onBookRoom,
  currency,
}) => {
  if (!room) return null;

  const [activeImage, setActiveImage] = useState<string>(room.image || DEFAULT_FALLBACK_IMAGE);

  const rateObj = CURRENCY_RATES[currency];
  const convertedPrice = Math.round(room.priceSGD * rateObj.rateFromSGD);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_FALLBACK_IMAGE;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-purple-950 border border-purple-700/60 rounded-3xl shadow-2xl overflow-hidden text-purple-100 my-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-purple-800/60 bg-purple-900/40">
          <div>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-amber-300 block">
              {room.category} Accommodation
            </span>
            <h3 className="text-2xl font-serif-luxury font-bold text-white">{room.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-purple-300 hover:text-white hover:bg-purple-800/50 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Main Room Image Display */}
          <div className="space-y-3">
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-purple-800/80 bg-purple-900">
              <img
                src={activeImage}
                alt={room.name}
                onError={handleImageError}
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-purple-950/90 border border-purple-700/50 text-amber-300 backdrop-blur-md shadow">
                  {room.bedType}
                </span>

                <div className="text-right bg-purple-950/90 backdrop-blur-md border border-amber-400/40 px-3.5 py-1.5 rounded-xl shadow-xl">
                  <span className="text-[10px] text-purple-300 block">From</span>
                  <span className="text-lg font-serif-luxury font-bold text-amber-300">
                    {rateObj.symbol}{convertedPrice} <span className="text-xs font-sans text-purple-200">/ night</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Room Image Thumbnails */}
            {room.images && room.images.length > 0 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                <span className="text-[10px] text-purple-400 font-semibold uppercase tracking-wider flex items-center gap-1 shrink-0">
                  <Camera className="w-3.5 h-3.5 text-amber-400" /> Photos:
                </span>
                {room.images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeImage === imgUrl ? 'border-amber-400 scale-105 shadow-md' : 'border-purple-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Room photo ${idx + 1}`}
                      onError={handleImageError}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-800/50 flex items-center gap-2.5">
              <BedDouble className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-purple-400 block text-[10px]">Bed Type</span>
                <span className="text-white font-medium">{room.bedType}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-800/50 flex items-center gap-2.5">
              <Users className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-purple-400 block text-[10px]">Capacity</span>
                <span className="text-white font-medium">Up to {room.maxGuests} Guests</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-800/50 flex items-center gap-2.5">
              <Maximize className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-purple-400 block text-[10px]">Room Size</span>
                <span className="text-white font-medium">{room.sizeSqm} m²</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-800/50 flex items-center gap-2.5">
              <Wifi className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-purple-400 block text-[10px]">Wi-Fi Speed</span>
                <span className="text-white font-medium">1 Gbps Free</span>
              </div>
            </div>
          </div>

          {/* Room Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
              Room Overview
            </h4>
            <p className="text-xs text-purple-200 leading-relaxed">
              {room.fullDescription}
            </p>
          </div>

          {/* Key Facilities & Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Key Room Facilities
              </h4>
              <ul className="space-y-2 text-xs">
                {room.facilities.map((fac, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-purple-200">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{fac}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Signature Highlights
              </h4>
              <ul className="space-y-2 text-xs">
                {room.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-purple-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Bar */}
          <div className="p-4 rounded-xl bg-purple-900/60 border border-purple-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] text-purple-300 block">
                Best Rate Guarantee · Pay at Check-in
              </span>
              <span className="text-xs text-purple-200">
                Location: {HOTEL_INFO.address}
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookRoom(room.id);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-semibold text-xs text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book {room.name} Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
