import React from 'react';
import PageHero from '@/components/PageHero';
import { Target, Eye, Heart, Award, Users, Building2, Calendar, CheckCircle2 } from 'lucide-react';

const management = [
  { name: 'Sri. B. K. S. Reddy', role: 'Founder & Chairman', desc: 'A visionary educationist with a passion for empowering rural youth through quality technical education.' },
  { name: 'Smt. B. K. S. Lakshmi', role: 'Vice Chairperson', desc: 'Guiding the institution with values of compassion, discipline, and academic integrity.' },
  { name: 'Dr. K. Srinivasa Rao', role: 'Principal', desc: 'Ph.D. (IIT Kharagpur) with 25+ years of academic and administrative experience.' },
  { name: 'Dr. M. Anjali Devi', role: 'Vice Principal', desc: 'Ph.D. in Computer Science, leading academic innovation and curriculum development.' },
];

const milestones = [
  { year: '2008', text: 'SRIT established with 4 branches and 240 seats' },
  { year: '2012', text: 'MBA program introduced; first graduating class placed' },
  { year: '2015', text: 'NBA accreditation for CSE and ECE departments' },
  { year: '2018', text: 'Research centers established; first international MoU signed' },
  { year: '2021', text: 'AI & ML specialization labs inaugurated' },
  { year: '2024', text: 'Smart campus initiative; digital transformation complete' },
  { year: '2026', text: '92% placement record; NBA Tier-I accreditation' },
];

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHero
        title="About"
        highlight="SRIT"
        subtitle="A premier engineering institution committed to academic excellence, innovation, and holistic development since 2008."
        breadcrumb="About"
      />

      {/* Story */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-tag mb-3">Our Story</div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                15+ Years of <span className="gradient-text">Excellence</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Srinivasa Ramanujan Institute of Technology was established in 2008 by the Srinivasa Ramanujan Educational Society with a mission to provide quality technical education to students from rural and semi-urban backgrounds.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Named after the legendary mathematician Srinivasa Ramanujan, the institution embodies his spirit of brilliance, perseverance, and innovation. Over the years, SRIT has grown into one of the most respected engineering colleges in Andhra Pradesh.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Today, SRIT offers 6 undergraduate and 3 postgraduate programs, serves over 5,000 students, and boasts a 92% placement rate with top global recruiters.
              </p>
            </div>
            <div className="relative">
              <img src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800" alt="SRIT Campus" className="w-full h-[400px] object-cover rounded-3xl shadow-2xl" loading="lazy" />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-2xl shadow-orange-lg max-w-[200px]">
                <div className="font-display text-3xl font-extrabold">5,000+</div>
                <div className="text-sm text-white/90">Students Educated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section id="vision" className="py-20 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover">
              <Target className="text-orange-500 mb-4" size={32} />
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3">Mission</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">To impart quality technical education with ethical values, foster innovation and research, and produce globally competent professionals who contribute to society.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover">
              <Eye className="text-orange-500 mb-4" size={32} />
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3">Vision</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">To be a globally recognized institution of excellence in technical education and research, producing socially responsible leaders and innovators.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover">
              <Heart className="text-orange-500 mb-4" size={32} />
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3">Values</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Integrity, excellence, innovation, inclusivity, and social responsibility guide every decision and action at SRIT.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Management */}
      <section id="management" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-tag mb-3">Leadership</div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Our <span className="gradient-text">Management</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {management.map((m, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-2xl font-bold">
                  {m.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white">{m.name}</h3>
                <p className="text-sm text-orange-500 font-semibold mb-2">{m.role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-tag mb-3">Our Journey</div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Milestones Through the <span className="gradient-text">Years</span></h2>
          </div>
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-orange-600" />
            {milestones.map((m, i) => (
              <div key={i} className="relative mb-8">
                <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-orange-500 ring-4 ring-orange-100 dark:ring-orange-500/20" />
                <div className="flex items-start gap-4">
                  <div className="font-display text-xl font-extrabold gradient-text shrink-0 w-16">{m.year}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 pt-1">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section id="accreditation" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-tag mb-3">Accreditations</div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Certified <span className="gradient-text">Quality</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'AICTE', desc: 'Approved by All India Council for Technical Education' },
              { icon: Building2, title: 'NBA', desc: 'National Board of Accreditation (Tier-I)' },
              { icon: Users, title: 'NAAC', desc: 'National Assessment and Accreditation Council' },
              { icon: Calendar, title: 'JNTUA', desc: 'Affiliated to JNTU Anantapur' },
            ].map((a, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover text-center">
                <a.icon className="text-orange-500 mx-auto mb-3" size={32} />
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">{a.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="py-20 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-tag mb-3">Awards & Rankings</div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Recognized <span className="gradient-text">Achievements</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Top 10 Engineering Colleges in AP', year: '2025', org: 'Education World' },
              { title: 'Best Industry-Linked Institute', year: '2024', org: 'CII AICTE' },
              { title: 'Excellence in Placements', year: '2024', org: 'JNTUA' },
              { title: 'Smart India Hackathon Winners', year: '2025', org: 'Govt. of India' },
              { title: 'Best Innovation Cell', year: '2023', org: 'AICTE' },
              { title: 'AAA Rating', year: '2025', org: 'Careers360' },
            ].map((a, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="text-orange-500" size={20} />
                  <span className="text-xs font-semibold text-orange-500">{a.year}</span>
                </div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-sm mb-1">{a.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">By {a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
