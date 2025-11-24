import React from 'react';
import { Search, ArrowUpDown, Filter, Expand, MoreHorizontal, Minus, Circle } from 'lucide-react';

interface TopBarProps {
  onSearch: (query: string) => void;
  isSearching: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ onSearch, isSearching }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchValue);
    }
  };

  return (
    <div className="w-full px-4 pt-2 pb-4 flex flex-col gap-3 sticky top-0 z-20">
      {/* Top Row: Logo & Window Controls (Simulated) */}
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-1">
          {/* Logo Text simulation */}
          <h1 className="text-gray-800 font-black text-xl tracking-tighter font-display" style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.5)' }}>
            洛克王国
          </h1>
          <span className="text-[10px] text-gray-700 font-bold tracking-widest mt-1 opacity-60">ROCO KINGDOM</span>
        </div>
        
        {/* Fake Window Controls capsule */}
        <div className="bg-white/40 border border-black/10 rounded-full px-3 py-1 flex items-center gap-4 h-8">
          <MoreHorizontal size={16} className="text-gray-800 cursor-pointer hover:text-black" />
          <div className="w-[1px] h-3 bg-gray-400/50"></div>
          <Minus size={16} className="text-gray-800 cursor-pointer hover:text-black" />
          <div className="w-[1px] h-3 bg-gray-400/50"></div>
          <Circle size={14} className="text-gray-800 cursor-pointer hover:text-black fill-transparent stroke-[2.5px]" />
        </div>
      </div>

      {/* Second Row: Controls & Search */}
      <div className="flex items-center gap-3">
        {/* Sort Button */}
        <button className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center shadow-sm border border-white/60 active:scale-95 transition-transform">
          <ArrowUpDown size={18} className="text-gray-700" />
        </button>

        {/* Search Input */}
        <div className="flex-1 relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </div>
          <input 
            type="text" 
            placeholder="精灵名称" 
            className="w-full h-10 pl-10 pr-4 rounded-full border-none outline-none text-sm text-gray-700 placeholder-gray-400 shadow-inner bg-white focus:ring-2 focus:ring-yellow-500/50 transition-all"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isSearching}
          />
        </div>

        {/* Action Buttons Group */}
        <button className="h-9 px-3 bg-yellow-400/20 rounded-full flex items-center gap-1 border border-yellow-600/20 shadow-sm active:scale-95 transition-transform">
           <Expand size={16} className="text-gray-800" />
           <span className="text-xs font-bold text-gray-800">展开</span>
        </button>

        <button className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center border border-yellow-600/20 shadow-sm active:scale-95 transition-transform">
          <Filter size={18} className="text-gray-800" />
        </button>
      </div>
    </div>
  );
};