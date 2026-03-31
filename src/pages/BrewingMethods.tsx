import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  DropletIcon,
  ThermometerIcon,
  CoffeeIcon,
  FlameIcon,
  SparklesIcon,
} from 'lucide-react';

const methods = [
  {
    id: 'saudi-gahwa',
    name: 'القهوة السعودية',
    nameEn: 'Saudi Gahwa',
    tagline: 'القهوة السعودية بالهيل والزعفران — رمز الكرم والأصالة',
    description:
      'القهوة السعودية (الغهوة) هي جوهر الضيافة في المملكة العربية السعودية. تُحضّر من البن الأخضر المحمّص تحميصاً خفيفاً، وتُنكّه بالهيل المطحون والزعفران الأصيل وأحياناً القرنفل. تُغلى في الدلة على نار هادئة حتى يتخلّل العطر أرجاء المجلس، ثم تُقدّم في فناجيل صغيرة بدون مقابض مع التمر كتعبير عن الترحاب.',
    image:
      '/images/saudi-gahwa.png',
    ratio: '١:١٠',
    temp: 'غليان هادئ',
    time: '١٥-٢٠ دقيقة',
    grind: 'ناعم جداً (مدقوق)',
    flavor: 'هيل، زعفران، قرنفل',
    steps: [
      'حمّص البن الأخضر تحميصاً خفيفاً في المحماس حتى يصبح ذهبياً',
      'اطحن البن المحمّص ناعماً جداً في الهاون النحاسي أو الرحاية',
      'اغلِ الماء في الدلة على نار متوسطة',
      'أضف البن المطحون وحرّك بملعقة خشبية',
      'أضف الهيل المطحون الطازج والزعفران حسب الرغبة',
      'اتركها تغلي على نار هادئة ١٥-٢٠ دقيقة مع التحريك',
      'صفّي القهوة في دلة التقديم وقدّمها ساخنة مع التمر',
    ],
  },
  {
    id: 'turkish-sand',
    name: 'القهوة على الرمل',
    nameEn: 'Sand Coffee — Turkish Method',
    tagline: 'القهوة التركية على الرمل الساخن — فن التحضير البطيء',
    description:
      'طريقة تحضير القهوة على الرمل الساخن هي من أقدم وأعرق طرق تحضير القهوة في العالم العربي. تُوضع الكنكة النحاسية في رمل ساخن جداً فوق موقد خاص، مما يوفر توزيعاً حرارياً مثالياً وبطيئاً. النتيجة فنجان قهوة بقوام كثيف كالمخمل ورغوة ذهبية مثالية.',
    image:
      '/images/sand-coffee.png',
    ratio: '١:٨',
    temp: 'رمل ساخن ١٥٠°+',
    time: '٥-٧ دقائق',
    grind: 'ناعم كالبودرة',
    flavor: 'هيل، ماء زهر (اختياري)',
    steps: [
      'سخّن الرمل في الحوض النحاسي حتى يصبح شديد الحرارة',
      'اطحن البن طحناً ناعماً جداً كالبودرة',
      'ضع الماء البارد والسكر (حسب الرغبة) في الكنكة',
      'أضف البن المطحون وقلّب جيداً قبل التسخين',
      'اغمر الكنكة في الرمل الساخن وحرّكها بحركات دائرية بطيئة',
      'عندما ترتفع الرغوة، ارفع الكنكة فوراً واتركها تهدأ',
      'أعد العملية ٢-٣ مرات للحصول على أفضل رغوة',
      'اسكب ببطء في الفنجان محافظاً على طبقة الرغوة الذهبية',
    ],
  },
  {
    id: 'spertaya',
    name: 'القهوة على السبرتاية',
    nameEn: 'Spirit Burner Coffee',
    tagline: 'تحضير القهوة على لهب السبرتاية — الطريقة البدوية الأصيلة',
    description:
      'السبرتاية (موقد الكحولspiritus) هي أداة تحضير تقليدية استخدمها البدو العرب والحضر على حد سواء. اللهب المكشوف الهادئ يمنح القهوة نكهة فريدة ويسمح بالتحكم الدقيق في درجة الغليان. تُستخدم مع الكنكة النحاسية لتحضير أغنى وأعمق فنجان قهوة.',
    image:
      '/images/spertaya-brewing.png',
    ratio: '١:٨',
    temp: 'لهب متوسط',
    time: '٤-٦ دقائق',
    grind: 'ناعم جداً',
    flavor: 'بن غامق، هيل',
    steps: [
      'املأ خزان السبرتاية بكحول الإشعال وأشعل الفتيل',
      'اضبط اللهب ليكون هادئاً ومتوسط الارتفاع',
      'ضع الماء والبن المطحون في الكنكة النحاسية',
      'ضع الكنكة على الحامل فوق لهب السبرتاية',
      'راقب القهوة واتركها تتسخن ببطء حتى ترتفع الرغوة',
      'ارفع الكنكة عند ارتفاع الرغوة ثم أعدها مرتين',
      'اسكب قهوتك في الفناجيل مع الحفاظ على الوجه (الرغوة)',
    ],
  },
  {
    id: 'arabic-classic',
    name: 'القهوة العربية الكلاسيكية',
    nameEn: 'Classic Arabic Coffee',
    tagline: 'الطريقة الخليجية الأصيلة بالدلة والمحماس',
    description:
      'القهوة العربية الكلاسيكية هي طقس اجتماعي متكامل يبدأ من تحميص البن الأخضر في المحماس (المقلاة الحديدية) يدوياً على الجمر، مروراً بالطحن في الهاون النحاسي الذي يُصدر إيقاعاً موسيقياً يعلن حضور القهوة، وصولاً إلى الغلي في الدلال المتعددة وتقديمها بآداب الضيافة.',
    image:
      '/images/classic-arabic.png',
    ratio: '١:١٢',
    temp: 'غليان',
    time: '٢٥-٣٠ دقيقة',
    grind: 'مدقوق خشن ثم ناعم',
    flavor: 'هيل، مسمار، زنجبيل (اختياري)',
    steps: [
      'حمّص حبوب البن الأخضر في المحماس فوق الجمر مع التقليب المستمر',
      'اطحن البن في الهاون النحاسي (النجر) بإيقاع تقليدي',
      'اغلِ الماء في الدلة الكبيرة (الخمرة)',
      'أضف البن المطحون واغلِه ١٠ دقائق',
      'صفّي في الدلة الوسطى وأضف الهيل والتوابل',
      'اغلِ مرة أخرى ٥ دقائق ثم صفّي في دلة التقديم (المزلة)',
      'قدّم القهوة بيدك اليسرى في الفنجان باليد اليمنى',
      'استمر بالسكب لضيوفك حتى يهزّ الفنجان شاكراً',
    ],
  },
];

export function BrewingMethods() {
  const [activeMethod, setActiveMethod] = useState(0);

  return (
    <main className="bg-cream min-h-screen pt-28 pb-20 overflow-hidden">
      {/* ═══════════════ PAGE HEADER ═══════════════ */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-14 relative">
          {/* Decorative blob */}
          <div className="absolute -top-10 left-[10%] w-80 h-80 blob-shape-3 bg-gold/[0.04] blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1.5px] bg-gold" />
            <span className="font-cairo text-xs tracking-[0.2em] text-gold uppercase">
              فن التحضير العربي
            </span>
            <div className="w-10 h-[1.5px] bg-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-amiri text-5xl lg:text-6xl xl:text-7xl text-deep-brown mb-3 leading-tight">
            طرق <span className="text-gold">التحضير</span>
            <span className="block text-2xl lg:text-3xl text-coffee-medium/40 font-cairo mt-2" style={{ letterSpacing: '0.05em' }}>
              التراثية الأصيلة
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="font-cairo text-sm text-coffee-medium/55 max-w-xl leading-relaxed">
            من القهوة السعودية بالهيل والزعفران إلى القهوة التركية على الرمل — اكتشف الطرق العريقة التي توارثتها الأجيال لتحضير أعرق مشروب عربي
          </motion.p>
        </div>

        {/* ═══════════════ METHOD SELECTOR TABS ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap gap-3 mb-16">
          {methods.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setActiveMethod(i)}
              className={`font-cairo text-sm px-6 py-3 transition-all duration-400 ${
                activeMethod === i
                  ? 'bg-deep-brown text-warm-beige shadow-layered'
                  : 'text-coffee-medium/50 border border-warm-beige hover:border-gold/30 hover:text-gold'
              }`}
              style={{
                borderRadius:
                  activeMethod === i ? '2px 14px 2px 10px' : undefined,
              }}>
              {m.name}
            </button>
          ))}
        </motion.div>

        {/* ═══════════════ ACTIVE METHOD DISPLAY ═══════════════ */}
        {methods.map(
          (method, idx) =>
            idx === activeMethod && (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                {/* ── Broken grid: Image + Content ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-20 items-start">
                  {/* ── Image column ── */}
                  <div className="lg:col-span-6 relative">
                    <div
                      className="relative overflow-hidden h-[380px] lg:h-[520px] shadow-layered-lg"
                      style={{ borderRadius: '2px 35% 2px 25%' }}>
                      <img
                        src={method.image}
                        alt={method.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />

                      {/* Floating method icon badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: 'spring' }}
                        className="absolute top-6 left-6 w-14 h-14 bg-gold/90 flex items-center justify-center backdrop-blur-sm"
                        style={{ borderRadius: '2px 14px 2px 10px' }}>
                        <FlameIcon className="w-6 h-6 text-espresso" />
                      </motion.div>
                    </div>

                    {/* ── Floating specs card — overlapping bottom-left ── */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="absolute -bottom-8 -left-4 lg:-left-10 bg-white/95 backdrop-blur-sm p-6 shadow-layered-lg z-10"
                      style={{ borderRadius: '2px 20px 2px 16px' }}>
                      <div className="grid grid-cols-2 gap-5">
                        <div className="flex items-center gap-2.5">
                          <DropletIcon className="w-4 h-4 text-gold" />
                          <div>
                            <span className="font-cairo text-[9px] text-coffee-medium/45 block">
                              النسبة
                            </span>
                            <span className="font-cairo text-xs text-deep-brown font-semibold">
                              {method.ratio}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <ThermometerIcon className="w-4 h-4 text-gold" />
                          <div>
                            <span className="font-cairo text-[9px] text-coffee-medium/45 block">
                              الحرارة
                            </span>
                            <span className="font-cairo text-xs text-deep-brown font-semibold">
                              {method.temp}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <ClockIcon className="w-4 h-4 text-gold" />
                          <div>
                            <span className="font-cairo text-[9px] text-coffee-medium/45 block">
                              الوقت
                            </span>
                            <span className="font-cairo text-xs text-deep-brown font-semibold">
                              {method.time}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <CoffeeIcon className="w-4 h-4 text-gold" />
                          <div>
                            <span className="font-cairo text-[9px] text-coffee-medium/45 block">
                              الطحن
                            </span>
                            <span className="font-cairo text-xs text-deep-brown font-semibold">
                              {method.grind}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Extra: Flavor profile */}
                      <div className="mt-4 pt-3 border-t border-warm-beige/30 flex items-center gap-2">
                        <SparklesIcon className="w-3.5 h-3.5 text-gold" />
                        <div>
                          <span className="font-cairo text-[9px] text-coffee-medium/45 block">
                            النكهات
                          </span>
                          <span className="font-cairo text-xs text-deep-brown font-semibold">
                            {method.flavor}
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Coffee stain decoration */}
                    <div className="absolute -top-6 -right-6 w-28 h-28 coffee-stain opacity-20 hidden lg:block pointer-events-none" />
                  </div>

                  {/* ── Content column ── */}
                  <div className="lg:col-span-6 lg:pt-6">
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="font-cairo text-[10px] tracking-[0.25em] text-gold/50 uppercase block mb-2">
                      {method.nameEn}
                    </motion.span>

                    <motion.h2
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="font-amiri text-3xl lg:text-4xl text-deep-brown mb-2">
                      {method.name}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="font-amiri text-lg text-gold/75 italic mb-6 leading-relaxed">
                      {method.tagline}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.35 }}
                      className="font-cairo text-sm text-coffee-medium/65 leading-[1.9] mb-10">
                      {method.description}
                    </motion.p>

                    {/* ── Preparation Steps ── */}
                    <div className="space-y-0">
                      <h3 className="font-amiri text-xl text-deep-brown mb-5 flex items-center gap-3">
                        <div className="w-6 h-[1.5px] bg-gold" />
                        خطوات التحضير
                      </h3>
                      {method.steps.map((step, si) => (
                        <motion.div
                          key={si}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + si * 0.07 }}
                          className={`flex items-start gap-4 group py-4 ${
                            si % 2 === 0 ? 'lg:mr-4' : 'lg:ml-4'
                          }`}
                          style={{
                            borderBottom: '1px solid rgba(215, 204, 200, 0.25)',
                          }}>
                          <span
                            className="font-amiri text-2xl text-gold/15 group-hover:text-gold/50 transition-colors w-8 flex-shrink-0 mt-[-3px]"
                            style={{ minWidth: '2rem' }}>
                            {si + 1}
                          </span>
                          <div className="flex-1">
                            <p className="font-cairo text-sm text-deep-brown/80 leading-relaxed">
                              {step}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
        )}

        {/* ═══════════════ CULTURAL CONTEXT SECTION ═══════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 mb-10">
          <div
            className="relative overflow-hidden bg-deep-brown"
            style={{ borderRadius: '2px 50px 2px 40px' }}>
            <img
              src="/images/equipment-cta.png"
              alt="مجلس القهوة العربية"
              className="w-full h-[300px] lg:h-[400px] object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-brown via-deep-brown/80 to-deep-brown/40" />
            <div className="absolute inset-0 flex items-center">
              <div className="p-8 lg:p-16 max-w-2xl">
                <span className="font-cairo text-[10px] tracking-[0.2em] text-gold/60 uppercase block mb-3">
                  ثقافة الضيافة
                </span>
                <h2 className="font-amiri text-3xl lg:text-4xl text-white mb-4 leading-tight">
                  القهوة في الثقافة
                  <span className="text-gold block mt-1">العربية والسعودية</span>
                </h2>
                <p className="font-cairo text-sm text-warm-beige/55 leading-relaxed max-w-md">
                  القهوة العربية ليست مجرد مشروب — إنها طقس اجتماعي وثقافي عميق الجذور. من آداب تقديمها (باليد اليسرى والفنجال باليمنى) إلى هزّ الفنجال كإشارة للاكتفاء، كل تفصيل يحمل معنى ورمزية في ثقافة الكرم العربي.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}