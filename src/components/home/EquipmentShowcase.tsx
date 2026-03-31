import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';

const equipment = [
  {
    id: '201',
    name: 'دلة سعودية نحاسية',
    nameEn: 'Premium Brass Dallah',
    category: 'تقليدي',
    price: '٨٥٠',
    material: 'نحاس مطلي بالذهب',
    description: 'دلة عربية تقليدية مصنوعة يدوياً من النحاس الأصيل مع نقوش إسلامية هندسية',
    image: '/images/dallah-hero.png',
  },
  {
    id: '202',
    name: 'كنكة تركية نحاسية',
    nameEn: 'Turkish Copper Cezve',
    category: 'تقليدي',
    price: '٣٢٠',
    material: 'نحاس مطروق يدوياً',
    description: 'كنكة تركية أصيلة من النحاس المطروق يدوياً بمقبض خشب الجوز',
    image: '/images/kanaka-hero.png',
  },
  {
    id: '206',
    name: 'محماس قهوة يدوي',
    nameEn: 'Coffee Roasting Pan',
    category: 'تقليدي',
    price: '٥٨٠',
    material: 'حديد مطروق',
    description: 'محماس حديد يدوي بمقبض طويل لتحميص البن الأخضر على النار المباشرة',
    image: '/images/mihmas-roasting.png',
  },
  {
    id: '209',
    name: 'رحاية بن خشبية',
    nameEn: 'Wooden Coffee Grinder',
    category: 'حديث',
    price: '٤٨٠',
    material: 'خشب الجوز + نحاس',
    description: 'رحاية خشبية تراثية مصنوعة من خشب الجوز مع آلية طحن نحاسية',
    image: '/images/wooden-grinder.png',
  },
];

const categories = ['الكل', 'تقليدي', 'حديث'];

export function EquipmentShowcase() {
  const [activeFilter, setActiveFilter] = useState('الكل');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = activeFilter === 'الكل'
    ? equipment
    : equipment.filter((e) => e.category === activeFilter);

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #EDE8E3 0%, #F5F0EB 50%, #FAF8F5 100%)' }}
    >
      {/* Decorative corner accents */}
      <div className="absolute top-12 right-12 w-20 h-20 border-t-[1px] border-r-[1px] border-gold/15 hidden lg:block" />
      <div className="absolute bottom-12 left-12 w-20 h-20 border-b-[1px] border-l-[1px] border-gold/15 hidden lg:block" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header with filter tabs */}
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
                أدوات التحضير
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-amiri text-4xl lg:text-6xl text-deep-brown"
            >
              معدات{' '}
              <span className="text-gold italic">القهوة</span>
            </motion.h2>
          </div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-1 mt-6 lg:mt-0 p-1 bg-white/60 backdrop-blur-sm shadow-layered"
            style={{ borderRadius: '2px 12px 2px 10px' }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative font-cairo text-xs px-5 py-2.5 transition-all duration-400 ${
                  activeFilter === cat ? 'text-white' : 'text-coffee-medium/60 hover:text-deep-brown'
                }`}
              >
                {activeFilter === cat && (
                  <motion.div
                    layoutId="eq-filter"
                    className="absolute inset-0 bg-deep-brown"
                    style={{ borderRadius: '2px 10px 2px 8px' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Equipment showcase — horizontal featured + side list */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/product/${item.id}?cat=equipment`}
                  className="block group"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div
                    className="relative h-[320px] lg:h-[360px] overflow-hidden transition-shadow duration-500 group-hover:shadow-layered-lg shadow-layered"
                    style={{
                      borderRadius: i % 2 === 0 ? '2px 32px 2px 24px' : '24px 2px 32px 2px',
                    }}
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{
                        background: hoveredId === item.id
                          ? 'linear-gradient(to top, rgba(27,14,7,0.88) 0%, rgba(27,14,7,0.4) 45%, transparent 75%)'
                          : 'linear-gradient(to top, rgba(27,14,7,0.75) 0%, rgba(27,14,7,0.2) 40%, transparent 65%)',
                      }}
                    />

                    {/* Category badge */}
                    <span
                      className="absolute top-5 right-5 z-10 font-cairo text-[10px] px-3 py-1 bg-deep-brown/80 text-warm-beige/80 backdrop-blur-sm"
                      style={{ borderRadius: '2px 8px 2px 6px' }}
                    >
                      {item.category}
                    </span>

                    {/* Content */}
                    <div className="absolute bottom-0 right-0 left-0 p-6 lg:p-8 z-10">
                      <span className="font-cairo text-[10px] tracking-[0.1em] text-gold/50 block mb-1">
                        {item.nameEn}
                      </span>
                      <h3 className="font-amiri text-2xl text-white mb-1.5 group-hover:text-gold transition-colors">
                        {item.name}
                      </h3>

                      {/* Description — revealed on hover */}
                      <motion.p
                        initial={false}
                        animate={{
                          height: hoveredId === item.id ? 'auto' : 0,
                          opacity: hoveredId === item.id ? 1 : 0,
                          marginBottom: hoveredId === item.id ? 12 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="font-cairo text-xs text-warm-beige/50 leading-relaxed overflow-hidden"
                      >
                        {item.description}
                      </motion.p>

                      <div className="flex items-end justify-between">
                        <div>
                          <span className="font-cairo text-[10px] text-warm-beige/30 block">
                            {item.material}
                          </span>
                          <span className="font-amiri text-2xl text-gold">
                            {item.price}{' '}
                            <span className="text-sm text-gold/60">ر.س</span>
                          </span>
                        </div>
                        <motion.span
                          animate={{ x: hoveredId === item.id ? -4 : 0 }}
                          className="flex items-center gap-1 text-warm-beige/30 group-hover:text-gold/70 transition-colors"
                        >
                          <span className="font-cairo text-[11px]">التفاصيل</span>
                          <ArrowLeftIcon className="w-4 h-4" />
                        </motion.span>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute top-4 left-4 w-8 h-8">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gold/15" />
                      <div className="absolute top-0 left-0 w-[1px] h-full bg-gold/15" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link
            to="/equipment"
            className="group inline-flex items-center gap-3 bg-deep-brown hover:bg-coffee-dark text-warm-beige font-cairo font-semibold text-sm px-8 py-4 transition-all duration-400 shadow-layered hover:shadow-layered-lg"
            style={{ borderRadius: '2px 16px 2px 12px' }}
          >
            <span>تصفح جميع المعدات</span>
            <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
