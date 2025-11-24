import React from 'react';
import { Status, Spirit } from '../types';

interface MainContentProps {
  status: Status;
  spirits: Spirit[];
}

export const MainContent: React.FC<MainContentProps> = ({ status, spirits }) => {
  return (
    <div className="flex-1 mx-3 mb-0 relative flex flex-col">
      {/* The Paper Stack Effect (Background Layers) */}
      <div className="absolute top-2 left-1 right-1 bottom-0 bg-stone-200 rounded-t-2xl border-2 border-stone-300 transform -rotate-1 z-0"></div>
      
      {/* The Main Paper */}
      <div className="relative flex-1 bg-[#FDFBF7] rounded-t-2xl border-x-2 border-t-2 border-stone-300 shadow-xl z-10 overflow-hidden flex flex-col">
        {/* Paper Texture/Grain Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-multiply" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")` }}>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          
          {status === Status.LOADING && (
            <div className="h-full flex flex-col items-center justify-center space-y-4 animate-pulse">
              <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>
          )}

          {status === Status.IDLE && (
            <div className="h-full flex flex-col items-center justify-center pt-20">
               {/* Custom Crying Pet Illustration (CSS Only construction for accuracy to style) */}
               <div className="relative w-48 h-48 mb-6">
                  <img 
                    src="https://picsum.photos/seed/sadpet/300/300" 
                    alt="Sad Pet" 
                    className="w-full h-full object-contain opacity-80 mix-blend-multiply grayscale-[0.2]"
                    style={{ maskImage: 'radial-gradient(circle, black 60%, transparent 100%)' }}
                  />
                  {/* Tears */}
                  <div className="absolute top-1/2 left-1/3 w-3 h-8 bg-blue-300 rounded-full animate-bounce opacity-80" style={{ animationDuration: '2s' }}></div>
                  <div className="absolute top-1/2 right-1/3 w-3 h-8 bg-blue-300 rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.5s', animationDuration: '2s' }}></div>
               </div>
               <h2 className="text-xl font-black text-stone-600 tracking-widest font-display">暂无数据</h2>
               <p className="text-xs text-stone-400 mt-2 font-medium">No Data Available</p>
            </div>
          )}

          {status === Status.SUCCESS && (
            <div className="grid grid-cols-2 gap-4 pb-20">
              {spirits.map((spirit) => (
                <div key={spirit.id} className="bg-white rounded-xl p-3 shadow-sm border border-stone-200 flex flex-col items-center group active:scale-95 transition-transform">
                  <div 
                    className="w-20 h-20 rounded-full mb-3 flex items-center justify-center text-white font-bold text-2xl shadow-inner"
                    style={{ backgroundColor: spirit.imageColor }}
                  >
                    {spirit.name[0]}
                  </div>
                  <h3 className="font-bold text-stone-800 text-sm mb-1">{spirit.name}</h3>
                  <span className="px-2 py-0.5 bg-stone-100 text-[10px] text-stone-500 rounded-full mb-2 border border-stone-200">
                    {spirit.type}
                  </span>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-400 rounded-full" 
                      style={{ width: `${Math.min(spirit.powerLevel, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};