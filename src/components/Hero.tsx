import { motion } from 'framer-motion'
import { WHATSAPP_CTA_URL } from '../constants'

// ─── Animation variants ───────────────────────────────────────────────────────

/**
 * Container variant: staggers its direct children one by one,
 * starting after a short delay to let the navbar entrance finish.
 */
const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren:   0.38,
    },
  },
}

/**
 * Each text item slides up from 28 px below while fading in.
 * Using a custom cubic-bezier for a "landing" ease feel.
 */
const textItemVariants = {
  hidden:   { opacity: 0, y: 28 },
  visible:  {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

// ─── Static dashboard data (decorative / no real API) ────────────────────────

const KPI_CARDS = [
  {
    label:    'الطلبات اليوم',
    value:    '١٢٤',
    gradient: 'from-brand-teal/20 to-brand-teal/5',
    border:   'border-brand-teal/25',
  },
  {
    label:    'الإيرادات (ج.م)',
    value:    '٤٨,٢٠٠',
    gradient: 'from-brand-green/20 to-brand-green/5',
    border:   'border-brand-green/25',
  },
  {
    label:    'قيد التحضير',
    value:    '٢٣',
    gradient: 'from-ocean-500/30 to-ocean-700/10',
    border:   'border-ocean-500/30',
  },
] as const

const CHART_BARS = [38, 62, 44, 78, 55, 91, 70] as const

const ORDER_ROWS = [
  { id: '#٤٥٢١', status: 'قيد التحضير', dot: 'bg-yellow-400' },
  { id: '#٤٥٢٠', status: 'تم الشحن',    dot: 'bg-brand-green'  },
  { id: '#٤٥١٩', status: 'تم التسليم',  dot: 'bg-blue-400'     },
] as const

const TRUST_STATS = [
  { value: '١٦+', label: 'وحدة متكاملة'             },
  { value: 'EGP', label: 'متوافق مع الجنيه المصري'  },
  { value: 'RTL', label: 'واجهة عربية كاملة'         },
] as const

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* ── 1. Base gradient background ───────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-800" />

      {/* ── 2. Dot-grid texture ────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />

      {/* ── 3. Ambient glow orb — teal (sits behind the mockup, left side) ── */}
      <motion.div
        className="absolute top-1/3 left-8 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(20,184,166,0.13) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── 4. Ambient glow orb — green (right/center, behind headline) ───── */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(34,197,94,0.09) 0%, transparent 70%)',
        }}
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* ── 5. Main content grid ──────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">

          {/* ════════════════════════════════════════════════════════════════
               TEXT COLUMN
               In RTL grid: this is column-1 → appears on the RIGHT side.
          ════════════════════════════════════════════════════════════════ */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6 lg:py-32"
          >
            {/* Badge */}
            <motion.div variants={textItemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse shrink-0" />
                نظام ERP وPOS مُصمَّم للمتاجر المصرية
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={textItemVariants}
              className="text-[2.6rem] sm:text-5xl lg:text-[3.4rem] font-black text-white leading-[1.2] tracking-tight"
            >
              أحكم{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-teal to-brand-green">
                السيطرة الكاملة
              </span>
              <br />
              على متجرك من{' '}
              <span className="relative inline-block">
                مكان واحد
                {/* Decorative underline below the last two words */}
                <span className="absolute -bottom-1 right-0 left-0 h-0.5 bg-gradient-to-l from-brand-teal to-brand-green rounded-full opacity-55" />
              </span>
            </motion.h1>

            {/* Body copy */}
            <motion.p
              variants={textItemVariants}
              className="text-slate-400 text-lg leading-relaxed max-w-xl"
            >
              إدارة الطلبات، المخزون، الموظفين، والتقارير المالية — كل شيء في نظام واحد
              سريع وذكي، يرفع كفاءة فريقك من أول يوم.
            </motion.p>

            {/* Slogan — Brand statement / ultimate hook */}
            <motion.div
              variants={textItemVariants}
              className="flex flex-col gap-1 py-1"
            >
              {/* Hairline accent bar */}
              <span className="block w-10 h-0.5 rounded-full bg-gradient-to-l from-brand-teal to-brand-green mb-1" />

              <span className="text-slate-400 text-sm font-semibold tracking-widest uppercase">
                It&apos;s not just about money,
              </span>

              {/* "It's CONTROL" — display-scale gradient headline */}
              <span
                className="
                  text-transparent bg-clip-text
                  bg-gradient-to-l from-brand-teal via-brand-teal-light to-brand-green
                  font-black tracking-tighter leading-none
                  text-[2.6rem] sm:text-[3.2rem]
                "
              >
                It&apos;s CONTROL.
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={textItemVariants}
              className="flex flex-wrap items-center gap-4 mt-1"
            >
              {/* Primary — WhatsApp onboarding CTA */}
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative inline-flex items-center gap-2
                  px-7 py-3.5 rounded-full overflow-hidden
                  bg-gradient-to-l from-brand-teal to-brand-teal-dark
                  text-ocean-950 font-extrabold text-base
                  hover:shadow-[0_0_32px_rgba(20,184,166,0.52)]
                  hover:scale-[1.05] active:scale-100
                  transition-all duration-300
                "
              >
                {/* Green shimmer on hover */}
                <span className="absolute inset-0 bg-gradient-to-l from-brand-green to-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">تواصل معنا لبدء نسختك</span>
                {/*
                 * Left-pointing chevron: means "forward" in RTL reading direction.
                 * Slides slightly left on hover to reinforce the action feel.
                 */}
                <svg
                  className="relative z-10 w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </a>

              {/* Secondary */}
              <a
                href="#features"
                className="
                  inline-flex items-center gap-2
                  px-7 py-3.5 rounded-full
                  border border-brand-teal/30 text-brand-teal font-bold text-base
                  hover:bg-brand-teal/10 hover:border-brand-teal/60
                  transition-all duration-200
                "
              >
                استكشف المميزات
              </a>
            </motion.div>

            {/* Trust micro-stats */}
            <motion.div
              variants={textItemVariants}
              className="flex flex-wrap items-stretch gap-6 pt-6 border-t border-white/10 w-full mt-2"
            >
              {TRUST_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-black text-brand-teal leading-none">{stat.value}</span>
                  <span className="text-xs text-slate-400 leading-tight">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════════════════════════════════════
               VISUAL COLUMN
               In RTL grid: this is column-2 → appears on the LEFT side.
          ════════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            transition={{ duration: 1, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end lg:py-32"
          >
            {/* Soft glow halo behind the whole mockup card */}
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-brand-teal/15 to-brand-green/5 rounded-3xl blur-3xl pointer-events-none" />

              {/* ─────────────────────────────────────────────────────────
                   CONTINUOUS FLOAT WRAPPER
                   Separated from the entrance animation intentionally —
                   animating transform on a child avoids layout-shift jank.
                   y keyframes: 0 → -14px → 0  (smooth sine-like wave)
              ───────────────────────────────────────────────────────── */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative"
              >

                {/* ── Dashboard mockup frame ─────────────────────────── */}
                <div className="
                  relative w-[320px] sm:w-[400px] lg:w-[460px]
                  bg-ocean-800/70 backdrop-blur-sm
                  rounded-2xl border border-white/10
                  shadow-[0_30px_80px_rgba(0,0,0,0.65)]
                  overflow-hidden
                ">

                  {/* Window chrome bar */}
                  <div className="flex items-center gap-3 px-4 py-3 bg-ocean-700/60 border-b border-white/5">
                    {/* macOS-style traffic lights */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"    />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"  />
                    </div>
                    {/* Fake URL bar */}
                    <div className="flex-1 flex items-center justify-center gap-2 mx-2 px-3 py-1 rounded-md bg-ocean-900/60 border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse shrink-0" />
                      <span className="text-[11px] text-slate-400 font-mono tracking-wide truncate">
                        obs.maly.com/dashboard
                      </span>
                    </div>
                    {/* User avatar dot */}
                    <div className="
                      w-6 h-6 rounded-full shrink-0
                      bg-gradient-to-br from-brand-teal to-brand-green
                      flex items-center justify-center
                      text-ocean-950 text-[9px] font-black
                    ">
                      م
                    </div>
                  </div>

                  {/* Dashboard content area */}
                  <div className="p-4 space-y-3 bg-gradient-to-b from-ocean-800/40 to-ocean-900/80">

                    {/* Page header row */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">لوحة التحكم</span>
                      <span className="text-[10px] text-slate-500">٩ أبريل ٢٠٢٦</span>
                    </div>

                    {/* KPI cards row */}
                    <div className="grid grid-cols-3 gap-2">
                      {KPI_CARDS.map((kpi) => (
                        <div
                          key={kpi.label}
                          className={`bg-gradient-to-br ${kpi.gradient} border ${kpi.border} rounded-xl p-3`}
                        >
                          <p className="text-slate-400 text-[9px] leading-tight mb-1.5">{kpi.label}</p>
                          <p className="text-white font-black text-sm leading-none">{kpi.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Revenue bar chart */}
                    <div className="bg-ocean-900/60 rounded-xl border border-white/5 p-3 space-y-2">
                      <p className="text-slate-500 text-[10px] font-semibold">المبيعات — آخر ٧ أيام</p>
                      <div className="flex items-end gap-1 h-16">
                        {CHART_BARS.map((pct, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 rounded-sm bg-gradient-to-t from-brand-teal to-brand-teal-light/60"
                            initial={{ height: 0 }}
                            animate={{ height: `${pct}%` }}
                            transition={{ duration: 0.55, delay: 0.8 + i * 0.07, ease: 'easeOut' }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Recent orders mini-table */}
                    <div className="bg-ocean-900/60 rounded-xl border border-white/5 p-3 space-y-2">
                      <p className="text-slate-500 text-[10px] font-semibold">آخر الطلبات</p>
                      {ORDER_ROWS.map((row) => (
                        <div key={row.id} className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            <div className={`w-1.5 h-1.5 rounded-full ${row.dot} shrink-0`} />
                            <span className="text-slate-400 text-[10px]">طلب {row.id}</span>
                          </div>
                          <span className="text-slate-500 text-[9px]">{row.status}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
                {/* end mockup frame */}

                {/* ── Floating badge: Orders counter ─────────────────────
                     Slightly faster float cycle, starts 0.4s offset from
                     the parent — they never sync, creating organic motion.
                ─────────────────────────────────────────────────────── */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.4,
                  }}
                  className="
                    absolute -bottom-5 -right-5
                    bg-ocean-700/90 backdrop-blur-md
                    border border-brand-teal/30
                    rounded-2xl px-4 py-3
                    shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                  "
                >
                  <p className="text-[10px] text-slate-400 mb-0.5">طلبات اليوم</p>
                  <p className="text-white font-black text-lg leading-none">
                    ١٢٤{' '}
                    <span className="text-brand-green text-xs font-bold">↑ ١٢٪</span>
                  </p>
                </motion.div>

                {/* ── Floating badge: System status ──────────────────────
                     Slowest cycle of the three — maximises phase difference.
                ─────────────────────────────────────────────────────── */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.2,
                  }}
                  className="
                    absolute -top-5 -left-5
                    bg-ocean-700/90 backdrop-blur-md
                    border border-brand-green/30
                    rounded-2xl px-4 py-3
                    shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                  "
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                    <p className="text-white text-xs font-bold">النظام يعمل</p>
                  </div>
                  <p className="text-slate-400 text-[10px]">١٦ وحدة نشطة</p>
                </motion.div>

              </motion.div>
              {/* end float wrapper */}

            </div>
          </motion.div>
          {/* end visual column */}

        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────────
           Fades in after 2 s — doesn't compete with the entrance animations.
      ─────────────────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[11px] text-slate-500 font-medium">اكتشف المزيد</span>
        {/* Mouse-scroll icon */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-slate-600/60 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-slate-500" />
        </motion.div>
      </motion.div>

    </section>
  )
}
