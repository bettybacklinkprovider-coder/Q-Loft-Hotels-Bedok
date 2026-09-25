import React, { useState } from 'react';
import { PageId, Currency, Room } from './types';
import { ROOMS } from './data/hotelData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [currency, setCurrency] = useState<Currency>('SGD');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingRoomId, setSelectedBookingRoomId] = useState<string | undefined>(undefined);
  const [detailModalRoom, setDetailModalRoom] = useState<Room | null>(null);

  const handleOpenBooking = (roomId?: string) => {
    setSelectedBookingRoomId(roomId);
    setBookingModalOpen(true);
  };

  const handleViewRoomDetails = (roomId: string) => {
    const room = ROOMS.find((r) => r.id === roomId) || null;
    setDetailModalRoom(room);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Top Bar Navigation Header */}
      <Navbar
        activePage={activePage}
        onNavigate={setActivePage}
        onOpenBooking={handleOpenBooking}
        currency={currency}
        onCurrencyChange={setCurrency}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomePage
            onNavigate={setActivePage}
            onOpenBooking={handleOpenBooking}
            onViewRoomDetails={handleViewRoomDetails}
            currency={currency}
          />
        )}

        {activePage === 'rooms' && (
          <RoomsPage
            onNavigate={setActivePage}
            onOpenBooking={handleOpenBooking}
            onViewRoomDetails={handleViewRoomDetails}
            currency={currency}
          />
        )}

        {activePage === 'facilities' && (
          <FacilitiesPage
            onNavigate={setActivePage}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            onNavigate={setActivePage}
            onOpenBooking={handleOpenBooking}
          />
        )}
      </main>

      {/* Shared Footer */}
      <Footer
        onNavigate={setActivePage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Online Reservation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedRoomId={selectedBookingRoomId}
        currency={currency}
      />

      {/* Quick Room Detail Modal */}
      <RoomDetailModal
        room={detailModalRoom}
        onClose={() => setDetailModalRoom(null)}
        onBookRoom={(roomId) => handleOpenBooking(roomId)}
        currency={currency}
      />
    </div>
  );
}
