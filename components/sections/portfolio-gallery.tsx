'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { portfolioItems, PortfolioItem } from '@/lib/config';

type FilterCategory = 'all' | 'classic' | 'volume' | 'lamination' | 'lash-lift';

const filterTabs: { id: FilterCategory; label: string }[] = [
  { id: 'all', label: 'Все работы' },
  { id: 'classic', label: 'Классика' },
  { id: 'volume', label: 'Объемы 2D–Mega' },
  { id: 'lamination', label: 'Укладка бровей' },
  { id: 'lash-lift', label: 'Ламинирование' },
];

export function PortfolioGallery() {
  const [activeTab, setActiveTab] = useState<FilterCategory>('all');
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  const filteredItems = portfolioItems.filter(
    (item) => activeTab === 'all' || item.category === activeTab
  );

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-champagne-100">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="luxury-eyebrow mb-3 block">Selected Portfolio • Artistry & Execution</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso-950 font-normal">
            Портфолио работ
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
          <p className="text-sm sm:text-base text-espresso-700/80 font-light">
            Макросъемка ресниц и бровей: точная геометрия пучков, безопасная изоляция и анатомическое моделирование.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-espresso-900 text-champagne-100 shadow-sm'
                    : 'bg-cream text-espresso-800 hover:bg-nude-200/60 border border-nude-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Masonry / Grid with Aspect Square Guards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative cursor-pointer"
                onClick={() => setLightboxItem(item)}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-nude-200 shadow-luxury transition-all duration-500 group-hover:shadow-luxury-hover">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover warm-luxury-image transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark hover overlay */}
                  <div className="absolute inset-0 bg-espresso-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-cream text-espresso-900 text-[10px] uppercase tracking-wider font-semibold mb-2">
                        {item.tag}
                      </span>
                      <h3 className="font-serif text-lg text-champagne-100 font-medium">
                        {item.title}
                      </h3>
                    </div>

                    <div className="absolute top-4 right-4 p-2 rounded-full bg-cream/80 text-espresso-900">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {lightboxItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxItem(null)}
                className="fixed inset-0 bg-espresso-950/85 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-3xl w-full rounded-2xl overflow-hidden bg-cream p-3 sm:p-4 shadow-2xl z-10"
              >
                <button
                  onClick={() => setLightboxItem(null)}
                  className="absolute top-6 right-6 z-20 p-2 rounded-full bg-cream/90 text-espresso-900 hover:bg-cream transition-colors"
                  aria-label="Close image"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-nude-200">
                  <Image
                    src={lightboxItem.image}
                    alt={lightboxItem.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover warm-luxury-image"
                  />
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                      {lightboxItem.tag}
                    </span>
                    <h3 className="font-serif text-xl text-espresso-900 font-medium">
                      {lightboxItem.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
