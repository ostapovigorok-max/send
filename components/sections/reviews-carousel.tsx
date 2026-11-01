'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { reviewsData } from '@/lib/config';

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  const current = reviewsData[currentIndex];

  return (
    <section id="reviews" className="py-20 lg:py-32 bg-champagne-100 overflow-hidden">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="luxury-eyebrow mb-3 block">Client Experiences</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso-950 font-normal">
            Kind Words
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
          <p className="text-sm sm:text-base text-espresso-700/80 font-light">
            Genuine impressions from clients who trust our studio for their everyday elegance.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-3xl mx-auto relative px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <Card variant="cream" className="p-8 sm:p-12 text-center relative shadow-luxury">
                <Quote className="w-10 h-10 text-gold/30 mx-auto mb-6" />

                {/* Star rating */}
                <div className="flex justify-center items-center gap-1 mb-6 text-gold">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-serif text-lg sm:text-2xl text-espresso-900 leading-relaxed italic mb-8 font-light">
                  "{current.review}"
                </p>

                {/* Author & Treatment */}
                <div className="space-y-1">
                  <p className="font-serif text-lg font-semibold text-espresso-900">
                    {current.clientName}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-100 text-[11px] text-espresso-700 font-medium">
                    <span className="text-gold">✦</span>
                    <span>Treatment: {current.service}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="p-3 rounded-full bg-cream border border-nude-200/80 text-espresso-800 hover:bg-espresso-900 hover:text-champagne-100 hover:border-transparent transition-all shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Indicators */}
            <div className="flex gap-2">
              {reviewsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'w-8 bg-gold' : 'w-2 bg-nude-300/60'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-cream border border-nude-200/80 text-espresso-800 hover:bg-espresso-900 hover:text-champagne-100 hover:border-transparent transition-all shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
