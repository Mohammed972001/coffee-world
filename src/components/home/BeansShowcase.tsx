import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, MapPinIcon } from 'lucide-react';

const beans = [
  {
    id: 'bean-1',
    name: 'يمنية حراز',
    origin: 'اليمن',
    region: 'حراز',
    roast: 'متوسط',
    roastLevel: 65,
    flavor: ['شوكولاتة داكنة', 'تمر', 'توابل'],
    price: '١٨٩',
    image: '/images/bean_yemen_haraz.png',
    badge: 'الأكثر مبيعاً',
  },
  {
    id: 'bean-2',
    name: 'إثيوبية يرغاتشيف',
    origin: 'إثيوبيا',
    region: 'سيدامو',
    roast: 'فاتح',
    roastLevel: 35,
    flavor: ['حمضيات', 'زهور', 'شاي'],
    price: '١٤٥',
    image: '/images/bean_ethiopia_yirg.png',
    badge: 'جديد',
  },
  {
    id: 'bean-3',
    name: 'كولومبية سوبريمو',
    origin: 'كولومبيا',
    region: 'هويلا',
    roast: 'متوسط-داكن',
    roastLevel: 78,
    flavor: ['كراميل', 'جوز', 'عسل'],
    price: '١٢٠',
    image: '/images/bean_colombia_supremo.png',
    badge: null,
  },
];

function RoastBar({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-2 w-full">
      <span className="font-cairo text-[9px] text-coffee-medium/40 flex-shrink-0">فاتح</span>
      <div className="flex-1 h-[5px] bg-warm-beige/15 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(to left, #3E2723, #8D6E63 ${100 - level}%, #C5A059)`,
          }}
        />
      </div>
      <span className="font-cairo text-[9px] text-coffee-medium/40 flex-shrink-0">داكن</span>
    </div>
  );
}

export function BeansShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative bg-cream py-24 lg:py-32 overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-shape-2 bg-warm-beige/20 blur-[100px]" />
      <div className="absolute bottom-20 left-[5%] w-64 h-64 coffee-stain opacity-15" />

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
              <div className="w-10 h-[1px] bg-gold" />
              <span className="font-cairo text-[11px] tracking-[0.2em] text-gold">
                من المزرعة إلى الفنجان
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-amiri text-4xl lg:text-6xl text-deep-brown"
            >
              حبوب القهوة{' '}
              <span className="text-gold italic">المحمصة</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/beans"
              className="group inline-flex items-center gap-2 font-cairo text-sm text-coffee-medium hover:text-gold transition-colors mt-4 lg:mt-0"
            >
              عرض جميع الحبوب
              <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Horizontal scroll cards — magazine editorial style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {beans.map((bean, i) => (
            <motion.div
              key={bean.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`group relative ${i === 1 ? 'md:-mt-8' : i === 2 ? 'md:mt-6' : ''}`}
              onMouseEnter={() => setHoveredId(bean.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${bean.id}?cat=beans`} className="block">
                <div className="relative">
                  {/* Image container — tall portrait */}
                  <div
                    className="relative h-[420px] lg:h-[480px] overflow-hidden shadow-layered transition-shadow duration-500 group-hover:shadow-layered-lg"
                    style={{
                      borderRadius: i === 0 ? '2px 50px 2px 35px' : i === 1 ? '35px 2px 50px 2px' : '2px 35px 2px 50px',
                    }}
                  >
                    <img
                      src={bean.image}
                      alt={bean.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />

                    {/* Badge */}
                    {bean.badge && (
                      <span
                        className="absolute top-5 right-5 bg-gold/90 text-white font-cairo text-[11px] px-4 py-1.5"
                        style={{ borderRadius: '2px 10px 2px 8px' }}
                      >
                        {bean.badge}
                      </span>
                    )}

                    {/* Content overlay */}
                    <div className="absolute bottom-0 right-0 left-0 p-6 lg:p-7">
                      {/* Origin */}
                      <div className="flex items-center gap-1.5 mb-2">
                        <MapPinIcon className="w-3 h-3 text-gold/70" />
                        <span className="font-cairo text-[11px] text-warm-beige/60">
                          {bean.origin} — {bean.region}
                        </span>
                      </div>

                      {/* Name */}
                      <h3 className="font-amiri text-2xl lg:text-[1.7rem] text-white mb-3 group-hover:text-gold transition-colors">
                        {bean.name}
                      </h3>

                      {/* Flavor tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {bean.flavor.map((f) => (
                          <span
                            key={f}
                            className="font-cairo text-[10px] px-2.5 py-1 bg-white/10 text-warm-beige/80 backdrop-blur-sm"
                            style={{ borderRadius: '2px 8px 2px 6px' }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>

                      {/* Roast bar */}
                      <div className="mb-4">
                        <span className="font-cairo text-[10px] text-gold/60 mb-1.5 block">
                          التحميص: {bean.roast}
                        </span>
                        <RoastBar level={bean.roastLevel} />
                      </div>

                      {/* Price */}
                      <div className="flex items-end justify-between">
                        <div>
                          <span className="font-amiri text-2xl text-gold">{bean.price}</span>
                          <span className="font-cairo text-xs text-gold/60 mr-1">ر.س</span>
                        </div>
                        <span className="font-cairo text-[11px] text-warm-beige/40 border border-warm-beige/15 px-3 py-1.5 group-hover:border-gold/40 group-hover:text-gold/70 transition-all">
                          التفاصيل
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
