import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from 'lucide-react';

import { Header } from './components/Header';
import Planning from './pages/planning';
import Tour from './pages/tour';
import Contact from './pages/contact.tsx';
import Home from './pages/home';
import Start from './pages/start';
import { langContext } from './contexts/LanguageContext';
import { useLang } from './contexts/LanguageContext';

function App() {
  const langctx = useLang();
  return (
    <div className="bg-gray-100 min-h-screen">
      <langContext.Provider value={langctx}>
        <Header />
        <Sidebar className="fixed bottom-4 right-4 text-gray-600" size={32} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/home" element={<Home />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </langContext.Provider>
    </div>)
}

export default App;
