import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { StarIcon, ShoppingBagIcon, ArrowLeftIcon, SparklesIcon } from 'lucide-react';

const categories = [
  { key: 'all', label: 'الكل' },
  { key: 'brewing', label: 'أدوات التحضير' },
  { key: 'serving', label: 'أدوات التقديم' },
  { key: 'accessories', label: 'الملحقات والأدوات' },
];

const heroEquipment = [
  {
    id: 201,
    name: 'دلة سعودية نحاسية',
    nameEn: 'Dallah',
    category: 'serving',
    price: '٨٥٠',
    rating: 4.9,
    desc: 'دلة نحاسية أصيلة مصنوعة يدوياً بنقوش عربية تقليدية ومقبض معزول حرارياً — رمز الكرم والضيافة السعودية',
    longDesc: 'تُصنع هذه الدلة من النحاس الخالص على يد حرفيين سعوديين متخصصين، وتتميز بنقوش إسلامية هندسية محفورة يدوياً على جسمها. المنقار المدبب يسمح بسكب القهوة بدقة واحترافية.',
    image: '/images/dallah-hero.png',
    featured: true,
  },
  {
    id: 202,
    name: 'كنكة نحاسية تركية',
    nameEn: 'Kanaka — Brass Cezve',
    category: 'brewing',
    price: '٣٢٠',
    rating: 4.8,
    desc: 'كنكة (إبريق جذوة) نحاسية مطروقة يدوياً بمقبض خشبي طويل — الأداة التقليدية لتحضير القهوة التركية والعربية',
    longDesc: 'كنكة نحاسية كلاسيكية بسعة فنجانين، مطروقة يدوياً بأسلوب حرفي عثماني. الجسم النحاسي يوزع الحرارة بالتساوي، والمقبض الخشبي الطويل يحمي اليد من الحرارة.',
    image: '/images/kanaka-hero.png',
    featured: true,
  },
];

const equipment = [
  {
    id: 203,
    name: 'سبرتاية نحاسية تراثية',
    nameEn: 'Spertaya — Spirit Burner',
    category: 'brewing',
    price: '٤٥٠',
    rating: 4.7,
    desc: 'سبرتاية (موقد كحول) نحاسية تراثية لتسخين القهوة بالطريقة التقليدية على اللهب المكشوف',
    image: '/images/spertaya.png',
  },
  {
    id: 204,
    name: 'طقم فناجيل عربية',
    nameEn: 'Finjaan Set',
    category: 'serving',
    price: '٢٨٠',
    rating: 4.9,
    desc: 'طقم ٦ فناجيل قهوة عربية بدون مقابض بتصميم تراثي ونقوش ذهبية مطلية يدوياً',
    image: '/images/finjaan-set.png',
  },
  {
    id: 205,
    name: 'ملاعق قياس نحاسية',
    nameEn: 'Brass Measuring Spoons',
    category: 'accessories',
    price: '١٤٥',
    rating: 4.6,
    desc: 'طقم ملاعق قياس نحاسية يدوية الصنع مع حامل خشبي — لقياس البن والهيل والزعفران بدقة',
    image: '/images/brass-spoons.png',
  },
  {
    id: 206,
    name: 'محماس قهوة يدوي',
    nameEn: 'Coffee Roasting Pan',
    category: 'brewing',
    price: '٥٨٠',
    rating: 4.8,
    desc: 'محماس (مقلاة تحميص) حديد يدوي بمقبض طويل لتحميص البن الأخضر على النار المباشرة بالطريقة البدوية',
    image: '/images/mihmas-roasting.png',
  },
  {
    id: 207,
    name: 'هاون ومدقة نحاسية',
    nameEn: 'Brass Mortar & Pestle',
    category: 'accessories',
    price: '٢٢٠',
    rating: 4.5,
    desc: 'هاون ومدقة من النحاس المطروق لطحن البن والهيل يدوياً — صوت الدق إيذان بحضور القهوة',
    image: '/images/mortar-pestle.png',
  },
  {
    id: 208,
    name: 'صينية تقديم نحاسية',
    nameEn: 'Brass Serving Tray',
    category: 'serving',
    price: '٣٩٠',
    rating: 4.7,
    desc: 'صينية تقديم نحاسية دائرية بحواف مرتفعة ونقوش إسلامية هندسية — لتقديم القهوة والتمر بأناقة',
    image: '/images/serving-tray.png',
  },
  {
    id: 209,
    name: 'رحاية بن خشبية',
    nameEn: 'Wooden Coffee Grinder',
    category: 'accessories',
    price: '٤٨٠',
    rating: 4.8,
    desc: 'رحاية (مطحنة) خشبية تراثية مصنوعة من خشب الجوز مع آلية طحن نحاسية داخلية',
    image: '/images/wooden-grinder.png',
  },
];

export function Equipment() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered =
    activeCategory === 'all'
      ? equipment
      : equipment.filter((e) => e.category === activeCategory);

  return (
    <main className="bg-matte-black min-h-screen pt-28 pb-20 overflow-hidden">
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="relative max-w-[1500px] mx-auto px-6 mb-24">
        {/* Decorative background blobs */}
        <div className="absolute -top-20 right-[5%] w-[600px] h-[600px] blob-shape bg-gold/[0.03] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-[10%] w-80 h-80 blob-shape-2 bg-coffee-dark/40 blur-2xl pointer-events-none" />
        <div className="absolute top-[20%] left-[20%] w-32 h-32 coffee-stain opacity-10 hidden lg:block" />

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4 relative z-10">
          <div className="w-14 h-[1.5px] bg-gold" />
          <span className="font-cairo text-xs tracking-[0.2em] text-gold/80 uppercase">
            تراث الضيافة العربية
          </span>
        </motion.div>

        {/* Main title — massive asymmetric typography */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-amiri text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[7rem] leading-[1.05] text-white mb-4 relative z-10">
          <span className="block">معدات</span>
          <span className="block text-gold mr-10 lg:mr-24">القهوة</span>
          <span className="block text-warm-beige/30 text-3xl lg:text-4xl font-cairo mt-1" style={{ letterSpacing: '0.08em' }}>
            العربية الأصيلة
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-cairo text-sm text-warm-beige/40 max-w-lg mb-14 relative z-10 leading-relaxed">
          أدوات تراثية أصيلة مختارة بعناية من أمهر الحرفيين — من الدلة السعودية إلى الكنكة العثمانية، كل قطعة تحكي قصة الضيافة العربية العريقة
        </motion.p>

        {/* ═══ HERO — Interlocking Broken Grid ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
          {/* ── LEFT: Main Dallah hero card (spans 7 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="lg:col-span-7 relative group">
            <Link to={`/product/${heroEquipment[0].id}?cat=equipment`} className="block">
              <div
                className="relative h-[420px] lg:h-[560px] overflow-hidden"
                style={{ borderRadius: '2px 40px 2px 60px' }}>
                <img
                  src={heroEquipment[0].image}
                  alt={heroEquipment[0].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                {/* Multi-layer overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-espresso/30 to-transparent" />

                {/* Featured badge — angled */}
                <div
                  className="absolute top-6 right-6 bg-gold text-espresso font-cairo text-[10px] font-bold px-5 py-2 flex items-center gap-2"
                  style={{ borderRadius: '2px 12px 2px 8px' }}>
                  <SparklesIcon className="w-3 h-3" />
                  قطعة مميزة
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 right-0 left-0 p-8 lg:p-12">
                  <span className="font-cairo text-[10px] tracking-[0.25em] text-gold/60 uppercase block mb-3">
                    {heroEquipment[0].nameEn}
                  </span>
                  <h2 className="font-amiri text-3xl lg:text-4xl text-white group-hover:text-gold transition-colors duration-500 mb-2">
                    {heroEquipment[0].name}
                  </h2>
                  <p className="font-cairo text-xs text-warm-beige/50 max-w-md mb-5 leading-relaxed">
                    {heroEquipment[0].longDesc}
                  </p>
                  <div className="flex items-end justify-between">
                    <span className="font-amiri text-3xl text-gold">
                      {heroEquipment[0].price} <span className="text-base text-gold/60">ر.س</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <StarIcon className="w-3.5 h-3.5 fill-gold text-gold" />
                      <span className="font-cairo text-xs text-gold">{heroEquipment[0].rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gold border accent on hover */}
              <div className="absolute bottom-0 right-0 left-0 h-[3px] bg-gold/0 group-hover:bg-gold transition-all duration-600" />
            </Link>

            {/* ── Floating stats card — overlapping the image ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-10 -left-4 lg:-left-10 bg-coffee-dark/90 backdrop-blur-md border border-gold/15 p-5 z-20 shadow-layered-lg"
              style={{ borderRadius: '20px 2px 16px 2px' }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <span className="font-amiri text-2xl text-gold block">٨</span>
                  <span className="font-cairo text-[9px] text-warm-beige/40">أدوات تراثية</span>
                </div>
                <div className="text-center">
                  <span className="font-amiri text-2xl text-gold block">١٠٠٪</span>
                  <span className="font-cairo text-[9px] text-warm-beige/40">صناعة يدوية</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Kanaka card (spans 5 cols, offset upward) ── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="lg:col-span-5 lg:-mr-3 lg:mt-20 relative group mt-8 lg:mt-20">
            <Link to={`/product/${heroEquipment[1].id}?cat=equipment`} className="block">
              <div
                className="relative h-[350px] lg:h-[440px] overflow-hidden"
                style={{ borderRadius: '50px 2px 40px 2px' }}>
                <img
                  src={heroEquipment[1].image}
                  alt={heroEquipment[1].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent" />

                <div
                  className="absolute top-5 left-5 bg-gold/90 text-espresso font-cairo text-[10px] font-bold px-4 py-1.5"
                  style={{ borderRadius: '8px 2px 12px 2px' }}>
                  أداة الصانع
                </div>

                <div className="absolute bottom-0 right-0 left-0 p-6 lg:p-8">
                  <span className="font-cairo text-[10px] tracking-[0.2em] text-gold/60 uppercase block mb-2">
                    {heroEquipment[1].nameEn}
                  </span>
                  <h2 className="font-amiri text-2xl lg:text-3xl text-white group-hover:text-gold transition-colors duration-500 mb-2">
                    {heroEquipment[1].name}
                  </h2>
                  <p className="font-cairo text-[11px] text-warm-beige/45 mb-4 leading-relaxed max-w-sm">
                    {heroEquipment[1].desc}
                  </p>
                  <div className="flex items-end justify-between">
                    <span className="font-amiri text-2xl text-gold">
                      {heroEquipment[1].price} <span className="text-sm text-gold/60">ر.س</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <StarIcon className="w-3 h-3 fill-gold text-gold" />
                      <span className="font-cairo text-xs text-gold">{heroEquipment[1].rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 left-0 h-[3px] bg-gold/0 group-hover:bg-gold transition-all duration-600" />
            </Link>

            {/* Decorative dots pattern */}
            <div className="absolute -top-6 -right-4 grid grid-cols-4 gap-2 opacity-10 pointer-events-none">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold" />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Decorative gold line between hero and grid ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="gold-line mt-20 mb-0 origin-right"
        />
      </section>

      {/* ═══════════════ CATEGORY TABS ═══════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`font-cairo text-sm px-7 py-3 transition-all duration-400 ${
                activeCategory === cat.key
                  ? 'bg-gold text-espresso font-semibold shadow-gold-glow'
                  : 'text-warm-beige/50 border border-warm-beige/12 hover:border-gold/30 hover:text-gold'
              }`}
              style={{
                borderRadius:
                  activeCategory === cat.key ? '2px 14px 2px 10px' : '2px 8px 2px 6px',
              }}>
              {cat.label}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════ EQUIPMENT GRID — Complex Interlocking ═══════════════ */}
      <section className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 auto-rows-auto">
          {filtered.map((item, i) => {
            // Complex layout logic — no two cards are the same size
            const layoutPatterns = [
              'lg:col-span-5 lg:row-span-2',   // tall narrow
              'lg:col-span-7',                   // wide
              'lg:col-span-4',                   // small
              'lg:col-span-4 lg:mt-8',           // small offset
              'lg:col-span-4',                   // small
              'lg:col-span-8',                   // extra wide
              'lg:col-span-6 lg:-mt-6',          // medium, pulled up
            ];
            const pattern = layoutPatterns[i % layoutPatterns.length];
            const isWide = pattern.includes('col-span-7') || pattern.includes('col-span-8') || pattern.includes('col-span-6');
            const isTall = pattern.includes('row-span-2');

            // Asymmetric border-radius per card
            const radiusPatterns = [
              '2px 30px 2px 45px',
              '40px 2px 35px 2px',
              '2px 20px 2px 25px',
              '25px 2px 20px 2px',
              '2px 35px 2px 20px',
              '45px 2px 30px 2px',
              '2px 25px 2px 40px',
            ];
            const radius = radiusPatterns[i % radiusPatterns.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`group ${pattern}`}>
                <Link to={`/product/${item.id}?cat=equipment`}>
                  <div
                    className="relative bg-coffee-dark/50 border border-warm-beige/8 overflow-hidden hover:border-gold/25 transition-all duration-500 h-full"
                    style={{ borderRadius: radius }}>
                    {/* Image */}
                    <div className={`relative overflow-hidden ${isTall ? 'h-[280px] lg:h-[350px]' : isWide ? 'h-[220px] lg:h-[280px]' : 'h-[220px] lg:h-[260px]'}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />

                      {/* Shopping bag button */}
                      <motion.button
                        className="absolute bottom-3 left-3 bg-gold/90 text-espresso p-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ borderRadius: '2px 10px 2px 8px' }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}>
                        <ShoppingBagIcon className="w-4 h-4" />
                      </motion.button>

                      {/* Name overlay on image (for wide cards) */}
                      {isWide && (
                        <div className="absolute bottom-4 right-5">
                          <span className="font-cairo text-[10px] tracking-[0.2em] text-gold/50 uppercase block mb-1">
                            {item.nameEn}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 lg:p-6">
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <StarIcon className="w-3 h-3 fill-gold text-gold" />
                        <span className="font-cairo text-[11px] text-gold">{item.rating}</span>
                        <span className="font-cairo text-[9px] text-warm-beige/25 mr-2">|</span>
                        <span className="font-cairo text-[9px] text-warm-beige/30 tracking-wider uppercase">
                          {item.nameEn}
                        </span>
                      </div>
                      <h3 className="font-amiri text-lg lg:text-xl text-warm-beige group-hover:text-gold transition-colors duration-400 mb-2">
                        {item.name}
                      </h3>
                      <p className="font-cairo text-[11px] text-warm-beige/35 leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-amiri text-xl text-gold">
                          {item.price}{' '}
                          <span className="text-sm text-gold/50">ر.س</span>
                        </span>
                        <ArrowLeftIcon className="w-4 h-4 text-warm-beige/15 group-hover:text-gold transition-all group-hover:-translate-x-1.5 duration-400" />
                      </div>
                    </div>

                    {/* Gold bottom accent */}
                    <div className="h-[2px] bg-gold/0 group-hover:bg-gold/50 transition-all duration-600" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════ BOTTOM CTA SECTION — Interlocking ═══════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 mt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
          style={{ borderRadius: '2px 60px 2px 50px' }}>
          {/* Background image */}
          <img
            src="/images/equipment-cta.png"
            alt="مجموعة أدوات القهوة العربية"
            className="w-full h-[350px] lg:h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/60 to-espresso/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="p-8 lg:p-16 max-w-2xl">
              <span className="font-cairo text-[10px] tracking-[0.25em] text-gold/60 uppercase block mb-3">
                THE COMPLETE COLLECTION
              </span>
              <h2 className="font-amiri text-3xl lg:text-5xl text-white mb-4 leading-tight">
                مجموعة أدوات الضيافة
                <span className="text-gold block mt-1">الكاملة</span>
              </h2>
              <p className="font-cairo text-sm text-warm-beige/50 mb-8 leading-relaxed max-w-md">
                اقتنِ مجموعتنا الكاملة من أدوات تحضير وتقديم القهوة العربية — من المحماس إلى الدلة، ومن الهاون إلى الفناجيل — واصنع تجربة ضيافة لا تُنسى
              </p>
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 bg-gold hover:bg-dark-gold text-espresso font-cairo font-semibold px-8 py-4 transition-all duration-400 shadow-gold-glow hover:shadow-lg"
                style={{ borderRadius: '2px 14px 2px 10px' }}>
                <span>تسوق المجموعة الكاملة</span>
                <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}