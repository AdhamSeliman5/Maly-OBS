/**
 * ExpensesPage.tsx — Dedicated marketing page for the Expenses (المصروفات التشغيلية) module.
 *
 * Sections:
 *   1. Hero
 *   2. Pain-Point Stat Strip
 *   3. Value Proposition
 *   4. Interactive Walkthrough (4 Tabs)
 *   5. Deep-Dive FAQ
 *   6. Recommended Modules
 *   7. CTA
 *
 * Accent: amber — rgba(245,158,11,) / #f59e0b
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Wallet,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  ShieldCheck,
  Lock,
  RefreshCw,
  Layers,
  FileText,
  PiggyBank,
  TrendingDown,
  TrendingUp,
  CalendarClock,
  Boxes,
  ShoppingCart,
  Truck,
  Factory,
  BarChart2,
  Users,
  Tag,
  ClipboardList,
  History,
  Zap,
} from 'lucide-react'

// ─── Accent colour tokens ─────────────────────────────────────────────────────

const ACCENT      = 'rgba(245,158,11,'   // amber-500
const ACCENT_HEX  = '#f59e0b'
const ACCENT_DIM  = 'rgba(245,158,11,0.12)'
const ACCENT_DARK = '#d97706'
const ACCENT_GLOW = '0 0 28px rgba(245,158,11,0.42)'

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
        className="inline-flex items-center gap-2 text-sm text-ocean-400 hover:text-amber-400 transition-colors"
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
        className="pointer-events-none absolute -top-20 right-1/3 w-[580px] h-[580px] rounded-full blur-3xl opacity-[0.14]"
        style={{ background: `radial-gradient(circle, ${ACCENT_HEX} 0%, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute top-44 left-0 w-80 h-80 rounded-full blur-3xl opacity-[0.09]"
        style={{ background: `radial-gradient(circle, rgba(217,119,6,1) 0%, transparent 70%)` }}
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
                <Wallet size={15} />
                وحدة المصروفات والخزينة التشغيلية
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.05)}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-white"
              style={{ lineHeight: '1.22' }}
            >
              خزينتك تحت{' '}
              <span style={{ color: ACCENT_HEX }}>سيطرتك الكاملة</span>
              <br />
              كل قرش — موثَّق،{' '}
              <span className="text-ocean-400">محمي، قابل للتدقيق.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeUp(0.1)}
              className="text-base sm:text-lg text-ocean-300 leading-relaxed max-w-xl"
            >
              سجِّل المصروفات والإيرادات اليومية، تتبّع رصيد الخزينة لحظةً بلحظة، وأغلق اليوم
              بجردة فعلية تُصحِّح الفرق تلقائياً — كل ذلك بقواعد مالية صارمة مغروسة في قاعدة البيانات.
            </motion.p>

            {/* Micro-stats */}
            <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-4">
              {[
                { label: 'قفل صف PostgreSQL عند كل مصروف', icon: <Lock size={14} /> },
                { label: 'سجل تدقيق لكل عملية', icon: <History size={14} /> },
                { label: 'إغلاق يومي بجردة فعلية', icon: <CalendarClock size={14} /> },
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
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-amber-500/40 hover:text-amber-400 transition-all duration-200"
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
                src="./assets/exp-1-hero.png"
                alt="لوحة المصروفات والخزينة"
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
                <PiggyBank size={16} style={{ color: ACCENT_HEX }} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-ocean-400">رصيد الخزينة الآن</span>
                <span className="text-sm font-bold text-white">١٢,٤٨٠ جنيه مصري</span>
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
    stat: '٦٧٪',
    text: 'من أصحاب الأعمال الصغيرة لا يعرفون رصيد خزينتهم الحقيقي في أي لحظة — يكتشفون العجز متأخراً.',
    icon: <AlertTriangle size={22} />,
  },
  {
    stat: '١ من كل ٣',
    text: 'مصروفات تشغيلية لا تُسجَّل بشكل منتظم — تتراكم "مصاريف صغيرة" تأكل الهامش بصمت.',
    icon: <TrendingDown size={22} />,
  },
  {
    stat: '٤٥٪',
    text: 'من قرارات التسعير مبنية على تقدير الربحية لا على بيانات تكلفة فعلية — والنتيجة: خسارة غير مرئية.',
    icon: <TrendingUp size={22} />,
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
    icon: <Lock size={20} />,
    title: 'قفل الصف عند كل مصروف (FOR UPDATE)',
    body: 'قبل أي تسجيل مصروف، يُقفل النظام صف الخزينة في PostgreSQL بـ SELECT FOR UPDATE — يمنع أي تسجيلَين متزامنَين من الاعتماد على نفس الرصيد ويضمن سلامة كل عملية حسابية.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'رقابة الخزينة الصارمة (لا رصيد سالب)',
    body: 'يرفض النظام تلقائياً كل مصروف جديد يتجاوز الرصيد الحالي برسالة واضحة تتضمن الرصيد الدقيق. لا استثناءات ولا مخاطرات — الخزينة لا تنزل عن الصفر أبداً.',
  },
  {
    icon: <RefreshCw size={20} />,
    title: 'فحص دلتا ذكي عند التعديل',
    body: 'عند تعديل مصروف، لا يتحقق النظام من المبلغ الجديد كاملاً — بل يحسب الزيادة الصافية فقط. وإن تحوّل من إيراد لمصروف، يُعيد حساب التوفر مع إضافة الإيراد القديم للرصيد المتاح.',
  },
  {
    icon: <History size={20} />,
    title: 'سجل تدقيق لكل عملية',
    body: 'كل إضافة أو تعديل أو حذف يُسجَّل في سجل التدقيق: المستخدم، التوقيت، المبلغ، النوع، الفئة، رقم السجل — مسار كامل لا يُحذف ولا يُعدَّل يضمن الشفافية الكاملة.',
  },
  {
    icon: <CalendarClock size={20} />,
    title: 'إغلاق يومي بجردة فعلية',
    body: 'أدخِل النقد الموجود فعلاً في يدك — النظام يحسب الرصيد النظري حتى نهاية اليوم ويُسجِّل الفرق (إن وُجد) كقيد Adjustment محمي تلقائياً. سجل الإغلاق اليومي محفوظ بتاريخه وبياناته.',
  },
  {
    icon: <Tag size={20} />,
    title: 'فئات مخصصة لكل نشاط',
    body: 'أنشئ فئات مصروفات مخصصة لنشاطك تحفظ تحت حساب المستأجر الخاص بك. من "إيجار" و"رواتب" إلى "شحن" و"مواد خام" — كل مصروف في فئته الصحيحة.',
  },
  {
    icon: <Layers size={20} />,
    title: 'دمج المعاملات (التوحيد)',
    body: 'بنقرة واحدة: يجمع النظام كل المعاملات اليدوية بالتصنيف والنوع في سجلات موحَّدة. النتيجة: دفتر مالي مبسَّط للتقارير — مع حذف ناعم يحفظ السجل الأصلي للمراجعة.',
  },
  {
    icon: <FileText size={20} />,
    title: 'سجلات النظام محمية بالكامل',
    body: 'القيود التلقائية (مشتريات، شحن، رواتب، تسويات، توحيد) تحمل علامة IsAuto = 1 — لا يمكن تعديلها أو حذفها من الواجهة. حذفها يُرجع رسالة "Security: Cannot edit System-Auto records".',
  },
  {
    icon: <Zap size={20} />,
    title: 'تكامل تلقائي مع كل الوحدات',
    body: 'عند الشراء أو التحصيل مع شركة الشحن أو معالجة راتب، تُدمج قيود مالية تلقائياً في دفتر المصروفات — كل الأحداث المالية في النظام تصب في مكان واحد دون إدخال مزدوج.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'تحليلات المصروفات بالفئة',
    body: 'رسم بياني للمصروفات مرتَّبة تنازلياً بالفئة مع نطاق تاريخ مخصص. خيار "تضمين المشتريات والنظام" يُتيح رؤية التكلفة الكاملة أو يخفيها للرؤية التشغيلية النقية.',
  },
  {
    icon: <ClipboardList size={20} />,
    title: 'دفتر حركات مرفَّق بمصادره',
    body: 'كل معاملة تحمل مرجعها: PageId (الصفحة)، EmployeeTransactionId (الراتب)، ShippingLedgerId (الشحن) — تتبَّع أصل أي قيد مباشرةً إلى مصدره الحقيقي.',
  },
  {
    icon: <Users size={20} />,
    title: 'صلاحيات دقيقة بالعملية',
    body: 'كل عملية مؤمَّنة بصلاحية مستقلة: view / create / edit / delete / closeDay — و"Finance Admin" فقط للتوحيد. لا موظف يستطيع تجاوز صلاحيته المحددة.',
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
            <SectionLabel>لماذا وحدة المصروفات؟</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white mb-4">
            خزينة محمية بالكود —{' '}
            <span style={{ color: ACCENT_HEX }}>لا بحسن النية.</span>
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 max-w-2xl mx-auto text-base leading-relaxed">
            نسمع كثيراً "الخزينة صح" — لكن هل تعرف لماذا؟ وحدة المصروفات تحمي رصيدك بقواعد مغروسة
            في قاعدة البيانات، لا في نوايا المستخدمين.
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
    id: 'ledger',
    label: 'دفتر العمليات',
    icon: <ClipboardList size={16} />,
    steps: [
      {
        title: 'رصيد الخزينة دائماً أمامك',
        body: '٣ مؤشرات فورية في أعلى الصفحة: إجمالي الخزينة (كل التاريخ)، إجمالي الإيرادات في الفترة، إجمالي المصروفات في الفترة — تتحدث عند كل تغيير في نطاق التاريخ.',
      },
      {
        title: 'فلترة زمنية بنقرة واحدة',
        body: 'اختر نطاق التاريخ من وتائر جاهزة: اليوم، الأسبوع، هذا الشهر، آخر شهر، هذه السنة، أو نطاق مخصص — الدفتر والمؤشرات تتحدث فوراً.',
      },
      {
        title: 'بحث فوري في كل الحقول',
        body: 'ابحث بالفئة، الملاحظات، أو المبلغ — النتائج تُصفَّى لحظياً والمؤشرات تعكس مجموع نتائج البحث الكاملة لا الصفحة وحدها.',
      },
      {
        title: 'شارة النظام للقيود المحمية',
        body: 'القيود التلقائية (مشتريات، رواتب، تحصيل شحن، تسويات) تظهر بشارة "System" بدل أزرار التعديل والحذف — واضح، شفاف، محمي بلا تعقيد.',
      },
    ],
    imgSrc: './assets/exp-2-list.png',
    imgAlt: 'دفتر عمليات المصروفات مع مؤشرات الخزينة والفلترة الزمنية',
  },
  {
    id: 'entry',
    label: 'إضافة وتعديل',
    icon: <TrendingDown size={16} />,
    steps: [
      {
        title: 'مصروف أو إيراد بنفس النافذة',
        body: 'اختر النوع (مصروف / إيراد) — خلفية النافذة تتغير لونها لتمييز النوع بصرياً. أضف الفئة من القائمة أو أنشئ فئة جديدة فورياً بالنقر على +.',
      },
      {
        title: 'حماية الخزينة قبل الحفظ',
        body: 'عند الحفظ: إن كان مصروفاً، يُقفل النظام صف الخزينة ويتحقق من الرصيد المتاح. إذا كان المبلغ يتجاوز الرصيد، يُرفض الحفظ فوراً مع عرض الرصيد المتاح.',
      },
      {
        title: 'تحقق دلتا ذكي عند التعديل',
        body: 'عند تعديل مصروف قائم، لا يُعاد فحص المبلغ كله — فقط الجزء الإضافي. مثال: تعديل مصروف 100 جنيه إلى 300 جنيه يتحقق من توفر 200 جنيه فقط، لا 300.',
      },
      {
        title: 'قيد تدقيق فوري',
        body: 'كل حفظ أو تعديل يُنشئ سجلاً في Audit Log باسم المستخدم والتوقيت والتفاصيل الكاملة — لا يمكن لأي مستخدم تجنب هذا السجل.',
      },
    ],
    imgSrc: './assets/exp-3-action.png',
    imgAlt: 'نافذة إضافة مصروف مع فحص الخزينة وإنشاء فئة جديدة',
  },
  {
    id: 'closeday',
    label: 'إغلاق اليوم',
    icon: <CalendarClock size={16} />,
    steps: [
      {
        title: 'جرد النقد اليومي',
        body: 'اضغط "إغلاق اليوم" — يعرض النظام الرصيد النظري المحسوب من كل الإيرادات والمصروفات حتى نهاية اليوم. أدخِل النقد الفعلي في يدك.',
      },
      {
        title: 'قيد تسوية تلقائي للفرق',
        body: 'إذا كان الفرق أكثر من 0.01 جنيه، يُنشئ النظام قيد "Adjustment" محمي (IsAuto = 1) برمجياً — لا يمكن حذفه أو تعديله — ويُحدِّث صف الخزينة الرئيسي (Treasury).',
      },
      {
        title: 'تحديد تاريخ مخصص',
        body: 'ليس مقيَّداً باليوم الحالي — يمكن إيقاف اليوم بتاريخ محدد لإغلاق يوم سابق بأثر رجعي. الرصيد النظري يُحسَب حتى نهاية التاريخ المُختار.',
      },
      {
        title: 'سجل الإغلاق اليومي',
        body: 'كل إغلاق يُحفظ في جدول DailyClosures: التاريخ، الرصيد النظري، الرصيد الفعلي، الفرق، والملاحظات — مرجع كامل لكل تسوية يومية بالتاريخ.',
      },
    ],
    imgSrc: './assets/exp-4-details.png',
    imgAlt: 'نافذة إغلاق اليوم مع الرصيد النظري والجرد الفعلي وعرض الفرق',
  },
  {
    id: 'analytics',
    label: 'التحليلات',
    icon: <BarChart3 size={16} />,
    steps: [
      {
        title: 'توزيع المصروفات بالفئة',
        body: 'رسم بياني أفقي يُرتِّب الفئات تنازلياً بالمبلغ — اكتشف فوراً أين تذهب معظم تكاليف تشغيلك.',
      },
      {
        title: 'إجمالي الإيرادات والمصروفات للفترة',
        body: 'في أعلى شاشة التحليلات: إجمالي الإيرادات وإجمالي المصروفات في نطاق التاريخ المختار — مجموع واضح قبل الدخول في التفاصيل.',
      },
      {
        title: 'خيار تضمين المشتريات والنظام',
        body: 'مفتاح "تضمين المشتريات والنظام": عند تفعيله تُضاف فئات المشتريات التلقائية (من وحدة المخزون) والتسويات إلى الرسم — رؤية التكلفة الإجمالية كاملة.',
      },
      {
        title: 'جاهز للتقارير المحاسبية',
        body: 'البيانات مُهيَّأة لأي تقرير: مجموع بالفئة، مجموع بالنوع (إيراد/مصروف)، مجموع بالتاريخ — صدِّرها مع وحدة التقارير للمراجعة المحاسبية الكاملة.',
      },
    ],
    imgSrc: './assets/exp-5-extras.png',
    imgAlt: 'تحليلات المصروفات: توزيع الفئات وإجمالي الإيرادات والمصروفات',
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
            من القيد الأول إلى{' '}
            <span style={{ color: ACCENT_HEX }}>إغلاق اليوم المثالي</span>
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
                  : 'border-ocean-700 text-ocean-400 hover:border-amber-500/40 hover:text-amber-400'
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
    q: 'كيف يمنع النظام أن تصبح الخزينة سالبة؟',
    a: 'طبقتان: الأولى في قاعدة البيانات — قبل تسجيل أي مصروف، يُقفل صف الخزينة بـ SELECT FOR UPDATE (row-level lock) ثم يتحقق بـ ITreasuryValidationService. إذا كان المبلغ يتجاوز الرصيد الحالي، يُرمى استثناء يُلغي المعاملة كاملاً. الثانية في الواجهة — نفس الرسالة تُعرض فوراً مع الرصيد المتاح. لا طريقة لتسجيل مصروف يتجاوز الرصيد، حتى باستخدام API مباشرةً.',
  },
  {
    q: 'ما الفرق بين "رصيد الخزينة" و"إجمالي المصروفات في الفترة"؟',
    a: 'رصيد الخزينة = إجمالي الإيرادات الكلية − إجمالي المصروفات الكلية من بداية السجل وحتى الآن (بغض النظر عن فلتر التاريخ المختار). إجمالي المصروفات في الفترة = إجمالي المصروفات في نطاق التاريخ المختار فقط. يمكن أن يكون إجمالي الشهر عالياً بينما الخزينة كبيرة لأن الإيرادات أعلى.',
  },
  {
    q: 'ما معنى "قيد النظام" وهل يمكن حذفه؟',
    a: 'قيود النظام هي المعاملات التي تُنشئها الوحدات الأخرى تلقائياً: مشتريات المخزون، تحصيلات الشحن، الرواتب، تسويات إغلاق اليوم، قيود التوحيد. تحمل IsAuto = 1 وهو علامة مكتوبة في قاعدة البيانات. النظام يرفض صراحةً تعديلها أو حذفها برسالة "ERROR_SYSTEM_ROW_LOCKED" على مستوى الـ Service — حتى لو وصل المستخدم بـ API مباشرةً.',
  },
  {
    q: 'ماذا يحدث في إغلاق اليوم إن لم يكن هناك فرق؟',
    a: 'إن كان الفرق أقل من 0.01 جنيه (منطقة الدقة العشرية)، لا يُنشأ قيد Adjustment. فقط يُسجَّل سطر في جدول DailyClosures بالبيانات الكاملة (التاريخ، الرصيد النظري، الرصيد الفعلي، الفرق = 0) للمراجعة المستقبلية — بدون أي أثر على الأرقام.',
  },
  {
    q: 'هل التوحيد (Consolidate) يحذف البيانات الأصلية؟',
    a: 'لا — يُطبَّق حذف ناعم (Soft Delete): تُعيَّن IsDeleted = true، DeletedAt، وDeletedByUserId على كل سجل أصلي. السجلات لا تُحذف من جداول قاعدة البيانات. فقط القيود غير النظامية (IsAuto = 0) تخضع للتوحيد — قيود النظام محمية دائماً.',
  },
  {
    q: 'على ماذا يُطبَّق التوحيد — الفترة المختارة أم كل السجل؟',
    a: 'كل السجل — بغض النظر عن نطاق التاريخ المحدد في الواجهة. هذا موثَّق في نافذة التأكيد بوضوح. لذا يُنصح باستخدامه عند الانتهاء من جميع المراجعات المحاسبية للفترة، لأن التوحيد لا يُعكس.',
  },
  {
    q: 'هل يمكن تعديل تاريخ معاملة موجودة؟',
    a: 'لا — تغيير التاريخ عند التعديل غير مدعوم عمداً. يتيح ذلك ضمان أن المعاملات تبقى في مكانها الزمني الصحيح ولا يتم إعادة توزيعها على فترات مغلقة أو تم إغلاقها يومياً. يمكن تعديل: المبلغ، الفئة، النوع، الملاحظات فقط.',
  },
  {
    q: 'كيف تترابط المصروفات مع وحدات الشحن والرواتب والمشتريات؟',
    a: 'كل قيد مالي يحمل مرجعاً اختيارياً: ShippingLedgerId يربطه بسجل الشحن، EmployeeTransactionId يربطه بمعاملة الراتب، PageId يربطه بصفحة البيع. هذا يُتيح "أثر التدقيق" الكامل — من القيد في المصروفات إلى مصدره الحقيقي في أي وحدة أخرى.',
  },
  {
    q: 'من يستطيع "التوحيد" ومن يستطيع "إغلاق اليوم"؟',
    a: 'التوحيد محجوز لمن لديه صلاحية "Finance Admin" — أعلى مستوى في الإذونات المالية. إغلاق اليوم يتطلب صلاحية "Expenses.closeDay" التي يمكن منحها للمديرين. كل قراءة أو كتابة أو حذف لها صلاحية RequirePermission مستقلة على مستوى الـ Controller بلا استثناءات.',
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
            <span style={{ color: ACCENT_HEX }}>لا في الوعود</span>
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
    icon: <BarChart2 size={20} />,
    title: 'التقارير',
    body: 'بيانات الخزينة والمصروفات تُغذِّي تقارير الربحية والتكلفة الشاملة — رؤية 360° للأداء المالي.',
  },
  {
    href: '/#/features/inventory',
    icon: <Boxes size={20} />,
    title: 'إدارة المخزون',
    body: 'كل عملية شراء تُنشئ قيداً تلقائياً في المصروفات — تتبع تكلفة المخزون دون إدخال مزدوج.',
  },
  {
    href: '/#/features/shipping',
    icon: <Truck size={20} />,
    title: 'الشحن والتوصيل',
    body: 'التحصيل من شركات الشحن يُدمج تلقائياً كإيراد في المصروفات، ومدفوعات العمولات كمصروف.',
  },
  {
    href: '/#/features/manufacturing',
    icon: <Factory size={20} />,
    title: 'التصنيع',
    body: 'تكاليف الإنتاج وشراء الخامات تُسجَّل تلقائياً في دفتر المصروفات لحساب التكلفة الفعلية.',
  },
  {
    href: '/#/features/orders',
    icon: <ShoppingCart size={20} />,
    title: 'الطلبات',
    body: 'إيرادات البيع من الصفحات المختلفة ترتبط بالـ PageId في كل قيد — تتبع إيرادات كل قناة.',
  },
  {
    href: '/#/features/staff',
    icon: <Users size={20} />,
    title: 'الموظفون والرواتب',
    body: 'معالجة كل راتب تُنشئ قيد مصروف مرتبطاً بـ EmployeeTransactionId — تكامل مباشر لا يدوي.',
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
            كل وحدة تُغذِّي{' '}
            <span style={{ color: ACCENT_HEX }}>الخزينة تلقائياً</span>
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
                className="group relative flex flex-col gap-3 rounded-2xl border border-ocean-700/50 bg-ocean-900/60 p-6 overflow-hidden transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-lg block"
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
                    <ChevronRight size={14} className="text-ocean-500 group-hover:text-amber-400 transition-colors" />
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
            className="pointer-events-none absolute w-[480px] h-[240px] rounded-full blur-3xl opacity-[0.16] -z-10"
            style={{ background: `radial-gradient(ellipse, ${ACCENT_HEX} 0%, transparent 70%)` }}
          />

          <motion.div variants={fadeUp()}>
            <SectionLabel>ابدأ الآن</SectionLabel>
          </motion.div>

          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white leading-tight">
            لا تعرف الرصيد الحقيقي لخزينتك؟{' '}
            <span style={{ color: ACCENT_HEX }}>حان وقت التغيير.</span>
          </motion.h2>

          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 text-base max-w-xl leading-relaxed">
            انضم لآلاف أصحاب الأعمال الذين يغلقون يومهم بأرقام حقيقية، يتتبعون مصروفاتهم بالفئة،
            ويعرفون رصيد الخزينة في أي لحظة — دون إكسيل ودون مفاجآت.
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
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-amber-500/40 hover:text-amber-400 transition-all duration-200"
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

export default function ExpensesPage() {
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
