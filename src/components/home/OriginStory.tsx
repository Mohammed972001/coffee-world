import React from 'react';
import { motion } from 'framer-motion';
const stats = [
{
  number: '٥٠+',
  label: 'صنف قهوة مختصة'
},
{
  number: '١٢',
  label: 'بلد منشأ'
},
{
  number: '٨',
  label: 'سنوات من الخبرة'
},
{
  number: '١٠K+',
  label: 'عميل سعيد'
}];

export function OriginStory() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=1400&q=80"
          alt="مزارع القهوة"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-espresso/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-transparent to-espresso/60" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-[15%] w-48 h-48 coffee-stain opacity-10" />
      <div className="absolute bottom-10 left-[10%] w-32 h-32 coffee-stain opacity-8" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
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
              className="flex items-center gap-3 mb-6">
              
              <div className="w-10 h-[1.5px] bg-gold" />
              <span className="font-cairo text-xs tracking-[0.15em] text-gold/80">
                قصة المنشأ
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
              className="font-amiri text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6">
              
              من أرض <span className="text-gold">اليمن</span>
              <br />
              إلى فنجانك
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 15
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.2
              }}
              className="font-cairo text-warm-beige/70 leading-relaxed max-w-lg mb-8">
              
              نؤمن بأن كل فنجان قهوة يحمل قصة. من المزارع المرتفعة في جبال اليمن
              وإثيوبيا، نختار بعناية فائقة أجود حبوب البن، لنقدم لكم تجربة قهوة
              استثنائية تجمع بين الأصالة والحداثة.
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 15
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.3
              }}
              className="font-cairo text-warm-beige/50 text-sm leading-relaxed max-w-lg">
              
              نعمل مباشرة مع المزارعين لضمان أعلى معايير الجودة والاستدامة،
              ونحمص كل دفعة بعناية لإبراز النكهات الفريدة لكل منشأ.
            </motion.p>
          </div>

          {/* Stats grid - asymmetric */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:pr-12">
            {stats.map((stat, i) =>
            <motion.div
              key={i}
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
              transition={{
                delay: 0.2 + i * 0.1
              }}
              className={`relative ${i % 2 === 1 ? 'lg:mt-8' : ''}`}>
              
                <div className="relative">
                  <span className="font-amiri text-5xl lg:text-6xl text-gold text-shadow-deep block">
                    {stat.number}
                  </span>
                  <span className="font-cairo text-sm text-warm-beige/60 mt-2 block">
                    {stat.label}
                  </span>
                  <div className="w-8 h-[1px] bg-gold/30 mt-3" />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}