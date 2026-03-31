import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SendIcon } from 'lucide-react';
export function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };
  return (
    <section className="relative bg-matte-black py-24 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-[20%] w-72 h-72 blob-shape bg-gold/[0.03] blur-3xl" />
      <div className="absolute bottom-0 left-[10%] w-56 h-56 blob-shape-2 bg-deep-brown/20 blur-2xl" />
      <div className="absolute top-16 left-[30%] w-20 h-20 coffee-stain opacity-10" />
      <div className="absolute bottom-20 right-[15%] w-28 h-28 coffee-stain opacity-8" />

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 gold-line opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 gold-line opacity-20" />

      <div className="max-w-[800px] mx-auto px-6 relative z-10 text-center">
        <motion.div
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
          className="flex items-center justify-center gap-3 mb-6">
          
          <div className="w-8 h-[1.5px] bg-gold/50" />
          <span className="font-cairo text-xs tracking-[0.2em] text-gold/70">
            ابقَ على اطلاع
          </span>
          <div className="w-8 h-[1.5px] bg-gold/50" />
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
          transition={{
            delay: 0.1
          }}
          className="font-amiri text-4xl lg:text-6xl text-gold mb-4">
          
          انضم إلى عالمنا
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
          className="font-cairo text-warm-beige/50 text-sm leading-relaxed max-w-md mx-auto mb-10">
          
          اشترك في نشرتنا البريدية لتصلك أحدث العروض، وصفات التحضير الحصرية،
          وآخر أخبار عالم القهوة المختصة
        </motion.p>

        <motion.form
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
          onSubmit={handleSubmit}
          className="relative max-w-lg mx-auto">
          
          {!submitted ?
          <div className="relative">
              <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="أدخل بريدك الإلكتروني"
              className="w-full bg-white/5 border border-gold/20 px-6 py-4 font-cairo text-sm text-warm-beige placeholder:text-warm-beige/25 focus:outline-none focus:border-gold/50 transition-colors"
              style={{
                borderRadius: '2px 14px 2px 10px'
              }}
              required />
            
              <button
              type="submit"
              className="absolute left-1.5 top-1.5 bottom-1.5 px-6 bg-gold hover:bg-dark-gold text-espresso font-cairo text-sm font-semibold flex items-center gap-2 transition-colors"
              style={{
                borderRadius: '2px 12px 2px 8px'
              }}>
              
                <span>اشتراك</span>
                <SendIcon className="w-3.5 h-3.5" />
              </button>
            </div> :

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            className="bg-gold/10 border border-gold/30 p-6"
            style={{
              borderRadius: '2px 14px 2px 10px'
            }}>
            
              <span className="font-amiri text-xl text-gold block mb-1">
                شكراً لك! ☕
              </span>
              <span className="font-cairo text-sm text-warm-beige/60">
                تم تسجيلك بنجاح في نشرتنا البريدية
              </span>
            </motion.div>
          }
        </motion.form>
      </div>
    </section>);

}