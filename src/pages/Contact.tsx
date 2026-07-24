import React, { useState } from 'react';
import PageHero from '@/components/PageHero';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <PageHero
        title="Get in"
        highlight="Touch"
        subtitle="Have questions? We're here to help. Reach out to us through any of the channels below."
        breadcrumb="Contact"
      />

      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <div className="section-tag mb-3">Contact Information</div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                Reach <span className="gradient-text">SRIT</span>
              </h2>

              <div className="space-y-5">
                {[
                  { icon: MapPin, title: 'Address', value: 'Srinivasa Ramanujan Institute of Technology, B. K. Samudram, Anantapur, Andhra Pradesh 515701' },
                  { icon: Phone, title: 'Phone', value: '+91 8554 270 700\n+91 98765 43210' },
                  { icon: Mail, title: 'Email', value: 'info@srit.ac.in\nadmissions@srit.ac.in' },
                  { icon: Clock, title: 'Office Hours', value: 'Monday - Saturday: 9:00 AM - 5:00 PM\nSunday: Closed' },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shrink-0">
                      <c.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{c.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-pre-line">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100 dark:border-neutral-800 h-64 bg-gray-100 dark:bg-neutral-900 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-orange-500 mx-auto mb-2" size={32} />
                  <p className="text-sm text-gray-500 dark:text-gray-400">SRIT Campus, Anantapur</p>
                  <a href="https://maps.google.com/?q=Srinivasa+Ramanujan+Institute+of+Technology+Anantapur" target="_blank" rel="noopener noreferrer" className="text-xs text-orange-500 font-semibold mt-1 inline-block">View on Google Maps →</a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
              {sent ? (
                <div className="text-center py-16">
                  <CheckCircle2 className="text-orange-500 mx-auto mb-4" size={48} />
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">Send a Message</h3>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">Name</label>
                    <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">Email</label>
                    <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">Subject</label>
                    <input required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Subject" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">Message</label>
                    <textarea required value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={5} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none" placeholder="Your message..." />
                  </div>
                  <button type="submit" className="btn-orange w-full inline-flex items-center justify-center gap-2">
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
