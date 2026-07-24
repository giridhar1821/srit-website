import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { events } from '@/data/content';

const Events: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="section-tag mb-3">Upcoming Events</div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              What's <span className="gradient-text">Happening</span> at SRIT
            </h2>
          </div>
          <Link to="/events" className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all">
            View all events <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <div key={event.id} className="group rounded-2xl overflow-hidden bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover">
              <div className="relative h-44 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" loading="lazy" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold">
                  {event.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar size={14} className="text-orange-500" /> {event.dateStr}
                </div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{event.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">{event.description}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <MapPin size={12} className="text-orange-500" /> {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
