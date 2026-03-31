import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  SlidersHorizontalIcon,
  XIcon,
  StarIcon,
  ShoppingBagIcon,
  ChevronDownIcon } from
'lucide-react';
const allProducts = [
{
  id: 1,
  name: 'قهوة يمنية مختصة',
  origin: 'اليمن - حراز',
  price: 189,
  priceAr: '١٨٩',
  rating: 4.9,
  roast: 'متوسط',
  type: 'عربيكا',
  image:
  'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&q=80',
  tag: 'الأكثر مبيعاً',
  size: 'tall'
},
{
  id: 2,
  name: 'إثيوبية يرغاتشيف',
  origin: 'إثيوبيا - سيدامو',
  price: 145,
  priceAr: '١٤٥',
  rating: 4.7,
  roast: 'فاتح',
  type: 'عربيكا',
  image:
  'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=500&q=80',
  tag: 'جديد',
  size: 'normal'
},
{
  id: 3,
  name: 'كولومبية سوبريمو',
  origin: 'كولومبيا - هويلا',
  price: 125,
  priceAr: '١٢٥',
  rating: 4.5,
  roast: 'متوسط',
  type: 'عربيكا',
  image:
  'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=500&q=80',
  tag: '',
  size: 'wide'
},
{
  id: 4,
  name: 'برازيلية سانتوس',
  origin: 'البرازيل - ميناس',
  price: 110,
  priceAr: '١١٠',
  rating: 4.3,
  roast: 'غامق',
  type: 'عربيكا',
  image:
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=500&q=80',
  tag: '',
  size: 'normal'
},
{
  id: 5,
  name: 'كينية AA',
  origin: 'كينيا - نيري',
  price: 165,
  priceAr: '١٦٥',
  rating: 4.8,
  roast: 'فاتح',
  type: 'عربيكا',
  image:
  'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=500&q=80',
  tag: 'مميز',
  size: 'tall'
},
{
  id: 6,
  name: 'بنمية جيشا',
  origin: 'بنما - بوكيتي',
  price: 320,
  priceAr: '٣٢٠',
  rating: 5.0,
  roast: 'فاتح',
  type: 'جيشا',
  image:
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=500&q=80',
  tag: 'نادرة',
  size: 'wide'
},
{
  id: 7,
  name: 'جاوية قديمة',
  origin: 'إندونيسيا - جاوة',
  price: 275,
  priceAr: '٢٧٥',
  rating: 4.6,
  roast: 'غامق',
  type: 'روبوستا',
  image:
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80',
  tag: 'محدود',
  size: 'normal'
},
{
  id: 8,
  name: 'رواندية بوربون',
  origin: 'رواندا - كيفو',
  price: 155,
  priceAr: '١٥٥',
  rating: 4.4,
  roast: 'متوسط',
  type: 'بوربون',
  image:
  'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500&q=80',
  tag: '',
  size: 'tall'
}];

const roastLevels = ['الكل', 'فاتح', 'متوسط', 'غامق'];
const origins = [
'الكل',
'اليمن',
'إثيوبيا',
'كولومبيا',
'البرازيل',
'كينيا',
'بنما',
'إندونيسيا',
'رواندا'];

export function ShopAll() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeRoast, setActiveRoast] = useState('الكل');
  const [sortBy, setSortBy] = useState('الأكثر مبيعاً');
  const [showSort, setShowSort] = useState(false);
  const filtered = allProducts.filter((p) => {
    if (activeRoast !== 'الكل' && p.roast !== activeRoast) return false;
    return true;
  });
  return (
    <main className="bg-cream min-h-screen pt-28 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Page header */}
        <div className="mb-12">
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            className="flex items-center gap-3 mb-3">
            
            <div className="w-10 h-[1.5px] bg-gold" />
            <span className="font-cairo text-xs tracking-[0.15em] text-gold">
              تشكيلتنا الكاملة
            </span>
          </motion.div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.1
            }}
            className="font-amiri text-4xl lg:text-5xl text-deep-brown mb-3">
            
            المتجر
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 0.2
            }}
            className="font-cairo text-sm text-coffee-medium/60 max-w-md">
            
            اكتشف مجموعتنا المتنوعة من أجود أنواع القهوة المختصة من حول العالم
          </motion.p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 font-cairo text-sm text-deep-brown border border-deep-brown/15 px-4 py-2.5 hover:border-gold hover:text-gold transition-all">
              
              <SlidersHorizontalIcon className="w-4 h-4" />
              <span>تصفية</span>
            </button>

            {/* Roast level chips */}
            {roastLevels.map((level) =>
            <button
              key={level}
              onClick={() => setActiveRoast(level)}
              className={`font-cairo text-xs px-4 py-2 transition-all duration-300 ${activeRoast === level ? 'bg-gold text-white shadow-gold-glow' : 'bg-white text-coffee-medium/70 hover:text-gold border border-transparent hover:border-gold/20'}`}>
              
                {level === 'الكل' ? 'جميع التحميصات' : level}
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 font-cairo text-sm text-coffee-medium/70 hover:text-gold transition-colors">
              
              <span>ترتيب: {sortBy}</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            {showSort &&
            <div className="absolute top-full left-0 mt-2 bg-white shadow-layered p-2 z-30 min-w-[160px]">
                {[
              'الأكثر مبيعاً',
              'السعر: الأقل',
              'السعر: الأعلى',
              'الأحدث'].
              map((s) =>
              <button
                key={s}
                onClick={() => {
                  setSortBy(s);
                  setShowSort(false);
                }}
                className="block w-full text-right font-cairo text-sm px-3 py-2 text-coffee-medium/70 hover:text-gold hover:bg-gold/5 transition-colors">
                
                    {s}
                  </button>
              )}
              </div>
            }
          </div>
        </div>

        {/* Extended filter panel */}
        <AnimatePresence>
          {filterOpen &&
          <motion.div
            initial={{
              height: 0,
              opacity: 0
            }}
            animate={{
              height: 'auto',
              opacity: 1
            }}
            exit={{
              height: 0,
              opacity: 0
            }}
            className="overflow-hidden mb-8">
            
              <div className="bg-white p-6 shadow-layered border-t-2 border-gold/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-amiri text-lg text-deep-brown">
                    تصفية متقدمة
                  </h3>
                  <button onClick={() => setFilterOpen(false)}>
                    <XIcon className="w-4 h-4 text-coffee-medium/50" />
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <span className="font-cairo text-xs text-gold mb-2 block">
                      المنشأ
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {origins.map((o) =>
                    <button
                      key={o}
                      className="font-cairo text-[11px] px-3 py-1.5 bg-warm-beige/30 text-coffee-medium/70 hover:bg-gold/10 hover:text-gold transition-all">
                      
                          {o}
                        </button>
                    )}
                    </div>
                  </div>
                  <div>
                    <span className="font-cairo text-xs text-gold mb-2 block">
                      السعر (ر.س)
                    </span>
                    <div className="flex items-center gap-2 mt-2">
                      <input
                      type="number"
                      placeholder="من"
                      className="w-20 bg-warm-beige/20 border-0 px-3 py-1.5 font-cairo text-xs text-deep-brown focus:outline-none focus:ring-1 focus:ring-gold/30" />
                    
                      <span className="text-coffee-medium/30">—</span>
                      <input
                      type="number"
                      placeholder="إلى"
                      className="w-20 bg-warm-beige/20 border-0 px-3 py-1.5 font-cairo text-xs text-deep-brown focus:outline-none focus:ring-1 focus:ring-gold/30" />
                    
                    </div>
                  </div>
                  <div>
                    <span className="font-cairo text-xs text-gold mb-2 block">
                      التقييم
                    </span>
                    <div className="flex items-center gap-1 mt-2">
                      {[4, 4.5, 5].map((r) =>
                    <button
                      key={r}
                      className="flex items-center gap-1 font-cairo text-[11px] px-3 py-1.5 bg-warm-beige/30 text-coffee-medium/70 hover:bg-gold/10 hover:text-gold transition-all">
                      
                          <StarIcon className="w-3 h-3 fill-gold text-gold" />
                          {r}+
                        </button>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          }
        </AnimatePresence>

        {/* Results count */}
        <p className="font-cairo text-xs text-coffee-medium/40 mb-6">
          {filtered.length} منتج
        </p>

        {/* Asymmetric masonry product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 auto-rows-auto">
          {filtered.map((product, i) => {
            const isFeature = i === 0 || i === 5;
            const isTall = product.size === 'tall' || isFeature;
            return (
              <motion.div
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: i * 0.06
                }}
                className={`group relative ${isFeature ? 'sm:col-span-2 lg:col-span-2' : ''} ${i % 3 === 1 ? 'lg:mt-10' : i % 3 === 2 ? 'lg:mt-5' : ''}`}>
                
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative overflow-hidden bg-white shadow-layered hover:shadow-layered-lg transition-all duration-500">
                    {/* Image */}
                    <div
                      className={`relative overflow-hidden ${isTall ? 'h-[380px] lg:h-[420px]' : 'h-[280px] lg:h-[320px]'}`}>
                      
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Tag */}
                      {product.tag &&
                      <span className="absolute top-4 right-4 bg-gold/90 text-white font-cairo text-[10px] px-3 py-1">
                          {product.tag}
                        </span>
                      }

                      {/* Quick add - appears on hover */}
                      <motion.button
                        className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-deep-brown p-3 shadow-layered opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-white"
                        whileHover={{
                          scale: 1.05
                        }}
                        whileTap={{
                          scale: 0.95
                        }}>
                        
                        <ShoppingBagIcon className="w-4 h-4" />
                      </motion.button>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <div className="flex items-center gap-1 mb-2">
                        <StarIcon className="w-3 h-3 fill-gold text-gold" />
                        <span className="font-cairo text-[11px] text-gold">
                          {product.rating}
                        </span>
                        <span className="font-cairo text-[10px] text-coffee-medium/30 mr-2">
                          {product.origin}
                        </span>
                      </div>
                      <h3 className="font-amiri text-lg text-deep-brown group-hover:text-gold transition-colors mb-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between mt-3">
                        <p className="font-amiri text-xl text-gold">
                          {product.priceAr}{' '}
                          <span className="text-sm text-gold/70">ر.س</span>
                        </p>
                        <span className="font-cairo text-[10px] text-white bg-coffee-medium/60 px-2.5 py-1">
                          {product.roast}
                        </span>
                      </div>
                    </div>

                    {/* Gold accent line */}
                    <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />
                  </div>
                </Link>
              </motion.div>);

          })}
        </div>
      </div>
    </main>);

}