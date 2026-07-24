import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import { Construction, ArrowRight, Mail, Phone, Lock } from 'lucide-react';

interface PlaceholderProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  features?: string[];
}

const Placeholder: React.FC<PlaceholderProps> = ({ title, highlight, subtitle, features }) => {
  return (
    <>
      <PageHero title={title} highlight={highlight} subtitle={subtitle} breadcrumb={title} />
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white">
            <Construction size={36} />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
            Coming Soon
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            This section is being crafted with care to bring you the best experience. Check back soon for the full launch.
          </p>

          {features && features.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                    <Lock size={16} />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{f}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-outline inline-flex items-center gap-2">
              <Mail size={18} /> Contact Us
            </Link>
            <Link to="/" className="btn-orange inline-flex items-center gap-2">
              Back to Home <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Placeholder;
