export interface TravelPlan {
  destination: string;
  duration: number;
  budget: string;
  interests: string[];
}

export interface HotelSuggestion {
  name: string;
  location: string;
  priceRange: string;
  rating: number;
  amenities: string[];
}

export interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface AIResponse {
  travelPlan: string;
  hotelSuggestions: HotelSuggestion[];
}