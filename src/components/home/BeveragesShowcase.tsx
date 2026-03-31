import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, FlameIcon, SnowflakeIcon } from 'lucide-react';

const beverages = [
  {
    id: 'bev-1',
    name: 'قهوة عربية بالهيل',
    nameEn: 'Arabic Coffee with Cardamom',
    price: '٢٥',
    category: 'ساخن',
    description: 'قهوة عربية أصيلة محضّرة بالدلة مع هيل فاخر وماء الورد، تُقدم بالفنجال التقليدي',
    image: '/images/saudi-gahwa.png',
  },
  {
    id: 'bev-2',
    name: 'لاتيه بالتمر',
    nameEn: 'Date Latte',
    price: '٣٨',
    category: 'ساخن',
    description: 'إسبريسو مزدوج مع حليب مبخر ومعجون التمر المدني الفاخر وقرفة سيلانية',
    image: '/images/classic-arabic.png',
  },
  {
    id: 'bev-3',
    name: 'كولد برو بالزعفران',
    nameEn: 'Saffron Cold Brew',
    price: '٤٢',
    category: 'بارد',
    description: 'قهوة مختصة مستخلصة على البارد لمدة ١٨ ساعة مع خيوط الزعفران وماء الورد',
    image: '/images/sand-coffee.png',
  },
  {
    id: 'bev-4',
    name: 'موكا سعودي',
    nameEn: 'Saudi Mocha',
    price: '٣٥',
    category: 'ساخن',
    description: 'شوكولاتة بلجيكية داكنة مع إسبريسو يمني وحليب محلي مبخر وكاكاو خام',
    image: '/images/spertaya-brewing.png',
  },
];

export function BeveragesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = beverages[activeIdx];

  return (
    <section className="relative bg-espresso py-24 lg:py-32 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[100px]" />
        <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] rounded-full bg-coffee-dark/50 blur-[80px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-[1px] bg-gold/60" />
              <span className="font-cairo text-[11px] tracking-[0.2em] text-gold/70 uppercase">
                قائمة المشروبات
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-amiri text-4xl lg:text-6xl text-warm-beige leading-tight"
            >
              مشروبات{' '}
              <span className="text-gold italic">القهوة</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-cairo text-sm text-warm-beige/40 max-w-xs mt-4 lg:mt-0 leading-relaxed"
          >
            تذوق الفن في كل فنجان — مشروبات مصنوعة بعناية تجمع بين أصالة الموروث وإبداع العصر
          </motion.p>
        </div>

        {/* Immersive cafe-menu layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          {/* Left: Large active beverage image */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative h-[380px] sm:h-[480px] lg:h-[560px]">
                  {/* Main image */}
                  <div
                    className="absolute top-0 right-0 w-[88%] h-[92%] overflow-hidden shadow-layered-lg"
                    style={{ borderRadius: '2px 60px 2px 40px' }}
                  >
                    <img
                      src={active.image}
                      alt={active.name}
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-espresso/10" />
                  </div>

                  {/* Floating info card — overlaps image */}
                  <motion.div
                    key={`card-${active.id}`}
                    initial={{ opacity: 0, x: -20, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="absolute bottom-0 left-0 w-[58%] sm:w-[48%] z-20 p-6 lg:p-8"
                    style={{
                      background: 'linear-gradient(135deg, rgba(27,14,7,0.95), rgba(44,26,18,0.92))',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '30px 2px 24px 2px',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                    }}
                  >
                    <span className="font-cairo text-[10px] tracking-[0.15em] text-gold/60 block mb-2">
                      {active.nameEn}
                    </span>
                    <h3 className="font-amiri text-2xl lg:text-3xl text-warm-beige mb-3">
                      {active.name}
                    </h3>
                    <p className="font-cairo text-xs text-warm-beige/50 leading-relaxed mb-4 line-clamp-3">
                      {active.description}
                    </p>
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="font-amiri text-3xl text-gold">{active.price}</span>
                        <span className="font-cairo text-xs text-gold/60 mr-1">ر.س</span>
                      </div>
                      <span className="flex items-center gap-1.5 text-warm-beige/40">
                        {active.category === 'ساخن' ? (
                          <FlameIcon className="w-3.5 h-3.5 text-orange-400/70" />
                        ) : (
                          <SnowflakeIcon className="w-3.5 h-3.5 text-blue-300/70" />
                        )}
                        <span className="font-cairo text-[11px]">{active.category}</span>
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Menu list with product thumbnails */}
          <div className="lg:col-span-5 lg:pr-4">
            <div className="flex flex-col gap-1">
              {beverages.map((bev, i) => (
                <motion.button
                  key={bev.id}
                  onClick={() => setActiveIdx(i)}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`group relative text-right w-full py-4 px-4 transition-all duration-500 ${
                    activeIdx === i
                      ? 'bg-gold/[0.07]'
                      : 'hover:bg-white/[0.02]'
                  }`}
                  style={{
                    borderRadius: activeIdx === i ? '2px 16px 2px 12px' : '0',
                  }}
                >
                  {/* Active indicator bar */}
                  {activeIdx === i && (
                    <motion.div
                      layoutId="bev-indicator"
                      className="absolute right-0 top-3 bottom-3 w-[3px] bg-gold"
                      style={{ borderRadius: '3px' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-4">
                    {/* Product thumbnail */}
                    <div
                      className={`relative w-16 h-16 flex-shrink-0 overflow-hidden transition-all duration-500 ${
                        activeIdx === i
                          ? 'ring-2 ring-gold/50 shadow-gold-glow'
                          : 'opacity-50 group-hover:opacity-80'
                      }`}
                      style={{ borderRadius: '2px 12px 2px 10px' }}
                    >
                      <img
                        src={bev.image}
                        alt={bev.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4
                          className={`font-amiri text-lg transition-colors duration-300 truncate ${
                            activeIdx === i ? 'text-gold' : 'text-warm-beige/70 group-hover:text-warm-beige'
                          }`}
                        >
                          {bev.name}
                        </h4>
                        <span className="flex items-center gap-1 flex-shrink-0">
                          {bev.category === 'ساخن' ? (
                            <FlameIcon className={`w-3 h-3 ${activeIdx === i ? 'text-orange-400/70' : 'text-warm-beige/15'}`} />
                          ) : (
                            <SnowflakeIcon className={`w-3 h-3 ${activeIdx === i ? 'text-blue-300/70' : 'text-warm-beige/15'}`} />
                          )}
                        </span>
                      </div>
                      <p
                        className={`font-cairo text-[11px] transition-all duration-300 ${
                          activeIdx === i ? 'text-warm-beige/40 max-h-8 opacity-100' : 'text-warm-beige/0 max-h-0 opacity-0'
                        } overflow-hidden truncate`}
                      >
                        {bev.description}
                      </p>
                    </div>

                    {/* Price */}
                    <span
                      className={`font-amiri text-lg transition-colors duration-300 flex-shrink-0 ${
                        activeIdx === i ? 'text-gold' : 'text-warm-beige/25'
                      }`}
                    >
                      {bev.price} <span className="text-xs">ر.س</span>
                    </span>
                  </div>

                  {/* Divider line */}
                  {i < beverages.length - 1 && (
                    <div className="absolute bottom-0 right-5 left-5 h-[1px] bg-warm-beige/[0.06]" />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 pr-5"
            >
              <Link
                to="/beverages"
                className="group inline-flex items-center gap-3 font-cairo text-sm text-gold/80 hover:text-gold transition-colors"
              >
                عرض جميع المشروبات
                <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
