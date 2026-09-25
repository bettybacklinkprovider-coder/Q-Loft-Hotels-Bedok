export type PageId = 'home' | 'rooms' | 'facilities' | 'contact';

export type Currency = 'SGD' | 'USD' | 'EUR' | 'MYR' | 'AUD';

export interface Room {
  id: string;
  name: string;
  tagline: string;
  category: 'Loft' | 'Executive' | 'Family' | 'Standard';
  description: string;
  fullDescription: string;
  priceSGD: number;
  maxGuests: number;
  bedType: string;
  sizeSqm: number;
  image: string;
  images: string[];
  facilities: string[];
  features: string[];
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
  image: string;
}

export interface WhyStayReason {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface Attraction {
  name: string;
  category: string;
  distance: string;
  description: string;
  timeByTransport: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Rooms' | 'Lobby & Reception' | 'Dining & Enclave' | 'Location & Attractions';
  url: string;
  caption: string;
}

export interface BookingDetails {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
  currency: Currency;
  totalNights: number;
  totalPrice: number;
  bookingRef?: string;
}
