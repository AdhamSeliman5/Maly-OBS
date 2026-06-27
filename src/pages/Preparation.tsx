/**
 * Preparation.tsx — Dedicated marketing page for the Preparation (التحضير والتجهيز) module.
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
import {
  PackageOpen,
  Star,
  Zap,
  ChevronDown,
  ArrowLeft,
  CheckCircle2,
  FileSpreadsheet,
  ClipboardList,
  AlertTriangle,
  Clock,
  Truck,
  BarChart2,
  Box,
  Users,
  Settings,
  ChevronRight,
} from 'lucide-react'

// ─── Accent colour tokens ─────────────────────────────────────────────────────

const ACCENT      = 'rgba(20,184,166,'   // brand-teal
const ACCENT_HEX  = '#14b8a6'
const ACCENT_DIM  = 'rgba(20,184,166,0.12)'
const ACCENT_GLOW = '0 0 28px rgba(20,184,166,0.42)'

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
      {/* Background glows */}
      <div
        className="pointer-events-none absolute -top-20 right-1/3 w-[560px] h-[560px] rounded-full blur-3xl opacity-20"
        style={{ background: `radial-gradient(circle, ${ACCENT_HEX} 0%, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute top-32 left-0 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ background: `radial-gradient(circle, rgba(34,197,94,1) 0%, transparent 70%)` }}
      />
      {/* Dot grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Copy ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={fadeUp(0)} className="flex">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border"
                style={{ borderColor: ACCENT + '0.35)', background: ACCENT_DIM, color: ACCENT_HEX }}
              >
                <PackageOpen size={13} /> وحدة التحضير والتجهيز
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.05)}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.15] text-white"
            >
              من الطلب على الشاشة
              <br />
              <span style={{ color: ACCENT_HEX }}>لـ البضاعة في يد الكوريير</span>
              <br />
              بضغطة واحدة.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp(0.1)}
              className="text-slate-400 text-lg leading-relaxed max-w-lg"
            >
              وحدة التحضير في مالي-OBS بتنظّم طابور التجهيز بالكامل — من تحقق المخزون
              لحد تصدير الملف وإرسال الطلبات لشركة الشحن — في نظام متكامل وآمن.
            </motion.p>

            {/* Micro stats */}
            <motion.div
              variants={fadeUp(0.14)}
              className="flex flex-wrap gap-4 text-sm"
            >
              {[
                { value: '٥٠', label: 'طلب في الصفحة', suffix: '+' },
                { value: 'صفر', label: 'فرصة خطأ مخزون', suffix: '' },
                { value: '١٠', label: 'أعمدة في ملف الشحن', suffix: '' },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black tabular-nums" style={{ color: ACCENT_HEX }}>
                    {s.value}{s.suffix}
                  </span>
                  <span className="text-slate-500 text-xs leading-tight">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp(0.18)} className="flex flex-wrap gap-3 pt-2">
              <a
                href={WHATSAPP_CTA_URL}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-l from-brand-teal to-brand-teal-dark text-ocean-950 font-bold text-sm hover:scale-[1.04] active:scale-100 transition-all duration-200"
                style={{ boxShadow: '0 0 0 0 transparent' }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = ACCENT_GLOW)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 0 0 transparent')}
              >
                ابدأ تجربتك المجانية
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-slate-700 text-slate-300 font-bold text-sm hover:border-brand-teal/50 hover:text-brand-teal hover:bg-brand-teal/5 transition-all duration-200"
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
            className="relative flex items-center justify-center"
          >
            <div
              className="relative w-full rounded-3xl overflow-hidden border border-white/[0.07]"
              style={{
                background: 'rgba(7,21,42,0.6)',
                boxShadow: `0 0 0 1px ${ACCENT}0.12), 0 32px 80px rgba(0,0,0,0.55)`,
              }}
            >
              {/* Glow strip on top edge */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: `linear-gradient(to right, transparent, ${ACCENT_HEX}, transparent)` }}
              />
              <img
                src="./assets/prep-1-hero.png"
                alt="واجهة وحدة التحضير في مالي-OBS"
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
  { icon: AlertTriangle, value: '٣٧٪', label: 'من أخطاء الشحن بتيجي من تحضير غلط أو بيانات مكررة' },
  { icon: Clock,         value: '٤٢ دقيقة', label: 'متوسط ما بيضيع فريق التحضير يومياً في البحث اليدوي والفلترة' },
  { icon: Box,           value: '١ من كل ٥', label: 'طلبات بتتأخر بسبب نقص مخزون ما اتكشفش قبل التحضير' },
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
              <s.icon size={22} className="text-rose-400 opacity-80" />
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
          * أرقام مستخلصة من تحليل سلوك مستخدمي المتاجر الإلكترونية في السوق المصري.
        </motion.p>
      </div>
    </section>
  )
}

// ─── 3. VALUE PROPOSITION ─────────────────────────────────────────────────────

const VALUE_CARDS = [
  {
    icon: CheckCircle2,
    title: 'تحقق مخزون أتومي قبل كل تحضير',
    desc:  'شاشة التحضير بياعة وشاطرة؛ أول ما بتدوس "تحضير"، السيستم بيتأكد من وجود البضاعة ويخصمها من المخزن في نفس اللحظة وفي خطوة واحدة. ده بيضمن لك إن مستحيل طلبين يتسحبوا على نفس آخر قطعة عندك في المخزن في نفس الوقت.. مخزنك دايمًا منضبط بالمليم.',
    color: 'text-emerald-400',
  },
  {
    icon: Star,
    title: 'أولوية الطلبات العاجلة تلقائياً',
    desc:  'علّم أي طلب كـ"عاجل" وهيظهر دايماً في أول القائمة بغض النظر عن الترتيب الزمني. مفيش تأخير في الطلبات الحساسة.',
    color: 'text-amber-400',
  },
  {
    icon: Zap,
    title: 'تحضير جماعي بضغطة واحدة',
    desc:  'مش محتاج تضغط على كل طلب لوحده. اختار "تحضير تلقائي" للصفحة الحالية أو كل الطلبات دفعة واحدة — النظام بيحضّر كل الطلبات اللي المخزون متاحلها فوراً.',
    color: 'text-sky-400',
  },
  {
    icon: ClipboardList,
    title: 'قائمة الانتقاء (Picking List) حية',
    desc:  'في جنبك شريط بيجمعلك إجمالي كميات كل المنتجات اللي محتاجة تتحضر من كل الأوردرات مرة واحدة. كده فريقك هيعرف يلم البضاعة كلها من المخزن بسرعة وبنظام قبل ما يبدأ في مرحلة التغليف والتعبئة.',
    color: 'text-violet-400',
  },
  {
    icon: FileSpreadsheet,
    title: 'تصدير Excel احترافي في ثوانٍ',
    desc:  'ملف Excel باللغة العربية فيه ١٠ أعمدة — كود الأوردر، العميل، رقمين تلفون، المنتجات، العنوان، المحافظة، الملاحظات، الإجمالي، تاريخ الشحن. مناسب مباشرةً لشركات الشحن.',
    color: 'text-orange-400',
  },
  {
    icon: AlertTriangle,
    title: 'تقرير النقص الشامل',
    desc:  'بدل ما تكتشف النقص بعد ما العميل يتصل، النظام بيحسب بالضبط كل منتج ناقص — المطلوب، المتاح، والنقص — في تقرير واضح قبل ما تبدأ.',
    color: 'text-rose-400',
  },
  {
    icon: Clock,
    title: 'تأجيل ذكي للطلبات المبكرة',
    desc:  'الطلبات اللي موعد تسليمها بعيد بتانتقل لتاب "المؤجلة" وتصحى تلقائياً قبل الموعد بعدد أيام تحددها أنت. مفيش طلب هيتنسى ومفيش إزعاج مبكر.',
    color: 'text-teal-400',
  },
  {
    icon: PackageOpen,
    title: 'تفكيك البانديل (Bundle Explosion)',
    desc:  'لما عندك بانديل جاهز، قدر تفككه لمكوناته وتعدّل كميات كل مكون بشكل منفصل. النظام بيمنع التفكيك الكامل لأن لازم يفضل مكون واحد على الأقل.',
    color: 'text-pink-400',
  },
  {
    icon: Truck,
    title: 'شحن وتصدير في خطوة واحدة',
    desc:  'خيار "شحن وتصدير" بيحدّث حالة الطلبات لـ"مشحون"، بيسند شركة الشحن وتاريخ الشحن، ويخصم المخزون، ويصدر الملف، ويزامن مع Google Sheets — كل ده بضغطة واحدة.',
    color: 'text-green-400',
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
          <motion.div variants={fadeUp(0)}>
            <SectionLabel>ليه وحدة التحضير؟</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp(0.04)}
            className="text-3xl sm:text-4xl font-black text-white leading-tight"
          >
            المشاكل اللي حلّيناها — مش بس وصفناها
          </motion.h2>
          <motion.p
            variants={fadeUp(0.08)}
            className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed"
          >
            كل ميزة اتبنت على سيناريو حقيقي بيعيشه أصحاب المتاجر في مصر كل يوم.
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
              variants={fadeUp(i * 0.05)}
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
              <div className={`w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] ${card.color}`}>
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
  id:      string
  label:   string
  icon:    typeof PackageOpen
  imgSrc:  string
  imgAlt:  string
  imgW:    number
  imgH:    number
  steps:   { title: string; desc: string }[]
}

const WALKTHROUGH_TABS: WalkthroughTab[] = [
  {
    id:     'list',
    label:  'قائمة الطلبات',
    icon:   ClipboardList,
    imgSrc: './assets/prep-2-list.png',
    imgAlt: 'قائمة طلبات التحضير مع الفلاتر وشارات الحالة',
    imgW:   880,
    imgH:   540,
    steps: [
      {
        title: 'شارات الإحصاء الفورية',
        desc:  'في كل لحظة بتشوف: إجمالي الطلبات، الجاهزة للتحضير، المحضّرة، الناقص فيها مخزون، الاستبدال، والنواقص — كلها فوق الشاشة بدون ما تعمل أي حاجة.',
      },
      {
        title: 'فلترة متعددة الأبعاد',
        desc:  'قدر تفلتر بالمحافظة (متعدد الاختيار)، النوع (جديد / استبدال / نواقص / نقص مخزون)، أو تدوّر بالاسم أو كود الطلب أو رقم الهاتف أو المنتج في نفس الوقت.',
      },
      {
        title: 'ترقيم تلقائي بـ ٥٠ طلب',
        desc:  'الصفحة بتعرض ٥٠ طلب وبتحفظ رقم صفحتك حتى لو أقفلت التاب. ما محتاجش تتعب تدوّر على ما وصلتله.',
      },
      {
        title: 'مؤشر المخزون العيني',
        desc:  'كل بطاقة بتعرض مثلاً "٣/٥" — ٣ أصناف متاحة من أصل ٥ محتاجين. بنظرة واحدة تعرف إيه الجاهز وإيه اللي ناقص.',
      },
    ],
  },
  {
    id:     'action',
    label:  'إجراءات الطلب',
    icon:   Zap,
    imgSrc: './assets/prep-3-action.png',
    imgAlt: 'أزرار تحضير الطلب وقائمة الإجراءات',
    imgW:   880,
    imgH:   540,
    steps: [
      {
        title: 'تحضير فردي بضمان المخزون',
        desc:  'لما تضغط "تحضير"، النظام بيعمل قفل على المخزون في قاعدة البيانات مباشرةً. لو حد تاني حضّر نفس المنتج قبلك بثانية، هتشوف رسالة "المخزون غير كافي" بدل ما تكتشف الخطأ بعدين.',
      },
      {
        title: 'تحضير جماعي ذكي',
        desc:  'زر "تحضير تلقائي" بيشتغل على الصفحة الحالية أو كل الطلبات المعلقة. النظام بيحضّر كل الجاهزين ويتجاهل الناقصين ويخبرك بالعدد في كلا الحالتين.',
      },
      {
        title: 'إلغاء الطلب مع مزامنة الشيتس',
        desc:  'إلغاء الطلب بيحرر المخزون المحجوز ويبعت الحالة لـ Google Sheets تلقائياً (ملغى). حتى لو الفريق شغال على تاب تاني، الصورة دايماً محدثة.',
      },
      {
        title: 'تأجيل مرن بخيارات جاهزة',
        desc:  'أجّل الطلب يوم، ٣ أيام، أسبوع، أو أسبوعين — أو اختار تاريخ محدد. الطلب بيانتقل لتاب "المؤجلة" ويصحى تلقائياً في الوقت المناسب.',
      },
    ],
  },
  {
    id:     'details',
    label:  'تفاصيل وبيانات',
    icon:   PackageOpen,
    imgSrc: './assets/prep-4-details.png',
    imgAlt: 'تفاصيل الطلب والنقص والبيانات الكاملة',
    imgW:   880,
    imgH:   540,
    steps: [
      {
        title: 'تفاصيل العميل الكاملة',
        desc:  'بضغطة "التفاصيل" بتشوف اسم العميل، رقمين تلفون، العنوان الكامل، المحافظة، الإجمالي، المقدم، مصاريف الشحن، والملاحظات — كلها في مودال واحد.',
      },
      {
        title: 'تقرير النقص التفصيلي',
        desc:  'لكل طلب فيه نقص، قدر تشوف جدول بـ: اسم المنتج، الكمية المطلوبة، المتاحة، والفرق بالضبط. تعرف تتصرف صح بدون تخمين.',
      },
      {
        title: 'ملخص النقص الشامل',
        desc:  'تقرير موحد بكل أصناف اللي فيها نقص عبر كل الطلبات — بيساعدك تحدد أولويات الشراء وتتفادى التوقف.',
      },
      {
        title: 'تفكيك البانديل بدقة',
        desc:  'عدّل مكونات البانديل بزيادة أو تقليل الكميات أو حذف مكون زيادة. النظام بيتحقق إن فضل مكون واحد على الأقل ثم يطبّق التفكيك ويعلّم الطلب كـ"معدّل يدوياً".',
      },
    ],
  },
  {
    id:     'extras',
    label:  'التصدير والشحن',
    icon:   FileSpreadsheet,
    imgSrc: './assets/prep-5-extras.png',
    imgAlt: 'شاشة تصدير الطلبات وخيارات الشحن',
    imgW:   880,
    imgH:   540,
    steps: [
      {
        title: 'تصدير Excel فقط',
        desc:  'لو محتاج الملف بس بدون تغيير حالة الطلبات، اختار "Excel فقط". الملف العربي جاهز فوراً بكل بيانات العميل والمنتجات.',
      },
      {
        title: 'شحن وتصدير متكامل',
        desc:  'اختار شركة الشحن وتاريخ الشحن ثم "شحن وتصدير" — النظام بيحدّث الحالة لـ"مشحون"، يخصم المخزون، يصدر الملف، ويزامن مع Google Sheets دفعة واحدة.',
      },
      {
        title: 'Picking List في السايدبار',
        desc:  'السايدبار الجانبي بيعرض قائمة مجمّعة بكل المنتجات المطلوبة وكمياتها الإجمالية. فريقك بيجمّع من المخزن بدقة بدون ما يعدّد طلب طلب.',
      },
      {
        title: 'مزامنة Google Sheets',
        desc:  'زر الـ Cloud بيسحب آخر الطلبات من الشيتس ويحدّث القائمة فوراً. لو في تغييرات مطلوب تحديثها، شغّله ومستنتظرش.',
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
          <motion.div variants={fadeUp(0)}>
            <SectionLabel>كيف تطغل؟</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp(0.04)}
            className="text-3xl sm:text-4xl font-black text-white leading-tight"
          >
            جولة تفاعلية داخل الوحدة
          </motion.h2>
          <motion.p
            variants={fadeUp(0.08)}
            className="text-slate-400 text-base max-w-xl mx-auto"
          >
            اختار أي قسم عشان تشوف التفاصيل الكاملة وكيف كل خطوة بتشتغل.
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
                style={active ? { background: `linear-gradient(135deg, ${ACCENT_HEX}, #0d9488)` } : {}}
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
            {/* Steps */}
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
                    style={{ background: `linear-gradient(135deg, ${ACCENT_HEX}, #0d9488)` }}
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

interface FaqItem {
  q: string
  a: string
}

const FAQS: FaqItem[] = [
  {
    q: 'إيه الفرق بين "Excel فقط" و"شحن وتصدير"؟',
    a: '"Excel فقط" بيصدّر الملف بس من غير ما يأثر على حالة الطلبات أو المخزون — مفيد لو عايز تراجع قبل التأكيد. أما "شحن وتصدير" فبيحدّث حالة كل طلب لـ"مشحون"، بيخصم المخزون، ببعت التحديث لـ Google Sheets، وبيصدرالملف — كل ده في عملية واحدة مضمونة.',
  },
  {
    q: 'لو موظفان ضغطوا "تحضير" على نفس الطلب في نفس الوقت، هيحصل إيه؟',
    a: 'النظام بيستخدم Atomic Conditional UPDATE في قاعدة البيانات — بيتحقق من الرصيد ويخصمه في استعلام واحد مغلق بـ Transaction. الموظف الأول هيتم له التحضير، والثاني هياخد رسالة "المخزون غير كافي" وهيفشل بأمان. مفيش احتمال يفوت النقص.',
  },
  {
    q: 'إيه هي الطلبات "المؤجلة" وإمتى بترجع؟',
    a: 'الطلب المؤجل هو طلب اتقرر تحضيره في تاريخ لاحق. بيانتقل فوراً لتاب "المؤجلة" ومخزونه بينحرر. من إعدادات الوحدة قدر تضبط "عدد الأيام قبل الموعد" (مثلاً ٥)، وساعتها الطلب بيظهر تلقائياً في القائمة الرئيسية عشان يتحضر في الوقت المناسب.',
  },
  {
    q: 'مين بيقدر يشوف وحدة التحضير؟',
    a: 'الوصول للوحدة خاضع لنظام الصلاحيات في مالي-OBS. المدير بيحدد من الموظفين اللي عندهم إذن دخول. حتى لو الموظف داخل، بعض الإجراءات الحساسة (زي الإلغاء) ممكن تتقيد بصلاحيات إضافية.',
  },
  {
    q: 'لو الطلب فيه بانديل (Bundle)، كيف بيتحضر؟',
    a: 'النظام بيفك البانديل أوتوماتيكياً لمكوناته الفعلية (PhysicalReq) ويتحقق من المخزون على مستوى كل مكون منفردًا. لو عايز تعدل المكونات يدوياً، افتح "تعديل البانديل" من قائمة الطلب، عدّل الكميات، واضغط "تأكيد التفكيك".',
  },
  {
    q: 'هل ممكن أحضّر طلب نواقص أو استبدال؟',
    a: 'أيوه. النظام بيتعرف على أنواع الطلبات الثلاثة (جديد / استبدال / نواقص) بالعربي والإنجليزي ويعاملهم بنفس منطق التحضير. في ملف الـ Excel كمان بيضيف أحكام على اسم العميل تلقائياً (تسليم وتسلم / نواقص).',
  },
  {
    q: 'قائمة الانتقاء (Picking List) بتتحسب إزاي؟',
    a: 'النظام بيجمع PhysicalReq (الكميات الفيزيائية الفعلية بعد فك البانديل) لكل الطلبات المحضّرة في العرض الحالي. النتيجة بتتعرض مرتبة أبجدياً في السايدبار الجانبي. لو فلتّرت بمحافظة معينة، القائمة بتتحدث هي كمان.',
  },
  {
    q: 'فيه حدود على عدد الطلبات في الصفحة؟',
    a: 'الشاشة بتعرض ٥٠ طلب في الصفحة الواحدة والترقيم تلقائي. رقم الصفحة بيتحفظ في localStorage — يعني لو أقفلت وفتحت، هترجع لنفس المكان. في نفس الوقت، التحضير الجماعي بيقدر يشتغل على كل الطلبات دفعة واحدة بغض النظر عن عدد الصفحات.',
  },
  {
    q: 'هل ملف Excel بيتضمن العنوان والملاحظات؟',
    a: 'أيوه. الملف فيه ١٠ أعمدة: كود الأوردر، اسم العميل (مع اللاحقة المناسبة)، رقم هاتف ١، رقم هاتف ٢، المنتجات (الاسم والكمية)، العنوان بالتفصيل، المحافظة، الملاحظات، الإجمالي، وتاريخ الشحن. كل الأعمدة بتتضبط عرضها تلقائياً.',
  },
  {
    q: 'إيه اللي بيحصل للمخزون لما أعمل Undo لطلب محضّر؟',
    a: 'النظام بيرجع بالضبط نفس الكميات اللي اتخصمت لما اتحضر. ما فيش فقد في المخزون. في حالة الإلغاء أو التأجيل كمان نفس الموضوع — المخزون المحجوز بيترجع فوراً.',
  },
]

function FaqItem({ item, index }: { item: FaqItem; index: number }) {
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
          <motion.div variants={fadeUp(0)}>
            <SectionLabel>أسئلة شائعة</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp(0.04)}
            className="text-3xl sm:text-4xl font-black text-white leading-tight"
          >
            كل سؤال في دماغك — هنا إجابته
          </motion.h2>
          <motion.p
            variants={fadeUp(0.08)}
            className="text-slate-400 text-base max-w-xl mx-auto"
          >
            بنيّ الوحدة على أساس الأسئلة الحقيقية اللي بتسألها قبل ما تشتري أي نظام.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <FaqItem key={i} item={item} index={i} />
          ))}
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
    title: 'إدارة الطلبات',
    desc:  'استيراد وتتبع كل طلب من الاستلام لحد التسليم.',
  },
  {
    id:    'inventory',
    icon:  Box,
    color: 'text-sky-400',
    bg:    'bg-sky-400/10',
    title: 'المخزون',
    desc:  'رصيد لحظي، تنبيهات النفاد، وربط تلقائي مع وحدة التحضير.',
  },
  {
    id:    'shipping',
    icon:  Truck,
    color: 'text-orange-400',
    bg:    'bg-orange-400/10',
    title: 'الشحن',
    desc:  'إدارة شركات الشحن وتحديثات التتبع من مكان واحد.',
  },
  {
    id:    'reports',
    icon:  BarChart2,
    color: 'text-violet-400',
    bg:    'bg-violet-400/10',
    title: 'التقارير',
    desc:  'أداء التجهيز، إنتاجية الفريق، وتحليلات المخزون.',
  },
  {
    id:    'hr',
    icon:  Users,
    color: 'text-pink-400',
    bg:    'bg-pink-400/10',
    title: 'الموارد البشرية',
    desc:  'تتبع أداء فريق التحضير وقياس الإنتاجية الفردية.',
  },
  {
    id:    'permissions',
    icon:  Settings,
    color: 'text-amber-400',
    bg:    'bg-amber-400/10',
    title: 'الصلاحيات',
    desc:  'تحكم كامل في من يقدر يحضّر أو يلغي أو يصدّر.',
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
          <motion.div variants={fadeUp(0)}>
            <SectionLabel>وحدات مرتبطة</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp(0.04)}
            className="text-3xl sm:text-4xl font-black text-white"
          >
            وحدة التحضير مش بتشتغل لوحدها
          </motion.h2>
          <motion.p
            variants={fadeUp(0.08)}
            className="text-slate-400 text-base max-w-xl mx-auto"
          >
            كل وحدة في مالي-OBS بتتكامل مع التحضير تلقائياً — من المخزون لحد التقارير.
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
                    <ChevronRight size={13} className="text-slate-600 group-hover:text-brand-teal group-hover:translate-x-[-2px] transition-all duration-200 shrink-0" />
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
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-ocean-800/40 backdrop-blur-sm px-8 py-14 flex flex-col items-center text-center gap-6"
          style={{ boxShadow: `inset 0 0 80px ${ACCENT}0.04), 0 32px 80px rgba(0,0,0,0.45)` }}
        >
          {/* Corner ambient */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${ACCENT}0.15) 0%, transparent 70%)` }}
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)` }}
          />
          {/* Top hairline */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{ background: `linear-gradient(to right, transparent, ${ACCENT_HEX}, transparent)` }}
          />

          <div className="relative z-10 flex flex-col items-center gap-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-ocean-950"
              style={{ background: `linear-gradient(135deg, ${ACCENT_HEX}, #0d9488)` }}
            >
              <PackageOpen size={26} strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                جاهز تنظّم طابور التجهيز <br />
                <span style={{ color: ACCENT_HEX }}>وتبعت أوردراتك أسرع؟</span>
              </h2>
              <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
                تواصل معنا وسنُعدّ نسختك من مالي-OBS خلال 24 ساعة.
                أول شهر تجربة كاملة بدون أي التزام.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href={WHATSAPP_CTA_URL}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-ocean-950 font-extrabold text-sm hover:scale-[1.04] active:scale-100 transition-all duration-200"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT_HEX}, #0d9488)`,
                  boxShadow: ACCENT_GLOW,
                }}
              >
                تواصل معنا للبدء
                <ArrowLeft size={14} />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-slate-700 text-slate-300 font-bold text-sm hover:border-brand-teal/50 hover:text-brand-teal hover:bg-brand-teal/5 transition-all duration-200"
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

// ─── Back button strip ────────────────────────────────────────────────────────

function BackStrip() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 pt-8 pb-0">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-brand-teal transition-colors duration-200"
      >
        <ArrowLeft size={14} />
        الرئيسية
      </Link>
    </div>
  )
}

// ─── Page root ────────────────────────────────────────────────────────────────

export default function PreparationPage() {
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
