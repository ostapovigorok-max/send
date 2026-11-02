'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sparkles, Check, HeartHandshake, Camera } from 'lucide-react';
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

        {/* Block 1: Гарантия стерильности — стандарт медицинской безопасности */}
        <div className="mt-20 pt-16 border-t border-nude-200/80">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="luxury-eyebrow mb-2 block">Медицинский протокол • 100% стерильность</span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-espresso-950 font-normal">
              Гарантия стерильности: стандарт медицинской безопасности
            </h3>
            <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
            <p className="text-sm sm:text-base text-espresso-700/90 leading-relaxed font-light">
              Пинцеты проходят 3 этапа: дезинфекция в растворе, ультразвуковая очистка и термостерилизация в медицинском сухожаре при 180°C. Крафт-пакет с индикатором стерильности вскрывается исключительно в вашем присутствии.
            </p>
          </div>

          {/* 3 Photo Placeholders with captions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Photo 1: Сухожар */}
            <Card variant="champagne" className="overflow-hidden p-0 border-nude-200/90 group flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-nude-200">
                  <Image
                    src="/images/placeholders/sterilization-dry-heat.svg"
                    alt="Сухожар для стерилизации инструментов Polilash Ashdod"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-espresso-950/80 text-champagne-100 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm">
                    Этап 3: Сухожар 180°C
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-base sm:text-lg text-espresso-900 font-medium mb-1.5">
                    Медицинский сухожар
                  </h4>
                  <p className="text-xs text-espresso-700/80 leading-relaxed font-light">
                    Сертифицированная термическая обработка при 180°C — гарантия 100% уничтожения любых микроорганизмов.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-4 pt-2 border-t border-nude-200/60 text-[11px] text-espresso-500 font-light flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-gold" />
                <span>Фото сухожара в студии</span>
              </div>
            </Card>

            {/* Photo 2: Процесс загрузки */}
            <Card variant="champagne" className="overflow-hidden p-0 border-nude-200/90 group flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-nude-200">
                  <Image
                    src="/images/placeholders/sterilization-loading.svg"
                    alt="Процесс загрузки и очистки инструментов перед сухожаром"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-espresso-950/80 text-champagne-100 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm">
                    Этапы 1–2: Дезинфекция + УЗ
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-base sm:text-lg text-espresso-900 font-medium mb-1.5">
                    Процесс загрузки и очистки
                  </h4>
                  <p className="text-xs text-espresso-700/80 leading-relaxed font-light">
                    Предстерилизационная обработка в дезрастворе и ультразвуковая чистка микрочастиц перед термокамерой.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-4 pt-2 border-t border-nude-200/60 text-[11px] text-espresso-500 font-light flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-gold" />
                <span>Фото процесса подготовки</span>
              </div>
            </Card>

            {/* Photo 3: Крафт-пакет с индикатором */}
            <Card variant="champagne" className="overflow-hidden p-0 border-nude-200/90 group flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-nude-200">
                  <Image
                    src="/images/placeholders/sterilization-kraft-bag.svg"
                    alt="Крафт-пакет с индикатором стерильности инструментов"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-800 text-white text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm">
                    Вскрытие при вас
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-base sm:text-lg text-espresso-900 font-medium mb-1.5">
                    Крафт-пакет с индикатором
                  </h4>
                  <p className="text-xs text-espresso-700/80 leading-relaxed font-light">
                    Химический индикатор изменяет цвет при успешной стерилизации. Пакет распечатывается только перед вами.
                  </p>
                </div>
              </div>
              <div className="px-5 pb-4 pt-2 border-t border-nude-200/60 text-[11px] text-espresso-500 font-light flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-gold" />
                <span>Фото крафт-пакета с индикатором</span>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
