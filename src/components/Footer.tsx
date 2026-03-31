import React from 'react';
import { Link } from 'react-router-dom';
import {
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon } from
'lucide-react';
export function Footer() {
  return (
    <footer className="relative bg-deep-brown overflow-hidden">
      {/* Decorative top gold line */}
      <div className="gold-line w-full opacity-40" />

      {/* Decorative organic shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold/[0.02] blur-3xl" />
      <div className="absolute bottom-10 right-20 w-48 h-48 blob-shape bg-coffee-dark/30 blur-2xl" />

      <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column - Takes more space, offset */}
          <div className="md:col-span-4 md:pr-8">
            <h3 className="font-amiri text-4xl text-gold mb-3">عالم القهوة</h3>
            <p className="font-cairo text-warm-beige/50 text-xs tracking-[0.25em] uppercase mb-6">
              World of Coffee
            </p>
            <p className="font-cairo text-warm-beige/70 text-sm leading-relaxed mb-8 max-w-xs">
              نقدم لكم أجود أنواع القهوة المختصة من أفضل المزارع حول العالم.
              رحلة استثنائية من الحبة إلى الفنجان.
            </p>
            <div className="flex items-center gap-4">
              {[InstagramIcon, TwitterIcon, FacebookIcon].map((Icon, i) =>
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/50 hover:bg-gold/5 transition-all duration-300">
                
                  <Icon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:mt-4">
            <h4 className="font-amiri text-gold text-lg mb-5">روابط سريعة</h4>
            <nav className="flex flex-col gap-3">
              {[
              {
                label: 'المتجر',
                path: '/shop'
              },
              {
                label: 'حبوب القهوة',
                path: '/beans'
              },
              {
                label: 'المعدات',
                path: '/equipment'
              },
              {
                label: 'طرق التحضير',
                path: '/brewing'
              },
              {
                label: 'قصتنا',
                path: '/story'
              }].
              map((item) =>
              <Link
                key={item.path}
                to={item.path}
                className="font-cairo text-sm text-warm-beige/60 hover:text-gold transition-colors duration-300">
                
                  {item.label}
                </Link>
              )}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3 md:mt-4">
            <h4 className="font-amiri text-gold text-lg mb-5">تواصل معنا</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-4 h-4 text-gold/60 mt-1 flex-shrink-0" />
                <span className="font-cairo text-sm text-warm-beige/60">
                  الرياض، المملكة العربية السعودية
                  <br />
                  حي العليا، شارع التحلية
                </span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <span
                  className="font-cairo text-sm text-warm-beige/60"
                  dir="ltr">
                  
                  +966 11 234 5678
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <span className="font-cairo text-sm text-warm-beige/60">
                  info@alamalqahwa.sa
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3 md:mt-4">
            <h4 className="font-amiri text-gold text-lg mb-5">
              النشرة البريدية
            </h4>
            <p className="font-cairo text-sm text-warm-beige/60 mb-4">
              اشترك ليصلك كل جديد عن عالم القهوة المختصة
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="w-full bg-coffee-dark/50 border border-gold/20 rounded-sm px-4 py-3 font-cairo text-sm text-warm-beige placeholder:text-warm-beige/30 focus:outline-none focus:border-gold/50 transition-colors" />
              
              <button className="absolute left-1 top-1 bottom-1 px-4 bg-gold/90 hover:bg-gold text-espresso font-cairo text-xs font-semibold rounded-sm transition-colors">
                اشتراك
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="gold-line w-full mt-12 mb-6 opacity-20" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-cairo text-xs text-warm-beige/40">
            © ٢٠٢٦ عالم القهوة. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-cairo text-xs text-warm-beige/40 hover:text-gold/60 cursor-pointer transition-colors">
              سياسة الخصوصية
            </span>
            <span className="font-cairo text-xs text-warm-beige/40 hover:text-gold/60 cursor-pointer transition-colors">
              الشروط والأحكام
            </span>
            <span className="font-cairo text-xs text-warm-beige/40 hover:text-gold/60 cursor-pointer transition-colors">
              سياسة الاسترجاع
            </span>
          </div>
        </div>
      </div>
    </footer>);

}