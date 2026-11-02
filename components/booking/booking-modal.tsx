'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Phone, Sparkles, ExternalLink, Copy, Check } from 'lucide-react';
import { WhatsAppIcon, TelegramIcon, InstagramIcon, TikTokIcon } from '@/components/ui/social-icons';
import { siteConfig } from '@/lib/config';
import { Button } from '@/components/ui/button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string | null;
}

export function BookingModal({
  isOpen,
  onClose,
  selectedService,
}: BookingModalProps) {
  const [copied, setCopied] = useState(false);
  const whatsAppUrl = siteConfig.getWhatsAppBookingUrl(selectedService || undefined);
  const telegramUrl = siteConfig.getTelegramBookingUrl(selectedService || undefined);
  const bookingMessage = siteConfig.getBookingMessage(selectedService || undefined);

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(bookingMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-espresso-950/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-cream border border-nude-200/80 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-espresso-700/60 hover:text-espresso-900 hover:bg-nude-100/60 transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <span className="luxury-eyebrow mb-2 block">Онлайн-запись • Ашдод</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-espresso-900 font-medium">
                Запись на процедуру
              </h3>
              <div className="w-12 h-[1px] bg-gold mx-auto my-3" />
              {selectedService ? (
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nude-100 text-espresso-800 text-xs font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  Выбрано: <span className="font-semibold">{selectedService}</span>
                </div>
              ) : (
                <p className="text-xs sm:text-sm text-espresso-700/75">
                  Быстрая запись напрямую через мессенджеры без звонков и ожидания.
                </p>
              )}
            </div>

            {/* Direct Booking Actions (WhatsApp & Telegram) */}
            <div className="space-y-3 mb-6">
              {/* WhatsApp Primary */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="whatsapp" fullWidth size="lg" className="gap-2.5 text-sm">
                  <WhatsAppIcon className="w-5 h-5" variant="inverted" />
                  Записаться в WhatsApp ({siteConfig.phone})
                </Button>
              </a>

              {/* Telegram Secondary */}
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="telegram" fullWidth size="lg" className="gap-2.5 text-sm">
                  <TelegramIcon className="w-5 h-5" variant="inverted" />
                  Написать в Telegram ({siteConfig.telegramHandle})
                </Button>
              </a>

              {/* Ready-to-send Message Copy Helper */}
              <div className="p-3.5 rounded-2xl bg-champagne-100/90 border border-nude-200/70 text-left">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-espresso-600 font-semibold">
                    Текст сообщения с готовой заявкой:
                  </span>
                  <button
                    onClick={handleCopyMessage}
                    className="inline-flex items-center gap-1 text-[11px] text-gold-dark hover:underline font-medium"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        Скопировано!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Скопировать текст
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-espresso-800 font-light italic bg-white/70 p-2.5 rounded-xl border border-nude-200/40">
                  "{bookingMessage}"
                </p>
              </div>

              {/* Direct Phone Call Button */}
              <a href={`tel:${siteConfig.phone}`} className="block">
                <Button variant="outline" fullWidth size="md" className="gap-2 text-xs">
                  <Phone className="w-4 h-4 text-gold-dark" />
                  Позвонить в студию: {siteConfig.phone}
                </Button>
              </a>

              {/* Instagram & TikTok Grid */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={siteConfig.instagram1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" fullWidth size="sm" className="gap-1.5 text-xs py-2.5">
                    <InstagramIcon className="w-4 h-4" />
                    {siteConfig.instagram1Handle}
                  </Button>
                </a>

                <a
                  href={siteConfig.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" fullWidth size="sm" className="gap-1.5 text-xs py-2.5">
                    <TikTokIcon className="w-3.5 h-3.5" />
                    {siteConfig.tiktokHandle}
                  </Button>
                </a>
              </div>
            </div>

            {/* Studio Info & Navigation in Ashdod */}
            <div className="rounded-2xl bg-champagne-100/80 p-4 border border-nude-200/50 space-y-3">
              <div className="flex items-start gap-2 text-xs text-espresso-700/90">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Локация студии:</strong> {siteConfig.address}
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1 border-t border-nude-200/50">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-gold-dark hover:underline flex items-center gap-1 font-medium"
                >
                  <ExternalLink className="w-3 h-3" />
                  Открыть Google Maps
                </a>
                <span className="text-nude-300">•</span>
                <a
                  href={siteConfig.appleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-gold-dark hover:underline flex items-center gap-1 font-medium"
                >
                  <ExternalLink className="w-3 h-3" />
                  Открыть Apple Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
