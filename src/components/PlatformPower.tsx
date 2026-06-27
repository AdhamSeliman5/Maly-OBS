import { motion } from 'framer-motion'
import { MonitorSmartphone, RefreshCw, LockKeyhole } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ─── Animation Variants ───────────────────────────────────────────────────────

const sectionContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
}

const fadeUpVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

// ─── Pillar Data ──────────────────────────────────────────────────────────────

interface Pillar {
  icon:        LucideIcon
  subtitle:    string           // English tech label (monospace badge)
  title:       string           // Arabic card heading
  body:        string           // Arabic description
  cardGrad:    string           // Tailwind gradient classes for card bg
  border:      string           // Tailwind border-color class
  iconColor:   string           // Tailwind text-color for icon
  iconBg:      string           // Tailwind bg for icon container
  glowColor:   string           // CSS rgba for hover glow
}

const PILLARS: Pillar[] = [
  {
    icon:      MonitorSmartphone,
    subtitle:  'Multi-Device & PWA',
    title:     'يعمل على كل الأجهزة',
    body:      'شغّل النظام على الكمبيوتر، اللابتوب، أو الموبايل. يمكنك تثبيته كتطبيق (PWA) للوصول السريع.',
    cardGrad:  'from-brand-teal/[0.12] via-brand-teal/[0.04] to-transparent',
    border:    'border-brand-teal/20',
    iconColor: 'text-brand-teal',
    iconBg:    'bg-brand-teal/10',
    glowColor: 'rgba(20,184,166,0.14)',
  },
  {
    icon:      RefreshCw,
    subtitle:  'Real-Time Sync',
    title:     'مزامنة لحظية',
    body:      'كل ضغطة زر تُحدّث النظام في نفس اللحظة عند باقي فريق العمل، أينما كانوا.',
    cardGrad:  'from-sky-500/[0.12] via-sky-500/[0.04] to-transparent',
    border:    'border-sky-500/20',
    iconColor: 'text-sky-400',
    iconBg:    'bg-sky-500/10',
    glowColor: 'rgba(14,165,233,0.14)',
  },
  {
    icon:      LockKeyhole,
    subtitle:  'Granular RBAC',
    title:     'صلاحيات دقيقة للعمل عن بُعد',
    body:      'حدد ما يراه كل موظف. الموديريتور يمكنها إدخال الطلبات من هاتفها في المنزل، دون أي إمكانية للاطلاع على تقارير الأرباح.',
    cardGrad:  'from-brand-green/[0.12] via-brand-green/[0.04] to-transparent',
    border:    'border-brand-green/20',
    iconColor: 'text-brand-green',
    iconBg:    'bg-brand-green/10',
    glowColor: 'rgba(34,197,94,0.14)',
  },
]

// ─── PlatformPower ────────────────────────────────────────────────────────────

export default function PlatformPower() {
  return (
    <section
      id="platform-power"
      className="relative py-28 overflow-hidden"
    >
      {/* ── Background ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950 via-ocean-900 to-ocean-950" />
      <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-[0.35]" />

      {/* Ambient glow — center */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(20,184,166,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Top & bottom hairline separators */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-teal/25 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-teal/15 to-transparent" />

      {/* ── Content ─────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center gap-16"
        >

          {/* ── Section heading ────────────────────────────────────────────── */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col items-center gap-4 text-center max-w-2xl"
          >
            {/* Eyebrow badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse shrink-0" />
              قوة التشغيل
            </span>

            {/* Headline — Arabic with gradient accent on last phrase */}
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-snug">
              إدارة متجرك من أي مكان..{' '}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-teal to-brand-green">
                وبأمان تام
              </span>
            </h2>

            <p className="text-slate-400 text-base leading-relaxed">
              تقنية مُصمَّمة للعمل الموزع — سواء كنت في المتجر، المنزل، أو في الطريق.
            </p>
          </motion.div>

          {/* ── Cards grid ─────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.subtitle}
                  variants={cardVariants}
                  className="relative group"
                >
                  {/* Hover glow halo — positioned behind the card */}
                  <div
                    className="
                      absolute -inset-px rounded-2xl
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                      pointer-events-none
                    "
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${pillar.glowColor}, transparent 65%)`,
                    }}
                  />

                  {/* Glass card */}
                  <div
                    className={`
                      relative flex flex-col gap-6 p-7 h-full
                      rounded-2xl border ${pillar.border}
                      bg-gradient-to-br ${pillar.cardGrad}
                      backdrop-blur-md
                      bg-ocean-800/40
                      transition-all duration-300
                      hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]
                    `}
                  >
                    {/* Icon badge */}
                    <div
                      className={`
                        w-12 h-12 rounded-2xl flex items-center justify-center shrink-0
                        border border-white/10 ${pillar.iconBg} ${pillar.iconColor}
                        group-hover:scale-110 transition-transform duration-300
                      `}
                    >
                      <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col gap-2 flex-1">
                      {/* Monospace tech label */}
                      <span className="text-[10px] font-mono font-semibold text-slate-500 tracking-widest uppercase">
                        {pillar.subtitle}
                      </span>

                      {/* Arabic card title */}
                      <h3 className="text-lg font-black text-white leading-snug">
                        {pillar.title}
                      </h3>

                      {/* Arabic description */}
                      <p className="text-sm text-slate-400 leading-[1.85]">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
