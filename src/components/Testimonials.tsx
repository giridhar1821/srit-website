import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/content';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-tag mb-3">Student Voices</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Hear From Our <span className="gradient-text">Alumni</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="p-6 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover relative">
              <Quote className="absolute top-4 right-4 text-orange-200 dark:text-orange-500/20" size={40} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-orange-500 fill-orange-500" />
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-4 relative z-10">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-neutral-800">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover bg-orange-100" loading="lazy" />
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{t.role} @ {t.company} • Batch {t.batch}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
