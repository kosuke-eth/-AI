import { useState, useContext } from 'react';
import { Plane } from 'lucide-react';
import { langContext } from '../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const langctx = useContext(langContext);
  const { t } = useTranslation();
  const handleClicked = (lang: string) => {
    return () => {
      langctx.changeLang(lang);
    }}

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Plane className="h-8 w-8" />
          <a href="/home" className="text-2xl font-bold">ええ銚子AI</a>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="/planning" className="hover:text-blue-200 transition">{t("Header.plan")}</a>
          <a href="/tour" className="hover:text-blue-200 transition">{t("Header.tour")}</a>
          <a href="/contact" className="hover:text-blue-200 transition">{t("Header.contact")}</a>
          <button onClick={handleClicked("en")} className="hover:text-blue-200 transition">English</button>
          <button onClick={handleClicked("ja")} className="hover:text-blue-200 transition">日本語</button>
          <button onClick={handleClicked("zh")} className="hover:text-blue-200 transition">中文</button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            Menu
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <a href="/planning" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t("Header.plan")}</a>
              <a href="/tour" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t("Header.tour")}</a>
              <a href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t("Header.contact")}</a>
              <button onClick={handleClicked("en")} className="hover:text-blue-200 transition">English</button>
              <button onClick={handleClicked("ja")} className="hover:text-blue-200 transition">日本語</button>
              <button onClick={handleClicked("chi")} className="hover:text-blue-200 transition">中文</button>
            </div>  
          )}
        </div>
      </div>
    </header>
  );
}

