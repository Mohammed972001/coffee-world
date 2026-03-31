import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-cream pt-24 pb-16 lg:pt-0 lg:pb-0">
      {/* Background decorative elements */}
      <div className="absolute top-32 right-[10%] w-[500px] h-[500px] blob-shape bg-gold/[0.04] blur-2xl" />
      <div className="absolute bottom-20 left-[5%] w-72 h-72 blob-shape-2 bg-warm-beige/30 blur-xl" />

      {/* Coffee stain ring decoration */}
      <div className="absolute top-[15%] left-[15%] w-40 h-40 coffee-stain opacity-40 hidden lg:block" />
      <div className="absolute bottom-[25%] right-[8%] w-24 h-24 coffee-stain opacity-25 hidden lg:block" />

      {/* Main broken grid layout */}
      <div className="max-w-[1400px] mx-auto px-6 min-h-screen flex items-center relative">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text content - broken grid positioning */}
          <div className="lg:col-span-6 relative z-20 lg:pr-4">
            {/* Small decorative label */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1.5px] bg-gold" />
              <span className="font-cairo text-xs tracking-[0.2em] text-gold uppercase">
                قهوة عربية فاخرة
              </span>
            </motion.div>

            {/* Main heading - massive, asymmetric */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-amiri text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.1] text-deep-brown mb-0">
              <span className="block">اكتشف</span>
              <span className="block text-gold mr-8 lg:mr-16">عالم</span>
              <span className="block">القهوة</span>
            </motion.h1>

            {/* Subtitle - overlapping position */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-cairo text-coffee-medium/80 text-base lg:text-lg mt-6 lg:mt-4 lg:-mr-12 max-w-md leading-relaxed relative z-10">
              رحلة استثنائية من حبة البن العربي إلى الدلة الذهبية، نقدم لكم أجود أنواع البن من مزارع اليمن وإثيوبيا بأيدٍ سعودية
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-10 flex items-center gap-6">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 bg-gold hover:bg-dark-gold text-white font-cairo font-semibold px-8 py-4 transition-all duration-400 shadow-gold-glow hover:shadow-lg">
                <span>تسوق الآن</span>
                <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </Link>
              <Link
                to="/story"
                className="font-cairo text-sm text-deep-brown/70 hover:text-gold border-b border-deep-brown/20 hover:border-gold pb-1 transition-all duration-300">
                اكتشف قصتنا
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-14 flex items-center gap-8 lg:gap-12">
              {[
                { number: '+٥٠', label: 'صنف قهوة' },
                { number: '+١٢', label: 'بلد منشأ' },
                { number: '+٨', label: 'سنوات خبرة' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <span className="font-amiri text-2xl lg:text-3xl text-gold block">
                    {stat.number}
                  </span>
                  <span className="font-cairo text-[11px] text-coffee-medium/60 mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image area - broken grid, overlapping */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            {/* Gold blob behind image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="absolute -top-12 -right-8 w-[110%] h-[110%] blob-shape-2 bg-gradient-to-br from-gold/10 via-warm-beige/20 to-transparent"
            />

            {/* Main hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative z-10">
              <div className="relative">
                <img
                  src="/images/hero-dallah-pour.png"
                  alt="قهوة عربية فاخرة — دلة وفنجال"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover shadow-layered-lg"
                  style={{ borderRadius: '2px 40% 2px 30%' }}
                />

                {/* Overlapping accent image */}
                <motion.div
                  initial={{ opacity: 0, x: -30, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-8 -left-6 lg:-left-16 w-40 h-52 lg:w-52 lg:h-64 z-20 shadow-layered">
                  <img
                    src="/images/hero-roasting-beans.png"
                    alt="تحميص البن العربي"
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '30% 2px 25% 2px' }}
                  />
                </motion.div>

                {/* Floating label card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="absolute top-8 -left-4 lg:-left-10 bg-white/95 backdrop-blur-sm p-4 shadow-layered z-20"
                  style={{ borderRadius: '2px 20% 2px 15%' }}>
                  <span className="font-amiri text-gold text-lg block">
                    ١٠٠٪
                  </span>
                  <span className="font-cairo text-[10px] text-coffee-medium/70">
                    بن عربي أصيل
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative dots pattern */}
            <div className="absolute -top-4 right-8 grid grid-cols-5 gap-2 opacity-20">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-cairo text-[10px] text-coffee-medium/40 tracking-widest">
          اكتشف المزيد
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-coffee-medium/20 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-gold/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}