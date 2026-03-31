import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  ChevronDownIcon,
  SendIcon,
  MessageCircleIcon } from
'lucide-react';
const faqs = [
{
  q: 'ما هي مدة التوصيل داخل المملكة؟',
  a: 'نوفر خدمة توصيل سريعة خلال ٢-٣ أيام عمل لجميع مناطق المملكة. التوصيل مجاني للطلبات فوق ٢٠٠ ر.س.'
},
{
  q: 'هل يمكنني استرجاع المنتج؟',
  a: 'نعم، نقبل الاسترجاع خلال ٧ أيام من الاستلام بشرط أن يكون المنتج مغلقاً وبحالته الأصلية.'
},
{
  q: 'كيف أختار درجة الطحن المناسبة؟',
  a: 'يعتمد ذلك على طريقة التحضير: ناعم للإسبريسو والتركي، متوسط للفلتر والكيمكس، خشن للفرنش بريس. يمكنك التواصل معنا للمساعدة.'
},
{
  q: 'هل تقدمون اشتراكات شهرية؟',
  a: 'نعم! نقدم اشتراكات شهرية مخصصة حسب ذوقك. اختر الكمية والتكرار ونوع القهوة المفضل واستمتع بتوصيل منتظم.'
},
{
  q: 'هل القهوة طازجة التحميص؟',
  a: 'بالتأكيد! نحمص جميع طلباتنا طازجة عند الطلب ونشحنها خلال ٢٤ ساعة من التحميص لضمان أقصى نضارة.'
}];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <main className="bg-cream min-h-screen pt-28 pb-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden mb-[-60px]">
        <img
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1400&q=80"
          alt="تواصل معنا"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-espresso/75" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-center px-6">
            
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-[1.5px] bg-gold/60" />
              <span className="font-cairo text-xs tracking-[0.2em] text-gold/80">
                نسعد بتواصلكم
              </span>
              <div className="w-8 h-[1.5px] bg-gold/60" />
            </div>
            <h1 className="font-amiri text-4xl lg:text-5xl text-white">
              تواصل <span className="text-gold">معنا</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Contact cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact info cards */}
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
              delay: 0.2
            }}
            className="lg:col-span-4 space-y-4">
            
            {[
            {
              icon: MapPinIcon,
              title: 'العنوان',
              lines: [
              'الرياض، حي العليا',
              'شارع التحلية',
              'المملكة العربية السعودية']

            },
            {
              icon: PhoneIcon,
              title: 'الهاتف',
              lines: ['+966 11 234 5678', '+966 50 123 4567']
            },
            {
              icon: MailIcon,
              title: 'البريد الإلكتروني',
              lines: ['info@alamalqahwa.sa', 'support@alamalqahwa.sa']
            },
            {
              icon: ClockIcon,
              title: 'ساعات العمل',
              lines: [
              'الأحد - الخميس: ٩ ص - ٩ م',
              'الجمعة - السبت: ٢ م - ٩ م']

            }].
            map((item, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: 0.3 + i * 0.08
              }}
              className="bg-white p-5 shadow-layered group hover:shadow-layered-lg transition-all duration-400"
              style={{
                borderRadius:
                i % 2 === 0 ? '2px 14px 2px 10px' : '10px 2px 14px 2px'
              }}>
              
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <item.icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-amiri text-base text-deep-brown mb-1">
                      {item.title}
                    </h3>
                    {item.lines.map((line, li) =>
                  <p
                    key={li}
                    className="font-cairo text-xs text-coffee-medium/60">
                    
                        {line}
                      </p>
                  )}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Contact form */}
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
              delay: 0.3
            }}
            className="lg:col-span-8">
            
            <div
              className="bg-white p-8 lg:p-10 shadow-layered-lg"
              style={{
                borderRadius: '2px 24px 2px 20px'
              }}>
              
              {!submitted ?
              <>
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircleIcon className="w-5 h-5 text-gold" />
                    <h2 className="font-amiri text-2xl text-deep-brown">
                      أرسل لنا رسالة
                    </h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-cairo text-xs text-coffee-medium/60 mb-1.5 block">
                          الاسم الكامل
                        </label>
                        <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-warm-beige/20 border border-warm-beige/40 px-4 py-3 font-cairo text-sm text-deep-brown placeholder:text-coffee-medium/30 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="أدخل اسمك" />
                      
                      </div>
                      <div>
                        <label className="font-cairo text-xs text-coffee-medium/60 mb-1.5 block">
                          البريد الإلكتروني
                        </label>
                        <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-warm-beige/20 border border-warm-beige/40 px-4 py-3 font-cairo text-sm text-deep-brown placeholder:text-coffee-medium/30 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="بريدك الإلكتروني" />
                      
                      </div>
                    </div>
                    <div>
                      <label className="font-cairo text-xs text-coffee-medium/60 mb-1.5 block">
                        الموضوع
                      </label>
                      <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-warm-beige/20 border border-warm-beige/40 px-4 py-3 font-cairo text-sm text-deep-brown focus:outline-none focus:border-gold/50 transition-colors appearance-none">
                      
                        <option value="">اختر الموضوع</option>
                        <option value="order">استفسار عن طلب</option>
                        <option value="product">استفسار عن منتج</option>
                        <option value="wholesale">طلب جملة</option>
                        <option value="partnership">شراكة تجارية</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-cairo text-xs text-coffee-medium/60 mb-1.5 block">
                        الرسالة
                      </label>
                      <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-warm-beige/20 border border-warm-beige/40 px-4 py-3 font-cairo text-sm text-deep-brown placeholder:text-coffee-medium/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                      placeholder="اكتب رسالتك هنا..." />
                    
                    </div>
                    <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.01
                    }}
                    whileTap={{
                      scale: 0.99
                    }}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gold hover:bg-dark-gold text-white font-cairo font-semibold px-10 py-3.5 transition-colors shadow-gold-glow">
                    
                      <span>إرسال الرسالة</span>
                      <SendIcon className="w-4 h-4" />
                    </motion.button>
                  </form>
                </> :

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                className="text-center py-12">
                
                  <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-5">
                    <MailIcon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-amiri text-2xl text-deep-brown mb-2">
                    شكراً لتواصلك! ☕
                  </h3>
                  <p className="font-cairo text-sm text-coffee-medium/60">
                    تم استلام رسالتك بنجاح. سنرد عليك خلال ٢٤ ساعة.
                  </p>
                  <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      subject: '',
                      message: ''
                    });
                  }}
                  className="font-cairo text-sm text-gold hover:text-dark-gold mt-6 border-b border-gold/30 pb-0.5 transition-colors">
                  
                    إرسال رسالة أخرى
                  </button>
                </motion.div>
              }
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <motion.section
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
          className="mt-20">
          
          <div className="text-center mb-12">
            <h2 className="font-amiri text-3xl text-deep-brown">
              الأسئلة <span className="text-gold">الشائعة</span>
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto space-y-3">
            {faqs.map((faq, i) =>
            <motion.div
              key={i}
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
                delay: i * 0.06
              }}
              className="bg-white shadow-layered overflow-hidden">
              
                <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-right">
                
                  <h3 className="font-cairo text-sm text-deep-brown font-semibold flex-1">
                    {faq.q}
                  </h3>
                  <ChevronDownIcon
                  className={`w-4 h-4 text-gold flex-shrink-0 mr-4 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                
                </button>
                <motion.div
                initial={false}
                animate={{
                  height: openFaq === i ? 'auto' : 0,
                  opacity: openFaq === i ? 1 : 0
                }}
                transition={{
                  duration: 0.3
                }}
                className="overflow-hidden">
                
                  <p className="font-cairo text-xs text-coffee-medium/60 leading-relaxed px-5 pb-5">
                    {faq.a}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.section>
      </div>
    </main>);

}