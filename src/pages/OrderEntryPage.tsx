import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Zap,
  Shield,
  ShieldCheck,
  UserPlus,
  Phone,
  AlertTriangle,
  Ban,
  Calculator,
  PackagePlus,
  ClipboardList,
  FileSpreadsheet,
  Boxes,
  Truck,
  Layers,
  BarChart3,
  Users,
  Megaphone,
  History,
  Lock,
  RefreshCcw,
} from 'lucide-react'

const ACCENT = 'rgba(132,204,22,'
const ACCENT_HEX = '#84cc16'
const ACCENT_DIM = 'rgba(132,204,22,0.12)'
const ACCENT_DARK = '#65a30d'
const ACCENT_GLOW = '0 0 28px rgba(132,204,22,0.42)'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
})

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

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

function BackStrip() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 pb-2 pt-4">
      <Link
        to="/#features"
        className="inline-flex items-center gap-2 text-sm text-ocean-400 hover:text-lime-400 transition-colors"
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
        className="pointer-events-none absolute -top-24 right-1/4 w-[700px] h-[700px] rounded-full blur-3xl opacity-[0.10]"
        style={{ background: `radial-gradient(circle, ${ACCENT_HEX} 0%, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute top-56 left-0 w-80 h-80 rounded-full blur-3xl opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #a3e635 0%, transparent 70%)' }}
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
                <Zap size={15} />
                إدخال الطلبات
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp(0.05)}
              className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-white"
              style={{ lineHeight: '1.22' }}
            >
              خلّص الأوردر
              {' '}
              <span style={{ color: ACCENT_HEX }}>وانت لسه على الشات.</span>
              <br />
              أسرع إدخال.
              {' '}
              <span className="text-ocean-400">أقل أخطاء. تسليم أدق.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.1)}
              className="text-base sm:text-lg text-ocean-300 leading-relaxed max-w-xl"
            >
              من رقم العميل إلى حفظ الأوردر في شاشة واحدة: اقتراح تلقائي لبيانات العميل من الهاتف،
              كشف تكرار خلال 24 ساعة، تحذير بلاك ليست، اختيار منتجات بالمتغيرات، وحساب إجمالي فوري
              (سعر الطلب + الشحن - العربون). نظام معمول للسرعة تحت ضغط الواتساب.
            </motion.p>

            <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-3">
              {[
                { label: '3 كروت إدخال مركزة', icon: <ClipboardList size={14} /> },
                { label: 'تحذير رقم مكرر 24 ساعة', icon: <Phone size={14} /> },
                { label: 'حالة مبدئية ذكية من المخزون', icon: <ShieldCheck size={14} /> },
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
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-lime-500/40 hover:text-lime-400 transition-all duration-200"
              >
                اكتشف كل الوحدات
              </Link>
            </motion.div>
          </motion.div>

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
                src="./assets/ord-1-hero.png"
                alt="شاشة إدخال الطلبات السريعة"
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
                <Phone size={16} style={{ color: ACCENT_HEX }} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-ocean-400">Phone Smart Check</span>
                <span className="text-sm font-bold text-white">تنبيه رقم مكرر + تحذير صيغة</span>
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
                <span className="text-xs text-ocean-400">Stock-Aware Status</span>
                <span className="text-sm font-bold" style={{ color: '#4ade80' }}>To prepare / Shortage تلقائياً</span>
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
    stat: 'الدقيقة = بيع',
    text: 'العميل على واتساب لا ينتظر واجهة بطيئة. كل تأخير يعني احتمال فقد أوردر. هنا الإدخال مصمم لتقليل عدد النقرات لأقصى حد مع اقتراحات تلقائية من بيانات سابقة.',
    icon: <Zap size={22} />,
  },
  {
    stat: 'غلطة رقم = شحنة غلط',
    text: 'رقم هاتف خطأ أو رقم متكرر في نفس اليوم ممكن يعمل شحنة مكررة أو متابعة غلط. النظام ينبهك عند تكرار الرقم خلال آخر 24 ساعة ويعرض OrderCode المرتبط فوراً.',
    icon: <AlertTriangle size={22} />,
  },
  {
    stat: 'تعقيد = أخطاء',
    text: 'الموديريتور يحتاج تدفق واضح: عميل، تفاصيل، فلوس. أي تشتيت يزود أخطاء. لذلك الصفحة مقسمة 3 كروت منطقية مع تحقق فوري على الحقول المهمة قبل الحفظ.',
    icon: <Layers size={22} />,
  },
]

function PainStrip() {
  return (
    <section className="py-14 border-y border-ocean-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAINS.map((p) => (
            <motion.div key={p.stat} variants={fadeUp()} className="relative rounded-2xl border border-ocean-700/50 bg-ocean-900/60 p-6 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${ACCENT + '0.6)'}, transparent)` }} />
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: ACCENT_DIM, color: ACCENT_HEX }}>
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
    icon: <RefreshCcw size={20} />,
    title: 'Order ID تلقائي سريع وذكي',
    body: 'GetNextOrderId لا يعمل loop على كل الأوردرات. الخدمة تحسب أكبر رقم مباشرة في SQL من orders + archived_orders مع REGEXP_REPLACE، ثم +1. أسرع مع أحجام بيانات كبيرة.',
  },
  {
    icon: <UserPlus size={20} />,
    title: 'إنشاء/تحديث عميل تلقائي من الهاتف',
    body: 'أول ما تدخل Phone1، النظام يبحث في العملاء ويملأ الاسم والمحافظة والعنوان عند وجود تطابق. عند الحفظ، EnsureCustomerExists يعمل upsert آمن ويحدث بيانات العميل تلقائياً.',
  },
  {
    icon: <Phone size={20} />,
    title: 'تنبيه رقم مكرر خلال آخر 24 ساعة',
    body: 'Endpoint مخصص check-recent-phone يفحص CreatedAtUtc خلال آخر 24 ساعة ويعرض OrderCode الحديث. النتيجة: تقليل أخطاء التكرار أثناء زحمة الشات.',
  },
  {
    icon: <Ban size={20} />,
    title: 'تحذير عميل بلاك ليست واضح',
    body: 'بحث العميل يرجّع IsBlacklisted وBlacklistReason. الواجهة تعرض تحذيراً أحمر قوي مع السبب والتنبيه التشغيلي، حتى لا يتم تمرير أوردر عالي المخاطرة بدون وعي.',
  },
  {
    icon: <PackagePlus size={20} />,
    title: 'اختيار منتجات بالمتغيرات + تسعير مرن',
    body: 'كل سطر منتج يختار Variant، ويجلب سعره الافتراضي من الكتالوج، مع إمكانية تعديل Unit Price يدوياً لكل سطر. إضافة/حذف سطور فوري بدون إعادة تحميل.',
  },
  {
    icon: <Calculator size={20} />,
    title: 'حساب مالي مباشر مع زر مزامنة',
    body: 'إجمالي الطلب = OrderPrice + Shipping - Deposit. يوجد زر يحول OrderPrice تلقائياً إلى مجموع السطور (lines subtotal) مع خيار Manual Override عند الحاجة.',
  },
  {
    icon: <Users size={20} />,
    title: 'تعيين موديريتور تلقائي ذكي',
    body: 'النظام يجلب الموديريتورز من Staff أولاً، ولو فاضي يرجع لـ Users. يختار اسم المستخدم الحالي تلقائياً لو مطابق، أو يختار الوحيد المتاح. يقلل خطوات ما قبل الحفظ.',
  },
  {
    icon: <Megaphone size={20} />,
    title: 'ربط اختياري بالحملات الإعلانية',
    body: 'يمكن إسناد CampaignId أثناء الإدخال من الحملات النشطة فقط. هذا يربط المبيعات مباشرة بمصدر الإعلان، ويخدم ROAS/CPA/Delivery analytics لاحقاً بدون عمل إضافي.',
  },
  {
    icon: <Shield size={20} />,
    title: 'حالة مبدئية من المخزون الحقيقي',
    body: 'قبل الحفظ، CreateOrder يقفل صفوف variants المطلوبة بـ FOR UPDATE ثم يفحص CurrentStock. لو في نقص: status = Shortage. لو كافي: To prepare. هذا يمنع race condition في الطلبات المتزامنة.',
  },
  {
    icon: <Lock size={20} />,
    title: 'تقييد تعديل الموديريتور حسب الحالة',
    body: 'الموديريتور يقدر يعدل فقط حالات New / To prepare / Shortage / Deferred. أي حالة شحن/نهائية تظهر كنموذج read-only مع banner واضح، وتُرفض backend كذلك إذا كانت Locked.',
  },
  {
    icon: <History size={20} />,
    title: 'Audit كامل لكل تعديل',
    body: 'كل عمليات bulk والتحديثات تضيف AuditLog بتفاصيل من/إلى. يوجد modal لعرض Order Audit (Admin only) + mini audit في الفورم (created/last modified by). تدقيق جاهز وقت النزاع.',
  },
  {
    icon: <FileSpreadsheet size={20} />,
    title: 'استيراد إكسيل احترافي على 3 مراحل',
    body: 'Preview validation بدون حفظ، Confirm للحفظ، وImport-bulk chunked للأحجام الكبيرة. يدعم 18 عموداً، قوالب جاهزة، تحويل محافظ عربي/إنجليزي، وحماية updateExisting على حالات محظورة للشحن/النهائي.',
  },
]

function ValueProposition() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <motion.div variants={fadeUp()} className="flex justify-center mb-3">
            <SectionLabel>قيمة الوحدة</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white mb-4">
            سرعة فريق المبيعات +
            {' '}
            <span style={{ color: ACCENT_HEX }}>دقة عمليات الشحن</span>
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 max-w-2xl mx-auto text-base leading-relaxed">
            Order Entry هنا ليس فورم تقليدي. هو تدفق تشغيلي كامل: إدخال سريع، تحقق ذكي،
            حماية من التكرار، وربط مباشر بالمخزون والحملات والسجل التدقيقي.
          </motion.p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUE_CARDS.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp()}
              whileHover={{ y: -5, boxShadow: ACCENT_GLOW }}
              className="relative rounded-2xl border border-ocean-700/50 bg-ocean-900/70 p-6 overflow-hidden transition-shadow duration-300"
            >
              <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${ACCENT + '0.55)'}, transparent)` }} />
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: ACCENT_DIM, color: ACCENT_HEX }}>
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

type WalkthroughTab = {
  id: string
  label: string
  icon: ReactNode
  steps: { title: string; body: string }[]
  imgSrc: string
  imgAlt: string
}

const TABS: WalkthroughTab[] = [
  {
    id: 'create',
    label: 'إنشاء الأوردر السريع',
    icon: <Zap size={16} />,
    steps: [
      {
        title: 'ابدأ من Phone1 — النظام يكمل الباقي',
        body: 'اكتب رقم العميل، والواجهة تبحث تلقائياً في العملاء. لو العميل موجود: يملأ الاسم/المحافظة/العنوان. لو صيغة الرقم مش مصرية صحيحة يظهر warning. لو رقم مكرر خلال 24 ساعة يظهر تنبيه مع OrderCode.',
      },
      {
        title: 'اختار الموديريتور تلقائياً',
        body: 'اللستة تُجلب من Staff (Moderator active) ولو غير متاحة تستخدم Users. إذا اسمك موجود يختارك تلقائياً. هذا يخلي الفورم جاهز أسرع للفريق.',
      },
      {
        title: 'أضف المنتجات كسطور Variant',
        body: 'كل سطر = Variant + Qty + UnitPrice. السعر الافتراضي يأتي من الكتالوج مع إمكانية تعديل يدوي. يوجد add/remove rows بدون أي lag.',
      },
      {
        title: 'احسب الإجمالي واحفظ',
        body: 'OrderPrice + Shipping - Deposit = Total. زر الحاسبة يرجع OrderPrice لمجموع السطور. عند الحفظ: النظام ينشئ/يحدث العميل تلقائياً ويربط الأوردر بالحملة لو اخترتها.',
      },
    ],
    imgSrc: './assets/ord-2-list.png',
    imgAlt: 'فورم إدخال الطلبات السريع'
  },
  {
    id: 'safety',
    label: 'الدقة ومنع الأخطاء',
    icon: <Shield size={16} />,
    steps: [
      {
        title: 'Validation قبل أي Save',
        body: 'الحقول الأساسية إلزامية: Phone1, CustomerName, Governorate, Address, OrderId, OrderDate, Moderator. لازم سطر منتج واحد على الأقل مع qty > 0 وسعر صحيح.',
      },
      {
        title: 'Stock-aware initial status',
        body: 'الخدمة تقفل صفوف variants المطلوبة بـ FOR UPDATE ثم تقارن الكميات بالمخزون. لو في shortage في أي سطر: الأوردر يبدأ Shortage، غير ذلك يبدأ To prepare.',
      },
      {
        title: 'تحديث آمن للحالات المقفولة',
        body: 'الأوردرات التي شُحنت أو أُغلقت (Shipped/Delivered/Returned/Cancelled...) تعتبر locked للتعديل من order entry. هذا يوقف أي تعديل متأخر يسبب تضارب مع الشحن أو الحسابات.',
      },
      {
        title: 'Duplicate-safe customer upsert',
        body: 'لو طلبان متزامنان حاولوا إنشاء نفس الهاتف، unique key يلتقط السباق والخدمة تعيد جلب العميل الفائز بدلاً من الفشل. النتيجة: بدون duplication في customer master.',
      },
    ],
    imgSrc: './assets/ord-3-action.png',
    imgAlt: 'التحقق الذكي ومنع الأخطاء'
  },
  {
    id: 'ops',
    label: 'إدارة القائمة والعمليات',
    icon: <ClipboardList size={16} />,
    steps: [
      {
        title: 'بحث قوي + فلترة + ترتيب Server-side',
        body: 'بحث بالـ order code/العميل/الهاتف مع فلتر status/date range/page/sort. backend يطبق whitelist للترتيب ويعمل pagination. الأداء ثابت حتى مع حجم بيانات كبير.',
      },
      {
        title: 'عمليات bulk بتقرير نجاح/فشل واضح',
        body: 'تغيير حالة، إسناد شركة شحن، حذف، إلغاء، إسناد حملة على دفعة أوامر. كل عملية ترجع successCount/failedCount/errors وتظهر للمستخدم ملخصاً فورياً.',
      },
      {
        title: 'نسخ رسالة واتساب بنقرة',
        body: 'copyOrderToClipboard يبني رسالة موحدة من بيانات الأوردر (العميل، الهاتف، العنوان، الإجمالي). مفيد للموديريتور في التأكيد مع العميل بسرعة وبنفس الصيغة كل مرة.',
      },
      {
        title: 'تصدير Excel جاهز للمراجعة',
        body: 'Orders/export ينزل ملف XLSX بالأعمدة التشغيلية الأساسية (الأوردر، العميل، المنتجات، المحافظة، الحالة، الشحن، الاستحقاق). مناسب للتسليم اليومي والمتابعة الخارجية.',
      },
    ],
    imgSrc: './assets/ord-4-details.png',
    imgAlt: 'قائمة الطلبات والعمليات المجمعة'
  },
  {
    id: 'import',
    label: 'الاستيراد والتدقيق',
    icon: <FileSpreadsheet size={16} />,
    steps: [
      {
        title: 'Import Template رسمي 18 عمود',
        body: 'قالب جاهز بترتيب ثابت: OrderCode, Type, Moderator, Date, CustomerName... Campaign. يقلل مشاكل mapping اليدوي ويجعل الاستيراد متوافق من أول مرة.',
      },
      {
        title: 'Preview قبل الحفظ',
        body: 'import/preview يقرأ الإكسيل ويصنف valid/invalid rows مع أسباب دقيقة. لا شيء يُحفظ قبل المراجعة. هذا يمنع إدخال بيانات مكسورة لقاعدة الإنتاج.',
      },
      {
        title: 'Normalize ذكي للبيانات',
        body: 'يدعم تحويل المحافظ عربي/إنجليزي لنفس canonical value، وتحويل OrderType عربي/إنجليزي. يمنع تحديث أوردرات في حالات نهائية أثناء updateExisting لحماية بيانات الشحن النهائية.',
      },
      {
        title: 'Bulk chunked import للأحجام الكبيرة',
        body: 'import-bulk مصمم لدفعات frontend chunked (100 صف/دفعة) لسرعة أعلى وتقليل timeouts مقارنةً بإرسال ملف ضخم في طلب واحد.',
      },
    ],
    imgSrc: './assets/ord-5-extras.png',
    imgAlt: 'الاستيراد والتحقق والتدقيق'
  },
]

function WalkthroughSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 border-t border-ocean-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <motion.div variants={fadeUp()} className="flex justify-center mb-3">
            <SectionLabel>خط سير العمل</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white">
            من محادثة العميل إلى
            {' '}
            <span style={{ color: ACCENT_HEX }}>أوردر نظيف وجاهز للتنفيذ</span>
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
                  : 'border-ocean-700 text-ocean-400 hover:border-lime-500/40 hover:text-lime-400'
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
                <motion.div key={s.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.08 }} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold" style={{ background: ACCENT_DIM, color: ACCENT_HEX }}>
                    {idx + 1}
                  </span>
                  <div>
                    <p className="mb-1 font-bold text-white">{s.title}</p>
                    <p className="text-sm text-ocean-300 leading-relaxed">{s.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-ocean-700/50 shadow-2xl" style={{ boxShadow: `0 24px 60px rgba(0,0,0,0.55), ${ACCENT_GLOW}` }}>
              <div className="absolute top-0 inset-x-0 h-0.5 z-10" style={{ background: `linear-gradient(90deg, transparent, ${ACCENT_HEX}, transparent)` }} />
              <img src={TABS[active].imgSrc} alt={TABS[active].imgAlt} width={880} height={540} loading="lazy" className="block w-full h-auto object-cover" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

const FAQS = [
  {
    q: 'كيف النظام يمنع تكرار نفس العميل أثناء زحمة الإدخال؟',
    a: 'في الواجهة يوجد فحص duplicate phone خلال 24 ساعة (check-recent-phone) مع عرض OrderCode، وفي backend EnsureCustomerExists يعتمد على unique (company,phone) ويتعامل مع race condition: لو حصل تضارب insert متزامن، يقرأ السجل الموجود بدلاً من تكراره.',
  },
  {
    q: 'هل يمكن تعديل أوردر بعد ما يتشحن؟',
    a: 'لا من order entry. هناك قائمة حالات locked تشمل shipped/finalized (Delivered, Returned, Damaged, Cancelled وغيرها). الموديريتور تحديداً مقيد بحالات New, To prepare, Shortage, Deferred فقط.',
  },
  {
    q: 'كيف يتم تحديد حالة الأوردر أول مرة؟',
    a: 'عند create، الخدمة تقفل صفوف variants المطلوبة FOR UPDATE ثم تقارن quantity المطلوبة بالمخزون الحالي. إذا أي سطر أعلى من stock -> Shortage، غير ذلك -> To prepare. هذا قرار تلقائي مبني على بيانات لحظية آمنة من التزامن.',
  },
  {
    q: 'هل أسعار السطور هي المعتمدة أم سعر الطلب اليدوي؟',
    a: 'الواجهة تدعم الاثنين: OrderPrice يمكن إدخاله يدوياً، أو مزامنته بزر الحاسبة مع line subtotal. الإجمالي النهائي دائماً = OrderPrice + ShippingPrice - Deposit، ويُرسل للـ API بهذه الصيغة.',
  },
  {
    q: 'هل الوحدة تدعم ربط الأوردر بحملة إعلانية؟',
    a: 'نعم. في الفورم حقل campaign اختياري من الحملات النشطة. يتم إرسال CampaignId مع الأوردر، ما يسمح بربط المبيعات بمصدر الإعلان تلقائياً في تحليلات Ads.',
  },
  {
    q: 'ما الفرق بين preview وconfirm في الاستيراد؟',
    a: 'preview يقرأ ويحلل الإكسيل فقط ويعيد valid/invalid rows دون حفظ. confirm يحفظ الصفوف المعتمدة. هذا يقلل المخاطر ويعطي فرصة مراجعة الأخطاء قبل لمس قاعدة البيانات.',
  },
  {
    q: 'هل يوجد تتبع لمن عدّل الأوردر؟',
    a: 'نعم. الطلب يحمل createdBy/lastModified وtimestamps، ويوجد endpoint audit خاص بالأوردر (Admin only) يعرض history للتغييرات. كما أن عمليات bulk تضيف AuditLog واضح لكل عملية.',
  },
  {
    q: 'كيف أحول بيانات الأوامر إلى تقارير خارجية؟',
    a: 'يمكنك تصدير أوامرك إلى Excel من endpoint export بنفس فلاتر البحث (status/date/q). الملف يتضمن بيانات العميل، المنتجات، الإجمالي، الحالة، الشحن، وتواريخ التنفيذ للمراجعة السريعة.',
  },
]

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="py-20 border-t border-ocean-800/60">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <motion.div variants={fadeUp()} className="flex justify-center mb-3">
            <SectionLabel>أسئلة شائعة</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white">
            إدخال أسرع.
            {' '}
            <span style={{ color: ACCENT_HEX }}>تشغيل أأمن.</span>
          </motion.h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <motion.div key={item.q} variants={fadeUp()} className="rounded-2xl border border-ocean-700/50 bg-ocean-900/60 overflow-hidden">
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right">
                <span className="font-semibold text-white text-sm leading-relaxed">{item.q}</span>
                <ChevronDown
                  size={18}
                  className="shrink-0 text-ocean-400 transition-transform duration-300"
                  style={{ transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0deg)', color: openIdx === i ? ACCENT_HEX : undefined }}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <p className="px-6 pb-5 text-sm text-ocean-300 leading-relaxed border-t border-ocean-700/40 pt-4">{item.a}</p>
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
    href: '/#/features/preparation',
    icon: <PackagePlus size={20} />,
    title: 'التحضير',
    body: 'حالة To prepare/Shortage الخارجة من Order Entry هي نقطة البداية المباشرة لفريق التحضير. كلما كان الإدخال أنظف، كان التنفيذ أسرع وأقل ارتجاع.',
  },
  {
    href: '/#/features/shipping',
    icon: <Truck size={20} />,
    title: 'الشحن',
    body: 'Bulk assign courier + بيانات عنوان/محافظة دقيقة من البداية تقلل أخطاء التسليم. أي خطأ في الإدخال ينعكس فوراً على تكلفة الشحن ونسبة التسليم.',
  },
  {
    href: '/#/features/inventory',
    icon: <Boxes size={20} />,
    title: 'المخزون',
    body: 'الربط المباشر مع variants والمخزون وقت الإنشاء يحدد shortage تلقائياً. هذا يمنع بيع وهمي ويعطي الفريق رؤية صحيحة قبل الالتزام مع العميل.',
  },
  {
    href: '/#/features/ads',
    icon: <Megaphone size={20} />,
    title: 'الحملات الإعلانية',
    body: 'اختيار Campaign أثناء الإدخال يجعل كل أوردر قابل للإسناد التسويقي لاحقاً. هذا هو الأساس الحقيقي لحساب ROAS وCPA من بيانات تشغيلية دقيقة.',
  },
  {
    href: '/#/features/staff',
    icon: <Users size={20} />,
    title: 'فريق العمل',
    body: 'اسم الموديريتور المرتبط بكل أوردر يدخل في قياس الأداء والعمولات. كلما كان الإسناد أدق في Order Entry، كانت رواتب العمولة أعدل وأسهل في المراجعة.',
  },
  {
    href: '/#/features/reports',
    icon: <BarChart3 size={20} />,
    title: 'التقارير',
    body: 'Excel export + البيانات المنظمة في order list تغذي تقارير الأداء اليومية بسرعة. من دون جهد إضافي تحصل على رؤية واضحة لحجم المبيعات وحالات التشغيل.',
  },
]

function RelatedModules() {
  return (
    <section className="py-20 border-t border-ocean-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <motion.div variants={fadeUp()} className="flex justify-center mb-3">
            <SectionLabel>الوحدات المرتبطة</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl font-black text-white">
            إدخال الطلب هو
            {' '}
            <span style={{ color: ACCENT_HEX }}>بداية سلسلة التنفيذ بالكامل</span>
          </motion.h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {RELATED.map((r) => (
            <motion.div key={r.href} variants={fadeUp()}>
              <Link
                to={r.href}
                className="group relative flex flex-col gap-3 rounded-2xl border border-ocean-700/50 bg-ocean-900/60 p-6 overflow-hidden transition-all duration-300 hover:border-lime-500/40 hover:-translate-y-1 hover:shadow-lg block"
                style={{ textDecoration: 'none' }}
              >
                <div className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, transparent, ${ACCENT_HEX}, transparent)` }} />
                <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: ACCENT_DIM, color: ACCENT_HEX }}>
                  {r.icon}
                </div>
                <div>
                  <p className="font-bold text-white mb-1 flex items-center gap-2">
                    {r.title}
                    <ChevronRight size={14} className="text-ocean-500 group-hover:text-lime-400 transition-colors" />
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
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative flex flex-col items-center gap-6">
          <div className="pointer-events-none absolute w-[520px] h-[260px] rounded-full blur-3xl opacity-[0.13] -z-10" style={{ background: `radial-gradient(ellipse, ${ACCENT_HEX} 0%, transparent 70%)` }} />

          <motion.div variants={fadeUp()}>
            <SectionLabel>ابدأ الآن</SectionLabel>
          </motion.div>

          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white leading-tight">
            جاهز تحول إدخال الأوردر من
            {' '}
            <span style={{ color: ACCENT_HEX }}>عنق زجاجة</span>
            {' '}
            إلى محرك مبيعات؟
          </motion.h2>

          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 text-base max-w-xl leading-relaxed">
            خلّي فريقك ينجز أسرع وهو أهدى: تدفق واضح، تحقق ذكي، حماية من التكرار، وربط مباشر
            بالشحن والمخزون والحملات. كل هذا في شاشة واحدة مصممة لواقع الشغل اليومي.
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
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-lime-500/40 hover:text-lime-400 transition-all duration-200"
            >
              استعرض الوحدات
            </Link>
          </motion.div>

          <motion.div variants={fadeUp(0.2)} className="flex flex-wrap justify-center gap-6 pt-4">
            {[
              { icon: <CheckCircle2 size={15} />, text: 'إدخال أسرع تحت الضغط' },
              { icon: <CheckCircle2 size={15} />, text: 'أخطاء أقل قبل الشحن' },
              { icon: <CheckCircle2 size={15} />, text: 'رؤية أوضح لأداء الفريق' },
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

export default function OrderEntryPage() {
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
