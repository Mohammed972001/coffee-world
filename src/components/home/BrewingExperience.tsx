import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CoffeeIcon,
  TimerIcon,
  FlameIcon,
  ArrowLeftIcon,
} from 'lucide-react';

const methods = [
  {
    icon: CoffeeIcon,
    title: 'القهوة السعودية',
    desc: 'قهوة بالهيل والزعفران تُحضّر في الدلة على نار هادئة — رمز الكرم والضيافة',
    time: '١٥-٢٠ دقيقة',
  },
  {
    icon: FlameIcon,
    title: 'القهوة على الرمل',
    desc: 'قهوة تركية تُحضّر في الكنكة النحاسية على الرمل الساخن بقوام مخملي',
    time: '٥-٧ دقائق',
  },
  {
    icon: TimerIcon,
    title: 'القهوة على السبرتاية',
    desc: 'تحضير بدوي أصيل على لهب السبرتاية — لأغنى وأعمق فنجان قهوة',
    time: '٤-٦ دقائق',
  },
  {
    icon: CoffeeIcon,
    title: 'القهوة العربية الكلاسيكية',
    desc: 'من المحماس إلى الهاون إلى الدلة — طقس اجتماعي متكامل',
    time: '٢٥-٣٠ دقيقة',
  },
];

export function BrewingExperience() {
  return (
    <section className="relative bg-warm-beige/40 py-20 lg:py-28 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 blob-shape-3 bg-gold/[0.04] blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-start">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative">
            <div className="relative">
              <img
                src="/images/hero-dallah-pour.png"
                alt="فن تحضير القهوة العربية"
                className="w-full h-[400px] lg:h-[580px] object-cover shadow-layered-lg"
                style={{ borderRadius: '2px 35% 2px 25%' }}
              />
              {/* Overlapping accent */}
              <div
                className="absolute -bottom-6 -left-6 w-36 h-44 bg-gold/10 backdrop-blur-sm border border-gold/20 flex items-center justify-center"
                style={{ borderRadius: '25% 2px 20% 2px' }}>
                <div className="text-center">
                  <span className="font-amiri text-3xl text-gold block">٤</span>
                  <span className="font-cairo text-[10px] text-deep-brown/60">
                    طرق تحضير تراثية
                  </span>
                </div>
              </div>
              {/* Dots decoration */}
              <div className="absolute -top-4 -right-4 grid grid-cols-4 gap-1.5 opacity-15">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <div className="lg:col-span-7 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1.5px] bg-gold" />
              <span className="font-cairo text-xs tracking-[0.15em] text-gold">
                إتقان التحضير العربي
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-amiri text-4xl lg:text-5xl text-deep-brown mb-4">
              فن <span className="text-gold">التحضير</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="font-cairo text-coffee-medium/70 text-sm leading-relaxed max-w-md mb-10">
              من القهوة السعودية بالهيل والزعفران إلى القهوة على الرمل الساخن — كل طريقة تحمل تراثاً عربياً أصيلاً.
            </motion.p>

            {/* Method cards - overlapping panels */}
            <div className="space-y-4">
              {methods.map((method, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className={`group relative bg-white/80 backdrop-blur-sm p-5 shadow-layered hover:shadow-layered-lg transition-all duration-400 cursor-pointer ${
                    i % 2 === 0 ? 'lg:mr-6' : 'lg:ml-6'
                  }`}
                  style={{
                    borderRadius:
                      i % 2 === 0 ? '2px 16px 2px 12px' : '12px 2px 16px 2px',
                  }}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <method.icon className="w-4.5 h-4.5 text-gold" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-amiri text-lg text-deep-brown group-hover:text-gold transition-colors">
                          {method.title}
                        </h3>
                        <span className="font-cairo text-[10px] text-coffee-medium/50 bg-warm-beige/50 px-2.5 py-1 rounded-full">
                          {method.time}
                        </span>
                      </div>
                      <p className="font-cairo text-xs text-coffee-medium/60 leading-relaxed">
                        {method.desc}
                      </p>
                    </div>
                  </div>
                  {/* Gold accent line on hover */}
                  <div className="absolute top-0 right-0 w-[2px] h-0 bg-gold group-hover:h-full transition-all duration-500 rounded-full" />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8">
              <Link
                to="/brewing"
                className="group inline-flex items-center gap-2 font-cairo text-sm text-gold hover:text-dark-gold transition-colors">
                اكتشف جميع طرق التحضير
                <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}