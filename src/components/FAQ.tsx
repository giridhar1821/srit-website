import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/content';

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-tag mb-3">Frequently Asked Questions</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Got <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3">Everything you need to know about SRIT admissions and campus life.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition overflow-hidden ${
                open === i
                  ? 'border-orange-200 dark:border-orange-500/30 bg-orange-50/50 dark:bg-neutral-900'
                  : 'border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-semibold text-gray-900 dark:text-white text-sm">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-orange-500 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-all ${open === i ? 'max-h-60' : 'max-h-0'}`}>
                <p className="px-5 pb-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
