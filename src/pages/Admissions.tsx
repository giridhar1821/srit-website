import React, { useState } from 'react';
import PageHero from '@/components/PageHero';
import { CheckCircle2, FileText, IndianRupee, Award, Bus, Home, ArrowRight, GraduationCap } from 'lucide-react';

const courses = [
  { name: 'B.Tech CSE', duration: '4 Years', seats: 120, fee: '₹1.2L/yr' },
  { name: 'B.Tech ECE', duration: '4 Years', seats: 120, fee: '₹1.1L/yr' },
  { name: 'B.Tech EEE', duration: '4 Years', seats: 60, fee: '₹1.0L/yr' },
  { name: 'B.Tech MECH', duration: '4 Years', seats: 120, fee: '₹1.0L/yr' },
  { name: 'B.Tech CIVIL', duration: '4 Years', seats: 60, fee: '₹1.0L/yr' },
  { name: 'MBA', duration: '2 Years', seats: 120, fee: '₹0.8L/yr' },
];

const Admissions: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', phone: '', course: '', message: '' });
  };

  return (
    <>
      <PageHero
        title="Admissions"
        highlight="2026-27"
        subtitle="Begin your journey at SRIT. Quality education, world-class faculty, and 92% placement record await you."
        breadcrumb="Admissions"
      />

      {/* Apply form */}
      <section id="apply" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="section-tag mb-3">Quick Apply</div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                Apply <span className="gradient-text">Online</span> in Minutes
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Fill out the form and our admissions team will contact you within 24 hours with detailed information about the application process, eligibility, and next steps.
              </p>

              <div className="space-y-4">
                {[
                  'EAMCET/ECET based admissions for B.Tech',
                  'Management quota seats available',
                  'Merit and need-based scholarships',
                  'Hostel and transport facilities',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-orange-500 shrink-0" size={20} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="text-orange-500 mx-auto mb-4" size={48} />
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Application Received!</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Admission Enquiry</h3>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">Full Name</label>
                    <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Enter your name" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">Email</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="you@email.com" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">Phone</label>
                      <input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="+91..." />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">Course of Interest</label>
                    <select value={form.course} onChange={e => setForm({...form, course: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option value="">Select course</option>
                      {courses.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">Message (Optional)</label>
                    <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={3} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none" placeholder="Any questions?" />
                  </div>
                  <button type="submit" className="btn-orange w-full inline-flex items-center justify-center gap-2">
                    Submit Application <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-tag mb-3">Programs Offered</div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Courses & <span className="gradient-text">Fee Structure</span></h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-neutral-800">
            <table className="w-full bg-white dark:bg-neutral-900">
              <thead>
                <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <th className="text-left px-6 py-4 text-sm font-semibold">Program</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Duration</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Seats</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Fee (Govt. Quota)</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((c, i) => (
                  <tr key={i} className="border-t border-gray-100 dark:border-neutral-800 hover:bg-orange-50 dark:hover:bg-neutral-800 transition">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"><GraduationCap size={16} className="text-orange-500" /> {c.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{c.duration}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{c.seats}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-orange-500">{c.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Eligibility & Scholarships */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div id="eligibility" className="p-8 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
              <FileText className="text-orange-500 mb-4" size={32} />
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">Eligibility Criteria</h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" /> B.Tech: 10+2 with MPC, 50% aggregate, valid EAMCET rank</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" /> Lateral Entry: Diploma/3-year B.Sc with valid ECET rank</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" /> M.Tech: B.Tech with valid GATE/PGECET rank</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" /> MBA: Any degree with valid ICET rank</li>
              </ul>
            </div>
            <div id="scholarships" className="p-8 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
              <Award className="text-orange-500 mb-4" size={32} />
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">Scholarships</h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex gap-2"><IndianRupee size={16} className="text-orange-500 shrink-0 mt-0.5" /> Merit Scholarship: Up to 100% tuition fee waiver</li>
                <li className="flex gap-2"><IndianRupee size={16} className="text-orange-500 shrink-0 mt-0.5" /> Need-based: 25-75% fee reduction for EWS students</li>
                <li className="flex gap-2"><IndianRupee size={16} className="text-orange-500 shrink-0 mt-0.5" /> Girl Child Scholarship: 10% additional concession</li>
                <li className="flex gap-2"><IndianRupee size={16} className="text-orange-500 shrink-0 mt-0.5" /> Government Scholarships: SC/ST/BC fee reimbursement</li>
              </ul>
            </div>
          </div>

          {/* Facilities */}
          <div id="facilities" className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <Home className="mb-4" size={32} />
              <h3 className="font-display text-xl font-bold mb-2">Hostel Facilities</h3>
              <p className="text-sm text-white/90 leading-relaxed">Separate hostels for boys and girls with AC and non-AC rooms, 24/7 security, WiFi, mess, and gym facilities.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <Bus className="mb-4" size={32} />
              <h3 className="font-display text-xl font-bold mb-2">Transport</h3>
              <p className="text-sm text-white/90 leading-relaxed">50+ buses covering Anantapur and surrounding districts with GPS tracking for safe and reliable commute.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admissions;
