import React from 'react';
import { Award, ShieldCheck, Trophy, Globe2, BookOpenCheck, Building } from 'lucide-react';

const accreditations = [
  { icon: ShieldCheck, title: 'AICTE Approved', desc: 'All programs approved by AICTE, New Delhi' },
  { icon: Award, title: 'NBA Accredited', desc: 'CSE department accredited by NBA' },
  { icon: BookOpenCheck, title: 'NAAC Recognized', desc: 'Quality education standards certified' },
  { icon: Building, title: 'JNTU Affiliated', desc: 'Affiliated to JNTU Anantapur' },
  { icon: Trophy, title: 'Top Rankings', desc: 'Among top engineering colleges in AP' },
  { icon: Globe2, title: 'Industry MoUs', desc: 'Partnerships with AWS, Microsoft, TCS' },
];

const Accreditations: React.FC = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-black" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-tag mb-3">Accreditations & Awards</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-3">
            Recognized for <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Our commitment to quality education is validated by leading accreditation bodies.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {accreditations.map((a, i) => (
            <div key={i} className="group p-5 rounded-2xl glass text-center card-hover">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white group-hover:scale-110 transition">
                <a.icon size={22} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{a.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
