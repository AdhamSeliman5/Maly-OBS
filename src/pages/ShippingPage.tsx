/**
 * ShippingPage.tsx — Dedicated marketing page for the Shipping (الشحن والتوصيل) module.
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
 * Accent: sky-blue — rgba(14,165,233,) / #0ea5e9
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Truck,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  BarChart3,
  Wallet,
  FileSpreadsheet,
  ShieldCheck,
  RefreshCw,
  Package,
  PackageOpen,
  RotateCcw,
  Zap,
  Lock,
  Receipt,
  Clock,
  Boxes,
  ShoppingCart,
  BarChart2,
  TrendingDown,
  BookOpen,
  Factory,
  FileText,
} from 'lucide-react'

// ─── Accent colour tokens ─────────────────────────────────────────────────────

const ACCENT      = 'rgba(14,165,233,'   // sky-500
const ACCENT_HEX  = '#0ea5e9'
const ACCENT_DIM  = 'rgba(14,165,233,0.12)'
const ACCENT_DARK = '#0284c7'
const ACCENT_GLOW = '0 0 28px rgba(14,165,233,0.42)'

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
        className="inline-flex items-center gap-2 text-sm text-ocean-400 hover:text-sky-400 transition-colors"
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
        className="pointer-events-none absolute -top-20 right-1/3 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.14]"
        style={{ background: `radial-gradient(circle, ${ACCENT_HEX} 0%, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute top-40 left-0 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: `radial-gradient(circle, rgba(2,132,199,1) 0%, transparent 70%)` }}
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
                <Truck size={15} />
                وحدة الشحن والتوصيل
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.05)}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-white"
              style={{ lineHeight: '1.22' }}
            >
              اعرف كل جنيه{' '}
              <span style={{ color: ACCENT_HEX }}>في يد الشركة</span>—
              <br />
              بلا Excel،{' '}
              <span className="text-ocean-400">بلا مفاجآت.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeUp(0.1)}
              className="text-base sm:text-lg text-ocean-300 leading-relaxed max-w-xl"
            >
              سوِّي دفعات التحصيل مع أي عدد من شركات الشحن في معاملة واحدة — كل طلب يُحدَّث، كل حركة مخزون تُسجَّل، تقرير Excel جاهز للتسليم فوراً.
            </motion.p>

            {/* Micro-stats */}
            <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-4">
              {[
                { label: 'تسوية جماعية بنقرة واحدة', icon: <Zap size={14} /> },
                { label: 'حسابات صافية (بدون إيداع)', icon: <Wallet size={14} /> },
                { label: 'Excel تلقائي عند كل تحصيل', icon: <FileSpreadsheet size={14} /> },
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
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-sky-500/40 hover:text-sky-400 transition-all duration-200"
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
                src="./assets/shp-1-hero.png"
                alt="لوحة إدارة الشحن"
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
                <Receipt size={16} style={{ color: ACCENT_HEX }} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-ocean-400">آخر تحصيل</span>
                <span className="text-sm font-bold text-white">٢٣ طلب — صافي ٤٨٠٠ جنيه</span>
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
    text: 'من أصحاب المتاجر لا يعرفون صافي المستحق لديهم عند كل شركة شحن في أي لحظة — الحساب يتراكم.',
    icon: <Wallet size={22} />,
  },
  {
    stat: '١ من كل ٤',
    text: 'طلبات مُرتجعة لا يتم تسجيل رجوع مخزونها صح — يُعتقد أنه بيع فعلي بينما البضاعة عادت.',
    icon: <RotateCcw size={22} />,
  },
  {
    stat: '٣٦٪',
    text: 'تأخير في اكتشاف الطلبات المتأخرة — تبقى "في يد الشركة" لأسابيع بدون متابعة أو تقرير.',
    icon: <Clock size={22} />,
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
    title: 'تسوية جماعية بمعاملة واحدة',
    body: 'اختر عشرات الطلبات وأنجز التحصيل بضغطة واحدة — كل طلب يُحدَّث، كل قيد في دفتر الأستاذ يُسجَّل، المخزون يتصحح، كل ذلك في معاملة قاعدة بيانات واحدة لا تقبل الانقطاع.',
  },
  {
    icon: <Wallet size={20} />,
    title: 'قاعدة حساب "بدون إيداع" (Rule 4)',
    body: 'الصافي = المجموع − رسوم الشحن فقط. الإيداع لا يدخل في الحسبة إطلاقاً. مُسلَّط: مُسلَّم=صافي كامل | مرتجع=صفر | مرتجع بتكلفة شحن=سالب | تالف=التعويض موجب.',
  },
  {
    icon: <Package size={20} />,
    title: 'تسليم جزئي ذكي (Bundle Explode)',
    body: 'عند استلام جزء من الطلب: يُفكِّك النظام البنادل تلقائياً إلى مكوناتها، الكميات المُسلَّمة تُحتسب، المرتجع يذهب للحجر الصحي — والسعر الجديد يُحسب من مجموع المُسلَّم بالضبط.',
  },
  {
    icon: <RotateCcw size={20} />,
    title: 'مخزون المرتجعات محمي',
    body: 'المرتجع → QuarantineStock. التالف → DamagedCnt + تسجيل خسارة التكلفة على المنتج. بدون موافقة يدوية — يتم تلقائياً مع كل تسوية ويظهر فور الانتهاء في وحدة المخزون.',
  },
  {
    icon: <Receipt size={20} />,
    title: 'دفتر أستاذ كامل لكل شركة',
    body: 'كل معاملة موثَّقة: Order Closing, Cash Payout, Loan (سلفة), Return Cost, Compensation, Loan Repayment — دفتر مرتَّب مع paginer وزر سداد لكل سلفة مفتوحة.',
  },
  {
    icon: <FileSpreadsheet size={20} />,
    title: 'تقرير Excel تلقائي عند كل تحصيل',
    body: 'خلال ثوانٍ من إغلاق الدفعة يُولَّد ملف Excel بـ3 أوراق: تفاصيل التسوية، الطلبات المعلّقة، والطلبات المتأخرة (قابل للتعديل بـ1-180 يوم) — يُرسَّل كتنزيل مباشر.',
  },
  {
    icon: <FileText size={20} />,
    title: 'تقرير PDF للإرسال للشركة',
    body: 'بنقرة واحدة: PDF احترافي لأداء الشركة المحددة مُولَّد بـQuestPDF ومُرسَّل كتنزيل — شارك مع المحاسب أو الشركة لحظياً.',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'سلفة تلقائية عند الفرق',
    body: 'إذا كان النقد المستلَم يختلف عن صافي المستحق — الفرق يتحوّل إلى سلفة (Loan) في دفتر الأستاذ تلقائياً مع توثيق المبلغ والتاريخ — بدون إدخال يدوي.',
  },
  {
    icon: <Lock size={20} />,
    title: 'حماية الطلب المُغلق (Terminal State)',
    body: 'بمجرد إغلاق طلب (تُسلِّم / مرتجع / تالف)، يُرفض أي تعديل عليه نهائياً — حتى لو أُعيدت نفس الدفعة للمعالجة، يُكتشف ويُتخطَّى بدون تكرار.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'حماية رباعية من IDOR',
    body: 'S-04: فحص ملكية الشركة قبل أي تسوية. S-07: قائمة بيضاء للـ VariantIds. S-09: حذف مؤمَّن بـcompanyId. S-10: دفتر الأستاذ مؤمَّن على المستأجر — لا متجر يرى بيانات متجر آخر.',
  },
  {
    icon: <RefreshCw size={20} />,
    title: 'إعادة حساب المحجوز فوراً',
    body: 'بعد كل تسوية، يُعاد حساب الرصيد المحجوز (ReservedStock) عبر SemaphoreSlim — الطلبات المُغلقة تُحرِّر حجزها فوراً وتنعكس على الرصيد المتاح فوريًا.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'تحليلات أداء لكل شركة',
    body: 'معدل التوصيل، متوسط أيام التسليم، أداء بالمحافظة، رسوم شهرية، والأكثر طلباً — كلها متاحة بنطاق زمني مخصص لكل شركة شحن على حدة.',
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
            <SectionLabel>لماذا وحدة الشحن؟</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white mb-4">
            من الإسناد للشركة إلى التحصيل المحاسبي —{' '}
            <span style={{ color: ACCENT_HEX }}>كل خطوة مضبوطة.</span>
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 max-w-2xl mx-auto text-base leading-relaxed">
            ليست مجرد تتبع طلبات — النظام يضمن سلامة المخزون والمحاسبة في كل طلب تكتب عليه "تُسلِّم" أو "مرتجع"،
            بقواعد تشغيل مُوثَّقة في الكود لا في رأس محاسب.
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
    id: 'active-orders',
    label: 'الطلبات النشطة',
    icon: <Truck size={16} />,
    steps: [
      {
        title: 'نظرة لحظية على كل شركة شحن',
        body: 'اختر أي شركة من القائمة — تظهر جميع طلباتها النشطة مع 5 مؤشرات: عدد الطلبات، المبلغ المعلّق، الصافي المستحق، رصيد السلفة، ومعدل التوصيل.',
      },
      {
        title: 'تحديث حالات مرن لكل طلب',
        body: 'لكل طلب: عدِّل رسوم الشحن (الصافي يُحسَّب فوراً)، اختر الحالة (تُسلِّم / جزئي / مرتجع / تالف)، أدخِل التكلفة الإضافية للمرتجع أو التعويض للتالف، وحدِّد تاريخ التسليم.',
      },
      {
        title: 'بحث وفلترة لحظي',
        body: 'ابحث بكود الطلب، اسم العميل، رقم الهاتف، أو المحافظة — النتائج تتصفح مع pagination لمنع تحميل آلاف السجلات دفعة واحدة.',
      },
      {
        title: 'تسليم جزئي بتحديد الكميات',
        body: 'عند تحديد "جزئي" وتفعيل الطلب، تفتح نافذة إدخال الكميات المُسلَّمة وسعر الوحدة لكل منتج — النظام يحسب السعر الجديد ويوجِّه المرتجع للحجر الصحي.',
      },
    ],
    imgSrc: './assets/shp-2-list.png',
    imgAlt: 'جدول الطلبات النشطة مع حالات التسليم وبيانات كل طلب',
  },
  {
    id: 'collection',
    label: 'تسوية التحصيل',
    icon: <Receipt size={16} />,
    steps: [
      {
        title: 'اختر الطلبات → ابدأ التسوية',
        body: 'علِّم الطلبات المراد تسويتها بمربعات الاختيار (أو اختر الكل)، ثم اضغط "معالجة التحصيل" — يفتح ملخص كامل: عدد الطلبات، إجمالي المُسلَّم، رسوم الشحن، الإضافات، والصافي النهائي.',
      },
      {
        title: 'تاريخ موحَّد اختياري',
        body: 'إذا كانت كل الطلبات مُسلَّمة في يوم واحد، فعِّل "تاريخ توصيل موحَّد" وحدد التاريخ — يُطبَّق على كل الطلبات المحددة دفعةً واحدة.',
      },
      {
        title: 'نقد مستلَم + سلفة تلقائية',
        body: 'أدخِل المبلغ النقدي المستلَم فعلاً — إن اختلف عن الصافي المحتسَب، يُسجَّل الفرق تلقائياً كسلفة (Loan / سلفة) في دفتر الأستاذ مع وصف تلقائي.',
      },
      {
        title: 'معاملة موحدة + Excel فوري',
        body: 'بالضغط على "معالجة": تُغلَق جميع الطلبات، يُحدَّث المخزون، تُسجَّل قيود المحاسبة — كل ذلك يُكمَل أو يُلغى معاً. بعدها مباشرةً: Excel بـ3 أوراق جاهز للتنزيل.',
      },
    ],
    imgSrc: './assets/shp-3-action.png',
    imgAlt: 'نافذة تسوية التحصيل مع الصافي والنقد المستلَم وخيار التاريخ الموحَّد',
  },
  {
    id: 'ledger',
    label: 'دفتر الأستاذ',
    icon: <BookOpen size={16} />,
    steps: [
      {
        title: 'سجل كامل لكل معاملة مالية',
        body: 'كل تسوية تُنتج قيوداً مفصَّلة: Order Closing بالصافي الكلي، Cash Payout لكل مبلغ مستلَم، Loan عند أي فرق، Return Cost للمرتجع المدفوع، Compensation للتالف — كل قيد بتاريخ ورقم وعمليات إضافية.',
      },
      {
        title: 'سلف وسداد',
        body: 'أضف سلفة موجبة (الشركة تعطيك) أو سالبة (تعطيها للشركة) — عند السلبية يتحقق النظام من رصيد الخزنة أولاً. كل سلفة مفتوحة لها زر "سداد" مع إدخال المبلغ.',
      },
      {
        title: 'KPI فوري: ما المستحق الآن؟',
        body: '"الصافي المستحق" = المبلغ المعلّق − رصيد السلفة. رقم سالب يعني أنك مدين للشركة. رقم موجب يعني الشركة مدينة لك — يظهر تلقائياً عند اختيار الشركة.',
      },
      {
        title: 'Shipping Settlement Fact لكل طلب',
        body: 'لكل دفعة تسوية: GUID فريد يربط كل الطلبات المُغلقة في تلك الجلسة — يتيح تفصيل أي تسوية تاريخية بالتاريخ والمبالغ لأغراض التدقيق.',
      },
    ],
    imgSrc: './assets/shp-4-details.png',
    imgAlt: 'دفتر أستاذ الشركة مع قائمة المعاملات وزر السداد للسلف المفتوحة',
  },
  {
    id: 'analytics',
    label: 'التحليلات',
    icon: <BarChart3 size={16} />,
    steps: [
      {
        title: 'معدل التوصيل ومتوسط الأيام',
        body: 'نسبة الطلبات المُسلَّمة مقابل المرتجعة والتالفة، ومتوسط الأيام من الشحن للتسليم — قيِّم أداء كل شركة شحن بأرقام وليس بانطباعات.',
      },
      {
        title: 'أداء بالمحافظة',
        body: 'رسوم بيانية لمعدل التوصيل ومتوسط أيام التسليم لكل محافظة — اكتشف أي المناطق فيها تأخير متكرر وأي شركة أفضل في مناطق بعينها.',
      },
      {
        title: 'اتجاهات شهرية وفلترة بالتاريخ',
        body: 'رسم خطي لعدد الطلبات المُسلَّمة والمرتجعة شهرياً مع اختيار نطاق تاريخ مخصص — تتبع ارتفاع أو انخفاض الأداء عبر الزمن.',
      },
      {
        title: 'أعلى المحافظات طلباً',
        body: 'ترتيب المحافظات بعدد الطلبات — ركِّز مخزونك اللوجستي وشركات الشحن في المناطق الأكثر إيراداً.',
      },
    ],
    imgSrc: './assets/shp-5-extras.png',
    imgAlt: 'لوحة تحليلات الشحن: معدل التوصيل والأداء بالمحافظة والاتجاهات الشهرية',
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
            من الإسناد للشركة إلى{' '}
            <span style={{ color: ACCENT_HEX }}>التقرير النهائي</span>
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
                  : 'border-ocean-700 text-ocean-400 hover:border-sky-500/40 hover:text-sky-400'
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
    q: 'كيف يُحسَب الصافي لكل حالة طلب؟',
    a: 'القاعدة الثابتة (Rule 4) — بدون إيداع: مُسلَّم = المجموع − رسوم الشحن | جزئي = السعر الجديد − رسوم الشحن | مرتجع بدون تكلفة = صفر | مرتجع بتكلفة شحن على المُرسِل = −التكلفة الإضافية | تالف = +التعويض. والإيداع لا يدخل في أي حسبة.',
  },
  {
    q: 'ماذا يحدث للمخزون عند المرتجع والتالف؟',
    a: 'المرتجع → يُضاف للـ QuarantineStock (مخزون الحجر) مع حركة Return_In، وتُحرَّر الكمية المحجوزة فوراً. التالف → يُضاف للـ DamagedCnt مع تسجيل DamagedLoss (عدد الوحدات × تكلفة الوحدة) على المنتج. كل ذلك يحدث تلقائياً داخل معاملة الإغلاق.',
  },
  {
    q: 'كيف يعمل التسليم الجزئي؟',
    a: 'عند اختيار "جزئي": إذا كان الطلب يحتوي على بنادل (Bundles)، يُفكِّكها النظام إلى مكوناتها تلقائياً. تُدخِل الكميات المُسلَّمة وسعر الوحدة لكل منتج — السعر الجديد = Σ(كمية مُسلَّمة × السعر). المرتجع من الطلب يذهب للحجر الصحي، والحجز يُحرَّر.',
  },
  {
    q: 'ما معنى "السلفة التلقائية" وما الذي يُطلقها؟',
    a: 'عند التحصيل إذا كان المبلغ النقدي المدخَل يختلف عن الصافي المحتسَب (بفرق > 0.1 جنيه)، يُسجَّل الفرق تلقائياً كسلفة (Loan / سلفة) في دفتر الأستاذ مع وصف = "Diff (Bill: X - Cash: Y)". السلفة مفتوحة ويمكن سدادها لاحقاً.',
  },
  {
    q: 'هل يمكن معالجة نفس الطلب مرتين بالخطأ؟',
    a: 'لا — "Terminal State Guard" (S-08). بمجرد وصول الطلب لأي حالة إغلاق (Delivered / Returned / Damaged / Cancelled)، يُطابقه النظام ضد قائمة الحالات النهائية ويُتخطَّى تلقائياً إن أُعيد إرساله في دفعة لاحقة — بدون تكرار للقيود ولا مشاكل مخزون مضاعفة.',
  },
  {
    q: 'ماذا يحدث لو انقطع الاتصال أثناء التسوية الجماعية؟',
    a: 'كل التسوية تتم في معاملة قاعدة بيانات واحدة (Begin/Commit/Rollback). إذا حدث أي خطأ قبل الـ Commit — بما فيه DbUpdateConcurrencyException من تعارض طلبات متزامنة — تُلغى كل التغييرات تلقائياً ولا يُسجَّل أي قيد. تظهر رسالة "تم تعديل أحد الطلبات بالتوازي — أعِد المحاولة".',
  },
  {
    q: 'هل يمكن لمتجرين مختلفين أن يري أحدهما بيانات الآخر؟',
    a: 'مستحيل — حماية رباعية: (1) S-04 يُعيد التحقق من ملكية شركة الشحن قبل المعالجة في الـ Controller والـ Service معاً. (2) S-07 يُصفِّي VariantIds للحالة الحالية فقط. (3) كل استعلام مُقيَّد بـ CompanyId. (4) الطلب الفردي يُتحقَّق منه بـ companyId قبل أي تغيير.',
  },
  {
    q: 'ما هي الشرائح الثلاث في تقرير Excel؟',
    a: 'Sheet 1: تفاصيل التسوية — قائمة الطلبات المُغلقة في هذه الدفعة مع المبالغ والحالات. Sheet 2: الطلبات المعلّقة — ما زال في يد الشركة بعد التسوية. Sheet 3: الطلبات المتأخرة — الطلبات التي تجاوزت العتبة الزمنية المُحددة (1-180 يوم).',
  },
  {
    q: 'هل التقرير يتضمن كل الطلبات أم فقط العينة الأولى؟',
    a: 'كل الطلبات — تقرير Excel يستخدم IAsyncEnumerable (streaming) لجلب جميع طلبات الشركة المتبقية بدون تحديد عدد. هذا يضمن أن الطلبات المعلّقة في تقرير Excel كاملة حتى لو كانت بالآلاف.',
  },
  {
    q: 'لماذا لا يمكن حذف شركة شحن عليها طلبات؟',
    a: 'لحماية سلامة البيانات — إذا حُذفت الشركة وعليها طلبات نشطة ستتيتم تلك الطلبات بدون مرجع. النظام يعدّ الطلبات المرتبطة بها (مُقيَّدة بـ companyId الحالي) ويُرفض الحذف مع رسالة "لا يمكن الحذف: X طلب لا يزال مُسنَداً".',
  },
  {
    q: 'هل يمكنني إدارة أكثر من شركة شحن؟',
    a: 'نعم — عدد غير محدود من شركات الشحن، ولكل شركة: دفتر أستاذ مستقل، طلبات منفصلة، تحليلات مستقلة، منظومة سلف مستقلة. كل شيء مُقسَّم بوضوح ولا تختلط بيانات شركة بأخرى.',
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
            إجابات من الكود مباشرة —{' '}
            <span style={{ color: ACCENT_HEX }}>لا وعود فارغة</span>
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
    href: '/#/features/orders',
    icon: <ShoppingCart size={20} />,
    title: 'الطلبات',
    body: 'الطلبات هي المدخل — بعد التجهيز تُسنَد لشركة شحن وتنتقل لهذه الوحدة لإتمام دورة حياتها.',
  },
  {
    href: '/#/features/inventory',
    icon: <Boxes size={20} />,
    title: 'إدارة المخزون',
    body: 'المرتجعات تذهب للحجر الصحي، التوالف تُسجَّل خسارة — كل ذلك ينعكس فورياً في أرصدة المخزون.',
  },
  {
    href: '/#/features/preparation',
    icon: <PackageOpen size={20} />,
    title: 'التحضير والتجهيز',
    body: 'التحضير هو الخطوة السابقة للشحن — الطلبات المُحضَّرة تنتقل مباشرةً للإسناد لشركة الشحن.',
  },
  {
    href: '/#/features/reports',
    icon: <BarChart2 size={20} />,
    title: 'التقارير',
    body: 'معدلات التوصيل وأداء الشركات والإيرادات المُحصَّلة تظهر في تقارير المبيعات والأداء الشامل.',
  },
  {
    href: '/#/features/expenses',
    icon: <TrendingDown size={20} />,
    title: 'المصروفات',
    body: 'رسوم الشحن ومدفوعات التحصيل تُسجَّل تلقائياً كإيرادات أو مصروفات تبعاً لاتجاه المعاملة.',
  },
  {
    href: '/#/features/manufacturing',
    icon: <Factory size={20} />,
    title: 'التصنيع',
    body: 'البنادل في الطلبات المرتجعة تُفكَّك إلى مكوناتها عند الإرجاع الجزئي — تكامل تلقائي مع وصفات BOM.',
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
            الشحن حلقة في{' '}
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
                className="group relative flex flex-col gap-3 rounded-2xl border border-ocean-700/50 bg-ocean-900/60 p-6 overflow-hidden transition-all duration-300 hover:border-sky-500/40 hover:-translate-y-1 hover:shadow-lg block"
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
                    <ChevronRight size={14} className="text-ocean-500 group-hover:text-sky-400 transition-colors" />
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
            className="pointer-events-none absolute w-[480px] h-[240px] rounded-full blur-3xl opacity-[0.18] -z-10"
            style={{ background: `radial-gradient(ellipse, ${ACCENT_HEX} 0%, transparent 70%)` }}
          />

          <motion.div variants={fadeUp()}>
            <SectionLabel>ابدأ الآن</SectionLabel>
          </motion.div>

          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white leading-tight">
            حوِّل إدارة الشحن من عبء يومي{' '}
            <span style={{ color: ACCENT_HEX }}>إلى نقرة واحدة.</span>
          </motion.h2>

          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 text-base max-w-xl leading-relaxed">
            لا مزيد من الشيتات وحسابات الورقة والقلم مع كل شركة شحن — انضم لآلاف التجار الذين يُغلقون دفعاتهم
            في دقيقة ويتابعون أداءهم بالأرقام.
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
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-sky-500/40 hover:text-sky-400 transition-all duration-200"
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

export default function ShippingPage() {
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
