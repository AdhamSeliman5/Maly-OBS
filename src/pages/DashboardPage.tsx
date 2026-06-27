/**
 * DashboardPage.tsx — Dedicated marketing page for the Dashboard (لوحة القيادة) module.
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
 * Accent: rose — #f43f5e / #e11d48
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { WHATSAPP_CTA_URL } from '../constants'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger } from '../utils/animations'
import SectionLabel from '../components/SectionLabel'
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  LayoutDashboard,
  TrendingUp,
  TrendingDown,
  BarChart3,
  BarChart2,
  Zap,
  ShieldCheck,
  Users,
  Map,
  Star,
  Target,
  Megaphone,
  Clock,
  Layers,
  Wallet,
  Boxes,
  Truck,
  Landmark,
  Package,
  Coins,
  Activity,
} from 'lucide-react'

// ─── Accent colour tokens ─────────────────────────────────────────────────────

const ACCENT      = 'rgba(244,63,94,'    // rose-500
const ACCENT_HEX  = '#f43f5e'
const ACCENT_DIM  = 'rgba(244,63,94,0.12)'
const ACCENT_DARK = '#e11d48'
const ACCENT_GLOW = '0 0 28px rgba(244,63,94,0.40)'

// ─── Back strip ───────────────────────────────────────────────────────────────

function BackStrip() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 pb-2 pt-4">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-ocean-400 hover:text-rose-400 transition-colors"
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
        className="pointer-events-none absolute -top-24 right-1/4 w-[640px] h-[640px] rounded-full blur-3xl opacity-[0.11]"
        style={{ background: `radial-gradient(circle, ${ACCENT_HEX} 0%, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute top-56 left-0 w-80 h-80 rounded-full blur-3xl opacity-[0.07]"
        style={{ background: `radial-gradient(circle, #fb7185 0%, transparent 70%)` }}
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
                <LayoutDashboard size={15} />
                لوحة القيادة التنفيذية
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.05)}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-white"
              style={{ lineHeight: '1.22' }}
            >
              كل أرقامك —{' '}
              <span style={{ color: ACCENT_HEX }}>في شاشة واحدة.</span>
              <br />
              إيراد، ربح، نمو،{' '}
              <span className="text-ocean-400">لحظياً.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeUp(0.1)}
              className="text-base sm:text-lg text-ocean-300 leading-relaxed max-w-xl"
            >
              أكثر من ٢٠ مخطط وتحليل..
              هتعرف مبيعاتك جاية منين بالظبط، وصافي ربحك كام بعد كل المصاريف.
              كل الأرقام قدامك حقيقية ومتحدثة لحظة بلحظة，
              عشان تاخد قرارك وأنت مطمن وتكبر شغلك على نور.
            </motion.p>

            {/* Micro-stat pills */}
            <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-4">
              {[
                { label: 'ربح حقيقي لا إيراد فقط', icon: <Coins size={14} /> },
                { label: 'نمو % مقارنةً بالفترة السابقة', icon: <TrendingUp size={14} /> },
                { label: 'كاش ١٠ دقائق + تحديث فوري', icon: <Zap size={14} /> },
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
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg, ${ACCENT_HEX}, ${ACCENT_DARK})`, boxShadow: ACCENT_GLOW }}
              >
                ابدأ الآن
                <ChevronRight size={18} />
              </a>
              <Link
                to="/#features"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-rose-500/40 hover:text-rose-400 transition-all duration-200"
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
            className="relative w-full mt-8 lg:mt-0"
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
                src="./assets/dsh-1-hero.png"
                alt="لوحة القيادة التنفيذية — KPIs والمخططات"
                width={780}
                height={480}
                loading="eager"
                className="block w-full h-auto object-cover"
              />
            </div>

            {/* Floating badge — MoM Growth */}
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
                <span className="text-xs text-ocean-400">نمو الإيراد (MoM)</span>
                <span className="text-sm font-bold" style={{ color: '#4ade80' }}>+٢٣.٤٪ هذا الشهر</span>
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
    stat: '٧١٪',
    text: 'من أصحاب المتاجر الإلكترونية لا يعرفون ربحيتهم الفعلية — يرون الإيراد ويفرحون، لكن يغفلون عن تكلفة البضاعة.',
    icon: <AlertTriangle size={22} />,
  },
  {
    stat: '٣ ساعة',
    text: 'متوسط الوقت الذي يقضيه المدير أسبوعياً في جمع الأرقام من إكسيل ومنصات الشحن يدوياً — وقت يمكن أن ينقذه نظام واحد.',
    icon: <Clock size={22} />,
  },
  {
    stat: '٤٨٪',
    text: 'من قرارات التسويق تُبنى على حدس لا بيانات — ربط الإنتاج بنسبة ROAS والطلبات بحملة بعينها يُغير كل شيء.',
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
    icon: <Coins size={20} />,
    title: 'ربح حقيقي — لا إيراد وهمي',
    body: 'رسم بياني واحد بيعرفك حركة مبيعاتك وماشية إزاي، وبيحط لك البيع جنبه المكسب عشان الصورة توضح. الحسبة هنا بالمليم: بنخصم تكلفة البضاعة اللي اتسلمت فعلياً من إجمالي الفلوس اللي دخلتلك، عشان تعرف "الصافي" في جيبك كام.. وتطمن إنك بتكسب مش بتبيع بخسارة.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'نمو % مقارنةً بفترة مطابقة سابقة',
    body: 'نسبة النمو محسوبة تلقائياً بمقارنة الفترة المختارة بالفترة السابقة المطابقة في المدة. مثال: اخترت آخر ٧ أيام → يقارن بالـ٧ أيام التي قبلها. النتيجة: RevenueGrowthPct و OrderCountGrowthPct بدقة عشرية.',
  },
  {
    icon: <Zap size={20} />,
    title: 'كاش ذكي بإبطال فوري',
    body: 'KPIs تُكاش لـ١٠ دقائق. Charts تُكاش بنفس المدة. كلاهما مرتبط بـ CancellationChangeToken لكل مستأجر — عند أي تغيير في البيانات يُلغى الكاش فوراً بدون انتظار انتهاء المدة. السرعة والدقة معاً.',
  },
  {
    icon: <Activity size={20} />,
    title: 'Sidebar KPIs حية بمعدل ٣٠ ثانية',
    body: 'الـ Sidebar يعرض ٦ مؤشرات: طلبات التحضير، الشحن المتأخر، تنبيهات المخزون، الديون المتأخرة، طلبات اليوم — تُكاش ٣٠ ثانية. رصيد الخزينة يُجلَب حياً في كل طلب لضمان الدقة الفورية.',
  },
  {
    icon: <Layers size={20} />,
    title: 'Orders + ArchivedOrders في كل استعلام',
    body: 'كل أرقامك وتقاريرك بتجمع بين الأوردرات الحالية واللي اتأرشفت مع بعض.. مفيش أوردر بيقع من الحسابات حتى بعد ما يتأرشف. هتشوف تاريخ شغلك كله من أول يوم لحد دلوقتي كامل ومن غير أي نقص.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'عزل بيانات متعدد الطبقات',
    body: 'بياناتك متأمنة بفلترين فوق بعض؛ السيستم متبرمج يقفل أي ثغرة ومستحيل شركة تشوف بيانات شركة تانية، حتى لو حصل غلط في فلتر منهم التاني بيفضل حارس للداتا بتاعتك.. أمان كامل لبياناتك ومستحيل تتداخل مع غيرك.',
  },
  {
    icon: <Map size={20} />,
    title: 'مبيعات ومرتجعات بالمحافظة',
    body: 'توزيع المبيعات على خريطة المحافظات المصرية. معدلات الإرجاع بالمحافظة مع فلتر يستبعد المحافظات التي لديها أقل من ٥ طلبات — تجنباً لأرقام مضللة. اكتشف أين عملاؤك وأين مشكلاتك.',
  },
  {
    icon: <Target size={20} />,
    title: 'COD Aging — خريطة مخاطر التحصيل',
    body: 'لقطة فورية لكل الطلبات المشحونة مصنَّفة بأيامٍ منذ الشحن. اكتشف الشحنات "العالقة" قبل أن تتحول لمرتجعات. نموذج Risk Management حقيقي لأصحاب المتاجر.',
  },
  {
    icon: <Users size={20} />,
    title: 'VIP الـ١٠ وتوزيع القيمة للعملاء',
    body: 'قائمة أعلى ١٠ عملاء بإجمالي إنفاقهم. مخطط Customer Value Distribution: كم عميلاً ينفق ٠-٥٠٠ جنيه؟ كم ينفق ٥٠٠-١٠٠٠؟ وهكذا — افهم قاعدة عملائك واستهدف الشريحة الأكثر ربحاً.',
  },
  {
    icon: <Megaphone size={20} />,
    title: 'ROAS وCPO لكل حملة إعلانية',
    body: 'Campaign Performance يعرض لكل حملة: الإنفاق الإعلاني، الإيراد، ROAS (= revenue ÷ spend)، وCPO (تكلفة الطلب الواحد). اعرف أي الحملات تُربحك وأيها يُشعل أموالك.',
  },
  {
    icon: <Truck size={20} />,
    title: 'أداء شركات الشحن مقارنةً',
    body: 'CourierPerformance مبني من نفس استعلام المخططات بدون استعلام إضافي — صفر تكلفة إضافية. تسليم ومرتجع لكل شركة. متوسط أيام الإيصال بالمحطة. قرار التعاقد مبني على بيانات حقيقية.',
  },
  {
    icon: <Star size={20} />,
    title: 'أعلى المنتجات مبيعاً والأكثر إرجاعاً',
    body: 'Top Products: الـ٥ الأكثر مبيعاً بالكمية. Top Returned Products: المنتجات الأكثر إرجاعاً بالكمية — راقب جودتك وقرر التوقف أو التحسين قبل أن تتراكم الخسائر.',
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
            <SectionLabel color="#2dd4bf">لماذا لوحة القيادة؟</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white mb-4">
            أكثر من ٢٠ تحليل —{' '}
            <span style={{ color: ACCENT_HEX }}>كلها في ثانية واحدة.</span>
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 max-w-2xl mx-auto text-base leading-relaxed">
            لوحة القيادة ليست مجرد أرقام — هي قرارات. كل مؤشر مصمَّم ليجيب على سؤال تجاري
            حقيقي: أين أربح؟ أين أخسر؟ ومن أكبر عملائي؟
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
    id: 'kpis',
    label: 'مؤشرات الأداء',
    icon: <Activity size={16} />,
    steps: [
      {
        title: '٦ KPIs فوق الصفحة — كلها مكاشة ذكياً',
        body: 'كل أرقامك المهمة — زي إجمالي المبيعات، عدد الأوردرات اللي اتسلمت، اللي لسه بيتجهز، اللي في الشحن، المرتجعات، وحتى عدد عملائك اللي شغالين معاك — السيستم بيجمعها لحظة بلحظة من كل الطلبات الحالية والقديمة. والأرقام دي بتتحمل بسرعة صاروخ وبتتحدث تلقائياً، عشان تتابع حركة شغلك بالمليم ومن غير أي تأخير.',
      },
      {
        title: 'إيراد المُسلَّم محسوب بدقة لاين آيتم',
        body: 'مكسبك اللي اتحقق بيتحسب بالقطعة مش بجمال الشيلة؛ يعني لو أوردر فيه 3 حتت والعميل استلم حتتين بس، السيستم بيحسبلك فلوس الحتتين اللي اتباعوا فعلاً. بكده أرقام مبيعاتك هتكون دقيقة جداً ومطابقة للي خرج من مخزنك ودخل جيبك بالظبط.',
      },
      {
        title: 'Quick Stats الصف السريع',
        body: 'متوسط وقت الشحن بيتحسب بدقة من يوم ما الأوردر بيتعمل لحد ما بيطلع للشحن، ومعاه متوسط قيمة الأوردر، ونسبة العملاء اللي بيرجعوا يشتروا منك تاني، ومعدل نمو شغلك شهر بشهر.. كل دي مؤشرات بتظهرلك جاهزة ومباشرة من غير ما تضطر تعمل أي حسابات إضافية بنفسك.',
      },
      {
        title: 'Sidebar KPIs — النبض اللحظي',
        body: 'القائمة الجانبية بتحدث نفسها كل ٣٠ ثانية عشان تنبهك بأي طلبات محتاجة تجهيز، شحنات متأخرة، بضاعة قربت تخلص، أو ديون لازم تتحصل، ده غير طلبات اليوم.. وحساب الخزنة بيظهرلك لحظة بلحظة مع كل حركة، عشان تبقى عارف وضعك المالي وتفاصيل شغلك طول الوقت ومن غير أي مجهود منك.',
      },
    ],
    imgSrc: './assets/dsh-2-list.png',
    imgAlt: 'مؤشرات الأداء الرئيسية والـ Sidebar الحي',
  },
  {
    id: 'charts',
    label: 'المخططات والتحليلات',
    icon: <BarChart3 size={16} />,
    steps: [
      {
        title: 'Sales Trend: إيراد وربح في نفس المخطط',
        body: 'المخطط يُبدِّل تلقائياً بين يومي (≤٣٠ يوم) وشهري (>٣٠ يوم). الإيراد = TotalAmount - ShippingFees + Deposit. الربح = الإيراد - CostAtSale × كمية الطلبات المُسلَّمة. الفجوة بينهما هي هامشك الحقيقي.',
      },
      {
        title: 'Status Comparison Donut — Delivered vs Returned',
        body: 'Donut chart يُقارن Delivered+PartiallyDelivered ضد Returned+ShippedOnSender بعداد مباشر. نسبة الإيصال الحقيقية أمامك دائماً — ليس مجرد "كم طلب" بل "كم وصل للعميل".',
      },
      {
        title: 'Shipping Performance — أداء كل شركة شحن',
        body: 'CourierPerformance مبني من نفس OrderChartRow query (لا استعلام إضافي). تسليم ومرتجع لكل شركة. COD Aging: لقطة آنية لكل الشحنات المعلَّقة مصنَّفة بالأيام منذ الشحن — رادار مخاطر التحصيل.',
      },
      {
        title: 'Order Types بالشهر — Exchange & Missing',
        body: 'OrderTypesByMonth: عدد طلبات Exchange وMissing مجمَّعة شهرياً. راقب الاتجاه: هل مشاكل "البضاعة الناقصة" تزيد؟ هل العملاء يستبدلون أكثر؟ — مؤشر جودة التشغيل.',
      },
    ],
    imgSrc: './assets/dsh-3-action.png',
    imgAlt: 'مخطط الاتجاهات مع الإيراد والربح وأداء شركات الشحن',
  },
  {
    id: 'geo',
    label: 'الجغرافيا والعملاء',
    icon: <Map size={16} />,
    steps: [
      {
        title: 'توزيع المبيعات بالمحافظة',
        body: 'SalesByGovernorate: أعلى ٥ محافظات بعدد الطلبات — اعرف كثافة عملائك جغرافياً. GovReturnRates: معدل الإرجاع بالمحافظة، لكن مع شرط: ≥٥ طلبات للمحافظة لإظهارها (تجنب أرقام مضللة من عينات صغيرة).',
      },
      {
        title: 'VIP Customers — أعلى ١٠ عملاء بالإنفاق',
        body: 'قائمة مرتبة تنازلياً بإجمالي إنفاق كل عميل (هاتفه كـ identifier). بلِّط برنامج ولاء لأعلى ١٠ — أو على الأقل تعرَّف على من يستحق مزيداً من الاهتمام.',
      },
      {
        title: 'Customer Value Distribution — شرائح اللتفيل',
        body: 'Histogram بشرائح الإنفاق (٠-٥٠٠ / ٥٠٠-١٠٠٠ / ...). كم عميلاً في كل شريحة؟ هل قاعدتك من الشرائح الدنيا أم العليا؟ فهم هذه الصورة يُغير استراتيجية التسعير.',
      },
      {
        title: 'New vs Returning Customers',
        body: 'ReturningCustomersStats مبني بـ phone deduplication: مقارنة الهواتف عبر الفترة الحالية والتاريخية لتحديد من أول مشترٍ ومن عميل عائد. نسبة الولاء — أهم مقياس لصحة نشاطك.',
      },
    ],
    imgSrc: './assets/dsh-4-details.png',
    imgAlt: 'تحليل جغرافي بالمحافظات وVIP Customers وتوزيع قيمة العملاء',
  },
  {
    id: 'campaigns',
    label: 'الحملات والتوقيت',
    icon: <Megaphone size={16} />,
    steps: [
      {
        title: 'Campaign Performance: ROAS و CPO',
        body: 'لكل حملة إعلانية: الإنفاق، الإيراد، ROAS = Revenue ÷ Spend، CPO = Spend ÷ Orders. ربط الإيراد بالحملة عبر CampaignId أو UTM — قرِّب إعلانك وحدِّد ما الذي يُدر أعلى عائد.',
      },
      {
        title: 'Best Days of Week — متى يشتري عملاؤك؟',
        body: 'BestDays: توزيع الطلبات على أيام الأسبوع (الأحد - السبت). اعرف أي الأيام بها أعلى نشاط — جدوِّل حملاتك ومتابعتك لتوافق ذروة شرائهم.',
      },
      {
        title: 'Top Months — أفضل أشهرك تاريخياً',
        body: 'TopMonthsSales: أعلى ٥ أشهر بإيراد التسليم الفعلي — مع عدد الطلبات. افهم موسميتك، خطِّط مخزونك للذروة، وتجنب الفشل في موسم الطلب العالي.',
      },
      {
        title: 'Moderator Performance — أداء الفريق',
        body: 'SalesTeamPerformance: عدد الطلبات لكل Moderator في الفترة المختارة. مشرف يتعامل مع ١٠٠ طلب ضمن الفريق يستحق مكافأة — أو تدريباً إن كانت المرتجعات مرتفعة معه.',
      },
    ],
    imgSrc: './assets/dsh-5-extras.png',
    imgAlt: 'Campaign Performance مع ROAS وCPO وBest Days وTop Months',
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
            <SectionLabel color="#2dd4bf">كيف يعمل؟</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white">
            من أول رقم إلى{' '}
            <span style={{ color: ACCENT_HEX }}>قرار مدروس</span>
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
                  : 'border-ocean-700 text-ocean-400 hover:border-rose-500/40 hover:text-rose-400'
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
    q: 'كيف يُحسَب الربح في مخطط Sales Trend؟',
    a: 'الربح = الإيراد − تكلفة البضاعة المباعة (COGS). COGS = SUM(CostAtSale × Quantity) للبنود (OrderItems) الموجودة في الطلبات المُسلَّمة فقط (Delivered + PartiallyDelivered). CostAtSale هو سعر التكلفة المسجَّل وقت البيع — يعكس التكلفة الفعلية لا التكلفة الحالية للمخزون.',
  },
  {
    q: 'ما الفرق بين نسبة النمو (MoM) والمقارنة المعتادة؟',
    a: 'المقارنة ليست مقيَّدة بشهر إلى شهر فقط — هي Period over Period. مثال: اخترت الفترة ١٥ مارس - ٢٨ مارس (١٤ يوم) → المقارنة تكون مع ١ مارس - ١٤ مارس (١٤ يوم). الفترة السابقة دائماً مطابقة في العدد. إذا كانت الفترة السابقة صفراً والحالية موجبة: النمو = +١٠٠٪.',
  },
  {
    q: 'كيف يعمل الكاش ومتى يتحدَّث؟',
    a: 'KPIs و Charts: تُكاش ١٠ دقائق بـ IMemoryCache مع CancellationChangeToken مرتبط بـ companyId. Sidebar: يُكاش ٣٠ ثانية للبيانات الهيكلية، رصيد الخزينة يُجلَب حياً. الإبطال الفوري: عند أي تغيير في بيانات الشركة (طلب جديد، شحن، إلخ) يُستدعى InvalidateDashboardCache(companyId) الذي يُلغي جميع إدخالات الكاش المرتبطة بها فوراً.',
  },
  {
    q: 'لماذا تُحسَب خسائر المرتجعات بهذه الطريقة؟',
    a: 'ReturnLossesAmount = جزءان: (١) SUM ExtraCost للطلبات ذات حالة "Shipped on Sender" — تكلفة الشحن العائد. (٢) SUM(RefurbCost × Quantity) من StockMovements من نوع "Quarantine_Valid" — تكلفة تجديد المنتج بعد ترميمه من الحجر الصحي. الجزء الثاني لا يُحسَب في أنظمة أخرى اعتيادياً — هذا يُعطيك الخسارة الحقيقية الكاملة.',
  },
  {
    q: 'كيف يُحدَّد العميل "العائد" في إحصاءات New vs Returning؟',
    a: 'Identifier الأساسي هو رقم الهاتف (CustomerPhone). النظام يجمع الهواتف من Orders + ArchivedOrders في الفترة الحالية، ثم يُقارنها بكل الفترات السابقة. إذا ظهر الهاتف في فترة سابقة → عميل عائد. إذا لم يظهر → عميل جديد. Deduplication بـ HashSet للدقة.',
  },
  {
    q: 'هل تظهر بيانات الطلبات المؤرشفة في اللوحة؟',
    a: 'نعم — كل استعلام يجمع LiveOrders(Orders) + ArchOrders(ArchivedOrders) في نفس المدى الزمني. مثال: CountNonCancelledOrders = CountLive + CountArch. هذا يمنع "فجوة" تاريخية في الإحصاءات عند أرشفة الطلبات القديمة.',
  },
  {
    q: 'ما هو COD Aging ولماذا هو مهم؟',
    a: 'COD Aging هو لقطة فورية (Point-in-Time) لكل الطلبات الحالية في حالة "Shipped" مصنَّفة بالأيام منذ تاريخ الشحن. مثال: ١٢ طلباً أُشحِنت منذ أكثر من ٢١ يوماً → خطر إرجاع مرتفع. يساعدك على المتابعة الاستباقية قبل أن تصبح مرتجعات رسمية وتُكبِّدك تكلفة الشحن العائد.',
  },
  {
    q: 'ما الفرق بين GovReturnRates و SalesByGovernorate؟',
    a: 'SalesByGovernorate: أعلى ٥ محافظات بعدد الطلبات الكلي. GovReturnRates: معدل الإرجاع = Returned / Total لكل محافظة — لكن مع شرط إظهار: ≥٥ طلبات للمحافظة. هذا الشرط يمنع أن تظهر محافظة بمعدل ١٠٠٪ بسبب طلب واحد مرتجع فقط.',
  },
  {
    q: 'كيف يرتبط Campaign Performance بالطلبات؟',
    a: 'كل طلب يحمل CampaignId أو UtmCampaign. النظام يُفسِّر الـ UTM ويُحوِّله لـ CampaignId ثم يُجمِّع الإيراد والطلبات لكل حملة. الإنفاق يأتي من جدول الحملات الإعلانية. ROAS = Revenue ÷ Spend، CPO = Spend ÷ Orders — هذان الرقمان يُحدِّدان ما إذا كان الإعلان مربحاً أم ضاراً.',
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
            <SectionLabel color="#2dd4bf">أسئلة شائعة</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white">
            لا تقمار —{' '}
            <span style={{ color: ACCENT_HEX }}>كل رقم له مصدر.</span>
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
    href: '/features/reports',
    icon: <BarChart2 size={20} />,
    title: 'التقارير',
    body: 'بيانات اللوحة تُغذِّي تقارير مفصَّلة قابلة للتصدير — تعمُّق في أي رقم تراه على اللوحة.',
  },
  {
    href: '/features/expenses',
    icon: <Wallet size={20} />,
    title: 'المصروفات والخزينة',
    body: 'رصيد الخزينة في Sidebar يُجلَب مباشرةً من وحدة المصروفات — النبض المالي اللحظي.',
  },
  {
    href: '/features/inventory',
    icon: <Boxes size={20} />,
    title: 'إدارة المخزون',
    body: 'تنبيهات نفاد المخزون تظهر في Sidebar. CostAtSale في مخطط الربح يأتي من سجل تكاليف البضاعة.',
  },
  {
    href: '/features/shipping',
    icon: <Truck size={20} />,
    title: 'الشحن والتوصيل',
    body: 'Courier Performance وCOD Aging مشتقَّان من بيانات الشحن — رادار مخاطر التحصيل.',
  },
  {
    href: '/features/debts',
    icon: <Landmark size={20} />,
    title: 'المديونيات',
    body: 'الديون المتأخرة تظهر مباشرةً في Sidebar KPIs — وصول سريع لأداة التسوية.',
  },
  {
    href: '/features/preparation',
    icon: <Package size={20} />,
    title: 'التحضير',
    body: 'KPI card "To Prepare" يربطك مباشرةً بوحدة التحضير بنقرة — من الرقم للتنفيذ فوراً.',
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
            <SectionLabel color="#2dd4bf">الوحدات المرتبطة</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl font-black text-white">
            اللوحة تُلخِّص{' '}
            <span style={{ color: ACCENT_HEX }}>كل وحداتك في مكان واحد</span>
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
                className="group relative flex flex-col gap-3 rounded-2xl border border-ocean-700/50 bg-ocean-900/60 p-6 overflow-hidden transition-all duration-300 hover:border-rose-500/40 hover:-translate-y-1 hover:shadow-lg block"
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
                    <ChevronRight size={14} className="text-ocean-500 group-hover:text-rose-400 transition-colors" />
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
            <SectionLabel color="#2dd4bf">ابدأ الآن</SectionLabel>
          </motion.div>

          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white leading-tight">
            هل تعرف ربحيتك{' '}
            <span style={{ color: ACCENT_HEX }}>هذا الشهر بدقة؟</span>
          </motion.h2>

          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 text-base max-w-xl leading-relaxed">
            لا تكتفِ بمعرفة الإيراد — اعرف الربح الفعلي، معدل النمو، أفضل عملائك، وأفضل
            حملاتك. كل ذلك في لوحة واحدة، محدَّثة تلقائياً، على أي جهاز.
          </motion.p>

          <motion.div variants={fadeUp(0.15)} className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg, ${ACCENT_HEX}, ${ACCENT_DARK})`, boxShadow: ACCENT_GLOW }}
            >
              ابدأ الآن
              <ChevronRight size={18} />
            </a>
            <Link
              to="/#features"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-rose-500/40 hover:text-rose-400 transition-all duration-200"
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

export default function DashboardPage() {
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
