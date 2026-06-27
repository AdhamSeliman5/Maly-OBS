import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WHATSAPP_CTA_URL } from '../constants'

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'الرئيسية',   href: '#home'     },
  { label: 'المميزات',   href: '#features' },
  { label: 'الأسعار',    href: '#pricing'  },
  { label: 'تواصل معنا', href: '#contact'  },
] as const

// ─── HamburgerIcon ───────────────────────────────────────────────────────────
// Three animated bars that morph into an ✕ when the menu is open.

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-5 h-[14px] flex flex-col justify-between">
      {/* Top bar */}
      <motion.span
        className="block h-[2px] w-full bg-current rounded-full origin-center"
        animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.22, ease: 'easeInOut' }}
      />
      {/* Middle bar — fades out */}
      <motion.span
        className="block h-[2px] w-full bg-current rounded-full"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.15 }}
      />
      {/* Bottom bar */}
      <motion.span
        className="block h-[2px] w-full bg-current rounded-full origin-center"
        animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.22, ease: 'easeInOut' }}
      />
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  // Detect scroll to strengthen glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when viewport widens to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          // scrolled: stronger blur + deeper background + teal border glow
          ? 'bg-ocean-900/85 backdrop-blur-2xl border-b border-brand-teal/20 shadow-[0_8px_32px_rgba(4,13,26,0.65)]'
          // top of page: lighter glass
          : 'bg-ocean-900/30 backdrop-blur-md  border-b border-white/5',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo  (RTL: the "start" side = physically right) ──────── */}
          <a href="#home" className="shrink-0 flex items-center">
            <img
              src="./assets/logo_splash_light.png"
              alt="Maly OBS"
              className="h-9 w-auto object-contain"
            />
          </a>

          {/* ── Desktop nav links ──────────────────────────────────────── */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="القائمة الرئيسية"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                {/*
                 * Animated underline.
                 * origin-right + scale-x: 0→1 slides the line from the
                 * right (the reading START in Arabic/RTL) — natural feel.
                 */}
                <span
                  className="
                    absolute bottom-[6px] right-4 h-px
                    bg-gradient-to-l from-brand-teal to-brand-green
                    scale-x-0 origin-right
                    group-hover:scale-x-100
                    transition-transform duration-300 rounded-full
                  "
                  style={{ width: 'calc(100% - 2rem)' }}
                />
              </a>
            ))}
          </nav>

          {/* ── Desktop CTA ────────────────────────────────────────────── */}
          <a
            href={WHATSAPP_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden md:inline-flex items-center gap-2
              px-5 py-2 rounded-full
              bg-gradient-to-l from-brand-teal to-brand-teal-dark
              text-ocean-950 font-bold text-sm
              hover:shadow-[0_0_24px_rgba(20,184,166,0.45)]
              hover:scale-[1.04] active:scale-100
              transition-all duration-200
            "
          >
            ابدأ الآن
          </a>

          {/* ── Mobile hamburger ───────────────────────────────────────── */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="
              md:hidden p-2.5 rounded-xl
              text-slate-300 hover:text-brand-teal hover:bg-white/5
              transition-colors duration-150
            "
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            <HamburgerIcon open={menuOpen} />
          </button>

        </div>
      </div>

      {/* ── Mobile dropdown ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0,      opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{    height: 0,      opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-ocean-900/95 backdrop-blur-2xl border-t border-white/5"
          >
            <nav
              className="flex flex-col px-4 py-4 gap-1"
              aria-label="القائمة الجوالة"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0  }}
                  transition={{ delay: i * 0.06, duration: 0.2 }}
                  className="
                    flex items-center px-4 py-3
                    text-sm font-semibold text-slate-300
                    hover:text-white hover:bg-white/5
                    rounded-xl transition-colors duration-150
                  "
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06 + 0.05, duration: 0.2 }}
                className="
                  mt-3 px-5 py-3 text-center rounded-full
                  bg-gradient-to-l from-brand-teal to-brand-teal-dark
                  text-ocean-950 font-bold text-sm
                "
              >
                ابدأ الآن
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
