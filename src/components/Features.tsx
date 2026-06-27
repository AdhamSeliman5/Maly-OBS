import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  ShoppingCart,
  PackageOpen,
  Boxes,
  Factory,
  Truck,
  Receipt,
  HandCoins,
  Users,
  Megaphone,
  PieChart,
  Settings,
  Store,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ─── Animation Variants ───────────────────────────────────────────────────────

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

// ─── Decorators for wide cards ────────────────────────────────────────────────

/**
 * DashboardDecorator
 * Three KPI chips showing live-ish dashboard metrics.
 */
function DashboardDecorator() {
  const kpis = [
    { label: 'الطلبات اليوم',    value: '١٢٤',    color: 'text-brand-teal'  },
    { label: 'الإيرادات (ج.م)',  value: '٤٨,٢٠٠', color: 'text-brand-green' },
    { label: 'قيد التحضير',      value: '٢٣',      color: 'text-amber-400'   },
  ] as const

  return (
    <div className="flex flex-col gap-2 w-full md:max-w-[210px] shrink-0">
      {kpis.map((k, i) => (
        <motion.div
          key={k.label}
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.09, duration: 0.35 }}
          className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07]"
        >
          <span className="text-[10px] text-slate-500 leading-tight">{k.label}</span>
          <span className={`text-sm font-black tabular-nums ${k.color}`}>{k.value}</span>
        </motion.div>
      ))}
    </div>
  )
}

/**
 * InventoryDecorator
 * Three stock-level progress bars with animated fill.
 */
function InventoryDecorator() {
  const items = [
    { label: 'تيشيرت M',  pct: 75 },
    { label: 'جينز ٣٢',   pct: 42 },
    { label: 'هوديه XL',  pct: 18 },
  ] as const

  return (
    <div className="flex flex-col gap-3 w-full md:max-w-[210px] shrink-0">
      {items.map((item, i) => (
        <div key={item.label} className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-slate-400">{item.label}</span>
            <span className="text-[10px] text-slate-500 tabular-nums">{item.pct}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-l from-sky-400 to-sky-500/70"
              initial={{ width: 0 }}
              whileInView={{ width: `${item.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

/**
 * DebtsDecorator
 * Two balance chips: customer receivables and supplier payables.
 */
function DebtsDecorator() {
  return (
    <div className="flex flex-col gap-2.5 w-full md:max-w-[210px] shrink-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.38 }}
        className="flex items-center justify-between px-3 py-3 rounded-xl bg-red-500/[0.08] border border-red-500/20"
      >
        <span className="text-[10px] text-slate-400">مديونية العملاء</span>
        <span className="text-sm font-black tabular-nums text-red-400">١٢,٥٠٠ ج.م</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.42, duration: 0.38 }}
        className="flex items-center justify-between px-3 py-3 rounded-xl bg-orange-400/[0.08] border border-orange-400/20"
      >
        <span className="text-[10px] text-slate-400">مستحقات الموردين</span>
        <span className="text-sm font-black tabular-nums text-orange-400">٨,٢٠٠ ج.م</span>
      </motion.div>
    </div>
  )
}

/**
 * ReportsDecorator
 * Three KPI chips (revenue / expenses / net profit) + animated bar chart.
 */
function ReportsDecorator() {
  const kpis = [
    { label: 'الإيرادات',    value: '٢٤٨,٠٠٠', positive: true  },
    { label: 'المصروفات',    value: '٨٢,٣٠٠',  positive: false },
    { label: 'صافي الربح',   value: '١٦٥,٧٠٠', positive: true  },
  ] as const

  const barHeights = [40, 62, 48, 79, 58, 95, 72] as const

  return (
    <div className="flex flex-col gap-2 w-full md:max-w-[210px] shrink-0">
      {kpis.map((k) => (
        <div
          key={k.label}
          className="flex items-center justify-between gap-3 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
        >
          <span className="text-[10px] text-slate-500">{k.label}</span>
          <span className={`text-xs font-bold tabular-nums ${k.positive ? 'text-brand-green' : 'text-red-400'}`}>
            {k.value}
          </span>
        </div>
      ))}

      <div className="flex items-end gap-0.5 h-10 mt-1.5">
        {barHeights.map((pct, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-[2px] bg-gradient-to-t from-violet-500 to-violet-400/50"
            initial={{ scaleY: 0 }}
            style={{ originY: 1, height: `${pct}%` }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.5 + i * 0.06, ease: 'easeOut' }}
          />
        ))}
      </div>
    </div>
  )
}

/**
 * POSDecorator
 * Live-ish checkout KPI chips for the in-store terminal card.
 */
function POSDecorator() {
  const kpis = [
    { label: 'مبيعات اليوم',   value: '٣٢',      color: 'text-cyan-400'   },
    { label: 'قيمة السلة',     value: '٤٨٠ ج.م', color: 'text-brand-green' },
    { label: 'الكاشير النشط',  value: 'أحمد',    color: 'text-amber-400'  },
  ] as const

  return (
    <div className="flex flex-col gap-2 w-full md:max-w-[210px] shrink-0">
      {kpis.map((k, i) => (
        <motion.div
          key={k.label}
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.09, duration: 0.35 }}
          className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07]"
        >
          <span className="text-[10px] text-slate-500 leading-tight">{k.label}</span>
          <span className={`text-sm font-black tabular-nums ${k.color}`}>{k.value}</span>
        </motion.div>
      ))}
    </div>
  )
}

/**
 * PermissionsDecorator
 * Three role chips in a horizontal row with staggered scale-in.
 */
function PermissionsDecorator() {
  const roles = [
    {
      name:    'مدير',
      desc:    'صلاحيات كاملة',
      dot:     'bg-brand-teal',
      classes: 'border-brand-teal/25  bg-brand-teal/[0.08]  text-brand-teal',
    },
    {
      name:    'مشرف',
      desc:    'إدارة محدودة',
      dot:     'bg-brand-green',
      classes: 'border-brand-green/25 bg-brand-green/[0.08] text-brand-green',
    },
    {
      name:    'موظف',
      desc:    'عرض وتسجيل فقط',
      dot:     'bg-slate-500',
      classes: 'border-white/10       bg-white/[0.03]        text-slate-400',
    },
  ] as const

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 w-full">
      {roles.map((r, i) => (
        <motion.div
          key={r.name}
          initial={{ opacity: 0, scale: 0.88, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4 + i * 0.1,
            duration: 0.38,
            ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
          }}
          className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border flex-1 min-w-[110px] ${r.classes}`}
        >
          <div className={`w-2 h-2 rounded-full ${r.dot} shrink-0`} />
          <div className="min-w-0">
            <p className="text-xs font-bold leading-tight truncate">{r.name}</p>
            <p className="text-[9px] opacity-70 leading-tight mt-0.5 truncate">{r.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// ─── Feature interface & data ─────────────────────────────────────────────────

interface FeatureItem {
  id:          string
  colSpan:     'one' | 'two' | 'three'
  Icon:        LucideIcon
  title:       string
  desc:        string
  iconBg:      string
  iconText:    string
  topLineMid:  string
  glowShadow:  string
  Decorator?:  FC
}

const COL_SPAN_CLASS: Record<FeatureItem['colSpan'], string> = {
  one:   'md:col-span-1',
  two:   'md:col-span-2',
  three: 'md:col-span-3',
}

/**
 * Z-Pattern Bento layout (3-column grid):
 *   Row 1: [dashboard:2]   [order-entry:1]              — wide → narrow
 *   Row 2: [pos:2]          [preparation:1]              — wide → narrow
 *   Row 3: [inventory:2]   [manufacturing:1]            — wide → narrow  (Z-flip)
 *   Row 4: [shipping:1]    [expenses:1] [staff:1]      — symmetry-break row
 *   Row 5: [debts:2]       [ads:1]                      — wide → narrow
 *   Row 6: [reports:2]                                   — wide
 *   Row 7: [settings:3]                                 — full-width closer
 */
const FEATURES: FeatureItem[] = [
  // ── Row 1 ────────────────────────────────────────────────────────────────
  {
    id: 'dashboard', colSpan: 'two',
    Icon: LayoutDashboard,
    title: 'لوحة القيادة',
    desc: 'نظرة عامة ومؤشرات لحظية لأداء متجرك ومبيعاتك.',
    iconBg: 'bg-brand-teal/15', iconText: 'text-brand-teal',
    topLineMid: 'via-brand-teal/55',
    glowShadow: '0 0 0 1px rgba(20,184,166,0.38), 0 20px 60px rgba(20,184,166,0.10), 0 4px 16px rgba(0,0,0,0.3)',
    Decorator: DashboardDecorator,
  },
  {
    id: 'order-entry', colSpan: 'one',
    Icon: ShoppingCart,
    title: 'إدخال الطلبات',
    desc: 'إدخال سريع ومبسط للطلبات من مختلف قنوات البيع.',
    iconBg: 'bg-brand-green/15', iconText: 'text-brand-green',
    topLineMid: 'via-brand-green/55',
    glowShadow: '0 0 0 1px rgba(34,197,94,0.38), 0 20px 60px rgba(34,197,94,0.10), 0 4px 16px rgba(0,0,0,0.3)',
  },
  // ── Row 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'pos', colSpan: 'two',
    Icon: Store,
    title: 'نقطة البيع (POS)',
    desc: 'بيع سريع في المحل — سلة، دفع، وإيصال حراري متصل بالمخزون والخزنة.',
    iconBg: 'bg-cyan-400/15', iconText: 'text-cyan-400',
    topLineMid: 'via-cyan-400/55',
    glowShadow: '0 0 0 1px rgba(34,211,238,0.38), 0 20px 60px rgba(34,211,238,0.10), 0 4px 16px rgba(0,0,0,0.3)',
    Decorator: POSDecorator,
  },
  {
    id: 'preparation', colSpan: 'one',
    Icon: PackageOpen,
    title: 'التحضير والتجهيز',
    desc: 'إدارة طابور التجهيز (Queue) لضمان سرعة التنفيذ وتقليل الأخطاء.',
    iconBg: 'bg-amber-400/15', iconText: 'text-amber-400',
    topLineMid: 'via-amber-400/55',
    glowShadow: '0 0 0 1px rgba(251,191,36,0.38), 0 20px 60px rgba(251,191,36,0.10), 0 4px 16px rgba(0,0,0,0.3)',
  },
  // ── Row 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'inventory', colSpan: 'two',
    Icon: Boxes,
    title: 'المخزون',
    desc: 'تتبع دقيق للأرصدة، جرد المخازن، وحركة الأصناف.',
    iconBg: 'bg-sky-400/15', iconText: 'text-sky-400',
    topLineMid: 'via-sky-400/55',
    glowShadow: '0 0 0 1px rgba(56,189,248,0.38), 0 20px 60px rgba(56,189,248,0.10), 0 4px 16px rgba(0,0,0,0.3)',
    Decorator: InventoryDecorator,
  },
  {
    id: 'manufacturing', colSpan: 'one',
    Icon: Factory,
    title: 'التصنيع',
    desc: 'إدارة عمليات تجميع المنتجات، الهوالك، ومعادلات التصنيع (BOM).',
    iconBg: 'bg-violet-400/15', iconText: 'text-violet-400',
    topLineMid: 'via-violet-400/55',
    glowShadow: '0 0 0 1px rgba(167,139,250,0.38), 0 20px 60px rgba(167,139,250,0.10), 0 4px 16px rgba(0,0,0,0.3)',
  },
  // ── Row 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'shipping', colSpan: 'one',
    Icon: Truck,
    title: 'الشحن',
    desc: 'تتبع الشحنات وحالات التوصيل مع شركات الشحن المختلفة.',
    iconBg: 'bg-blue-400/15', iconText: 'text-blue-400',
    topLineMid: 'via-blue-400/55',
    glowShadow: '0 0 0 1px rgba(96,165,250,0.38), 0 20px 60px rgba(96,165,250,0.10), 0 4px 16px rgba(0,0,0,0.3)',
  },
  {
    id: 'expenses', colSpan: 'one',
    Icon: Receipt,
    title: 'المصروفات',
    desc: 'تسجيل وتصنيف دقيق للمصروفات التشغيلية والنثريات.',
    iconBg: 'bg-rose-400/15', iconText: 'text-rose-400',
    topLineMid: 'via-rose-400/55',
    glowShadow: '0 0 0 1px rgba(251,113,133,0.38), 0 20px 60px rgba(251,113,133,0.10), 0 4px 16px rgba(0,0,0,0.3)',
  },
  {
    id: 'staff', colSpan: 'one',
    Icon: Users,
    title: 'فريق العمل',
    desc: 'إدارة شؤون الموظفين، الرواتب، الخصومات، والسلف.',
    iconBg: 'bg-indigo-400/15', iconText: 'text-indigo-400',
    topLineMid: 'via-indigo-400/55',
    glowShadow: '0 0 0 1px rgba(129,140,248,0.38), 0 20px 60px rgba(129,140,248,0.10), 0 4px 16px rgba(0,0,0,0.3)',
  },
  // ── Row 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'debts', colSpan: 'two',
    Icon: HandCoins,
    title: 'المديونيات',
    desc: 'متابعة شاملة لمديونيات العملاء ومستحقات الموردين.',
    iconBg: 'bg-orange-400/15', iconText: 'text-orange-400',
    topLineMid: 'via-orange-400/55',
    glowShadow: '0 0 0 1px rgba(251,146,60,0.38), 0 20px 60px rgba(251,146,60,0.10), 0 4px 16px rgba(0,0,0,0.3)',
    Decorator: DebtsDecorator,
  },
  {
    id: 'ads', colSpan: 'one',
    Icon: Megaphone,
    title: 'الحملات الإعلانية',
    desc: 'قياس عائد الإعلانات (ROAS) ومراقبة الميزانيات التسويقية.',
    iconBg: 'bg-pink-400/15', iconText: 'text-pink-400',
    topLineMid: 'via-pink-400/55',
    glowShadow: '0 0 0 1px rgba(244,114,182,0.38), 0 20px 60px rgba(244,114,182,0.10), 0 4px 16px rgba(0,0,0,0.3)',
  },
  // ── Row 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'reports', colSpan: 'two',
    Icon: PieChart,
    title: 'التقارير المالية',
    desc: 'تقارير تفصيلية عن الأرباح، الخسائر، وصافي المبيعات.',
    iconBg: 'bg-purple-400/15', iconText: 'text-purple-400',
    topLineMid: 'via-purple-400/55',
    glowShadow: '0 0 0 1px rgba(192,132,252,0.38), 0 20px 60px rgba(192,132,252,0.10), 0 4px 16px rgba(0,0,0,0.3)',
    Decorator: ReportsDecorator,
  },
  // ── Row 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'settings', colSpan: 'three',
    Icon: Settings,
    title: 'الإعدادات والصلاحيات',
    desc: 'تحكم كامل في إعدادات النظام وصلاحيات المستخدمين الدقيقة.',
    iconBg: 'bg-slate-400/15', iconText: 'text-slate-400',
    topLineMid: 'via-slate-400/40',
    glowShadow: '0 0 0 1px rgba(148,163,184,0.30), 0 20px 60px rgba(148,163,184,0.08), 0 4px 16px rgba(0,0,0,0.3)',
    Decorator: PermissionsDecorator,
  },
]

// ─── Features section ─────────────────────────────────────────────────────────

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-28 overflow-hidden bg-ocean-900 scroll-mt-20"
    >
      {/* ── Dot-grid texture ──────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-dot-grid opacity-35 pointer-events-none" />

      {/* ── Central ambient teal ellipse ──────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 45% at 50% 35%, rgba(20,184,166,0.055) 0%, transparent 70%)',
        }}
      />

      {/* ── Top fade: blends with previous section ────────────────────────── */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ocean-950/70 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-wide">
            المميزات
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-black text-white leading-snug">
            كل ما تحتاجه لإدارة متجرك..{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-teal via-brand-teal-light to-brand-green">
              في مكان واحد.
            </span>
          </h2>

          <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            منصة ERP وPOS متكاملة تضم كل الأدوات التي يحتاجها متجرك —
            من أول طلب لآخر تقرير.
          </p>
        </motion.div>

        {/* ── Bento grid ─────────────────────────────────────────────────── */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {FEATURES.map((feature) => {
            const { Icon, Decorator } = feature

            /*
             * Wide cards (col-span-2 or col-span-3) use a horizontal layout
             * on md+: text content takes flex-1 on the right (RTL), decorator
             * goes to the left side in a fixed-width column.
             */
            const isWide = feature.colSpan !== 'one'

            return (
              <motion.article
                key={feature.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: feature.glowShadow,
                  transition: { duration: 0.22, ease: 'easeOut' },
                }}
                className={[
                  'group relative rounded-2xl overflow-hidden cursor-default',
                  'bg-ocean-800/35 backdrop-blur-sm',
                  'border border-white/[0.07]',
                  'p-7',
                  COL_SPAN_CLASS[feature.colSpan],
                  isWide
                    ? 'flex flex-col md:flex-row md:items-center md:gap-10'
                    : 'flex flex-col',
                ].join(' ')}
              >
                {/* ── Top gradient hairline — glows on hover ─────────────── */}
                <div
                  className={[
                    'absolute inset-x-0 top-0 h-px',
                    'bg-gradient-to-r from-transparent',
                    feature.topLineMid,
                    'to-transparent',
                    'opacity-0 group-hover:opacity-100',
                    'transition-opacity duration-300',
                  ].join(' ')}
                />

                {/* ── Inner top-right corner radial highlight ─────────────── */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at top right, rgba(255,255,255,0.03) 0%, transparent 65%)',
                  }}
                />

                {/* ── Content column (icon + text + links) ─────────────────── */}
                <div className={`flex flex-col gap-5 ${isWide ? 'flex-1' : ''}`}>

                  {/* Icon badge */}
                  <div
                    className={[
                      'inline-flex items-center justify-center',
                      'w-12 h-12 rounded-2xl shrink-0',
                      feature.iconBg,
                    ].join(' ')}
                  >
                    <span
                      className={[
                        feature.iconText,
                        'inline-flex',
                        'group-hover:scale-110 group-hover:-rotate-6',
                        'transition-transform duration-300 ease-out',
                      ].join(' ')}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  {/* "اقرأ المزيد" — decorative, appears on hover */}
                  <Link
                    to={`/features/${feature.id}`}
                    className="flex items-center gap-1 mt-auto pt-1 w-fit"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <span
                      className={[
                        'text-xs font-semibold',
                        feature.iconText,
                        'opacity-0 group-hover:opacity-90',
                        'transition-opacity duration-200',
                      ].join(' ')}
                    >
                      اقرأ المزيد
                    </span>
                    <svg
                      className={[
                        'w-3.5 h-3.5',
                        feature.iconText,
                        'opacity-0 group-hover:opacity-90',
                        'group-hover:-translate-x-1',
                        'transition-all duration-200',
                      ].join(' ')}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </Link>

                  {/* Full-card invisible overlay Link — whole surface clickable */}
                  <Link
                    to={`/features/${feature.id}`}
                    className="absolute inset-0 z-10 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/60"
                    aria-label={`اقرأ المزيد عن ${feature.title}`}
                  />
                </div>
                {/* end content column */}

                {/* ── Decorator column ─────────────────────────────────────── */}
                {Decorator && (
                  <div
                    className={[
                      isWide ? 'w-full md:w-auto md:shrink-0' : 'mt-4',
                      'opacity-90 md:opacity-60 md:group-hover:opacity-100',
                      'transition-opacity duration-300',
                    ].join(' ')}
                  >
                    <Decorator />
                  </div>
                )}

              </motion.article>
            )
          })}
        </motion.div>
        {/* end bento grid */}

      </div>
    </section>
  )
}
