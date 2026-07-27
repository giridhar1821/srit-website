import DepartmentDetails from '@/pages/DepartmentDetails';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Departments from '@/pages/Departments';
import Admissions from '@/pages/Admissions';
import Placements from '@/pages/Placements';
import Contact from '@/pages/Contact';
import Placeholder from '@/pages/Placeholder';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import ProtectedRoute from '@/components/ProtectedRoute';
import BusTracking from "./bus/BusTracking";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route
              path="/departments/:departmentId" element={<DepartmentDetails />}/>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/placements" element={<Placements />} />
              <Route path="/bus-tracking" element={<BusTracking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/academics" element={<Placeholder title="Academics" highlight="Hub" subtitle="Your one-stop destination for academic resources, calendars, syllabus, timetables, and the digital library." features={['Academic Calendar 2026', 'Curriculum & Syllabus Downloads', 'Class Timetables', 'Digital Library Access', 'Examination Schedule', 'Academic Circulars']} />} />
              <Route path="/research" element={<Placeholder title="Research &" highlight="Innovation" subtitle="Explore our research centers, publications, funded projects, and innovation incubation initiatives." features={['150+ Publications', '25+ Funded Projects', '12 Patents Filed', '8 Research Centers', 'Innovation & Incubation Cell', 'Industry Collaborations']} />} />
              <Route path="/campus-life" element={<Placeholder title="Campus" highlight="Life" subtitle="Discover the vibrant life at SRIT — hostels, sports, clubs, cultural events, and more." features={['Virtual Campus Tour', 'Hostel Facilities', 'Sports & Fitness Center', 'Student Clubs', 'Cafeteria & Food Courts', 'Health Center']} />} />
              <Route path="/events" element={<Placeholder title="Events &" highlight="Festivals" subtitle="Stay updated with the latest technical, cultural, and academic events at SRIT." features={['TechFest 2026', 'Cultural Fest — Srinivasa Spandana', 'Smart India Hackathon', 'International Conferences', 'Workshops & Seminars', 'Sports Meet']} />} />
              <Route path="/gallery" element={<Placeholder title="Gallery" subtitle="Photos and videos capturing life and achievements at SRIT." features={['Campus Photos', 'Event Highlights', 'Graduation Ceremonies', 'Sports & Cultural', 'Achievement Gallery', 'Video Tours']} />} />
              <Route path="/news" element={<Placeholder title="News &" highlight="Updates" subtitle="The latest happenings, achievements, and announcements from SRIT." features={['Latest News', 'Press Releases', 'Achievements', 'Circulars', 'Notifications', 'Newsletter Archive']} />} />
              <Route path="/student-portal" element={<Login />} />
              <Route path="/parent-portal" element={<Placeholder title="Parent" highlight="Portal" subtitle="Track your child's academic progress, attendance, and performance in real-time." features={['Attendance Tracking', 'Exam Results', 'Fee Status', 'Performance Reports', 'Teacher Feedback', 'Event Notifications']} />} />
              <Route path="/alumni" element={<Placeholder title="Alumni" highlight="Network" subtitle="Connect with fellow SRIT alumni, share opportunities, and give back to your alma mater." features={['Alumni Directory', 'Job & Internship Postings', 'Mentorship Program', 'Reunion Events', 'Giving Back', 'Success Stories']} />} />
              <Route path="*" element={<Placeholder title="Page Not" highlight="Found" subtitle="The page you're looking for doesn't exist or has been moved." />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
