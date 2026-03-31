import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, LeafIcon, AwardIcon, UsersIcon } from 'lucide-react';
const timeline = [
{
  year: '٢٠١٧',
  title: 'البداية',
  desc: 'انطلقنا من شغف حقيقي بالقهوة المختصة، بدأنا بتحميص دفعات صغيرة في الرياض لمجموعة من المهتمين.'
},
{
  year: '٢٠١٨',
  title: 'أول متجر',
  desc: 'افتتحنا أول متجر إلكتروني متخصص في القهوة المختصة في المملكة العربية السعودية.'
},
{
  year: '٢٠١٩',
  title: 'شراكات المزارع',
  desc: 'بدأنا التعامل المباشر مع مزارعي القهوة في اليمن وإثيوبيا وكينيا لضمان أعلى جودة.'
},
{
  year: '٢٠٢١',
  title: 'محمصتنا الخاصة',
  desc: 'أطلقنا محمصتنا المجهزة بأحدث التقنيات الألمانية لتحميص كل دفعة بدقة متناهية.'
},
{
  year: '٢٠٢٣',
  title: 'التوسع الإقليمي',
  desc: 'وصلنا إلى عملاء في جميع دول الخليج مع خدمة توصيل سريعة وتغليف فاخر.'
},
{
  year: '٢٠٢٥',
  title: 'عالم القهوة اليوم',
  desc: 'أكثر من ١٠,٠٠٠ عميل سعيد، ٥٠+ صنف قهوة، وشراكات مع أفضل المزارع حول العالم.'
}];

const values = [
{
  icon: AwardIcon,
  title: 'الجودة أولاً',
  desc: 'نختار فقط أفضل ٣٪ من محاصيل القهوة العالمية ونحمصها بعناية فائقة.'
},
{
  icon: LeafIcon,
  title: 'الاستدامة',
  desc: 'نعمل مع مزارعين يتبعون ممارسات زراعية مستدامة تحافظ على البيئة.'
},
{
  icon: HeartIcon,
  title: 'الشغف',
  desc: 'كل فرد في فريقنا يشارك نفس الشغف والحب لعالم القهوة المختصة.'
},
{
  icon: UsersIcon,
  title: 'المجتمع',
  desc: 'نبني مجتمعاً من محبي القهوة من خلال ورش العمل والفعاليات المتخصصة.'
}];

const team = [
{
  name: 'أحمد الحربي',
  role: 'المؤسس والرئيس التنفيذي',
  image:
  '/images/saudi-gahwa.png'
},
{
  name: 'سارة المالكي',
  role: 'رئيسة قسم التحميص',
  image:
  '/images/finjaan-set.png'
},
{
  name: 'خالد العمري',
  role: 'خبير جودة القهوة Q-Grader',
  image:
  '/images/classic-arabic.png'
}];

export function OurStory() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src="/images/equipment-cta.png"
          alt="قصتنا"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-espresso/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            className="text-center px-6">
            
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-[1.5px] bg-gold/60" />
              <span className="font-cairo text-xs tracking-[0.2em] text-gold/80">
                حكايتنا
              </span>
              <div className="w-10 h-[1.5px] bg-gold/60" />
            </div>
            <h1 className="font-amiri text-5xl lg:text-7xl text-white mb-4">
              قصة <span className="text-gold">عالم القهوة</span>
            </h1>
            <p className="font-cairo text-warm-beige/70 max-w-lg mx-auto leading-relaxed">
              رحلة بدأت بشغف وحب للقهوة، وتحولت إلى وجهة لكل عاشق للقهوة المختصة
              في المملكة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[900px] mx-auto px-6">
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative">
                <img
                  src="/images/mihmas-roasting.png"
                  alt="محمصتنا"
                  className="w-full h-[350px] object-cover shadow-layered"
                  style={{
                    borderRadius: '2px 30% 2px 20%'
                  }} />
                
                <div
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold/10 border border-gold/20 flex items-center justify-center"
                  style={{
                    borderRadius: '20% 2px 15% 2px'
                  }}>
                  
                  <span className="font-amiri text-2xl text-gold">٨+</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-amiri text-3xl text-deep-brown mb-4">
                من <span className="text-gold">الشغف</span> إلى الاحتراف
              </h2>
              <p className="font-cairo text-sm text-coffee-medium/70 leading-[1.9] mb-4">
                بدأت قصة عالم القهوة في عام ٢٠١٧ عندما قرر مؤسسنا أحمد الحربي
                تحويل شغفه بالقهوة المختصة إلى مشروع يقدم لعشاق القهوة في
                المملكة تجربة استثنائية لا تقل عن المقاهي العالمية.
              </p>
              <p className="font-cairo text-sm text-coffee-medium/70 leading-[1.9]">
                اليوم، نفخر بكوننا الوجهة الأولى للقهوة المختصة في المملكة
                العربية السعودية، حيث نقدم أجود أنواع البن من أكثر من ١٢ بلد
                منشأ، محمصة بعناية في محمصتنا المجهزة بأحدث التقنيات.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-deep-brown relative overflow-hidden">
        <div className="absolute top-10 right-[10%] w-48 h-48 coffee-stain opacity-5" />
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
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
              className="font-amiri text-4xl text-white">
              
              رحلتنا عبر <span className="text-gold">السنين</span>
            </motion.h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 right-1/2 w-[1px] bg-gold/20 hidden lg:block" />

            {timeline.map((item, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 25
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.1
              }}
              className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-12 last:mb-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              
                {/* Content */}
                <div
                className={`flex-1 ${i % 2 === 0 ? 'lg:text-left lg:pl-12' : 'lg:text-right lg:pr-12'}`}>
                
                  <div
                  className="bg-coffee-dark/40 border border-gold/10 p-6 hover:border-gold/25 transition-all duration-400"
                  style={{
                    borderRadius:
                    i % 2 === 0 ? '2px 16px 2px 12px' : '12px 2px 16px 2px'
                  }}>
                  
                    <h3 className="font-amiri text-lg text-gold mb-1">
                      {item.title}
                    </h3>
                    <p className="font-cairo text-xs text-warm-beige/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Year dot */}
                <div className="flex-shrink-0 lg:absolute lg:right-1/2 lg:translate-x-1/2 flex items-center gap-3 lg:flex-col">
                  <div className="w-10 h-10 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gold" />
                  </div>
                  <span className="font-amiri text-xl text-gold lg:mt-2">
                    {item.year}
                  </span>
                </div>

                {/* Spacer for other side */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
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
              className="font-amiri text-4xl text-deep-brown">
              
              قيمنا <span className="text-gold">ومبادئنا</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 25
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.1
              }}
              className={`group bg-white p-6 shadow-layered hover:shadow-layered-lg transition-all duration-400 text-center ${i % 2 === 1 ? 'lg:mt-8' : ''}`}
              style={{
                borderRadius:
                i % 2 === 0 ? '2px 20px 2px 16px' : '16px 2px 20px 2px'
              }}>
              
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <val.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-amiri text-lg text-deep-brown mb-2">
                  {val.title}
                </h3>
                <p className="font-cairo text-xs text-coffee-medium/60 leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-warm-beige/30">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-14">
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
              className="font-amiri text-4xl text-deep-brown">
              
              فريق <span className="text-gold">العمل</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 25
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.12
              }}
              className={`group text-center ${i === 1 ? 'sm:-mt-6' : ''}`}>
              
                <div
                className="relative overflow-hidden h-[320px] mb-5 shadow-layered"
                style={{
                  borderRadius: '2px 30% 2px 25%'
                }}>
                
                  <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />
                </div>
                <h3 className="font-amiri text-xl text-deep-brown group-hover:text-gold transition-colors">
                  {member.name}
                </h3>
                <p className="font-cairo text-xs text-gold/70 mt-1">
                  {member.role}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>);

}