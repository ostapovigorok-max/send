'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { beforeAfterItems, BeforeAfterItem } from '@/lib/config';

export function BeforeAfter() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeItem = beforeAfterItems[selectedIdx] || beforeAfterItems[0];

  return (
    <section id="transformations" className="py-20 lg:py-32 bg-champagne-100">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="luxury-eyebrow mb-3 block">Real Results</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso-950 font-normal">
            Before & After
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
          <p className="text-sm sm:text-base text-espresso-700/80 font-light">
            Slide the divider to compare natural lash and brow contours before and after professional treatment.
          </p>

          {/* Item Selector Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {beforeAfterItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                  selectedIdx === idx
                    ? 'bg-espresso-900 text-champagne-100 shadow-sm'
                    : 'bg-cream text-espresso-800 hover:bg-nude-200/60 border border-nude-200'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Showcase Container */}
        <div className="max-w-4xl mx-auto">
          <Card variant="cream" className="p-4 sm:p-6 lg:p-8">
            <ComparisonSlider item={activeItem} />

            {/* Description & Metadata */}
            <div className="mt-6 text-center max-w-xl mx-auto space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                {activeItem.category}
              </span>
              <h3 className="font-serif text-2xl text-espresso-900 font-medium">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-espresso-700/80 leading-relaxed font-light">
                {activeItem.description}
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

// Rewritten Custom Interactive Comparison Slider (Touch + Pointer Drag Friendly)
function ComparisonSlider({ item }: { item: BeforeAfterItem }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = () => {
    isDragging.current = true;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  useEffect(() => {
    const handleGlobalPointerUp = () => {
      isDragging.current = false;
    };
    window.addEventListener('pointerup', handleGlobalPointerUp);
    return () => window.removeEventListener('pointerup', handleGlobalPointerUp);
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      className="relative w-full aspect-square sm:aspect-[16/10] max-h-[500px] overflow-hidden rounded-2xl select-none cursor-ew-resize touch-none shadow-md bg-nude-200"
    >
      {/* "AFTER" Image (Full background layer) */}
      <Image
        src={item.afterImage}
        alt={item.afterAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 800px"
        className="object-cover warm-luxury-image"
        priority
      />

      {/* "BEFORE" Image (Clipped overlay layer) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}>
          <Image
            src={item.beforeImage}
            alt={item.beforeAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover warm-luxury-image"
            priority
          />
        </div>
      </div>

      {/* Vertical Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Circular Drag Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cream/95 backdrop-blur-md border border-gold shadow-lg flex items-center justify-center text-espresso-900 pointer-events-auto cursor-grab active:cursor-grabbing">
          <MoveHorizontal className="w-4 h-4 text-espresso-800" />
        </div>
      </div>

      {/* Badges: Before and After */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-espresso-950/70 backdrop-blur-sm text-champagne-100 text-[10px] uppercase tracking-widest font-semibold pointer-events-none">
        Before
      </div>
      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-cream/90 backdrop-blur-sm text-espresso-900 text-[10px] uppercase tracking-widest font-semibold pointer-events-none">
        After Treatment
      </div>
    </div>
  );
}
