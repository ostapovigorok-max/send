'use client';

import React from 'react';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { WhatsAppIcon, TelegramIcon, InstagramIcon, TikTokIcon } from '@/components/ui/social-icons';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/lib/config';

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
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={siteConfig.getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso-800 flex items-center justify-center hover:bg-espresso-700 hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="WhatsApp"
                title={`WhatsApp: ${siteConfig.phone}`}
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.getTelegramBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso-800 flex items-center justify-center hover:bg-espresso-700 hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Telegram"
                title={`Telegram: ${siteConfig.telegramHandle}`}
              >
                <TelegramIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.instagram1}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso-800 flex items-center justify-center hover:bg-espresso-700 hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Instagram Brow & Lash"
                title={`Instagram: ${siteConfig.instagram1Handle}`}
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.instagram2}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso-800 flex items-center justify-center hover:bg-espresso-700 hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Instagram Vugoraniya"
                title={`Instagram: ${siteConfig.instagram2Handle}`}
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso-800 flex items-center justify-center text-champagne-100 hover:text-white hover:bg-espresso-700 hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="TikTok"
                title={`TikTok: ${siteConfig.tiktokHandle}`}
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

          {/* Studio Location, Phone & Clickable Maps */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Локация и связь
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

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-xs text-champagne-100 font-semibold hover:text-gold transition-colors"
                >
                  {siteConfig.phone}
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
              href={siteConfig.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline font-medium"
            >
              WhatsApp: {siteConfig.phone}
            </a>
            <a
              href={siteConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2AABEE] hover:underline font-medium"
            >
              Telegram: {siteConfig.telegramHandle}
            </a>
            <a
              href={siteConfig.instagram1}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              {siteConfig.instagram1Handle}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
