import {useTranslation} from 'react-i18next';
import { Star, MapPin, DollarSign } from 'lucide-react';
import type { AIResponse } from '../types';

interface ResultsProps {
  response: AIResponse | null;
}

export function Results({ response }: ResultsProps) {
  if (!response) return null;
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{t("Results.hotels")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {response.hotelSuggestions.map((hotel, index) => (
            <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 relative">
                <img
                  src={`https://prcdn.freetls.fastly.net/release_image/7398/1063/7398-1063-b695d3f800acfc431b4cb80932f1e327-1620x1080.jpg?format=jpeg&auto=webp&quality=85%2C65&width=1950&height=1350&fit=bounds`}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-bold text-lg text-gray-800">{hotel.name}</h3>
                <div className="flex items-center space-x-1 text-yellow-400">
                  {[...Array(hotel.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{hotel.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm">{hotel.priceRange}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <p className="text-sm text-gray-500">
                    {hotel.amenities.join(' • ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
