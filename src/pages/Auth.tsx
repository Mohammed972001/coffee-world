import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MailIcon, LockIcon, UserIcon, ArrowLeftIcon, SparklesIcon, EyeOffIcon, EyeIcon } from 'lucide-react';

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen relative flex items-center justify-center pt-24 pb-12 overflow-hidden bg-cream selection:bg-gold/30 selection:text-espresso">
      
      {/* ── BACKGROUND AMBIANCE ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-warm-beige/40 to-transparent" />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-espresso/5 blur-[100px] rounded-full" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Main Glass/Premium Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row w-full bg-white/70 backdrop-blur-2xl shadow-2xl border border-white/40 overflow-hidden"
          style={{ borderRadius: '2px 40px 2px 40px' }}
        >
          
          {/* ── LEFT SIDE (Visuals & Brand) ── */}
          <div className="lg:w-5/12 bg-espresso relative overflow-hidden hidden md:flex flex-col justify-between p-12">
            <div className="absolute inset-0">
              <img 
                src="/images/hero-roasting-beans.png" 
                alt="Coffee Beans"
                className="w-full h-full object-cover opacity-40 grayscale-[30%]"
              />
              
              {/* Animated particles mockup */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                 {Array.from({ length: 15 }).map((_, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 100 }}
                     animate={{ opacity: [0, 1, 0], y: -500 }}
                     transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 5 }}
                     className="absolute w-1 h-1 bg-gold rounded-full blur-[1px]"
                     style={{ left: `${Math.random() * 100}%` }}
                   />
                 ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-start gap-1">
              <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-gold mb-4 opacity-70">
                <SparklesIcon className="w-8 h-8" />
              </motion.div>
              <h2 className="font-amiri text-5xl text-warm-beige leading-tight">
                أهلاً بك في 
                <br />
                <span className="text-gold">عالم القهوة</span>
              </h2>
              <p className="font-cairo text-sm text-warm-beige/50 mt-4 leading-relaxed max-w-sm">
                حيث تلتقي الأصالة بالحرفية. انضم إلينا لتكتشف أندر المحاصيل وأعرق أدوات الضيافة العربية.
              </p>
            </div>

            <div className="relative z-10">
              <div className="h-[1px] w-12 bg-gold/30 mb-6" />
              <p className="font-amiri text-lg text-warm-beige/80 italic">
                "رائحة القهوة هي رسالة حب من الأرض السخية."
              </p>
            </div>
          </div>

          {/* ── RIGHT SIDE (Forms) ── */}
          <div className="lg:w-7/12 p-8 sm:p-14 lg:p-20 relative">
            
            {/* Nav switcher */}
            <div className="flex justify-end mb-12">
               <div className="bg-warm-beige/20 p-1.5 rounded-full flex gap-1 relative border border-warm-beige/30 shadow-inner">
                  <button 
                    onClick={() => setIsLogin(true)}
                    className={`relative z-10 px-6 py-2 rounded-full font-cairo text-sm font-semibold transition-all duration-300 ${isLogin ? 'text-espresso' : 'text-coffee-medium hover:text-deep-brown'}`}
                  >
                    دخول
                  </button>
                  <button 
                    onClick={() => setIsLogin(false)}
                    className={`relative z-10 px-6 py-2 rounded-full font-cairo text-sm font-semibold transition-all duration-300 ${!isLogin ? 'text-espresso' : 'text-coffee-medium hover:text-deep-brown'}`}
                  >
                    حساب جديد
                  </button>
                  {/* Sliding active background */}
                  <motion.div
                    className="absolute top-1.5 bottom-1.5 w-[95px] bg-white rounded-full shadow-md"
                    animate={{ left: isLogin ? 'calc(100% - 100px)' : '6px' }}
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
               </div>
            </div>

            {/* Forms Container with AnimatePresence */}
            <div className="relative min-h-[420px]">
              <AnimatePresence mode="wait">
                
                {/* ── LOGIN FORM ── */}
                {isLogin ? (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <div className="mb-8">
                      <h3 className="font-amiri text-4xl text-deep-brown mb-2">تسجيل الدخول</h3>
                      <p className="font-cairo text-sm text-coffee-medium/70">مرحباً بعودتك إلى عالمك المليء بالروائح الغنية.</p>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                      <div className="group relative">
                        <label className="font-cairo text-[11px] font-bold text-coffee-dark/50 uppercase tracking-widest absolute -top-2 right-4 bg-white/80 px-2 z-10 transition-colors group-focus-within:text-gold">البريد الإلكتروني</label>
                        <div className="relative flex items-center">
                          <MailIcon className="absolute right-4 w-5 h-5 text-warm-beige/80 group-focus-within:text-gold transition-colors" />
                          <input 
                            type="email" 
                            dir="ltr"
                            className="w-full bg-white/50 border border-warm-beige/40 focus:border-gold focus:ring-1 focus:ring-gold focus:bg-white text-right font-cairo py-4 pr-12 pl-4 rounded-xl outline-none transition-all duration-300 text-espresso placeholder:text-warm-beige"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>

                      <div className="group relative">
                        <label className="font-cairo text-[11px] font-bold text-coffee-dark/50 uppercase tracking-widest absolute -top-2 right-4 bg-white/80 px-2 z-10 transition-colors group-focus-within:text-gold">كلمة المرور</label>
                        <div className="relative flex items-center">
                          <LockIcon className="absolute right-4 w-5 h-5 text-warm-beige/80 group-focus-within:text-gold transition-colors" />
                          <input 
                            type={showPassword ? 'text' : 'password'} 
                            dir="ltr"
                            className="w-full bg-white/50 border border-warm-beige/40 focus:border-gold focus:ring-1 focus:ring-gold focus:bg-white text-right font-sans tracking-widest py-4 pr-12 pl-12 rounded-xl outline-none transition-all duration-300 text-espresso placeholder:text-warm-beige"
                            placeholder="••••••••"
                          />
                          <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute left-4 text-warm-beige/80 hover:text-gold transition-colors"
                          >
                            {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <label className="flex items-center gap-2 cursor-pointer group">
                          <div className="relative flex items-center justify-center w-5 h-5 border border-warm-beige/60 rounded bg-white group-hover:border-gold transition-colors">
                            <input type="checkbox" className="peer opacity-0 absolute inset-0 cursor-pointer" />
                            <div className="w-3 h-3 bg-gold rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                          </div>
                          <span className="font-cairo text-xs text-coffee-medium/80 group-hover:text-espresso transition-colors">تذكرني</span>
                        </label>
                        <button type="button" className="font-cairo text-xs text-gold hover:text-dark-gold transition-colors underline-offset-4 hover:underline">
                          نسيت كلمة المرور؟
                        </button>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-4 bg-espresso hover:bg-dark-brown text-gold font-cairo font-bold text-sm py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-espresso/10 group"
                      >
                        دخول الحساب
                        <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      </motion.button>
                    </form>

                  </motion.div>
                ) : (
                  
                /* ── REGISTER FORM ── */
                  <motion.div
                    key="register"
                    initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <div className="mb-8">
                      <h3 className="font-amiri text-4xl text-deep-brown mb-2">تأسيس حساب</h3>
                      <p className="font-cairo text-sm text-coffee-medium/70">انضم لنخبة متذوقي القهوة واستمتع بمزايا لا حصر لها.</p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div className="group relative">
                        <label className="font-cairo text-[11px] font-bold text-coffee-dark/50 uppercase tracking-widest absolute -top-2 right-4 bg-white/80 px-2 z-10 transition-colors group-focus-within:text-gold">الاسم الكامل</label>
                        <div className="relative flex items-center">
                          <UserIcon className="absolute right-4 w-5 h-5 text-warm-beige/80 group-focus-within:text-gold transition-colors" />
                          <input 
                            type="text" 
                            className="w-full bg-white/50 border border-warm-beige/40 focus:border-gold focus:ring-1 focus:ring-gold focus:bg-white text-right font-cairo py-3.5 pr-12 pl-4 rounded-xl outline-none transition-all duration-300 text-espresso placeholder:text-warm-beige"
                            placeholder="محمد بن عبد الله"
                          />
                        </div>
                      </div>

                      <div className="group relative">
                        <label className="font-cairo text-[11px] font-bold text-coffee-dark/50 uppercase tracking-widest absolute -top-2 right-4 bg-white/80 px-2 z-10 transition-colors group-focus-within:text-gold">البريد الإلكتروني</label>
                        <div className="relative flex items-center">
                          <MailIcon className="absolute right-4 w-5 h-5 text-warm-beige/80 group-focus-within:text-gold transition-colors" />
                          <input 
                            type="email" 
                            dir="ltr"
                            className="w-full bg-white/50 border border-warm-beige/40 focus:border-gold focus:ring-1 focus:ring-gold focus:bg-white text-right font-cairo py-3.5 pr-12 pl-4 rounded-xl outline-none transition-all duration-300 text-espresso placeholder:text-warm-beige"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>

                      <div className="group relative">
                        <label className="font-cairo text-[11px] font-bold text-coffee-dark/50 uppercase tracking-widest absolute -top-2 right-4 bg-white/80 px-2 z-10 transition-colors group-focus-within:text-gold">كلمة المرور</label>
                        <div className="relative flex items-center">
                          <LockIcon className="absolute right-4 w-5 h-5 text-warm-beige/80 group-focus-within:text-gold transition-colors" />
                          <input 
                            type={showPassword ? 'text' : 'password'} 
                            dir="ltr"
                            className="w-full bg-white/50 border border-warm-beige/40 focus:border-gold focus:ring-1 focus:ring-gold focus:bg-white text-right font-sans tracking-widest py-3.5 pr-12 pl-12 rounded-xl outline-none transition-all duration-300 text-espresso placeholder:text-warm-beige"
                            placeholder="••••••••"
                          />
                           <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute left-4 text-warm-beige/80 hover:text-gold transition-colors"
                          >
                            {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      <div className="pt-3">
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gold hover:bg-dark-gold text-espresso font-cairo font-bold text-sm py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-gold/20 group hover:shadow-gold/30"
                        >
                          إنشاء حساب جديد
                          <SparklesIcon className="w-4 h-4" />
                        </motion.button>
                      </div>
                      
                      <p className="font-cairo text-[10px] text-coffee-medium/50 text-center leading-relaxed mt-4">
                        بتسجيلك، أنت توافق على <span className="underline decoration-warm-beige underline-offset-4 hover:text-gold cursor-pointer">شروط الخدمة</span> و <span className="underline decoration-warm-beige underline-offset-4 hover:text-gold cursor-pointer">سياسة الخصوصية</span> الخاصة بنا.
                      </p>
                    </form>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Back to Home Link */}
        <div className="mt-8 flex justify-center">
            <Link to="/" className="group flex items-center gap-2 font-cairo text-xs text-coffee-medium/60 hover:text-deep-brown transition-colors">
              <span className="w-6 h-[1px] bg-coffee-medium/30 group-hover:bg-gold transition-colors" />
              العودة للصفحة الرئيسية
            </Link>
        </div>
      </div>
    </main>
  );
}
