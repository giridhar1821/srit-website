import React from 'react';
import { FlaskConical, Microscope, BookOpen, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const researchAreas = [
  { icon: Microscope, title: 'AI & Machine Learning', desc: 'Cutting-edge research in deep learning, NLP, and computer vision.', count: '42 Publications' },
  { icon: FlaskConical, title: 'IoT & Embedded Systems', desc: 'Smart sensors, edge computing, and industrial IoT solutions.', count: '28 Publications' },
  { icon: BookOpen, title: 'Renewable Energy', desc: 'Solar, wind, and smart grid technologies for sustainability.', count: '18 Publications' },
  { icon: Lightbulb, title: 'Innovation & Incubation', desc: 'Startup support, patents, and entrepreneurship development.', count: '12 Startups' },
];

const Research: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-tag mb-3">Research & Innovation</div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
              Pioneering <span className="gradient-text">Research</span> for a Better Tomorrow
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              At SRIT, research is at the heart of everything we do. Our faculty and students work on funded projects, publish in top journals, and build solutions that impact society.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { value: '150+', label: 'Publications' },
                { value: '25+', label: 'Funded Projects' },
                { value: '12', label: 'Patents Filed' },
                { value: '8', label: 'Research Centers' },
              ].map((s) => (
                <div key={s.label} className="p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                  <div className="font-display text-2xl font-extrabold gradient-text">{s.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>

            <Link to="/research" className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all">
              Explore research at SRIT <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {researchAreas.map((area) => (
              <div key={area.title} className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4">
                  <area.icon size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{area.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 leading-relaxed">{area.desc}</p>
                <span className="text-xs font-semibold text-orange-500">{area.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
