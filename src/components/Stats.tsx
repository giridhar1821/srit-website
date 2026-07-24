import React from 'react';
import { TrendingUp, IndianRupee, BarChart3, Building2, Users, Award } from 'lucide-react';
import { placementStats } from '@/data/content';
import Counter from './Counter';

const iconMap: Record<string, React.ElementType> = {
  TrendingUp, IndianRupee, BarChart3, Building2, Users, Award,
};

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-tag mb-3 text-center">Placement Statistics 2025</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-3">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Our students consistently achieve remarkable placement records, securing positions in top global companies.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {placementStats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || TrendingUp;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl glass text-center card-hover"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>
                <div className="stat-number text-3xl md:text-4xl text-white mb-1">
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                </div>
                <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
