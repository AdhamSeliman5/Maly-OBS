/**
 * DebtsPage.tsx — Dedicated marketing page for the Debts (المديونيات والمستحقات) module.
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
 * Accent: indigo — #6366f1 / #4f46e5
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
  Landmark,
  TrendingUp,
  TrendingDown,
  ShieldCheck,
  Lock,
  History,
  Bell,
  BarChart3,
  RefreshCw,
  Zap,
  Building2,
  ArrowRightLeft,
  Users,
  Wallet,
  Boxes,
  Truck,
  Factory,
  BarChart2,
  Clock,
  Scale,
  Coins,
} from 'lucide-react'

// ─── Accent colour tokens ─────────────────────────────────────────────────────

const ACCENT      = 'rgba(99,102,241,'   // indigo-500
const ACCENT_HEX  = '#6366f1'
const ACCENT_DIM  = 'rgba(99,102,241,0.12)'
const ACCENT_DARK = '#4f46e5'
const ACCENT_GLOW = '0 0 28px rgba(99,102,241,0.42)'

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

// ─── Back strip ───────────────────────────────────────────────────────────────

function BackStrip() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 pb-2 pt-4">
      <Link
        to="/#features"
        className="inline-flex items-center gap-2 text-sm text-ocean-400 hover:text-indigo-400 transition-colors"
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
        className="pointer-events-none absolute -top-20 right-1/3 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.13]"
        style={{ background: `radial-gradient(circle, ${ACCENT_HEX} 0%, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute top-48 left-0 w-72 h-72 rounded-full blur-3xl opacity-[0.08]"
        style={{ background: `radial-gradient(circle, #818cf8 0%, transparent 70%)` }}
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
                <Landmark size={15} />
                وحدة المديونيات والمركز المالي
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.05)}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-white"
              style={{ lineHeight: '1.22' }}
            >
              اعرف مركزك المالي{' '}
              <span style={{ color: ACCENT_HEX }}>بالجنيه والقرش</span>
              <br />
              لحظياً —{' '}
              <span className="text-ocean-400">دون أي حسابات يدوية.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeUp(0.1)}
              className="text-base sm:text-lg text-ocean-300 leading-relaxed max-w-xl"
            >
              تتبّع كل من يدين لك ومن تدين له، سوِّ الديون كاملاً أو جزئياً، راقب الأصول الثابتة
              وبع أو تخلَّص منها — كله في لوحة مالية واحدة تُحدَّث من أربع جهات في وقت واحد.
            </motion.p>

            {/* Micro-stat pills */}
            <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-4">
              {[
                { label: '٤ مصادر بيانات في استعلام متوازٍ', icon: <Zap size={14} /> },
                { label: 'تنبيهات تلقائية قبل ٣ أيام من الاستحقاق', icon: <Bell size={14} /> },
                { label: 'تقرير عمر الديون بـ ٥ نطاقات زمنية', icon: <BarChart3 size={14} /> },
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
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-indigo-500/40 hover:text-indigo-400 transition-all duration-200"
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
                src="./assets/dbt-1-hero.png"
                alt="لوحة المديونيات والمركز المالي"
                width={780}
                height={480}
                loading="eager"
                className="block w-full h-auto object-cover"
              />
            </div>

            {/* Floating badge — Net Position */}
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
                <Scale size={16} style={{ color: ACCENT_HEX }} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-ocean-400">صافي المركز المالي</span>
                <span className="text-sm font-bold" style={{ color: '#4ade80' }}>+٣٨,٧٥٠ جنيه</span>
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
    stat: '٥٨٪',
    text: 'من أصحاب الأعمال الصغيرة يتذكرون الديون بالملاحظات الورقية أو الموبايل — وينسون متابعة التحصيل.',
    icon: <AlertTriangle size={22} />,
  },
  {
    stat: '١ من كل ٤',
    text: 'ديون مستحقة تمر ٩٠ يوماً دون أي متابعة — بسبب غياب تنبيهات تلقائية ورؤية مركزية للمواعيد.',
    icon: <Clock size={22} />,
  },
  {
    stat: '٤٢٪',
    text: 'من قرارات الشراء والتوسع تفشل لأن المدير لا يرى صافي مركزه المالي الحقيقي — يعتمد على تقدير لا على بيانات.',
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
    icon: <Zap size={20} />,
    title: 'لوحة مالية من ٤ مصادر في آنٍ واحد',
    body: 'عند فتح الصفحة يُطلق النظام ٤ استعلامات متوازية عبر IDbContextFactory (مسارات A/B/C/D): رصيد الشحن + قروض الموظفين، مجاميع الطلبات (Pipeline/In Shipping)، الأصول الثابتة + الديون الخارجية، ومستحقات الموظفين اليوم — Task.WhenAll يجمعها في أقل من ثانية.',
  },
  {
    icon: <Lock size={20} />,
    title: 'قفل صف لمنع التسابق على نفس الدين',
    body: 'عند التسوية أو إنشاء دين جديد لنفس الطرف، يُنفَّذ SELECT FOR UPDATE على صف الدين قبل أي قراءة للرصيد — يمنع تسويتَين متزامنتَين من الاعتماد على رصيد قديم ويضمن سلامة الحسابات.',
  },
  {
    icon: <ArrowRightLeft size={20} />,
    title: 'نتِّنج ذكي يجمع المديونيات لنفس الطرف',
    body: 'كل الديون مع نفس الجهة تُدمج في رصيد صافٍ واحد. مثال: إذا كان "محمد" يدين لك بـ ١٠٠٠ وأضفت دَين جديد ٤٠٠ جنيه، ينتهي برصيد ١٤٠٠ — أو إذا كان "John" مستحقاً ٥٠٠ وسدَّدت ٦٠٠، تتحوّل الطرف تلقائياً إلى دائن برصيد ١٠٠.',
  },
  {
    icon: <Coins size={20} />,
    title: 'انعكاس الاتجاه التلقائي عند الدفع الزائد',
    body: 'إذا سدَّد المستخدم أكثر من الرصيد المستحق، يُغلق النظام الدين الحالي ويُنشئ دَين جديد بالاتجاه المعاكس برصيد الفرق — مع قيدَين في دفتر الحركات: "Full Settlement" و"Overpayment Flip". لا يضيع أي قرش.',
  },
  {
    icon: <RefreshCw size={20} />,
    title: 'حماية البيانات القديمة (Optimistic Concurrency)',
    body: 'عند التسوية، يرسل العميل الرصيد الذي يراه. إذا تغيَّر الرصيد في قاعدة البيانات بين الفتح والتأكيد (بسبب دفعة متزامنة)، يرفض النظام العملية برسالة "الرصيد تغير، برجاء تحديث الصفحة" — لا فوضى في الحسابات أبداً.',
  },
  {
    icon: <History size={20} />,
    title: 'دفتر حركات كامل (DebtsLedger)',
    body: 'كل عملية — إنشاء، دفعة جزئية، تسوية كاملة، زيادة دفع، انعكاس اتجاه — تُسجَّل في DebtsLedger بـ: المبلغ، الرصيد بعد العملية، نوع المعاملة، التاريخ، والملاحظات. سجل غير قابل للتعديل.',
  },
  {
    icon: <Bell size={20} />,
    title: 'تنبيهات تلقائية يومية (Background Job)',
    body: 'DebtReminderService يعمل بشكل تلقائي كل ٢٤ ساعة، يمسح كل الديون النشطة لكل الشركات ويُنشئ: تنبيه "Warning" قبل ٣ أيام من الاستحقاق، وتنبيه "Critical" لكل دين متأخر — مرة واحدة فقط يومياً لكل دين.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'تقرير عمر الديون (Aging) بـ ٥ نطاقات',
    body: 'كل دَين مصنَّف في نطاق زمنيٍّ محسوب SQL: Current (ضمن المهلة)، ١-٣٠ يوم، ٣١-٦٠ يوم، ٦١-٩٠ يوم، +٩٠ يوم — مع شريط بصري ملوَّن لكل طرف يُظهر التوزيع الفوري بدون أي حسابات يدوية.',
  },
  {
    icon: <Building2 size={20} />,
    title: 'إدارة الأصول الثابتة باحترافية',
    body: 'سجِّل كل أصل ثابت بسعر الشراء وقيمته الحالية. عدِّل القيمة للإهلاك. بع الأصل فيُسجَّل إيراد في الخزينة، أو تخلَّص منه بقيمة صفر فيُسجَّل مصروف شطب — الخزينة تتحقق في كلتا الحالتين.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'محاكاة توقعات التحصيل (Forecast Simulator)',
    body: 'ضبِّط نسبة التسليم (Delivery Rate) من ٠٪ إلى ١٠٠٪ — النظام يُعيد حساب قيم Pipeline وIn Shipping المتوقعة فوراً. فعِّل أو أوقف Pipeline في الحسابات بمفتاح واحد. رؤية "يا ترى لو تحصّلنا ٨٠٪؟"',
  },
  {
    icon: <Scale size={20} />,
    title: 'صافي المركز المالي الحقيقي',
    body: '٥ مؤشرات دائماً أمامك: الأصول السائلة (مستحقات + توقعات + قروض الموظفين + رصيد الشحن)، الأصول الثابتة، الالتزامات، الصافي (= السائلة - الالتزامات)، والمتأخرات — لوحة مالية كاملة في ٥ أرقام.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'صلاحيات دقيقة لكل عملية',
    body: 'view / create / settle / delete / edit / admin — كل نقطة نهاية API مغطاة بـ RequirePermission مستقل. حتى بيع الأصول يتطلب صلاحية "admin". لا موظف يستطيع تجاوز ما خُصِّص له.',
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
            <SectionLabel>لماذا وحدة المديونيات؟</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white mb-4">
            مركزك المالي —{' '}
            <span style={{ color: ACCENT_HEX }}>محسوب بالكود، لا بالخبرة.</span>
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 max-w-2xl mx-auto text-base leading-relaxed">
            لا توجد "صورة تقريبية" هنا. كل رقم في لوحة المديونيات مشتَق من بيانات حقيقية موزَّعة
            على ٤ جداول — يُجمعها النظام في أقل من ثانية بدون أي حسابات يدوية من طرفك.
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
    id: 'dashboard',
    label: 'لوحة المركز المالي',
    icon: <Scale size={16} />,
    steps: [
      {
        title: '٥ مؤشرات مالية في ثانية واحدة',
        body: 'عند فتح الوحدة، يُطلق النظام ٤ مسارات قاعدة بيانات متوازية (A: الشحن + الموظفين، B: الطلبات، C: الأصول + الديون، D: مستحقات الموظفين اليوم) ويجمعها بـ Task.WhenAll. النتيجة: Liquid Assets، Fixed Assets، Liabilities، Net، وOverdue — في أقل من ثانية.',
      },
      {
        title: 'شريط التوقعات (Forecast Simulator)',
        body: 'Delivery Rate: شريط متحرك من ٠٪ إلى ١٠٠٪. مثال: اضبطه على ٧٥٪ فيُعيد النظام حساب البضائع في شحن والـ Pipeline بنسبة التوقع الجديدة. فعِّل/أوقف Pipeline بمفتاح لاستبعاده من الأصول السائلة كلياً.',
      },
      {
        title: 'تلوين الديون المتأخرة',
        body: 'كل دين تجاوز موعد استحقاقه يظهر بشريط أحمر على اليسار وتاريخ استحقاق ملوَّن بالأحمر مع عدد أيام التأخير — لا تحتاج للبحث عن المتأخرات، النظام يُبرزها تلقائياً.',
      },
      {
        title: 'تبويبات: Assets / Liabilities / Fixed Assets',
        body: 'تبويب Assets: كل المستحقات (pipeline، شحن، موظفون، يدوية). تبويب Liabilities: كل ما تدين به. تبويب Fixed Assets: قائمة الأصول مع سعر الشراء، القيمة الحالية، وأزرار التحديث والبيع.',
      },
    ],
    imgSrc: './assets/dbt-2-list.png',
    imgAlt: 'لوحة المركز المالي مع ٥ مؤشرات وشريط التوقعات',
  },
  {
    id: 'debts',
    label: 'إضافة وتسوية الديون',
    icon: <Coins size={16} />,
    steps: [
      {
        title: 'إضافة دين جديد مع الحماية من التسابق',
        body: 'اكتب اسم الطرف — اقتراحات من السجل الموجود. أدخل المبلغ واختر نوع الدين (مستحق لي / عليّ). إذا كان هناك دين سابق لنفس الطرف، يُنتِّج النظام الرصيد تلقائياً بعد قفل الصف بـ SELECT FOR UPDATE.',
      },
      {
        title: 'خيار "تسجيل النقدية في الخزينة"',
        body: 'إذا أعطيت أحداً قرضاً نقدياً (Receivable + checked): يُسجَّل مصروف في خزينتك — تتحقق الخزينة أولاً. إذا استلمت سلفة (Payable + checked): يُسجَّل إيراد. كل دين نقدي له أثر مالي فوري.',
      },
      {
        title: 'تسوية كاملة أو جزئية',
        body: 'انقر Settle — النظام يعرض الرصيد الحالي ويمكنك السداد بمبلغ أقل (Partial Payment) أو المبلغ الكامل (Full Settlement). إذا دفعت أكثر، يُنشئ دَيناً معاكساً برصيد الفرق تلقائياً.',
      },
      {
        title: 'دفتر الحركات الكامل لكل دين',
        body: 'انقر History على أي دين لرؤية كل معاملاته: التاريخ، النوع (Payment / Settlement / Direction Flip / Overpayment Flip)، المبلغ، الرصيد بعد العملية، الملاحظات — سجل كامل لا يُعدَّل.',
      },
    ],
    imgSrc: './assets/dbt-3-action.png',
    imgAlt: 'نافذة إضافة وتسوية الديون مع النتِّنج التلقائي',
  },
  {
    id: 'aging',
    label: 'تقرير عمر الديون',
    icon: <BarChart3 size={16} />,
    steps: [
      {
        title: '٥ نطاقات زمنية لكل طرف',
        body: 'كل جهة ديون لها شريط ملوَّن: أخضر (ضمن المهلة)، أصفر (١-٣٠ يوم)، برتقالي (٣١-٦٠)، أحمر فاتح (٦١-٩٠)، أحمر داكن (+٩٠ يوم). يرى المدير فوراً أين تكمن المشكلة دون البحث في السجلات.',
      },
      {
        title: 'مجاميع بالعمود والإجمالي الكلي',
        body: 'أسفل التقرير جدول بمجاميع كل نطاق زمني عبر كل الأطراف والإجمالي الكلي لكل الديون النشطة — أرقام مجمَّعة SQL بدون أي حسابات JavaScript.',
      },
      {
        title: 'تنبيهات قبل الاستحقاق بـ ٣ أيام (تلقائي)',
        body: 'DebtReminderService يعمل كل ٢٤ ساعة تلقائياً ويُنشئ تنبيه "Warning" لكل دين يستحق خلال ٣ أيام، وتنبيه "Critical" لكل دين متأخر — مرة واحدة فقط يومياً لكل دين لتجنب الإزعاج.',
      },
      {
        title: 'فلترة Overdue & Upcoming',
        body: 'قائمتان منفصلتان دائماً متاحتان: GetOverdueDebts (الديون المتأخرة)، GetUpcomingDebts مع نطاق مخصص من ١ إلى ٣٦٥ يوماً — يمكن تخصيص نافذة المتابعة لكل نشاط.',
      },
    ],
    imgSrc: './assets/dbt-4-details.png',
    imgAlt: 'تقرير عمر الديون بـ ٥ نطاقات زمنية وأشرطة ملوَّنة',
  },
  {
    id: 'assets',
    label: 'الأصول الثابتة',
    icon: <Building2 size={16} />,
    steps: [
      {
        title: 'تسجيل كل أصل بمعلوماته الكاملة',
        body: 'اسم الأصل، تاريخ الشراء، سعر الشراء، القيمة الحالية (تختلف مع الإهلاك)، ملاحظات. خيار "تسجيل الدفع في الخزينة": إذا كان الشراء نقداً، تُخصم قيمة الشراء من الخزينة — مع فحص الرصيد.',
      },
      {
        title: 'تحديث القيمة (الإهلاك اليدوي)',
        body: 'انقر Update Value وأدخل القيمة الجديدة — يُقبل أي رقم من الصفر فصاعداً. لا مخاطرة بالخزينة: تعديل القيمة لا يُسجِّل أي معاملة نقدية، هو تحديث محاسبي بحت.',
      },
      {
        title: 'بيع الأصل بسعر السوق',
        body: 'أدخل سعر البيع — يُسجَّل إيراد في الخزينة بقيمة البيع، والأصل يُزال من القائمة. إذا بعت بأقل من القيمة الدفترية، الفرق واضح في دفتر الخزينة.',
      },
      {
        title: 'التخلص من الأصل (Write-Off)',
        body: 'ادخل قيمة بيع = ٠ للتخلص من الأصل بدون إيراد — يُسجَّل مصروف بقيمة الأصل الحالية (شطب كامل). الخزينة تتحقق قبل قبول عملية الشطب. الأصل يُرفع من الميزانية.',
      },
    ],
    imgSrc: './assets/dbt-5-extras.png',
    imgAlt: 'إدارة الأصول الثابتة مع خيارات التحديث والبيع والشطب',
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
            من الدين الأول إلى{' '}
            <span style={{ color: ACCENT_HEX }}>صافي المركز المالي</span>
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
                  : 'border-ocean-700 text-ocean-400 hover:border-indigo-500/40 hover:text-indigo-400'
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
    q: 'كيف يضمن النظام سلامة الحسابات عند دفعَين متزامنَين لنفس الدين؟',
    a: 'طبقتان من الحماية: الأولى — قبل قراءة الرصيد في أي تسوية، يُنفَّذ SELECT FOR UPDATE على صف الدين المستهدف (مسجَّل CompanyId + IsSettled = 0) لضمان عزل التزامن. الثانية — Optimistic Concurrency: العميل يُرسل ExpectedBalance، إذا اختلف عن قيمة قاعدة البيانات ترفض العملية برسالة "الرصيد تغير، برجاء تحديث الصفحة".',
  },
  {
    q: 'ما الذي يحدث عند إضافة دين لنفس الطرف مرة ثانية؟',
    a: 'النتِّنج التلقائي: النظام يقفل صف الدين الموجود لنفس الطرف (SELECT FOR UPDATE)، يحسب الرصيد الصافي (الجديد + القديم بإشارتيهما)، ويُحدِّث سجلاً واحداً. مثال: لديك مستحق ١٠٠٠ على "أحمد"، أضفت مديونية عليك ٣٠٠ لـ "أحمد" — نتيجة: مستحق لك ٧٠٠. إذا انعكس الاتجاه، يُسجَّل قيد "Direction Flip" في الدفتر للتوثيق.',
  },
  {
    q: 'ما الفرق بين "الأصول السائلة" و"الأصول الثابتة" في لوحة المركز المالي؟',
    a: 'الأصول السائلة: مستحقاتك من العملاء (مديونيات Receivable)، قيمة Pipeline × نسبة التسليم، قيمة الشحن النشط × نسبة التسليم، رصيد شركات الشحن، قروض الموظفين — كل ما يمكن تحوّله لنقد قريباً. الأصول الثابتة: مجموع القيم الحالية لكل الممتلكات المسجَّلة — لا تدخل في حساب صافي المركز المالي.',
  },
  {
    q: 'كيف تعمل محاكاة التوقعات؟',
    a: 'Delivery Rate هو نسبة تُضرب في قيمة الطلبات (Pipeline + In Shipping) لتُعطيك توقعاً واقعياً لما ستُحصِّله — مع الأخذ بعين الاعتبار نسبة الإرجاع والإلغاء. مثال: ١٠٠ طلب بقيمة ٢٠,٠٠٠ جنيه ونسبة ٨٥٪ = تتوقع تحصيل ١٧,٠٠٠ جنيه. الأرقام تتحدث فورياً مع تحرك الشريط.',
  },
  {
    q: 'ماذا يحدث إذا دفعت أكثر من الرصيد المستحق؟',
    a: 'Overpayment Flip التلقائي: النظام يُغلق الدين القائم بـ "Full Settlement"، ثم يُنشئ دَيناً جديداً بالاتجاه المعاكس برصيد الفرق (بتاريخ اليوم وملاحظة "Overpayment balance from previous settlement"). يُسجَّل قيدان في DebtsLedger: واحد للتسوية الكاملة وواحد للـ Flip. لا يضيع قرش.',
  },
  {
    q: 'هل يمكن رؤية تاريخ كل دفعة وكل تغيير على دين معين؟',
    a: 'نعم — زر History يُظهر كل حركات الدين من DebtsLedger: كل دفعة جزئية (Partial Payment)، كل تسوية (Full Settlement)، قيود الإنشاء (Added Debt / Added Debt Cash)، وانعكاس الاتجاه (Direction Flip / Overpayment Flip) — بالتاريخ والمبلغ والرصيد بعد العملية.',
  },
  {
    q: 'كيف يتكامل تسجيل الدين مع الخزينة؟',
    a: 'عند تفعيل "Record in Cash Flow": إذا كان الدين مستحقاً لك (أعطيته نقداً) يُسجَّل مصروف في الخزينة مع SELECT FOR UPDATE لضمان عدم السلبية. إذا كان استلمت نقداً (عليك دين) يُسجَّل إيراد. عند التسوية: تسوية مديونية عليك (Payable) = مصروف بفحص الخزينة أولاً. تسوية مستحق لك (Receivable) = إيراد.',
  },
  {
    q: 'كيف تعمل التنبيهات التلقائية للديون؟',
    a: 'DebtReminderService يعمل كـ BackgroundService تلقائي يُعاد تشغيله كل ٢٤ ساعة. يمسح كل الشركات (يتجاهل فلتر المستأجر لرؤية الجميع — IgnoreTenantQueryFilters = true). لكل دين نشط: إذا كان الاستحقاق بعد ٣ أيام يُنشئ "Warning"، إذا كان متأخراً يُنشئ "Critical" مع عدد أيام التأخير. الضمان: تحقق من آخر ٢٠ ساعة لمنع التكرار اليومي.',
  },
  {
    q: 'ما الفرق بين التخلص من أصل وبيعه؟',
    a: 'البيع (Sale Amount > 0): يُسجَّل إيراد في الخزينة بقيمة سعر البيع — حتى لو أقل من القيمة الدفترية. التخلص (Sale Amount = 0): يُسجَّل مصروف بقيمة القيمة الحالية للأصل (شطب كامل) — الخزينة تتحقق أن الرصيد كافٍ قبل القبول. في الحالتين: الأصل يُحذف من قائمة الأصول الثابتة.',
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
            الإجابات في الكود —{' '}
            <span style={{ color: ACCENT_HEX }}>لا في الكتيِّبات</span>
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
    href: '/features/expenses',
    icon: <Wallet size={20} />,
    title: 'المصروفات والخزينة',
    body: 'كل تسوية دين وكل دين نقدي يُسجَّل تلقائياً في دفتر المصروفات — الخزينة تتحقق قبل كل معاملة.',
  },
  {
    href: '/features/reports',
    icon: <BarChart2 size={20} />,
    title: 'التقارير',
    body: 'بيانات المديونيات وتقرير العمر والمركز المالي تُغذِّي تقارير الربحية والسيولة الشاملة.',
  },
  {
    href: '/features/shipping',
    icon: <Truck size={20} />,
    title: 'الشحن والتوصيل',
    body: 'رصيد شركات الشحن (Ledger) يظهر مباشرةً في لوحة المديونيات — سواء كأصل أو التزام حسب الرصيد.',
  },
  {
    href: '/features/inventory',
    icon: <Boxes size={20} />,
    title: 'إدارة المخزون',
    body: 'الطلبات Pipeline وIn Shipping تُدمج في توقعات الأصول السائلة مع إمكانية تطبيق Delivery Rate.',
  },
  {
    href: '/features/manufacturing',
    icon: <Factory size={20} />,
    title: 'التصنيع',
    body: 'تكاليف الإنتاج المؤجَّلة يمكن تسجيلها كمديونيات للموردين وتسويتها عند الدفع الفعلي.',
  },
  {
    href: '/features/staff',
    icon: <Users size={20} />,
    title: 'الموظفون',
    body: 'قروض الموظفين (CurrentBalance < 0) وأجور اليوم (StaffDueToday) تظهر مباشرةً في لوحة المركز المالي.',
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
            المركز المالي{' '}
            <span style={{ color: ACCENT_HEX }}>يُلخِّص كل وحداتك</span>
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
                className="group relative flex flex-col gap-3 rounded-2xl border border-ocean-700/50 bg-ocean-900/60 p-6 overflow-hidden transition-all duration-300 hover:border-indigo-500/40 hover:-translate-y-1 hover:shadow-lg block"
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
                    <ChevronRight size={14} className="text-ocean-500 group-hover:text-indigo-400 transition-colors" />
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
            className="pointer-events-none absolute w-[500px] h-[250px] rounded-full blur-3xl opacity-[0.15] -z-10"
            style={{ background: `radial-gradient(ellipse, ${ACCENT_HEX} 0%, transparent 70%)` }}
          />

          <motion.div variants={fadeUp()}>
            <SectionLabel>ابدأ الآن</SectionLabel>
          </motion.div>

          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white leading-tight">
            هل تعرف صافي مركزك المالي{'  '}
            <span style={{ color: ACCENT_HEX }}>في هذه اللحظة؟</span>
          </motion.h2>

          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 text-base max-w-xl leading-relaxed">
            استبدل الملاحظات اليدوية والإكسيل بنظام يجمع مديونياتك، أصولك، قروض موظفيك،
            وتوقعات تحصيل طلباتك — كلها في لوحة مالية واحدة، محدَّثة لحظياً.
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
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-indigo-500/40 hover:text-indigo-400 transition-all duration-200"
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

export default function DebtsPage() {
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
