import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, FileText, Award, BookOpen, Calendar, Image, Phone, Briefcase } from 'lucide-react';

const quickLinks = [
  { icon: FileText, label: 'Apply Online', to: '/admissions', color: 'from-orange-500 to-orange-600' },
  { icon: Award, label: 'Placements', to: '/placements', color: 'from-orange-500 to-orange-600' },
  { icon: BookOpen, label: 'Academics', to: '/academics', color: 'from-orange-500 to-orange-600' },
  { icon: Calendar, label: 'Events', to: '/events', color: 'from-orange-500 to-orange-600' },
  { icon: Briefcase, label: 'Research', to: '/research', color: 'from-orange-500 to-orange-600' },
  { icon: Image, label: 'Gallery', to: '/gallery', color: 'from-orange-500 to-orange-600' },
  { icon: GraduationCap, label: 'Alumni', to: '/alumni', color: 'from-orange-500 to-orange-600' },
  { icon: Phone, label: 'Contact', to: '/contact', color: 'from-orange-500 to-orange-600' },
];

const QuickLinks: React.FC = () => {
  return (
    <section className="py-12 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="group flex flex-col items-center gap-2 p-3 md:p-4 rounded-2xl bg-gray-50 dark:bg-neutral-900 hover:bg-orange-50 dark:hover:bg-neutral-800 border border-gray-100 dark:border-neutral-800 hover:border-orange-200 dark:hover:border-orange-500/30 transition card-hover"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white shadow-orange group-hover:scale-110 transition`}>
                <link.icon size={22} />
              </div>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-orange-500">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
