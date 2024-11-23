import { useState } from 'react';
import axios from 'axios';
import { TravelForm } from '../components/TravelForm';
import { Results } from '../components/Results';
import { ErrorMessage } from '../components/ErrorMessage';
import { LoadingState } from '../components/LoadingState';
import { ChatInterface } from '../components/ChatInterface';
import type { AIResponse, TravelPlan, Message } from '../types';
import { useTranslation } from 'react-i18next';

function Planning() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<AIResponse | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const { t, i18n } = useTranslation();

  const handleSubmit = async (formData: TravelPlan) => {
    setIsLoading(true);
    setError(null);
    setShowChat(true);

    // Budget translations
    const budget_trans_ja = { reasonable: "リーズナブル", medium: "ミディアム", luxury: "ラグジュアリー" };
    const budget_trans_zh = { reasonable: "合理", medium: "中等", luxury: "豪華" };

    // Content generation based on language
    let content = '';
    try {
      if (i18n.language === 'ja') {
        content = formData.interests && formData.interests.length > 0
          ? `人数${formData.destination}名で、${formData.duration}日間の旅行を計画しています。予算は${budget_trans_ja[formData.budget]}で、${formData.interests.join('、')}に興味があります。日本語でお願いします。`
          : `人数${formData.destination}名で、${formData.duration}日間の旅行を計画しています。予算は${budget_trans_ja[formData.budget]}です。日本語でお願いします。`;
      } else if (i18n.language === 'zh') {
        content = formData.interests && formData.interests.length > 0
          ? `我計劃和${formData.destination}人一起進行為期 ${formData.duration}天的旅行。我的預算是${budget_trans_zh[formData.budget]}，而且我對${formData.interests.join(',')}感興趣。我希望它是中文的。`
          : `我計劃和${formData.destination}人一起進行為期 ${formData.duration}天的旅行。我的預算是${budget_trans_zh[formData.budget]}，我希望它是中文的。`;
      } else {
        content = formData.interests && formData.interests.length > 0
          ? `I am planning a trip with ${formData.destination} people for ${formData.duration} days. The budget is ${formData.budget} and I'm interested in ${formData.interests.join(',')}, please write it in English.`
          : `I am planning a trip with ${formData.destination} people for ${formData.duration} days. The budget is ${formData.budget}, please write it in English.`;
      }
    } catch (error) {
      setError('コンテンツの生成中にエラーが発生しました。');
      console.error('Error generating content:', error);
      setIsLoading(false);
      return;
    }

    const initialMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: content,
      timestamp: new Date(),
    };

    setMessages([initialMessage]);

    // API request
    try {
      const response = await axios.post(
        'https://api.dify.ai/v1/chat-messages',
        {
          inputs: {},
          query: JSON.stringify({ initialMessage: initialMessage.content }),
          conversation_id: "",
          user: "abc-123",
          response_mode: 'blocking',
        },
        {
          headers: {
            Authorization: `Bearer app-8wxn7EdG07h2yMQkP1JnbwyU`,
            'Content-Type': 'application/json',
          },
        }
      );

      const aiResponse: AIResponse = {
        travelPlan: response.data.answer,
        hotelSuggestions: [
          {
            name: "パレスホテル東京",
            location: "丸の内",
            priceRange: "高級",
            rating: 5,
            amenities: ["スパ", "プール", "高級レストラン", "フィットネス"],
          },
          {
            name: "セルリアンタワー東急ホテル",
            location: "渋谷",
            priceRange: "プレミアム",
            rating: 4,
            amenities: ["レストラン", "バー", "ビジネスセンター", "フィットネス"],
          },
          {
            name: "相鉄フレッサイン銀座七丁目",
            location: "銀座",
            priceRange: "スタンダード",
            rating: 3,
            amenities: ["朝食ビュッフェ", "コインランドリー", "ビジネスコーナー"],
          },
        ],
      };

      setResponse(aiResponse);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: aiResponse.travelPlan,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setError('申し訳ありません。エラーが発生しました。もう一度お試しください。');
      console.error('Error fetching AI response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (message: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://api.dify.ai/v1/chat-messages',
        {
          inputs: {},
          query: JSON.stringify({ userMessage: userMessage.content }),
          conversation_id: "",
          user: "abc-123",
          response_mode: 'blocking',
        },
        {
          headers: {
            Authorization: `Bearer app-8wxn7EdG07h2yMQkP1JnbwyU`,
            'Content-Type': 'application/json',
          },
        }
      );

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response.data.answer,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setError('申し訳ありません。エラーが発生しました。もう一度お試しください。');
      console.error('Error fetching AI response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('planning.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('planning.subtitle')}</p>
        </div>
        {isLoading && <LoadingState />}
        {!showChat ? (
          <div className="max-w-3xl mx-auto mb-12">
            <TravelForm onSubmit={handleSubmit} isLoading={isLoading} />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <ChatInterface
              messages={messages}
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
            />
            {response && (
              <div className="mt-8">
                <Results response={response} />
              </div>
            )}
          </div>
        )}

        {error && (
          <div className="max-w-3xl mx-auto mt-4">
            <ErrorMessage
              message={error}
              onRetry={() => {
                setError(null);
                setShowChat(false);
              }}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default Planning;
