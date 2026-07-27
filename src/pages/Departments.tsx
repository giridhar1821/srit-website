import React, { useState } from 'react';
import PageHero from '@/components/PageHero';
import { departments } from '@/data/content';
import { Cpu, Radio, Zap, Cog, Building2, Briefcase, Users, FlaskConical, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  Cpu, Radio, Zap, Cog, Building2, Briefcase,
};

const DepartmentsPage: React.FC = () => {
  const [active, setActive] = useState(departments[0].id);
  const dept = departments.find(d => d.id === active) || departments[0];
  const Icon = iconMap[dept.icon] || Cpu;

  return (
    <>
      <PageHero
        title="Our"
        highlight="Departments"
        subtitle="World-class engineering programs with industry-aligned curriculum, expert faculty, and cutting-edge research facilities."
        breadcrumb="Departments"
      />

      {/* Tabs */}
      <section className="py-12 bg-white dark:bg-black sticky top-16 z-30 border-b border-gray-100 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {departments.map((d) => (
              <button
                key={d.id}
                onClick={() => setActive(d.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition ${
                  active === d.id
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange'
                    : 'bg-gray-100 dark:bg-neutral-900 text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-neutral-800'
                }`}
              >
                {d.shortName}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active department detail */}
      <section id={dept.id} className="py-20 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
           {/* Main */}
<div className="lg:col-span-2">
  <div className="flex items-center gap-4 mb-6">
    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-orange">
      <Icon size={32} />
    </div>
    <div>
      <h2 className="font-display text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
        {dept.name}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Established {dept.established}
      </p>
    </div>
  </div>

  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
    {dept.description}
  </p>

  <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 mb-6">
    <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
      <Award size={18} className="text-orange-500" />
      Vision
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
      {dept.vision}
    </p>
  </div>

  <div className="grid sm:grid-cols-2 gap-4">
    <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">
        Programs Offered
      </h4>
      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
        <li>• B.Tech (4 years)</li>
        <li>• M.Tech (2 years)</li>
        <li>• Ph.D. (Part-time)</li>
      </ul>

</div>   {/* <-- ADD THIS LINE */}

{dept.id === "cse" && (
  <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">
      Specializations
    </h4>

    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
      <li>• Computer Science & Engineering (Core)</li>
      <li>• Artificial Intelligence & Data Science (AI & DS)</li>
      <li>• Artificial Intelligence & Machine Learning (AI & ML)</li>
    </ul>
  </div>
)}
  </div>

</div>

{/* Sidebar */}
<div className="space-y-4">
  <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
    <h3 className="font-display font-bold mb-4">
      Department at a Glance
    </h3>

    <div className="space-y-3">
      {[
        { icon: Users, label: "Students", value: dept.students },
        { icon: Briefcase, label: "Faculty", value: dept.faculty },
        { icon: FlaskConical, label: "Labs", value: dept.labs },
        { icon: Award, label: "Placement Rate", value: `${dept.placements}%` },
      ].map((s, i) => (
        <div
          key={i}
          className="flex items-center justify-between"
        >
          <span className="flex items-center gap-2 text-sm text-white/90">
            <s.icon size={16} />
            {s.label}
          </span>
          <span className="font-bold">{s.value}</span>
        </div>
      ))}
    </div>
  </div>

  <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
      Head of Department
    </h3>
    <p className="text-orange-500 font-semibold text-sm">
      {dept.hod}
    </p>
  </div>

  <Link
    to="/admissions"
    className="btn-orange w-full text-center block inline-flex items-center justify-center gap-2"
  >
    Apply to this program
    <ArrowRight size={18} />
  </Link>
  </div> {/* Sidebar */}

          </div> {/* grid */}
        </div> {/* max-w-7xl */}
      </section>

    </>
  );
};
export default DepartmentsPage;

