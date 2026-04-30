/**
 * StaffPage.tsx — Dedicated marketing page for the Staff (فريق العمل والموارد البشرية) module.
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
 * Accent: purple — #a855f7 / #9333ea
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Users,
  UserCheck,
  Calculator,
  Wallet,
  Coins,
  TrendingUp,
  ShieldCheck,
  Lock,
  FileText,
  LayoutDashboard,
  BarChart3,
  History,
  Repeat,
  Megaphone,
  Settings,
  ArrowRightLeft,
  ClipboardList,
  BadgeDollarSign,
  Banknote,
  TimerReset,
} from 'lucide-react'

// ─── Accent colour tokens ─────────────────────────────────────────────────────

const ACCENT      = 'rgba(168,85,247,'   // purple-500
const ACCENT_HEX  = '#a855f7'
const ACCENT_DIM  = 'rgba(168,85,247,0.12)'
const ACCENT_DARK = '#9333ea'
const ACCENT_GLOW = '0 0 28px rgba(168,85,247,0.40)'

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
        className="inline-flex items-center gap-2 text-sm text-ocean-400 hover:text-purple-400 transition-colors"
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
        className="pointer-events-none absolute -top-24 right-1/4 w-[700px] h-[700px] rounded-full blur-3xl opacity-[0.09]"
        style={{ background: `radial-gradient(circle, ${ACCENT_HEX} 0%, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute top-56 left-0 w-80 h-80 rounded-full blur-3xl opacity-[0.06]"
        style={{ background: `radial-gradient(circle, #c084fc 0%, transparent 70%)` }}
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
                <Users size={15} />
                فريق العمل والموارد البشرية
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.05)}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white"
              style={{ lineHeight: '1.22' }}
            >
              إدارة رواتب فريقك{' '}
              <span style={{ color: ACCENT_HEX }}>بدقة محاسبية.</span>
              <br />
              بدون إكسيل —{' '}
              <span className="text-ocean-400">بدون مفاجآت.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeUp(0.1)}
              className="text-base sm:text-lg text-ocean-300 leading-relaxed max-w-xl"
            >
              ٥ طرق راتب مختلفة. حساب عمولة مودريتور ومنيجر وماركيتر من طلباتك الحقيقية.
              سُلَف مع تأمين خزينة بـ PostgreSQL Row Lock. رواتب تُحسَب server-side —
              محمية من أي تلاعب. كل دفعة تُنشئ مصروفاً محاسبياً تلقائياً.
            </motion.p>

            {/* Micro-stat pills */}
            <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-3">
              {[
                { label: '٥ طرق راتب', icon: <BadgeDollarSign size={14} /> },
                { label: 'حساب عمولة من الطلبات', icon: <TrendingUp size={14} /> },
                { label: 'سُلَف محمية بـ Row Lock', icon: <Lock size={14} /> },
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
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-purple-500/40 hover:text-purple-400 transition-all duration-200"
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
                src="./assets/stf-1-hero.png"
                alt="لوحة إدارة الرواتب والموارد البشرية — كشف رواتب وعمولات وسلف"
                width={780}
                height={480}
                loading="eager"
                className="block w-full h-auto object-cover"
              />
            </div>

            {/* Floating badge — Net Due */}
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
                <Calculator size={16} style={{ color: ACCENT_HEX }} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-ocean-400">Net Due — محمد خالد</span>
                <span className="text-sm font-bold text-white">عمولة + أساسي - خصومات</span>
              </div>
            </motion.div>

            {/* Floating badge — Server Verified */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="absolute -top-5 -right-5 rounded-xl border border-ocean-700 bg-ocean-900/90 px-4 py-3 shadow-xl backdrop-blur-md flex items-center gap-3"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ background: 'rgba(74,222,128,0.12)' }}
              >
                <ShieldCheck size={16} style={{ color: '#4ade80' }} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-ocean-400">Server recalculated</span>
                <span className="text-sm font-bold" style={{ color: '#4ade80' }}>محمي من التلاعب</span>
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
    stat: 'إكسيل',
    text: 'كشف الرواتب في إكسيل يعني: أخطاء في الصيغ، نسيان السُّلَف في آخر الشهر، عمولات محسوبة على طلبات لم تُسلَّم. هنا المحرك يحسب كل شيء من طلباتك الحقيقية — لا إدخال يدوي في الصيغ.',
    icon: <ClipboardList size={22} />,
  },
  {
    stat: 'سلفة',
    text: 'سلفة لموظف بدون سجل رسمي = نقاش في آخر الشهر. هنا: كل سلفة تُسجَّل كمصروف محاسبي تلقائياً، تُخصَم من الراتب القادم، ومحمية بـ Row-Level Lock في قاعدة البيانات — يستحيل خصم نفس المبلغ مرتين.',
    icon: <Coins size={22} />,
  },
  {
    stat: 'موديراتور',
    text: 'حساب عمولة موديراتور أو منيجر يدوياً من جداول الطلبات يأخذ ساعات — وغالباً ينتهي بنقاش. هنا: العمولة تأتي من الأرشيف مباشرةً — طلبات مُسلَّمة فقط (أو الكل بخيارك) — وتُحسَب ثانياً server-side عند الدفع.',
    icon: <Users size={22} />,
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
              <p className="mb-2 text-3xl font-black" style={{ color: ACCENT_HEX }}>{p.stat}</p>
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
    icon: <BadgeDollarSign size={20} />,
    title: '٥ طرق راتب — لكل دور نموذجه',
    body: 'Fixed (ثابت)، Fixed+Commission% (ثابت + نسبة من المبيعات)، Fixed+PerOrder (ثابت + مبلغ لكل طلب)، Fixed+PerItem (ثابت + مبلغ لكل قطعة)، Percentage (نسبة من إنفاق الإعلانات للماركيتر). كل طريقة تُحسَب تلقائياً من بيانات الطلبات الحقيقية.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'عمولة من الأرشيف — لا إدخال يدوي',
    body: 'المودريتور: عمولته من الطلبات التي يحمل اسمه. المنيجر: عمولته من طلبات مودريتوراته المرتبطين به. CommissionScope: "Delivered Only" أو "All Orders". الطلبات تُجلَب من الأرشيف بعد استبعاد المُسوَّاة لمنع العد المزدوج.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Server-Side Recalculation — محمي من التلاعب',
    body: 'عند الدفع: النظام يحسب الراتب من جديد server-side — لا يعتمد على الأرقام المُرسَلة من الـ client. إذا كان PayAmount > NetDue المحسوب server-side بفارق ٠.٠١: طلب مرفوض بـ 400 مع رسالة واضحة. مستحيل دفع أكثر من المستحق.',
  },
  {
    icon: <Lock size={20} />,
    title: 'Row-Level Lock للسُّلَف — لا تكرار',
    body: 'عند تسجيل سلفة: يُقفَل صف الخزينة (SELECT FOR UPDATE) + صف الموظف — يمنع سحب نفس المبلغ مرتين في حالة طلبين متزامنين. يُفحَص رصيد الخزينة بعد القفل. الموظف يُعاد تحميله لضمان CurrentBalance الحديث.',
  },
  {
    icon: <Banknote size={20} />,
    title: 'كل دفعة = مصروف محاسبي تلقائي',
    body: 'عند معالجة الراتب: يُنشأ Expense (Category: "Salaries", is_auto=1) تلقائياً في جدول المصروفات. السلفة تُنشئ Expense (Category: "Staff Loans", is_auto=1). كلتاهما محميتان من التعديل. تؤثران على Burn Rate والخزينة فوراً.',
  },
  {
    icon: <Repeat size={20} />,
    title: 'Carried Over — لا رصيد يضيع',
    body: 'دفعت جزءاً من الراتب؟ ما تبقى يُحفَظ كـ CarriedOverBalance ويُضاف تلقائياً لكشف الراتب القادم. دفعت أكثر (سُلفة)؟ يُحفَظ كـ CurrentBalance سالب ويُطرح من الراتب القادم. النظام يتتبع كل فلس.',
  },
  {
    icon: <TimerReset size={20} />,
    title: 'Proration — راتب يومي بالأيام الفعلية',
    body: 'الراتب الأساسي المستحق = BaseSalary × (أيام العمل ÷ أيام الشهر). إذا كان الفارق ≤ ٢ يوم يُعامَل كشهر كامل — تجنباً للفروق في نهاية الشهر. الحساب server-side بناءً على LastPaidDate الفعلية.',
  },
  {
    icon: <Users size={20} />,
    title: 'هيكل إداري — منيجر → موديراتور',
    body: 'كل مودريتور مرتبط بمنيجر. المنيجر يستطيع تتبع مودريتوراته. عمولة المنيجر تُحسَب من مجموع طلبات كل مودريتوراته مجتمعةً. الهرم يظهر في لوحة الفريق ويؤثر مباشرةً على حساب العمولات.',
  },
  {
    icon: <ArrowRightLeft size={20} />,
    title: 'حذف مع ترحيل للديون — لا رصيد يختفي',
    body: 'عند حذف موظف برصيد مستحق: يُنشأ Debt تلقائياً في وحدة الديون (Payable لو النظام يدين الموظف — Receivable لو الموظف يدين الشركة). الموظف يصبح IsActive=0 (Soft Delete) ولا يختفي من السجل التاريخي.',
  },
  {
    icon: <UserCheck size={20} />,
    title: 'موظف ≠ مستخدم — فصل كامل',
    body: 'EmployeeInputDto: بيانات HR فقط (Name, Role, SalaryMethod, BaseSalary…). لا Username، لا Password. الصلاحيات تُدار حصراً في وحدة الإعدادات على AppUser. يمكن أن يكون للموظف حساب مرتبط — أو لا. استقلالية تامة.',
  },
  {
    icon: <History size={20} />,
    title: 'سجل كامل لكل الحركات',
    body: 'كل Bonus، Deduction، Loan، Salary Payment مُسجَّل في EmployeeTransactions مع تاريخ ودور وملاحظات. قابل للفلترة بالموظف أو الدور. SalaryAdjustments تُرفع تلقائياً (IsApplied=1) في نفس transaction الدفع — تراجع أكثر أمناً.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'لوحة HR — ٧ KPIs بنظرة واحدة',
    body: 'إجمالي الموظفين + توزيع الأدوار، LifetimePaid (إجمالي ما دُفع تاريخياً)، MonthPaid (هذا الشهر)، DueToday (المستحق اليوم عبر proration)، PendingBalance (أرصدة محمولة معلقة). كلها تُحسَب في PostgreSQL — لا loops جانب الـ API.',
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
            <SectionLabel>لماذا HR متكامل؟</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white mb-4">
            الرواتب ليست إكسيل —{' '}
            <span style={{ color: ACCENT_HEX }}>هي التزام مالي بدقة محاسبية.</span>
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 max-w-2xl mx-auto text-base leading-relaxed">
            من حساب العمولة على الطلبات المُسلَّمة فعلاً، إلى تأمين السُّلَف بـ Row Lock في
            قاعدة البيانات، إلى كشف الراتب المُعاد حسابه server-side عند كل دفعة — وحدة HR
            مبنية على معايير مالية حقيقية لا على قوائم بسيطة.
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
    id: 'team',
    label: 'إدارة الفريق',
    icon: <Users size={16} />,
    steps: [
      {
        title: 'أضف موظفاً: الدور + طريقة الراتب',
        body: 'اختر الدور: Manager / Moderator / Staff / Accountant / Marketer. اختر طريقة الراتب الأنسب. للمودريتور: حدِّد منيجره. للماركيتر بـ Percentage: أدخل إنفاق الإعلانات. JoiningDate وLastPaidDate إلزاميان ولا يتغيران بعد الحفظ — قاعدة مراجعة HR.',
      },
      {
        title: 'CommissionScope — أي الطلبات تُحسَب؟',
        body: '"Delivered Only": العمولة فقط على الطلبات المُسلَّمة — حماية من العمولات على المرتجعات. "All Orders": العمولة على كل الطلبات بغض النظر عن الحالة. الخيار يؤثر مباشرةً على حساب العمولة في كشف الراتب.',
      },
      {
        title: 'تعديل الموظف — البيانات القابلة للتغيير',
        body: 'يمكن تغيير: الاسم، الدور، طريقة الراتب، الراتب الأساسي، العمولة، المنيجر، AdSpend، CommissionScope. لا يمكن تغيير: JoiningDate وLastPaidDate — محميان بـ HR audit rule في الـ backend.',
      },
      {
        title: 'Soft Delete مع حماية الرصيد',
        body: 'حذف موظف برصيد → يُنشأ Debt في وحدة الديون تلقائياً (Payable أو Receivable حسب اتجاه الرصيد) ثم يُضبَط IsActive=0. الموظف بدون رصيد → Soft Delete بصمت. في الحالتين: السجل التاريخي محفوظ ولا حذف فعلي من قاعدة البيانات.',
      },
    ],
    imgSrc: './assets/stf-2-list.png',
    imgAlt: 'جدول الفريق — أدوار ومرتبات وحالة كل موظف',
  },
  {
    id: 'payroll',
    label: 'كشف الراتب',
    icon: <Calculator size={16} />,
    steps: [
      {
        title: 'احسب الراتب — PeriodFrom تلقائياً',
        body: 'PeriodFrom = LastPaidDate + يوم واحد (أو أول الشهر إن لم يُدفَع بعد). حدِّد PeriodTo واضغط "Calculate". الكشف يظهر: Carried Over + Accrued Base (بالأيام) + Commission + Bonus - Deductions - Loans = Net Due.',
      },
      {
        title: 'Proration — حساب الأيام الفعلية',
        body: 'AccruedSalary = BaseSalary × (daysWorked ÷ daysInMonth). إذا كان الفارق بين daysWorked وdaysInMonth ≤ ٢ يوم: multiplier = 1.0 (شهر كامل). منع الاستقطاعات التلقائية لأيام نهاية الشهر القليلة.',
      },
      {
        title: 'Commission من الأرشيف — لا إدخال يدوي',
        body: 'المودريتور: يجلب ArchivedOrders حيث moderator_name = اسم الموظف + ModeratorSettled=0. المنيجر: يجلب طلبات مودريتوراته مع IsManagerPaid=0. بعد الدفع: تُصفَّر (ModeratorSettled/IsManagerPaid=1) لمنع الاحتساب المزدوج في الشهر القادم.',
      },
      {
        title: 'Process Payment — Server Recalculates',
        body: 'عند الدفع: الـ server يعيد حساب الكشف مستقلاً (BuildPayrollBreakdownAsync). إذا PayAmount > NetDue+0.01: مرفوض. إذا PayAmount < NetDue: الباقي يُحفَظ CarriedOverBalance. يُنشأ EmployeeTransaction + Expense (Salaries, is_auto=1) في نفس DB transaction.',
      },
    ],
    imgSrc: './assets/stf-3-action.png',
    imgAlt: 'كشف الراتب — تفصيل المكسب والاستقطاعات والمبلغ المستحق',
  },
  {
    id: 'adjustments',
    label: 'مكافآت وسلف',
    icon: <Coins size={16} />,
    steps: [
      {
        title: 'Bonus — مكافأة فورية بسجل محاسبي',
        body: 'أدخل المبلغ والسبب. يُحفَظ في SalaryAdjustments (Type=Bonus, IsApplied=0). عند حساب الراتب يُضاف للـ Gross. عند الدفع: يُرفَع تلقائياً (IsApplied=1) في نفس transaction الدفع — لا مكافأة تُحسَب مرتين.',
      },
      {
        title: 'Deduction — استقطاع بسبب واضح',
        body: 'نفس آلية المكافأة: يُحفَظ بـ IsApplied=0 وعند الدفع يُضبَط IsApplied=1 أتوماتيكياً. يُطرح من الـ Gross في كشف الراتب. السبب إلزامي للوضوح المحاسبي.',
      },
      {
        title: 'Loan — سُلفة مع تأمين مزدوج',
        body: 'السلفة تُدفَع من الخزينة فوراً — يُقفَل صف الخزينة (SELECT treasury FOR UPDATE) + صف الموظف (SELECT employee FOR UPDATE) قبل أي عملية. CurrentBalance يتناقص بمقدار السلفة. يُنشأ EmployeeTransaction (Loan سلفة) + Expense (Staff Loans, is_auto=1).',
      },
      {
        title: 'متى تُخصَم السلفة من الراتب؟',
        body: 'CurrentBalance السالب = سلفة غير مُسدَّدة. في الكشف: Loans = Abs(CurrentBalance < 0). تُطرح من إجمالي الراتب تلقائياً. لا تحتاج لإدخال يدوي — النظام يعرف ما تبقى ويطرحه في الدورة التالية دون تدخل.',
      },
    ],
    imgSrc: './assets/stf-4-details.png',
    imgAlt: 'مكافآت واستقطاعات وسلف — إدارة التعديلات على الراتب',
  },
  {
    id: 'history',
    label: 'السجل والإحصاء',
    icon: <History size={16} />,
    steps: [
      {
        title: 'Dashboard KPIs — ٧ مؤشرات HR',
        body: 'TotalEmployees (حسب الدور)، LifetimePaid (مجموع كل المدفوعات تاريخياً من EmployeeTransactions)، MonthPaid (هذا الشهر)، DueToday (مستحق اليوم بالـ proration لكل موظف active)، PendingBalance (مجموع CarriedOverBalance + CurrentBalance الإيجابي).',
      },
      {
        title: 'DueToday — حساب تراكمي يومي',
        body: 'لكل موظف: DueToday = (أيام من LastPaidDate لليوم ÷ أيام الشهر) × BaseSalary + CarriedOver + Commission المتراكمة + Bonus - Deduction. ComputePayrollNetDueBatchAsync يحسب الجميع دفعةً واحدة في استعلامات SQL — لا loops جانب الـ API.',
      },
      {
        title: 'History Table — سجل بكل حركة',
        body: 'كل Bonus, Deduction, Loan (سلفة), Salary Payment مسجَّلة بـ: التاريخ، الموظف، الدور، النوع، المبلغ، الملاحظات. فلترة بالدور أو الموظف المحدَّد. حد 100 سجل افتراضياً — قابل للتخصيص.',
      },
      {
        title: 'Optimistic Concurrency — آمن للفريق',
        body: 'Employee.Version مربوط بـ xmin في PostgreSQL (System Concurrency Column). أي تحديثين متزامنين على نفس الموظف: الثاني يفشل بـ DbUpdateConcurrencyException — يمنع الكتابة فوق نقل الرصيد. الـ API يُعيد 409 Conflict مع رسالة واضحة.',
      },
    ],
    imgSrc: './assets/stf-5-extras.png',
    imgAlt: 'سجل المعاملات ولوحة HR KPIs',
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
            من تسجيل الموظف إلى{' '}
            <span style={{ color: ACCENT_HEX }}>دفع الراتب بقيد محاسبي</span>
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
                  : 'border-ocean-700 text-ocean-400 hover:border-purple-500/40 hover:text-purple-400'
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
    q: 'هل حساب الراتب على الـ server يمنع التلاعب فعلاً؟',
    a: 'نعم — عند الضغط على "Process Payment": الـ server يستدعي BuildPayrollBreakdownAsync مستقلاً بالـ empId وPeriodTo. إذا كان الـ PayAmount المُرسَل أكبر من NetDue المحسوب server-side بفارق أكثر من ٠.٠١: يُرفَض الطلب بـ InvalidOperationException مع رسالة: "Refresh the payslip and try again". الـ server لا يثق في أي رقم من الـ client.',
  },
  {
    q: 'كيف تمنع السُّلَف المتزامنة خصم نفس المبلغ مرتين؟',
    a: 'قبل أي عملية سُلفة: يُقفَل صف الخزينة (SELECT FROM treasury WHERE CompanyId={0} FOR UPDATE) ثم صف الموظف (SELECT FROM employees WHERE Id={0} FOR UPDATE). هذان القفلان يُسلسِلان الطلبات المتزامنة — لا طلبان قادران على اجتياز هذه النقطة في آنٍ واحد. بعد القفل يُعاد تحميل CurrentBalance بـ Entry.ReloadAsync.',
  },
  {
    q: 'ما الفرق بين CurrentBalance وCarriedOverBalance؟',
    a: 'CurrentBalance: الرصيد السائل للموظف. إن كان سالباً: سلفة غير مُسدَّدة تُخصَم في الدورة القادمة. CarriedOverBalance: فائض من دفعة جزئية (دفعت أقل من NetDue) — يُضاف للـ Gross Earnings في الكشف القادم. كلاهما يُتتَبع منفصلاً ليكون الكشف واضحاً: ما هو محمول وما هو سلفة.',
  },
  {
    q: 'ما الفرق بين موظف HR وحساب النظام؟',
    a: 'الموظف HR مُعرَّف في جدول Employees: اسم، دور وظيفي، طريقة راتب — بدون أي بيانات مصادقة. حساب النظام (AppUser) مُعرَّف منفصلاً في Settings ويحمل: Username، Password، Role، Permissions. الربط بين الاثنين اختياري (AppUser navigation property) — يمكن أن يكون لموظف HR حساب نظام أو لا.',
  },
  {
    q: 'كيف تعمل عمولة المنيجر؟',
    a: 'المنيجر: يجلب GetManagerOrdersForCommissionAsync(empId, startDate, scope, companyId). هذا يجلب ArchivedOrders مقسومة على Moderators المرتبطين بهذا المنيجر (من Employees.ManagerId). يُحسَب الـ commission من مجموع هذه الطلبات حسب SalaryMethod (Per Order / Per Item / Commission%). بعد الدفع يُضبَط IsManagerPaid=1 لهذه الطلبات.',
  },
  {
    q: 'ماذا يحدث إذا حذفت موظفاً برصيد سالب (سلفة غير مُسدَّدة)؟',
    a: 'يُحسَب totalDue = CurrentBalance + CarriedOverBalance + AccruedDue. إذا كان سالباً (الموظف يدين الشركة): يُنشأ Debt من نوع Receivable في وحدة الديون. إذا كان إيجابياً (الشركة تدين للموظف): يُنشأ Debt من نوع Payable. يُضبَط IsActive=0 ويُصفَّر CurrentBalance. إذا فشل إنشاء الدين: يُرفَض الحذف حمايةً للرصيد.',
  },
  {
    q: 'هل يمكن دفع راتب جزئي؟',
    a: 'نعم — PayAmount يمكن أن يكون أي قيمة > 0 وأصغر أو يساوي NetDue. الفرق يُحفَظ في CarriedOverBalance ويُضاف تلقائياً للدورة القادمة. لا يمكن دفع أكثر من NetDue (server يرفض) — لكن يمكن دفع أقل بحرية كاملة.',
  },
  {
    q: 'هل تُحسَب العمولة على المُرتجَع؟',
    a: 'يعتمد على CommissionScope. إذا "Delivered Only": تُجلَب فقط الطلبات ذات الحالة Delivered/Partially Delivered — لا عمولة على المُرتجَع. إذا "All Orders": تُجلَب كل الطلبات بغض النظر. هذا الخيار يُحدَّد لكل موظف منفصلاً عند الإضافة.',
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
            رواتب بدقة محاسبية —{' '}
            <span style={{ color: ACCENT_HEX }}>لا تخمين ولا مفاجآت.</span>
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
    href: '/#/features/expenses',
    icon: <Wallet size={20} />,
    title: 'المصروفات والخزينة',
    body: 'كل دفعة راتب وكل سُلفة تُنشئ تلقائياً مصروفاً (Salaries / Staff Loans) في المصروفات. تؤثر فوراً على رصيد الخزينة وBurn Rate في التقارير المالية.',
  },
  {
    href: '/#/features/debts',
    icon: <ArrowRightLeft size={20} />,
    title: 'الديون والمستحقات',
    body: 'عند حذف موظف برصيد: يُنشأ دين تلقائياً في وحدة الديون. الموظف المدين للشركة → Receivable. الشركة المدينة للموظف → Payable. لا رصيد يختفي بلا سجل.',
  },
  {
    href: '/#/features/reports',
    icon: <FileText size={20} />,
    title: 'التقارير المالية',
    body: 'مصروفات الرواتب والسلف تظهر في تقارير الـ Expense Breakdown. LifetimePaid وMonthPaid يُغذِّيان مؤشرات الكشف المالي الشهري للمقارنة بالإيرادات.',
  },
  {
    href: '/#/features/dashboard',
    icon: <LayoutDashboard size={20} />,
    title: 'لوحة القيادة',
    body: 'DueToday (مستحق الرواتب اليوم) يظهر في لوحة القيادة كمؤشر مالي فوري. أي ارتفاع مفاجئ في الرواتب المستحقة يُعلَم مباشرةً في الـ Dashboard.',
  },
  {
    href: '/#/features/ads',
    icon: <Megaphone size={20} />,
    title: 'الإعلانات',
    body: 'الماركيتر المدفوع بـ Percentage: راتبه = AdSpend × CommissionValue%. تحديث AdSpendInput في HR + تجديد حساب الراتب يعطي تكلفة التسويق الحقيقية شاملةً الموظفين.',
  },
  {
    href: '/#/features/settings',
    icon: <Settings size={20} />,
    title: 'الإعدادات والصلاحيات',
    body: 'موظف HR ≠ مستخدم النظام. صلاحيات الوصول للوحدات والـ RBAC تُدار حصراً من وحدة الإعدادات على AppUser — بدون تداخل مع بيانات الرواتب.',
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
            الرواتب لا تعيش بمعزل —{' '}
            <span style={{ color: ACCENT_HEX }}>تتكامل مع كل المنظومة المالية</span>
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
                className="group relative flex flex-col gap-3 rounded-2xl border border-ocean-700/50 bg-ocean-900/60 p-6 overflow-hidden transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-lg block"
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
                    <ChevronRight size={14} className="text-ocean-500 group-hover:text-purple-400 transition-colors" />
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
            className="pointer-events-none absolute w-[500px] h-[250px] rounded-full blur-3xl opacity-[0.13] -z-10"
            style={{ background: `radial-gradient(ellipse, ${ACCENT_HEX} 0%, transparent 70%)` }}
          />

          <motion.div variants={fadeUp()}>
            <SectionLabel>ابدأ الآن</SectionLabel>
          </motion.div>

          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white leading-tight">
            هل تعرف كم يستحق{' '}
            <span style={{ color: ACCENT_HEX }}>كل موظف لديك اليوم بالضبط؟</span>
          </motion.h2>

          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 text-base max-w-xl leading-relaxed">
            لا إكسيل، لا حسابات يدوية، لا جدالات في نهاية الشهر. عمولات من الطلبات الفعلية،
            سلف مؤمَّنة بـ DB Locks، رواتب مُعاد حسابها server-side، وقيد محاسبي تلقائي
            مع كل دفعة. هذا هو مستوى HR الذي يستحقه عملك.
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
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-purple-500/40 hover:text-purple-400 transition-all duration-200"
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

export default function StaffPage() {
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
