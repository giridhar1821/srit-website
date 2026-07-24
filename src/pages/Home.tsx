import React from 'react';
import Hero from '@/components/Hero';
import NewsTicker from '@/components/NewsTicker';
import QuickLinks from '@/components/QuickLinks';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Departments from '@/components/Departments';
import Recruiters from '@/components/Recruiters';
import Events from '@/components/Events';
import Research from '@/components/Research';
import Testimonials from '@/components/Testimonials';
import FacultyHighlights from '@/components/FacultyHighlights';
import Accreditations from '@/components/Accreditations';
import CampusLife from '@/components/CampusLife';
import News from '@/components/News';
import FAQ from '@/components/FAQ';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <NewsTicker />
      <QuickLinks />
      <About />
      <Stats />
      <Departments />
      <Recruiters />
      <Events />
      <Research />
      <FacultyHighlights />
      <Accreditations />
      <CampusLife />
      <Testimonials />
      <News />
      <FAQ />
    </>
  );
};

export default Home;
