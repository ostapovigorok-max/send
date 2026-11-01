'use client';

import React from 'react';
import { Instagram, MapPin, Clock, Navigation, ExternalLink, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/config';

// Custom TikTok Icon
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.87-4.47V8.71a8.21 8.21 0 0 0 4.9 1.62v-3.64Z" />
    </svg>
  );
}

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export function ContactSection({ onOpenBooking }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-champagne-100">
      <Container size="xl">
        <div className="max-w-4xl mx-auto">
          <Card
            variant="cream"
            className="p-8 sm:p-12 lg:p-16 border-nude-300/80 shadow-luxury-hover relative overflow-hidden"
          >
            {/* Ambient luxury accent glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="luxury-eyebrow mb-2 block">Контакты и запись • Ашдод</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-espresso-950 font-normal">
                Запись и локация
              </h2>
              <div className="w-12 h-[1px] bg-gold mx-auto my-3" />
              <p className="text-xs sm:text-sm text-espresso-700/80 font-light">
                Основная запись осуществляется через Direct в Instagram. Нажмите на профиль мастера, чтобы написать сообщение и выбрать время.
              </p>
            </div>

            {/* Social Channels & Booking Buttons */}
            <div className="space-y-4 max-w-xl mx-auto mb-10">
              {/* Primary Instagram */}
              <a
                href={siteConfig.instagram1}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="instagram" fullWidth size="lg" className="gap-2.5 text-sm sm:text-base">
                  <Instagram className="w-5 h-5" />
                  Instagram: {siteConfig.instagram1Handle} (Основной)
                </Button>
              </a>

              {/* Secondary Instagram & TikTok Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={siteConfig.instagram2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    fullWidth
                    size="md"
                    className="gap-2 text-xs border-espresso-800/20 hover:border-transparent"
                  >
                    <Instagram className="w-4 h-4 text-[#E1306C]" />
                    {siteConfig.instagram2Handle}
                  </Button>
                </a>

                <a
                  href={siteConfig.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    fullWidth
                    size="md"
                    className="gap-2 text-xs border-espresso-800/20 hover:border-transparent"
                  >
                    <TikTokIcon className="w-4 h-4 text-espresso-900" />
                    TikTok: {siteConfig.tiktokHandle}
                  </Button>
                </a>
              </div>
            </div>

            {/* Maps & Route Navigation */}
            <div className="mb-10 p-5 rounded-2xl bg-champagne-100/90 border border-nude-200 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-gold font-semibold flex items-center justify-center sm:justify-start gap-1">
                    <Navigation className="w-3.5 h-3.5 text-gold" />
                    Маршрут к студии в Ашдоде
                  </span>
                  <p className="text-sm font-serif font-medium text-espresso-900">
                    {siteConfig.address} (31.784744, 34.651508)
                  </p>
                  <p className="text-xs text-espresso-600/80">
                    Откройте прямой маршрут в удобном навигаторе
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="espresso" size="sm" className="gap-1.5 text-xs px-4 py-2">
                      <ExternalLink className="w-3.5 h-3.5 text-gold" />
                      Google Maps
                    </Button>
                  </a>

                  <a
                    href={siteConfig.appleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-1.5 text-xs px-4 py-2 bg-cream">
                      <ExternalLink className="w-3.5 h-3.5 text-espresso-700" />
                      Apple Maps
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Studio Details Footer Grid */}
            <div className="pt-8 border-t border-nude-200/80 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-gold font-semibold flex items-center justify-center sm:justify-start gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Локация
                </span>
                <p className="text-xs text-espresso-800 font-medium">
                  {siteConfig.address}
                </p>
                <p className="text-[11px] text-espresso-600/70">
                  Прием по предварительной записи
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-gold font-semibold flex items-center justify-center sm:justify-start gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  График работы
                </span>
                <p className="text-xs text-espresso-800 font-medium">
                  {siteConfig.workingHours.days}
                </p>
                <p className="text-[11px] text-espresso-600/70">
                  {siteConfig.workingHours.hours} ({siteConfig.workingHours.policy})
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
