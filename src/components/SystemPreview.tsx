import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Slide data ────────────────────────────────────────────────────────────────

const SLIDES = [
  {
    key: 'dashboard',
    src: './assets/main-dashboard.png',
    label: 'لوحة القيادة',
    sublabel: 'KPIs ونظرة عامة على المتجر',
    url: 'app.maly-obs.com/dashboard',
  },
  {
    key: 'orders',
    src: './assets/main-orders.png',
    label: 'إدارة الطلبات',
    sublabel: 'إدخال وتتبع كل طلب',
    url: 'app.maly-obs.com/orders',
  },
  {
    key: 'preparation',
    src: './assets/main-preparation.png',
    label: 'قائمة التحضير',
    sublabel: 'شاشة تجهيز الطلبات',
    url: 'app.maly-obs.com/preparation',
  },
  {
    key: 'reports',
    src: './assets/main-reports.png',
    label: 'التقارير المالية',
    sublabel: 'تحليل الأرباح والخسائر',
    url: 'app.maly-obs.com/reports',
  },
  {
    key: 'mobile',
    src: './assets/main-mobile.png',
    label: 'التطبيق المحمول',
    sublabel: 'وصول المشرف من أي مكان',
    url: 'app.maly-obs.com/mobile',
  },
] as const

const INTERVAL_MS = 4500

// ─── Animation variants ────────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 70 : -70,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -70 : 70,
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.3, ease: 'easeIn' },
  }),
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function SystemPreview() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  const progressRef = useRef(0)
  const lastTickRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  const goTo = useCallback(
    (next: number, direction?: number) => {
      const d = direction ?? (next > index ? 1 : -1)
      setDir(d)
      setIndex(next)
      setProgress(0)
      progressRef.current = 0
      lastTickRef.current = Date.now()
    },
    [index],
  )

  // RAF-based progress ticker — smoother than setInterval for UI animations
  useEffect(() => {
    if (paused) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      return
    }

    lastTickRef.current = Date.now()

    const tick = () => {
      const elapsed = Date.now() - lastTickRef.current
      const p = Math.min(elapsed / INTERVAL_MS, 1)
      progressRef.current = p
      setProgress(p)

      if (p >= 1) {
        lastTickRef.current = Date.now()
        progressRef.current = 0
        setProgress(0)
        setDir(1)
        setIndex(prev => (prev + 1) % SLIDES.length)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [paused])

  // Reset timer on every manual navigation
  useEffect(() => {
    lastTickRef.current = Date.now()
    progressRef.current = 0
  }, [index])

  const current = SLIDES[index]

  return (
    <section
      id="system-preview"
      className="relative py-20 sm:py-28 bg-ocean-950 overflow-hidden"
    >
      {/* ── Dot-grid texture ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />

      {/* ── Ambient glow rising from below mockup ────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 80%, rgba(20,184,166,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section heading ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <p className="text-[11px] font-bold text-brand-teal/70 tracking-widest uppercase mb-3">
            النظام من الداخل
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-snug">
            شاهد كيف تبدو{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-teal via-brand-teal-light to-brand-green">
              السيطرة الكاملة
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
            واجهة بسيطة. بيانات عميقة. كل شيء في مكانه.
          </p>
        </motion.div>

        {/* ── Browser Mockup ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.82, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.12 }}
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {/* Outer ambient glow ring */}
          <div
            className="absolute -inset-px rounded-[20px] pointer-events-none"
            style={{
              boxShadow:
                '0 0 0 1px rgba(20,184,166,0.12), 0 0 60px rgba(20,184,166,0.10), 0 0 120px rgba(20,184,166,0.05)',
            }}
          />

          {/* Shell */}
          <div className="relative rounded-[18px] overflow-hidden border border-white/[0.09] bg-ocean-900/80 backdrop-blur-sm shadow-[0_32px_80px_rgba(0,0,0,0.6)]">

            {/* ── Chrome bar ── */}
            <div className="relative flex items-center gap-3 px-4 py-[11px] bg-ocean-800/70 border-b border-white/[0.07]">

              {/* macOS traffic-light dots */}
              <div className="flex items-center gap-[6px] shrink-0">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]/90 ring-1 ring-[#E0443E]/40" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]/90 ring-1 ring-[#D4A017]/40" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]/90 ring-1 ring-[#1E9E31]/40" />
              </div>

              {/* Fake URL bar (centered) */}
              <div className="flex-1 flex justify-center mx-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.key + '-url'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="inline-flex items-center gap-1.5 bg-ocean-950/60 border border-white/[0.06] rounded-lg px-3 py-1"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-400/60 shrink-0"
                      aria-hidden="true"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span className="text-slate-400/80 text-[11px] font-mono tracking-tight select-none">
                      {current.url}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Spacer to balance traffic lights */}
              <div className="w-[54px] shrink-0" />

              {/* Progress bar along bottom of chrome */}
              <motion.div
                className="absolute inset-x-0 bottom-0 h-[1.5px] origin-left bg-gradient-to-r from-brand-teal to-brand-green"
                style={{ scaleX: progress }}
              />
            </div>

            {/* ── Slide image content area ── */}
            <div
              className="relative overflow-hidden bg-ocean-950"
              style={{ aspectRatio: '16/9' }}
            >
              {/*
               * Fallback label — sits beneath the img in paint order (earlier in DOM).
               * Becomes visible only when the img asset is missing and onError
               * collapses the <motion.img> to opacity 0.
               */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-600 text-sm pointer-events-none">
                {current.label}
              </div>

              <AnimatePresence initial={false} custom={dir} mode="popLayout">
                <motion.img
                  key={current.key}
                  src={current.src}
                  alt={current.label}
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
                  className="absolute inset-0 w-full h-full object-cover object-top select-none"
                  draggable={false}
                />
              </AnimatePresence>

              {/* Subtle bottom-fade to blend into the dot grid below */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ocean-950 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* ── Navigation ────────────────────────────────────────────────────── */}
        <div className="mt-8 flex flex-col items-center gap-5">

          {/* Text tabs */}
          <div
            className="flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="شرائح النظام"
          >
            {SLIDES.map((slide, i) => (
              <button
                key={slide.key}
                role="tab"
                aria-selected={i === index}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                className={[
                  'relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/60',
                  i === index
                    ? 'text-brand-teal border border-brand-teal/25 bg-brand-teal/[0.08]'
                    : 'text-slate-500 border border-transparent hover:text-slate-300 hover:border-white/10 hover:bg-white/[0.03]',
                ].join(' ')}
              >
                {slide.label}

                {/* Animated border highlight on active tab */}
                {i === index && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-xl border border-brand-teal/40 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2" aria-hidden="true">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                aria-label={`الشريحة ${i + 1}`}
                className="p-3 -m-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/60"
              >
                <span
                  className={[
                    'block rounded-full transition-all duration-300',
                    i === index
                      ? 'w-6 h-[6px] bg-brand-teal'
                      : 'w-[6px] h-[6px] bg-slate-600 hover:bg-slate-400',
                  ].join(' ')}
                />
              </button>
            ))}
          </div>

          {/* Active slide sub-label */}
          <AnimatePresence mode="wait">
            <motion.p
              key={current.key + '-sublabel'}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28 }}
              className="text-slate-500 text-xs font-medium"
            >
              {current.sublabel}
            </motion.p>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
