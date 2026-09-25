import React, { useState } from 'react';
import { PageId } from '../types';
import { HOTEL_INFO, FAQS } from '../data/hotelData';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  Plane,
  Train,
  Bus,
  Car,
  ChevronDown,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Room Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const transportGuides = [
    {
      title: "From Changi Airport (SIN)",
      time: "12 - 15 Mins Drive",
      desc: "Take a taxi/Grab directly via PIE/ECP onto Bedok Road. Alternatively, board MRT East-West line at Changi Airport MRT to Tanah Merah interchange.",
      icon: <Plane className="w-5 h-5 text-amber-400" />
    },
    {
      title: "By MRT Train",
      time: "8 Mins Walk from Station",
      desc: "Alight at Tanah Merah MRT Station (EW4/CG Exit B). Walk south along Bedok Road for ~700 meters, or take Bus 2 or 24 for 2 stops.",
      icon: <Train className="w-5 h-5 text-amber-400" />
    },
    {
      title: "By Public Bus",
      time: "Bus Stop Opposite Hotel",
      desc: "Bus services 2, 9, 24, 35, and 45 stop directly along Bedok Road outside Simpang Bedok and Q Loft Hotels.",
      icon: <Bus className="w-5 h-5 text-amber-400" />
    },
    {
      title: "By Taxi / Ride-Hailing (Grab / Gojek)",
      time: "Direct Drop-off",
      desc: "Set drop-off location as 'Q Loft Hotels @ Bedok' or '359A Bedok Rd, Singapore 469548'.",
      icon: <Car className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <div className="pt-20 pb-20 space-y-16">
      
      {/* Hero Header */}
      <section className="relative py-20 bg-purple-950 overflow-hidden border-b border-purple-800/40">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-300 bg-purple-900/60 border border-purple-700/50 px-3.5 py-1 rounded-full">
            Guest Support & Location
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-white tracking-tight">
            Contact Us & Location
          </h1>
          <p className="text-xs sm:text-base text-purple-200 max-w-2xl mx-auto">
            Have questions about your stay, check-in, or room availability? Contact our reception team or visit us in Bedok, Singapore.
          </p>
        </div>
      </section>

      {/* Primary Contact & Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Phone Call */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-purple-950/90 border border-purple-800/60 rounded-3xl p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block">
                  Hotel Details
                </span>
                <h2 className="text-2xl font-serif-luxury font-bold text-white mt-1">
                  Q Loft Hotels @ Bedok
                </h2>
              </div>

              <div className="space-y-4 text-xs text-purple-200">
                {/* Clickable Phone */}
                <div className="p-4 rounded-xl bg-purple-900/40 border border-purple-800/50 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-[10px] text-purple-400 uppercase tracking-widest block">Reception Desk</span>
                    <a
                      href={`tel:${HOTEL_INFO.phoneRaw}`}
                      className="text-base font-bold text-white hover:text-amber-300 transition-colors block"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                    <p className="text-[11px] text-purple-300">Tap to call on mobile</p>
                  </div>
                </div>

                {/* Address */}
                <div className="p-4 rounded-xl bg-purple-900/40 border border-purple-800/50 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-purple-400 uppercase tracking-widest block">Address</span>
                    <span className="text-xs font-semibold text-white block mt-0.5">{HOTEL_INFO.address}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 rounded-xl bg-purple-900/40 border border-purple-800/50 flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-purple-400 uppercase tracking-widest block">Reservations Email</span>
                    <a href={`mailto:${HOTEL_INFO.email}`} className="text-xs font-medium text-purple-200 hover:text-white">
                      {HOTEL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-4 rounded-xl bg-purple-900/40 border border-purple-800/50 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-purple-400 uppercase tracking-widest block">Reception Schedule</span>
                    <span className="text-xs font-medium text-white block">24 Hours / 7 Days Front Desk</span>
                    <span className="text-[11px] text-purple-300 block">Check-in: 3PM | Check-out: 11AM</span>
                  </div>
                </div>
              </div>

              {/* Call Now & Book CTAs */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="px-4 py-3 rounded-xl font-bold text-xs text-white bg-purple-800/80 hover:bg-purple-700 border border-purple-600/50 flex items-center justify-center gap-2 text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Now</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="px-4 py-3 rounded-xl font-bold text-xs text-purple-950 bg-amber-300 hover:bg-amber-200 shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Stay</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-purple-950/90 border border-purple-800/60 rounded-3xl p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block">
                  Send Message
                </span>
                <h2 className="text-2xl font-serif-luxury font-bold text-white mt-1">
                  Inquire & Connect
                </h2>
                <p className="text-xs text-purple-300 mt-1">
                  Fill out the form below and our guest management team will respond promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-purple-900/40 border border-emerald-400/50 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-serif-luxury font-bold text-white">
                    Inquiry Transmitted!
                  </h3>
                  <p className="text-xs text-purple-200 max-w-sm mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our front desk reception team will contact you shortly via email at <span className="underline">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'Room Inquiry', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-purple-950 bg-amber-300 rounded-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-purple-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Lim"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-purple-900/50 border border-purple-700/60 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-purple-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="david@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-purple-900/50 border border-purple-700/60 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-purple-300 mb-1">Mobile / Phone</label>
                      <input
                        type="tel"
                        placeholder="+65 8123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-purple-900/50 border border-purple-700/60 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-purple-300 mb-1">Inquiry Topic</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-purple-900/50 border border-purple-700/60 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="Room Inquiry">Room & Rate Inquiry</option>
                        <option value="Group Booking">Group & Extended Stay</option>
                        <option value="Check-in Guidance">Late Check-in Assistance</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-purple-300 mb-1">Your Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please share details about your travel dates, number of guests, or special requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-purple-900/50 border border-purple-700/60 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-xs text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Message to Reception</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Google Maps / Location Visual Embed Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block">
              Map & Coordinates
            </span>
            <h2 className="text-3xl font-serif-luxury font-bold text-white">
              Location Map: Bedok Road, Singapore
            </h2>
          </div>

          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(HOTEL_INFO.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-900/60 hover:bg-purple-800 border border-purple-700/50 text-xs font-semibold text-amber-300 shrink-0"
          >
            <span>Open Interactive Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Map Box */}
        <div className="relative h-96 rounded-3xl overflow-hidden border border-purple-800/80 bg-purple-950 shadow-2xl flex items-center justify-center">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 max-w-md p-6 rounded-2xl bg-purple-950/90 backdrop-blur-md border border-purple-600/50 text-center space-y-3 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-amber-400 text-purple-950 flex items-center justify-center mx-auto font-bold shadow-lg">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif-luxury font-bold text-white">
              Q Loft Hotels @ Bedok
            </h3>
            <p className="text-xs text-purple-200">
              {HOTEL_INFO.address}
            </p>
            <p className="text-[11px] text-amber-300">
              Directly opposite Simpang Bedok Food Enclave · 700m to Tanah Merah MRT
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(HOTEL_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-xs font-bold text-purple-950 bg-amber-300 rounded-lg shadow"
            >
              Get Driving & MRT Directions
            </a>
          </div>
        </div>
      </section>

      {/* Transportation Guide Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            How to Reach Us
          </span>
          <h2 className="text-3xl font-serif-luxury font-bold text-white">
            Transportation Guide
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transportGuides.map((guide, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-purple-950/80 border border-purple-800/60 space-y-3 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-purple-900/60 border border-purple-700/50">
                  {guide.icon}
                </div>
                <span className="text-[10px] font-semibold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded">
                  {guide.time}
                </span>
              </div>
              <h3 className="text-base font-serif-luxury font-bold text-white">{guide.title}</h3>
              <p className="text-xs text-purple-300 leading-relaxed">{guide.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Guest Questions
          </span>
          <h2 className="text-3xl font-serif-luxury font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-purple-950/90 border border-purple-800/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between text-sm font-semibold text-white hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs text-purple-200 leading-relaxed border-t border-purple-900/50 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
