import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Radio, Zap, Cog, Building2, Briefcase, ArrowRight, Users, FlaskConical } from 'lucide-react';
import { departments } from '@/data/content';

const iconMap: Record<string, React.ElementType> = {
  Cpu, Radio, Zap, Cog, Building2, Briefcase,
};

const Departments: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-tag mb-3">Academic Programs</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Explore Our <span className="gradient-text">Departments</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">World-class engineering programs designed to shape the next generation of innovators and leaders.</p>
          <div className="section-divider mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => {
            const Icon = iconMap[dept.icon] || Cpu;
            return (
              <div
                key={dept.id}
                className="dept-card group p-6 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-orange group-hover:scale-110 transition">
                    <Icon size={26} />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400">
                    {dept.shortName}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">{dept.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed line-clamp-2">{dept.description}</p>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 rounded-lg bg-white dark:bg-neutral-800">
                    <Users className="text-orange-500 mx-auto mb-1" size={16} />
                    <div className="text-xs font-bold text-gray-900 dark:text-white">{dept.students}</div>
                    <div className="text-[10px] text-gray-400">Students</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-white dark:bg-neutral-800">
                    <Briefcase className="text-orange-500 mx-auto mb-1" size={16} />
                    <div className="text-xs font-bold text-gray-900 dark:text-white">{dept.faculty}</div>
                    <div className="text-[10px] text-gray-400">Faculty</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-white dark:bg-neutral-800">
                    <FlaskConical className="text-orange-500 mx-auto mb-1" size={16} />
                    <div className="text-xs font-bold text-gray-900 dark:text-white">{dept.labs}</div>
                    <div className="text-[10px] text-gray-400">Labs</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-neutral-800">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    HOD: <span className="font-semibold text-gray-700 dark:text-gray-300">{dept.hod}</span>
                  </div>
                  <Link to={`/departments#${dept.id}`} className="text-orange-500 hover:gap-2 inline-flex items-center gap-1 text-xs font-semibold transition-all">
                    Explore <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Departments;
