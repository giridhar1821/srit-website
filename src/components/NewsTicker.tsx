import React from 'react';
import { newsTicker } from '@/data/content';
import { Megaphone } from 'lucide-react';

const NewsTicker: React.FC = () => {
  return (
    <div className="bg-black text-white py-2 overflow-hidden border-y border-orange-500/20">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 pl-4 pr-3 py-1 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider shrink-0 z-10">
          <Megaphone size={14} /> Latest
        </div>
        <div className="overflow-hidden flex-1">
          <div className="ticker-content inline-flex gap-12 text-sm">
            {[...newsTicker, ...newsTicker].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2">
                <span className="text-orange-400 font-semibold">[{item.category}]</span>
                <span className="text-gray-200">{item.text}</span>
                <span className="text-orange-500">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
