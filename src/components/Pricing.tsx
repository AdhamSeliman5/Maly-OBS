import { motion } from 'framer-motion'
import {
  CheckCircle,
  Crown,
  MessageCircle,
  Rocket,
  ShoppingCart,
  Sparkles,
  Users,
} from 'lucide-react'

// ─── Animation variants ───────────────────────────────────────────────────────

const sectionTitleVariants = {
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

const cardVariants = {
  hidden:   { opacity: 0, y: 56 },
  visible:  (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
}

// ─── Plan data ────────────────────────────────────────────────────────────────

interface Plan {
  id: number
  tag?: string
  Icon: typeof Rocket
  title: string
  caption: string
  priceDisplay: string
  priceSub: string
  moduleSummary: string
  userLimit: string
  orderLimit: string
  features: string[]
  cta: string
  ctaHref: string
  highlighted: boolean
}

const PLANS: Plan[] = [
  {
    id: 1,
    Icon: Rocket,
    title: 'Starter',
    caption: 'للبدايات الشاطرة اللي عايزة تشتغل بنظام من أول يوم.',
    priceDisplay: '400',
    priceSub: 'في الشهر',
    moduleSummary: 'كل موديولات النظام ما عدا التصنيع، الإعلانات، والتقارير.',
    userLimit: 'حد أقصى 3 مستخدمين',
    orderLimit: 'لحد 500 أوردر',
    features: [
      'إدارة الطلبات، الشحن، المخزون، المصروفات، والديون في مكان واحد.',
      'مناسب للفرق الصغيرة اللي محتاجة تشغيل ثابت وواضح.',
      'واجهة سهلة وسريعة من غير تعقيد ولا إعدادات كتير.',
    ],
    cta: 'ابدأ بستارتر',
    ctaHref: '#contact',
    highlighted: false,
  },
  {
    id: 2,
    Icon: Sparkles,
    title: 'Pro',
    caption: 'الخيار العملي للبراندات اللي بتكبر وعايزة كل الأدوات شغالة معاها.',
    priceDisplay: '750',
    priceSub: 'في الشهر',
    moduleSummary: 'كل موديولات النظام متاحة بالكامل.',
    userLimit: 'حد أقصى 15 مستخدم',
    orderLimit: 'لحد 2000 أوردر',
    features: [
      'التصنيع، الإعلانات، والتقارير كلها جاهزة للاستخدام فوراً.',
      'مثالي لإدارة التشغيل والمبيعات والتحليل من شاشة واحدة.',
      'يوسع شغلك من غير ما تحتاج تنقل على نظام تاني بعد فترة قصيرة.',
    ],
    cta: 'اختار برو',
    ctaHref: '#contact',
    highlighted: false,
  },
  {
    id: 3,
    tag: 'الأكثر مبيعاً / طلباً',
    Icon: Crown,
    title: 'Enterprise',
    caption: 'للتشغيل التقيل والفرق الكبيرة اللي عايزة مرونة كاملة من غير سقف.',
    priceDisplay: '900',
    priceSub: 'في الشهر',
    moduleSummary: 'كل موديولات النظام متاحة بالكامل.',
    userLimit: 'مستخدمين من غير حد أقصى',
    orderLimit: 'أوردرات من غير حد أقصى',
    features: [
      'أنسب اختيار للشركات اللي شغلها يومي وكثيف ومحتاج سيطرة كاملة.',
      'بيخليك تكبر عدد الفريق وحجم العمليات من غير ما تقلق من الحدود.',
      'أفضل قيمة لو عايز النظام كله مفتوح على آخره من أول يوم.',
    ],
    cta: 'كلمنا على إنتربرايز',
    ctaHref: '#contact',
    highlighted: true,
  },
]

// ─── CheckItem ────────────────────────────────────────────────────────────────

function CheckItem({
  text,
  highlighted,
}: {
  text:        string
  highlighted: boolean
}) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle
        size={16}
        strokeWidth={2.2}
        className={`shrink-0 ${highlighted ? 'text-brand-teal' : 'text-slate-500'}`}
      />
      <span className={`text-sm ${highlighted ? 'text-slate-200' : 'text-slate-400'}`}>
        {text}
      </span>
    </li>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-28 overflow-hidden bg-ocean-950"
    >
      {/* ── Dot-grid texture ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />

      {/* ── Top fade: blends from the Features section above ────────────── */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ocean-900 to-transparent pointer-events-none" />

      {/* ── Central ambient glow ─────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(20,184,166,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <motion.div
          variants={sectionTitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-wide">
            الأسعار
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-black text-white leading-snug">
            اختار الباقة اللي{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-teal via-brand-teal-light to-brand-green">
              تمشي مع حجم شغلك
            </span>
          </h2>
          <p className="mt-5 text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            تسعير واضح وبسيط باللهجة اللي تريحك. كل باقة معمولة عشان تناسب مرحلة مختلفة من نمو البيزنس.
          </p>
        </motion.div>

        {/* ── Pricing cards ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                custom={i * 0.14}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
                className="relative"
              >
                {/* ── Gradient border wrapper (highlighted card only) ─────
                     A 1-px gradient border is achieved by placing the card
                     inside a padded div whose background IS the gradient.
                     Regular `border` only supports solid colors in CSS.
                ─────────────────────────────────────────────────────── */}
                {plan.highlighted ? (
                  // Gradient-border shell
                  <div
                    className="rounded-3xl p-px"
                    style={{
                      background:
                        'linear-gradient(135deg, #14b8a6 0%, #0a1f38 45%, #22c55e 100%)',
                    }}
                  >
                    <CardInner plan={plan} />
                  </div>
                ) : (
                  // Plain border for the enterprise card
                  <div className="rounded-3xl border border-white/[0.08]">
                    <CardInner plan={plan} />
                  </div>
                )}


                {/* ── "Most popular" tag ──────────────────────────────────
                     Sits outside the border wrapper so it overlaps the top
                     edge; positioned absolutely relative to this motion.div.
                ─────────────────────────────────────────────────────── */}
                {plan.tag && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1 rounded-full text-[11px] font-black text-ocean-950 tracking-wide bg-gradient-to-l from-brand-teal to-brand-green shadow-[0_4px_16px_rgba(20,184,166,0.45)]">
                      {plan.tag}
                    </span>
                  </div>
                )}
              </motion.div>
          ))}
        </div>

        {/* ── Reassurance strip ─────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-10 text-center text-xs text-slate-500"
        >
          من غير رسوم مستخبية · تفعيل سريع · دعم فني بالعربي يفهم شغلك
        </motion.p>

      </div>
    </section>
  )
}

// ─── CardInner ────────────────────────────────────────────────────────────────
// Extracted so the gradient-border and plain-border wrappers share identical
// interior markup while keeping JSX readable.

function CardInner({ plan }: { plan: Plan }) {
  const { Icon } = plan

  return (
    <div
      className={[
        'relative rounded-[calc(1.5rem-1px)] px-8 py-10 flex flex-col gap-8',
        plan.highlighted
          ? 'bg-ocean-800/70 backdrop-blur-sm'
          : 'bg-ocean-900/60',
      ].join(' ')}
    >
      {/* Top left corner ambient when highlighted */}
      {plan.highlighted && (
        <div
          className="absolute top-0 right-0 w-52 h-52 pointer-events-none rounded-tr-[calc(1.5rem-1px)]"
          style={{
            background:
              'radial-gradient(circle at top right, rgba(20,184,166,0.09) 0%, transparent 65%)',
          }}
        />
      )}

      {/* Plan header */}
      <div className="flex items-start gap-4">
        <div
          className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0 ${
            plan.highlighted ? 'bg-brand-teal/15' : 'bg-white/5'
          }`}
        >
          <Icon
            size={22}
            strokeWidth={1.8}
            className={plan.highlighted ? 'text-brand-teal' : 'text-slate-400'}
          />
        </div>
        <div className="flex flex-col gap-0.5 min-w-0">
          <h3 className="text-lg font-black text-white leading-snug">{plan.title}</h3>
          <p className="text-xs text-slate-500 leading-tight">{plan.caption}</p>
        </div>
      </div>

      {/* Price */}
      <div>
        <div className="mb-3 flex items-end gap-2">
        <span
          className={`font-black leading-none ${
            plan.highlighted
              ? 'text-4xl text-transparent bg-clip-text bg-gradient-to-l from-brand-teal to-brand-green'
              : 'text-3xl text-slate-300'
          }`}
        >
          {plan.priceDisplay} ج.م
        </span>
        <span className="text-sm text-slate-400 font-medium">/ {plan.priceSub}</span>
        </div>
        <p className="text-sm leading-7 text-slate-300">{plan.moduleSummary}</p>
      </div>

      {/* Limits */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div
          className={[
            'rounded-2xl border px-4 py-3',
            plan.highlighted
              ? 'border-brand-teal/20 bg-brand-teal/10'
              : 'border-white/10 bg-white/[0.03]',
          ].join(' ')}
        >
          <div className="mb-2 flex items-center gap-2 text-xs font-bold text-slate-400">
            <Users size={14} className={plan.highlighted ? 'text-brand-teal' : 'text-slate-500'} />
            المستخدمين
          </div>
          <p className="text-sm font-semibold text-white">{plan.userLimit}</p>
        </div>
        <div
          className={[
            'rounded-2xl border px-4 py-3',
            plan.highlighted
              ? 'border-brand-green/20 bg-brand-green/10'
              : 'border-white/10 bg-white/[0.03]',
          ].join(' ')}
        >
          <div className="mb-2 flex items-center gap-2 text-xs font-bold text-slate-400">
            <ShoppingCart size={14} className={plan.highlighted ? 'text-brand-green' : 'text-slate-500'} />
            الأوردرات
          </div>
          <p className="text-sm font-semibold text-white">{plan.orderLimit}</p>
        </div>
      </div>

      {/* Divider */}
      <div
        className={`h-px w-full ${
          plan.highlighted
            ? 'bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent'
            : 'bg-white/[0.05]'
        }`}
      />

      {/* Feature list */}
      <ul className="flex flex-col gap-3.5">
        {plan.features.map((f) => (
          <CheckItem key={f} text={f} highlighted={plan.highlighted} />
        ))}
      </ul>

      {/* CTA button */}
      <a
        href={plan.ctaHref}
        className={[
          'group relative mt-auto flex items-center justify-center gap-2.5',
          'px-6 py-3.5 rounded-2xl font-bold text-sm',
          'transition-all duration-250',
          plan.highlighted
            ? [
                'bg-gradient-to-l from-brand-teal to-brand-teal-dark text-ocean-950',
                'hover:shadow-[0_0_28px_rgba(20,184,166,0.5)]',
                'hover:scale-[1.03] active:scale-100',
              ].join(' ')
            : [
                'border border-slate-600/60 text-slate-300',
                'hover:border-brand-teal/50 hover:text-brand-teal hover:bg-brand-teal/5',
                'hover:scale-[1.03] active:scale-100',
              ].join(' '),
        ].join(' ')}
      >
        {plan.highlighted ? (
          <MessageCircle size={15} strokeWidth={2} className="shrink-0" />
        ) : (
          <Rocket size={15} strokeWidth={2} className="shrink-0" />
        )}
        {plan.cta}
        {/* RTL-aware forward arrow */}
        <svg
          className="w-3.5 h-3.5 shrink-0 group-hover:-translate-x-1 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </a>
    </div>
  )
}
