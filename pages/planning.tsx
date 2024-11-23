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
    const budget_trans_ja = {"reasonable": "リーズナブル", "medium": "ミディアム", "luxury": "ラグジュアリー"};
    const budget_trans_zh = {"reasonable": "合理", "medium": "中等", "luxury": "豪華"};
    if (i18n.language === 'ja') {
      if (formData.interests==null || formData.interests.length === 0){ 
        var content = `${formData.destination}人での${formData.duration}日間の旅行を計画しています。予算は${budget_trans_ja[formData.budget]}です。日本語でお願いします。`;
      }  else { 
        content = `${formData.destination}人での${formData.duration}日間の旅行を計画しています。予算は${budget_trans_ja[formData.budget]}で、${formData.interests.join('、')}に興味があります。日本語でお願いします。`;
      }}
    else if (i18n.language === 'zh') {
      if (formData.interests==null || formData.interests.length === 0){ 
        var content = `我計劃去${formData.destination}進行為期 ${formData.duration}天的旅行。我的預算${budget_trans_zh[formData.budget]}，我希望它是中文的。`      
      }  else { 
        content = `我計劃去${formData.destination}進行為期 ${formData.duration}天的旅行。我的預算${budget_trans_zh[formData.budget]},而且我對${formData.interests.join(',')}感興趣。我希望它是中文的。` 
      }}
    else {
      if (formData.interests==null || formData.interests.length === 0){ 
        var content = `I am planning a trip to ${formData.destination} for ${formData.duration} days. The budget is ${formData.budget}, please write it in English.`;
      }  else { 
        content = `I am planning a trip to ${formData.destination} for ${formData.duration} days. The budget is ${formData.budget} and I'm interested in ${formData.interests.join(',')}, please write it in English.`;
      }}
    const initialMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: content,
      timestamp: new Date(),
    };

    setMessages([initialMessage]);

    try {
      const response = await axios.post('https://api.dify.ai/v1/chat-messages', {
        inputs: {},
        query: JSON.stringify({
          initialMessage: initialMessage.content,
        }),
        conversation_id: "",
        user: "abc-123",
        response_mode: 'blocking',
      }, {
        headers: {
          'Authorization': `Bearer app-8wxn7EdG07h2yMQkP1JnbwyU`,
          'Content-Type': 'application/json',
        },
      });

      const aiResponse: AIResponse = {
        travelPlan: response.data.answer,
        hotelSuggestions: [
          {
            name: "パレスホテル東京",
            location: "丸の内",
            priceRange: "高級",
            rating: 5,
            amenities: ["スパ", "プール", "高級レストラン", "フィットネス"]
          },
          {
            name: "セルリアンタワー東急ホテル",
            location: "渋谷",
            priceRange: "プレミアム",
            rating: 4,
            amenities: ["レストラン", "バー", "ビジネスセンター", "フィットネス"]
          },
          {
            name: "相鉄フレッサイン銀座七丁目",
            location: "銀座",
            priceRange: "スタンダード",
            rating: 3,
            amenities: ["朝食ビュッフェ", "コインランドリー", "ビジネスコーナー"]
          }
        ]
      };

      setResponse(aiResponse);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: aiResponse.travelPlan,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      if (error instanceof Error) {
        setError('申し訳ありません。エラーが発生しました。もう一度お試しください。');
        console.error('Error fetching AI response:', error.message, error.stack);
      } else {
        setError('申し訳ありません。予期しないエラーが発生しました。もう一度お試しください。');
        console.error('Unexpected error fetching AI response:', error);
      }
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

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    try {
      const response = await axios.post('https://api.dify.ai/v1/chat-messages', {
        inputs: {},
        query: JSON.stringify({
          userMessage: userMessage.content,
        }),
        conversation_id: "",
        user: "abc-123",
        response_mode: 'blocking',
      }, {
        headers: {
          'Authorization':`Bearer app-8wxn7EdG07h2yMQkP1JnbwyU`,
          'Content-Type': 'application/json',
        },
      });

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response.data.answer,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('planning.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('planning.subtitle')}
          </p>
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
