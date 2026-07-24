import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  breadcrumb?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, highlight, subtitle, breadcrumb }) => {
  return (
    <section className="relative pt-32 pb-20 hero-bg overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/WhatsApp_Image_2026-07-24_at_18.01.57.jpeg"
          alt="SRIT Campus"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 building-overlay" />
      </div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <Link to="/" className="hover:text-orange-400 transition">Home</Link>
          <ChevronRight size={14} />
          <span className="text-orange-400">{breadcrumb || title}</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
          {title} {highlight && <span className="gradient-text">{highlight}</span>}
        </h1>
        {subtitle && <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;
