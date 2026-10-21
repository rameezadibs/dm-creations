import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BookingModal from './components/BookingModal';
import { CursorProvider } from './context/CursorContext';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [globalBookingOpen, setGlobalBookingOpen] = useState(false);
  const [globalService, setGlobalService] = useState('General Inquiry');

  const handleOpenBooking = (service = 'General Inquiry') => {
    setGlobalService(service);
    setGlobalBookingOpen(true);
  };

  return (
    <Router>
      <CursorProvider>
        <ScrollToTop />
        <CustomCursor />
        
        <div className="min-h-screen flex flex-col bg-[#F6F4EF] text-[#151515] selection:bg-[#151515] selection:text-[#F6F4EF]">
          <Navbar onOpenBooking={() => handleOpenBooking('General Inquiry')} />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About onOpenBooking={handleOpenBooking} />} />
              <Route path="/services" element={<Services onOpenBooking={handleOpenBooking} />} />
              <Route path="/portfolio" element={<Portfolio onOpenBooking={handleOpenBooking} />} />
              <Route path="/contact" element={<Contact onOpenBooking={handleOpenBooking} />} />
            </Routes>
          </div>

          <Footer onOpenBooking={handleOpenBooking} />

          <BookingModal
            isOpen={globalBookingOpen}
            onClose={() => setGlobalBookingOpen(false)}
            defaultService={globalService}
          />
        </div>
      </CursorProvider>
    </Router>
  );
}
