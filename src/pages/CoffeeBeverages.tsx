import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CoffeeIcon, DropletIcon, SnowflakeIcon, FlameIcon, ArrowLeftIcon, StarIcon } from 'lucide-react';

const beverageCategories = [
  { id: 'traditional', label: 'القهوة التراثية الأصيلة', icon: FlameIcon },
  { id: 'espresso', label: 'مشروبات الإسبريسو', icon: CoffeeIcon },
  { id: 'pourover', label: 'التقطير اليدوي', icon: DropletIcon },
  { id: 'cold', label: 'المشروبات الباردة', icon: SnowflakeIcon },
];

const beveragesData = [
  // Traditional Arabic/Saudi (4 drinks)
  {
    id: 401,
    name: 'القهوة السعودية بالزعفران',
    category: 'traditional',
    price: '٢٥',
    rating: 4.9,
    description: 'تحضر في الدلة النحاسية من حبوب خولانية شقراء، معطرة بالزعفران الأصيل والهيل، تقدم مع تمر المجدول الفاخر لترتوي بضيافة تراثية أصيلة.',
    attributes: ['حار', 'قوام خفيف', 'تقليدي'],
    image: '/images/bev_saudi_saffron.png',
  },
  {
    id: 402,
    name: 'قهوة تركية على الرمل',
    category: 'traditional',
    price: '١٨',
    rating: 4.7,
    description: 'تُستخلص ببطء شديد على رمال ساخنة داخل كنكة نحاسية مطروقة، لإنتاج رغوة (وش) مثالية وقوام ثقيل ومخملي يحمل عبق التاريخ.',
    attributes: ['حار', 'قوام كثيف', 'كلاسيكي'],
    image: '/images/bev_turkish_sand.png',
  },
  {
    id: 409,
    name: 'قهوة إماراتية بالهيل',
    category: 'traditional',
    price: '٢٢',
    rating: 4.8,
    description: 'بن محمص لدرجة أغمق قليلاً من نظيره السعودي، غني جداً بالهيل السيلاني والقرفة، يقدم بعبق الكرم الإماراتي في فناجيل مزخرفة.',
    attributes: ['حار', 'غني بالهيل'],
    image: '/images/bev_emirati_coffee.png',
  },
  {
    id: 410,
    name: 'مشروب القشر اليمني التراثي',
    category: 'traditional',
    price: '٢٠',
    rating: 4.9,
    description: 'يحضر من قشور البن اليمني المجففة (القشر) والمغلية مع الزنجبيل الطازج والقرفة، مشروب شتوي دافئ وخالٍ تقريباً من الكافيين.',
    attributes: ['حار', 'زنجبيل', 'تراثي'],
    image: '/images/bev_yemeni_qishr.png',
  },

  // Espresso-based (4 drinks)
  {
    id: 403,
    name: 'فلات وايت مختص',
    category: 'espresso',
    price: '٢٢',
    rating: 4.8,
    description: 'إسبريسو مزدوج من محصول إثيوبي فاخر، مدمج مع حليب مبخر بقوام حريري رقيق ورسمة لاتي آرت رائعة، يبرز فيه طعم الفواكه والكراميل.',
    attributes: ['حليب مبخر', 'كوب ٦ أوز'],
    image: '/images/bev_flat_white.png',
  },
  {
    id: 404,
    name: 'إسبريسو يمني',
    category: 'espresso',
    price: '١٦',
    rating: 4.9,
    description: 'جرعة إسبريسو مركزة (ريستريتو) من محصول حرازي، تقدم بقوام شراب ثقيل كالعسل، نوتات الشوكولاتة الداكنة والزبيب واضحة وقوية.',
    attributes: ['سادة', 'مركز', 'حامضية منخفضة'],
    image: '/images/bev_yemeni_espresso.png',
  },
  {
    id: 411,
    name: 'كورتادو برازيلي',
    category: 'espresso',
    price: '٢٠',
    rating: 4.7,
    description: 'كميات متساوية من الإسبريسو ذو القوام الثقيل من البرازيل، وحليب مبخر بحرارة متوسطة، يقدم في كوب زجاجي فريد لتجربة متوازنة جداً.',
    attributes: ['متوازن', 'كوب زجاجي'],
    image: '/images/bev_cortado.png',
  },
  {
    id: 412,
    name: 'سبانيش لاتيه دافئ',
    category: 'espresso',
    price: '٢٤',
    rating: 4.8,
    description: 'تناغم السحر بين الإسبريسو الكولومبي والحليب المحلى المكثف ورغوة الحليب الغنية، يعلوه رشة خفيفة جداً من القرفة ليعطيك حلاوة مثالية.',
    attributes: ['حالي', 'حليب مبخر'],
    image: '/images/bev_spanish_latte.png',
  },

  // Pour-overs (4 drinks)
  {
    id: 405,
    name: 'بنمي جيشا - V60',
    category: 'pourover',
    price: '٤٥',
    rating: 5.0,
    description: 'محصول جيشا النادر محضر بعناية يدوية باستخدام أداة V60 للحفاظ على إيحاءات الزهور (الياسمين والبرغموت) وقوام يشبه الشاي الفاخر.',
    attributes: ['مقطر', 'زهرية'],
    image: '/images/bev_panama_v60.png',
  },
  {
    id: 406,
    name: 'كيميكس كينيا AA',
    category: 'pourover',
    price: '٢٨',
    rating: 4.6,
    description: 'مشروب صافي جداً بفضل فلاتر الكيميكس السميكة، يبرز بشكل استثنائي حمضية الكشمش الأسود وفاكهية التوت المشرقة للبن الكيني.',
    attributes: ['صافي', 'مقطر', 'فاكهي'],
    image: '/images/bev_chemex_kenya.png',
  },
  {
    id: 413,
    name: 'إثيوبي موجا - كاليتا ويف',
    category: 'pourover',
    price: '٢٦',
    rating: 4.8,
    description: 'تقطير باستخدام القمع المسطح (Kalita Wave) لضمان استخلاص متساوٍ، يبرز النوتات العطرية الخوخية والسكرية لمزرعة إثيوبية عريقة.',
    attributes: ['استخلاص مسطح', 'حلاوة'],
    image: '/images/bev_kalita_ethiopia.png',
  },
  {
    id: 414,
    name: 'كولومبي لاكتيك - إيروبرس',
    category: 'pourover',
    price: '٢٤',
    rating: 4.7,
    description: 'يجمع أفضل ما في التقطير والتنقيع مع استخدام ضغط الهواء لتحضير قوام ممتلئ وحلو بشكل استثنائي يشبه كومبوت الكرز.',
    attributes: ['قوام ممتلئ', 'مكثف'],
    image: '/images/bev_aeropress_colombia.png',
  },

  // Cold Brews (4 drinks)
  {
    id: 407,
    name: 'كولد برو منقوع ١٦ ساعة',
    category: 'cold',
    price: '٢٤',
    rating: 4.8,
    description: 'نستخلص قهوة السلفادور بالماء البارد والثلج لمدة ١٦ ساعة بصبر، لتحصل على مشروب بارد، سلس، ومنعش بلا أي حموضة أو مرارة مزعجة.',
    attributes: ['بارد', 'سلس', 'انتعاش'],
    image: '/images/bev_cold_brew.png',
  },
  {
    id: 408,
    name: 'آيسد دريب كولومبي',
    category: 'cold',
    price: '٢٦',
    rating: 4.7,
    description: 'تقطير يدوياً مباشرة فوق الثلج لمحصول كولومبي معالج بالتنقيع لتشعر بانفجار حلاوة الخوخ الاستوائي مع كل رشفة مثلجة.',
    attributes: ['بارد', 'مقطر يدوياً', 'حلاوة'],
    image: '/images/bev_iced_drip.png',
  },
  {
    id: 415,
    name: 'آيس شيكن إسبريسو',
    category: 'cold',
    price: '٢٢',
    rating: 4.9,
    description: 'جرعتين إسبريسو غامق ترجان بقوة مع الثلج وقطرة فانيليا لإنتاج رغوة طبيعية باردة، وتغطى برشة حليب لوز بارد ومنعش.',
    attributes: ['مثلج', 'حليب لوز', 'مخفوق'],
    image: '/images/bev_shaken_espresso.png',
  },
  {
    id: 416,
    name: 'كاسكارا سودا المنعشة',
    category: 'cold',
    price: '٢٠',
    rating: 4.8,
    description: 'تُستخلص قشور كرزة البن (الكاسكارا) لتعطي شراباً بطعم الزبيب والكرز، ثم يخلط مع مياه غازية وشريحة ليمون لمشروب فوار خيالي للصيف.',
    attributes: ['بارد', 'فوار', 'منعش'],
    image: '/images/bev_cascara_soda.png',
  }
];

export function CoffeeBeverages() {
  return (
    <main className="bg-cream min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-20 text-center lg:text-right relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="font-cairo text-sm tracking-[0.2em] text-gold uppercase">جاهزة للتقديم</span>
            <div className="w-8 h-[1px] bg-gold lg:hidden" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-amiri text-5xl lg:text-7xl text-deep-brown mb-6">
            مشروبات <span className="text-gold">القهوة</span> المقطرة بالحب
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-cairo text-lg text-coffee-medium max-w-2xl leading-relaxed mx-auto lg:mx-0">
            أكثر من ١٦ صنفاً من المشروبات الجاهزة. حُضّرت بأيدي أمهر الخبراء لتنقل لك سحر النكهات الكامل. استكشف أقسامنا المتنوعة.
          </motion.p>
        </div>

        {/* Categories Sections */}
        <div className="space-y-28">
          {beverageCategories.map((cat) => {
            const Icon = cat.icon;
            const categoryDrinks = beveragesData.filter((d) => d.category === cat.id);
            
            return (
              <section key={cat.id} className="relative">
                {/* Section Title */}
                <div className="flex items-center gap-4 mb-10 border-b border-gold/20 pb-4">
                  <div className="bg-deep-brown p-3 rounded-full text-gold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-amiri text-3xl lg:text-4xl text-deep-brown">{cat.label}</h2>
                </div>

                {/* Drinks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {categoryDrinks.map((drink, i) => (
                    <motion.div
                      key={drink.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group relative bg-white shadow-layered hover:shadow-layered-lg transition-all duration-500 rounded-3xl overflow-hidden flex flex-col"
                    >
                      {/* Beverage Image Container */}
                      <div className="relative h-72 overflow-hidden bg-matte-black/5">
                        <div className="absolute inset-0 bg-matte-black/20 group-hover:bg-transparent transition-colors z-10" />
                        <img
                          src={drink.image}
                          alt={drink.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                          <span className="font-amiri text-gold font-bold text-lg">{drink.price}</span>
                          <span className="font-cairo text-[10px] text-deep-brown">ر.س</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1 bg-gradient-to-b from-white to-cream/30">
                        <h3 className="font-amiri text-2xl text-deep-brown mb-3 group-hover:text-gold transition-colors">
                          {drink.name}
                        </h3>
                        <p className="font-cairo text-xs text-coffee-medium/80 mb-6 leading-relaxed flex-1">
                          {drink.description}
                        </p>
                        
                        {/* Attributes Tags */}
                        <div className="flex gap-2 flex-wrap mb-6">
                          {drink.attributes.map((attr, idx) => (
                            <span key={idx} className="font-cairo text-[10px] px-2.5 py-1 bg-warm-beige/30 text-deep-brown/70 rounded border border-warm-beige/50">
                              {attr}
                            </span>
                          ))}
                        </div>

                        {/* Order Button area */}
                        <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
                          <Link
                             to={`/product/${drink.id}?cat=beverages`}
                             className="font-cairo text-sm text-gold hover:text-deep-brown transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-300"
                          >
                            طلب الكوب
                            <ArrowLeftIcon className="w-4 h-4" />
                          </Link>
                          <div className="flex items-center gap-1 bg-gold/5 px-2 py-1 rounded">
                            <StarIcon className="w-3.5 h-3.5 fill-gold text-gold" />
                            <span className="font-cairo text-xs font-bold text-deep-brown">{drink.rating}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </main>
  );
}
