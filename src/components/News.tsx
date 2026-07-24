import React from 'react';
import { newsItems } from '@/data/content';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const News: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="section-tag mb-3">Latest News</div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              News & <span className="gradient-text">Updates</span>
            </h2>
          </div>
          <Link to="/news" className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all">
            View all news <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((n) => (
            <div key={n.id} className="group rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover">
              <div className="relative h-48 overflow-hidden">
                <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold">
                  {n.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar size={12} className="text-orange-500" /> {n.date}
                </div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{n.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{n.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
