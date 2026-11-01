'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/config';

interface StickyBookingBarProps {
  onOpenBooking: () => void;
}

export function StickyBookingBar({ onOpenBooking }: StickyBookingBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-cream/95 backdrop-blur-md border-t border-nude-200/80 px-4 py-3 shadow-[0_-8px_20px_rgba(43,35,31,0.08)]">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[11px] uppercase tracking-wider text-gold font-semibold">
            {siteConfig.studioName}
          </span>
          <span className="text-xs text-espresso-900 font-medium">
            Ашдод • По записи
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="whatsapp"
            size="sm"
            onClick={onOpenBooking}
            className="shadow-sm font-semibold text-xs px-5 py-2.5 gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            Записаться
          </Button>
        </div>
      </div>
    </div>
  );
}
