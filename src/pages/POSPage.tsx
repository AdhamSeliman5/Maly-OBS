/**
 * POSPage.tsx — Dedicated marketing page for the POS (نقطة البيع) module.
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
 * Accent: cyan — rgba(6,182,212,) / #06b6d4
 */

import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { WHATSAPP_CTA_URL } from '../constants'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger } from '../utils/animations'
import SectionLabel from '../components/SectionLabel'
import {
  Store,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Zap,
  ScanLine,
  WifiOff,
  Clock,
  Receipt,
  RefreshCcw,
  Shield,
  User,
  Printer,
  ShoppingCart,
  Boxes,
  BarChart3,
  Users,
  Wallet,
  Phone,
  AlertTriangle,
} from 'lucide-react'

const ACCENT      = 'rgba(6,182,212,'
const ACCENT_HEX  = '#06b6d4'
const ACCENT_DIM  = 'rgba(6,182,212,0.12)'
const ACCENT_DARK = '#0891b2'
const ACCENT_GLOW = '0 0 28px rgba(6,182,212,0.42)'

function BackStrip() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 pb-2 pt-4">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-ocean-400 hover:text-cyan-400 transition-colors"
      >
        <ArrowLeft size={15} />
        العودة إلى جميع الوحدات
      </Link>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div
        className="pointer-events-none absolute -top-20 right-1/3 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.14]"
        style={{ background: `radial-gradient(circle, ${ACCENT_HEX} 0%, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute top-40 left-0 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,1) 0%, transparent 70%)' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-6">
            <motion.div variants={fadeUp(0)} className="flex">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold border"
                style={{ background: ACCENT_DIM, borderColor: ACCENT + '0.35)', color: ACCENT + '1)' }}
              >
                <Store size={15} />
                نقطة البيع (POS)
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp(0.05)}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-white"
              style={{ lineHeight: '1.22' }}
            >
              بيع في المحل
              {' '}
              <span style={{ color: ACCENT_HEX }}>بسرعة الكاشير</span>
              <br />
              ودقة
              {' '}
              <span className="text-ocean-400">نظام ERP كامل.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.1)}
              className="text-base sm:text-lg text-ocean-300 leading-relaxed max-w-xl"
            >
              من اختيار المنتج إلى الإيصال الحراري — نقطة البيع في مالي-OBS مصممة
              لمبيعات Walk-in السريعة: بحث فوري، سلة ذكية، ربط مباشر بالمخزون والخزنة،
              وإدارة مرتجعات وتبديلات من نفس الشاشة.
            </motion.p>

            <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-3">
              {[
                { label: 'Checkout في ثوانٍ', icon: <Zap size={14} /> },
                { label: 'جلسة كاشير مستمرة', icon: <WifiOff size={14} /> },
                { label: 'إيصال حراري + باركود', icon: <ScanLine size={14} /> },
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

            <motion.div variants={fadeUp(0.2)} className="flex flex-wrap gap-3 pt-2">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg, ${ACCENT_HEX}, ${ACCENT_DARK})`, boxShadow: ACCENT_GLOW }}
              >
                ابدأ الآن
                <ChevronRight size={18} />
              </a>
              <Link
                to="/#features"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-ocean-300 border border-ocean-700 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200"
              >
                اكتشف كل الوحدات
              </Link>
            </motion.div>
          </motion.div>

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
                src="/assets/pos-hero.png"
                alt="واجهة نقطة البيع في مالي-OBS"
                width={780}
                height={480}
                loading="eager"
                className="block w-full h-auto object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="absolute -bottom-5 -left-6 rounded-xl border border-ocean-700 bg-ocean-900/90 px-4 py-3 shadow-xl backdrop-blur-md flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: ACCENT_DIM }}>
                <Receipt size={16} style={{ color: ACCENT_HEX }} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-ocean-400">آخر عملية بيع</span>
                <span className="text-sm font-bold text-white">٤٨٠ ج.م — إيصال جاهز</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="absolute -top-5 -right-5 rounded-xl border border-ocean-700 bg-ocean-900/90 px-4 py-3 shadow-xl backdrop-blur-md flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: 'rgba(74,222,128,0.12)' }}>
                <Boxes size={16} style={{ color: '#4ade80' }} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-ocean-400">Stock Sync</span>
                <span className="text-sm font-bold" style={{ color: '#4ade80' }}>خصم مخزون فوري</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const PAINS = [
  {
    stat: '٤٥ ثانية',
    text: 'متوسط وقت انتظار العميل في المحل عند استخدام Excel أو فاتورة يدوية — كل ثانية تكلفك مبيعات إضافية في ساعات الذروة.',
    icon: <Clock size={22} />,
  },
  {
    stat: '١ من ٣',
    text: 'متاجر تبيع منتجاً محجوزاً لطلب أونلاين لأن نقطة البيع غير مربوطة بالمخزون الحقيقي — النتيجة: overselling وغضب عملاء.',
    icon: <AlertTriangle size={22} />,
  },
  {
    stat: 'بدون تتبع',
    text: 'مبيعات المحل تُسجَّل خارج النظام فلا تظهر في التقارير أو الخزنة — المحاسب يلاحق أرقاماً متضاربة نهاية كل يوم.',
    icon: <Wallet size={22} />,
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

const VALUE_CARDS = [
  {
    icon: <Zap size={20} />,
    title: 'Checkout سريع بأقل نقرات',
    body: 'واجهة كاشير مركّزة: اختر الكاشير، ابحث عن المنتج، أضف للسلة، وأكّد البيع. السعر والإجمالي يتحدثان لحظياً — بدون شاشات فرعية أو إعادة تحميل.',
  },
  {
    icon: <ScanLine size={20} />,
    title: 'بحث منتجات فوري + باركود على الإيصال',
    body: 'ابحث بالاسم أو الكود واختر المتغير (Variant) مباشرة. بعد البيع يُطبع إيصال حراري يحمل باركود الطلب لتتبع سريع عند المرتجعات.',
  },
  {
    icon: <WifiOff size={20} />,
    title: 'جلسة كاشير مستمرة (Walk-in Mode)',
    body: 'السلة وبيانات العميل والكاشير تُحفظ تلقائياً في الجلسة — لو انقطع الاتصال لحظياً أو انتقل الكاشير بين العملاء، لا تضيع البيانات غير المؤكدة.',
  },
  {
    icon: <Clock size={20} />,
    title: 'إدارة ورديات الكاشير',
    body: 'كل عملية بيع مربوطة بموظف محدد. تتبع أداء كل كاشير، راقب حركة الخزنة، وأغلق اليوم بأرقام واضحة متوافقة مع تقارير المبيعات.',
  },
  {
    icon: <Phone size={20} />,
    title: 'تعرف تلقائي على العميل بالهاتف',
    body: 'أدخل رقم الهاتف المصري — النظام يبحث في قاعدة العملاء ويملأ الاسم تلقائياً. عميل جديد؟ يُنشأ سجلّه أثناء البيع دون خطوات إضافية.',
  },
  {
    icon: <Boxes size={20} />,
    title: 'خصم مخزون لحظي وآمن',
    body: 'كل بيع يخصم من الرصيد الفيزيائي فوراً. إذا كان المنتج محجوزاً لطلب أونلاين، يظهر تحذير واضح قبل البيع — مع خيار تأكيد مدروس.',
  },
  {
    icon: <RefreshCcw size={20} />,
    title: 'مرتجعات وتبديلات من نفس الشاشة',
    body: 'ابحث عن الطلب برقم الأوردر أو هاتف العميل، حدد الكميات المرتجعة، ونفّذ Exchange أو Return — المخزون والخزنة يتصححان تلقائياً.',
  },
  {
    icon: <Printer size={20} />,
    title: 'إيصال حراري بعلامتك التجارية',
    body: 'طباعة فورية بعد كل بيع: شعار المتجر، بيانات الكاشير، تفاصيل الأصناف، الإجمالي، وباركود الطلب — جاهز للطابعة الحرارية.',
  },
  {
    icon: <Wallet size={20} />,
    title: 'ربط مباشر بالخزنة',
    body: 'صافي كل عملية بيع يُسجَّل في دفتر الخزنة تلقائياً — لا حاجة لإدخال يدوي. المحاسبة ترى نفس الأرقام التي يراها الكاشير.',
  },
  {
    icon: <User size={20} />,
    title: 'تعيين كاشير ذكي',
    body: 'اختر الكاشير من قائمة الموظفين. إذا كان المستخدم الحالي موظفاً مسجلاً، يُختار تلقائياً — يقلل الأخطاء ويسرّع بداية كل وردية.',
  },
  {
    icon: <Shield size={20} />,
    title: 'صلاحيات POS منفصلة',
    body: 'Role + Module + Action: تحكم دقيق في من يرى نقطة البيع، من ينفّذ البيع، ومن يراجع المرتجعات — منفصل تماماً عن صلاحيات إدخال الطلبات.',
  },
  {
    icon: <ShoppingCart size={20} />,
    title: 'منفصل عن طلبات الأونلاين',
    body: 'مبيعات المحل تمر عبر مسار POS مستقل — ledger منفصل، حالات واضحة، بدون تداخل مع تدفق Order Entry أو الشحن.',
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
            <SectionLabel color="#2dd4bf">قيمة الوحدة</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white mb-4">
            من سلة المشتريات إلى الإيصال —
            {' '}
            <span style={{ color: ACCENT_HEX }}>كل خطوة متصلة بالنظام.</span>
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 max-w-2xl mx-auto text-base leading-relaxed">
            نقطة البيع ليست برنامج فواتير منفصل. هي جزء من ERP متكامل: مخزون،
            عملاء، خزنة، وتقارير — كلها تتحدث من لحظة تأكيد البيع.
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

interface WalkthroughTab {
  id: string
  label: string
  icon: ReactNode
  steps: { title: string; body: string }[]
  imgSrc: string
  imgAlt: string
}

const TABS: WalkthroughTab[] = [
  {
    id: 'checkout',
    label: 'البيع السريع',
    icon: <Zap size={16} />,
    steps: [
      {
        title: 'اختر الكاشير وابدأ البيع',
        body: 'من القائمة المنسدلة حدّد موظف الكاشير — يُحفظ اختيارك للجلسة. وضع "بيع جديد" جاهز فوراً بدون إعدادات معقدة.',
      },
      {
        title: 'ابحث وأضف المنتجات للسلة',
        body: 'اكتب اسم المنتج أو امسح/أدخل الكود — اختر Variant، عدّل الكمية والسعر إن لزم، والإجمالي يتحدث فوراً في أسفل الشاشة.',
      },
      {
        title: 'بيانات العميل بضغطة',
        body: 'أدخل رقم الهاتف — النظام يتعرف على العميل ويملأ اسمه. للعملاء الجدد: الاسم يُسجَّل مع أول عملية بيع.',
      },
      {
        title: 'أكّد البيع واطبع الإيصال',
        body: 'اضغط "تأكيد البيع" — يُخصم المخزون، تُحدَّث الخزنة، ويُفتح الإيصال الحراري للطباعة مع باركود الطلب.',
      },
    ],
    imgSrc: '/assets/pos-fast-checkout.png',
    imgAlt: 'شاشة البيع السريع في نقطة البيع',
  },
  {
    id: 'session',
    label: 'جلسة الكاشير',
    icon: <WifiOff size={16} />,
    steps: [
      {
        title: 'سلة محفوظة تلقائياً',
        body: 'محتويات السلة تبقى محفوظة أثناء الجلسة — لو انقطع الاتصال لحظياً أو أُغلقت النافذة بالخطأ، تعود البيانات عند العودة.',
      },
      {
        title: 'بيانات عميل مستمرة',
        body: 'رقم الهاتف واسم العميل يُحفظان في الجلسة — مفيد عند معاملات متعددة لنفس الزبون دون إعادة إدخال.',
      },
      {
        title: 'كاشير مثبّت للوردية',
        body: 'اختيار الكاشير يُذكر تلقائياً — كل عملية بيع في الوردية مربوطة بنفس الموظف لسهولة المراجعة والمحاسبة.',
      },
      {
        title: 'تحديث مخزون عند العودة',
        body: 'عند إعادة الاتصال، قائمة المنتجات تُحدَّث من السيرفر — تضمن أن الأسعار والأرصدة المعروضة هي الأحدث.',
      },
    ],
    imgSrc: '/assets/pos-offline-mode.png',
    imgAlt: 'جلسة كاشير مستمرة في نقطة البيع',
  },
  {
    id: 'barcode',
    label: 'البحث والباركود',
    icon: <ScanLine size={16} />,
    steps: [
      {
        title: 'بحث منتجات بالاسم أو الكود',
        body: 'حقل بحث ذكي يعرض المنتجات المتاحة مع Variants والأسعار — اختر بنقرة واحدة وأضف للسلة.',
      },
      {
        title: 'دعم قارئ الباركود',
        body: 'وصل قارئ باركود USB — امسح الكود فيحلّ محل الإدخال اليدوي. مثالي للمحلات ذات قائمة منتجات كبيرة.',
      },
      {
        title: 'تسعير مرن لكل سطر',
        body: 'السعر الافتراضي يأتي من الكتالوج مع إمكانية تعديل Unit Price لكل سطر — للخصومات أو العروض اللحظية.',
      },
      {
        title: 'باركود على الإيصال',
        body: 'بعد البيع يُطبع باركود الطلب على الإيصال الحراري — امسحه لاحقاً عند المرتجعات أو التبديلات.',
      },
    ],
    imgSrc: '/assets/pos-barcode-feature.png',
    imgAlt: 'البحث بالباركود وإضافة المنتجات',
  },
  {
    id: 'shifts',
    label: 'الورديات والمرتجعات',
    icon: <Clock size={16} />,
    steps: [
      {
        title: 'تتبع مبيعات كل كاشير',
        body: 'كل عملية بيع مربوطة بـ staffId — راجع أداء الكاشيرات في نهاية الوردية أو اليوم من التقارير.',
      },
      {
        title: 'حركة خزنة شفافة',
        body: 'treasuryNetAmount يُسجَّل مع كل بيع — المحاسب يرى صافي التدفق النقدي دون إدخال يدوي.',
      },
      {
        title: 'مرتجع أو تبديل بسهولة',
        body: 'انتقل لوضع "مرتجع / تبديل"، ابحث برقم الطلب أو الهاتف، حدد الكميات، وأكّد — المخزون يتصحح تلقائياً.',
      },
      {
        title: 'تحذير المخزون المحجوز',
        body: 'إذا حاولت بيع منتج محجوز لطلب أونلاين، يظهر modal تحذيري — قرار واعٍ قبل خصم stock محجوز.',
      },
    ],
    imgSrc: '/assets/pos-daily-shifts.png',
    imgAlt: 'إدارة ورديات الكاشير والمرتجعات',
  },
]

function WalkthroughSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 border-t border-ocean-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp()} className="flex justify-center mb-3">
            <SectionLabel color="#2dd4bf">خط سير العمل</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white">
            من أول منتج في السلة إلى
            {' '}
            <span style={{ color: ACCENT_HEX }}>إيصال مطبوع ومخزون محدّث</span>
          </motion.h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border transition-all duration-200 ${
                active === i
                  ? 'text-white border-transparent shadow-md'
                  : 'border-ocean-700 text-ocean-400 hover:border-cyan-500/40 hover:text-cyan-400'
              }`}
              style={active === i ? { background: `linear-gradient(135deg, ${ACCENT_HEX}, ${ACCENT_DARK})`, boxShadow: ACCENT_GLOW } : {}}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.38 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
          >
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

const FAQS = [
  {
    q: 'هل نقطة البيع منفصلة عن إدخال الطلبات الأونلاين؟',
    a: 'نعم. POS مخصص لمبيعات Walk-in في المحل عبر مسار API مستقل (POST /orders/offline). الطلبات الأونلاين تمر عبر Order Entry — كل قناة لها تدفقها لكنهما يشاركان نفس المخزون والعملاء والخزنة.',
  },
  {
    q: 'ماذا يحدث إذا بعت منتجاً محجوزاً لطلب أونلاين؟',
    a: 'النظام يكتشف أن الرصيد المتاح أقل من المطلوب ويعرض modal "Stock Reserved for Online Orders". يمكنك الإلغاء أو التأكيد — عند التأكيد يُرسل forceStealReservedStock=true ويُخصم المخزون مع تحذير واضح.',
  },
  {
    q: 'هل يمكن تنفيذ مرتجعات وتبديلات من POS؟',
    a: 'نعم. وضع "Return / Exchange" يتيح البحث برقم الطلب أو هاتف العميل، تحديد الكميات المرتجعة أو البديلة، وتنفيذ العملية — المخزون والخزنة يتصححان تلقائياً.',
  },
  {
    q: 'هل الإيصال الحراري قابل للتخصيص؟',
    a: 'نعم. يُجلب branding الإيصال من إعدادات المتجر (الشعار، الاسم، العنوان) — يظهر على الإيصال المطبوع مع تفاصيل البيع وباركود الطلب.',
  },
  {
    q: 'كيف تُدار صلاحيات نقطة البيع؟',
    a: 'POS وحدة مستقلة في مصفوفة الصلاحيات: view للعرض، create لتنفيذ البيع. يمكن منح Moderator صلاحية create بينما Marketer يحصل على view فقط — Role + Module + Action.',
  },
  {
    q: 'هل بيانات السلة تضيع عند إغلاق المتصفح؟',
    a: 'السلة وبيانات العميل والكاشير تُحفظ في localStorage للجلسة — تعود عند إعادة فتح الصفحة. عمليات البيع المؤكدة فقط هي التي تُسجَّل في قاعدة البيانات.',
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
            بيع أسرع.
            {' '}
            <span style={{ color: ACCENT_HEX }}>محاسبة أدق.</span>
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

const RELATED = [
  {
    to: '/features/order-entry',
    icon: <ShoppingCart size={20} />,
    title: 'إدخال الطلبات',
    body: 'طلبات الأونلاين وطلبات المحل يشاركان نفس المخزون — POS يكمّل Order Entry ولا يستبدله.',
  },
  {
    to: '/features/inventory',
    icon: <Boxes size={20} />,
    title: 'المخزون',
    body: 'كل بيع POS يخصم الرصيد الفيزيائي فوراً — رؤية دقيقة للمتاح vs المحجوز.',
  },
  {
    to: '/features/reports',
    icon: <BarChart3 size={20} />,
    title: 'التقارير',
    body: 'مبيعات المحل تظهر في التقارير المالية جنباً إلى جنب مع مبيعات الأونلاين.',
  },
  {
    to: '/features/staff',
    icon: <Users size={20} />,
    title: 'فريق العمل',
    body: 'الكاشيرات من قائمة الموظفين — ربط مباشر بين أداء البيع والرواتب والعمولات.',
  },
  {
    to: '/features/expenses',
    icon: <Receipt size={20} />,
    title: 'المصروفات',
    body: 'إغلاق اليوم في POS يتوافق مع حركة الخزنة — المصروفات تكمل الصورة المالية.',
  },
  {
    to: '/features/dashboard',
    icon: <Store size={20} />,
    title: 'لوحة القيادة',
    body: 'KPIs لحظية تجمع مبيعات المحل والأونلاين في نظرة واحدة.',
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
            نقطة البيع هي
            {' '}
            <span style={{ color: ACCENT_HEX }}>وجه متجرك أمام العميل</span>
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
            <motion.div key={r.to} variants={fadeUp()}>
              <Link
                to={r.to}
                className="group relative flex flex-col gap-3 rounded-2xl border border-ocean-700/50 bg-ocean-900/60 p-6 overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-lg block"
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
                    <ChevronRight size={14} className="text-ocean-500 group-hover:text-cyan-400 transition-colors" />
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
            className="pointer-events-none absolute w-[520px] h-[260px] rounded-full blur-3xl opacity-[0.13] -z-10"
            style={{ background: `radial-gradient(ellipse, ${ACCENT_HEX} 0%, transparent 70%)` }}
          />

          <motion.div variants={fadeUp()}>
            <SectionLabel color="#2dd4bf">ابدأ الآن</SectionLabel>
          </motion.div>

          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white leading-tight">
            جاهز تحوّل كاشير المحل إلى
            {' '}
            <span style={{ color: ACCENT_HEX }}>محرك مبيعات ذكي؟</span>
          </motion.h2>

          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 text-base max-w-xl leading-relaxed">
            بيع سريع، مخزون دقيق، إيصالات احترافية، ومحاسبة متصلة —
            كل ذلك في شاشة واحدة مصممة لواقع المحل اليومي.
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
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200"
            >
              استعرض الوحدات
            </Link>
          </motion.div>

          <motion.div variants={fadeUp(0.2)} className="flex flex-wrap justify-center gap-6 pt-4">
            {[
              { icon: <CheckCircle2 size={15} />, text: 'Checkout في ثوانٍ' },
              { icon: <CheckCircle2 size={15} />, text: 'مخزون وخزنة متصلة' },
              { icon: <CheckCircle2 size={15} />, text: 'مرتجعات من نفس الشاشة' },
            ].map((t) => (
              <span key={t.text} className="flex items-center gap-2 text-sm" style={{ color: ACCENT + '0.82)' }}>
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

export default function POSPage() {
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
