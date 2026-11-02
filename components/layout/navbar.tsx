'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles, MapPin } from 'lucide-react';
import { WhatsAppIcon, TelegramIcon, InstagramIcon } from '@/components/ui/social-icons';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/config';

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Услуги и цены', href: '#services' },
    { label: 'До и после', href: '#transformations' },
    { label: 'Уход', href: '#details' },
    { label: 'Портфолио', href: '#portfolio' },
    { label: 'О мастере', href: '#about' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Контакты', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-nude-200/80 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <Container size="xl">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="group flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold group-hover:rotate-12 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-wide text-espresso-900 font-medium leading-none">
                {siteConfig.studioName}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-gold font-semibold mt-1 flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-gold" />
                {siteConfig.address}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-luxury text-espresso-800/80 hover:text-gold transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:bg-champagne-200/50 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center"
              aria-label="WhatsApp"
              title={`WhatsApp: ${siteConfig.phone}`}
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.getTelegramBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:bg-champagne-200/50 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center"
              aria-label="Telegram"
              title={`Telegram: ${siteConfig.telegramHandle}`}
            >
              <TelegramIcon className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.instagram1}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:bg-champagne-200/50 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center"
              aria-label="Instagram"
              title={`Instagram: ${siteConfig.instagram1Handle}`}
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <Button variant="whatsapp" size="sm" onClick={onOpenBooking} className="gap-1.5">
              <WhatsAppIcon className="w-3.5 h-3.5" variant="inverted" />
              Записаться
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-espresso-900 hover:bg-nude-200/40 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Slide-down Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream border-b border-nude-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-lg text-espresso-900 hover:text-gold transition-colors py-1 border-b border-nude-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <a
              href={siteConfig.getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="whatsapp"
                fullWidth
                size="md"
                className="gap-2 text-xs"
              >
                <WhatsAppIcon className="w-4 h-4" variant="inverted" />
                Записаться в WhatsApp ({siteConfig.phone})
              </Button>
            </a>

            <a
              href={siteConfig.getTelegramBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="telegram"
                fullWidth
                size="md"
                className="gap-2 text-xs"
              >
                <TelegramIcon className="w-4 h-4" variant="inverted" />
                Написать в Telegram ({siteConfig.telegramHandle})
              </Button>
            </a>

            <Button
              variant="outline"
              fullWidth
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="text-xs"
            >
              Все контакты и навигация
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
