/**
 * AdsPage.tsx — Dedicated marketing page for the Ads (الحملات الإعلانية) module.
 *
 * Sections:
 *   1. Hero
 *   2. Pain-Point Stat Strip
 *   3. Value Proposition (12 cards)
 *   4. Interactive Walkthrough (4 Tabs)
 *   5. Deep-Dive FAQ
 *   6. Recommended Modules
 *   7. CTA
 *
 * Accent: fuchsia — #ec4899 / #db2777
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Megaphone,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Bell,
  DollarSign,
  Target,
  Layers,
  Wallet,
  Boxes,
  Truck,
  FileText,
  LayoutDashboard,
  Copy,
  Filter,
  Calendar,
  PauseCircle,
  Coins,
  Activity,
  MousePointerClick,
  Package,
} from 'lucide-react'

// ─── Accent colour tokens ─────────────────────────────────────────────────────

const ACCENT      = 'rgba(236,72,153,'    // fuchsia-500 / pink-500
const ACCENT_HEX  = '#ec4899'
const ACCENT_DIM  = 'rgba(236,72,153,0.12)'
const ACCENT_DARK = '#db2777'
const ACCENT_GLOW = '0 0 28px rgba(236,72,153,0.40)'

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
      style={{ color: ACCENT + '0.9)' }}
    >
      {children}
    </span>
  )
}

// ─── Back strip ───────────────────────────────────────────────────────────────

function BackStrip() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 pb-2 pt-4">
      <Link
        to="/#features"
        className="inline-flex items-center gap-2 text-sm text-ocean-400 hover:text-fuchsia-400 transition-colors"
      >
        <ArrowLeft size={15} />
        العودة إلى جميع الوحدات
      </Link>
    </div>
  )
}

// ─── 1. HERO ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute -top-24 right-1/4 w-[680px] h-[680px] rounded-full blur-3xl opacity-[0.10]"
        style={{ background: `radial-gradient(circle, ${ACCENT_HEX} 0%, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute top-56 left-0 w-80 h-80 rounded-full blur-3xl opacity-[0.07]"
        style={{ background: `radial-gradient(circle, #f472b6 0%, transparent 70%)` }}
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
                <Megaphone size={15} />
                الحملات الإعلانية والتحليلات
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.05)}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white"
              style={{ lineHeight: '1.22' }}
            >
              اعرف أي حملة{' '}
              <span style={{ color: ACCENT_HEX }}>تُربحك — وأيها تُحرق أموالك.</span>
              <br />
              ROAS. CPA.{' '}
              <span className="text-ocean-400">تنبيه MaxCPO تلقائي.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeUp(0.1)}
              className="text-base sm:text-lg text-ocean-300 leading-relaxed max-w-xl"
            >
              ٦ مؤشرات أداء إعلاني — مستمدة من طلباتك الحقيقية المرتبطة بكل حملة على
              Facebook وGoogle وTikTok وSnapchat. تحليل يومي وشهري. تنبيهات CPO تلقائية.
              لا تخمين — قرارات مبنية على بيانات.
            </motion.p>

            {/* Micro-stat pills */}
            <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-3">
              {[
                { label: 'ROAS من طلباتك الحقيقية', icon: <TrendingUp size={14} /> },
                { label: 'تنبيه MaxCPO تلقائي', icon: <Bell size={14} /> },
                { label: 'يومي وشهري تلقائياً', icon: <BarChart3 size={14} /> },
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
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-fuchsia-500/40 hover:text-fuchsia-400 transition-all duration-200"
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
              <div
                className="absolute top-0 inset-x-0 h-0.5 z-10"
                style={{ background: `linear-gradient(90deg, transparent, ${ACCENT_HEX}, transparent)` }}
              />
              <img
                src="./assets/ads-1-hero.png"
                alt="لوحة تحليلات الإعلانات — ROAS وCPA وأداء الحملات"
                width={780}
                height={480}
                loading="eager"
                className="block w-full h-auto object-cover"
              />
            </div>

            {/* Floating badge — ROAS */}
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
                <TrendingUp size={16} style={{ color: '#4ade80' }} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-ocean-400">ROAS — حملة Facebook</span>
                <span className="text-sm font-bold text-white">إيراد ÷ إنفاق إعلاني</span>
              </div>
            </motion.div>

            {/* Floating badge — CPO alert */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="absolute -top-5 -right-5 rounded-xl border border-ocean-700 bg-ocean-900/90 px-4 py-3 shadow-xl backdrop-blur-md flex items-center gap-3"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ background: 'rgba(251,113,133,0.15)' }}
              >
                <Bell size={16} style={{ color: '#fb7185' }} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-ocean-400">تنبيه MaxCPO</span>
                <span className="text-sm font-bold" style={{ color: '#fb7185' }}>CPA تجاوز الحد المضبوط!</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── 2. PAIN STRIP ───────────────────────────────────────────────────────────

const PAINS = [
  {
    stat: '٦٠٪',
    text: 'من أصحاب المتاجر لا يعرفون ROAS حملاتهم الحقيقي — لأنهم يقيسون "نقرات" لا طلبات مُسلَّمة داخل النظام. الفرق بين الرقمين يمكن أن يقلب قرار الصرف رأساً على عقب.',
    icon: <AlertTriangle size={22} />,
  },
  {
    stat: 'يومياً',
    text: 'تدخل أرقاماً إعلانية يدوياً في إكسيل لأن منصتك لا تربط الإنفاق بالطلبات. هنا: أدخل الإنفاق مرة — النظام يحسب ROAS وCPA وCPI من طلباتك الفعلية تلقائياً.',
    icon: <Copy size={22} />,
  },
  {
    stat: '٣x',
    text: 'متوسط تضخم ROAS المُعلَن من المنصات الإعلانية مقارنةً بالواقع — لأنها تحتسب كل نقرة وزيارة. هنا ROAS = إيراد الطلبات المرتبطة ÷ الإنفاق الفعلي — ببيانات متجرك أنت.',
    icon: <TrendingDown size={22} />,
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
              <p className="mb-2 text-4xl font-black" style={{ color: ACCENT_HEX }}>{p.stat}</p>
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
    icon: <TrendingUp size={20} />,
    title: 'ROAS حقيقي من طلباتك — لا من النقرات',
    body: 'ROAS = Revenue ÷ Spend. Revenue مأخوذ من Orders + ArchivedOrders المرتبطة بكل حملة عبر CampaignId — بعد استبعاد الملغى. ليس إحصاء المنصة الإعلانية — هذا رقم صندوقك الفعلي.',
  },
  {
    icon: <Bell size={20} />,
    title: 'تنبيه MaxCPO — إنذار قبل أن تخسر',
    body: 'حدِّد MaxCPO لكل حملة (الحد الأقصى المسموح لتكلفة الطلب). عند كل إدخال إنفاق: النظام يحسب CPA = TotalSpend ÷ Orders — لو تجاوز MaxCPO يُنشئ SystemAlert تلقائياً. تنبيه واحد يومياً لكل حملة لتجنب الإزعاج.',
  },
  {
    icon: <MousePointerClick size={20} />,
    title: 'CPA وCPI — تكلفة الطلب والمنتج',
    body: 'CPA = Spend ÷ Orders (تكلفة الحصول على طلب). CPI = Spend ÷ Items (تكلفة الحصول على قطعة واحدة). Items يُحسَب من OrderItems.Quantity — UNION ALL على live + archived في استعلام واحد. قرِّر بمستوى القطعة لا الطلب.',
  },
  {
    icon: <Activity size={20} />,
    title: 'Campaign Delivery Rate — نسبة التسليم الحقيقية',
    body: 'Delivered + PartiallyDelivered من إجمالي طلبات الحملة × ١٠٠. اعرف أي حملة تجلب عملاء يستلمون — وأيها تجلب "مرتجعات". سلاح أسراري لتحسين الاستهداف.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'مخططات يومية/شهرية تلقائية',
    body: 'الفترة ≤ ٣٠ يوماً؟ عرض يومي. أكثر من ٣٠ يوماً؟ تجميع شهري في PostgreSQL (TO_CHAR/GROUP BY) — لا materialization للصفوف قبل التجميع. Bar chart أو Line chart بزر واحد.',
  },
  {
    icon: <Layers size={20} />,
    title: 'Platform Breakdown — Facebook vs TikTok vs Google',
    body: 'الإنفاق والإيراد والطلبات وROAS وCPA لكل منصة مستقلةً. المنصات مصدرها نفس الطلبات المرتبطة. اعرف أين يُدر إنفاقك أعلى عائد — وانقل ميزانيتك بثقة.',
  },
  {
    icon: <Target size={20} />,
    title: 'Budget Exceeded — رادار ميزانية الحملة',
    body: 'كل حملة لها Budget محدَّد. عند كل حفظ إنفاق يومي: يُقارَن TotalSpend بالـ Budget — إذا تجاوز يظهر تحذير أحمر على الحملة فوراً. لا تصحَّ ميزانية بعد انتهاء الحملة.',
  },
  {
    icon: <Copy size={20} />,
    title: 'Copy Previous Day — ادخال سريع بنقرة',
    body: 'يوم الإنفاق مكرَّر من أمس؟ اضغط "Copy Previous Day" — النظام يجلب إنفاق أمس ويملأ بيانات اليوم تلقائياً لنفس الحملات. يُعرَض رسالة إن لم توجد بيانات سابقة بدلاً من صمت.',
  },
  {
    icon: <Coins size={20} />,
    title: 'Ad Charge كمصروف محمي',
    body: 'سجِّل شحن منصة إعلانية (Top-up) كمصروف محمي — يُحفَظ في جدول المصروفات بتصنيف Ads وعلامة is_auto=1. لا يمكن تعديله لاحقاً. التكلفة تظهر في Burn Rate ضمن التقارير المالية.',
  },
  {
    icon: <Filter size={20} />,
    title: 'فلترة متعددة المحاور في ثانية',
    body: 'فلتر بالتاريخ + المنصة + اسم الحملة — يعمل على كل الجداول والمخططات في آنٍ واحد. البحث يُقيَّد بـ ١٠٠ حرف ونطاق ٣٦٦ يوماً لحماية أداء قاعدة البيانات.',
  },
  {
    icon: <PauseCircle size={20} />,
    title: 'إيقاف/تشغيل الحملة بمفتاح واحد',
    body: 'كل حملة لها Status: Active أو Paused. الحملات المتوقفة لا تظهر في شاشة الإدخال اليومي. التبديل فوري — UpdateAsync بدون إعادة تحميل الصفحة. EndDate تُضبَط تلقائياً عند الإيقاف.',
  },
  {
    icon: <Calendar size={20} />,
    title: 'Timeline Analytics — منحنى ROAS وCPA يومياً',
    body: 'Endpoint مستقل للجدول الزمني: per-day Spend + Revenue + ROAS + CPA للمقارنة بين أيام الأسبوع. اكتشف بأي يوم إنفاقك أكثر كفاءة — وانظم إطلاق حملاتك بناءً عليه.',
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
            <SectionLabel>لماذا إدارة الإعلانات؟</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white mb-4">
            لأن كل جنيه إعلاني{' '}
            <span style={{ color: ACCENT_HEX }}>يستحق أن يُقاس بدقة.</span>
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 max-w-2xl mx-auto text-base leading-relaxed">
            ربط بيانات الإنفاق الإعلاني بطلبات متجرك الحقيقية — هكذا تعرف من أي حملة جاء كل
            طلب، ما تكلفته، وما نسبة تسليمه. قرارات تسويقية مبنية على واقع — لا على وهم المنصة.
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
    id: 'campaigns',
    label: 'إدارة الحملات',
    icon: <Megaphone size={16} />,
    steps: [
      {
        title: 'أضف حملتك: منصة، ميزانية، MaxCPO',
        body: 'اسم الحملة + المنصة (Facebook/Google/TikTok/Snapchat) + الميزانية الكلية. الجديد: MaxCPO — حدِّد الحد الأقصى لتكلفة الطلب. عند تجاوزه: SystemAlert تُنشأ تلقائياً— بشرط: لا يوجد تنبيه آخر غير مقروء لنفس الحملة اليوم.',
      },
      {
        title: 'تفعيل/إيقاف بمفتاح واحد',
        body: 'كل حملة لها Status Switch. OFF = Paused → تُضبَط EndDate تلقائياً ولا تظهر في الإدخال اليومي. ON = Active → تُمسَح EndDate وتعود للعمل. الحملات المتوقفة لا تُلوِّث تحليلاتك بإنفاق صفري.',
      },
      {
        title: 'حماية البيانات عند الحذف',
        body: 'Soft Delete: الحملات المرتبطة بطلبات أو إنفاق لا تُحذَف — يُرفَض الطلب مع رسالة واضحة. حملات بدون بيانات تُحذَف بعلامة IsDeleted + DeletedAt + Timestamp — لا حذف فعلي من قاعدة البيانات.',
      },
      {
        title: 'ربط الحملة بالطلبات عبر CampaignId',
        body: 'كل طلب يحمل CampaignId المرتبط بحملة. الطلبات الحية والمؤرشفة تُحتسَب معاً في التحليلات. في حالة وجود نفس الطلب في المصدرين: الطلب الحي يأخذ الأولوية (Dictionary deduplication — Live wins).',
      },
    ],
    imgSrc: './assets/ads-2-list.png',
    imgAlt: 'إدارة الحملات — جدول الحملات مع Budget وMaxCPO والحالة',
  },
  {
    id: 'spend',
    label: 'إدخال الإنفاق اليومي',
    icon: <DollarSign size={16} />,
    steps: [
      {
        title: 'مصفوفة الإنفاق: كل حملة في سطر',
        body: 'اختر التاريخ — يظهر سطر لكل حملة Active فقط. أدخل الإنفاق لكل حملة. القيم السالبة تُعامَل كـ ٠. القيم الصفرية مع وجود سجل قديم تُحدَّث. القيم الصفرية بدون سجل لا تُدرَج — لا إدخالات وهمية.',
      },
      {
        title: 'Copy Previous Day — إنتاجية عالية',
        body: 'اضغط "Copy Previous Day" فيملأ النظام إنفاق أمس لنفس الحملات. إن لم تكن هناك بيانات أمس أو كانت كلها أصفاراً: "No previous day data" — رسالة واضحة بدلاً من صمت محبط.',
      },
      {
        title: 'Ad Charge — شحن منصة كمصروف محمي',
        body: 'سجِّل شحن حساب إعلاني (Facebook Ads Top-up مثلاً): اختر المنصة، أدخل المبلغ والتاريخ. يُحفَظ كمصروف في جدول Expenses بتصنيف Ads وعلامة is_auto=1 — لا يمكن تعديله لاحقاً. يظهر في Burn Rate بالتقارير المالية.',
      },
      {
        title: 'تحقق من الميزانية عند كل حفظ',
        body: 'بعد حفظ الإنفاق: النظام يحسب TotalSpend لكل حملة ويُقارن بـ Budget. عند التجاوز: تحذير أحمر على صف الحملة. التحقق من MaxCPO يعمل بالتزامن: CPA = TotalSpend ÷ Orders — إن تجاوز الحد يُنبِّه.',
      },
    ],
    imgSrc: './assets/ads-3-action.png',
    imgAlt: 'إدخال الإنفاق اليومي — مصفوفة الحملات مع Copy Previous Day',
  },
  {
    id: 'analytics',
    label: 'التحليلات والـ ROAS',
    icon: <BarChart3 size={16} />,
    steps: [
      {
        title: '٦ KPIs مرتبطة بطلباتك الحقيقية',
        body: 'Total Spend، Revenue (OrderPrice أو TotalAmount fallback)، ROAS، CPA، CPI، Campaign Delivery Rate — كلها مشتقة من الطلبات المرتبطة بـ CampaignId في الفترة المحددة. الطلبات الملغاة مستبعدة. Archived Orders تُعدُّ كالحية.',
      },
      {
        title: 'Platform Breakdown — قارن Facebook بـ TikTok',
        body: 'جدول المنصات: Spend، Orders، Revenue، ROAS، CPA لكل منصة. ROAS أخضر عند ≥٢ وأحمر دون ذلك — نظرة واحدة تكفي. تصفية بالمنصة تُطبَّق على الجداول والمخططات معاً.',
      },
      {
        title: 'مخططات تكيَّفية: يومي أو شهري',
        body: 'نطاق ≤ ٣٠ يوماً: بيانات يومية. نطاق > ٣٠ يوماً: تجميع شهري في PostgreSQL (GROUP BY Year*100+Month). أربعة مخططات: Spend، Revenue، ROAS، CPA — يمكن عرضها كبار أو خطوط. لا حاجة لإعادة تحميل عند التبديل.',
      },
      {
        title: 'Campaign Performance Table — قرار بنقرة',
        body: 'جدول لكل حملة بجميع KPIs: Spend، Revenue، Orders، Items، ROAS، CPA، CPI، Delivery Rate. مرتَّب تنازلياً بالإنفاق. اضغط على أي عمود للفرز. فلترة بالمنصة والاسم تعمل فورياً. حملات بدون إنفاق وإيراد مستبعدة من الجدول.',
      },
    ],
    imgSrc: './assets/ads-4-details.png',
    imgAlt: 'التحليلات والـ ROAS — KPIs ومخططات تكيفية وجدول أداء الحملات',
  },
  {
    id: 'alerts',
    label: 'التنبيهات والتصدير',
    icon: <Bell size={16} />,
    steps: [
      {
        title: 'MaxCPO Alert — نظام إنذار CPA ذكي',
        body: 'لكل حملة MaxCPO: النظام يحسب CPA = Total Spend ÷ (Live Orders + Archived Orders). إذا CPA > MaxCPO: يُنشئ SystemAlert من نوع Warning برسالة صريحة مثل: "CPA (٤٥.٢) تجاوز MaxCPO (٣٠) لحملة \'Ramadan Campaign\'". فلتر مانع للتكرار اليومي.',
      },
      {
        title: 'Budget Warning — لا تتجاوز بدون علم',
        body: 'عند كل حفظ إنفاق يومي: يُحسَب TotalSpend من DailyAdSpends بـ GroupBy + SumAsync في PostgreSQL — لا تحميل صفوف للمقارنة. كل حملة تجاوزت ميزانيتها تظهر في رسالة التحذير مجمَّعةً: "Campaigns X، Y تجاوزت ميزانياتها".',
      },
      {
        title: 'Timeline Analytics — منحنى كفاءتك الإعلانية',
        body: 'Endpoint مستقل /analytics/timeline: per-day ROAS وCPA وRevenue وSpend في نطاق زمني مخصَّص. مثالي للمقارنة: هل كفاءتي الإعلانية تحسَّنت بعد تغيير الإبداعات؟ هل يوم السبت أفضل من الإثنين؟',
      },
      {
        title: 'PDF Export — تقرير جاهز للعرض',
        body: 'يُولِّد تقرير PDF من التحليلات الحالية (مع الفلاتر المطبَّقة): KPIs، Platform Breakdown، Campaign Performance Table — باسم الشركة وتاريخ التوليد. مناسب للعرض على العميل أو مدير التسويق.',
      },
    ],
    imgSrc: './assets/ads-5-extras.png',
    imgAlt: 'تنبيهات MaxCPO وBudget Warning وTimeline Analytics وتصدير PDF',
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
            من إنفاق إعلاني إلى{' '}
            <span style={{ color: ACCENT_HEX }}>قرار تسويقي مبني على بيانات</span>
          </motion.h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border transition-all duration-200 ${
                active === i
                  ? 'text-white border-transparent shadow-md'
                  : 'border-ocean-700 text-ocean-400 hover:border-fuchsia-500/40 hover:text-fuchsia-400'
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
    q: 'كيف يُحسَب ROAS من طلبات متجري لا من بيانات المنصة؟',
    a: 'كل طلب يحمل CampaignId. عند تحليل الإعلانات: يُجلَب كل طلب (حي + مؤرشَف) مرتبط بحملة في نطاق التاريخ، مستبعداً الملغى. Revenue = OrderPrice (أو TotalAmount كـ fallback). ROAS = SUM(Revenue) ÷ TotalSpend. لو كان بعض الطلبات في الأرشيف والآخر حي لنفس الطلب — الحي يأخذ الأولوية تجنباً للعد المزدوج.',
  },
  {
    q: 'ما هو MaxCPO ومتى يُرسَل التنبيه؟',
    a: 'MaxCPO هو الحد الأقصى لتكلفة الطلب (Cost Per Order) الذي تقبله لحملة معينة. عند كل حفظ إنفاق يومي: النظام يحسب CPA = TotalSpend ÷ (Live Orders + Archived Orders). إذا CPA > MaxCPO: يُنشئ SystemAlert من نوع Warning. شرط: لا يوجد تنبيه غير مقروء لنفس الحملة اليوم — يمنع التنبيهات المتكررة التي تُزعج.',
  },
  {
    q: 'لماذا تظهر الحملات المتوقفة في التحليلات لكن لا في الإدخال اليومي؟',
    a: 'الإدخال اليومي يُظهر الحملات النشطة فقط (Status = Active) — منطقي لأنك لا تنفق على حملات متوقفة. التحليلات تُظهر كل الحملات للفترة المحددة لأن بيانات الإنفاق والطلبات التاريخية موجودة. يمكنك فلترة بمنصة أو اسم لتضييق النتائج.',
  },
  {
    q: 'هل يؤثر نطاق التاريخ على طريقة عرض المخططات؟',
    a: 'نعم — تلقائياً: نطاق ≤ ٣٠ يوماً → عرض يومي (GROUP BY Date). نطاق > ٣٠ يوماً → تجميع شهري في PostgreSQL (GROUP BY Year*100+Month). كلا الوضعين يحسبان Spend وRevenue وROAS وCPA في SQL — لا materialization للصفوف للتجميع. البار وال Line chart متاحان في كلا الوضعين.',
  },
  {
    q: 'ما الفرق بين "New Charge" وإدخال الإنفاق اليومي؟',
    a: 'Daily Spend: يسجِّل إنفاقك الإعلاني الفعلي على كل حملة يومياً — يُستخدَم في حساب ROAS وCPA. New Charge: يسجِّل شحن حسابك الإعلاني على المنصة (Top-up) كمصروف في جدول Expenses بتصنيف Ads — يُؤثِّر على Burn Rate في التقارير المالية ولا يمكن تعديله. الأول قابل للتحديث؛ الثاني محمي.',
  },
  {
    q: 'كيف يُحسَب CPI (Cost Per Item)؟',
    a: 'CPI = TotalSpend ÷ TotalItems. TotalItems = SUM(OrderItems.Quantity) لكل الطلبات المرتبطة بالحملة. يُستخدَم UNION ALL على live OrderItems + archived OrderItems في استعلام واحد لتجنب round-trips. لو حملة تبيع منتجات متعددة لكل طلب — CPI يعطيك التكلفة الحقيقية بمستوى القطعة.',
  },
  {
    q: 'ما الحد الأقصى لنطاق التاريخ في التحليلات؟',
    a: '٣٦٦ يوماً (سنة كاملة). هذا القيد مفروض server-side في Controller قبل أي معالجة — يحمي أداء قاعدة البيانات من استعلامات ثقيلة. عنصر البحث النصي محدود بـ ١٠٠ حرف. كلا القيدين يُعيدان BadRequest مع رسالة واضحة.',
  },
  {
    q: 'هل يمكن تتبع حملة على أكثر من منصة؟',
    a: 'كل حملة مرتبطة بمنصة واحدة. لتتبع نفس الإعلان على فيسبوك وتيك توك: أنشئ حملتين منفصلتين بنفس الاسم لكل منصة — Platform Breakdown يُقارن بينهما مباشرةً في لوحة التحليلات.',
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
            ROAS حقيقي —{' '}
            <span style={{ color: ACCENT_HEX }}>يأتي من طلباتك أنت.</span>
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
                  style={{
                    transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: openIdx === i ? ACCENT_HEX : undefined,
                  }}
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
    href: '/#/features/reports',
    icon: <FileText size={20} />,
    title: 'التقارير المالية',
    body: 'Ad Charges تظهر في Burn Rate وTotal Expenses في التقارير. Campaign ROAS وCPO يُكمِّلان تقرير الـ Financial Settlement.',
  },
  {
    href: '/#/features/dashboard',
    icon: <LayoutDashboard size={20} />,
    title: 'لوحة القيادة',
    body: 'Campaign Performance مخطط في لوحة القيادة يسحب نفس بيانات ROAS وCPO مباشرةً — رؤية سريعة بدون الدخول للوحدة.',
  },
  {
    href: '/#/features/expenses',
    icon: <Wallet size={20} />,
    title: 'المصروفات والخزينة',
    body: 'Ad Charges المسجَّلة كـ New Charge تظهر في المصروفات تلقائياً بتصنيف Ads is_auto=1. تؤثر على الخزينة ورصيدها مباشرةً.',
  },
  {
    href: '/#/features/shipping',
    icon: <Truck size={20} />,
    title: 'الشحن',
    body: 'Campaign Delivery Rate مشتق من حالات الشحن (Delivered + PartiallyDelivered). تحسين معدل التسليم يُحسِّن هذا المقياس مباشرةً.',
  },
  {
    href: '/#/features/inventory',
    icon: <Boxes size={20} />,
    title: 'المخزون',
    body: 'CPI (تكلفة القطعة الإعلانية) مرتبط بعدد OrderItems. ربط تكلفة المنتج بتكلفة اكتسابه من الإعلانات يكشف الهامش الحقيقي.',
  },
  {
    href: '/#/features/preparation',
    icon: <Package size={20} />,
    title: 'التحضير',
    body: 'الطلبات القادمة من حملات ذات ROAS عالٍ لها أولوية في التحضير — التكامل بين الإعلانات والتوزيع يُعظِّم سرعة التسليم.',
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
            الإعلانات{' '}
            <span style={{ color: ACCENT_HEX }}>تُغذِّي كل القرارات المالية والتشغيلية</span>
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
                className="group relative flex flex-col gap-3 rounded-2xl border border-ocean-700/50 bg-ocean-900/60 p-6 overflow-hidden transition-all duration-300 hover:border-fuchsia-500/40 hover:-translate-y-1 hover:shadow-lg block"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${ACCENT_HEX}, transparent)` }}
                />
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: ACCENT_DIM, color: ACCENT_HEX }}
                >
                  {r.icon}
                </div>
                <div>
                  <p className="font-bold text-white mb-1 flex items-center gap-2">
                    {r.title}
                    <ChevronRight size={14} className="text-ocean-500 group-hover:text-fuchsia-400 transition-colors" />
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
          className="relative flex flex-col items-center gap-6"
        >
          <div
            className="pointer-events-none absolute w-[500px] h-[250px] rounded-full blur-3xl opacity-[0.14] -z-10"
            style={{ background: `radial-gradient(ellipse, ${ACCENT_HEX} 0%, transparent 70%)` }}
          />

          <motion.div variants={fadeUp()}>
            <SectionLabel>ابدأ الآن</SectionLabel>
          </motion.div>

          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white leading-tight">
            هل تعرف أي حملتك{' '}
            <span style={{ color: ACCENT_HEX }}>تُربحك اليوم؟</span>
          </motion.h2>

          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 text-base max-w-xl leading-relaxed">
            لا تكتفِ بأرقام المنصة — اربط إنفاقك الإعلاني بطلباتك الحقيقية. اعرف ROAS كل حملة،
            تكلفة كل طلب، ونسبة تسليمه — كلها من نفس النظام الذي تُدير فيه متجرك.
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
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-fuchsia-500/40 hover:text-fuchsia-400 transition-all duration-200"
            >
              استعرض الوحدات
            </Link>
          </motion.div>

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

export default function AdsPage() {
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
