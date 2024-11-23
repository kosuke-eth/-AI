import { useTranslation } from 'react-i18next';
import { Loader2 } from 'lucide-react';

export function LoadingState() {
  const {t} = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
      <p className="text-gray-600 animate-pulse">
        {t("LoadingState.loading")}
      </p>
    </div>
  );
}