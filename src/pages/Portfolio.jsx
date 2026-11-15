import React, { useState } from 'react';
import SelectedWork from '../components/SelectedWork';
import ProjectModal from '../components/ProjectModal';
import BookingModal from '../components/BookingModal';
import SEO from '../components/SEO';
import { SEO_DATA, SITE_URL } from '../config/seo';

export default function Portfolio({ onOpenBooking }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/portfolio#webpage`,
    url: `${SITE_URL}/portfolio`,
    name: SEO_DATA.portfolio.title,
    description: SEO_DATA.portfolio.description,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'DM Creation',
      url: `${SITE_URL}/`,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Portfolio',
          item: `${SITE_URL}/portfolio`,
        },
      ],
    },
  };

  return (
    <div className="pt-16 bg-[#F6F4EF] min-h-screen">
      <SEO
        title={SEO_DATA.portfolio.title}
        description={SEO_DATA.portfolio.description}
        canonical={SEO_DATA.portfolio.canonical}
        keywords={SEO_DATA.portfolio.keywords}
        ogImage={SEO_DATA.portfolio.ogImage}
        schema={portfolioSchema}
      />
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
