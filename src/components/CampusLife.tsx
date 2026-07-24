import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Bus, Dumbbell, Users, BookOpen, Wifi, UtensilsCrossed, Stethoscope, ArrowRight } from 'lucide-react';

const facilities = [
  { icon: Home, title: 'Hostels', desc: 'Separate AC & non-AC hostels with 24/7 security' },
  { icon: Bus, title: 'Transport', desc: '50+ buses covering all major routes' },
  { icon: Dumbbell, title: 'Sports Complex', desc: 'Cricket, basketball, indoor games & gym' },
  { icon: BookOpen, title: 'Digital Library', desc: '20,000+ books, e-journals & study spaces' },
  { icon: UtensilsCrossed, title: 'Cafeteria', desc: 'Hygienic multi-cuisine food courts' },
  { icon: Wifi, title: 'High-Speed WiFi', desc: 'Campus-wide 1 Gbps internet connectivity' },
  { icon: Users, title: 'Auditorium', desc: '500-seat AC auditorium for events' },
  { icon: Stethoscope, title: 'Health Center', desc: 'On-campus medical facility with doctor' },
];

const CampusLife: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-tag mb-3">Campus Life</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Life at <span className="gradient-text">SRIT</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Beyond academics — experience a vibrant campus with world-class facilities and a thriving student community.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facilities.map((f, i) => (
            <div key={i} className="group p-5 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition">
                <f.icon size={22} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{f.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/campus-life" className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all">
            Explore campus life <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
