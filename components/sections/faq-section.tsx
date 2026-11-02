'use client';

import React from 'react';
import { HelpCircle } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/social-icons';
import { Container } from '@/components/ui/container';
import { AccordionItem } from '@/components/ui/accordion';
import { faqData, siteConfig } from '@/lib/config';

export function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-cream">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="luxury-eyebrow mb-3 block">Частые вопросы • Ашдод</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso-950 font-normal">
            Вопросы и ответы
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
          <p className="text-sm sm:text-base text-espresso-700/80 font-light">
            Всё о подготовке к процедуре, носке в жарком климате Израиля и безопасности ваших глаз.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto bg-champagne-100/60 rounded-3xl border border-nude-200/80 overflow-hidden shadow-luxury">
          {faqData.map((item, index) => (
            <AccordionItem
              key={item.id}
              title={item.question}
              defaultOpen={index === 0}
            >
              <p className="text-xs sm:text-sm text-espresso-700/90 leading-relaxed font-light">
                {item.answer}
              </p>
            </AccordionItem>
          ))}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-espresso-600/80 mb-3">
            Остались вопросы или нужна индивидуальная консультация?
          </p>
          <a
            href={siteConfig.instagram1}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold-dark font-semibold hover:underline"
          >
            <InstagramIcon className="w-4 h-4" />
            Задать вопрос в Instagram Direct ({siteConfig.instagram1Handle}) →
          </a>
        </div>
      </Container>
    </section>
  );
}
