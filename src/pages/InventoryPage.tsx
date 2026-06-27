/**
 * InventoryPage.tsx — Dedicated marketing page for the Inventory (إدارة المخزون) module.
 *
 * Sections:
 *   1. Hero
 *   2. Pain-Point Stat Strip
 *   3. Value Proposition (Why This Module?)
 *   4. Interactive Walkthrough (Tabs)
 *   5. Deep-Dive FAQ
 *   6. Recommended Modules
 *   7. CTA
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { WHATSAPP_CTA_URL } from '../constants'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger } from '../utils/animations'
import SectionLabel from '../components/SectionLabel'
import {
  Boxes,
  TrendingUp,
  AlertTriangle,
  ShieldAlert,
  History,
  BarChart3,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Star,
  Calculator,
  RefreshCw,
  PackageOpen,
  Truck,
  Factory,
  BarChart2,
  ShoppingCart,
  Users,
  Archive,
  Settings,
} from 'lucide-react'

// ─── Accent colour tokens ─────────────────────────────────────────────────────

const ACCENT       = 'rgba(34,197,94,'     // brand-green
const ACCENT_HEX   = '#22c55e'
const ACCENT_DIM   = 'rgba(34,197,94,0.12)'
const ACCENT_DARK  = '#16a34a'
const ACCENT_GLOW  = '0 0 28px rgba(34,197,94,0.42)'

// ─── 1. HERO ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute -top-24 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.17]"
        style={{ background: `radial-gradient(circle, ${ACCENT_HEX} 0%, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute top-40 left-0 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ background: `radial-gradient(circle, rgba(20,184,166,1) 0%, transparent 70%)` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Copy ── */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-6">

            {/* Badge */}
            <motion.div variants={fadeUp(0)} className="flex">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border"
                style={{ borderColor: ACCENT + '0.35)', background: ACCENT_DIM, color: ACCENT_HEX }}
              >
                <Boxes size={13} /> وحدة إدارة المخزون
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.05)}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.15] text-white"
            >
              كل قطعة في مخزنك
              <br />
              <span style={{ color: ACCENT_HEX }}>محسوبة، مراقَبة، ومحمية</span>
              <br />
              في الوقت الفعلي.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp(0.1)}
              className="text-slate-400 text-lg leading-relaxed max-w-lg"
            >
              وحدة المخزون في مالي-OBS بتديك سيطرة كاملة — رصيد فيزيائي، محجوز، ومتاح
              في لحظة واحدة. مع تكلفة متوسطة مرجحة (WAC) تلقائية، تتبع حركات المخزون،
              وتحليلات أداء قابلة للتصدير.
            </motion.p>

            {/* Micro stats */}
            <motion.div variants={fadeUp(0.14)} className="flex flex-wrap gap-5 text-sm">
              {[
                { value: '٣',    label: 'أوضاع للرصيد: فيزيائي، محجوز، متاح', suffix: '' },
                { value: 'WAC',  label: 'تكلفة متوسطة مرجحة تلقائية مع كل شراء', suffix: '' },
                { value: '٦',    label: 'أنواع حركات مخزون مسجّلة ومدققة', suffix: '+' },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black tabular-nums" style={{ color: ACCENT_HEX }}>
                    {s.value}{s.suffix}
                  </span>
                  <span className="text-slate-500 text-xs leading-tight max-w-[120px]">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp(0.18)} className="flex flex-wrap gap-3 pt-2">
              <a
                href={WHATSAPP_CTA_URL}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-ocean-950 font-bold text-sm hover:scale-[1.04] active:scale-100 transition-all duration-200"
                style={{ background: `linear-gradient(135deg, ${ACCENT_HEX}, ${ACCENT_DARK})`, boxShadow: ACCENT_GLOW }}
              >
                ابدأ تجربتك المجانية
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-slate-700 text-slate-300 font-bold text-sm hover:border-brand-green/50 hover:text-brand-green hover:bg-brand-green/5 transition-all duration-200"
              >
                استكشف كل الوحدات
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Hero image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="relative w-full rounded-3xl overflow-hidden border border-white/[0.07]"
              style={{
                background: 'rgba(7,21,42,0.6)',
                boxShadow: `0 0 0 1px ${ACCENT}0.12), 0 32px 80px rgba(0,0,0,0.55)`,
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: `linear-gradient(to right, transparent, ${ACCENT_HEX}, transparent)` }}
              />
              <img
                src="./assets/inv-1-hero.png"
                alt="واجهة وحدة إدارة المخزون في مالي-OBS"
                className="w-full h-auto object-cover"
                loading="eager"
                width={780}
                height={480}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── 2. PAIN-POINT STAT STRIP ─────────────────────────────────────────────────

const PAIN_STATS = [
  {
    icon:  AlertTriangle,
    value: '٦٣٪',
    label: 'من المتاجر خسرت مبيعات بسبب overselling على منتج صفر رصيد ما اتكشفش في الوقت المناسب',
    color: 'text-rose-400',
  },
  {
    icon:  Calculator,
    value: 'يدوي',
    label: 'كيف أكثر من ٧٠٪ من التجار بيحسبوا تكلفة مخزونهم — في Excel أو ورق — وبيغلطوا باستمرار',
    color: 'text-amber-400',
  },
  {
    icon:  ShieldAlert,
    value: '١ من ٤',
    label: 'مرتجعات بتدخل المخزن بدون فحص وبتتباع مرة تانية وهي "تالفة"، مما يضر بسمعة المتجر',
    color: 'text-orange-400',
  },
]

function PainStrip() {
  return (
    <section className="py-12 border-y border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {PAIN_STATS.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.07)}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-ocean-800/30 border border-white/[0.05]"
            >
              <s.icon size={22} className={`${s.color} opacity-80`} />
              <p className="text-2xl font-black text-white tabular-nums">{s.value}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-slate-600 text-xs mt-6"
        >
          * أرقام مستخلصة من تحليل أنماط المتاجر الإلكترونية في السوق المصري.
        </motion.p>
      </div>
    </section>
  )
}

// ─── 3. VALUE PROPOSITION ─────────────────────────────────────────────────────

interface ValueCard {
  icon:  typeof Boxes
  title: string
  desc:  string
  color: string
  bg:    string
}

const VALUE_CARDS: ValueCard[] = [
  {
    icon:  Boxes,
    title: 'ثلاثة أرصدة في صف واحد',
    desc:  'لكل منتج بتشوف الرصيد الفيزيائي (الموجود فعلاً)، المحجوز (مع الطلبات المفتوحة)، والمتاح (الفيزيائي ناقص المحجوز). مفيش لبس ومفيش بيع على رصيد مش موجود.',
    color: 'text-brand-green',
    bg:    'bg-brand-green/10',
  },
  {
    icon:  Calculator,
    title: 'تكلفة متوسطة مرجحة (WAC) تلقائية',
    desc:  'مع كل عملية شراء جديدة، النظام بيحسب WAC تلقائياً: (رصيد قديم × تكلفة قديمة + كمية جديدة × سعر جديد) ÷ الرصيد الكلي. دقة محاسبية بدون أي تدخل يدوي.',
    color: 'text-sky-400',
    bg:    'bg-sky-400/10',
  },
  {
    icon:  History,
    title: 'سجل حركات مخزون أدق من إيد الخبير',
    desc:  'كل عملية شراء، تعديل، تسوية، أو معالجة حجر صحي بتتسجل تلقائياً بالتاريخ والنوع والتكلفة قبل وبعد والرصيد قبل وبعد. تقدر ترجع لأي لحظة في تاريخ مخزونك.',
    color: 'text-violet-400',
    bg:    'bg-violet-400/10',
  },
  {
    icon:  AlertTriangle,
    title: 'تبويب إعادة التوريد بتكلفة تقديرية',
    desc:  'كل منتج رصيده المتاح سالب أو أقل من المحجوز بيظهر تلقائياً في تاب "إعادة التوريد" مع الكمية المطلوبة وتكلفتها التقديرية. تعرف تشتري صح من أول وهلة.',
    color: 'text-amber-400',
    bg:    'bg-amber-400/10',
  },
  {
    icon:  ShieldAlert,
    title: 'حجر صحي للمرتجعات — صح أو تالف',
    desc:  'المرتجعات بتدخل في تاب "الحجر الصحي" مش مباشرةً في المخزن. قرر كم قطعة صالحة (ترجع للمخزون مع تكلفة التجديد) وكم قطعة تالفة — بشكل منفصل وآمن.',
    color: 'text-rose-400',
    bg:    'bg-rose-400/10',
  },
  {
    icon:  TrendingUp,
    title: 'تحليلات ربحية ومبيعات بمرشح تاريخي',
    desc:  'تقارير المبيعات والربح وأعلى المنتجات أداءً وأكثرها تلفاً — قابلة للفلترة بنطاق تاريخ وبمنتج محدد. احفظ نطاق التاريخ في localStorage والواجهة بتتذكره.',
    color: 'text-pink-400',
    bg:    'bg-pink-400/10',
  },
  {
    icon:  Star,
    title: 'منتجات مفضّلة للوصول الفوري',
    desc:  'علّم المنتجات الأكثر تداولاً كـ"مفضّلة" وهتظهر دايماً في أول القائمة، وكمان في كتالوج إدخال الطلبات ليسهّل على الفريق الاختيار السريع.',
    color: 'text-yellow-400',
    bg:    'bg-yellow-400/10',
  },
  {
    icon:  Archive,
    title: 'أرشفة ذكية بمقترحات تلقائية',
    desc:  'الجهاز بيجمع المنتجات اللي رصيدها صفر وما فيهاش طلبات في آخر ٩٠ يوم ويقترحها للأرشفة دفعة واحدة. قائمتك تفضل نظيفة وركّزت على المنتجات النشطة.',
    color: 'text-teal-400',
    bg:    'bg-teal-400/10',
  },
  {
    icon:  RefreshCw,
    title: 'إعادة حساب المحجوز دفعة واحدة',
    desc:  'زر "إعادة الحساب" بيحسب تلقائياً رصيد المحجوز لكل المنتجات من طلبات الشراء المفتوحة — مع حماية ضد التنفيذ المتزامن (Semaphore) لضمان دقة النتيجة.',
    color: 'text-cyan-400',
    bg:    'bg-cyan-400/10',
  },
  {
    icon:  PackageOpen,
    title: 'بانديل افتراضي — توفر محسوب من المكونات',
    desc:  'البانديلات بيانتها رصيد = صفر، لكن النظام بيحسب توفّرها تلقائياً من عدد المكونات المتاحة ÷ كمية كل مكون في الـ BOM. مفيش شراء أو تعديل مباشر على البانديل نفسه.',
    color: 'text-indigo-400',
    bg:    'bg-indigo-400/10',
  },
  {
    icon:  ShoppingCart,
    title: 'شراء المخزون مع تسوية مالية كاملة',
    desc:  'عند تسجيل شراء، النظام بيسجّل المصروف في الخزينة، وينشئ مديونية خارجية للمورد لو الدفع جزئي، ويتحقق من كفاية الرصيد. كل ده في عملية واحدة مغلقة.',
    color: 'text-orange-400',
    bg:    'bg-orange-400/10',
  },
  {
    icon:  Settings,
    title: 'حماية ضد التكرار والـ IDOR',
    desc:  'النظام بيبلوك أي عملية شراء أو تعديل مكررة في أقل من ١٠ ثواني (Double-Submit Guard). وفي نفس الوقت، كل منتج بيتحقق منه إنه فعلاً ملكك (Tenant Ownership Guard).',
    color: 'text-slate-400',
    bg:    'bg-slate-400/10',
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
          className="flex flex-col gap-3 mb-14 text-center"
        >
          <motion.div variants={fadeUp(0)}><SectionLabel color="#2dd4bf">ليه وحدة المخزون؟</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp(0.04)} className="text-3xl sm:text-4xl font-black text-white leading-tight">
            المشاكل اللي حلّيناها — مش بس وصفناها
          </motion.h2>
          <motion.p variants={fadeUp(0.08)} className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            كل ميزة اتبنت على سيناريو حقيقي بيسبّب خسارة مال أو وقت لأصحاب المتاجر في مصر.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {VALUE_CARDS.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.04)}
              whileHover={{
                y: -5,
                boxShadow: `0 0 0 1px ${ACCENT}0.22), 0 16px 48px ${ACCENT}0.07)`,
              }}
              transition={{ duration: 0.2 }}
              className="relative flex flex-col gap-4 p-6 rounded-2xl bg-ocean-800/40 backdrop-blur-sm border border-white/[0.07] overflow-hidden group"
            >
              <div
                className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, transparent, ${ACCENT_HEX}, transparent)` }}
              />
              <div className={`w-9 h-9 flex items-center justify-center rounded-xl ${card.bg} ${card.color}`}>
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
  )
}

// ─── 4. INTERACTIVE WALKTHROUGH ───────────────────────────────────────────────

interface WalkthroughTab {
  id:     string
  label:  string
  icon:   typeof Boxes
  imgSrc: string
  imgAlt: string
  imgW:   number
  imgH:   number
  steps:  { title: string; desc: string }[]
}

const WALKTHROUGH_TABS: WalkthroughTab[] = [
  {
    id:     'main',
    label:  'قائمة المخزون',
    icon:   Boxes,
    imgSrc: './assets/inv-2-list.png',
    imgAlt: 'جدول المخزون الرئيسي مع الأرصدة والفلاتر',
    imgW:   880,
    imgH:   540,
    steps: [
      {
        title: 'ثلاثة أرصدة بنظرة واحدة',
        desc:  'الجدول بيعرض لكل منتج: الرصيد الفيزيائي (الموجود في المخزن)، المحجوز (محجوز مع الطلبات)، والمتاح (الفارق). الأصفر = تحذير، الأحمر = نقص، الأخضر = كافي.',
      },
      {
        title: 'فلترة بالاسم، الفئة، والأرشيف',
        desc:  'تقدر تدوّر بالاسم أو الـ ID، تفلتر بالفئة من قائمة منسدلة، وتظهر المنتجات المؤرشفة عند الحاجة بكليك واحد.',
      },
      {
        title: 'ترقيم بـ ٥٠ منتج مع حفظ الصفحة',
        desc:  'الجدول بيعرض ٥٠ منتج في الصفحة وبيحفظ موضعك تلقائياً. مفيش ضياع في القائمة بعد أي عملية.',
      },
      {
        title: 'المفضلة = أول القائمة دايماً',
        desc:  'منتجاتك الأكثر تداولاً تظهر في الأعلى دايماً. نفس المفضلة بتتزامن مع كتالوج إدخال الطلبات.',
      },
    ],
  },
  {
    id:     'actions',
    label:  'شراء وتعديل',
    icon:   ShoppingCart,
    imgSrc: './assets/inv-3-action.png',
    imgAlt: 'مودال الشراء ومودال تعديل المخزون',
    imgW:   880,
    imgH:   540,
    steps: [
      {
        title: 'شراء المخزون مع WAC تلقائية',
        desc:  'أدخل المورد، الكمية، والتكلفة — النظام بيحسب WAC الجديدة تلقائياً. لو الدفع جزئي، بينشئ مديونية خارجية للمورد. لو الخزينة ما تكفيش، بيرفض العملية قبل ما تأثر في الأرقام.',
      },
      {
        title: 'تعديل المخزون بأنواع مدققة',
        desc:  'خمسة أنواع تعديل: تسوية جرد، تالف، مرتجع، خسارة، ووجد. كل نوع بيضيف قيد حركة مستقل في السجل. النوع "تالف" بيتطلب كمية سالبة للحماية.',
      },
      {
        title: 'حماية مزدوجة ضد التكرار',
        desc:  'الـ API بيبلوك أي عملية شراء أو تعديل في نفس المنتج خلال ١٠ ثواني. بينعم الضغط المزدوج أو التقديم المتكرر بالخطأ.',
      },
      {
        title: 'قفل صف (Row-Level Lock) عند التعديل',
        desc:  'قبل أي تعديل أو معالجة حجر صحي، النظام بيقفل صف المنتج في قاعدة البيانات. محال يحصل تعديلان متزامنان على نفس المنتج.',
      },
    ],
  },
  {
    id:     'quarantine',
    label:  'الحجر الصحي',
    icon:   ShieldAlert,
    imgSrc: './assets/inv-4-details.png',
    imgAlt: 'تاب الحجر الصحي ومعالجة المرتجعات',
    imgW:   880,
    imgH:   540,
    steps: [
      {
        title: 'المرتجعات في منطقة انتظار آمنة',
        desc:  'أي مرتجع بيدخل المخزن بيروح مباشرةً لعداد الحجر الصحي — مش للرصيد الفيزيائي. ما يتباعش تاني إلا بعد فحص.',
      },
      {
        title: 'تقسيم ذكي: صالح أو تالف',
        desc:  'من مودال المعالجة، قرر كمية الصالح (بتترجع للمخزون مع تكلفة تجديد اختيارية) وكمية التالف. النظام بيتحقق إن المجموع = عدد الحجر الصحي قبل السماح بالتأكيد.',
      },
      {
        title: 'تكلفة التجديد تدخل في WAC',
        desc:  'لو حددت تكلفة تجديد للوحدات الصالحة، النظام بيضيفها للـ WAC ويسجلها كمصروف "Refurbishment" في الخزينة. نتيجة محاسبية دقيقة دون أي إدخال يدوي إضافي.',
      },
      {
        title: 'خسائر التالف مسجّلة بشكل منفصل',
        desc:  'كل وحدة تالفة بتتسجل في عداد التوالف مع قيمتها المالية. تقدر تشوف تاريخ الخسائر الكاملة في تاب التحليلات.',
      },
    ],
  },
  {
    id:     'analytics',
    label:  'التحليلات',
    icon:   BarChart3,
    imgSrc: './assets/inv-5-extras.png',
    imgAlt: 'تاب التحليلات مع KPIs والمخططات',
    imgW:   880,
    imgH:   540,
    steps: [
      {
        title: 'KPIs المخزون الأربعة الكبار',
        desc:  'عدد المنتجات، الرصيد الفيزيائي الكلي، إجمالي التكلفة، وإجمالي قيمة البيع — كلها في كروت فوق الشاشة. قابلة للفلترة بمنتج محدد.',
      },
      {
        title: 'أداء المبيعات: وحدات وإيرادات وربح',
        desc:  'فلتر نطاق تاريخي (اليوم، هذا الأسبوع، هذا الشهر، أو مخصص) وشوف الوحدات المباعة، الإيرادات، الربح الصافي، ونسبة التوالف.',
      },
      {
        title: 'أعلى المنتجات ربحاً وأكثرها تلفاً',
        desc:  'قائمتان أفقيتان: Top Profit (الأكثر ربحاً) وMost Damaged (الأكثر تلفاً). بتساعدك تحدد أي منتج يحتاج متابعة أو تعديل في التسعير.',
      },
      {
        title: 'سجل الحركات بفلترة شاملة',
        desc:  'تاب الحركات يعرض كل عملية (شراء، تعديل، حجر صحي) مع التاريخ، التكلفة قبل وبعد، الرصيد قبل وبعد، المورد، والسبب — مفلتّر بالنوع والتاريخ.',
      },
    ],
  },
]

function WalkthroughSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const tab = WALKTHROUGH_TABS[activeIdx]

  return (
    <section className="py-20 bg-ocean-950/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-col gap-3 mb-14 text-center"
        >
          <motion.div variants={fadeUp(0)}><SectionLabel color="#2dd4bf">كيف تشتغل؟</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp(0.04)} className="text-3xl sm:text-4xl font-black text-white leading-tight">
            جولة تفاعلية داخل وحدة المخزون
          </motion.h2>
          <motion.p variants={fadeUp(0.08)} className="text-slate-400 text-base max-w-xl mx-auto">
            اختار أي قسم وشوف التفاصيل الكاملة خطوة بخطوة.
          </motion.p>
        </motion.div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {WALKTHROUGH_TABS.map((t, i) => {
            const active = i === activeIdx
            return (
              <button
                key={t.id}
                onClick={() => setActiveIdx(i)}
                className={`
                  inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold
                  border transition-all duration-200
                  ${active
                    ? 'text-ocean-950 border-transparent'
                    : 'border-white/[0.09] text-slate-400 hover:text-white hover:border-white/20 bg-ocean-800/30'
                  }
                `}
                style={active ? { background: `linear-gradient(135deg, ${ACCENT_HEX}, ${ACCENT_DARK})` } : {}}
              >
                <t.icon size={14} />
                {t.label}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
          >
            {/* Steps list */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {tab.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex gap-4 p-5 rounded-2xl bg-ocean-800/40 border border-white/[0.07]"
                >
                  <div
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-ocean-950"
                    style={{ background: `linear-gradient(135deg, ${ACCENT_HEX}, ${ACCENT_DARK})` }}
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

            {/* Screenshot */}
            <div className="lg:col-span-3">
              <div
                className="relative rounded-2xl overflow-hidden border border-white/[0.07]"
                style={{
                  background: 'rgba(7,21,42,0.55)',
                  boxShadow: `0 0 0 1px ${ACCENT}0.1), 0 24px 60px rgba(0,0,0,0.5)`,
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: `linear-gradient(to right, transparent, ${ACCENT_HEX}, transparent)` }}
                />
                <img
                  src={tab.imgSrc}
                  alt={tab.imgAlt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width={tab.imgW}
                  height={tab.imgH}
                />
              </div>
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
    q: 'إيه الفرق بين الرصيد الفيزيائي، المحجوز، والمتاح؟',
    a: 'الفيزيائي هو الكمية الموجودة فعلاً في المخزن. المحجوز هو الكمية المرتبطة بطلبات مفتوحة (لسه اتشحنتش). المتاح = الفيزيائي − المحجوز. لو المتاح صفر أو سالب، مش المفروض تبيع تاني على هذا المنتج.',
  },
  {
    q: 'إزاي بيتحسب WAC (التكلفة المتوسطة المرجحة)؟',
    a: 'WAC = (رصيد قديم × تكلفة قديمة + كمية شراء جديدة × سعر الوحدة الجديد) ÷ (رصيد قديم + كمية الشراء). الرصيد القديم بيتحدد من الصفر لو كان سالباً، وده بيمنع تشوّه WAC بسبب مرتجعات أو تعديلات سلبية سابقة.',
  },
  {
    q: 'لو اتبعت بخسارة (المشتري دفع أقل من التكلفة)، بيتسجل إزاي؟',
    a: 'عملية الشراء من المورد بتسجل التكلفة الكاملة. بعدين في عملية البيع، الفرق بين سعر البيع والتكلفة هو الهامش. لو الهامش سالب، بيظهر كخسارة في تقارير الربح والخسارة.',
  },
  {
    q: 'إيه هو الحجر الصحي ومتى بيحصل؟',
    a: 'الحجر الصحي (Quarantine) هو طابور انتظار للمرتجعات قبل الفحص. البضاعة بتدخله تلقائياً عند تسجيل المرتجع. من تاب الحجر الصحي، بتقرر كمية الصالح للبيع من جديد (بيرجع للرصيد الفيزيائي) وكمية التالف (بيتسجل كخسارة).',
  },
  {
    q: 'هل تكلفة التجديد بتأثر على WAC؟',
    a: 'أيوه. لما تحدد تكلفة تجديد لكل وحدة صالحة، النظ\u0645 بيحسب WAC الجديدة كالتالي: (رصيد قديم × تكلفة قديمة + كمية صالحة × (تكلفة قديمة + تكلفة التجديد)) ÷ (رصيد قديم + كمية صالحة). يعني التكلفة الحقيقية للوحدة المجددة بتنعكس بدقة في الأرقام.',
  },
  {
    q: 'لو دخلت شراء غلط، هل أقدر أرجعه؟',
    a: 'مفيش "حذف شراء" مباشر — وده تصميم متعمد للحفاظ على سلامة السجل المالي. بدلاً منه، استخدم تعديل مخزون سالب (نوع "تسوية جرد") بالكمية اللي اشتريتها بالغلط. الحركتان بتظهرا في السجل لأغراض التدقيق.',
  },
  {
    q: 'هل البانديلات بتستهلك مخزون لما تتحضر؟',
    a: 'البانديل نفسه رصيده صفر دايماً. الاستهلاك بيحصل من مكوناته الفعلية عند التحضير. توفّر البانديل بيتحسب بالصيغة: min(رصيد مكون ÷ كميته في الـ BOM) لكل المكونات.',
  },
  {
    q: 'إيه اللي بيتغير لو ضغطت "إعادة حساب المحجوز"؟',
    a: 'النظام بيمشي على كل طلبات الشراء المفتوحة ويحسب ReservedStock من جديد بدقة لكل variant. ده مفيد لو حصل أي عدم تزامن بين الطلبات والمخزون. العملية محمية بـ SemaphoreSlim — لو في حساب شغّال، الطلب الجديد بيتخطى تلقائياً.',
  },
  {
    q: 'مين يقدر يحذف منتج؟',
    a: 'قدر تحذف المنتج بس لو ما عنده تاريخ مبيعات. لو عنده سجل طلبات (فعّال أو مؤرشف)، النظام بيبلوك الحذف ويعرضلك خيار الأرشفة بدلاً منه للحفاظ على تاريخ البيانات.',
  },
  {
    q: 'هل مقترحات الأرشفة بتطلع تلقائياً؟',
    a: 'بضغطة "مقترحات الأرشفة"، النظام بيجيب كل المنتجات اللي رصيدها صفر وما فيهاش طلبات في آخر ٩٠ يوم. قدر تختار من القائمة على وتضغط "أرشفة الكل" بضغطة واحدة.',
  },
  {
    q: 'هل أقدر أفلتر سجل الحركات بتاريخ ونوع في نفس الوقت؟',
    a: 'أيوه. سجل الحركات بيقبل فلترة مشتركة بالتاريخ (من/إلى) ونوع الحركة (شراء، تعديل داخل وخارج، حجر صالح وتالف) في نفس الوقت. النتيجة مرقّمة بـ ٥٠ صف في الصفحة.',
  },
]

function FaqItemBlock({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 5) * 0.05 }}
      className="border border-white/[0.08] rounded-2xl overflow-hidden bg-ocean-800/25"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-right hover:bg-white/[0.025] transition-colors duration-200"
      >
        <span className="text-white/90 font-bold text-sm leading-snug flex-1">{item.q}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-slate-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 pt-4 text-slate-400 text-sm leading-relaxed border-t border-white/[0.06]">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FaqSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-col gap-3 mb-14 text-center"
        >
          <motion.div variants={fadeUp(0)}><SectionLabel color="#2dd4bf">أسئلة شائعة</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp(0.04)} className="text-3xl sm:text-4xl font-black text-white leading-tight">
            كل سؤال في دماغك — هنا إجابته
          </motion.h2>
          <motion.p variants={fadeUp(0.08)} className="text-slate-400 text-base max-w-xl mx-auto">
            من محاسبة الـ WAC لحد الحجر الصحي — فصّلنا كل تفصيلة.
          </motion.p>
        </motion.div>
        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => <FaqItemBlock key={i} item={item} index={i} />)}
        </div>
      </div>
    </section>
  )
}

// ─── 6. RECOMMENDED MODULES ───────────────────────────────────────────────────

const RELATED_MODULES = [
  {
    id:    'orders',
    icon:  PackageOpen,
    color: 'text-brand-teal',
    bg:    'bg-brand-teal/10',
    title: 'الطلبات والشحن',
    desc:  'كل طلب بيحجز من المخزون تلقائياً عند إنشائه.',
  },
  {
    id:    'preparation',
    icon:  CheckCircle2,
    color: 'text-sky-400',
    bg:    'bg-sky-400/10',
    title: 'التحضير والتجهيز',
    desc:  'التحضير بيخصم المخزون الفيزيائي ويحرر المحجوز.',
  },
  {
    id:    'manufacturing',
    icon:  Factory,
    color: 'text-orange-400',
    bg:    'bg-orange-400/10',
    title: 'التصنيع',
    desc:  'إنتاج الوحدات بيضيف للمخزون ويخصم المواد الخام.',
  },
  {
    id:    'shipping',
    icon:  Truck,
    color: 'text-purple-400',
    bg:    'bg-purple-400/10',
    title: 'الشحن',
    desc:  'الشحن بيُنهي دورة حياة الطلب ويؤكد الخصم من المخزون.',
  },
  {
    id:    'reports',
    icon:  BarChart2,
    color: 'text-violet-400',
    bg:    'bg-violet-400/10',
    title: 'التقارير الذكية',
    desc:  'ربحية كل منتج وتكلفة المخزون في تقارير مالية موحدة.',
  },
  {
    id:    'hr',
    icon:  Users,
    color: 'text-pink-400',
    bg:    'bg-pink-400/10',
    title: 'الموارد البشرية',
    desc:  'قياس إنتاجية فريق المخزن بعدد العمليات المنجزة.',
  },
]

function RelatedModules() {
  return (
    <section className="py-20 bg-ocean-950/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-col gap-3 mb-14 text-center"
        >
          <motion.div variants={fadeUp(0)}><SectionLabel color="#2dd4bf">وحدات مرتبطة</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp(0.04)} className="text-3xl sm:text-4xl font-black text-white">
            المخزون مش بيشتغل في عزلة
          </motion.h2>
          <motion.p variants={fadeUp(0.08)} className="text-slate-400 text-base max-w-xl mx-auto">
            كل وحدة في مالي-OBS بتتكامل مع المخزون تلقائياً — بدون إدخال يدوي مكرر.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {RELATED_MODULES.map((mod, i) => (
            <motion.div key={mod.id} variants={fadeUp(i * 0.06)}>
              <Link
                to={`/features/${mod.id}`}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-ocean-800/35 border border-white/[0.07] hover:border-white/[0.16] hover:bg-ocean-800/55 transition-all duration-200"
              >
                <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${mod.bg} ${mod.color}`}>
                  <mod.icon size={18} strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white/90 font-bold text-sm">{mod.title}</span>
                    <ChevronRight size={13} className="text-slate-600 group-hover:text-brand-green group-hover:translate-x-[-2px] transition-all duration-200 shrink-0" />
                  </div>
                  <p className="text-slate-500 text-xs leading-snug">{mod.desc}</p>
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
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-ocean-800/40 backdrop-blur-sm px-8 py-14 flex flex-col items-center text-center gap-6"
          style={{ boxShadow: `inset 0 0 80px ${ACCENT}0.04), 0 32px 80px rgba(0,0,0,0.45)` }}
        >
          <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${ACCENT}0.15) 0%, transparent 70%)` }} />
          <div className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, rgba(20,184,166,0.1) 0%, transparent 70%)` }} />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{ background: `linear-gradient(to right, transparent, ${ACCENT_HEX}, transparent)` }} />

          <div className="relative z-10 flex flex-col items-center gap-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-ocean-950"
              style={{ background: `linear-gradient(135deg, ${ACCENT_HEX}, ${ACCENT_DARK})` }}
            >
              <Boxes size={26} strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                جاهز تعرف بالضبط إيه اللي في مخزنك
                <br />
                <span style={{ color: ACCENT_HEX }}>وإيه اللي محتاج تشتريه؟</span>
              </h2>
              <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
                تواصل معنا وسنُعدّ نسختك من مالي-OBS خلال ٢٤ ساعة.
                أول شهر تجربة كاملة بدون أي التزام.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href={WHATSAPP_CTA_URL}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-ocean-950 font-extrabold text-sm hover:scale-[1.04] active:scale-100 transition-all duration-200"
                style={{ background: `linear-gradient(135deg, ${ACCENT_HEX}, ${ACCENT_DARK})`, boxShadow: ACCENT_GLOW }}
              >
                تواصل معنا للبدء
                <ArrowLeft size={14} />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-slate-700 text-slate-300 font-bold text-sm hover:border-brand-green/50 hover:text-brand-green hover:bg-brand-green/5 transition-all duration-200"
              >
                شوف باقي المميزات
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Back strip ───────────────────────────────────────────────────────────────

function BackStrip() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 pt-8 pb-0">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-brand-green transition-colors duration-200"
      >
        <ArrowLeft size={14} />
        الرئيسية
      </Link>
    </div>
  )
}

// ─── Page root ────────────────────────────────────────────────────────────────

export default function InventoryPage() {
  return (
    <div className="bg-ocean-900 font-cairo" dir="rtl">
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
