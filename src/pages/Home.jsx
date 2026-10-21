import React, { useState } from 'react';
import Hero from '../components/Hero';
import VisualStatement from '../components/VisualStatement';
import ServicesPreview from '../components/ServicesPreview';
import Showreel from '../components/Showreel';
import CreativeBreak from '../components/CreativeBreak';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonials';
import SocialStrip from '../components/SocialStrip';
import FinalCTA from '../components/FinalCTA';
import BookingModal from '../components/BookingModal';
import VideoModal from '../components/VideoModal';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Photography');
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState('https://youtu.be/4J1SNIb0Qyo?si=MHkestrUdDmVcpf6');

  const handleOpenVideo = (url = 'https://youtu.be/4J1SNIb0Qyo?si=MHkestrUdDmVcpf6') => {
    setActiveVideoUrl(url);
    setVideoOpen(true);
  };

  const handleOpenBooking = (service = 'Photography') => {
    setSelectedService(service);
    setBookingOpen(true);
  };

  const handleScrollToWork = () => {
    const el = document.getElementById('showreel-section') || document.getElementById('services-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative">
      {/* 01 — Hero Section */}
      <Hero
        onOpenBooking={() => handleOpenBooking('General Inquiry')}
        onScrollToWork={handleScrollToWork}
      />

      {/* 02 — Visual Statement */}
      <VisualStatement />

      {/* 03 — Services Preview (01 Photo, 02 Video, 03 Live, 04 360) */}
      <ServicesPreview
        onOpenBooking={handleOpenBooking}
        onOpenVideo={handleOpenVideo}
      />

      {/* 04 — Cinematic Showreel (Dark Section) */}
      <Showreel onOpenVideo={() => handleOpenVideo('https://youtu.be/OwHiea7wtR0?si=nzjztnaEyyPgs6z2')} />

      {/* 05 — Creative Break (Moving Text Strip) */}
      <CreativeBreak />

      {/* 06 — Experience / Why DM Creation */}
      <Experience onOpenBooking={handleOpenBooking} />

      {/* 07 — Large Editorial Testimonial */}
      <Testimonials />

      {/* 08 — Social / Instagram Feed Strip */}
      <SocialStrip />

      {/* 09 — Final Call to Action */}
      <FinalCTA onOpenBooking={handleOpenBooking} />

      {/* Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService={selectedService}
      />

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoUrl={activeVideoUrl}
      />
    </main>
  );
}
