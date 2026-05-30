import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  getOgImageUrl,
  plainTextFromReactNode,
  SITE_NAME,
} from '../../utils/seo'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react'
import { scrollToSectionState } from '../../navigation/homeScroll'
import { moduleFadeUp, moduleStagger } from '../../animations/moduleVariants'
import type { ModuleFaqItem, ModulePageConfig } from '../../types/module'

// ─── Internal helpers ─────────────────────────────────────────────────────────

function SectionLabel({
  children,
  theme,
}: {
  children: string
  theme: ModulePageConfig['theme']
}) {
  return (
    <span
      className="text-xs font-bold uppercase tracking-widest"
      style={{ color: theme.rgba + '0.85)' }}
    >
      {children}
    </span>
  )
}

function FaqItem({
  item,
  index,
}: {
  item: ModuleFaqItem
  index: number
}) {
  const [open, setOpen] = useState(false)
  const buttonId = `faq-button-${index}`
  const panelId = `faq-panel-${index}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 5) * 0.05 }}
      className="border border-white/[0.08] rounded-2xl overflow-hidden bg-ocean-800/25"
    >
      <button
        id={buttonId}
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-right hover:bg-white/[0.025] transition-colors duration-200"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="text-white/90 font-bold text-sm leading-snug flex-1">{item.q}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-slate-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <div
              className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/[0.06]"
              style={{ paddingTop: '1rem' }}
            >
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Template ─────────────────────────────────────────────────────────────────

export default function ModulePageTemplate(config: ModulePageConfig) {
  const { theme, layout } = config
  const isClassic = layout === 'classic'
  const fadeUp = moduleFadeUp
  const stagger = moduleStagger

  const backHover =
    theme.linkHoverClass ?? (isClassic ? 'hover:text-brand-teal' : 'hover:text-brand-teal')
  const secondaryHover =
    theme.linkHoverClass ??
    (isClassic
      ? 'hover:border-brand-teal/50 hover:text-brand-teal hover:bg-brand-teal/5'
      : 'hover:border-brand-teal/50 hover:text-brand-teal')

  const [walkthroughIdx, setWalkthroughIdx] = useState(0)
  const walkthroughTab = config.walkthrough.tabs[walkthroughIdx]

  const pageClass = isClassic
    ? 'bg-ocean-900 font-cairo'
    : 'min-h-screen bg-ocean-950 text-white overflow-x-hidden'

  const pageTitle =
    plainTextFromReactNode(config.hero.title).trim() || config.hero.badgeLabel
  const pageDescription = config.hero.description
  const documentTitle = `${pageTitle} | ${SITE_NAME}`
  const ogImage = getOgImageUrl()

  return (
    <div className={pageClass} dir="rtl">
      <Helmet>
        <title>{documentTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={documentTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={documentTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      {/* Back strip */}
      <div
        className={
          isClassic
            ? 'mx-auto max-w-6xl px-4 sm:px-8 pt-8 pb-0'
            : 'mx-auto max-w-6xl px-4 sm:px-8 pb-2 pt-4'
        }
      >
        <Link
          to="/"
          state={config.back.linkToFeatures ? scrollToSectionState('features') : undefined}
          className={`inline-flex items-center gap-2 text-sm transition-colors duration-200 ${
            isClassic ? 'text-slate-500' : 'text-ocean-400'
          } ${backHover}`}
        >
          <ArrowLeft size={isClassic ? 14 : 15} />
          {config.back.label}
        </Link>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div
          className={`pointer-events-none absolute rounded-full blur-3xl ${
            isClassic
              ? '-top-20 right-1/3 w-[560px] h-[560px] opacity-20'
              : '-top-24 right-1/4 w-[640px] h-[640px] opacity-[0.11]'
          }`}
          style={{
            background: `radial-gradient(circle, ${theme.hex} 0%, transparent 70%)`,
          }}
        />
        <div
          className={`pointer-events-none absolute rounded-full blur-3xl ${
            isClassic ? 'top-32 left-0 w-64 h-64 opacity-10' : 'top-56 left-0 w-80 h-80 opacity-[0.07]'
          }`}
          style={{
            background: `radial-gradient(circle, ${theme.heroBlobSecondary ?? theme.hex} 0%, transparent 70%)`,
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeUp(0)} className="flex">
                <span
                  className={`inline-flex items-center gap-2 rounded-full font-bold border ${
                    isClassic
                      ? 'px-3 py-1.5 text-xs'
                      : 'px-4 py-1.5 text-sm font-semibold'
                  }`}
                  style={{
                    borderColor: theme.rgba + '0.35)',
                    background: theme.dim,
                    color: isClassic ? theme.hex : theme.rgba + '1)',
                  }}
                >
                  <config.hero.badgeIcon size={isClassic ? 13 : 15} />
                  {config.hero.badgeLabel}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp(0.05)}
                className={
                  isClassic
                    ? 'text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.15] text-white'
                    : 'text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-white'
                }
                style={isClassic ? undefined : { lineHeight: '1.22' }}
              >
                {config.hero.title}
              </motion.h1>

              <motion.p
                variants={fadeUp(0.1)}
                className={
                  isClassic
                    ? 'text-slate-400 text-lg leading-relaxed max-w-lg'
                    : 'text-base sm:text-lg text-ocean-300 leading-relaxed max-w-xl'
                }
              >
                {config.hero.description}
              </motion.p>

              {config.hero.microStatsClassic && (
                <motion.div variants={fadeUp(0.14)} className="flex flex-wrap gap-4 text-sm">
                  {config.hero.microStatsClassic.map((s) => (
                    <div key={s.label} className="flex items-baseline gap-1.5">
                      <span
                        className="text-2xl font-black tabular-nums"
                        style={{ color: theme.hex }}
                      >
                        {s.value}
                        {s.suffix}
                      </span>
                      <span className="text-slate-500 text-xs leading-tight">{s.label}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              {config.hero.microStatsPills && (
                <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-4">
                  {config.hero.microStatsPills.map((s) => (
                    <span
                      key={s.label}
                      className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold border"
                      style={{
                        background: theme.dim,
                        borderColor: theme.rgba + '0.25)',
                        color: theme.rgba + '1)',
                      }}
                    >
                      <s.icon size={14} />
                      {s.label}
                    </span>
                  ))}
                </motion.div>
              )}

              <motion.div
                variants={fadeUp(isClassic ? 0.18 : 0.2)}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/"
                  state={scrollToSectionState('contact')}
                  className={
                    isClassic
                      ? 'group inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-ocean-950 font-bold text-sm hover:scale-[1.04] active:scale-100 transition-all duration-200'
                      : 'inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5'
                  }
                  style={
                    isClassic
                      ? {
                          background: `linear-gradient(135deg, ${theme.hex}, ${theme.dark})`,
                          boxShadow: '0 0 0 0 transparent',
                        }
                      : {
                          background: `linear-gradient(135deg, ${theme.hex}, ${theme.dark})`,
                          boxShadow: theme.glow,
                        }
                  }
                  onMouseEnter={
                    config.hero.primaryCtaHoverGlow
                      ? (e) => {
                          e.currentTarget.style.boxShadow = theme.glow
                        }
                      : undefined
                  }
                  onMouseLeave={
                    config.hero.primaryCtaHoverGlow
                      ? (e) => {
                          e.currentTarget.style.boxShadow = '0 0 0 0 transparent'
                        }
                      : undefined
                  }
                >
                  {config.hero.primaryCtaLabel}
                  {isClassic ? (
                    <ArrowLeft
                      size={14}
                      className="group-hover:-translate-x-1 transition-transform duration-200"
                    />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </Link>
                <Link
                  to="/"
                  state={
                    config.hero.secondaryCtaToFeatures
                      ? scrollToSectionState('features')
                      : undefined
                  }
                  className={
                    isClassic
                      ? `inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-slate-700 text-slate-300 font-bold text-sm transition-all duration-200 ${
                          config.hero.secondaryCtaClassName ??
                          'hover:border-brand-teal/50 hover:text-brand-teal hover:bg-brand-teal/5'
                        }`
                      : `inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-ocean-300 border border-ocean-700 transition-all duration-200 ${secondaryHover}`
                  }
                >
                  {config.hero.secondaryCtaLabel}
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={
                config.hero.imageAnimation === 'modern'
                  ? { opacity: 0, x: 40 }
                  : { opacity: 0, scale: 0.96, y: 20 }
              }
              animate={
                config.hero.imageAnimation === 'modern'
                  ? { opacity: 1, x: 0 }
                  : { opacity: 1, scale: 1, y: 0 }
              }
              transition={{
                duration: config.hero.imageAnimation === 'modern' ? 0.8 : 0.75,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={isClassic ? 'relative flex items-center justify-center' : undefined}
            >
              <div
                className={`relative w-full overflow-hidden border border-white/[0.07] ${
                  isClassic ? 'rounded-3xl' : 'rounded-2xl shadow-2xl'
                }`}
                style={{
                  background: 'rgba(7,21,42,0.6)',
                  boxShadow: `0 0 0 1px ${theme.rgba}0.12), 0 32px 80px rgba(0,0,0,0.55)`,
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background: `linear-gradient(to right, transparent, ${theme.hex}, transparent)`,
                  }}
                />
                <img
                  src={config.hero.image.src}
                  alt={config.hero.image.alt}
                  className="w-full h-auto object-cover"
                  loading={config.hero.image.loading ?? 'lazy'}
                  width={config.hero.image.width}
                  height={config.hero.image.height}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain strip */}
      <section className="py-12 border-y border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {config.pain.stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp(i * 0.07)}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-ocean-800/30 border border-white/[0.05]"
              >
                <s.icon size={22} className="text-rose-400 opacity-80" />
                <p className="text-2xl font-black text-white tabular-nums">{s.value}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
          {config.pain.footnote && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center text-slate-600 text-xs mt-6"
            >
              {config.pain.footnote}
            </motion.p>
          )}
        </div>
      </section>

      {/* Value proposition */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3 mb-14 text-center"
          >
            <motion.div variants={fadeUp(0)}>
              <SectionLabel theme={theme}>{config.value.sectionLabel}</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp(0.04)}
              className="text-3xl sm:text-4xl font-black text-white leading-tight"
            >
              {config.value.title}
            </motion.h2>
            <motion.p
              variants={fadeUp(0.08)}
              className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed"
            >
              {config.value.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {config.value.cards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp(i * 0.05)}
                whileHover={{
                  y: -5,
                  boxShadow: `0 0 0 1px ${theme.rgba}0.22), 0 16px 48px ${theme.rgba}0.07)`,
                }}
                transition={{ duration: 0.2 }}
                className="relative flex flex-col gap-4 p-6 rounded-2xl bg-ocean-800/40 backdrop-blur-sm border border-white/[0.07] overflow-hidden group"
              >
                <div
                  className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to right, transparent, ${theme.hex}, transparent)`,
                  }}
                />
                <div
                  className={`w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] ${
                    card.color || ''
                  }`}
                  style={
                    !card.color && !isClassic
                      ? { color: theme.hex }
                      : undefined
                  }
                >
                  <card.icon size={18} strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-white font-bold text-sm leading-snug">{card.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Walkthrough */}
      <section className="py-20 bg-ocean-950/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col gap-3 mb-14 text-center"
          >
            <motion.div variants={fadeUp(0)}>
              <SectionLabel theme={theme}>{config.walkthrough.sectionLabel}</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp(0.04)}
              className="text-3xl sm:text-4xl font-black text-white leading-tight"
            >
              {config.walkthrough.title}
            </motion.h2>
            <motion.p variants={fadeUp(0.08)} className="text-slate-400 text-base max-w-xl mx-auto">
              {config.walkthrough.subtitle}
            </motion.p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {config.walkthrough.tabs.map((t, i) => {
              const active = i === walkthroughIdx
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setWalkthroughIdx(i)}
                  className={`
                    inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold
                    border transition-all duration-200
                    ${
                      active
                        ? 'text-ocean-950 border-transparent'
                        : 'border-white/[0.09] text-slate-400 hover:text-white hover:border-white/20 bg-ocean-800/30'
                    }
                  `}
                  style={
                    active
                      ? { background: `linear-gradient(135deg, ${theme.hex}, ${theme.dark})` }
                      : {}
                  }
                >
                  <t.icon size={14} />
                  {t.label}
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={walkthroughTab.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
            >
              <div className="lg:col-span-2 flex flex-col gap-4">
                {walkthroughTab.steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                    className="flex gap-4 p-5 rounded-2xl bg-ocean-800/40 border border-white/[0.07]"
                  >
                    <div
                      className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-ocean-950"
                      style={{
                        background: `linear-gradient(135deg, ${theme.hex}, ${theme.dark})`,
                      }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-white/90 font-bold text-sm">{step.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="lg:col-span-3">
                <div
                  className="relative rounded-2xl overflow-hidden border border-white/[0.07]"
                  style={{
                    background: 'rgba(7,21,42,0.55)',
                    boxShadow: `0 0 0 1px ${theme.rgba}0.1), 0 24px 60px rgba(0,0,0,0.5)`,
                  }}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background: `linear-gradient(to right, transparent, ${theme.hex}, transparent)`,
                    }}
                  />
                  <img
                    src={walkthroughTab.imgSrc}
                    alt={walkthroughTab.imgAlt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    width={walkthroughTab.imgW}
                    height={walkthroughTab.imgH}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col gap-3 mb-14 text-center"
          >
            <motion.div variants={fadeUp(0)}>
              <SectionLabel theme={theme}>أسئلة شائعة</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp(0.04)}
              className="text-3xl sm:text-4xl font-black text-white leading-tight"
            >
              {config.faq.title}
            </motion.h2>
            <motion.p
              variants={fadeUp(0.08)}
              className="text-slate-400 text-base max-w-xl mx-auto"
            >
              {config.faq.subtitle}
            </motion.p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {config.faq.items.map((item, i) => (
              <FaqItem key={item.q} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Related modules */}
      <section
        className={
          isClassic
            ? 'py-20 bg-ocean-950/60'
            : 'py-20 border-t border-ocean-800/60'
        }
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flex flex-col gap-3 text-center ${isClassic ? 'mb-14' : 'mb-12'}`}
          >
            <motion.div
              variants={fadeUp(0)}
              className={isClassic ? undefined : 'flex justify-center mb-3'}
            >
              <SectionLabel theme={theme}>وحدات مرتبطة</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp(isClassic ? 0.04 : 0.05)}
              className={`font-black text-white ${isClassic ? 'text-3xl sm:text-4xl' : 'text-3xl'}`}
            >
              {config.related.title}
            </motion.h2>
            {config.related.subtitle && (
              <motion.p
                variants={fadeUp(0.08)}
                className="text-slate-400 text-base max-w-xl mx-auto"
              >
                {config.related.subtitle}
              </motion.p>
            )}
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${
              isClassic ? 'gap-4' : 'gap-5'
            }`}
          >
            {config.related.layout === 'classic'
              ? config.related.items.map((mod, i) => (
                  <motion.div key={mod.id} variants={fadeUp(i * 0.06)}>
                    <Link
                      to={`/features/${mod.id}`}
                      className="group flex items-start gap-4 p-5 rounded-2xl bg-ocean-800/35 border border-white/[0.07] hover:border-white/[0.16] hover:bg-ocean-800/55 transition-all duration-200"
                    >
                      <div
                        className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${mod.bg} ${mod.color}`}
                      >
                        <mod.icon size={18} strokeWidth={2} />
                      </div>
                      <div className="flex flex-col gap-1 flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-white/90 font-bold text-sm">{mod.title}</span>
                          <ChevronRight
                            size={13}
                            className="text-slate-600 group-hover:text-brand-teal group-hover:translate-x-[-2px] transition-all duration-200 shrink-0"
                          />
                        </div>
                        <p className="text-slate-500 text-xs leading-snug">{mod.desc}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))
              : config.related.items.map((r) => (
                  <motion.div key={r.to} variants={fadeUp()}>
                    <Link
                      to={r.to}
                      className={`group relative flex flex-col gap-3 rounded-2xl border border-ocean-700/50 bg-ocean-900/60 p-6 overflow-hidden transition-all duration-300 ${theme.relatedHoverBorderClass ?? ''} hover:-translate-y-1 hover:shadow-lg block`}
                      style={{ textDecoration: 'none' }}
                    >
                      <div
                        className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${theme.hex}, transparent)`,
                        }}
                      />
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{ background: theme.dim, color: theme.hex }}
                      >
                        <r.icon size={20} strokeWidth={2} />
                      </div>
                      <div>
                        <p className="font-bold text-white mb-1 flex items-center gap-2">
                          {r.title}
                          <ChevronRight
                            size={14}
                            className={`text-ocean-500 transition-colors ${theme.relatedHoverTextClass ?? ''}`}
                          />
                        </p>
                        <p className="text-sm text-ocean-400 leading-relaxed">{r.body}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      {config.cta.layout === 'classic' ? (
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-ocean-800/40 backdrop-blur-sm px-8 py-14 flex flex-col items-center text-center gap-6"
              style={{
                boxShadow: `inset 0 0 80px ${theme.rgba}0.04), 0 32px 80px rgba(0,0,0,0.45)`,
              }}
            >
              <div
                className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${theme.rgba}0.15) 0%, transparent 70%)`,
                }}
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl"
                style={{
                  background: `radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)`,
                }}
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{
                  background: `linear-gradient(to right, transparent, ${theme.hex}, transparent)`,
                }}
              />

              <div className="relative z-10 flex flex-col items-center gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-ocean-950"
                  style={{
                    background: `linear-gradient(135deg, ${theme.hex}, ${theme.dark})`,
                  }}
                >
                  <config.cta.icon size={26} strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                    {config.cta.title}
                  </h2>
                  <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
                    {config.cta.description}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <Link
                    to="/"
                    state={scrollToSectionState('contact')}
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-ocean-950 font-extrabold text-sm hover:scale-[1.04] active:scale-100 transition-all duration-200"
                    style={{
                      background: `linear-gradient(135deg, ${theme.hex}, ${theme.dark})`,
                      boxShadow: theme.glow,
                    }}
                  >
                    {config.cta.primaryLabel}
                    <ArrowLeft size={14} />
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-slate-700 text-slate-300 font-bold text-sm hover:border-brand-teal/50 hover:text-brand-teal hover:bg-brand-teal/5 transition-all duration-200"
                  >
                    {config.cta.secondaryLabel}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="py-24 border-t border-ocean-800/60">
          <div className="mx-auto max-w-3xl px-4 sm:px-8 text-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative flex flex-col items-center gap-6"
            >
              <div
                className="pointer-events-none absolute w-[500px] h-[250px] rounded-full blur-3xl opacity-[0.13] -z-10"
                style={{
                  background: `radial-gradient(ellipse, ${theme.hex} 0%, transparent 70%)`,
                }}
              />

              {config.cta.eyebrow && (
                <motion.div variants={fadeUp()}>
                  <SectionLabel theme={theme}>{config.cta.eyebrow}</SectionLabel>
                </motion.div>
              )}

              <motion.h2
                variants={fadeUp(0.05)}
                className="text-3xl sm:text-4xl font-black text-white leading-tight"
              >
                {config.cta.title}
              </motion.h2>

              <motion.p
                variants={fadeUp(0.1)}
                className="text-ocean-300 text-base max-w-xl leading-relaxed"
              >
                {config.cta.description}
              </motion.p>

              <motion.div
                variants={fadeUp(0.15)}
                className="flex flex-wrap justify-center gap-4 pt-2"
              >
                <Link
                  to="/"
                  state={scrollToSectionState('contact')}
                  className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${theme.hex}, ${theme.dark})`,
                    boxShadow: theme.glow,
                  }}
                >
                  {config.cta.primaryLabel}
                  <ChevronRight size={18} />
                </Link>
                <Link
                  to="/"
                  state={
                    config.cta.secondaryToFeatures
                      ? scrollToSectionState('features')
                      : undefined
                  }
                  className={`inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-ocean-300 border border-ocean-700 transition-all duration-200 ${secondaryHover}`}
                >
                  {config.cta.secondaryLabel}
                </Link>
              </motion.div>

              {config.cta.trustBadges && (
                <motion.div
                  variants={fadeUp(0.2)}
                  className="flex flex-wrap justify-center gap-6 pt-4"
                >
                  {config.cta.trustBadges.map((t) => (
                    <span
                      key={t.text}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: theme.rgba + '0.8)' }}
                    >
                      <t.icon size={15} />
                      {t.text}
                    </span>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      )}
    </div>
  )
}
