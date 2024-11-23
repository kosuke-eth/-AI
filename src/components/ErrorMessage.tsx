import { AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  const { t } = useTranslation();
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
      <div className="flex items-center">
        <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
        <p className="text-red-700">{message}</p>
      </div>
      <button
        onClick={onRetry}
        className="mt-2 text-red-600 hover:text-red-800 font-medium"
      >
        {t("ErrorMessage.retry")}
      </button>
    </div>
  );
}