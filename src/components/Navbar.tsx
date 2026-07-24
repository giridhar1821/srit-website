import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, GraduationCap, Search, Bell } from 'lucide-react';
import { navItems } from '@/data/content';
import { useTheme } from '@/context/ThemeContext';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMega(null);
  }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className={`hidden md:block bg-black text-white text-xs transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden' : 'h-9'}`}>
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Bell size={12} /> Admissions 2026-27 Open</span>
            <span>|</span>
            <span>Anantapur, Andhra Pradesh</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#student-portal" className="hover:text-orange-400 transition">Student</a>
            <a href="#faculty-portal" className="hover:text-orange-400 transition">Faculty</a>
            <a href="#parent-portal" className="hover:text-orange-400 transition">Parent</a>
            <a href="#alumni" className="hover:text-orange-400 transition">Alumni</a>
            <a href="/contact" className="hover:text-orange-400 transition">Contact</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-md'
            : 'bg-white dark:bg-black'
        }`}
        onMouseLeave={() => setActiveMega(null)}
      >
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-orange">
                <GraduationCap className="text-white" size={22} />
              </div>
              <div className="leading-none">
                <span className="font-display font-extrabold text-lg text-black dark:text-white tracking-tight">SRIT</span>
                <span className="block text-[10px] text-gray-500 dark:text-gray-400 font-medium tracking-wide">Anantapur</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveMega(item.children ? item.label : null)}
                >
                  <Link
                    to={item.to}
                    className={`nav-link px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition flex items-center gap-1 ${
                      location.pathname === item.to ? 'active text-orange-500' : ''
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className={`transition ${activeMega === item.label ? 'rotate-180' : ''}`} />}
                  </Link>

                  {/* Mega menu */}
                  {item.children && activeMega === item.label && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 mega-menu">
                      <div className="w-72 bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-neutral-800 overflow-hidden">
                        <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.to}
                              className="block px-4 py-3 rounded-xl hover:bg-orange-50 dark:hover:bg-neutral-800 transition group"
                            >
                              <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-orange-500">{child.label}</div>
                              {child.desc && <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{child.desc}</div>}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-600 dark:text-gray-300 transition" aria-label="Search">
                <Search size={18} />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-600 dark:text-gray-300 transition"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Link to="/admissions" className="hidden md:inline-flex btn-orange text-sm">
                Quick Apply
              </Link>
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-200"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`lg:hidden mobile-menu overflow-hidden ${mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pb-4 space-y-1 bg-white dark:bg-black border-t border-gray-100 dark:border-neutral-800">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.to}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-neutral-800 rounded-lg"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-0.5">
                    {item.children.slice(0, 4).map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block px-3 py-2 text-xs text-gray-500 dark:text-gray-400 hover:text-orange-500"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/admissions" className="btn-orange w-full text-center block mt-3">Quick Apply</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
