import React from 'react';
import { recruiters } from '@/data/content';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Recruiters: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="section-tag mb-3">Our Recruiting Partners</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Trusted by <span className="gradient-text">Top Companies</span>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {recruiters.map((r, i) => (
              <div
                key={i}
                className="recruiter-logo px-6 py-4 bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-card min-w-[120px] text-center"
              >
                <span className="font-display font-bold text-lg text-gray-800 dark:text-gray-200">{r}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/placements" className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all">
            View all placement details <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Recruiters;
