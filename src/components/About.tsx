import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Target, Eye, Heart, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    'NBA & NAAC Accredited Programs',
    'Industry-Aligned Curriculum',
    'State-of-the-Art Research Labs',
    '100+ Recruiting Partners',
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
<div className="relative">

  <div className="relative rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)] group">

    <img
      src="/images/srit-campus.png"
      alt="SRIT Campus"
      className="w-full h-[450px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      loading="lazy"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

    <div className="absolute inset-0 rounded-[32px] ring-2 ring-orange-500/20 pointer-events-none"></div>

  </div>

  {/* Floating badge */}
  <div className="absolute -bottom-6 -right-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-6 max-w-[200px] border border-gray-100 dark:border-neutral-800">
    <div className="font-display text-3xl font-extrabold gradient-text">15+</div>
    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
      Years of Academic Excellence
    </div>
  </div>

  {/* Decorative element */}
  <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-orange-500/20 rounded-2xl -z-10" />

</div>

          {/* Content side */}
          <div>
            <div className="section-tag mb-3">About SRIT</div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
              A Legacy of <span className="gradient-text">Excellence</span> in Technical Education
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Established in 2008, Srinivasa Ramanujan Institute of Technology (SRIT) is a premier engineering college in Anantapur, Andhra Pradesh. Affiliated to JNTU Anantapur and approved by AICTE, SRIT has been a beacon of quality education, producing industry-ready professionals and innovative researchers.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckCircle2 className="text-orange-500 shrink-0" size={20} />
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>

            {/* Vision / Mission cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover">
                <Target className="text-orange-500 mb-2" size={24} />
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Our Mission</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">To impart quality technical education with ethical values and foster innovation.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover">
                <Eye className="text-orange-500 mb-2" size={24} />
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Our Vision</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">To be a globally recognized institution producing socially responsible leaders.</p>
              </div>
            </div>

            <Link to="/about" className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all">
              Learn more about SRIT <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
