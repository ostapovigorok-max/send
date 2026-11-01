'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { serviceCategories, siteConfig } from '@/lib/config';

interface ServicesMenuProps {
  onSelectService: (serviceName: string) => void;
}

export function ServicesMenu({ onSelectService }: ServicesMenuProps) {
  const [activeTab, setActiveTab] = useState<'lash' | 'brow'>('lash');

  const currentCategory = serviceCategories.find((cat) => cat.id === activeTab) || serviceCategories[0];

  return (
    <section id="services" className="py-20 lg:py-32 bg-cream">
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="luxury-eyebrow mb-3 block">Прайс-лист • Ашдод</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso-950 font-normal">
            Услуги и стоимость
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
          <p className="text-sm sm:text-base text-espresso-700/80 font-light">
            Профессиональный уход, сертифицированные гипоаллергенные материалы и длительная носка в климате Израиля.
          </p>

          {/* Category Toggle Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-champagne-100 border border-nude-200/80 shadow-inner">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-espresso-800 text-champagne-100 shadow-sm'
                    : 'text-espresso-700 hover:text-espresso-950'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category Description Banner */}
        <div className="mb-10 text-center max-w-xl mx-auto">
          <p className="font-serif text-xl text-espresso-900 italic">
            "{currentCategory.tagline}"
          </p>
          <p className="text-xs text-espresso-600 mt-1">
            {currentCategory.description}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {currentCategory.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card
                variant="champagne"
                className="h-full flex flex-col justify-between hover:shadow-luxury-hover border-nude-200/90 transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar: Title, Badge & Price */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-espresso-900 font-medium group-hover:text-gold-dark transition-colors">
                        {service.name}
                      </h3>
                      {service.badge && (
                        <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-nude-200/70 text-espresso-800 text-[10px] uppercase tracking-wider font-semibold">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Exact Price with Israeli Shekel ₪ */}
                    <div className="text-right flex-shrink-0">
                      <span className="font-serif text-2xl sm:text-3xl font-medium text-espresso-950 block leading-tight">
                        {service.price}{' '}
                        <span className="text-base sm:text-lg font-normal text-gold-dark">
                          {siteConfig.currency}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Duration in Minutes (мин) */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cream border border-nude-200/60 text-espresso-700 text-xs font-medium mb-4">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    <span>Длительность: <strong>{service.duration} мин</strong></span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-espresso-700/80 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-nude-200/70 flex items-center justify-between gap-3">
                  <a
                    href="#details"
                    className="text-xs text-gold-dark hover:underline font-medium uppercase tracking-wider"
                  >
                    Уход и детали →
                  </a>

                  <Button
                    variant="espresso"
                    size="sm"
                    onClick={() => onSelectService(service.name)}
                    className="text-xs px-4 py-2"
                  >
                    Записаться
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
