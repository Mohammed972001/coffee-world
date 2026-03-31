import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBagIcon, MenuIcon, XIcon, SearchIcon, UserIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const rightNav = [
  { label: 'الرئيسية', path: '/' },
  { label: 'مشروبات القهوة', path: '/beverages' },
  { label: 'حبوب القهوة', path: '/beans' },
  { label: 'المعدات', path: '/equipment' },
];

const leftNav = [
  { label: 'طرق التحضير', path: '/brewing' },
  { label: 'قصتنا', path: '/story' },
  { label: 'تواصل معنا', path: '/contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ item }: { item: typeof rightNav[0] }) => (
    <Link
      key={item.path}
      to={item.path}
      onMouseEnter={() => setHoveredPath(item.path)}
      onMouseLeave={() => setHoveredPath(null)}
      className={`relative font-cairo text-[13px] tracking-wide transition-all duration-400 py-2 group ${
        isActive(item.path)
          ? 'text-gold font-semibold'
          : scrolled
          ? 'text-warm-beige/90 hover:text-gold'
          : 'text-deep-brown/80 hover:text-gold'
      }`}
    >
      {item.label}
      {/* Animated gold underline with dot */}
      <span className="absolute -bottom-1 right-0 left-0 flex flex-col items-center">
        <motion.span
          className="h-[1.5px] bg-gold"
          initial={false}
          animate={{
            width: isActive(item.path) ? '100%' : hoveredPath === item.path ? '70%' : '0%',
            opacity: isActive(item.path) || hoveredPath === item.path ? 1 : 0,
          }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{ display: 'block' }}
        />
        {/* Gold dot indicator for active */}
        {isActive(item.path) && (
          <motion.span
            layoutId="nav-dot"
            className="w-[5px] h-[5px] rounded-full bg-gold mt-1.5"
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          />
        )}
      </span>
    </Link>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'py-2.5'
            : 'py-5'
        }`}
        style={{
          background: scrolled
            ? 'linear-gradient(135deg, rgba(27,14,7,0.92) 0%, rgba(26,26,26,0.88) 100%)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          boxShadow: scrolled
            ? '0 1px 0 rgba(197,160,89,0.08), 0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.03)'
            : 'none',
        }}
      >
        {/* Subtle gold accent line at top when scrolled */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute top-0 left-[10%] right-[10%] h-[1px]"
            style={{
              background: 'linear-gradient(to left, transparent, rgba(197,160,89,0.4), transparent)',
            }}
          />
        )}

        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Right Nav (RTL: appears on the right) */}
          <nav className="hidden lg:flex items-center gap-8 flex-1">
            {rightNav.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
          </nav>

          {/* Center Logo — premium treatment */}
          <Link to="/" className="flex-shrink-0 mx-10 text-center relative group">
            {/* Decorative brackets around logo */}
            <span
              className={`absolute -right-5 top-1/2 -translate-y-1/2 font-amiri text-2xl transition-all duration-500 ${
                scrolled ? 'text-gold/20' : 'text-gold/10'
              } group-hover:text-gold/40`}
            >
              ﴾
            </span>
            <span
              className={`absolute -left-5 top-1/2 -translate-y-1/2 font-amiri text-2xl transition-all duration-500 ${
                scrolled ? 'text-gold/20' : 'text-gold/10'
              } group-hover:text-gold/40`}
            >
              ﴿
            </span>

            <motion.h1
              className={`font-amiri font-bold transition-all duration-500 leading-none ${
                scrolled ? 'text-[1.55rem] text-gold' : 'text-[1.85rem] text-deep-brown'
              }`}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              عالم القهوة
            </motion.h1>
            <span
              className={`font-cairo text-[9px] tracking-[0.35em] uppercase transition-all duration-500 block mt-0.5 ${
                scrolled ? 'text-warm-beige/40' : 'text-coffee-medium/40'
              }`}
            >
              World of Coffee
            </span>
          </Link>

          {/* Left Nav (RTL: appears on the left) */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {leftNav.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}

            {/* Separator */}
            <div
              className={`w-[1px] h-5 mx-1 transition-colors duration-500 ${
                scrolled ? 'bg-warm-beige/10' : 'bg-deep-brown/10'
              }`}
            />

            {/* Search */}
            <button
              className={`p-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? 'text-warm-beige/60 hover:text-gold hover:bg-gold/5'
                  : 'text-deep-brown/50 hover:text-gold hover:bg-gold/5'
              }`}
            >
              <SearchIcon className="w-[18px] h-[18px]" />
            </button>

            {/* Cart */}
            <motion.button
              className="relative group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBagIcon
                className={`w-[19px] h-[19px] transition-colors duration-300 ${
                  scrolled
                    ? 'text-warm-beige/80 group-hover:text-gold'
                    : 'text-deep-brown/70 group-hover:text-gold'
                }`}
              />
              <span className="absolute -top-2 -left-2 w-[18px] h-[18px] bg-gold text-white text-[8px] font-cairo font-bold rounded-full flex items-center justify-center shadow-gold-glow">
                3
              </span>
            </motion.button>
            
            {/* Auth */}
            <Link to="/auth">
              <motion.button
                className="relative group mr-2"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <UserIcon
                  className={`w-[19px] h-[19px] transition-colors duration-300 ${
                    scrolled
                      ? 'text-warm-beige/80 group-hover:text-gold'
                      : 'text-deep-brown/70 group-hover:text-gold'
                  }`}
                />
              </motion.button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <XIcon className="w-6 h-6 text-gold" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuIcon
                    className={`w-6 h-6 transition-colors ${
                      scrolled ? 'text-warm-beige' : 'text-deep-brown'
                    }`}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{
              background: 'linear-gradient(160deg, rgba(27,14,7,0.98) 0%, rgba(26,26,26,0.98) 100%)',
              backdropFilter: 'blur(30px)',
            }}
          >
            {/* Decorative elements in mobile menu */}
            <div className="absolute top-20 right-10 w-40 h-40 blob-shape bg-gold/[0.03] blur-2xl" />
            <div className="absolute bottom-20 left-10 w-32 h-32 blob-shape-2 bg-gold/[0.02] blur-xl" />

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-center"
            >
              <h2 className="font-amiri text-4xl text-gold mb-2">عالم القهوة</h2>
              <span className="font-cairo text-[9px] tracking-[0.3em] text-warm-beige/30 uppercase block mb-10">
                World of Coffee
              </span>
              <div className="gold-line w-24 mx-auto mb-10" />
              <nav className="flex flex-col gap-5">
                {[...rightNav, ...leftNav].map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.06 }}
                  >
                    <Link
                      to={item.path}
                      className={`font-cairo text-xl transition-colors relative inline-block ${
                        isActive(item.path)
                          ? 'text-gold font-semibold'
                          : 'text-warm-beige/80 hover:text-gold'
                      }`}
                    >
                      {item.label}
                      {isActive(item.path) && (
                        <motion.span
                          layoutId="mobile-indicator"
                          className="absolute -bottom-1 right-0 left-0 h-[1px] bg-gold"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="gold-line w-24 mx-auto mt-10 mb-6" />
              <div className="flex items-center justify-center gap-6">
                <button className="flex items-center gap-3 text-warm-beige/70 hover:text-gold transition-colors">
                  <SearchIcon className="w-5 h-5" />
                  <span className="font-cairo text-sm">بحث</span>
                </button>
                <div className="w-[1px] h-5 bg-warm-beige/10" />
                <button className="flex items-center gap-3 text-warm-beige/70 hover:text-gold transition-colors">
                  <ShoppingBagIcon className="w-5 h-5" />
                  <span className="font-cairo text-sm">السلة (3)</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
