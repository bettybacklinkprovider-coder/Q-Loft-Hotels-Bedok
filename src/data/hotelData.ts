import { Room, Facility, Attraction, Currency, WhyStayReason, GalleryImage } from '../types';

export const DEFAULT_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&q=80&auto=format&fit=crop";

export const HOTEL_INFO = {
  name: "Q Loft Hotels @ Bedok",
  phone: "+65 8774 6318",
  phoneRaw: "+6587746318",
  address: "359A Bedok Rd, Singapore 469548",
  email: "reservations@qlofthotels.com.sg",
  locationName: "Bedok, Singapore",
  checkInTime: "3:00 PM",
  checkOutTime: "11:00 AM",
  mrtStation: "Tanah Merah MRT (EW4 / CG) & Bedok MRT (EW5)",
  airportDistance: "12 - 15 mins drive from Singapore Changi Airport (SIN)",
  tagline: "Boutique Elegance & Modern Comfort in Bedok",
  heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80&auto=format&fit=crop"
};

export const CURRENCY_RATES: Record<Currency, { symbol: string; rateFromSGD: number }> = {
  SGD: { symbol: 'S$', rateFromSGD: 1.0 },
  USD: { symbol: '$', rateFromSGD: 0.75 },
  EUR: { symbol: '€', rateFromSGD: 0.69 },
  MYR: { symbol: 'RM', rateFromSGD: 3.32 },
  AUD: { symbol: 'A$', rateFromSGD: 1.14 }
};

export const ROOMS: Room[] = [
  {
    id: "deluxe-loft",
    name: "Deluxe Mezzanine Loft",
    tagline: "Dual-level signature suite with high ceilings and ambient lighting",
    category: "Loft",
    description: "Designed with smart spatial verticality, featuring a plush upper-level bedroom and cozy ground lounge.",
    fullDescription: "Our flagship Deluxe Mezzanine Loft offers high ceiling elegance, combining a private upper-floor queen sleeping sanctuary with a comfortable ground workspace and lounging area. Outfitted with high-speed Wi-Fi, smart air conditioning, rain shower, and premium plush bedding.",
    priceSGD: 148,
    maxGuests: 2,
    bedType: "1 Queen Bed (Mezzanine)",
    sizeSqm: 24,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&q=80&auto=format&fit=crop"
    ],
    facilities: ["Free High-Speed Wi-Fi", "Smart Air Conditioning", "Rainfall Shower & Toiletries", "Flat-screen Smart TV", "Mini Fridge & Electric Kettle", "In-Room Safe & Desk"],
    features: ["Signature High Ceiling", "Mezzanine Loft Layout", "Quiet Soundproof Windows", "Daily Housekeeping"]
  },
  {
    id: "executive-queen",
    name: "Executive Queen Room",
    tagline: "Sleek, modern comfort tailored for business travelers and couples",
    category: "Executive",
    description: "Elegant single-level suite featuring a premium Queen bed, dedicated workstation, and refined warm lighting.",
    fullDescription: "The Executive Queen Room provides a tranquil haven for travelers seeking elegance and utility. Enjoy pristine crisp linens, ergonomic workspace, individually controlled climate system, and a spa-inspired en-suite bathroom.",
    priceSGD: 125,
    maxGuests: 2,
    bedType: "1 Queen Bed",
    sizeSqm: 19,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1000&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1000&q=80&auto=format&fit=crop"
    ],
    facilities: ["Free High-Speed Wi-Fi", "Individually Controlled AC", "En-suite Bathroom with Rain Shower", "Work Desk & Ergonomic Chair", "Tea & Coffee Making Station", "Electronic Keycard Entry"],
    features: ["Workstation Friendly", "Plush Hypoallergenic Bedding", "Hairdryer & Bath Amenities", "Luggage Storage Rack"]
  },
  {
    id: "family-suite",
    name: "Superior Family Suite",
    tagline: "Spacious multi-bed setup perfect for families and small groups",
    category: "Family",
    description: "Generously dimensioned room designed for up to 4 guests with double bedding configuration and extra seating.",
    fullDescription: "Travelling with family or friends? The Superior Family Suite delivers ample space and privacy. Features two luxury queen beds, generous wardrobe space, high-definition entertainment TV, and modern bathroom amenities.",
    priceSGD: 210,
    maxGuests: 4,
    bedType: "2 Queen Beds",
    sizeSqm: 32,
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1000&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&q=80&auto=format&fit=crop"
    ],
    facilities: ["Free High-Speed Wi-Fi", "Dual Smart Air Conditioners", "Spacious Private Bathroom", "43-inch Smart TV", "Compact Refrigerator", "Complimentary Bottled Water"],
    features: ["Sleeps up to 4 Guests", "Spacious Floorplan", "Family Amenities", "Extra Clothes Hangers & Closet"]
  },
  {
    id: "compact-queen",
    name: "Cozy Standard Queen",
    tagline: "Efficient, budget-friendly boutique room with all modern essentials",
    category: "Standard",
    description: "Ideal for short stayovers and travelers seeking clean, quiet, and comfortable sleeping accommodation.",
    fullDescription: "Our Cozy Standard Queen maximizes every square meter with custom cabinetry, ultra-comfortable mattress, crisp linens, and en-suite shower facility. Perfect base for exploring Bedok and Changi.",
    priceSGD: 98,
    maxGuests: 2,
    bedType: "1 Queen Bed",
    sizeSqm: 15,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1000&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1000&q=80&auto=format&fit=crop"
    ],
    facilities: ["Free High-Speed Wi-Fi", "Air Conditioning", "En-suite Bathroom", "Smart TV", "Electric Kettle", "Keycard Security Access"],
    features: ["Budget Friendly Luxury", "Quiet Inner Facing", "Daily Housekeeping", "Compact Smart Storage"]
  }
];

export const HOTEL_FACILITIES: Facility[] = [
  {
    id: "fac-rooms",
    title: "Comfortable Modern Rooms",
    description: "Thoughtfully designed boutique guest rooms equipped with premium orthopedic mattresses, crisp cotton linens, and mood lighting.",
    iconName: "Bed",
    highlight: "Orthopedic Quality",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "fac-wifi",
    title: "High-Speed Free Wi-Fi",
    description: "Seamless optical fiber Wi-Fi throughout all guest rooms, loft suites, and public lobby lounge areas.",
    iconName: "Wifi",
    highlight: "Ultra-Fast 1Gbps",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "fac-ac",
    title: "Individual Air Conditioning",
    description: "Quiet inverter air conditioning with touch controls in every room for customized tropical climate comfort.",
    iconName: "Wind",
    highlight: "Smart Climate Control",
    image: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "fac-assistance",
    title: "24/7 Front Desk Assistance",
    description: "Dedicated front desk reception to assist with check-in, late arrivals, local dining recommendations, and transport bookings.",
    iconName: "Headphones",
    highlight: "Always Available",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "fac-location",
    title: "Convenient Bedok Location",
    description: "Situated on Bedok Road right across Simpang Bedok food enclave, minutes to Tanah Merah MRT and Changi Airport.",
    iconName: "MapPin",
    highlight: "Prime Food Enclave",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "fac-housekeeping",
    title: "Daily Housekeeping & Sanitization",
    description: "Rigorous daily room cleaning, fresh towel replenishment, eco-friendly laundry service, and sanitized amenities.",
    iconName: "Sparkles",
    highlight: "Pristine Standards",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "fac-luggage",
    title: "Luggage Storage Service",
    description: "Secure, complimentary luggage storage facility for early arrivals or late flights out of Changi.",
    iconName: "Briefcase",
    highlight: "Free Guest Storage",
    image: "https://images.unsplash.com/photo-1553531384-397c80973a0b?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: "fac-security",
    title: "Keycard Access & 24h CCTV",
    description: "Enhanced security with encrypted keycard locks, digital room safes, and round-the-clock security monitoring.",
    iconName: "ShieldCheck",
    highlight: "Peace of Mind",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80&auto=format&fit=crop"
  }
];

export const WHY_STAY_REASONS: WhyStayReason[] = [
  {
    number: "01",
    title: "Comfortable & Modern Accommodation",
    description: "Enjoy boutique aesthetic loft suites and executive rooms with plush bedding, rain showers, smart entertainment, and quiet air conditioning.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "Unbeatable Bedok Food Paradise Location",
    description: "Located opposite Simpang Bedok & Bedok Shopping Complex—Singapore's famous food haven open until late night with famous local delights.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Quick Access to Changi Airport & Expo",
    description: "Just a 12–15 minute drive to Changi Airport Terminal 1–4 and Jewel Changi, plus 1 MRT stop to Singapore EXPO exhibition center.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "Friendly Hospitality & 24/7 Support",
    description: "Warm, attentive hospitality from a professional team ready to assist with round-the-clock check-in and local travel guidance.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format&fit=crop"
  },
  {
    number: "05",
    title: "Seamless Public Transport Connections",
    description: "Short walk to Tanah Merah MRT station and major bus stops providing direct routes to Marina Bay, Orchard Road, and East Coast Park.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80&auto=format&fit=crop"
  }
];

export const NEARBY_ATTRACTIONS: Attraction[] = [
  {
    name: "Simpang Bedok Food Enclave",
    category: "Dining & Nightlife",
    distance: "50 meters (1 min walk)",
    description: "Famous food strip packed with iconic local eateries, roti prata shops, seafood, halal delicacies, and late-night cafes.",
    timeByTransport: "1 min walk",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&auto=format&fit=crop"
  },
  {
    name: "Tanah Merah MRT Station (EW4/CG)",
    category: "Transport Transit",
    distance: "700 meters",
    description: "Major interchange connecting directly to Changi Airport branch line and East-West Line to City Centre.",
    timeByTransport: "8 mins walk / 2 mins drive",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80&auto=format&fit=crop"
  },
  {
    name: "Singapore EXPO & Changi City Point",
    category: "Shopping & Events",
    distance: "2.5 km",
    description: "Singapore's largest exhibition hall and factory outlet shopping mall with dining, retail, and cinema.",
    timeByTransport: "5 mins drive / 1 MRT stop",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80&auto=format&fit=crop"
  },
  {
    name: "Jewel Changi Airport",
    category: "Landmark & Retail",
    distance: "8.5 km",
    description: "World-class architectural marvel featuring the Rain Vortex indoor waterfall, lush canopy gardens, and luxury retail.",
    timeByTransport: "12 mins drive",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80&auto=format&fit=crop"
  },
  {
    name: "East Coast Park & Beach",
    category: "Recreation & Nature",
    distance: "3.2 km",
    description: "Singapore's favorite coastal park for cycling, seaside dining, water sports, and beach walks.",
    timeByTransport: "7 mins drive",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format&fit=crop"
  },
  {
    name: "Bedok Mall & Bedok Bus Interchange",
    category: "Shopping & Transit",
    distance: "1.8 km",
    description: "Comprehensive suburban shopping mall directly connected to Bedok MRT station.",
    timeByTransport: "4 mins drive / 6 mins bus",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80&auto=format&fit=crop"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "gal-1",
    title: "Deluxe Mezzanine Loft Bed",
    category: "Rooms",
    url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80&auto=format&fit=crop",
    caption: "Spacious dual-level mezzanine suite with high ceilings and plush bedding."
  },
  {
    id: "gal-2",
    title: "Executive Queen Room",
    category: "Rooms",
    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1000&q=80&auto=format&fit=crop",
    caption: "Sleek, modern comfort tailored for business travelers and couples."
  },
  {
    id: "gal-3",
    title: "Superior Family Suite",
    category: "Rooms",
    url: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1000&q=80&auto=format&fit=crop",
    caption: "Generous family room configured with dual queen beds."
  },
  {
    id: "gal-4",
    title: "Rain Shower En-suite Bathroom",
    category: "Rooms",
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&q=80&auto=format&fit=crop",
    caption: "Pristine rain shower bathroom equipped with complimentary toiletries."
  },
  {
    id: "gal-5",
    title: "Hotel Reception & Front Desk",
    category: "Lobby & Reception",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&q=80&auto=format&fit=crop",
    caption: "Warm 24/7 front desk welcome and guest assistance."
  },
  {
    id: "gal-6",
    title: "Boutique Hotel Exterior & Entrance",
    category: "Lobby & Reception",
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1000&q=80&auto=format&fit=crop",
    caption: "Chic contemporary building facade located on Bedok Road."
  },
  {
    id: "gal-7",
    title: "Simpang Bedok Local Food Enclave",
    category: "Dining & Enclave",
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&q=80&auto=format&fit=crop",
    caption: "Famous 24-hour food enclave located directly across the hotel."
  },
  {
    id: "gal-8",
    title: "Singapore Hawker Delights",
    category: "Dining & Enclave",
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&q=80&auto=format&fit=crop",
    caption: "Authentic Asian culinary options within 1 minute walk."
  },
  {
    id: "gal-9",
    title: "Jewel Changi Airport Rain Vortex",
    category: "Location & Attractions",
    url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1000&q=80&auto=format&fit=crop",
    caption: "Just 12-15 minutes drive to Singapore Changi Airport & Jewel."
  },
  {
    id: "gal-10",
    title: "Tanah Merah MRT Station",
    category: "Location & Attractions",
    url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&q=80&auto=format&fit=crop",
    caption: "700m away connecting directly to City Centre and Changi."
  }
];

export const FAQS = [
  {
    q: "What are the check-in and check-out times at Q Loft Hotels @ Bedok?",
    a: "Standard check-in time is from 3:00 PM onwards, and check-out is until 11:00 AM. If you require early check-in or late check-out, please contact our front desk at +65 8774 6318 in advance."
  },
  {
    q: "How far is the hotel from Singapore Changi Airport?",
    a: "Q Loft Hotels @ Bedok is conveniently located approximately 12 to 15 minutes away by taxi/Grab from Changi Airport. Alternatively, you can take the MRT train from Changi Airport MRT to Tanah Merah MRT station."
  },
  {
    q: "Is Wi-Fi free for all guests?",
    a: "Yes! High-speed complimentary Wi-Fi is available throughout all guest rooms, loft suites, and public hotel areas."
  },
  {
    q: "Are there good food options near the hotel?",
    a: "Absolutely. The hotel is situated right on Bedok Road across from Simpang Bedok, one of East Singapore's most celebrated food enclaves with 24-hour supper spots, local hawker stalls, and halal restaurants."
  },
  {
    q: "How can I book or modify a reservation?",
    a: "You can book directly on this website using our 'Book Your Stay' system, call us at +65 8774 6318, or send an email to reservations@qlofthotels.com.sg."
  }
];
