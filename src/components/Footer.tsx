import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const sections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'About Us', to: '/about' },
        { label: 'Departments', to: '/departments' },
        { label: 'Admissions', to: '/admissions' },
        { label: 'Academics', to: '/academics' },
        { label: 'Placements', to: '/placements' },
        { label: 'Research', to: '/research' },
      ],
    },
    {
      title: 'Portals',
      links: [
        { label: 'Student Portal', to: '/student-portal' },
        { label: 'Faculty Portal', to: '/faculty-portal' },
        { label: 'Parent Portal', to: '/parent-portal' },
        { label: 'Alumni Portal', to: '/alumni' },
        { label: 'Examination', to: '/examination' },
        { label: 'Events', to: '/events' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Digital Library', to: '/academics' },
        { label: 'Online Fee Payment', to: '/admissions' },
        { label: 'Hall Ticket Download', to: '/examination' },
        { label: 'Results Portal', to: '/examination' },
        { label: 'Gallery', to: '/gallery' },
        { label: 'News & Updates', to: '/news' },
      ],
    },
  ];

  return (
    <footer className="bg-black text-gray-300">
      {/* CTA strip */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h3 className="font-display text-2xl font-bold">Ready to join SRIT?</h3>
            <p className="text-white/90 mt-1">Start your journey toward excellence today.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/admissions" className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg">
              Apply Now
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <GraduationCap className="text-white" size={22} />
              </div>
              <div>
                <span className="font-display font-extrabold text-lg text-white">SRIT</span>
                <span className="block text-[10px] text-gray-400">Anantapur</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Srinivasa Ramanujan Institute of Technology — a premier engineering institution committed to academic excellence, innovation, and holistic development.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-orange-500" />
                <span>B. K. Samudram, Anantapur, Andhra Pradesh 515701</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="shrink-0 text-orange-500" />
                <span>+91 8554 270 700</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="shrink-0 text-orange-500" />
                <span>info@srit.ac.in</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {sections.map((sec) => (
            <div key={sec.title}>
              <h4 className="font-semibold text-white text-sm mb-4">{sec.title}</h4>
              <ul className="space-y-2.5">
                {sec.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-gray-400 hover:text-orange-400 transition flex items-center gap-1 group">
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="mt-10 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2026 Srinivasa Ramanujan Institute of Technology. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition"
                aria-label="Social"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
