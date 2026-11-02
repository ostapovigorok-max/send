'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { WhatsAppIcon, TelegramIcon } from '@/components/ui/social-icons';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/config';

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden bg-gradient-to-b from-champagne-50 via-champagne-100 to-nude-100/30">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-nude-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Conversion CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nude-200/60 border border-nude-300/60 text-espresso-900 text-xs font-semibold tracking-luxury uppercase">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>{siteConfig.studioName} • {siteConfig.address}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-espresso-950 font-normal leading-[1.08] tracking-tight">
              Наращивание ресниц и брови в Ашдоде.
            </h1>

            {/* Subtitle / Positioning */}
            <p className="text-base sm:text-lg text-espresso-700/80 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Индивидуальное моделирование взгляда от полуклассики до Mega Volume, долговременная укладка и ламинирование. Стойкая комфортная носка в климате Израиля.
            </p>

            {/* Special Offer Badge for First Visit */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-xs text-espresso-950 font-medium shadow-sm">
              <span className="px-2 py-0.5 rounded-full bg-gold/30 text-espresso-950 font-semibold text-[10px] uppercase tracking-wider">
                Первый визит
              </span>
              <span>Бесплатное снятие чужой работы + щёточка в подарок</span>
            </div>

            {/* Direct Booking Actions (WhatsApp Primary, Telegram Secondary) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              {/* Primary WhatsApp */}
              <a
                href={siteConfig.getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="whatsapp"
                  size="lg"
                  fullWidth
                  className="shadow-md hover:shadow-lg gap-2 text-sm"
                >
                  <WhatsAppIcon className="w-5 h-5" variant="inverted" />
                  Записаться в WhatsApp
                </Button>
              </a>

              {/* Secondary Telegram */}
              <a
                href={siteConfig.getTelegramBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="telegram"
                  size="lg"
                  fullWidth
                  className="shadow-sm hover:shadow-md gap-2 text-sm"
                >
                  <TelegramIcon className="w-5 h-5" variant="inverted" />
                  Написать в Telegram
                </Button>
              </a>

              {/* All contacts & Maps */}
              <Button
                variant="outline"
                size="lg"
                onClick={onOpenBooking}
                className="w-full sm:w-auto text-sm"
              >
                Все контакты и карта
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>

            {/* Value Props & Trust Badges */}
            <div className="pt-8 border-t border-nude-200/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="font-serif text-xl sm:text-2xl text-espresso-900 font-semibold">
                  3–5 нед
                </p>
                <p className="text-[11px] uppercase tracking-wider text-espresso-600 font-medium mt-0.5">
                  Стойкая носка
                </p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl text-espresso-900 font-semibold">
                  100% Стерильно
                </p>
                <p className="text-[11px] uppercase tracking-wider text-espresso-600 font-medium mt-0.5">
                  Сухожар
                </p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl text-espresso-900 font-semibold">
                  Ашдод
                </p>
                <p className="text-[11px] uppercase tracking-wider text-espresso-600 font-medium mt-0.5">
                  Удобная локация
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Warm Luxury Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-3 rounded-3xl border border-gold/40 -rotate-1 pointer-events-none" />

              {/* Image Container with 4:5 Aspect Ratio Guard */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-luxury-hover bg-nude-200">
                <Image
                  src="/images/placeholders/hero-master.jpg"
                  alt={`${siteConfig.studioName} - ${siteConfig.masterName}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover warm-luxury-image"
                />

                {/* Subtle gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Master Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-cream/90 backdrop-blur-md border border-white/60 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-base text-espresso-900 font-medium">
                        {siteConfig.studioName}
                      </p>
                      <p className="text-[10px] uppercase tracking-widest text-gold font-semibold flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-gold" />
                        {siteConfig.address}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-nude-100 text-[10px] text-espresso-800 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                      Сертифицировано
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
