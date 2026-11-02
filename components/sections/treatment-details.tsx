'use client';

import React from 'react';
import { ShieldAlert, Sparkles, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { AccordionItem } from '@/components/ui/accordion';
import { services } from '@/lib/config';

export function TreatmentDetails() {
  return (
    <section id="details" className="py-20 lg:py-32 bg-cream">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="luxury-eyebrow mb-3 block">Безопасность и уход</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso-950 font-normal">
            Детали процедур и уход
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
          <p className="text-sm sm:text-base text-espresso-700/80 font-light">
            Полные рекомендации по правильному домашнему уходу, длительности носки и противопоказаниям.
          </p>
        </div>

        {/* Global Critical Care Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card
            variant="champagne"
            className="border-gold/50 bg-gradient-to-r from-champagne-100 via-nude-100/50 to-champagne-100 p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 text-gold-dark mt-1">
                <AlertTriangle className="w-5 h-5 text-gold-dark" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-lg sm:text-xl text-espresso-900 font-medium">
                  Золотое правило первых 24 часов
                </h3>
                <p className="text-xs sm:text-sm text-espresso-700/85 leading-relaxed font-light">
                  Клею и кератиновым составам нужны полные сутки для полной полимеризации. Строго избегайте горячего душа, бани, сауны, бассейна и активных тренировок в течение первых 24 часов после процедуры.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Accordion List for Each Service */}
        <div className="max-w-4xl mx-auto bg-cream rounded-3xl border border-nude-200/90 overflow-hidden shadow-luxury">
          {services.map((service, index) => (
            <AccordionItem
              key={service.id}
              title={service.name}
              badge={service.badge || `${service.duration} мин`}
              defaultOpen={index === 0}
            >
              <div className="space-y-6 pt-2">
                {/* Procedure Breakdown */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gold-dark mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-gold" />
                    Описание процедуры
                  </h4>
                  <p className="text-xs sm:text-sm text-espresso-700/90 leading-relaxed font-light">
                    {service.details.procedure}
                  </p>
                </div>

                {/* Longevity */}
                <div className="p-3.5 rounded-xl bg-champagne-100/70 border border-nude-200/50 flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-espresso-800">
                    <strong>Ожидаемая длительность носки:</strong> {service.details.longevity}
                  </div>
                </div>

                {/* Aftercare Rules */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-espresso-900 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Домашний уход
                  </h4>
                  <ul className="space-y-1.5">
                    {service.details.aftercare.map((item, i) => (
                      <li key={i} className="text-xs text-espresso-700/85 flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contraindications & Allergy Notice */}
                <div className="p-4 rounded-xl bg-nude-100/60 border border-nude-300/40">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-espresso-900 mb-2 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                    Противопоказания и предостережения
                  </h4>
                  <ul className="space-y-1">
                    {service.details.contraindications.map((contra, i) => (
                      <li key={i} className="text-xs text-espresso-700/80">
                        • {contra}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionItem>
          ))}
        </div>
      </Container>
    </section>
  );
}
