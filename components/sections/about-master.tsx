'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sparkles, Check, HeartHandshake } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { siteConfig } from '@/lib/config';

export function AboutMaster() {
  const { aboutMaster } = siteConfig;

  return (
    <section id="about" className="py-20 lg:py-32 bg-cream">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait with 4:5 Aspect Ratio Guard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Outer decorative border */}
              <div className="absolute -inset-4 rounded-3xl border border-nude-300/60 rotate-1 pointer-events-none" />

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-luxury-hover bg-nude-200">
                <Image
                  src="/images/placeholders/about-master.jpg"
                  alt={`${siteConfig.masterName} - Master Portrait`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover warm-luxury-image"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-cream/95 backdrop-blur-md border border-white/60">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-nude-200/80 flex items-center justify-center text-gold-dark flex-shrink-0">
                      <Award className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-serif text-sm font-semibold text-espresso-900">
                        {aboutMaster.experienceYears} • Dedicated Artistry
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-espresso-600 font-medium">
                        Сертифицированный мастер • Lash & Brow Specialist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Sanitary Standards, Certificates */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <span className="luxury-eyebrow mb-2 block">О мастере • The Master's Philosophy</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso-950 font-normal leading-tight">
                {aboutMaster.title} — {siteConfig.masterName}
              </h2>
              <div className="w-16 h-[1px] bg-gold my-4" />
              <p className="text-sm sm:text-base text-espresso-700/85 leading-relaxed font-light">
                {aboutMaster.bio}
              </p>
            </div>

            {/* Sanitary & Safety Commitments */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-espresso-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold" />
                Стандарты безопасности и стерильности
                <span className="text-[10px] text-espresso-500 font-normal tracking-normal lowercase">/ sanitary standards</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutMaster.standards.map((std, i) => (
                  <Card key={i} variant="champagne" className="p-4 rounded-xl space-y-1">
                    <p className="font-serif text-base text-espresso-900 font-medium">
                      {std.title}
                    </p>
                    <p className="text-xs text-espresso-600/80 leading-relaxed font-light">
                      {std.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications List */}
            <div className="pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-espresso-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                Квалификация и сертификаты
                <span className="text-[10px] text-espresso-500 font-normal tracking-normal lowercase">/ qualifications</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-espresso-700/90 font-light">
                {aboutMaster.certificates.map((cert, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
