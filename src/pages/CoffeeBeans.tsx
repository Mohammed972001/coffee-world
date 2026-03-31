import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { StarIcon, MapPinIcon, FireExtinguisherIcon as FireIcon, AwardIcon, TrendingUpIcon, ShieldCheckIcon } from 'lucide-react';

const ProductCard = ({ bean, variant = 'standard' }: { bean: any, variant?: 'standard' | 'large' | 'horizontal' }) => {
  if (variant === 'horizontal') {
    return (
      <Link to={`/product/${bean.id}?cat=beans`} className="group relative bg-white shadow-layered hover:shadow-layered-lg transition-all duration-500 overflow-hidden flex flex-col sm:flex-row col-span-1 lg:col-span-2 rounded-tl-3xl rounded-br-3xl">
        <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
          <img src={bean.image} alt={bean.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2 rounded-full shadow-sm">
            <MapPinIcon className="w-3.5 h-3.5 text-gold" />
            <span className="font-cairo text-xs font-semibold text-deep-brown">{bean.origin}</span>
          </div>
        </div>
        <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-amiri text-2xl lg:text-3xl text-deep-brown group-hover:text-gold transition-colors">{bean.name}</h3>
              <div className="text-left bg-warm-beige/30 px-3 py-2 rounded-lg">
                <span className="font-amiri text-xl text-gold font-bold">{bean.price}</span>
                <span className="font-cairo text-xs text-gold/80 block -mt-1">ر.س</span>
              </div>
            </div>
            <p className="font-cairo text-sm text-coffee-medium mb-4 leading-relaxed">{bean.description}</p>
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center gap-1.5 font-cairo text-xs text-coffee-medium/70 bg-gray-50 px-2 py-1 rounded">
                <FireIcon className="w-3.5 h-3.5 text-orange-500" /> {bean.roast}
              </span>
              <span className="flex items-center gap-1.5 font-cairo text-xs text-coffee-medium/70 bg-gray-50 px-2 py-1 rounded">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-green-600" /> المعالجة: {bean.process}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
            <div className="flex gap-2">
              {bean.notes.map((note: string, idx: number) => (
                <span key={idx} className="font-cairo text-[10px] px-2.5 py-1 bg-gold/10 text-deep-brown rounded-full border border-gold/20">
                  {note}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="w-4 h-4 fill-gold text-gold" />
              <span className="font-cairo text-sm font-bold text-deep-brown">{bean.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/product/${bean.id}?cat=beans`} className={`group relative bg-white shadow-layered hover:shadow-layered-lg transition-all duration-500 overflow-hidden flex flex-col ${variant === 'large' ? 'col-span-1 lg:col-span-2 rounded-tr-[50px] rounded-bl-[50px]' : 'rounded-tl-[30px] rounded-br-[30px]'}`}>
      <div className={`relative w-full overflow-hidden ${variant === 'large' ? 'h-72 lg:h-96' : 'h-64'}`}>
        <img src={bean.image} alt={bean.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 flex items-center gap-1.5 rounded-full shadow-sm">
          <MapPinIcon className="w-3 h-3 text-gold" />
          <span className="font-cairo text-[10px] font-semibold text-deep-brown">{bean.origin}</span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className={`font-amiri text-deep-brown group-hover:text-gold transition-colors ${variant === 'large' ? 'text-2xl' : 'text-xl'}`}>{bean.name}</h3>
          <div className="text-left">
            <span className="font-amiri text-lg text-gold font-bold">{bean.price}</span>
            <span className="font-cairo text-[10px] text-gold/80 block">ر.س</span>
          </div>
        </div>
        <p className="font-cairo text-xs text-coffee-medium/70 mb-3">{bean.region} - {bean.altitude}م</p>
        <div className="flex gap-1.5 mb-4 flex-wrap mt-auto">
          {bean.notes.slice(0, 3).map((note: string, idx: number) => (
            <span key={idx} className="font-cairo text-[9px] px-2 py-0.5 bg-gray-50 text-coffee-medium rounded border border-gray-100">
              {note}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="font-cairo text-[10px] text-coffee-medium/80">{bean.roast} | {bean.process}</span>
          <div className="flex items-center gap-1">
            <StarIcon className="w-3 h-3 fill-gold text-gold" />
            <span className="font-cairo text-xs font-bold text-deep-brown">{bean.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// 1. Best Sellers Data (4 products now)
const bestSellers = [
  {
    id: 301,
    name: 'يمنية حراز الفاخرة',
    origin: 'اليمن',
    region: 'مرتفعات حراز',
    altitude: '٢٢٠٠',
    process: 'طبيعي مجفف بالشمس',
    roast: 'حمصة متوسطة',
    price: '١٩٥',
    rating: 4.9,
    description: 'قهوة يمنية أصيلة تتميز بقوام غني ونكهات إيحائية معقدة تجمع بين الشوكولاتة الداكنة والفواكه المجففة، تزرع على المدرجات الجبلية الشاهقة.',
    notes: ['شوكولاتة داكنة', 'زبيب', 'توابل شرقية'],
    image: '/images/bean_yemen_haraz.png'
  },
  {
    id: 302,
    name: 'سعودية خولانية',
    origin: 'السعودية',
    region: 'جبال جازان',
    altitude: '١٨٠٠',
    process: 'مجففة طبيعياً',
    roast: 'حمصة شقراء (سعودية)',
    price: '٢٢٠',
    rating: 5.0,
    description: 'بن خولاني سعودي أصيل من مزارع جازان، محمص بعناية لدرجة الشقراء ليناسب تحضير القهوة السعودية التقليدية، بنكهة غنية وتوازن مثالي.',
    notes: ['مكسرات محمصة', 'كراميل خفيف', 'رائحة زهرية'],
    image: '/images/bean_saudi_khawlani.png'
  },
  {
    id: 309,
    name: 'يمنية مطري',
    origin: 'اليمن',
    region: 'بني مطر',
    altitude: '٢٥٠٠',
    process: 'طبيعي',
    roast: 'حمصة متوسطة الغمقان',
    price: '٢٥٠',
    rating: 4.9,
    description: 'واحدة من أقدم سلالات القهوة في العالم، تتميز بقوام نبيذي عميق، حموضة فاكهية خفيفة، وطعم شوكولاتة مع توابل حارة تبرز في الإسبريسو.',
    notes: ['كاكاو معتم', 'قرفة', 'توت أسود'],
    image: '/images/bean_yemen_mattari.png'
  },
  {
    id: 310,
    name: 'سعودية جبل شدا',
    origin: 'السعودية',
    region: 'الباحة',
    altitude: '١٧٠٠',
    process: 'مغسولة',
    roast: 'حمصة متوسطة الفاتحة',
    price: '٢١٠',
    rating: 4.8,
    description: 'محصول نادر ومحدود جداً من جبال الباحة الشاهقة، يزرع عضوياً ويتمتع بنكهات متوازنة جداً مع حلاوة السكر المكرمل وبقايا زهرية.',
    notes: ['سكر مكرمل', 'زهر الليمون', 'لوز'],
    image: '/images/bean_saudi_shada.png'
  }
];

// 2. Most Requested / Trending Data (6 products now)
const trendingBeans = [
  {
    id: 303,
    name: 'إثيوبية يرغاتشيف',
    origin: 'إثيوبيا',
    region: 'سيدامو',
    altitude: '١٩٥٠',
    process: 'مغسولة',
    roast: 'حمصة فاتحة',
    price: '١٣٥',
    rating: 4.8,
    description: 'القهوة الأكثر طلباً لمحبي الفلتر النقي. تتميز بحمضية زاهية وإيحاءات عطرية مذهلة تشبه الشاي الأسود والياسمين.',
    notes: ['ياسمين', 'خوخ', 'شاي أسود'],
    image: '/images/bean_ethiopia_yirg.png'
  },
  {
    id: 304,
    name: 'كولومبية سوبريمو',
    origin: 'كولومبيا',
    region: 'هويلا',
    altitude: '١٦٠٠',
    process: 'مغسولة',
    roast: 'حمصة متوسطة الغمقان',
    price: '١٢٠',
    rating: 4.7,
    description: 'قوام ممتلئ وحلاوة عالية تناسب مشروبات الإسبريسو والحليب. تبرز فيها نكهة السكر البني والكاكاو.',
    notes: ['سكر بني', 'كاكاو', 'لوز'],
    image: '/images/bean_colombia_supremo.png'
  },
  {
    id: 305,
    name: 'برازيلية سيرادو',
    origin: 'البرازيل',
    region: 'ميناس جيرايس',
    altitude: '١١٠٠',
    process: 'طبيعي',
    roast: 'حمصة غامقة',
    price: '١١٥',
    rating: 4.6,
    description: 'المزيج اليومي المثالي لعشاق القهوة الكلاسيكية والحموضة المنخفضة مع قوام ثقيل.',
    notes: ['شوكولاتة بالحليب', 'بندق', 'فانيليا'],
    image: '/images/bean_brazil_cerrado.png'
  },
  {
    id: 311,
    name: 'كوستاريكية تارازو',
    origin: 'كوستاريكا',
    region: 'وادي تارازو',
    altitude: '١٥٠٠',
    process: 'عسلي أصفر',
    roast: 'حمصة متوسطة',
    price: '١٤٥',
    rating: 4.8,
    description: 'قهوة معالجة بالطريقة العسلية تحبط توازن فريد بين الحموضة والحلاوة المركزية التي تشبه العسل والتفاح الأحمر.',
    notes: ['عسل يلو', 'تفاح أحمر', 'جوز البيكان'],
    image: '/images/bean_costa_tarrazu.png'
  },
  {
    id: 312,
    name: 'غواتيمالية أنتيغوا',
    origin: 'غواتيمالا',
    region: 'أنتيغوا',
    altitude: '١٦٥٠',
    process: 'مغسولة',
    roast: 'حمصة متوسطة الغمقان',
    price: '١٣٠',
    rating: 4.7,
    description: 'تزرع في تربة بركانية غنية، ما يعطي هذه القهوة قواماً كبيراً ونكهة كاكاو خام مع لمحات مسكية خفيفة والدخان المميز للمنطقة.',
    notes: ['كاكاو خام', 'دخان خفيف', 'توابل'],
    image: '/images/bean_guatemala_antigua.png'
  },
  {
    id: 313,
    name: 'هندوراس ماركالا',
    origin: 'هندوراس',
    region: 'ماركالا',
    altitude: '١٥٥٠',
    process: 'طبيعي',
    roast: 'حمصة فاتحة',
    price: '١٤٠',
    rating: 4.6,
    description: 'محصول عضوي بنكهات استوائية معقدة. يتميز بحلاوة الأناناس وحمضية الفراولة مع نهاية كوب سلسة جداً.',
    notes: ['أناناس', 'فراولة', 'كراميل'],
    image: '/images/bean_honduras_marcala.png'
  }
];

// 3. Top Rated Data (4 products now)
const topRated = [
  {
    id: 306,
    name: 'بنمية جيشا الممتازة',
    origin: 'بنما',
    region: 'بوكيتي',
    altitude: '١٧٠٠',
    process: 'عسلي',
    roast: 'حمصة فاتحة جداً',
    price: '٤٥٠',
    rating: 5.0,
    description: 'سلالة الجيشا النادرة، تقييم عالي جداً بفضل تعقيد نكهاتها وعطريتها الفائقة التي تأخذك في رحلة تذوق لا تنسى.',
    notes: ['برغموت', 'عسل أبيض', 'زهور البرتقال'],
    image: '/images/bean_panama_geisha.png'
  },
  {
    id: 307,
    name: 'رواندية غيشا',
    origin: 'رواندا',
    region: 'نياماجابي',
    altitude: '١٩٠٠',
    process: 'تنقيع كربوني',
    roast: 'حمصة فاتحة',
    price: '١٨٥',
    rating: 4.9,
    description: 'معالجة بالتنقيع الكربوني المبتكر لإنتاج نكهات فواكه استوائية مكثفة وحلاوة نبيذية فريدة.',
    notes: ['فراولة', 'مانجو', 'كاكاو خام'],
    image: '/images/bean_rwanda_geisha.png'
  },
  {
    id: 314,
    name: 'جامايكا بلو ماونتن',
    origin: 'جامايكا',
    region: 'الجبال الزرقاء',
    altitude: '١٧٠٠',
    process: 'مغسولة',
    roast: 'متوسطة',
    price: '٥٢٠',
    rating: 5.0,
    description: 'أحد أندر وأنقى أنواع القهوة في العالم، تتميز بنعومة فائقة وانعدام المرارة تماماً، مع نكهة زهرية غنية وطعم يدوم طويلاً.',
    notes: ['حريري', 'زهور برية', 'شوكولاتة سويسرية'],
    image: '/images/bean_jamaica_blue.png'
  },
  {
    id: 315,
    name: 'هاواي كونا 100%',
    origin: 'هاواي',
    region: 'كونا',
    altitude: '٨٠٠',
    process: 'مغسولة',
    roast: 'متوسطة',
    price: '٤٩٠',
    rating: 4.9,
    description: 'تُزرع في المنحدرات البركانية لهاواي، تقدم كوباً غنياً جداً ونقياً، مع حلاوة عسل طبيعية والمكاديميا، تعتبر من كنوز القهوة العالمية.',
    notes: ['مكاديميا', 'عسل طبيعي', 'زبدة الكاكاو'],
    image: '/images/bean_hawaii_kona.png'
  }
];

// 4. Pro Selection / Specialty Data (2 products now)
const proSelection = [
  {
    id: 308,
    name: 'سلفادور باقامارا - حصري',
    origin: 'السلفادور',
    region: 'أبانيكا',
    altitude: '١٥٠٠',
    process: 'تجفيف لاهوائي',
    roast: 'حمصة الفلتر (فاتحة)',
    price: '٣٢٠',
    rating: 4.9,
    description: 'أكبر حبوب بُن حجماً من سلالة باقامارا الفريدة، محمصة بعناية فائقة للمحترفين والمنافسات، معالجة لاهوائياً لإبراز الإيحاءات المعقدة.',
    notes: ['كرز أسود', 'توت أزرق', 'قرفة'],
    image: '/images/bean_elsalvador_pacamara.png'
  },
  {
    id: 316,
    name: 'أوغندية بوغيسو - مزاد',
    origin: 'أوغندا',
    region: 'جبل إلغون',
    altitude: '١٩٠٠',
    process: 'تنقيع أكسجيني',
    roast: 'حمصة المسابقات',
    price: '٣٨٠',
    rating: 4.9,
    description: 'فائزة بمزاد التميز، قهوة أوغندية خضعت لتنقيع دقيق في بيئة غنية بالأكسجين، تنتج كأساً معقداً يفجر نكهات الشوكولاتة البيضاء والبابايا.',
    notes: ['الفرولة البرية', 'بابايا', 'شوكولاتة بيضاء'],
    image: '/images/bean_uganda_bugisu.png'
  }
];

export function CoffeeBeans() {
  return (
    <main className="bg-cream min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-16 relative">
          <div className="absolute -top-10 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center lg:text-right">
             <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="w-12 h-[2px] bg-gold" />
              <span className="font-cairo text-sm tracking-[0.2em] text-gold uppercase">المحاصيل السادة الخام</span>
            </div>
            <h1 className="font-amiri text-5xl lg:text-7xl text-deep-brown mb-6">
              حبوب القهوة <span className="text-gold">&</span> التحميص
            </h1>
            <p className="font-cairo text-lg text-coffee-medium max-w-2xl leading-relaxed mx-auto lg:mx-0">
              قائمة حصرية مخصصة فقط لحبوب البن السادة والمحمصة بعناية. استكشف مجموعتنا الفاخرة التي تضم {bestSellers.length + trendingBeans.length + topRated.length + proSelection.length} نوعاً من المزارع العالمية والمحلية.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          
          {/* Section 1: Best Sellers */}
          <section>
            <div className="flex items-center gap-3 mb-8 border-b border-gold/20 pb-4">
              <AwardIcon className="w-8 h-8 text-gold" />
              <h2 className="font-amiri text-3xl lg:text-4xl text-deep-brown">الأكثر مبيعاً</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {bestSellers.map((bean, idx) => (
                <motion.div key={bean.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                  <ProductCard bean={bean} variant="horizontal" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 2: Trending */}
          <section>
            <div className="flex items-center gap-3 mb-8 border-b border-gold/20 pb-4">
              <TrendingUpIcon className="w-8 h-8 text-gold" />
              <h2 className="font-amiri text-3xl lg:text-4xl text-deep-brown">الأكثر طلباً (رائجة)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingBeans.map((bean, idx) => (
                <motion.div key={bean.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                  <ProductCard bean={bean} variant="standard" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 3: Top Rated */}
          <section className="bg-matte-black text-white p-8 lg:p-12 rounded-bl-[80px] rounded-tr-[80px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full coffee-stain opacity-5 pointer-events-none" />
            <div className="flex items-center justify-between mb-10 relative z-10">
              <div className="flex items-center gap-3">
                <StarIcon className="w-8 h-8 text-gold fill-gold" />
                <h2 className="font-amiri text-3xl lg:text-4xl text-cream">الأفضل تقييماً</h2>
              </div>
              <p className="hidden md:block font-cairo text-sm text-warm-beige/70">حازت على رضى ذائقة الخبراء</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              {topRated.map((bean, idx) => (
                <motion.div key={bean.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                  <ProductCard bean={bean} variant="horizontal" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 4: Pro Selection */}
          <section>
            <div className="flex items-center justify-center gap-3 mb-12 text-center">
              <div className="w-16 h-[1px] bg-gold/50" />
              <h2 className="font-amiri text-3xl lg:text-4xl text-deep-brown px-4">اختيارات المحترفين</h2>
              <div className="w-16 h-[1px] bg-gold/50" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {proSelection.map((bean, idx) => (
                <motion.div key={bean.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                  <ProductCard bean={bean} variant="large" />
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}