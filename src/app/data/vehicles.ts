export type Vehicle = {
  id: string;
  name: string;
  category: "Executive Sedan" | "Luxury SUV" | "Vintage" | "Van";
  passengers: number;
  luggage: number;
  image: string;
  features: string[];
  description: string;
  idealFor: string[];
};

export const vehicles: Vehicle[] = [
  {
    id: "mercedes-s-class",
    name: "Mercedes S-Class",
    category: "Executive Sedan",
    passengers: 3,
    luggage: 3,
    image:
      "https://images.unsplash.com/photo-1763789381416-7b94c5f97560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMHMlMjBjbGFzcyUyMGJsYWNrJTIwbHV4dXJ5fGVufDF8fHx8MTc3NDAzNzM2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Leather interior",
      "Climate control",
      "Wi-Fi",
      "Refreshments",
      "Privacy glass",
      "Phone chargers",
    ],
    description:
      "The Mercedes S-Class represents the pinnacle of luxury and comfort. With its spacious interior, cutting-edge technology, and smooth ride, it's perfect for executive travel and airport transfers.",
    idealFor: ["Airport transfers", "Corporate travel", "Business meetings", "VIP clients"],
  },
  {
    id: "bmw-7-series",
    name: "BMW 7 Series",
    category: "Executive Sedan",
    passengers: 3,
    luggage: 3,
    image:
      "https://images.unsplash.com/photo-1731142582229-e0ee70302c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibXclMjA3JTIwc2VyaWVzJTIwc2VkYW58ZW58MXx8fHwxNzczOTIxOTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Premium leather",
      "Massage seats",
      "Entertainment system",
      "Wi-Fi",
      "Ambient lighting",
      "Refreshments",
    ],
    description:
      "The BMW 7 Series combines dynamic performance with unparalleled luxury. Its sophisticated design and advanced features make it ideal for discerning clients who appreciate both style and substance.",
    idealFor: ["Executive travel", "Corporate events", "Airport transfers", "City tours"],
  },
  {
    id: "range-rover",
    name: "Range Rover",
    category: "Luxury SUV",
    passengers: 4,
    luggage: 5,
    image:
      "https://images.unsplash.com/photo-1506616995931-556bc0c90c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYW5nZSUyMHJvdmVyJTIwbHV4dXJ5JTIwc3V2fGVufDF8fHx8MTc3NDAzNzM3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Spacious interior",
      "All-weather capability",
      "Premium sound system",
      "Panoramic roof",
      "Wi-Fi",
      "Extra luggage space",
    ],
    description:
      "The Range Rover offers commanding presence and exceptional comfort. Perfect for families, groups, or clients requiring extra luggage space, it delivers luxury without compromise.",
    idealFor: [
      "Family travel",
      "Airport transfers",
      "Long distance",
      "Multiple passengers",
    ],
  },
  {
    id: "rolls-royce-phantom",
    name: "Rolls-Royce Phantom",
    category: "Vintage",
    passengers: 3,
    luggage: 2,
    image:
      "https://images.unsplash.com/photo-1765475886139-5dd49743cd86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xscyUyMHJveWNlJTIwcGhhbnRvbSUyMHZpbnRhZ2V8ZW58MXx8fHwxNzc0MDM3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Classic elegance",
      "Handcrafted interior",
      "Chauffeur in formal attire",
      "Red carpet service",
      "Champagne service",
      "Wedding decorations",
    ],
    description:
      "Our vintage Rolls-Royce Phantom is the epitome of timeless elegance. Perfect for weddings and special occasions, this classic beauty creates unforgettable memories.",
    idealFor: ["Weddings", "Special events", "Anniversaries", "Photo shoots"],
  },
  {
    id: "mercedes-v-class",
    name: "Mercedes V-Class",
    category: "Van",
    passengers: 7,
    luggage: 8,
    image:
      "https://images.unsplash.com/photo-1565340380388-6ecb7426fc63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMHYlMjBjbGFzcyUyMHZhbnxlbnwxfHx8fDE3NzQwMzczNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Seats up to 7",
      "Large luggage capacity",
      "Wi-Fi",
      "Individual climate control",
      "Entertainment system",
      "Conference seating",
    ],
    description:
      "The Mercedes V-Class is perfect for group travel without sacrificing luxury. Spacious, comfortable, and equipped with premium amenities, it's ideal for families or business teams.",
    idealFor: [
      "Group travel",
      "Family trips",
      "Corporate teams",
      "Airport transfers",
    ],
  },
  {
    id: "audi-a8",
    name: "Audi A8",
    category: "Executive Sedan",
    passengers: 3,
    luggage: 3,
    image:
      "https://images.unsplash.com/photo-1680446670454-8cd71eeef684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMHMlMjBjbGFzcyUyMGludGVyaW9yfGVufDF8fHx8MTc3NDAzNzA5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Advanced technology",
      "Quattro all-wheel drive",
      "Matrix LED lights",
      "Premium sound",
      "Wi-Fi",
      "Climate control",
    ],
    description:
      "The Audi A8 blends cutting-edge technology with refined luxury. Its sophisticated design and advanced features provide an exceptional travel experience for discerning clients.",
    idealFor: ["Business travel", "Airport transfers", "Corporate events", "Executive commute"],
  },
];
