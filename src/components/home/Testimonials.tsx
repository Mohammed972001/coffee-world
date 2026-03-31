import React from 'react';
import { motion } from 'framer-motion';
const testimonials = [
{
  quote:
  'أفضل قهوة يمنية تذوقتها في حياتي. النكهة غنية ومعقدة بشكل استثنائي، تشعر بالفرق من أول رشفة.',
  name: 'محمد العتيبي',
  title: 'خبير قهوة مختصة',
  size: 'large'
},
{
  quote: 'خدمة راقية وجودة لا مثيل لها. أصبحت عميلاً دائماً منذ أول طلب.',
  name: 'نورة الشمري',
  title: 'مدونة طعام',
  size: 'small'
},
{
  quote:
  'المعدات التي اشتريتها من عالم القهوة غيرت تجربة تحضيري تماماً. فريق الدعم ممتاز.',
  name: 'عبدالله القحطاني',
  title: 'باريستا منزلي',
  size: 'medium'
}];

export function Testimonials() {
  return (
    <section className="relative bg-cream py-20 lg:py-28 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 left-[5%] w-64 h-64 blob-shape-2 bg-warm-beige/40 blur-3xl" />
      <div className="absolute bottom-10 right-[10%] w-40 h-40 coffee-stain opacity-15" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
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
            className="flex items-center justify-center gap-3 mb-4">
            
            <div className="w-8 h-[1.5px] bg-gold" />
            <span className="font-cairo text-xs tracking-[0.15em] text-gold">
              آراء عملائنا
            </span>
            <div className="w-8 h-[1.5px] bg-gold" />
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
            
            ماذا يقول <span className="text-gold">عملاؤنا</span>
          </motion.h2>
        </div>

        {/* Testimonial cards - overlapping, varied sizes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Large card */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              rotate: -1
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: -1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}
            className="md:col-span-5 bg-white p-8 lg:p-10 shadow-layered relative md:mt-8"
            style={{
              borderRadius: '2px 24px 2px 20px'
            }}>
            
            {/* Gold quote mark */}
            <span className="font-amiri text-7xl text-gold/15 absolute top-4 right-6 leading-none select-none">
              ❞
            </span>
            <p className="font-cairo text-deep-brown/80 leading-relaxed text-base relative z-10 mb-6">
              {testimonials[0].quote}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="font-amiri text-gold text-sm">
                  {testimonials[0].name[0]}
                </span>
              </div>
              <div>
                <span className="font-cairo text-sm font-semibold text-deep-brown block">
                  {testimonials[0].name}
                </span>
                <span className="font-cairo text-[11px] text-coffee-medium/50">
                  {testimonials[0].title}
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 left-6 w-12 h-[2px] bg-gold/40" />
          </motion.div>

          {/* Stacked smaller cards */}
          <div className="md:col-span-7 space-y-5">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                rotate: 0.5
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0.5
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.7,
                delay: 0.15
              }}
              className="bg-deep-brown p-7 shadow-layered-lg relative md:ml-12"
              style={{
                borderRadius: '20px 2px 16px 2px'
              }}>
              
              <span className="font-amiri text-6xl text-gold/10 absolute top-3 right-5 leading-none select-none">
                ❞
              </span>
              <p className="font-cairo text-warm-beige/80 leading-relaxed text-sm relative z-10 mb-5">
                {testimonials[1].quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center">
                  <span className="font-amiri text-gold text-xs">
                    {testimonials[1].name[0]}
                  </span>
                </div>
                <div>
                  <span className="font-cairo text-sm font-semibold text-warm-beige block">
                    {testimonials[1].name}
                  </span>
                  <span className="font-cairo text-[11px] text-warm-beige/40">
                    {testimonials[1].title}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                rotate: -0.5
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: -0.5
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.7,
                delay: 0.3
              }}
              className="bg-white p-7 shadow-layered relative md:mr-8"
              style={{
                borderRadius: '2px 18px 2px 14px'
              }}>
              
              <span className="font-amiri text-6xl text-gold/10 absolute top-3 right-5 leading-none select-none">
                ❞
              </span>
              <p className="font-cairo text-deep-brown/80 leading-relaxed text-sm relative z-10 mb-5">
                {testimonials[2].quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="font-amiri text-gold text-xs">
                    {testimonials[2].name[0]}
                  </span>
                </div>
                <div>
                  <span className="font-cairo text-sm font-semibold text-deep-brown block">
                    {testimonials[2].name}
                  </span>
                  <span className="font-cairo text-[11px] text-coffee-medium/50">
                    {testimonials[2].title}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 right-6 w-12 h-[2px] bg-gold/40" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}