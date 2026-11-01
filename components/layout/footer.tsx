'use client';

import React from 'react';
import { Instagram, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/lib/config';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.87-4.47V8.71a8.21 8.21 0 0 0 4.9 1.62v-3.64Z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso-900 text-champagne-100 pt-16 pb-24 md:pb-16 border-t border-espresso-800">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-espresso-800/80">
          {/* Brand Info */}
          <div className="space-y-4">
            <span className="font-serif text-2xl tracking-wide text-champagne-100 font-medium block">
              {siteConfig.studioName}
            </span>
            <p className="text-xs text-champagne-100/60 leading-relaxed">
              {siteConfig.tagline}. Профессиональный уход за ресницами и бровями в уютной приватной студии.
            </p>
            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagram1}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso-800 flex items-center justify-center text-champagne-100 hover:bg-[#E1306C] hover:text-white transition-colors"
                aria-label="Instagram Brow & Lash"
                title="Instagram: @brow._.poli"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.instagram2}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso-800 flex items-center justify-center text-champagne-100 hover:bg-[#C13584] hover:text-white transition-colors"
                aria-label="Instagram Vugoraniya"
                title="Instagram: @vugoraniya_net"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso-800 flex items-center justify-center text-champagne-100 hover:bg-[#00F2FE] hover:text-black transition-colors"
                aria-label="TikTok"
                title="TikTok: @polilash.ashdod"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Разделы сайта
            </h4>
            <ul className="space-y-2.5 text-xs text-champagne-100/70">
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Услуги и цены (₪)
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-gold transition-colors">
                  До и после
                </a>
              </li>
              <li>
                <a href="#details" className="hover:text-gold transition-colors">
                  Уход и правила 24ч
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-gold transition-colors">
                  Портфолио работ
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  О мастере
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold transition-colors">
                  Вопросы и ответы
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Hours */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              График работы
            </h4>
            <div className="space-y-2.5 text-xs text-champagne-100/70">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-champagne-100">
                    {siteConfig.workingHours.days}
                  </p>
                  <p>{siteConfig.workingHours.hours}</p>
                </div>
              </div>
              <p className="text-[11px] text-champagne-100/50 pt-2 border-t border-espresso-800/60">
                {siteConfig.workingHours.policy}
              </p>
            </div>
          </div>

          {/* Studio Location & Clickable Maps */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Локация и навигация
            </h4>
            <div className="space-y-3 text-xs text-champagne-100/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors font-medium underline flex items-center gap-1 text-champagne-100"
                >
                  {siteConfig.address}
                  <ExternalLink className="w-3 h-3 text-gold" />
                </a>
              </div>
              <div className="pt-2 flex flex-col gap-1.5 text-[11px]">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  → Открыть в Google Maps
                </a>
                <a
                  href={siteConfig.appleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  → Открыть в Apple Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-champagne-100/50 gap-4">
          <p>
            © {currentYear} {siteConfig.studioName}. {siteConfig.address}.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.instagram1}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              {siteConfig.instagram1Handle}
            </a>
            <a
              href={siteConfig.instagram2}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/80 hover:underline"
            >
              {siteConfig.instagram2Handle}
            </a>
            <a
              href={siteConfig.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/80 hover:underline"
            >
              {siteConfig.tiktokHandle}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
