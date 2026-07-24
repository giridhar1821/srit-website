import React from 'react';
import { facultyHighlights } from '@/data/content';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FacultyHighlights: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="section-tag mb-3">Meet Our Faculty</div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Learn From the <span className="gradient-text">Best</span>
            </h2>
          </div>
          <Link to="/about#management" className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all">
            View all faculty <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyHighlights.map((f) => (
            <div key={f.id} className="group rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover">
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200 dark:from-neutral-800 dark:to-neutral-700">
                <img src={f.image} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">{f.name}</h3>
                <p className="text-xs text-orange-500 font-semibold mb-2">{f.designation}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{f.qualification}</p>
                <div className="text-xs text-gray-600 dark:text-gray-300 pt-2 border-t border-gray-100 dark:border-neutral-800">
                  <span className="font-semibold">Expertise:</span> {f.expertise}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyHighlights;
