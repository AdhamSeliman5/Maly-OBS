/**
 * ReportsPage.tsx — Dedicated marketing page for the Reports (التقارير المالية) module.
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
 * Accent: violet — #8b5cf6 / #7c3aed
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
  FileText,
  TrendingUp,
  TrendingDown,
  Calculator,
  BarChart3,
  ShieldCheck,
  Users,
  Settings,
  Download,
  FileSpreadsheet,
  Wallet,
  Boxes,
  Truck,
  Clock,
  Target,
  Activity,
  LayoutDashboard,
  Landmark,
  RefreshCw,
  Scale,
  BrainCircuit,
  Sliders,
} from 'lucide-react'

// ─── Accent colour tokens ─────────────────────────────────────────────────────

const ACCENT      = 'rgba(139,92,246,'    // violet-500
const ACCENT_HEX  = '#8b5cf6'
const ACCENT_DIM  = 'rgba(139,92,246,0.12)'
const ACCENT_DARK = '#7c3aed'
const ACCENT_GLOW = '0 0 28px rgba(139,92,246,0.40)'

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
        className="inline-flex items-center gap-2 text-sm text-ocean-400 hover:text-violet-400 transition-colors"
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
        className="pointer-events-none absolute -top-28 left-1/3 w-[680px] h-[680px] rounded-full blur-3xl opacity-[0.10]"
        style={{ background: `radial-gradient(circle, ${ACCENT_HEX} 0%, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute top-48 right-0 w-72 h-72 rounded-full blur-3xl opacity-[0.07]"
        style={{ background: `radial-gradient(circle, #a78bfa 0%, transparent 70%)` }}
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
                <FileText size={15} />
                التقارير المالية والذكاء التجاري
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.05)}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white"
              style={{ lineHeight: '1.22' }}
            >
              ميزانيتك الحقيقية —{' '}
              <span style={{ color: ACCENT_HEX }}>في ثوانٍ، لا ساعات.</span>
              <br />
              ROI. هامش الربح.{' '}
              <span className="text-ocean-400">تحليل CFO.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeUp(0.1)}
              className="text-base sm:text-lg text-ocean-300 leading-relaxed max-w-xl"
            >
              الخلاصة المالية لشغلك في مكان واحد؛ 9 مؤشرات أساسية و10 نسب مالية دقيقة بتديك تقييم محترف لبيزنسك، السيستم بيجمعها من كل حتة في ثواني. تقدر كمان تجرب سيناريوهات مختلفة لمستقبل شغلك، تطلع تقارير Excel وPDF، وتدير حسابات شركائك وتوزع الأرباح بينهم بالمليم ومن غير غلطة.

            </motion.p>

            {/* Micro-stat pills */}
            <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-3">
              {[
                { label: '٩ KPIs + ١٠ نسب CFO', icon: <Calculator size={14} /> },
                { label: 'محاكاة سيناريوهات لحظية', icon: <Sliders size={14} /> },
                { label: '٦ تصديرات Excel + PDF', icon: <Download size={14} /> },
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
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-violet-500/40 hover:text-violet-400 transition-all duration-200"
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
                src="./assets/rpt-1-hero.png"
                alt="التقارير المالية — KPIs، الميزانية، محاكاة السيناريوهات"
                width={780}
                height={480}
                loading="eager"
                className="block w-full h-auto object-cover"
              />
            </div>

            {/* Floating badge — ROI */}
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
                <span className="text-xs text-ocean-400">عائد الاستثمار (ROI)</span>
                <span className="text-sm font-bold" style={{ color: '#4ade80' }}>صافي الربح ÷ رأس المال × ١٠٠</span>
              </div>
            </motion.div>

            {/* Floating badge — runway */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="absolute -top-5 -right-5 rounded-xl border border-ocean-700 bg-ocean-900/90 px-4 py-3 shadow-xl backdrop-blur-md flex items-center gap-3"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ background: ACCENT_DIM }}
              >
                <Clock size={16} style={{ color: ACCENT_HEX }} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-ocean-400">Runway (أشهر)</span>
                <span className="text-sm font-bold text-white">السيولة ÷ Burn Rate</span>
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
    stat: 'ساعات',
    text: 'يقضيها المدير المالي يدوياً في جمع الأرقام من إكسيل ومنصات الشحن والمصروفات — وقت يُنجزه النظام في أقل من ثانية واحدة بـ Task.WhenAll.',
    icon: <Clock size={22} />,
  },
  {
    stat: '٦٧٪',
    text: 'من قرارات التسعير في المتاجر الصغيرة تُبنى على الإيراد لا الربح الحقيقي — لأن حساب COGS يدوياً معقول جداً. هنا يحسبه النظام تلقائياً من OrderItems.',
    icon: <AlertTriangle size={22} />,
  },
  {
    stat: '٤٢٪',
    text: 'من الشركاء يكتشفون أخطاء في توزيع الأرباح بعد سنة — لأن حساب "Effective Capital = رأس المال + الإيداعات - السحوبات" لم يُطبَّق بدقة. هنا مُؤتمَت بالكامل.',
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
    icon: <Calculator size={20} />,
    title: '٩ KPIs بحوسبة متوازية — من ٥ قواعد بيانات',
    body: 'كل أرقامك المالية المهمة — زي صافي الإيرادات والأرباح، قيمة أصولك، السيولة المتاحة، وهامش ربحك، وحتى معدل المصاريف والوقت اللي السيولة الحالية تقدر تغطيه — السيستم بيحسبها لك كلها في وقت واحد ومن كل الحسابات. مفيش ثانية انتظار، الخلاصة دايمًا جاهزة قدامك عشان تقرر صح.',
  },
  {
    icon: <BrainCircuit size={20} />,
    title: '١٠ نسب مالية لمستوى CFO',
    body: 'كل النسب اللي بتعرفك صحة بيزنسك — من أول هامش الربح ومصاريف التشغيل، لحد سرعة دوران بضاعتك في المخزن ومواعيد تحصيل فلوسك من السوق — السيستم بيحسبها لك كلها مرة واحدة من بياناتك الحالية. كل النسب دي بتظهرلك فوراً ومن غير أي تحميل زيادة أو انتظار، عشان تديك صورة كاملة وحقيقية عن كفاءة شغلك.',
  },
  {
    icon: <Scale size={20} />,
    title: 'ميزانية مفصَّلة: ٨ أصول + ٥ خصوم',
    body: 'الأصول: الخزينة، المخزون (CurrentStock × CostPrice)، قروض الموظفين، المستحقات اليدوية، قيمة الشحنات النشطة، رصيد Shipping Ledger، قيمة Pipeline، الأصول الثابتة. الخصوم: رواتب معلَّقة، مدفوعات مستحقة، تكلفة إعادة التخزين، ديون Ledger، غرامات الإرجاع.',
  },
  {
    icon: <Sliders size={20} />,
    title: 'محاكاة سيناريوهات "ماذا لو؟"',
    body: 'درِّج معدل التسليم (٠-١٠٠٪)، معدل تسييل المخزون (٠-١٠٠٪)، وضع Pipeline (كل الطلبات / الجاهز فقط)، تكلفة الإرجاع/المشرف/التغليف لكل طلب — النظام يحسب Simulated Equity وSimulated Profit وROI فورياً.',
  },
  {
    icon: <FileSpreadsheet size={20} />,
    title: '٦ تصديرات Excel (ClosedXML)',
    body: 'Full Orders (١٨٠ يوم كحد أقصى)، Products (تكلفة + سعر بيع)، Shipping Performance (٣٦٦ يوم)، Sales Team Performance، Financial Summary، Inventory Valuation — كلها XLSX جاهزة للفتح في Excel مباشرةً.',
  },
  {
    icon: <FileText size={20} />,
    title: 'تقرير PDF احترافي (QuestPDF)',
    body: 'تقرير A4 بصورة العلامة التجارية: CFO KPIs، جدول KPIs الرئيسي، ميزانية الأصول/الخصوم، شرح صيغ المؤشرات (Explainable BI)، جدول الشركاء — بالعربي (RTL) أو الإنجليزي كامل الخيار.',
  },
  {
    icon: <Activity size={20} />,
    title: 'تسوية مالية بالفترة (Financial Settlement)',
    body: 'حدد أي فترة زمنية تختارها، والسيستم هيحسبلك فوراً: مبيعاتك، تكلفة البضاعة اللي اتباعت، مصاريف الشحن، وكمان مرتبات الموظفين اللي اندفعت، ومصاريف إعلاناتك وأي مصاريف تانية.. وفي الآخر يطلعلك مكسبك الصافي، ومعدل العائد من إعلاناتك، ونسبة استثمارك في الفترة دي بالظبط، عشان تعرف كل قرش صرفته رجعلك قد إيه.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Sales Summary بلوحة يومية وشهرية',
    body: 'تقدر تعرض مبيعاتك، وتكلفة البضاعة، وصافي ربحك بالتاريخ اللي تحبه، سواء يوم بيوم أو شهر بشهر. السيستم بيحسب التكلفة بدقة من واقع كل صنف اتبع في لحظتها، وبيجمع بياناتك الحالية والقديمة المتأرشفة مع بعض أوتوماتيك، عشان يديك تقرير مالي كامل ومظبوط عن أي فترة تختارها.',
  },
  {
    icon: <Users size={20} />,
    title: 'إدارة الشركاء وتوزيع الأرباح',
    body: 'أضف شركاء بحصص % ورأس مال. إيداعات وسحوبات ورفع رأس المال — كلها في سجل شفاف. Distribution Base = Adjusted Equity - Effective Capital. شرط ١٠٠٪ على الحصص قبل إغلاق الفترة أو خروج الشريك.',
  },
  {
    icon: <RefreshCw size={20} />,
    title: 'إغلاق الفترة المالية',
    body: 'أغلق الفترة: يُؤرشَف صافي حقوق الملكية كـ Opening Capital للفترة التالية، تُحوَّل مستحقات الشركاء لـ Debts. شرط: مجموع الحصص = ١٠٠٪ بالضبط — وإلا يُرفَض الإغلاق.',
  },
  {
    icon: <Target size={20} />,
    title: 'خروج الشريك بتسوية كاملة',
    body: 'عند خروج شريك: تحكَّم في تقييم الأصول الثابتة ونسبة تسييل المخزون. النظام يحسب صافي المستحق (Net Payout) فورياً. ادفع من الخزينة أو أنشئ مديونية بتاريخ استحقاق. حصته تُعاد توزيعها على الشركاء المتبقين.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Explainable BI — كل رقم بصيغته',
    body: 'كل من ٩ KPIs يحمل kpiBreakdowns: صيغة JSON تشرح مكوناته. مثال: Net Equity = {assets, liabilities, result}. اضغط على أي بطاقة مؤشر لترى المكونات الحقيقية — لا صناديق سوداء.',
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
            <SectionLabel>لماذا التقارير المالية؟</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white mb-4">
            ليست مجرد أرقام —{' '}
            <span style={{ color: ACCENT_HEX }}>هي قرارات مبنية على بيانات.</span>
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 max-w-2xl mx-auto text-base leading-relaxed">
            من صحة السيولة الشهرية إلى ROAS الحملات وأيام بيع المخزون — وحدة التقارير تُغطي كل
            ما يحتاجه صاحب المتجر ورئيس المالية في آنٍ واحد.
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
    label: 'المؤشرات الجوهرية',
    icon: <Calculator size={16} />,
    steps: [
      {
        title: '٩ KPIs محسوبة bمتوازياً من ٥ مصادر',
        body: 'Net Revenue يجمع Orders + ArchivedOrders. Net Profit = Revenue - Total Expenses. Net Equity = Assets - Liabilities. Burn Rate = متوسط OPEX الشهري (يُستبعد Ads وGoods Purchase وRestock وShipping من حساب الـ OPEX). كل مجموعة تعمل على DbContext مستقل.',
      },
      {
        title: 'ROI وRoyalty وProfit Margin بدقة أربعة أرقام',
        body: 'ROI = Net Profit ÷ Opening Capital × ١٠٠. Opening Capital يُقرأ من آخر Financial Period المُغلقة، وإن لم توجد فمن مجموع InitialCapital للشركاء. Profit Margin محسوبة بنسبة ٤ خانات عشرية — لا تقريب مبكر.',
      },
      {
        title: 'Runway: كم شهراً يبقى السيولة؟',
        body: 'Runway = Net Liquidity ÷ Burn Rate. Net Liquidity = (Cash + In-Shipping + Pipeline) - Total Liabilities. إذا كانت السيولة سالبة أو Burn Rate صفراً → Runway = 0 (لا قيم x سالبة أو ∞). مؤشر إنذار مبكر حقيقي.',
      },
      {
        title: 'CFO Mode — ١٠ نسب تحليلية متقدمة',
        body: 'Gross Profit Margin (Revenue - COGS)، Inventory Turnover (COGS ÷ Inventory Value)، DSO = (AR ÷ Revenue × ٣٦٥) — أيام تحصيل المبيعات. AP Days = (AP ÷ COGS × ٣٦٥). Debt-to-Equity Ratio. كلها تُحسَب بدون استعلام إضافي فوق Core KPIs.',
      },
    ],
    imgSrc: './assets/rpt-2-list.png',
    imgAlt: 'لوحة KPIs — ٩ مؤشرات جوهرية + ١٠ نسب CFO',
  },
  {
    id: 'simulation',
    label: 'محاكاة السيناريوهات',
    icon: <Sliders size={16} />,
    steps: [
      {
        title: 'محرك السيناريوهات — "ماذا لو سلَّمت ٨٠٪ فقط؟"',
        body: 'Delivery Rate (٠-١٠٠٪): تطبيق على pipeline و in-shipping — يحسب الإيراد المتوقع. Pipeline Mode: "Ship All" يُضيف تكلفة تصفير المخزون كالتزام، "Ship Ready Only" يقصر التحليل على الطلبات الجاهزة. الفرق واضح في Simulated Equity مباشرةً.',
      },
      {
        title: 'معدل تسييل المخزون وتكاليف الوحدة',
        body: 'Inventory Liquidation Rate (٠-١٠٠٪): ما قيمة مخزونك لو اضطررت لبيعه بعجلة؟ تكاليف الوحدة: تكلفة الإرجاع لكل طلب، مكافأة المشرف للطلب الناجح، تكلفة التغليف لكل طلب — كلها تُضرَب في عدد الطلبات المقابلة وتُطرَح من الربح المحاكَى.',
      },
      {
        title: 'النتيجة الكاملة للسيناريو: ٨ أرقام',
        body: 'SimulatedEquity، SimulatedProfit، ROI المحاكَى، NetLiquidity، WorkingCapital، TotalAssets، TotalLiabilities — بالإضافة لـ AssetsBreakdown وLiabilitiesBreakdown مفصَّلَيْن (٨ بنود للأصول، ٥ للخصوم). كل شيء في استجابة API واحدة.',
      },
      {
        title: 'مُعدَّل التسليم الضمني (Implied Delivery Rate)',
        body: 'قبل تشغيل المحاكاة، النظام يحسب معدل التسليم الفعلي من سجلاتك التاريخية ويملأ الـ Slider تلقائياً — انطلاقاً من واقعك لا من افتراضك. هذا يجعل المحاكاة نقطة بداية واقعية لا خيالية.',
      },
    ],
    imgSrc: './assets/rpt-3-action.png',
    imgAlt: 'محرك السيناريوهات — درجة التسليم، تسييل المخزون، تكاليف الوحدة',
  },
  {
    id: 'settlement',
    label: 'التسويات والتصدير',
    icon: <FileSpreadsheet size={16} />,
    steps: [
      {
        title: 'Financial Settlement — P&L حقيقي بالفترة',
        body: 'حدِّد أي نطاق زمني: النظام يحسب الإيراد، COGS (JOIN مباشر على OrderItems — لا round-trips)، تكلفة الشحن، رواتب الموظفين المُدفوعة خلال الفترة، الإنفاق الإعلاني، المصاريف الأخرى. Net Profit = Revenue - Total Costs. ROAS = Revenue ÷ Ad Spend.',
      },
      {
        title: 'Sales Summary — يومي أو شهري مع Profit',
        body: 'Revenue + COGS + Gross Profit لكل يوم أو شهر. COGS مجمَّع بـ JOIN مباشر على OrderItems في PostgreSQL — يعيد ≤٤ × ٣٦٦ صفاً مجمَّعاً للدمج في الذاكرة. بيانات الأرشيف مدمجة تلقائياً. يُمنع نطاق أكثر من ٣٦٦ يوماً لحماية الأداء.',
      },
      {
        title: '٦ تصديرات Excel بـ ClosedXML',
        body: 'Full Orders: كل الطلبات بحقولها (١٨٠ يوم). Products: منتجات بتكلفة وسعر بيع ومخزون. Shipping Performance: أداء شركات الشحن بالتسليم والإرجاع وأيام التوصيل. Sales Team: مؤشرات المشرفين. Financial Summary: ملخص مالي شامل. Inventory Valuation: التكلفة + سعر البيع لكل variant.',
      },
      {
        title: 'PDF تقرير A4 بالعربي/الإنجليزي',
        body: 'تقرير QuestPDF كامل: شعار الشركة، تاريخ التوليد، CFO KPIs، جدول المؤشرات الرئيسية، ميزانية الأصول والخصوم، قسم شرح الصيغ (Explainable BI)، جدول الشركاء — مع أرقام الصفحات. دعم RTL كامل للعربي.',
      },
    ],
    imgSrc: './assets/rpt-4-details.png',
    imgAlt: 'التسوية المالية والتصدير Excel وPDF',
  },
  {
    id: 'partners',
    label: 'الشركاء والأرباح',
    icon: <Users size={16} />,
    steps: [
      {
        title: 'ميزانية الشركاء: حصة، رأس مال، Effective Capital',
        body: 'كل شريك له: حصة % من الأرباح، رأس مال مبدئي. Effective Capital = InitialCapital + Injections - Withdrawals (كل السجلات التاريخية). Distribution Base = Net Equity المُعدَّل - Effective Capital الكلي. هذا هو ما يُوزَّع فعلياً على الشركاء بنسبهم.',
      },
      {
        title: 'سجل المعاملات: سحب، إيداع، زيادة رأس المال',
        body: 'لكل شريك: أضف سحباً (Withdrawal)، حقن نقدي (Cash Injection)، أو زيادة رأس مال (Capital Increase) — كلها مُسجَّلة بالتاريخ والملاحظة. عرض التاريخ الكامل بنقرة. التحقق من الخزينة قبل أي سحب.',
      },
      {
        title: 'الخروج من الشراكة — تسوية شاملة ومحكمة',
        body: 'شروط الخروج: لا يمكن إخراج آخر شريك. مجموع الحصص يجب أن يكون ١٠٠٪ بالضبط. احسب: اختار تضمين الأصول الثابتة أم لا، ونسبة تسييل المخزون — الـ Payout يُحسَب لحظياً. ادفع من الخزينة أو أنشئ مديونية بتاريخ.',
      },
      {
        title: 'إغلاق الفترة المالية — نقطة البداية الجديدة',
        body: 'بعد التحقق من أن الحصص = ١٠٠٪: تُؤرشَف بيانات الفترة بـ Net Equity كـ Opening Capital للفترة التالية. مستحقات الشركاء تتحول لـ Debts في الوحدة الخاصة بها. بداية نظيفة لكل فترة مالية جديدة.',
      },
    ],
    imgSrc: './assets/rpt-5-extras.png',
    imgAlt: 'إدارة الشركاء — توزيع الأرباح وخروج الشريك وإغلاق الفترة',
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
            من بيانات خام إلى{' '}
            <span style={{ color: ACCENT_HEX }}>تقرير مالي محكم</span>
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
                  : 'border-ocean-700 text-ocean-400 hover:border-violet-500/40 hover:text-violet-400'
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
    q: 'ما الفرق بين Net Profit وDistribution Base؟',
    a: 'Net Profit = Total Revenue - Total All Expenses (كل المصروفات بما فيها شراء البضاعة والشحن). هذا المؤشر يعكس صحة الأعمال الإجمالية. Distribution Base = Adjusted Net Equity - Effective Capital (رأس مال الشركاء + الإيداعات - السحوبات). هذا هو ما يُوزَّع فعلياً على الشركاء — قد يختلف عن Net Profit لأنه يأخذ في الاعتبار الأصول المادية والالتزامات القائمة.',
  },
  {
    q: 'كيف تُحسَب COGS في Financial Settlement؟',
    a: 'COGS = SUM(CostAtSale) من OrderItems مرتبطة بالطلبات غير الملغاة في الفترة المحددة. يُستخدَم JOIN مباشر على Orders ثم OrderItems في استعلام SQL واحد — لا round-trip "جلب IDs ثم جلب بنود". North star: CostAtSale هو سعر التكلفة وقت البيع (snapshot تاريخي) ليعكس الواقع الذي بِيع فيه المنتج.',
  },
  {
    q: 'لماذا لا تظهر بعض المصروفات في Burn Rate؟',
    a: 'Burn Rate يمثل OPEX التشغيلي الحقيقي المتكرر. تُستبعد منه: Ads (تختلف شهرياً وغير متكررة)، Goods Purchase (تكلفة بضاعة لا مصروف تشغيل)، Restock، Shipping (تكلفة منتجية لا ثابتة). هذا يعطي مؤشراً أنقى لمعدل "الحرق" الشهري للمصاريف الثابتة.',
  },
  {
    q: 'ما هو Implied Delivery Rate ولماذا يهم؟',
    a: 'Implied Delivery Rate = نسبة الطلبات المُسلَّمة فعلياً من إجمالي الطلبات التي دخلت في مرحلة الشحن — مشتقة من بياناتك الحقيقية. النظام يملأ بها سلايدر المحاكاة تلقائياً. هذا يجعل سيناريو "ماذا لو؟" منطلقاً من واقعك لا من افتراض ١٠٠٪.',
  },
  {
    q: 'كيف الفرق بين "Ship All Pipeline" و"Ship Ready Only" في المحاكاة؟',
    a: '"Ship All": يفترض شحن كل الطلبات في الـ Pipeline (بما فيها ذات الstockشورتيج) — يضاف RestockCost كالتزام إضافي. "Ship Ready Only": يُحسَب فقط من الطلبات التي لديها كل منتجاتها متوفرة في المخزون (بدون نقص). الفرق في Simulated Equity يكشف تأثير الطلبات المعلَّقة بنقص المخزون.',
  },
  {
    q: 'ما قيود الاستيراد إلى Excel؟',
    a: 'Full Orders: Max 180 يوم (لتفادي استعلامات ضخمة). Shipping Performance: Max 366 يوم. Products وInventory Valuation: بدون حد زمني (snapshot حالي). كلها تعيد XLSX باستخدام ClosedXML مع AdjustToContents() — الأعمدة تتسع تلقائياً على المحتوى.',
  },
  {
    q: 'كيف يعمل قسم Explainable BI في تقرير PDF؟',
    a: 'كل KPI يُخزَّن مع kpiBreakdowns: dictionary JSON بمكوناته. مثال: Net Equity = {assets: 250000, liabilities: 78000, result: 172000}. تقرير PDF يُظهر هذه المكونات في "KPI Explain Section" — المدير يرى الصيغة، المكونات، والنتيجة. لا أرقام معلَّقة بدون مرجع.',
  },
  {
    q: 'هل يمكن تغيير نسبة الشريك بعد إضافته؟',
    a: 'نعم — من خلال Edit Partner: غيِّر الاسم أو الحصة %. رأس المال المبدئي (InitialCapital) لا يمكن تغييره من Edit بل فقط بإضافة معاملة "Capital Increase" — هذا تعمُّدي لحفظ سجل التاريخ المالي الدقيق.',
  },
  {
    q: 'ما الذي يحدث بعد إغلاق الفترة المالية؟',
    a: 'يُسجَّل Net Equity الحالي كـ OpeningCapital للفترة الجديدة في جدول FinancialPeriods. مستحقات الشركاء من الأرباح تنتقل لوحدة المديونيات (Debts) كسجل رسمي. الشركاء يبدؤون الفترة الجديدة بسجل نظيف — الأرصدة المتراكمة لا تختفي بل تُحسَب في Opening Capital.',
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
            كل رقم مصدره{' '}
            <span style={{ color: ACCENT_HEX }}>صيغة واضحة.</span>
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
    href: '/#/features/dashboard',
    icon: <LayoutDashboard size={20} />,
    title: 'لوحة القيادة',
    body: 'التقارير تُغذِّي بيانات لوحة القيادة — المؤشرات اليومية تستمد أعدادها من نفس بنية الحسابات.',
  },
  {
    href: '/#/features/expenses',
    icon: <Wallet size={20} />,
    title: 'المصروفات والخزينة',
    body: 'Cash في الميزانية = SUM(Income) - SUM(Expenses) من وحدة المصروفات. Burn Rate مستمد مباشرةً من تصنيفات المصروفات.',
  },
  {
    href: '/#/features/inventory',
    icon: <Boxes size={20} />,
    title: 'إدارة المخزون',
    body: 'Inventory Value = CurrentStock × CostPrice للمتغيرات. Restock Cost = (ReservedStock - CurrentStock) × CostPrice. كلاهما خط أصول مباشر في الميزانية.',
  },
  {
    href: '/#/features/debts',
    icon: <Landmark size={20} />,
    title: 'المديونيات',
    body: 'Manual Receivables وPayables تأتي من ExternalDebts. عند إغلاق الفترة، مستحقات الشركاء تنتقل هنا كـ Debts رسمية.',
  },
  {
    href: '/#/features/shipping',
    icon: <Truck size={20} />,
    title: 'الشحن',
    body: 'In-Shipping value في الميزانية = قيمة الطلبات المشحونة النشطة. تقرير Shipping Performance Excel يُعطي أداء كل شركة خلال الفترة.',
  },
  {
    href: '/#/features/manufacturing',
    icon: <Settings size={20} />,
    title: 'التصنيع',
    body: 'FixedAssets من التصنيع تظهر مباشرةً في قسم الأصول في الميزانية وتؤثر على Net Equity وWorking Capital.',
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
            التقارير{' '}
            <span style={{ color: ACCENT_HEX }}>تجمع كل وحداتك في ميزانية واحدة</span>
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
                className="group relative flex flex-col gap-3 rounded-2xl border border-ocean-700/50 bg-ocean-900/60 p-6 overflow-hidden transition-all duration-300 hover:border-violet-500/40 hover:-translate-y-1 hover:shadow-lg block"
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
                    <ChevronRight size={14} className="text-ocean-500 group-hover:text-violet-400 transition-colors" />
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
            هل تعرف{' '}
            <span style={{ color: ACCENT_HEX }}>هامش ربحك الحقيقي</span>
            <br />
            لهذا الشهر؟
          </motion.h2>

          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 text-base max-w-xl leading-relaxed">
            لا تنتظر المحاسب. لا تجمع إكسيل. حوِّل بيانات متجرك إلى ميزانية حقيقية، تقرير CFO
            كامل، وسيناريوهات مستقبلية — في نقرة واحدة.
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
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-violet-500/40 hover:text-violet-400 transition-all duration-200"
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

export default function ReportsPage() {
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
