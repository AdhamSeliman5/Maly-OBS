/**
 * ManufacturingPage.tsx — Dedicated marketing page for the Manufacturing
 * (التصنيع وإدارة الإنتاج) module.
 *
 * Sections:
 *   1. Hero
 *   2. Pain-Point Stat Strip
 *   3. Value Proposition (Why This Module?)
 *   4. Interactive Walkthrough (Tabs)
 *   5. Deep-Dive FAQ
 *   6. Recommended Modules
 *   7. CTA
 *
 * Accent: brand-orange  (#f97316 / rgba(249,115,22,))
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Factory,
  Layers,
  BarChart3,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Hammer,
  Package,
  FlaskConical,
  Zap,
  ShieldCheck,
  RefreshCw,
  Copy,
  TrendingUp,
  Lock,
  Boxes,
  ClipboardList,
  PackageOpen,
  BarChart2,
  ShoppingCart,
  Truck,
  Calculator,
  BookOpen,
} from 'lucide-react'

// ─── Accent colour tokens ─────────────────────────────────────────────────────

const ACCENT      = 'rgba(249,115,22,'   // orange-500
const ACCENT_HEX  = '#f97316'
const ACCENT_DIM  = 'rgba(249,115,22,0.12)'
const ACCENT_DARK = '#ea580c'
const ACCENT_GLOW = '0 0 28px rgba(249,115,22,0.42)'

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] },
  },
})

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

// ─── Section label ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: string }) {
  return (
    <span
      className="text-xs font-bold uppercase tracking-widest"
      style={{ color: ACCENT + '0.85)' }}
    >
      {children}
    </span>
  )
}

// ─── 1. HERO ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute -top-24 right-1/4 w-[620px] h-[620px] rounded-full blur-3xl opacity-[0.15]"
        style={{ background: `radial-gradient(circle, ${ACCENT_HEX} 0%, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute top-44 left-0 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: `radial-gradient(circle, rgba(234,88,12,1) 0%, transparent 70%)` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Copy ── */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-6">

            {/* Badge */}
            <motion.div variants={fadeUp(0)} className="flex">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold border"
                style={{ background: ACCENT_DIM, borderColor: ACCENT + '0.35)', color: ACCENT + '1)' }}
              >
                <Factory size={15} />
                وحدة التصنيع وإدارة الإنتاج
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.05)}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black leading-tight text-white"
              style={{ lineHeight: '1.22' }}
            >
              اعرف تكلفة كل وحدة{' '}
              <span style={{ color: ACCENT_HEX }}>قبل ما تبيعها.</span>
              <br />
              وسيّر الإنتاج بدون فقدان{' '}
              <span className="text-ocean-400">خامة واحدة.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeUp(0.1)}
              className="text-base sm:text-lg text-ocean-300 leading-relaxed max-w-xl"
            >
              ابنِ وصفة إنتاجك (BOM) مرة واحدة — والنظام يخصم الخامات تلقائياً عند كل دفعة،
              يحسب تكلفة الوحدة المنتجة، ويرصد كل حركة في المخزن بتفاصيل لحظية.
            </motion.p>

            {/* Micro-stats */}
            <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-4">
              {[
                { label: 'خصم تلقائي للخامات', icon: <Layers size={14} /> },
                { label: 'تكلفة WAC للمنتج المنتَج', icon: <Calculator size={14} /> },
                { label: 'قفل صفوف PostgreSQL', icon: <Lock size={14} /> },
              ].map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold border"
                  style={{ background: ACCENT_DIM, borderColor: ACCENT + '0.25)', color: ACCENT + '1)' }}
                >
                  {s.icon}
                  {s.label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp(0.2)} className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg, ${ACCENT_HEX}, ${ACCENT_DARK})`, boxShadow: ACCENT_GLOW }}
              >
                ابدأ الآن مجاناً
                <ChevronRight size={18} />
              </Link>
              <Link
                to="/#features"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-orange-500/40 hover:text-orange-400 transition-all duration-200"
              >
                اكتشف كل الوحدات
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Hero Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            <div
              className="relative rounded-2xl overflow-hidden border border-ocean-700/60 shadow-2xl"
              style={{ boxShadow: `0 32px 80px rgba(0,0,0,0.6), ${ACCENT_GLOW}` }}
            >
              {/* Top colour hairline */}
              <div
                className="absolute top-0 inset-x-0 h-0.5 z-10"
                style={{ background: `linear-gradient(90deg, transparent, ${ACCENT_HEX}, transparent)` }}
              />
              <img
                src="./assets/mfg-1-hero.png"
                alt="لوحة إدارة التصنيع"
                width={780}
                height={480}
                loading="eager"
                className="block w-full h-auto object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="absolute -bottom-5 -left-6 rounded-xl border border-ocean-700 bg-ocean-900/90 px-4 py-3 shadow-xl backdrop-blur-md flex items-center gap-3"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ background: ACCENT_DIM }}
              >
                <Hammer size={16} style={{ color: ACCENT_HEX }} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-ocean-400">آخر دفعة إنتاج</span>
                <span className="text-sm font-bold text-white">٥٠ وحدة ← ٢٥٠ خامة خُصمت</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Back strip ───────────────────────────────────────────────────────────────

function BackStrip() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 pb-2 pt-4">
      <Link
        to="/#features"
        className="inline-flex items-center gap-2 text-sm text-ocean-400 hover:text-orange-400 transition-colors"
      >
        <ArrowLeft size={15} />
        العودة إلى جميع الوحدات
      </Link>
    </div>
  )
}

// ─── 2. PAIN STRIP ───────────────────────────────────────────────────────────

const PAINS = [
  {
    stat: '٧٢٪',
    text: 'من أصحاب الورش لا يعرفون التكلفة الحقيقية للوحدة المنتجة حتى نهاية الشهر — بعد فوات الأوان.',
    icon: <Calculator size={22} />,
  },
  {
    stat: '١ من كل ٣',
    text: 'دفعات إنتاج تتوقف في المنتصف بسبب نقص خامة لم يُكتشف إلا بعد البدء في التجميع.',
    icon: <AlertTriangle size={22} />,
  },
  {
    stat: '٤٨٪',
    text: 'من أوامر التصنيع اليدوية تحتوي على أخطاء في حساب الكميات — تكاليف إضافية بلا سبب.',
    icon: <ClipboardList size={22} />,
  },
]

function PainStrip() {
  return (
    <section className="py-14 border-y border-ocean-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PAINS.map((p) => (
            <motion.div
              key={p.stat}
              variants={fadeUp()}
              className="relative rounded-2xl border border-ocean-700/50 bg-ocean-900/60 p-6 overflow-hidden"
            >
              <div
                className="absolute top-0 inset-x-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, ${ACCENT + '0.6)'}, transparent)` }}
              />
              <div
                className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: ACCENT_DIM, color: ACCENT_HEX }}
              >
                {p.icon}
              </div>
              <p
                className="mb-2 text-4xl font-black"
                style={{ color: ACCENT_HEX }}
              >
                {p.stat}
              </p>
              <p className="text-sm text-ocean-300 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── 3. VALUE PROPOSITION ────────────────────────────────────────────────────

const VALUE_CARDS = [
  {
    icon: <Layers size={20} />,
    title: 'وصفة إنتاج (BOM) احترافية',
    body: 'حدِّد كل خامة بكميتها الدقيقة في وصفة واحدة. النظام يحسب التكلفة الإجمالية ونسبة الربح فور الإضافة — بدون آلة حاسبة.',
  },
  {
    icon: <Hammer size={20} />,
    title: 'خصم تلقائي عند الإنتاج',
    body: 'نفِّذ دفعة إنتاج بكمية واحدة والنظام يخصم كل الخامات المطلوبة فوراً ويضيف المنتج النهائي للمخزن — حركة واحدة تُحرِّك عشرات السجلات.',
  },
  {
    icon: <Calculator size={20} />,
    title: 'تكلفة WAC دقيقة للمنتج المنتَج',
    body: 'بعد كل دفعة: تكلفة الوحدة = Σ(تكلفة خامة × كمية BOM) — ثم تُدمج مع المخزون الموجود بصيغة المتوسط المرجّح الحقيقي.',
  },
  {
    icon: <Lock size={20} />,
    title: 'حماية من التزامن (Row-Level Lock)',
    body: 'عند بدء دفعة إنتاج، يقفل النظام صفوف جميع الخامات + المنتج النهائي بترتيب محدد في PostgreSQL — يمنع الـ Deadlock ويضمن لا تعارض بين طلبين متزامنين.',
  },
  {
    icon: <FlaskConical size={20} />,
    title: 'التحقق من توفر الخامات قبل البدء',
    body: 'يفحص النظام الرصيد المتاح لكل خامة (بعد الحجز) تحت القفل — إن نقصت خامة واحدة تتوقف الدفعة كلها مع رسالة توضيح المادة الناقصة وكميتها.',
  },
  {
    icon: <BarChart2 size={20} />,
    title: 'المخزون الافتراضي والعنصر المقيِّد',
    body: 'يعرض لك النظام كم وحدة يمكن تجميعها الآن من المخزون الحالي، واسم الخامة التي تحدّ من الإنتاج — تعرف أين تركز الشراء مباشرةً.',
  },
  {
    icon: <RefreshCw size={20} />,
    title: 'إعادة حساب تكاليف التجميعات',
    body: 'عندما تتحدث تكلفة الخامات، أعد حساب تكاليف كل التجميعات دفعةً واحدة — بمعزل قراءة (REPEATABLE READ) يضمن تناسق الأسعار عبر جميع البنود.',
  },
  {
    icon: <Copy size={20} />,
    title: 'نسخ التجميعة بنقرة واحدة',
    body: 'كرِّر تجميعة موجودة تحت اسم جديد — ينسخ النظام الوصفة الكاملة ويعيد حساب التكلفة استناداً لأسعار الخامات الحالية، لا الأسعار القديمة.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'حماية سجل الطلبات',
    body: 'بمجرد ارتباط تجميعة بطلب، يُغلَق التعديل والحذف نهائياً — حتى لو جاء الطلب عبر واجهة مختلفة، يُعاد التحقق داخل نفس المعاملة لمنع ثغرة TOCTOU.',
  },
  {
    icon: <Zap size={20} />,
    title: 'لوحة تحليلات متكاملة',
    body: 'خمسة مؤشرات تُشغَّل معاً بالتوازي (Task.WhenAll): أعلى مبيع، أعلى هامش ربح، مخزون منخفض، استخدام الخامات، والأرباح المحتملة.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'قواعد صارمة لوصفة الإنتاج',
    body: 'لا يقبل النظام وصفة ذات خامة واحدة بكمية 1 (نسخ 1:1 ليس إنتاجاً حقيقياً) — يُطبَّق هذا على الإنشاء والتعديل والتنفيذ معاً.',
  },
  {
    icon: <Package size={20} />,
    title: 'تكامل فوري مع المخزون',
    body: 'كل دفعة إنتاج تسجِّل حركتين: Manufacture_Out لكل خامة بتفاصيل التكلفة، و Manufacture_In للمنتج النهائي — يظهر الأثر فورياً في وحدة المخزون.',
  },
]

function ValueProposition() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp()} className="flex justify-center mb-3">
            <SectionLabel>لماذا وحدة التصنيع؟</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white mb-4">
            من الوصفة إلى المنتج المنتهي —{' '}
            <span style={{ color: ACCENT_HEX }}>كل خطوة مضبوطة.</span>
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 max-w-2xl mx-auto text-base leading-relaxed">
            ليست مجرد قائمة مكونات — كل ميزة مبنية على منطق حماية حقيقي في قاعدة البيانات
            لضمان دقة التكاليف وسلامة المخزون تحت أي ضغط تشغيلي.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {VALUE_CARDS.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp()}
              whileHover={{ y: -5, boxShadow: ACCENT_GLOW }}
              className="relative rounded-2xl border border-ocean-700/50 bg-ocean-900/70 p-6 overflow-hidden transition-shadow duration-300"
            >
              <div
                className="absolute top-0 inset-x-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, ${ACCENT + '0.55)'}, transparent)` }}
              />
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: ACCENT_DIM, color: ACCENT_HEX }}
              >
                {c.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-white">{c.title}</h3>
              <p className="text-sm text-ocean-300 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── 4. INTERACTIVE WALKTHROUGH ──────────────────────────────────────────────

interface WalkthroughTab {
  id: string
  label: string
  icon: React.ReactNode
  steps: { title: string; body: string }[]
  imgSrc: string
  imgAlt: string
}

const TABS: WalkthroughTab[] = [
  {
    id: 'repository',
    label: 'مكتبة التجميعات',
    icon: <Boxes size={16} />,
    steps: [
      {
        title: 'نظرة فورية على رصيد الإنتاج',
        body: 'بطاقة لكل تجميعة: عدد الخامات، المخزون الافتراضي المتاح الآن، التكلفة المقدّرة، سعر البيع، هامش الربح — وإن كانت الكميات منخفضة يظهر الإطار بلون تحذيري فوراً.',
      },
      {
        title: 'العنصر المقيِّد بالاسم',
        body: 'تحت كل بطاقة: اسم الخامة التي تحدّ من الإنتاج ورصيدها المتاح — لا تحتاج لفتح التفاصيل لتعرف أين المشكلة.',
      },
      {
        title: 'فلترة وبحث ذكي',
        body: 'صفِّ التجميعات حسب: الكل / نشطة / منخفض المخزون / نفدت الكمية / غير نشطة — أو ابحث باسم التجميعة فورياً.',
      },
      {
        title: 'إجراءات سريعة لكل بطاقة',
        body: 'بنقرة واحدة: عرض التفاصيل الكاملة، تعديل (إن لم تكن هناك طلبات)، تكرار، تفعيل/إيقاف، أو حذف — مع تأكيد استفسار قبل المسح النهائي.',
      },
    ],
    imgSrc: './assets/mfg-2-list.png',
    imgAlt: 'مكتبة التجميعات مع إظهار المخزون الافتراضي والعنصر المقيّد',
  },
  {
    id: 'studio',
    label: 'استوديو التصنيع',
    icon: <BookOpen size={16} />,
    steps: [
      {
        title: 'محرر الوصفة (BOM)',
        body: 'اضبط اسم التجميعة وسعر البيع، ثم ابحث في منتقي الخامات واختر كل مادة أولية مع كميتها الدقيقة — يُضاف السطر للوصفة وتتحدث التكلفة الكلية فوراً.',
      },
      {
        title: 'تجميع الكميات بشكل ذكي',
        body: 'إذا أضفت خامة موجودة مسبقاً، لا يتكرر السطر — تُضاف الكمية الجديدة على الكمية الموجودة تلقائياً للحفاظ على وصفة نظيفة.',
      },
      {
        title: 'التحقق من بنية الوصفة',
        body: 'يرفض النظام الوصفات ذات الخامة الواحدة بكمية 1 (نسخ 1:1 ليست إنتاجاً). الحد الأدنى: خامتان مختلفتان، أو خامة واحدة بكمية أكبر من 1.',
      },
      {
        title: 'التكلفة والربحية لحظياً',
        body: 'أسفل الوصفة: إجمالي التكلفة (Σ تكلفة خامة × الكمية) وهامش الربح = ((سعر البيع − التكلفة) ÷ سعر البيع) × 100 — تراها تتحدث مع كل تغيير.',
      },
    ],
    imgSrc: './assets/mfg-3-action.png',
    imgAlt: 'استوديو بناء وصفة الإنتاج BOM مع حساب التكلفة اللحظي',
  },
  {
    id: 'produce',
    label: 'تشغيل الإنتاج',
    icon: <Hammer size={16} />,
    steps: [
      {
        title: 'أمر إنتاج بكمية محددة',
        body: 'أدخل عدد الوحدات المراد تصنيعها — يعرض النظام ملخص الخامات المطلوبة والمتاحة قبل التنفيذ.',
      },
      {
        title: 'فحص التوفر قبل البدء (بيانات مقفولة)',
        body: 'يقفل النظام صفوف كل الخامات والمنتج النهائي في PostgreSQL ثم يتحقق من الكميات المتاحة — إن نقصت أي خامة يتوقف ويخبرك باسمها والفرق بالضبط.',
      },
      {
        title: 'الخصم والإضافة في معاملة واحدة',
        body: 'بمجرد التأكيد: تُخصم جميع الخامات وتُضاف وحدات المنتج النهائي وتُسجَّل الحركات — كل ذلك في معاملة قاعدة بيانات واحدة لا يمكن أن تكون جزئية.',
      },
      {
        title: 'WAC فورية للمنتج النهائي',
        body: 'تكلفة الوحدة الجديدة = Σ(تكلفة خامة × كمية BOM) ÷ الكمية، ثم تُدمج مع المخزون الموجود بصيغة المتوسط المرجّح — سعر التكلفة دقيق لكل دفعة.',
      },
    ],
    imgSrc: './assets/mfg-4-details.png',
    imgAlt: 'نافذة تنفيذ دفعة إنتاج مع فحص الخامات والخصم التلقائي',
  },
  {
    id: 'analytics',
    label: 'تحليلات الإنتاج',
    icon: <BarChart3 size={16} />,
    steps: [
      {
        title: 'مؤشرات الأداء الرئيسية (KPIs)',
        body: 'إجمالي التجميعات / النشطة / المنخفضة الرصيد / متوسط هامش الربح — كلها تُشغَّل بالتوازي في طلب API واحد لأسرع تحميل ممكن.',
      },
      {
        title: 'الأكثر مبيعاً والأعلى ربحاً',
        body: 'قوائم مرتبة: التجميعات الأكثر مبيعاً بالتاريخ الكامل، والأعلى هامش ربح — حدِّد بسرعة ما يستحق التركيز عليه.',
      },
      {
        title: 'تنبيهات المخزون المنخفض',
        body: 'أي تجميعة رصيدها الافتراضي أقل من 5 وحدات تظهر في قائمة التنبيهات مع اسم الخامة المقيِّدة — تعرف ماذا تشتري قبل أن تتوقف الطلبات.',
      },
      {
        title: 'استخدام الخامات عبر كل التجميعات',
        body: 'اعرف أي الخامات مشتركة في أكبر عدد من التجميعات — الخامة الأكثر استخداماً هي الأحق بالأولوية في المشتريات والتخزين الاستراتيجي.',
      },
    ],
    imgSrc: './assets/mfg-5-extras.png',
    imgAlt: 'لوحة تحليلات الإنتاج: الأعلى مبيعاً والأعلى ربحاً واستخدام الخامات',
  },
]

function WalkthroughSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 border-t border-ocean-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp()} className="flex justify-center mb-3">
            <SectionLabel>كيف يعمل؟</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white">
            جولة في كل مرحلة من{' '}
            <span style={{ color: ACCENT_HEX }}>الوصفة للمنتج النهائي</span>
          </motion.h2>
        </motion.div>

        {/* Tabs row */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border transition-all duration-200 ${
                active === i
                  ? 'text-white border-transparent shadow-md'
                  : 'border-ocean-700 text-ocean-400 hover:border-orange-500/40 hover:text-orange-400'
              }`}
              style={
                active === i
                  ? { background: `linear-gradient(135deg, ${ACCENT_HEX}, ${ACCENT_DARK})`, boxShadow: ACCENT_GLOW }
                  : {}
              }
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.38 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
          >
            {/* Steps */}
            <div className="flex flex-col gap-5">
              {TABS[active].steps.map((s, idx) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex gap-4"
                >
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{ background: ACCENT_DIM, color: ACCENT_HEX }}
                  >
                    {idx + 1}
                  </span>
                  <div>
                    <p className="mb-1 font-bold text-white">{s.title}</p>
                    <p className="text-sm text-ocean-300 leading-relaxed">{s.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Screenshot */}
            <div
              className="relative rounded-2xl overflow-hidden border border-ocean-700/50 shadow-2xl"
              style={{ boxShadow: `0 24px 60px rgba(0,0,0,0.55), ${ACCENT_GLOW}` }}
            >
              <div
                className="absolute top-0 inset-x-0 h-0.5 z-10"
                style={{ background: `linear-gradient(90deg, transparent, ${ACCENT_HEX}, transparent)` }}
              />
              <img
                src={TABS[active].imgSrc}
                alt={TABS[active].imgAlt}
                width={880}
                height={540}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

// ─── 5. FAQ ───────────────────────────────────────────────────────────────────

interface FaqItem { q: string; a: string }

const FAQS: FaqItem[] = [
  {
    q: 'ما الفرق بين "المخزون الافتراضي" و "المخزون الفعلي"؟',
    a: 'المخزون الفعلي هو وحدات المنتج النهائي المصنَّع الموجودة في المخزن. المخزون الافتراضي هو الحد الأقصى الذي يمكن تجميعه الآن من خامات موجودة = min(رصيد الخامة المتاح ÷ كميتها في BOM) عبر كل الخامات. المخزون الافتراضي صفر لا يعني نقص الخامة بالضرورة — قد يكون المنتج لم يُنتَج بعد.',
  },
  {
    q: 'كيف يحسب النظام تكلفة WAC للمنتج المنتَج؟',
    a: 'عند كل دفعة إنتاج: تكلفة الوحدة الجديدة = Σ(تكلفة خامة الآن × الكمية في BOM). ثم تُدمج مع المخزون القائم: (مخزون قديم × تكلفة قديمة + كمية جديدة × تكلفة الوحدة الجديدة) ÷ (مخزون قديم + كمية جديدة). هذا يعني أن كل دفعة جديدة تعكس أسعار الخامات الفعلية وقت الإنتاج.',
  },
  {
    q: 'ماذا يحدث إذا نقصت خامة أثناء تشغيل دفعة الإنتاج؟',
    a: 'النظام يقفل صفوف جميع الخامات في قاعدة البيانات أولاً (Row-Level Lock)، ثم يقرأ الأرصدة المتاحة (بعد خصم المحجوز) في نفس القفل. إذا وجد أي خامة رصيدها أقل من المطلوب، يرمي استثناء يوضح اسم الخامة والكمية المطلوبة مقابل المتاح — ولا يُنفَّذ أي خصم على أي خامة أخرى.',
  },
  {
    q: 'هل يمكن لمستخدمَين تشغيل دفعتَي إنتاج في نفس الوقت؟',
    a: 'نعم بأمان تام. النظام يرتِّب أقفال الصفوف بترتيب رقم المتغيّر تصاعدياً — هذا يضمن أن أي معاملتَين متزامنتَين تقفلان الصفوف بنفس الترتيب ولا يمكن أن تدخلا في حالة Deadlock. ستنتظر إحداهما الأخرى تلقائياً وتُنفَّذ بشكل متسلسل.',
  },
  {
    q: 'لماذا يرفض النظام وصفة ذات خامة واحدة بكمية 1؟',
    a: 'وصفة بخامة واحدة بكمية 1 تعني أن كل وحدة إنتاج تستهلك وحدة خامة واحدة — هذه نسخة 1:1 وليست إنتاجاً حقيقياً. القواعد: إما أن تحتوي الوصفة على خامتَين أو أكثر، أو إذا كانت خامة واحدة فيجب أن تكون كميتها أكبر من 1. هذا يمنع إساءة استخدام وحدة التصنيع لإخفاء تحويلات مباشرة بين المنتجات.',
  },
  {
    q: 'لماذا لا أستطيع حذف أو تعديل تجميعة لها طلبات؟',
    a: 'لحماية سجلات الطلبات التاريخية. أرقام التكاليف والوصفات المرتبطة بالطلبات المغلقة يجب أن تبقى ثابتة لأغراض التدقيق المالي والمرتجعات. الحل البديل: إيقاف تفعيل التجميعة (Deactivate) للإخفاء من الواجهة مع الإبقاء على السجل.',
  },
  {
    q: 'هل التحقق من الطلبات يحدث مرة واحدة فقط؟',
    a: 'لا — يحدث مرتين: مرة قبل العملية كفحص مسبق لتجربة مستخدم أفضل، ومرة داخل نفس المعاملة قبل التنفيذ الفعلي. هذا يغلق نافذة TOCTOU حيث قد يُنشَأ طلب بين الفحصَين إذا كان هناك مستخدم آخر متزامن.',
  },
  {
    q: 'عندما أغيّر تكلفة خامة، هل تتحدث تكاليف التجميعات تلقائياً؟',
    a: 'لا تلقائياً — بل عبر زر "إعادة حساب التكاليف" المتاح للمديرين فقط. يُعيد هذا الزر حساب تكلفة كل التجميعات بمعزل قراءة REPEATABLE READ لضمان تناسق الأسعار وعدم خلط أسعار قديمة مع جديدة. يوجد حد معدّل 60 ثانية لمنع الضغط على قاعدة البيانات.',
  },
  {
    q: 'ما المعلومات التي تظهر على "تفاصيل التجميعة"؟',
    a: 'لكل خامة في الوصفة: رصيد الخامة الحالي، الرصيد المحجوز، الرصيد المتاح، الكمية المطلوبة في الدفعة، تكلفة الوحدة، الإجمالي كل سطر، وعدد الوحدات التي تستطيع هذه الخامة وحدها تأمينها (canMake). في الأسفل: إجمالي المخزون الافتراضي وإجمالي التكلفة.',
  },
  {
    q: 'كيف تعمل "نسخ التجميعة"؟',
    a: 'تُنشئ منتجاً جديداً واسماً جديداً مع نسخة كاملة من BOM المصدر. تُعاد حسابة التكلفة من أسعار الخامات الحالية (لا الأسعار المخزّنة في الأصل). تُنسخ أيضاً: الفئة، ترتيب العرض، رابط الصفحة، وحالة التفعيل — كل ذلك في معاملة قاعدة بيانات واحدة.',
  },
  {
    q: 'هل الوحدة محمية من هجمات استيلاء الموارد (IDOR)؟',
    a: 'نعم — طبقة مزدوجة: الطبقة الأولى عبر Global Query Filter يُضيف companyId تلقائياً على كل استعلام. الطبقة الثانية عبر RequireBundleProductOwnedByTenantAsync الذي يتحقق صراحةً من أن الـ CompanyId يطابق المستأجر الحالي. الاثنتان مطلوبتان معاً للوصول.',
  },
]

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="py-20 border-t border-ocean-800/60">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp()} className="flex justify-center mb-3">
            <SectionLabel>أسئلة شائعة</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white">
            إجابات تقنية وعملية{' '}
            <span style={{ color: ACCENT_HEX }}>بدون تعقيد</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          {FAQS.map((item, i) => (
            <motion.div
              key={item.q}
              variants={fadeUp()}
              className="rounded-2xl border border-ocean-700/50 bg-ocean-900/60 overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
              >
                <span className="font-semibold text-white text-sm leading-relaxed">{item.q}</span>
                <ChevronDown
                  size={18}
                  className="shrink-0 text-ocean-400 transition-transform duration-300"
                  style={{ transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0deg)', color: openIdx === i ? ACCENT_HEX : undefined }}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 text-sm text-ocean-300 leading-relaxed border-t border-ocean-700/40 pt-4">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── 6. RELATED MODULES ──────────────────────────────────────────────────────

const RELATED = [
  {
    href: '/#/features/inventory',
    icon: <Boxes size={20} />,
    title: 'إدارة المخزون',
    body: 'الوحدة الأم للخامات — كل خصم إنتاج يظهر كحركة مخزون فورية مع تكاملها في التكلفة والأرصدة.',
  },
  {
    href: '/#/features/preparation',
    icon: <PackageOpen size={20} />,
    title: 'التحضير والتجهيز',
    body: 'بعد الإنتاج، وحدة التحضير تجمِّع التجميعات في طلبات وتُرسلها — حلقة إنتاج مكتملة.',
  },
  {
    href: '/#/features/orders',
    icon: <ShoppingCart size={20} />,
    title: 'الطلبات',
    body: 'الطلبات الحاوية على تجميعات تؤثر على المخزون الافتراضي وتُغلق باب التعديل على الوصفة.',
  },
  {
    href: '/#/features/reports',
    icon: <BarChart2 size={20} />,
    title: 'التقارير',
    body: 'تقارير هامش الربح وحركات Manufacture_Out وManufacture_In مُدمجة في التحليلات الشاملة.',
  },
  {
    href: '/#/features/expenses',
    icon: <TrendingUp size={20} />,
    title: 'المصروفات',
    body: 'تكاليف الإنتاج والخامات تُغذِّي وحدة المصروفات لتتبع التكلفة الكاملة للمنتج.',
  },
  {
    href: '/#/features/shipping',
    icon: <Truck size={20} />,
    title: 'الشحن',
    body: 'الطلبات المنتجة تنتقل للشحن — وحدة الشحن تعمل مع المنتجات المُصنَّعة بنفس الكفاءة.',
  },
]

function RelatedModules() {
  return (
    <section className="py-20 border-t border-ocean-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp()} className="flex justify-center mb-3">
            <SectionLabel>الوحدات المرتبطة</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl font-black text-white">
            التصنيع جزء من{' '}
            <span style={{ color: ACCENT_HEX }}>منظومة متكاملة</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {RELATED.map((r) => (
            <motion.div key={r.href} variants={fadeUp()}>
              <Link
                to={r.href}
                className="group relative flex flex-col gap-3 rounded-2xl border border-ocean-700/50 bg-ocean-900/60 p-6 overflow-hidden transition-all duration-300 hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-lg block"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${ACCENT_HEX}, transparent)` }}
                />
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors"
                  style={{ background: ACCENT_DIM, color: ACCENT_HEX }}
                >
                  {r.icon}
                </div>
                <div>
                  <p className="font-bold text-white mb-1 flex items-center gap-2">
                    {r.title}
                    <ChevronRight size={14} className="text-ocean-500 group-hover:text-orange-400 transition-colors" />
                  </p>
                  <p className="text-sm text-ocean-400 leading-relaxed">{r.body}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── 7. CTA ───────────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="py-24 border-t border-ocean-800/60">
      <div className="mx-auto max-w-3xl px-4 sm:px-8 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute w-[480px] h-[240px] rounded-full blur-3xl opacity-20 -z-10"
            style={{ background: `radial-gradient(ellipse, ${ACCENT_HEX} 0%, transparent 70%)` }}
          />

          <motion.div variants={fadeUp()}>
            <SectionLabel>ابدأ الآن</SectionLabel>
          </motion.div>

          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white leading-tight">
            أوقف الخسائر الخفية في خطوط الإنتاج.{' '}
            <span style={{ color: ACCENT_HEX }}>اعرف تكلفتك الحقيقية.</span>
          </motion.h2>

          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 text-base max-w-xl leading-relaxed">
            انضم لآلاف الورش والمصانع الصغيرة التي تحكم وصفة إنتاجها وتكلفتها باستخدام
            Maly-OBS — بلا أخطاء إكسيل، بلا مفاجآت في التكلفة.
          </motion.p>

          <motion.div variants={fadeUp(0.15)} className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg, ${ACCENT_HEX}, ${ACCENT_DARK})`, boxShadow: ACCENT_GLOW }}
            >
              ابدأ الآن مجاناً
              <ChevronRight size={18} />
            </Link>
            <Link
              to="/#features"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-orange-500/40 hover:text-orange-400 transition-all duration-200"
            >
              استعرض الوحدات
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div variants={fadeUp(0.2)} className="flex flex-wrap justify-center gap-6 pt-4">
            {[
              { icon: <CheckCircle2 size={15} />, text: 'بدون بطاقة ائتمانية' },
              { icon: <CheckCircle2 size={15} />, text: 'إعداد في أقل من ٥ دقائق' },
              { icon: <CheckCircle2 size={15} />, text: 'دعم فني كامل بالعربية' },
            ].map((t) => (
              <span
                key={t.text}
                className="flex items-center gap-2 text-sm"
                style={{ color: ACCENT + '0.8)' }}
              >
                {t.icon}
                {t.text}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── PAGE ROOT ────────────────────────────────────────────────────────────────

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-ocean-950 text-white overflow-x-hidden">
      <BackStrip />
      <Hero />
      <PainStrip />
      <ValueProposition />
      <WalkthroughSection />
      <FaqSection />
      <RelatedModules />
      <CtaSection />
    </div>
  )
}
