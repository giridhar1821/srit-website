import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles, Award, Users, Building2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden hero-bg">
      {/* Background image overlay - college building */}
      <div className="absolute inset-0">
        <img
          src="/images/WhatsApp_Image_2026-07-24_at_18.01.57.jpeg"
          alt="SRIT Campus Building"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 building-overlay" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-orange-400 text-xs font-semibold mb-6 animate-fade-in-up">
            <Sparkles size={14} />
            Admissions 2026-27 Now Open
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Shaping Future <span className="gradient-text">Innovators</span> at SRIT
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Srinivasa Ramanujan Institute of Technology — where academic excellence meets innovation. Join a community of learners, researchers, and leaders building tomorrow's technology.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/admissions" className="btn-orange inline-flex items-center gap-2 text-base">
              Quick Apply <ArrowRight size={18} />
            </Link>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-white font-semibold hover:bg-white/10 transition group">
              <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center group-hover:scale-110 transition">
                <Play size={14} className="text-white ml-0.5" fill="white" />
              </span>
              Virtual Campus Tour
            </button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: Users, value: '5,000+', label: 'Students' },
              { icon: Building2, value: '6', label: 'Departments' },
              { icon: Award, value: '92%', label: 'Placements' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-4">
                <stat.icon className="text-orange-400 mb-2" size={20} />
                <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-orange-500 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
