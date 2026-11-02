'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Check, Gift, Tag } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { comboPackages, siteConfig } from '@/lib/config';

interface ComboPackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export function ComboPackages({ onSelectPackage }: ComboPackagesProps) {
  return (
    <section id="combos" className="py-20 lg:py-32 bg-champagne-100/60 relative overflow-hidden">
      {/* Subtle ambient blur */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-nude-200/50 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="luxury-eyebrow mb-3 block">Комплексный уход • Выгода</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso-950 font-normal">
            Комбо-пакеты
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
          <p className="text-sm sm:text-base text-espresso-700/80 font-light">
            Специальные комплексные сеты: максимум выразительности, экономия времени и специальная выгода до 60 ₪.
          </p>
        </div>

        {/* 3 Combo Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {comboPackages.map((pkg, index) => {
            const isFirstVisit = pkg.id === 'combo-welcome';

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex"
              >
                <Card
                  variant={index === 0 ? 'champagne' : 'cream'}
                  className={`w-full flex flex-col justify-between hover:shadow-luxury-hover transition-all duration-300 relative group border ${
                    index === 0
                      ? 'border-gold/60 shadow-md ring-1 ring-gold/20'
                      : 'border-nude-200/90'
                  }`}
                >
                  {/* Card Content Top */}
                  <div>
                    {/* Badge & Savings Ribbon */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold/15 text-espresso-900 border border-gold/30 text-xs font-semibold tracking-wider uppercase">
                        <Tag className="w-3 h-3 text-gold-dark" />
                        {pkg.badge}
                      </span>

                      {pkg.duration && (
                        <span className="inline-flex items-center gap-1 text-xs text-espresso-700 font-medium">
                          <Clock className="w-3.5 h-3.5 text-gold" />
                          {pkg.duration}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl text-espresso-950 font-medium mb-2 group-hover:text-gold-dark transition-colors">
                      «{pkg.name}»
                    </h3>

                    <p className="text-xs text-espresso-700/80 leading-relaxed mb-6 font-light">
                      {pkg.description}
                    </p>

                    {/* Price Block */}
                    <div className="p-4 rounded-2xl bg-champagne-100/90 border border-nude-200/70 mb-6 space-y-1.5">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-xs text-espresso-600 uppercase tracking-wider font-semibold">
                          Стоимость:
                        </span>
                        <div className="text-right">
                          <span className="font-serif text-2xl sm:text-3xl font-medium text-espresso-950 block leading-tight">
                            {pkg.price}
                          </span>
                          {pkg.regularPrice && (
                            <span className="text-xs text-espresso-600 line-through block mt-0.5">
                              Раздельно: {pkg.regularPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      {pkg.savings && (
                        <div className="pt-2 border-t border-nude-200/60 flex items-center justify-between text-xs font-medium text-emerald-800">
                          <span>Спецпредложение:</span>
                          <span className="font-semibold px-2 py-0.5 rounded bg-emerald-100/80 text-emerald-900">
                            {pkg.savings}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Composition Items */}
                    <div className="space-y-2.5 mb-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                        Состав пакета:
                      </p>
                      <ul className="space-y-2">
                        {pkg.composition.map((item, i) => (
                          <li
                            key={i}
                            className="text-xs sm:text-sm text-espresso-800/90 flex items-start gap-2.5"
                          >
                            <div className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 text-gold-dark mt-0.5">
                              <Check className="w-3 h-3 text-gold-dark stroke-[2.5]" />
                            </div>
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bonus / Note Highlight */}
                    {pkg.bonus && (
                      <div className="p-3.5 rounded-xl bg-gold/10 border border-gold/30 flex items-start gap-2.5 mb-6 text-xs text-espresso-900">
                        <Gift className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-semibold block text-gold-dark">Бонус первого визита:</strong>
                          <span>{pkg.bonus}</span>
                        </div>
                      </div>
                    )}

                    {pkg.note && (
                      <div className="p-3 rounded-xl bg-cream border border-nude-200/60 text-xs text-espresso-700/85 mb-6 font-light">
                        {pkg.note}
                      </div>
                    )}
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-4 border-t border-nude-200/70">
                    <Button
                      variant={index === 0 ? 'gold' : 'espresso'}
                      size="md"
                      fullWidth
                      onClick={() => onSelectPackage(`Комбо «${pkg.name}»`)}
                      className="shadow-sm"
                    >
                      {isFirstVisit ? 'Записаться с бонусом' : 'Записаться на комбо'}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
