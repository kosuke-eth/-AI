import React, { useState } from 'react';
import { MapPin, Calendar, Wallet, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TravelFormProps {
  onSubmit: (data: {
    destination: string;
    duration: number;
    budget: string;
    interests: string[];
  }) => void;
  isLoading: boolean;
}

export function TravelForm({ onSubmit, isLoading }: TravelFormProps) {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    destination: '',
    duration: 3,
    budget: 'medium',
    interests: [] as string[],
  });

  const interestOptions = {ja: [
    '文化', '自然', 'グルメ', 'ショッピング',
    '歴史', 'アドベンチャー', 'リラックス', '写真撮影'
  ], en: [
    'Culture', 'Nature', 'Gourmet', 'Shopping',
    'History', 'Adventure', 'Relax', 'Photography'
  ], zh: [
    '文化','自然','美食','購物',
    '歷史','冒險','放鬆','攝影'
  ]};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-6 space-y-6">
      <div className="space-y-4">
        <div>
          <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span>{t("TravelForm.destination")}</span>
          </label>
          <input
            type="text"
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder= {t("TravelForm.placeholder")}
            required
          />
        </div>

        <div>
          <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span>{t('TravelForm.stayday')}</span>
          </label>
          <input
            type="number"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
            min="1"
            max="30"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
            <Wallet className="h-5 w-5 text-blue-600" />
            <span>{t("TravelForm.budget")}</span>
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="reasonable">{t('TravelForm.reasonable')}</option>
            <option value="medium">{t('TravelForm.medium')}</option>
            <option value="luxury">{t('TravelForm.luxury')}</option>
          </select>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
            <Heart className="h-5 w-5 text-blue-600" />
            <span>{t('TravelForm.experience')}</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {interestOptions[i18n.language].map((interest) => (
              <label key={interest} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.interests.includes(interest)}
                  onChange={(e) => {
                    const newInterests = e.target.checked
                      ? [...formData.interests, interest]
                      : formData.interests.filter(i => i !== interest);
                    setFormData({ ...formData, interests: newInterests });
                  }}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">{interest}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 px-6 text-white font-medium rounded-md 
          ${isLoading 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700 transition-colors'
          }`}
      >
        {isLoading ? t("TravelForm.loading") : t("TravelForm.submit")}
      </button>
    </form>
  );
}
