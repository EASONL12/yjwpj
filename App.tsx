import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { MainContent } from './components/MainContent';
import { BottomNav } from './components/BottomNav';
import { Tab, Status, Spirit } from './types';
import { searchSpirits } from './services/geminiService';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.SPIRITS);
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [spirits, setSpirits] = useState<Spirit[]>([]);

  // Background Pattern Style
  const backgroundStyle = {
    backgroundColor: '#FCD34D',
    backgroundImage: `
      radial-gradient(circle at 100% 0%, rgba(255,255,255,0.2) 15%, transparent 20%),
      radial-gradient(circle at 0% 100%, rgba(255,255,255,0.2) 15%, transparent 20%),
      linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)
    `,
    backgroundSize: '100% 100%, 100% 100%, 40px 40px'
  };

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setStatus(Status.IDLE);
      setSpirits([]);
      return;
    }

    setStatus(Status.LOADING);
    const results = await searchSpirits(query);
    setSpirits(results);
    setStatus(Status.SUCCESS);
  };

  return (
    <div className="h-[100dvh] w-full flex flex-col overflow-hidden relative" style={backgroundStyle}>
      {/* Decorative floating shapes in background */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full mix-blend-overlay blur-xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-32 h-32 bg-yellow-500 rounded-full mix-blend-overlay blur-2xl opacity-40"></div>

      <TopBar 
        onSearch={handleSearch} 
        isSearching={status === Status.LOADING}
      />
      
      <MainContent 
        status={status} 
        spirits={spirits} 
      />

      <BottomNav 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </div>
  );
};

export default App;