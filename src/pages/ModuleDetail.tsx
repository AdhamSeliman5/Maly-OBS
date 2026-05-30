import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { scrollToSectionState } from '../navigation/homeScroll'
import { motion } from 'framer-motion'
import { DEFAULT_DESCRIPTION, getOgImageUrl, SITE_NAME } from '../utils/seo'
import {
  Package, Users, Box, BarChart2, ShieldCheck, Truck,
  ChevronRight, ArrowLeft, CheckCircle2, type LucideIcon,
} from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Capability {
  title: string
  desc:  string
}

interface ModuleEntry {
  id:          string
  icon:        LucideIcon
  iconBg:      string
  iconText:    string
  accentColor: string     // raw hex / rgba used in inline styles
  title:       string
  tagline:     string
  description: string
  capabilities: Capability[]
}

// ─── Module data dictionary ───────────────────────────────────────────────────

const MODULE_DATA: Record<string, ModuleEntry> = {

  orders: {
    id:          'orders',
    icon:         Package,
    iconBg:       'bg-brand-teal/15',
    iconText:     'text-brand-teal',
    accentColor:  'rgba(20,184,166,',   // append opacity + ")"
    title:        'الطلبات والشحن',
    tagline:      'تتبع كامل لكل طلب، من الاستلام لحد التسليم.',
    description:
      'وحدة الطلبات في مالي-OBS بتديك صورة لحظية لكل طلب في متجرك — ' +
      'حالته الحالية، إيمن شركة الشحن، وتاريخ كل خطوة. ' +
      'ربط مباشر مع كبار شركات الشحن المصرية ومتابعة الأداء من داشبورد موحد.',
    capabilities: [
      {
        title: 'لوحة طلبات ذكية',
        desc:  'عرض لحظي لكل الطلبات مع فلترة متقدمة بالحالة، التاريخ، وشركة الشحن.',
      },
      {
        title: 'تتبع الشحنات',
        desc:  'ربط مباشر مع Bosta وAramex وJ&T Express. أرقام التتبع تتحدث أوتوماتيكياً.',
      },
      {
        title: 'استيراد الطلبات',
        desc:  'رفع ملفات Excel أو CSV لاستيراد مئات الطلبات في ثوانٍ.',
      },
      {
        title: 'تقارير الشحن',
        desc:  'معدلات التوصيل، الإرجاع، وأداء كل شركة شحن في تقارير شهرية واضحة.',
      },
    ],
  },

  hr: {
    id:          'hr',
    icon:         Users,
    iconBg:       'bg-sky-400/15',
    iconText:     'text-sky-400',
    accentColor:  'rgba(56,189,248,',
    title:        'شؤون الموظفين والـ HR',
    tagline:      'كل بيانات فريقك في مكان واحد — آمن ومنظم.',
    description:
      'وحدة الـ HR في مالي-OBS بتفصل بشكل كامل بين بيانات الموارد البشرية ' +
      'وبيانات الدخول للنظام. الرواتب، السلف، والمكافآت كلها قابلة للإدارة ' +
      'من شاشة واحدة مع سجل كامل لكل معاملة.',
    capabilities: [
      {
        title: 'إدارة الرواتب',
        desc:  'احتساب الرواتب الشهرية تلقائياً مع خصم السلف والمكافآت.',
      },
      {
        title: 'سجل السلف والقروض',
        desc:  'تتبع كل سلفة ومواعيد السداد مع إشعارات تلقائية للمدير.',
      },
      {
        title: 'صلاحيات منفصلة',
        desc:  'بيانات الـ HR مرئية للمدير فقط، باقي الموظفين بيشوفوا بياناتهم الشخصية فقط.',
      },
      {
        title: 'تقارير أداء الفريق',
        desc:  'قياس إنتاجية كل موظف بناءً على عدد الطلبات اللي حضّرها أو شحنها.',
      },
    ],
  },

  inventory: {
    id:          'inventory',
    icon:         Box,
    iconBg:       'bg-brand-green/15',
    iconText:     'text-brand-green',
    accentColor:  'rgba(34,197,94,',
    title:        'المخزون والتحضير',
    tagline:      'سيطرة تامة على أرصدة المنتجات وطابور التجهيز.',
    description:
      'وحدة المخزون بتخليك تعرف في أي لحظة كمية كل منتج، وتستقبل تنبيهات ' +
      'لما الرصيد يوصل للحد الأدنى. وحدة التحضير بتنظم طابور التجهيز للفريق ' +
      'بشكل احترافي ومقيس.',
    capabilities: [
      {
        title: 'رصيد لحظي',
        desc:  'تحديث المخزون تلقائياً مع كل طلب يتحضر أو يترجع.',
      },
      {
        title: 'تنبيهات النفاد',
        desc:  'تعيين حد أدنى لكل منتج والنظام بيبعتلك تنبيه قبل ما تنفد.',
      },
      {
        title: 'طابور التحضير',
        desc:  'فريق التحضير بيشوف قائمة طلباتهم بالترتيب وبيحدثوا الحالة على طول.',
      },
      {
        title: 'تقارير المخزون',
        desc:  'أكثر المنتجات مبيعاً، أبطاها دوران، وتحليل التكلفة في تقارير دورية.',
      },
    ],
  },

  reports: {
    id:          'reports',
    icon:         BarChart2,
    iconBg:       'bg-violet-400/15',
    iconText:     'text-violet-400',
    accentColor:  'rgba(167,139,250,',
    title:        'التقارير الذكية',
    tagline:      'قراراتك مبنية على أرقام، مش تخمينات.',
    description:
      'داشبورد موحد بيجمع كل مؤشرات أداء متجرك: الإيرادات، المصروفات، ' +
      'الربح الصافي، وأداء الفريق. صدّر تقاريرك بـ Excel أو PDF بضغطة واحدة.',
    capabilities: [
      {
        title: 'داشبورد الـ KPIs',
        desc:  'طلبات اليوم، الإيرادات، والربح الصافي في أرقام لحظية فوق الشاشة.',
      },
      {
        title: 'تقارير مالية',
        desc:  'تقارير الإيرادات والمصروفات اليومية والشهرية والسنوية.',
      },
      {
        title: 'تصدير Excel وPDF',
        desc:  'طباعة أو تصدير أي تقرير بصيغة Excel أو PDF بضغطة زر واحدة.',
      },
      {
        title: 'أداء الفريق',
        desc:  'مقارنة إنتاجية كل موظف على أساس عدد الطلبات المكتملة.',
      },
    ],
  },

  shipping: {
    id:          'shipping',
    icon:         Truck,
    iconBg:       'bg-orange-400/15',
    iconText:     'text-orange-400',
    accentColor:  'rgba(251,146,60,',
    title:        'الشحن وشركاء التوصيل',
    tagline:      'إدارة كل شركات الشحن من مكان واحد.',
    description:
      'اربط متجرك بكبار شركات الشحن المصرية وتابع كل شحنة في الوقت الفعلي. ' +
      'تحليلات الشحن بتساعدك تختار الشريك الأكفأ وتقلل معدل الإرجاع.',
    capabilities: [
      {
        title: 'ربط متعدد الشركات',
        desc:  'Bosta، Aramex، J&T، وغيرها — كلها من داشبورد واحد.',
      },
      {
        title: 'تحليلات الأداء',
        desc:  'مقارنة معدلات التسليم والإرجاع لأفضل قرار تعاقد.',
      },
      {
        title: 'تحديث الحالة تلقائياً',
        desc:  'النظام بيسحب تحديثات الشحنة كل ساعة ويحدّث سجل الطلب.',
      },
      {
        title: 'إشعارات الإرجاع',
        desc:  'تنبيه فوري لما أي شحنة تترجع مع سبب الإرجاع.',
      },
    ],
  },

  permissions: {
    id:          'permissions',
    icon:         ShieldCheck,
    iconBg:       'bg-amber-400/15',
    iconText:     'text-amber-400',
    accentColor:  'rgba(251,191,36,',
    title:        'الصلاحيات والأمان',
    tagline:      'كل موظف بيشوف اللي المفروض يشوفه بس.',
    description:
      'نظام صلاحيات دقيق بيضمن إن كل موظف يوصل للأدوات المناسبة لدوره فقط. ' +
      'المدير بيتحكم في كل إذن بالتفصيل، وكل عملية حساسة بتتسجل في سجل ' +
      'تدقيق كامل.',
    capabilities: [
      {
        title: 'أدوار مخصصة',
        desc:  'إنشاء أدوار وظيفية مخصصة لكل منصب في فريقك.',
      },
      {
        title: 'صلاحيات على مستوى الوحدة',
        desc:  'تحديد من يدخل لكل وحدة (طلبات، HR، تقارير) باستقلالية كاملة.',
      },
      {
        title: 'سجل التدقيق',
        desc:  'كل عملية حساسة مسجلة بالتاريخ والمستخدم للمراجعة.',
      },
      {
        title: 'حماية الـ SaaS',
        desc:  'تطبيق تلقائي لقيود الباقة (MaxUsers / MaxOrders) بدون أي ضغط.',
      },
    ],
  },

}

// ─── Animation variants ───────────────────────────────────────────────────────

const heroVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
}

const gridContainerVariants = {
  hidden:   {},
  visible:  { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const capabilityVariants = {
  hidden:   { opacity: 0, y: 32 },
  visible:  {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
}

// ─── CapabilityCard ───────────────────────────────────────────────────────────

function CapabilityCard({
  capability,
  accentColor,
}: {
  capability:  Capability
  accentColor: string
}) {
  return (
    <motion.div
      variants={capabilityVariants}
      whileHover={{
        y: -4,
        boxShadow: `0 0 0 1px ${accentColor}0.28), 0 12px 40px ${accentColor}0.08)`,
        transition: { duration: 0.2 },
      }}
      className="
        relative flex flex-col gap-3 p-6 rounded-2xl
        bg-ocean-800/40 backdrop-blur-sm
        border border-white/[0.07]
        overflow-hidden group
      "
    >
      {/* Top hairline glow on hover */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(to right, transparent, ${accentColor}0.5), transparent)` }}
      />

      {/* Check icon */}
      <CheckCircle2
        size={18}
        strokeWidth={2}
        style={{ color: `${accentColor}1)` }}
        className="shrink-0"
      />

      <div className="flex flex-col gap-1.5">
        <h3 className="text-white font-bold text-sm leading-snug">{capability.title}</h3>
        <p className="text-slate-400 text-xs leading-relaxed">{capability.desc}</p>
      </div>
    </motion.div>
  )
}

function ModuleDetailHelmet({
  title,
  description,
  noindex = false,
}: {
  title: string
  description: string
  noindex?: boolean
}) {
  const documentTitle = `${title} | ${SITE_NAME}`
  const ogImage = getOgImageUrl()

  return (
    <Helmet>
      <title>{documentTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={documentTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={documentTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}

// ─── ModuleDetail ─────────────────────────────────────────────────────────────

export default function ModuleDetail() {
  const { moduleId } = useParams<{ moduleId: string }>()
  const module = moduleId ? MODULE_DATA[moduleId] : undefined

  // ── 404 / Not Found ──────────────────────────────────────────────────────────
  if (!module) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4 bg-ocean-950 text-center">
        <ModuleDetailHelmet
          title="الوحدة غير موجودة"
          description={DEFAULT_DESCRIPTION}
          noindex
        />
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-3xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <span className="text-3xl">🔍</span>
          </div>
          <h1 className="text-3xl font-black text-white">الوحدة غير موجودة</h1>
          <p className="text-slate-400 max-w-sm">
            الرابط الذي فتحته لا يتوافق مع أي وحدة معروفة في النظام.
            تحقق من الرابط أو عد للرئيسية.
          </p>
        </div>
        <Link
          to="/"
          className="
            inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl
            bg-gradient-to-l from-brand-teal to-brand-teal-dark
            text-ocean-950 font-bold text-sm
            hover:shadow-[0_0_24px_rgba(20,184,166,0.45)]
            hover:scale-[1.04] active:scale-100
            transition-all duration-200
          "
        >
          <ArrowLeft size={16} />
          العودة للرئيسية
        </Link>
      </div>
    )
  }

  const { icon: Icon } = module

  return (
    <div className="min-h-screen bg-ocean-950">
      <ModuleDetailHelmet title={module.title} description={module.description} />

      {/* ── Dot-grid texture ─────────────────────────────────────────────── */}
      <div className="fixed inset-0 bg-dot-grid opacity-20 pointer-events-none" />

      {/* ── Central ambient glow matching module accent ───────────────────── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 15%, ${module.accentColor}0.07) 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">

        {/* ══════════════════════════════════════════════════════════════════
             BREADCRUMB
        ══════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="pt-8 pb-2 flex items-center gap-2 text-sm text-slate-500"
        >
          <Link
            to="/"
            className="
              inline-flex items-center gap-1.5 font-medium
              text-slate-400 hover:text-brand-teal
              transition-colors duration-150
            "
          >
            {/* Left-arrow = forward direction in RTL */}
            <ArrowLeft size={14} />
            العودة للرئيسية
          </Link>
          <ChevronRight size={12} className="rotate-180 text-slate-700" />
          <span className="text-slate-600 truncate">{module.title}</span>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════════
             MODULE HERO
        ══════════════════════════════════════════════════════════════════ */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="pt-12 pb-16 flex flex-col gap-6"
        >
          {/* Icon badge */}
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-3xl ${module.iconBg}`}
          >
            <Icon size={28} strokeWidth={1.7} className={module.iconText} />
          </div>

          {/* Texts */}
          <div className="flex flex-col gap-3 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              {module.title}
            </h1>
            <p
              className="text-xl font-semibold leading-snug"
              style={{ color: module.accentColor + '0.9)' }}
            >
              {module.tagline}
            </p>
            <p className="text-slate-400 text-base leading-relaxed mt-1">
              {module.description}
            </p>
          </div>

          {/* Hero CTA */}
          <div className="flex flex-wrap gap-3 mt-2">
            <Link
              to="/"
              state={scrollToSectionState('contact')}
              className="
                group inline-flex items-center gap-2 px-6 py-3 rounded-2xl
                bg-gradient-to-l from-brand-teal to-brand-teal-dark
                text-ocean-950 font-bold text-sm
                hover:shadow-[0_0_24px_rgba(20,184,166,0.45)]
                hover:scale-[1.04] active:scale-100
                transition-all duration-200
              "
            >
              تواصل معنا للبدء
              <svg className="w-3.5 h-3.5 shrink-0 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <Link
              to="/"
              state={scrollToSectionState('features')}
              className="
                inline-flex items-center gap-2 px-6 py-3 rounded-2xl
                border border-slate-700 text-slate-300 font-bold text-sm
                hover:border-brand-teal/50 hover:text-brand-teal hover:bg-brand-teal/5
                transition-all duration-200
              "
            >
              استكشف باقي المميزات
            </Link>
          </div>
        </motion.div>

        {/* ── Horizontal divider ──────────────────────────────────────────── */}
        <div
          className="h-px w-full mb-16"
          style={{
            background: `linear-gradient(to left, transparent, ${module.accentColor}0.25), transparent)`,
          }}
        />

        {/* ══════════════════════════════════════════════════════════════════
             KEY CAPABILITIES GRID
        ══════════════════════════════════════════════════════════════════ */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-1.5 mb-10"
          >
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: module.accentColor + '0.85)' }}
            >
              القدرات الأساسية
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              ما الذي يقدر يفعله هذا الموديول؟
            </h2>
          </motion.div>

          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {module.capabilities.map((cap) => (
              <CapabilityCard
                key={cap.title}
                capability={cap}
                accentColor={module.accentColor}
              />
            ))}
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
             BOTTOM CTA BAND
        ══════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            mt-16 relative rounded-3xl overflow-hidden
            bg-ocean-800/40 backdrop-blur-sm
            border border-white/[0.07]
            px-8 py-10
            flex flex-col sm:flex-row items-center justify-between gap-6
          "
          style={{
            boxShadow: `inset 0 0 60px ${module.accentColor}0.04)`,
          }}
        >
          {/* Ambient corner */}
          <div
            className="absolute top-0 right-0 w-56 h-56 pointer-events-none"
            style={{
              background: `radial-gradient(circle at top right, ${module.accentColor}0.08) 0%, transparent 65%)`,
            }}
          />
          <div className="relative z-10 flex flex-col gap-1.5 text-center sm:text-right">
            <h3 className="text-xl font-black text-white">
              هل أنت جاهز لتفعيل وحدة {module.title}؟
            </h3>
            <p className="text-slate-400 text-sm">
              تواصل معنا وسنُعدّ نسختك خلال 24 ساعة.
            </p>
          </div>
          <Link
            to="/"
            state={scrollToSectionState('contact')}
            className="
              relative z-10 whitespace-nowrap
              inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl
              bg-gradient-to-l from-brand-teal to-brand-teal-dark
              text-ocean-950 font-extrabold text-sm
              hover:shadow-[0_0_28px_rgba(20,184,166,0.5)]
              hover:scale-[1.04] active:scale-100
              transition-all duration-200
            "
          >
            تواصل معنا للبدء
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
