import React, { useState } from 'react';
import SelectedWork from '../components/SelectedWork';
import ProjectModal from '../components/ProjectModal';
import BookingModal from '../components/BookingModal';

export default function Portfolio({ onOpenBooking }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="pt-16 bg-[#F6F4EF] min-h-screen">
      <SelectedWork
        onOpenBooking={() => setBookingOpen(true)}
        onOpenProjectModal={(p) => setSelectedProject(p)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBooking={(title) => {
          setSelectedProject(null);
          setBookingOpen(true);
        }}
      />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService="Portfolio Inquiry"
      />
    </div>
  );
}
