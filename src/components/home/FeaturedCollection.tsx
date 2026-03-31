import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, StarIcon } from 'lucide-react';
const products = [
{
  id: 301,
  name: 'يمنية حراز الفاخرة',
  origin: 'اليمن - حراز',
  price: '١٩٥',
  rating: 4.9,
  image: '/images/bean_yemen_haraz.png',
  tag: 'الأكثر مبيعاً'
},
{
  id: 303,
  name: 'إثيوبية يرغاتشيف',
  origin: 'إثيوبيا - سيدامو',
  price: '١٣٥',
  image: '/images/bean_ethiopia_yirg.png',
  rating: 4.8,
  tag: 'جديد'
},
{
  id: 306,
  name: 'بنمية جيشا الممتازة',
  origin: 'بنما - بوكيتي',
  price: '٤٥٠',
  image: '/images/bean_panama_geisha.png',
  rating: 5.0,
  tag: 'نادرة'
}];

export function FeaturedCollection() {
  return (
    <section className="relative bg-cream py-20 lg:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 blob-shape bg-warm-beige/30 blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-20 right-10 w-32 h-32 coffee-stain opacity-20" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Section header - asymmetric */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20">
          <div>
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="flex items-center gap-3 mb-4">
              
              <div className="w-8 h-[1.5px] bg-gold" />
              <span className="font-cairo text-xs tracking-[0.15em] text-gold">
                مختارات خاصة
              </span>
            </motion.div>
            <motion.h2
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              className="font-amiri text-4xl lg:text-5xl text-deep-brown">
              
              مجموعتنا <span className="text-gold">المميزة</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.3
            }}>
            
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 font-cairo text-sm text-coffee-medium hover:text-gold transition-colors mt-4 lg:mt-0">
              
              عرض جميع المنتجات
              <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Asymmetric product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-5 items-start">
          {/* Large featured product */}
          <motion.div
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
              duration: 0.8
            }}
            className="lg:col-span-7 group relative">
            
            <Link to="/product/1" className="block relative overflow-hidden">
              <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] overflow-hidden">
                <img
                  src={products[0].image}
                  alt={products[0].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />

                {/* Tag */}
                <span className="absolute top-6 right-6 bg-gold/90 text-white font-cairo text-xs px-4 py-1.5">
                  {products[0].tag}
                </span>

                {/* Content overlapping image */}
                <div className="absolute bottom-0 right-0 left-0 p-6 lg:p-10">
                  <div className="flex items-center gap-1 mb-2">
                    <StarIcon className="w-3.5 h-3.5 fill-gold text-gold" />
                    <span className="font-cairo text-xs text-gold">
                      {products[0].rating}
                    </span>
                  </div>
                  <h3 className="font-amiri text-2xl lg:text-3xl text-white mb-1">
                    {products[0].name}
                  </h3>
                  <p className="font-cairo text-sm text-warm-beige/70 mb-4">
                    {products[0].origin}
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="font-cairo text-xs text-warm-beige/50">
                        السعر
                      </span>
                      <p className="font-amiri text-2xl text-gold">
                        {products[0].price}{' '}
                        <span className="text-base">ر.س</span>
                      </p>
                    </div>
                    <span className="font-cairo text-xs text-warm-beige/60 border border-warm-beige/20 px-4 py-2 group-hover:border-gold group-hover:text-gold transition-all">
                      عرض التفاصيل
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Two stacked products - offset */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:pt-12">
            {products.slice(1).map((product, i) =>
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
                duration: 0.8,
                delay: 0.2 + i * 0.15
              }}
              className={`group relative ${i === 1 ? 'lg:mr-8' : 'lg:ml-4'}`}>
              
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative flex bg-white shadow-layered overflow-hidden h-[180px] sm:h-[220px]">
                    <div className="w-[45%] relative overflow-hidden flex-shrink-0">
                      <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    
                      <span className="absolute top-3 right-3 bg-gold/90 text-white font-cairo text-[10px] px-2.5 py-1">
                        {product.tag}
                      </span>
                    </div>
                    <div className="flex-1 p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <StarIcon className="w-3 h-3 fill-gold text-gold" />
                          <span className="font-cairo text-[11px] text-gold">
                            {product.rating}
                          </span>
                        </div>
                        <h3 className="font-amiri text-lg text-deep-brown group-hover:text-gold transition-colors">
                          {product.name}
                        </h3>
                        <p className="font-cairo text-xs text-coffee-medium/60 mt-1">
                          {product.origin}
                        </p>
                      </div>
                      <div className="flex items-end justify-between">
                        <p className="font-amiri text-xl text-gold">
                          {product.price} <span className="text-sm">ر.س</span>
                        </p>
                        <ArrowLeftIcon className="w-4 h-4 text-coffee-medium/30 group-hover:text-gold transition-all group-hover:-translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}