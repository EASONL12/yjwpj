import React from 'react';
import { Home, Backpack, User } from 'lucide-react';
import { Tab } from '../types';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* The Dark Container with Torn Edge */}
      <div className="relative w-full bg-[#1F1F1F] pb-safe pt-2">
        {/* Torn Edge Pseudo Element using CSS Clip Path (defined in index.html styles) */}
        <div className="absolute top-0 left-0 w-full h-4 bg-[#1F1F1F] torn-paper-edge transform -translate-y-full"></div>

        <div className="flex items-end justify-between px-8 pb-4 pt-1 h-16 max-w-lg mx-auto">
          
          {/* Home Tab */}
          <button 
            onClick={() => onTabChange(Tab.HOME)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${activeTab === Tab.HOME ? 'text-white scale-110' : 'text-gray-500'}`}
          >
            <div className={`p-1 rounded-full ${activeTab === Tab.HOME ? 'bg-white/10' : ''}`}>
               <Home size={26} strokeWidth={2.5} />
            </div>
            <span className="text-[10px] font-bold tracking-wider">首页</span>
          </button>

          {/* Spirits Tab (Center, Highlighted) */}
          <button 
            onClick={() => onTabChange(Tab.SPIRITS)}
            className="relative -top-5 group"
          >
            {/* Yellow Circle Background */}
            <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-[#1F1F1F] transition-all duration-300 ${activeTab === Tab.SPIRITS ? 'bg-[#FCD34D] rotate-0' : 'bg-gray-700 rotate-12'}`}>
              <Backpack 
                size={28} 
                className={`transition-colors ${activeTab === Tab.SPIRITS ? 'text-gray-900 fill-yellow-600/20' : 'text-gray-400'}`} 
                strokeWidth={2.5} 
              />
            </div>
            <span className={`absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-wider transition-colors ${activeTab === Tab.SPIRITS ? 'text-[#FCD34D]' : 'text-gray-500'}`}>
              精灵
            </span>
            
            {/* Decorative dots for active state */}
            {activeTab === Tab.SPIRITS && (
               <>
                 <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full animate-ping"></div>
               </>
            )}
          </button>

          {/* Me Tab */}
          <button 
            onClick={() => onTabChange(Tab.ME)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${activeTab === Tab.ME ? 'text-white scale-110' : 'text-gray-500'}`}
          >
            <div className={`p-1 rounded-full ${activeTab === Tab.ME ? 'bg-white/10' : ''}`}>
              <User size={26} strokeWidth={2.5} />
            </div>
            <span className="text-[10px] font-bold tracking-wider">我的</span>
          </button>

        </div>
      </div>
    </div>
  );
};