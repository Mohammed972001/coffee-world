import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import {
  StarIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  HeartIcon,
  ShareIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  FlameIcon,
  SnowflakeIcon,
  MapPinIcon,
} from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────

type ProductCategory = 'beverages' | 'beans' | 'equipment';

interface BeverageProduct {
  category: 'beverages';
  id: string;
  name: string;
  nameEn: string;
  price: string;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  sizes: { label: string; priceAdd: string }[];
  temperatures: string[];
  addons: { name: string; price: string }[];
}

interface BeansProduct {
  category: 'beans';
  id: string;
  name: string;
  origin: string;
  region: string;
  price: string;
  rating: number;
  reviews: number;
  description: string;
  images: string[];
  roastLevel: number;
  roastName: string;
  flavorNotes: string[];
  altitude: string;
  process: string;
  variety: string;
  harvest: string;
  sizes: string[];
  grinds: string[];
}

interface EquipmentProduct {
  category: 'equipment';
  id: string;
  name: string;
  nameEn: string;
  price: string;
  rating: number;
  reviews: number;
  description: string;
  images: string[];
  material: string;
  specs: { label: string; value: string }[];
  features: string[];
  includes: string[];
}

type Product = BeverageProduct | BeansProduct | EquipmentProduct;

// ─── Data Store ──────────────────────────────────────────────────

const allBeverages: Record<string, BeverageProduct> = {
  '401': { category: 'beverages', id: '401', name: 'القهوة السعودية بالزعفران', nameEn: 'Saudi Saffron Coffee', price: '٢٥', rating: 4.9, reviews: 112, description: 'تحضر في الدلة النحاسية من حبوب خولانية شقراء، معطرة بالزعفران الأصيل والهيل، تقدم مع تمر المجدول الفاخر لترتوي بضيافة تراثية أصيلة.', image: '/images/bev_saudi_saffron.png', sizes: [{ label: 'فنجال', priceAdd: '٠' }, { label: 'كوب كبير', priceAdd: '+٥' }], temperatures: ['ساخن'], addons: [{ name: 'زعفران إضافي', price: '٥' }, { name: 'هيل إضافي', price: '٣' }, { name: 'تمر مجدول', price: '٤' }] },
  '402': { category: 'beverages', id: '402', name: 'قهوة تركية على الرمل', nameEn: 'Turkish Sand Coffee', price: '١٨', rating: 4.7, reviews: 78, description: 'تُستخلص ببطء شديد على رمال ساخنة داخل كنكة نحاسية مطروقة، لإنتاج رغوة (وش) مثالية وقوام ثقيل ومخملي يحمل عبق التاريخ.', image: '/images/bev_turkish_sand.png', sizes: [{ label: 'فنجال تركي', priceAdd: '٠' }], temperatures: ['ساخن'], addons: [{ name: 'هيل', price: '٢' }, { name: 'سكر', price: '١' }] },
  '409': { category: 'beverages', id: '409', name: 'قهوة إماراتية بالهيل', nameEn: 'Emirati Cardamom Coffee', price: '٢٢', rating: 4.8, reviews: 65, description: 'بن محمص لدرجة أغمق قليلاً من نظيره السعودي، غني جداً بالهيل السيلاني والقرفة، يقدم بعبق الكرم الإماراتي في فناجيل مزخرفة.', image: '/images/bev_emirati_coffee.png', sizes: [{ label: 'فنجال', priceAdd: '٠' }, { label: 'دلة صغيرة ٣ فناجيل', priceAdd: '+١٥' }], temperatures: ['ساخن'], addons: [{ name: 'قرفة إضافية', price: '٢' }, { name: 'زعفران', price: '٥' }] },
  '410': { category: 'beverages', id: '410', name: 'مشروب القشر اليمني', nameEn: 'Yemeni Qishr', price: '٢٠', rating: 4.9, reviews: 89, description: 'يحضر من قشور البن اليمني المجففة (القشر) والمغلية مع الزنجبيل الطازج والقرفة، مشروب شتوي دافئ وخالٍ تقريباً من الكافيين.', image: '/images/bev_yemeni_qishr.png', sizes: [{ label: 'كوب', priceAdd: '٠' }, { label: 'كوب كبير', priceAdd: '+٥' }], temperatures: ['ساخن'], addons: [{ name: 'زنجبيل إضافي', price: '٢' }, { name: 'عسل', price: '٤' }] },
  '403': { category: 'beverages', id: '403', name: 'فلات وايت مختص', nameEn: 'Specialty Flat White', price: '٢٢', rating: 4.8, reviews: 134, description: 'إسبريسو مزدوج من محصول إثيوبي فاخر، مدمج مع حليب مبخر بقوام حريري رقيق ورسمة لاتي آرت رائعة، يبرز فيه طعم الفواكه والكراميل.', image: '/images/bev_flat_white.png', sizes: [{ label: '٦ أوز', priceAdd: '٠' }, { label: '٨ أوز', priceAdd: '+٥' }], temperatures: ['ساخن', 'بارد'], addons: [{ name: 'شوت إسبريسو', price: '٥' }, { name: 'حليب لوز', price: '٤' }, { name: 'فانيليا', price: '٣' }] },
  '404': { category: 'beverages', id: '404', name: 'إسبريسو يمني', nameEn: 'Yemeni Espresso', price: '١٦', rating: 4.9, reviews: 201, description: 'جرعة إسبريسو مركزة (ريستريتو) من محصول حرازي، تقدم بقوام شراب ثقيل كالعسل، نوتات الشوكولاتة الداكنة والزبيب واضحة وقوية.', image: '/images/bev_yemeni_espresso.png', sizes: [{ label: 'ريستريتو', priceAdd: '٠' }, { label: 'دبل', priceAdd: '+٨' }], temperatures: ['ساخن'], addons: [{ name: 'قشر ليمون', price: '٢' }, { name: 'ماء غازية', price: '٣' }] },
  '411': { category: 'beverages', id: '411', name: 'كورتادو برازيلي', nameEn: 'Brazilian Cortado', price: '٢٠', rating: 4.7, reviews: 67, description: 'كميات متساوية من الإسبريسو ذو القوام الثقيل من البرازيل، وحليب مبخر بحرارة متوسطة، يقدم في كوب زجاجي فريد لتجربة متوازنة جداً.', image: '/images/bev_cortado.png', sizes: [{ label: 'كوب زجاجي ٤أوز', priceAdd: '٠' }], temperatures: ['ساخن'], addons: [{ name: 'حليب شوفان', price: '٤' }, { name: 'شوت إضافي', price: '٥' }] },
  '412': { category: 'beverages', id: '412', name: 'سبانيش لاتيه دافئ', nameEn: 'Spanish Latte', price: '٢٤', rating: 4.8, reviews: 98, description: 'تناغم السحر بين الإسبريسو الكولومبي والحليب المحلى المكثف ورغوة الحليب الغنية، يعلوه رشة خفيفة جداً من القرفة ليعطيك حلاوة مثالية.', image: '/images/bev_spanish_latte.png', sizes: [{ label: 'وسط', priceAdd: '٠' }, { label: 'كبير', priceAdd: '+٦' }], temperatures: ['ساخن', 'بارد'], addons: [{ name: 'حليب مكثف', price: '٣' }, { name: 'قرفة', price: '١' }, { name: 'كريمة', price: '٤' }] },
  '405': { category: 'beverages', id: '405', name: 'بنمي جيشا - V60', nameEn: 'Panama Gesha V60', price: '٤٥', rating: 5.0, reviews: 43, description: 'محصول جيشا النادر محضر بعناية يدوية باستخدام أداة V60 للحفاظ على إيحاءات الزهور (الياسمين والبرغموت) وقوام يشبه الشاي الفاخر.', image: '/images/bev_panama_v60.png', sizes: [{ label: '٢٥٠مل', priceAdd: '٠' }, { label: '٣٥٠مل', priceAdd: '+١٠' }], temperatures: ['ساخن', 'بارد'], addons: [{ name: 'ماء معدني فاخر', price: '٥' }] },
  '406': { category: 'beverages', id: '406', name: 'كيميكس كينيا AA', nameEn: 'Kenya AA Chemex', price: '٢٨', rating: 4.6, reviews: 56, description: 'مشروب صافي جداً بفضل فلاتر الكيميكس السميكة، يبرز بشكل استثنائي حمضية الكشمش الأسود وفاكهية التوت المشرقة للبن الكيني.', image: '/images/bev_chemex_kenya.png', sizes: [{ label: 'كوب', priceAdd: '٠' }, { label: 'إبريق ٢ كوب', priceAdd: '+٢٠' }], temperatures: ['ساخن'], addons: [{ name: 'ثلج للتبريد', price: '٢' }] },
  '413': { category: 'beverages', id: '413', name: 'إثيوبي موجا - كاليتا ويف', nameEn: 'Ethiopia Kalita Wave', price: '٢٦', rating: 4.8, reviews: 34, description: 'تقطير باستخدام القمع المسطح (Kalita Wave) لضمان استخلاص متساوٍ، يبرز النوتات العطرية الخوخية والسكرية لمزرعة إثيوبية عريقة.', image: '/images/bev_kalita_ethiopia.png', sizes: [{ label: '٢٥٠مل', priceAdd: '٠' }], temperatures: ['ساخن'], addons: [{ name: 'حليب كامل الدسم', price: '٣' }] },
  '414': { category: 'beverages', id: '414', name: 'كولومبي لاكتيك - إيروبرس', nameEn: 'Colombia Aeropress', price: '٢٤', rating: 4.7, reviews: 47, description: 'يجمع أفضل ما في التقطير والتنقيع مع استخدام ضغط الهواء لتحضير قوام ممتلئ وحلو بشكل استثنائي يشبه كومبوت الكرز.', image: '/images/bev_aeropress_colombia.png', sizes: [{ label: 'كوب', priceAdd: '٠' }], temperatures: ['ساخن', 'بارد'], addons: [{ name: 'ثلج', price: '٢' }, { name: 'شريحة برتقال', price: '٣' }] },
  '407': { category: 'beverages', id: '407', name: 'كولد برو منقوع ١٦ ساعة', nameEn: 'Cold Brew 16h', price: '٢٤', rating: 4.8, reviews: 156, description: 'نستخلص قهوة السلفادور بالماء البارد والثلج لمدة ١٦ ساعة بصبر، لتحصل على مشروب بارد، سلس، ومنعش بلا أي حموضة أو مرارة مزعجة.', image: '/images/bev_cold_brew.png', sizes: [{ label: 'كوب', priceAdd: '٠' }, { label: 'كبير', priceAdd: '+٦' }], temperatures: ['بارد'], addons: [{ name: 'حليب لوز', price: '٤' }, { name: 'فانيليا', price: '٣' }, { name: 'كريمة', price: '٤' }] },
  '408': { category: 'beverages', id: '408', name: 'آيسد دريب كولومبي', nameEn: 'Iced Drip Colombia', price: '٢٦', rating: 4.7, reviews: 72, description: 'تقطير يدوياً مباشرة فوق الثلج لمحصول كولومبي معالج بالتنقيع لتشعر بانفجار حلاوة الخوخ الاستوائي مع كل رشفة مثلجة.', image: '/images/bev_iced_drip.png', sizes: [{ label: 'كوب', priceAdd: '٠' }, { label: 'كبير', priceAdd: '+٦' }], temperatures: ['بارد'], addons: [{ name: 'حليب شوفان', price: '٤' }, { name: 'شراب بندق', price: '٣' }] },
  '415': { category: 'beverages', id: '415', name: 'آيس شيكن إسبريسو', nameEn: 'Iced Shaken Espresso', price: '٢٢', rating: 4.9, reviews: 188, description: 'جرعتين إسبريسو غامق ترجان بقوة مع الثلج وقطرة فانيليا لإنتاج رغوة طبيعية باردة، وتغطى برشة حليب لوز بارد ومنعش.', image: '/images/bev_shaken_espresso.png', sizes: [{ label: 'كبير', priceAdd: '٠' }], temperatures: ['بارد'], addons: [{ name: 'حليب لوز إضافي', price: '٤' }, { name: 'شوت إضافي', price: '٥' }, { name: 'كراميل', price: '٣' }] },
  '416': { category: 'beverages', id: '416', name: 'كاسكارا سودا المنعشة', nameEn: 'Cascara Soda', price: '٢٠', rating: 4.8, reviews: 61, description: 'تُستخلص قشور كرزة البن (الكاسكارا) لتعطي شراباً بطعم الزبيب والكرز، ثم يخلط مع مياه غازية وشريحة ليمون لمشروب فوار خيالي للصيف.', image: '/images/bev_cascara_soda.png', sizes: [{ label: 'كوب', priceAdd: '٠' }, { label: 'كبير', priceAdd: '+٥' }], temperatures: ['بارد'], addons: [{ name: 'نعناع طازج', price: '٢' }, { name: 'ليمون إضافي', price: '٢' }] },
};

const allBeans: Record<string, BeansProduct> = {
  '301': { category: 'beans', id: '301', name: 'يمنية حراز الفاخرة', origin: 'اليمن', region: 'مرتفعات حراز', price: '١٩٥', rating: 4.9, reviews: 134, description: 'قهوة يمنية أصيلة تتميز بقوام غني ونكهات إيحائية معقدة تجمع بين الشوكولاتة الداكنة والفواكه المجففة، تزرع على المدرجات الجبلية الشاهقة.', images: ['/images/bean_yemen_haraz.png', '/images/bean_yemen_mattari.png'], roastLevel: 60, roastName: 'متوسطة', flavorNotes: ['شوكولاتة داكنة', 'زبيب', 'توابل شرقية'], altitude: '٢٢٠٠', process: 'طبيعي مجفف بالشمس', variety: 'أرابيكا يمنية', harvest: '٢٠٢٥', sizes: ['٢٥٠ جرام', '٥٠٠ جرام', '١ كيلو'], grinds: ['حبوب كاملة', 'إسبريسو', 'فلتر', 'تركي'] },
  '302': { category: 'beans', id: '302', name: 'سعودية خولانية', origin: 'السعودية', region: 'جبال جازان', price: '٢٢٠', rating: 5.0, reviews: 98, description: 'بن خولاني سعودي أصيل من مزارع جازان، محمص بعناية لدرجة الشقراء ليناسب تحضير القهوة السعودية التقليدية، بنكهة غنية وتوازن مثالي.', images: ['/images/bean_saudi_khawlani.png', '/images/bean_saudi_shada.png'], roastLevel: 30, roastName: 'شقراء', flavorNotes: ['مكسرات محمصة', 'كراميل خفيف', 'رائحة زهرية'], altitude: '١٨٠٠', process: 'مجففة طبيعياً', variety: 'أرابيكا خولاني', harvest: '٢٠٢٥', sizes: ['٢٥٠ جرام', '٥٠٠ جرام'], grinds: ['حبوب كاملة', 'قهوة سعودية (خشن)'] },
  '303': { category: 'beans', id: '303', name: 'إثيوبية يرغاتشيف', origin: 'إثيوبيا', region: 'سيدامو', price: '١٣٥', rating: 4.8, reviews: 167, description: 'القهوة الأكثر طلباً لمحبي الفلتر النقي. تتميز بحمضية زاهية وإيحاءات عطرية مذهلة تشبه الشاي الأسود والياسمين.', images: ['/images/bean_ethiopia_yirg.png'], roastLevel: 35, roastName: 'فاتحة', flavorNotes: ['ياسمين', 'خوخ', 'شاي أسود'], altitude: '١٩٥٠', process: 'مغسولة', variety: 'أرابيكا هيرلوم', harvest: '٢٠٢٥', sizes: ['٢٥٠ جرام', '٥٠٠ جرام'], grinds: ['حبوب كاملة', 'فلتر', 'كيميكس'] },
  '304': { category: 'beans', id: '304', name: 'كولومبية سوبريمو', origin: 'كولومبيا', region: 'هويلا', price: '١٢٠', rating: 4.7, reviews: 143, description: 'قوام ممتلئ وحلاوة عالية تناسب مشروبات الإسبريسو والحليب. تبرز فيها نكهة السكر البني والكاكاو.', images: ['/images/bean_colombia_supremo.png'], roastLevel: 70, roastName: 'متوسطة الغمقان', flavorNotes: ['سكر بني', 'كاكاو', 'لوز'], altitude: '١٦٠٠', process: 'مغسولة', variety: 'كاستيلو', harvest: '٢٠٢٤', sizes: ['٢٥٠ جرام', '٥٠٠ جرام', '١ كيلو'], grinds: ['حبوب كاملة', 'إسبريسو', 'موكا بوت'] },
  '305': { category: 'beans', id: '305', name: 'برازيلية سيرادو', origin: 'البرازيل', region: 'ميناس جيرايس', price: '١١٥', rating: 4.6, reviews: 112, description: 'المزيج اليومي المثالي لعشاق القهوة الكلاسيكية والحموضة المنخفضة مع قوام ثقيل.', images: ['/images/bean_brazil_cerrado.png'], roastLevel: 80, roastName: 'غامقة', flavorNotes: ['شوكولاتة بالحليب', 'بندق', 'فانيليا'], altitude: '١١٠٠', process: 'طبيعي', variety: 'موندو نوفو', harvest: '٢٠٢٤', sizes: ['٢٥٠ جرام', '٥٠٠ جرام', '١ كيلو'], grinds: ['حبوب كاملة', 'إسبريسو', 'تركي', 'موكا بوت'] },
  '306': { category: 'beans', id: '306', name: 'بنمية جيشا الممتازة', origin: 'بنما', region: 'بوكيتي', price: '٤٥٠', rating: 5.0, reviews: 38, description: 'سلالة الجيشا النادرة، تقييم عالي جداً بفضل تعقيد نكهاتها وعطريتها الفائقة التي تأخذك في رحلة تذوق لا تنسى.', images: ['/images/bean_panama_geisha.png'], roastLevel: 25, roastName: 'فاتحة جداً', flavorNotes: ['برغموت', 'عسل أبيض', 'زهور البرتقال'], altitude: '١٧٠٠', process: 'عسلي', variety: 'جيشا', harvest: '٢٠٢٥', sizes: ['١٠٠ جرام', '٢٥٠ جرام'], grinds: ['حبوب كاملة', 'فلتر'] },
  '307': { category: 'beans', id: '307', name: 'رواندية غيشا', origin: 'رواندا', region: 'نياماجابي', price: '١٨٥', rating: 4.9, reviews: 61, description: 'معالجة بالتنقيع الكربوني المبتكر لإنتاج نكهات فواكه استوائية مكثفة وحلاوة نبيذية فريدة.', images: ['/images/bean_rwanda_geisha.png'], roastLevel: 30, roastName: 'فاتحة', flavorNotes: ['فراولة', 'مانجو', 'كاكاو خام'], altitude: '١٩٠٠', process: 'تنقيع كربوني', variety: 'جيشا', harvest: '٢٠٢٥', sizes: ['٢٥٠ جرام', '٥٠٠ جرام'], grinds: ['حبوب كاملة', 'فلتر', 'كيميكس'] },
  '308': { category: 'beans', id: '308', name: 'سلفادور باقامارا', origin: 'السلفادور', region: 'أبانيكا', price: '٣٢٠', rating: 4.9, reviews: 29, description: 'أكبر حبوب بُن حجماً من سلالة باقامارا الفريدة، محمصة بعناية فائقة للمحترفين والمنافسات.', images: ['/images/bean_elsalvador_pacamara.png'], roastLevel: 28, roastName: 'فلتر فاتحة', flavorNotes: ['كرز أسود', 'توت أزرق', 'قرفة'], altitude: '١٥٠٠', process: 'لاهوائي', variety: 'باقامارا', harvest: '٢٠٢٥', sizes: ['١٠٠ جرام', '٢٥٠ جرام'], grinds: ['حبوب كاملة', 'فلتر'] },
  '309': { category: 'beans', id: '309', name: 'يمنية مطري', origin: 'اليمن', region: 'بني مطر', price: '٢٥٠', rating: 4.9, reviews: 76, description: 'واحدة من أقدم سلالات القهوة في العالم، تتميز بقوام نبيذي عميق، حموضة فاكهية خفيفة، وطعم شوكولاتة مع توابل حارة.', images: ['/images/bean_yemen_mattari.png'], roastLevel: 65, roastName: 'متوسطة الغمقان', flavorNotes: ['كاكاو معتم', 'قرنفل', 'توت أسود'], altitude: '٢٥٠٠', process: 'طبيعي', variety: 'أرابيكا يمنية مطري', harvest: '٢٠٢٥', sizes: ['٢٥٠ جرام', '٥٠٠ جرام'], grinds: ['حبوب كاملة', 'إسبريسو', 'تركي'] },
  '310': { category: 'beans', id: '310', name: 'سعودية جبل شدا', origin: 'السعودية', region: 'الباحة', price: '٢١٠', rating: 4.8, reviews: 54, description: 'محصول نادر ومحدود جداً من جبال الباحة الشاهقة، يزرع عضوياً ويتمتع بنكهات متوازنة جداً مع حلاوة السكر المكرمل.', images: ['/images/bean_saudi_shada.png'], roastLevel: 35, roastName: 'متوسطة فاتحة', flavorNotes: ['سكر مكرمل', 'زهر الليمون', 'لوز'], altitude: '١٧٠٠', process: 'مغسولة', variety: 'أرابيكا خولاني', harvest: '٢٠٢٥', sizes: ['٢٥٠ جرام', '٥٠٠ جرام'], grinds: ['حبوب كاملة', 'فلتر'] },
  '311': { category: 'beans', id: '311', name: 'كوستاريكية تارازو', origin: 'كوستاريكا', region: 'وادي تارازو', price: '١٤٥', rating: 4.8, reviews: 89, description: 'قهوة معالجة بالطريقة العسلية تحقق توازن فريد بين الحموضة والحلاوة المركزية التي تشبه العسل والتفاح الأحمر.', images: ['/images/bean_costa_tarrazu.png'], roastLevel: 55, roastName: 'متوسطة', flavorNotes: ['عسل', 'تفاح أحمر', 'جوز البيكان'], altitude: '١٥٠٠', process: 'عسلي أصفر', variety: 'كاتيمور', harvest: '٢٠٢٤', sizes: ['٢٥٠ جرام', '٥٠٠ جرام'], grinds: ['حبوب كاملة', 'فلتر', 'إسبريسو'] },
  '312': { category: 'beans', id: '312', name: 'غواتيمالية أنتيغوا', origin: 'غواتيمالا', region: 'أنتيغوا', price: '١٣٠', rating: 4.7, reviews: 103, description: 'تزرع في تربة بركانية غنية، ما يعطيها قواماً كبيراً ونكهة كاكاو خام مع لمحات مسكية خفيفة والدخان المميز.', images: ['/images/bean_guatemala_antigua.png'], roastLevel: 72, roastName: 'متوسطة الغمقان', flavorNotes: ['كاكاو خام', 'دخان خفيف', 'توابل'], altitude: '١٦٥٠', process: 'مغسولة', variety: 'بوربون', harvest: '٢٠٢٤', sizes: ['٢٥٠ جرام', '٥٠٠ جرام', '١ كيلو'], grinds: ['حبوب كاملة', 'إسبريسو', 'موكا بوت', 'تركي'] },
  '313': { category: 'beans', id: '313', name: 'هندوراس ماركالا', origin: 'هندوراس', region: 'ماركالا', price: '١٤٠', rating: 4.6, reviews: 67, description: 'محصول عضوي بنكهات استوائية معقدة. يتميز بحلاوة الأناناس وحمضية الفراولة مع نهاية كوب سلسة جداً.', images: ['/images/bean_honduras_marcala.png'], roastLevel: 32, roastName: 'فاتحة', flavorNotes: ['أناناس', 'فراولة', 'كراميل'], altitude: '١٥٥٠', process: 'طبيعي', variety: 'كاتيمور', harvest: '٢٠٢٤', sizes: ['٢٥٠ جرام', '٥٠٠ جرام'], grinds: ['حبوب كاملة', 'فلتر', 'كيميكس'] },
  '314': { category: 'beans', id: '314', name: 'جامايكا بلو ماونتن', origin: 'جامايكا', region: 'الجبال الزرقاء', price: '٥٢٠', rating: 5.0, reviews: 22, description: 'أحد أندر وأنقى أنواع القهوة في العالم، تتميز بنعومة فائقة وانعدام المرارة تماماً، مع نكهة زهرية غنية وطعم يدوم طويلاً.', images: ['/images/bean_jamaica_blue.png'], roastLevel: 50, roastName: 'متوسطة', flavorNotes: ['حريري', 'زهور برية', 'شوكولاتة سويسرية'], altitude: '١٧٠٠', process: 'مغسولة', variety: 'تايبيكا', harvest: '٢٠٢٥', sizes: ['١٠٠ جرام', '٢٥٠ جرام'], grinds: ['حبوب كاملة', 'فلتر'] },
  '315': { category: 'beans', id: '315', name: 'هاواي كونا 100%', origin: 'هاواي', region: 'كونا', price: '٤٩٠', rating: 4.9, reviews: 31, description: 'تُزرع في المنحدرات البركانية لهاواي، تقدم كوباً غنياً جداً ونقياً، مع حلاوة عسل طبيعية والمكاديميا، تعتبر من كنوز القهوة العالمية.', images: ['/images/bean_hawaii_kona.png'], roastLevel: 55, roastName: 'متوسطة', flavorNotes: ['مكاديميا', 'عسل طبيعي', 'زبدة الكاكاو'], altitude: '٨٠٠', process: 'مغسولة', variety: 'تايبيكا كونا', harvest: '٢٠٢٥', sizes: ['١٠٠ جرام', '٢٥٠ جرام'], grinds: ['حبوب كاملة', 'فلتر', 'إسبريسو'] },
  '316': { category: 'beans', id: '316', name: 'أوغندية بوغيسو', origin: 'أوغندا', region: 'جبل إلغون', price: '٣٨٠', rating: 4.9, reviews: 18, description: 'فائزة بمزاد التميز، قهوة أوغندية تمر بتنقيع دقيق في بيئة غنية بالأكسجين، تنتج كأساً معقداً يفجر نكهات الشوكولاتة البيضاء والبابايا.', images: ['/images/bean_uganda_bugisu.png'], roastLevel: 28, roastName: 'حمصة المسابقات', flavorNotes: ['فراولة برية', 'بابايا', 'شوكولاتة بيضاء'], altitude: '١٩٠٠', process: 'تنقيع أكسجيني', variety: 'SL14', harvest: '٢٠٢٥', sizes: ['١٠٠ جرام', '٢٥٠ جرام'], grinds: ['حبوب كاملة', 'فلتر'] },
};

const allEquipment: Record<string, EquipmentProduct> = {
  '201': {
    category: 'equipment',
    id: '201',
    name: 'دلة سعودية نحاسية',
    nameEn: 'Dallah',
    price: '٨٥٠',
    rating: 4.9,
    reviews: 64,
    description: 'دلة نحاسية أصيلة مصنوعة يدوياً بنقوش عربية تقليدية ومقبض معزول حرارياً — رمز الكرم والضيافة السعودية. تُصنع هذه الدلة من النحاس الخالص على يد حرفيين سعوديين متخصصين.',
    images: ['/images/dallah-hero.png', '/images/hero-dallah-pour.png'],
    material: 'نحاس خالص ومقبض خشبي',
    specs: [
      { label: 'السعة', value: '١ لتر' },
      { label: 'الوزن', value: '٨٠٠ جرام' },
      { label: 'الطول', value: '٣٠ سم' },
    ],
    features: ['نقوش يدوية تقليدية', 'مقبض معزول للحرارة', 'غطاء محكم السكب'],
    includes: ['دلة النحاس', 'حقيبة حفظ قماشية'],
  },
  '202': {
    category: 'equipment',
    id: '202',
    name: 'كنكة نحاسية تركية',
    nameEn: 'Kanaka — Brass Cezve',
    price: '٣٢٠',
    rating: 4.8,
    reviews: 41,
    description: 'كنكة (إبريق جذوة) نحاسية مطروقة يدوياً بمقبض خشبي طويل — الأداة التقليدية لتحضير القهوة التركية والعربية.',
    images: ['/images/kanaka-hero.png', '/images/sand-coffee.png'],
    material: 'نحاس مطروق يدوياً',
    specs: [
      { label: 'السعة', value: '٣٠٠ مل' },
      { label: 'المقبض', value: 'خشب جوز طبيعي' },
      { label: 'المادة', value: 'نحاس خالص ١٠٠٪' },
    ],
    features: ['نحاس مطروق يدوياً', 'مقبض خشب جوز طويل', 'توزيع حراري متساوي'],
    includes: ['الكنكة النحاسية', 'ملعقة قهوة نحاسية', 'كيس قماش للحفظ'],
  },
  '203': {
    category: 'equipment',
    id: '203',
    name: 'سبرتاية نحاسية تراثية',
    nameEn: 'Spertaya — Spirit Burner',
    price: '٤٥٠',
    rating: 4.7,
    reviews: 30,
    description: 'سبرتاية (موقد كحول) نحاسية تراثية لتسخين القهوة بالطريقة التقليدية على اللهب المكشوف، مما يضيف طابعاً كلاسيكياً إلى جلسة القهوة.',
    images: ['/images/dallah-hero.png', '/images/dallah-hero.png'],
    material: 'نحاس ثقيل',
    specs: [
      { label: 'الارتفاع', value: '١٥ سم' },
      { label: 'نوع الوقود', value: 'كحوليات لافح' },
    ],
    features: ['تصميم عثماني عتيق', 'ثبات وحماية من الرياح', 'تحكم في اللهب'],
    includes: ['سبرتاية', 'زجاجة تعبئة الوقود'],
  },
  '204': {
    category: 'equipment',
    id: '204',
    name: 'طقم فناجيل عربية',
    nameEn: 'Finjaan Set',
    price: '٢٨٠',
    rating: 4.9,
    reviews: 55,
    description: 'طقم ٦ فناجيل قهوة عربية بدون مقابض بتصميم تراثي ونقوش ذهبية مطلية يدوياً لتقديم يليق بضيافتك.',
    images: ['/images/finjaan-set.png', '/images/finjaan-set.png'],
    material: 'خزف عالي الجودة متوج بالذهب',
    specs: [
      { label: 'عدد القطع', value: '٦ فناجيل' },
      { label: 'السعة', value: '٦٠ مل' },
    ],
    features: ['طلاء ذهب أصلي', 'حواف مريحة للشفاه', 'مقاوم للحرارة'],
    includes: ['٦ فناجيل', 'صندوق تقديم وحفظ'],
  },
  '205': {
    category: 'equipment',
    id: '205',
    name: 'ملاعق قياس نحاسية',
    nameEn: 'Brass Measuring Spoons',
    price: '١٤٥',
    rating: 4.6,
    reviews: 20,
    description: 'طقم ملاعق قياس نحاسية يدوية الصنع مع حامل خشبي — لقياس البن والهيل والزعفران بدقة عالية.',
    images: ['/images/brass-spoons.png', '/images/brass-spoons.png'],
    material: 'نحاس معتق',
    specs: [
      { label: 'التدرجات', value: '٣ أحجام (بن، زعفران، هيل)' },
      { label: 'الحامل', value: 'خشب طبيعي مرصع' },
    ],
    features: ['قياس دقيق للإضافات الثمينة', 'تصميم متين', 'مقاوم للتأكسد الخفيف'],
    includes: ['٣ ملاعق قياس', 'حامل خشبي'],
  },
  '206': {
    category: 'equipment',
    id: '206',
    name: 'محماس قهوة يدوي',
    nameEn: 'Coffee Roasting Pan',
    price: '٥٨٠',
    rating: 4.8,
    reviews: 70,
    description: 'محماس (مقلاة تحميص) حديد يدوي بمقبض طويل لتحميص البن الأخضر على النار المباشرة بالطريقة البدوية.',
    images: ['/images/mihmas-roasting.png', '/images/equipment-cta.png'],
    material: 'حديد مطاوع وخشب',
    specs: [
      { label: 'طول المقبض', value: '٤٠ سم' },
      { label: 'وزن التحميص', value: '٢٠٠ جرام للدفعة' },
    ],
    features: ['توزيع حراري ممتاز', 'مقبض طويل حامي من النار', 'تحميص متساوي بالتقليب المستمر'],
    includes: ['المحماس', 'قلاب الحبوب الخاص'],
  },
  '207': {
    category: 'equipment',
    id: '207',
    name: 'هاون ومدقة نحاسية',
    nameEn: 'Brass Mortar & Pestle',
    price: '٢٢٠',
    rating: 4.5,
    reviews: 32,
    description: 'هاون ومدقة من النحاس المطروق لطحن البن والهيل يدوياً — صوت الدق إيذان بحضور القهوة واستعداد الضيوف.',
    images: ['/images/mortar-pestle.png', '/images/mortar-pestle.png'],
    material: 'نحاس ثقيل مصبوب',
    specs: [
      { label: 'الوزن', value: '١.٢ كيلو جرام' },
      { label: 'القاعدة', value: 'مانعة للإنزلاق' },
    ],
    features: ['عملي لطحن البهارات التراثية', 'سهل التنظيف', 'عملنية تدوم لأجيال'],
    includes: ['هاون نحاسي', 'مدقة متناسبة'],
  },
  '208': {
    category: 'equipment',
    id: '208',
    name: 'صينية تقديم نحاسية',
    nameEn: 'Brass Serving Tray',
    price: '٣٩٠',
    rating: 4.7,
    reviews: 48,
    description: 'صينية تقديم نحاسية دائرية بحواف مرتفعة ونقوش إسلامية هندسية — لتقديم القهوة والتمر بأناقة كلاسيكية.',
    images: ['/images/dallah-hero.png', '/images/dallah-hero.png'],
    material: 'نحاس محفور وملمع',
    specs: [
      { label: 'القطر', value: '٤٠ سم' },
      { label: 'السمك', value: '٣ ملم' },
    ],
    features: ['حواف مقاومة للإنزلاق', 'نقوش محفورة عميقاً', 'سهولة الحمل'],
    includes: ['الصينية النحاسية'],
  },
  '209': {
    category: 'equipment',
    id: '209',
    name: 'رحاية بن خشبية',
    nameEn: 'Wooden Coffee Grinder',
    price: '٤٨٠',
    rating: 4.8,
    reviews: 60,
    description: 'رحاية (مطحنة) خشبية تراثية مصنوعة من خشب الجوز مع آلية طحن نحاسية داخلية.',
    images: ['/images/wooden-grinder.png', '/images/mortar-pestle.png'],
    material: 'خشب جوز ونحاس وفولاذ',
    specs: [
      { label: 'التروس', value: 'تروس مخروطية صلبة' },
      { label: 'الدرجات', value: 'قابلة للتعديل' },
      { label: 'الدرج', value: 'يساع ٤٠ جرام' },
    ],
    features: ['مقبض سلس الدوران', 'تصميم طراز قديم أنيق', 'طحن متجانس للإسبريسو والتركي'],
    includes: ['المطحنة اليدوية', 'فرشاة تنظيف صغيرة'],
  },
};

function getProduct(id: string | undefined, cat: string | null): Product {
  if (!id) return allBeans['301'];
  if (cat === 'beverages' && allBeverages[id]) return allBeverages[id];
  if (cat === 'beans' && allBeans[id]) return allBeans[id];
  if (cat === 'equipment' && allEquipment[id]) return allEquipment[id];
  // Fallback: search all stores
  if (allBeverages[id]) return allBeverages[id];
  if (allBeans[id]) return allBeans[id];
  if (allEquipment[id]) return allEquipment[id];
  return allBeans['301'];
}

// ─── Layout A: Beverages — Full immersive dark order panel ───────

function BeverageLayout({ product }: { product: BeverageProduct }) {
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedTemp, setSelectedTemp] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState<number[]>([]);
  const [quantity, setQuantity] = useState(1);

  const toggleAddon = (i: number) => {
    setSelectedAddons((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[85vh]">
      {/* Full-bleed image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7 relative h-[45vh] lg:h-auto lg:min-h-[85vh]"
      >
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, rgba(27,14,7,0.5) 0%, rgba(27,14,7,0.05) 50%, transparent 70%)' }} />

        {/* Floating price */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 px-6 py-4"
          style={{ background: 'rgba(27,14,7,0.85)', backdropFilter: 'blur(20px)', borderRadius: '2px 20px 2px 16px' }}
        >
          <div className="flex items-center gap-2">
            {selectedTemp === 0 ? <FlameIcon className="w-5 h-5 text-orange-400" /> : <SnowflakeIcon className="w-5 h-5 text-blue-300" />}
            <span className="font-amiri text-2xl text-gold">{product.price}</span>
            <span className="font-cairo text-xs text-gold/60">ر.س</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Dark order panel */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="lg:col-span-5 bg-espresso p-8 lg:p-12 flex flex-col justify-center"
      >
        <span className="font-cairo text-[10px] tracking-[0.2em] text-gold/50 mb-2 block">{product.nameEn}</span>
        <h1 className="font-amiri text-4xl lg:text-5xl text-warm-beige mb-2">{product.name}</h1>

        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-warm-beige/20'}`} />
            ))}
          </div>
          <span className="font-cairo text-xs text-gold">{product.rating}</span>
          <span className="font-cairo text-[11px] text-warm-beige/30">({product.reviews} تقييم)</span>
        </div>

        <p className="font-cairo text-sm text-warm-beige/50 leading-relaxed mb-8">{product.description}</p>
        <div className="h-[1px] bg-warm-beige/[0.06] mb-8" />

        {/* Size */}
        <div className="mb-7">
          <span className="font-cairo text-xs text-gold/70 font-semibold mb-4 block">الحجم</span>
          <div className="flex gap-3">
            {product.sizes.map((size, i) => (
              <button
                key={i}
                onClick={() => setSelectedSize(i)}
                className={`relative flex-1 py-4 font-cairo text-sm transition-all duration-400 text-center ${
                  selectedSize === i ? 'text-espresso' : 'text-warm-beige/50 hover:text-warm-beige/80 border border-warm-beige/10'
                }`}
                style={{ borderRadius: '2px 12px 2px 10px' }}
              >
                {selectedSize === i && (
                  <motion.div layoutId="size-bg" className="absolute inset-0 bg-gold" style={{ borderRadius: '2px 12px 2px 10px' }} transition={{ type: 'spring', stiffness: 350, damping: 30 }} />
                )}
                <span className="relative z-10 block">{size.label}</span>
                {size.priceAdd !== '٠' && (
                  <span className={`relative z-10 text-[10px] block mt-0.5 ${selectedSize === i ? 'text-espresso/60' : 'text-warm-beige/30'}`}>{size.priceAdd} ر.س</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Temperature */}
        <div className="mb-7">
          <span className="font-cairo text-xs text-gold/70 font-semibold mb-4 block">درجة الحرارة</span>
          <div className="flex gap-3">
            {product.temperatures.map((temp, i) => (
              <button
                key={i}
                onClick={() => setSelectedTemp(i)}
                className={`relative flex-1 flex items-center justify-center gap-2 py-3.5 font-cairo text-sm transition-all duration-400 ${
                  selectedTemp === i ? 'text-espresso' : 'text-warm-beige/50 border border-warm-beige/10'
                }`}
                style={{ borderRadius: '2px 12px 2px 10px' }}
              >
                {selectedTemp === i && (
                  <motion.div layoutId="temp-bg" className="absolute inset-0 bg-gold" style={{ borderRadius: '2px 12px 2px 10px' }} transition={{ type: 'spring', stiffness: 350, damping: 30 }} />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {i === 0 ? <FlameIcon className="w-4 h-4" /> : <SnowflakeIcon className="w-4 h-4" />}
                  {temp}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Addons */}
        <div className="mb-8">
          <span className="font-cairo text-xs text-gold/70 font-semibold mb-4 block">إضافات</span>
          <div className="flex flex-wrap gap-2">
            {product.addons.map((addon, i) => (
              <button
                key={i}
                onClick={() => toggleAddon(i)}
                className={`font-cairo text-[11px] px-4 py-2 transition-all duration-300 ${
                  selectedAddons.includes(i) ? 'bg-gold/20 text-gold border border-gold/40' : 'text-warm-beige/40 border border-warm-beige/10 hover:border-warm-beige/25'
                }`}
                style={{ borderRadius: '2px 8px 2px 6px' }}
              >
                {addon.name} <span className="text-[9px] mr-1">+{addon.price} ر.س</span>
              </button>
            ))}
          </div>
        </div>

        <div className="h-[1px] bg-warm-beige/[0.06] mb-8" />

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-warm-beige/10 bg-coffee-dark/30">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-3 text-warm-beige/40 hover:text-gold transition-colors"><MinusIcon className="w-4 h-4" /></button>
            <span className="font-cairo text-sm text-warm-beige w-10 text-center">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-3 text-warm-beige/40 hover:text-gold transition-colors"><PlusIcon className="w-4 h-4" /></button>
          </div>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 flex items-center justify-center gap-3 bg-gold hover:bg-dark-gold text-espresso font-cairo font-bold py-4 transition-colors shadow-gold-glow" style={{ borderRadius: '2px 14px 2px 10px' }}>
            <ShoppingBagIcon className="w-4 h-4" />
            <span>أضف إلى السلة</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Layout B: Beans — Gallery + Origin info, warm cream tones ───

function BeansLayout({ product }: { product: BeansProduct }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedGrind, setSelectedGrind] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  return (
    <div className="max-w-[1400px] mx-auto px-6 pt-28 pb-20">
      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 font-cairo text-xs text-coffee-medium/50 mb-8">
        <Link to="/" className="hover:text-gold transition-colors">الرئيسية</Link>
        <ChevronLeftIcon className="w-3 h-3" />
        <Link to="/beans" className="hover:text-gold transition-colors">حبوب القهوة</Link>
        <ChevronLeftIcon className="w-3 h-3" />
        <span className="text-gold">{product.name}</span>
      </motion.nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-7">
          <div className="relative overflow-hidden h-[400px] sm:h-[500px] lg:h-[580px] bg-white shadow-layered" style={{ borderRadius: '2px 40px 2px 30px' }}>
            <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover transition-all duration-500" />
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/30" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/30" />
          </div>
          <div className="flex gap-3 mt-4">
            {product.images.map((img, i) => (
              <button key={i} onClick={() => setSelectedImage(i)} className={`relative w-20 h-20 overflow-hidden transition-all duration-300 ${selectedImage === i ? 'ring-2 ring-gold shadow-gold-glow' : 'opacity-60 hover:opacity-100'}`} style={{ borderRadius: '2px 10px 2px 8px' }}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="lg:col-span-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-warm-beige'}`} />
              ))}
            </div>
            <span className="font-cairo text-xs text-gold">{product.rating}</span>
            <span className="font-cairo text-[11px] text-coffee-medium/40">({product.reviews} تقييم)</span>
          </div>

          <h1 className="font-amiri text-3xl lg:text-4xl text-deep-brown mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-6">
            <MapPinIcon className="w-3.5 h-3.5 text-gold/60" />
            <p className="font-cairo text-sm text-coffee-medium/60">{product.origin} — {product.region}</p>
          </div>

          <div className="flex items-baseline gap-2 mb-6">
            <span className="font-amiri text-4xl text-gold">{product.price}</span>
            <span className="font-cairo text-sm text-gold/70">ر.س</span>
          </div>

          <div className="gold-line w-full mb-6 opacity-30" />
          <p className="font-cairo text-sm text-coffee-medium/70 leading-relaxed mb-6">{product.description}</p>

          {/* Roast level */}
          <div className="mb-6 p-5 bg-white/60" style={{ borderRadius: '2px 16px 2px 12px' }}>
            <span className="font-cairo text-xs text-gold font-semibold mb-4 block">درجة التحميص: {product.roastName}</span>
            <div className="flex items-center gap-3">
              <span className="font-cairo text-[10px] text-coffee-medium/40 w-8">فاتح</span>
              <div className="flex-1 h-[8px] bg-warm-beige/20 rounded-full overflow-hidden relative">
                <motion.div initial={{ width: 0 }} animate={{ width: `${product.roastLevel}%` }} transition={{ duration: 1.2, ease: 'easeOut' }} className="h-full rounded-full" style={{ background: `linear-gradient(to left, #3E2723, #8D6E63 ${100 - product.roastLevel}%, #C5A059)` }} />
                <motion.div initial={{ left: '0%' }} animate={{ left: `${product.roastLevel}%` }} transition={{ duration: 1.2, ease: 'easeOut' }} className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-2 border-white shadow-gold-glow" />
              </div>
              <span className="font-cairo text-[10px] text-coffee-medium/40 w-8 text-left">داكن</span>
            </div>
          </div>

          {/* Flavor notes */}
          <div className="mb-6">
            <span className="font-cairo text-xs text-gold font-semibold mb-3 block">ملاحظات التذوق</span>
            <div className="flex flex-wrap gap-2">
              {product.flavorNotes.map((note) => (
                <span key={note} className="font-cairo text-[11px] px-3 py-1.5 bg-gold/8 text-deep-brown border border-gold/15" style={{ borderRadius: '2px 10px 2px 8px' }}>{note}</span>
              ))}
            </div>
          </div>

          {/* Origin grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[{ label: 'الارتفاع', value: product.altitude }, { label: 'المعالجة', value: product.process }, { label: 'الصنف', value: product.variety }, { label: 'الحصاد', value: product.harvest }].map((d) => (
              <div key={d.label} className="bg-white/60 p-3" style={{ borderRadius: '2px 10px 2px 8px' }}>
                <span className="font-cairo text-[10px] text-gold/70 block">{d.label}</span>
                <span className="font-cairo text-sm text-deep-brown font-semibold">{d.value}</span>
              </div>
            ))}
          </div>

          <div className="gold-line w-full mb-6 opacity-30" />

          {/* Size */}
          <div className="mb-5">
            <span className="font-cairo text-xs text-deep-brown font-semibold mb-3 block">الحجم</span>
            <div className="flex gap-2">
              {product.sizes.map((size, i) => (
                <button key={size} onClick={() => setSelectedSize(i)} className={`font-cairo text-xs px-5 py-2.5 transition-all duration-300 ${selectedSize === i ? 'bg-gold text-white shadow-gold-glow' : 'bg-white text-coffee-medium/70 border border-warm-beige hover:border-gold/30'}`} style={{ borderRadius: '2px 10px 2px 8px' }}>{size}</button>
              ))}
            </div>
          </div>

          {/* Grind */}
          <div className="mb-6">
            <span className="font-cairo text-xs text-deep-brown font-semibold mb-3 block">درجة الطحن</span>
            <div className="flex flex-wrap gap-2">
              {product.grinds.map((grind, i) => (
                <button key={grind} onClick={() => setSelectedGrind(i)} className={`font-cairo text-[11px] px-4 py-2 transition-all duration-300 ${selectedGrind === i ? 'bg-deep-brown text-warm-beige' : 'bg-white text-coffee-medium/70 border border-warm-beige hover:border-gold/30'}`} style={{ borderRadius: '2px 8px 2px 6px' }}>{grind}</button>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-warm-beige bg-white">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-3 text-coffee-medium/50 hover:text-gold transition-colors"><MinusIcon className="w-4 h-4" /></button>
              <span className="font-cairo text-sm text-deep-brown w-10 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-3 text-coffee-medium/50 hover:text-gold transition-colors"><PlusIcon className="w-4 h-4" /></button>
            </div>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 flex items-center justify-center gap-3 bg-gold hover:bg-dark-gold text-white font-cairo font-semibold py-3.5 transition-colors shadow-gold-glow" style={{ borderRadius: '2px 14px 2px 10px' }}>
              <ShoppingBagIcon className="w-4 h-4" /><span>أضف إلى السلة</span>
            </motion.button>
            <button onClick={() => setLiked(!liked)} className={`p-3 border transition-all ${liked ? 'border-gold bg-gold/10 text-gold' : 'border-warm-beige text-coffee-medium/40 hover:text-gold hover:border-gold/30'}`}>
              <HeartIcon className={`w-4 h-4 ${liked ? 'fill-gold' : ''}`} />
            </button>
            <button className="p-3 border border-warm-beige text-coffee-medium/40 hover:text-gold hover:border-gold/30 transition-all"><ShareIcon className="w-4 h-4" /></button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Layout C: Equipment — Tech showcase, side thumbs, accordion ─

function EquipmentLayout({ product }: { product: EquipmentProduct }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [liked, setLiked] = useState(false);

  const accordionSections = [
    { title: 'المواصفات التقنية', content: 'specs' as const },
    { title: 'المميزات', content: 'features' as const },
    { title: 'محتويات العلبة', content: 'includes' as const },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 pt-28 pb-20">
      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 font-cairo text-xs text-coffee-medium/50 mb-8">
        <Link to="/" className="hover:text-gold transition-colors">الرئيسية</Link>
        <ChevronLeftIcon className="w-3 h-3" />
        <Link to="/equipment" className="hover:text-gold transition-colors">المعدات</Link>
        <ChevronLeftIcon className="w-3 h-3" />
        <span className="text-gold">{product.name}</span>
      </motion.nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Gallery with side thumbnails */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-7">
          <div className="flex gap-4">
            <div className="hidden sm:flex flex-col gap-3 flex-shrink-0">
              {product.images.map((img, i) => (
                <button key={i} onClick={() => setSelectedImage(i)} className={`relative w-20 h-20 overflow-hidden transition-all duration-300 ${selectedImage === i ? 'ring-2 ring-gold shadow-gold-glow' : 'opacity-50 hover:opacity-100'}`} style={{ borderRadius: '2px 10px 2px 8px' }}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 relative">
              <div className="relative overflow-hidden h-[400px] sm:h-[500px] lg:h-[580px]" style={{ borderRadius: '2px 40px 2px 30px', background: 'linear-gradient(145deg, #FFFFFF 0%, #F5F0EB 100%)' }}>
                <AnimatePresence mode="wait">
                  <motion.img key={selectedImage} src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.4 }} />
                </AnimatePresence>
                <div className="absolute top-4 left-4 w-12 h-12"><div className="absolute top-0 left-0 w-full h-[1px] bg-gold/20" /><div className="absolute top-0 left-0 w-[1px] h-full bg-gold/20" /></div>
                <div className="absolute bottom-4 right-4 w-12 h-12"><div className="absolute bottom-0 right-0 w-full h-[1px] bg-gold/20" /><div className="absolute bottom-0 right-0 w-[1px] h-full bg-gold/20" /></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product info + accordion */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="lg:col-span-5">
          <span className="font-cairo text-[10px] tracking-[0.15em] text-gold/50 block mb-1">{product.nameEn}</span>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-warm-beige'}`} />
              ))}
            </div>
            <span className="font-cairo text-xs text-gold">{product.rating}</span>
            <span className="font-cairo text-[11px] text-coffee-medium/40">({product.reviews} تقييم)</span>
          </div>

          <h1 className="font-amiri text-3xl lg:text-4xl text-deep-brown mb-2">{product.name}</h1>
          <p className="font-cairo text-xs text-coffee-medium/50 mb-6">{product.material}</p>

          <div className="flex items-baseline gap-2 mb-6">
            <span className="font-amiri text-4xl text-gold">{product.price}</span>
            <span className="font-cairo text-sm text-gold/70">ر.س</span>
          </div>

          <div className="gold-line w-full mb-6 opacity-30" />
          <p className="font-cairo text-sm text-coffee-medium/70 leading-relaxed mb-8">{product.description}</p>

          {/* Accordion */}
          <div className="mb-8 space-y-2">
            {accordionSections.map((section, i) => (
              <div key={i} className="border border-warm-beige/30 overflow-hidden" style={{ borderRadius: '2px 12px 2px 10px' }}>
                <button onClick={() => setOpenAccordion(openAccordion === i ? null : i)} className="w-full flex items-center justify-between p-4 hover:bg-gold/[0.03] transition-colors">
                  <span className="font-cairo text-sm text-deep-brown font-semibold">{section.title}</span>
                  <motion.div animate={{ rotate: openAccordion === i ? 180 : 0 }} transition={{ duration: 0.3 }}><ChevronDownIcon className="w-4 h-4 text-gold/60" /></motion.div>
                </button>
                <AnimatePresence>
                  {openAccordion === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-4 pb-4">
                        {section.content === 'specs' && (
                          <div className="space-y-2">
                            {product.specs.map((spec) => (
                              <div key={spec.label} className="flex items-center justify-between py-2 border-b border-warm-beige/10 last:border-0">
                                <span className="font-cairo text-xs text-coffee-medium/50">{spec.label}</span>
                                <span className="font-cairo text-xs text-deep-brown font-semibold">{spec.value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {section.content === 'features' && (
                          <ul className="space-y-2">{product.features.map((f, fi) => (<li key={fi} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" /><span className="font-cairo text-xs text-coffee-medium/70">{f}</span></li>))}</ul>
                        )}
                        {section.content === 'includes' && (
                          <ul className="space-y-2">{product.includes.map((inc, ii) => (<li key={ii} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" /><span className="font-cairo text-xs text-coffee-medium/70">{inc}</span></li>))}</ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="gold-line w-full mb-6 opacity-30" />

          <div className="flex items-center gap-4">
            <div className="flex items-center border border-warm-beige bg-white">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-3 text-coffee-medium/50 hover:text-gold transition-colors"><MinusIcon className="w-4 h-4" /></button>
              <span className="font-cairo text-sm text-deep-brown w-10 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-3 text-coffee-medium/50 hover:text-gold transition-colors"><PlusIcon className="w-4 h-4" /></button>
            </div>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 flex items-center justify-center gap-3 bg-gold hover:bg-dark-gold text-white font-cairo font-semibold py-3.5 transition-colors shadow-gold-glow" style={{ borderRadius: '2px 14px 2px 10px' }}>
              <ShoppingBagIcon className="w-4 h-4" /><span>أضف إلى السلة</span>
            </motion.button>
            <button onClick={() => setLiked(!liked)} className={`p-3 border transition-all ${liked ? 'border-gold bg-gold/10 text-gold' : 'border-warm-beige text-coffee-medium/40 hover:text-gold hover:border-gold/30'}`}>
              <HeartIcon className={`w-4 h-4 ${liked ? 'fill-gold' : ''}`} />
            </button>
            <button className="p-3 border border-warm-beige text-coffee-medium/40 hover:text-gold hover:border-gold/30 transition-all"><ShareIcon className="w-4 h-4" /></button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────

export function ProductDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const cat = searchParams.get('cat');
  const product = getProduct(id, cat);

  return (
    <main className="bg-cream min-h-screen">
      {product.category === 'beverages' && <BeverageLayout product={product} />}
      {product.category === 'beans' && <BeansLayout product={product} />}
      {product.category === 'equipment' && <EquipmentLayout product={product} />}
    </main>
  );
}
