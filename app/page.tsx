'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { ServicesMenu } from '@/components/sections/services-menu';
import { BeforeAfter } from '@/components/sections/before-after';
import { TreatmentDetails } from '@/components/sections/treatment-details';
import { PortfolioGallery } from '@/components/sections/portfolio-gallery';
import { AboutMaster } from '@/components/sections/about-master';
import { ReviewsCarousel } from '@/components/sections/reviews-carousel';
import { FaqSection } from '@/components/sections/faq-section';
import { ContactSection } from '@/components/sections/contact-section';
import { BookingModal } from '@/components/booking/booking-modal';
import { StickyBookingBar } from '@/components/booking/sticky-booking-bar';

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName || null);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-champagne-100 selection:bg-nude-300 selection:text-espresso-950">
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Services & Pricing Table */}
        <ServicesMenu onSelectService={(service) => handleOpenBooking(service)} />

        {/* 3. Before & After Showcase */}
        <BeforeAfter />

        {/* 4. Treatment Details & Care Protocol */}
        <TreatmentDetails />

        {/* 5. Portfolio Gallery */}
        <PortfolioGallery />

        {/* 6. About the Master */}
        <AboutMaster />

        {/* 7. Client Reviews Carousel */}
        <ReviewsCarousel />

        {/* 8. FAQ Accordion */}
        <FaqSection />

        {/* 9. Contact & Booking */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Booking Bar (Z-index 50) */}
      <StickyBookingBar onOpenBooking={() => handleOpenBooking()} />

      {/* 1-Click Direct Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        selectedService={selectedService}
      />
    </div>
  );
}
