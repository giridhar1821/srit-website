import React from 'react';
import PageHero from '@/components/PageHero';
import Stats from '@/components/Stats';
import Recruiters from '@/components/Recruiters';
import { TrendingUp, Users, Briefcase, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const trainingPrograms = [
  { title: 'Soft Skills Training', desc: 'Communication, presentation, and interview skills', duration: 'Year-round' },
  { title: 'Technical Training', desc: 'Coding, aptitude, and domain-specific skills', duration: 'Semester-long' },
  { title: 'Mock Interviews', desc: 'Industry-expert conducted practice sessions', duration: 'Pre-placement' },
  { title: 'Resume Building', desc: 'Professional resume and LinkedIn optimization', duration: 'Workshops' },
  { title: 'Career Counseling', desc: 'One-on-one guidance from placement officers', duration: 'Ongoing' },
  { title: 'Industry Visits', desc: 'Exposure to real workplace environments', duration: 'Monthly' },
];

const topPackages = [
  { company: 'Amazon', role: 'SDE-1', package: '₹24 LPA', student: 'A. Sandeep (CSE)' },
  { company: 'Microsoft', role: 'Software Engineer', package: '₹18 LPA', student: 'B. Ramya (CSE)' },
  { company: 'TCS Digital', role: 'Systems Engineer', package: '₹7 LPA', student: 'C. Karthik (ECE)' },
  { company: 'Infosys', role: 'Power Programmer', package: '₹8 LPA', student: 'D. Swathi (EEE)' },
  { company: 'Wipro', role: 'Project Engineer', package: '₹6.5 LPA', student: 'E. Vinay (MECH)' },
  { company: 'Capgemini', role: 'Analyst', package: '₹6 LPA', student: 'F. Anusha (CIVIL)' },
];

const Placements: React.FC = () => {
  return (
    <>
      <PageHero
        title="Placement"
        highlight="Records"
        subtitle="92% placement rate with top global recruiters. Your success is our commitment."
        breadcrumb="Placements"
      />

      <Stats />

      {/* Top packages */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-tag mb-3">Top Offers 2025</div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Highest <span className="gradient-text">Packages</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPackages.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display font-bold text-gray-900 dark:text-white">{p.company}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{p.role}</p>
                  </div>
                  <span className="font-display text-xl font-extrabold gradient-text">{p.package}</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-100 dark:border-neutral-800">
                  Placed: <span className="font-semibold text-gray-700 dark:text-gray-300">{p.student}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Recruiters />

      {/* Training */}
      <section id="training" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-tag mb-3">Training & Development</div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              We Make You <span className="gradient-text">Job-Ready</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 card-hover">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4">
                  <Award size={24} />
                </div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-sm mb-1">{t.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{t.desc}</p>
                <span className="text-xs font-semibold text-orange-500">{t.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement process */}
      <section className="py-20 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-tag mb-3">How It Works</div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Placement <span className="gradient-text">Process</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Registration', desc: 'Sign up on placement portal' },
              { step: '02', title: 'Training', desc: 'Attend skill development sessions' },
              { step: '03', title: 'Assessment', desc: 'Aptitude & technical tests' },
              { step: '04', title: 'Placement', desc: 'Interviews with recruiters' },
            ].map((s, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 text-center">
                <div className="font-display text-3xl font-extrabold gradient-text mb-2">{s.step}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{s.desc}</p>
                {i < 3 && <ArrowRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-orange-300" size={20} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Users className="text-orange-500 mx-auto mb-4" size={48} />
          <h2 className="font-display text-3xl font-extrabold text-white mb-4">Are you a recruiter?</h2>
          <p className="text-gray-400 mb-8">Connect with our talented pool of students for internships and full-time opportunities.</p>
          <Link to="/contact" className="btn-orange inline-flex items-center gap-2">
            Partner With Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Placements;
