/**
 * SettingsPage.tsx — Dedicated marketing page for Settings (الإعدادات والصلاحيات) module.
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
 * Accent: sky-cobalt — #0ea5e9 / #0284c7
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Settings,
  Shield,
  ShieldCheck,
  ShieldAlert,
  KeyRound,
  Users,
  UserCog,
  Building2,
  Database,
  HardDrive,
  Cloud,
  AlertTriangle,
  Bell,
  BarChart3,
  ClipboardList,
  Fingerprint,
  Search,
  History,
  EyeOff,
  RefreshCcw,
} from 'lucide-react'

// ─── Accent colour tokens ─────────────────────────────────────────────────────

const ACCENT      = 'rgba(14,165,233,'   // sky-500
const ACCENT_HEX  = '#0ea5e9'
const ACCENT_DIM  = 'rgba(14,165,233,0.12)'
const ACCENT_DARK = '#0284c7'
const ACCENT_GLOW = '0 0 28px rgba(14,165,233,0.40)'

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

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT + '0.9)' }}>
      {children}
    </span>
  )
}

function BackStrip() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8 pb-2 pt-4">
      <Link to="/#features" className="inline-flex items-center gap-2 text-sm text-ocean-400 hover:text-sky-400 transition-colors">
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
      <div
        className="pointer-events-none absolute -top-24 right-1/4 w-[700px] h-[700px] rounded-full blur-3xl opacity-[0.09]"
        style={{ background: `radial-gradient(circle, ${ACCENT_HEX} 0%, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute top-56 left-0 w-80 h-80 rounded-full blur-3xl opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)' }}
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
                <Settings size={15} />
                الإعدادات والصلاحيات
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp(0.05)} className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-white" style={{ lineHeight: '1.22' }}>
              سيطرة كاملة على
              {' '}
              <span style={{ color: ACCENT_HEX }}>من يرى ماذا — ومن يقدر يعمل إيه.</span>
              <br />
              صلاحيات دقيقة.
              {' '}
              <span className="text-ocean-400">عزل شركات. تدقيق كامل.</span>
            </motion.h1>

            <motion.p variants={fadeUp(0.1)} className="text-base sm:text-lg text-ocean-300 leading-relaxed max-w-xl">
              RBAC متعدد المستويات: Role + Module + Action. كل API محمي بـ JWT وRequirePermission.
              حماية ضد IDOR بين الشركات. Password Policy قوية + BCrypt. Audit Trail لأي تغيير حساس.
              هذا ليس مجرد شاشة إعدادات — هذه طبقة الحوكمة الكاملة للنظام.
            </motion.p>

            <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-3">
              {[
                { label: 'Role + Module + Action', icon: <Shield size={14} /> },
                { label: 'Tenant Isolation', icon: <Building2 size={14} /> },
                { label: 'Audit Logs من JWT', icon: <History size={14} /> },
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
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-ocean-300 border border-ocean-700 hover:border-sky-500/40 hover:text-sky-400 transition-all duration-200"
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
              <div className="absolute top-0 inset-x-0 h-0.5 z-10" style={{ background: `linear-gradient(90deg, transparent, ${ACCENT_HEX}, transparent)` }} />
              <img
                src="./assets/set-1-hero.png"
                alt="لوحة الإعدادات والصلاحيات — إدارة المستخدمين والأمان والنسخ الاحتياطي"
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
                <Fingerprint size={16} style={{ color: ACCENT_HEX }} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-ocean-400">JWT Claims Verified</span>
                <span className="text-sm font-bold text-white">UserId من التوكن فقط</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="absolute -top-5 -right-5 rounded-xl border border-ocean-700 bg-ocean-900/90 px-4 py-3 shadow-xl backdrop-blur-md flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: 'rgba(74,222,128,0.12)' }}>
                <ShieldCheck size={16} style={{ color: '#4ade80' }} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-ocean-400">RequireCompanyMatch</span>
                <span className="text-sm font-bold" style={{ color: '#4ade80' }}>Multi-Tenant Isolation</span>
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
    stat: 'صلاحيات عامة',
    text: 'لو كل الموظفين "Admin" في الواقع، فأنت لا تملك نظاماً — أنت تملك مخاطرة. أي موظف قد يصل لتقارير حساسة أو يمسح بيانات بلا قصد. هنا كل إجراء مرتبط بصلاحية محددة: view/create/edit/delete/admin/settle/closeDay.',
    icon: <ShieldAlert size={22} />,
  },
  {
    stat: 'شركة واحدة؟',
    text: 'في SaaS متعدد الشركات، أخطر سيناريو هو IDOR: موظف من شركة A يصل لبيانات شركة B بتغيير companyId فقط. هنا كل endpoint حساس يمر على RequireCompanyMatchAsync — الطلب يُرفض فوراً لو الشركة لا تطابق التوكن.',
    icon: <Building2 size={22} />,
  },
  {
    stat: 'مين غيّر إيه؟',
    text: 'بدون Audit Trail لا يمكنك التحقيق في أي خرق. هنا سجل تدقيق كامل مع UserId وUsername مأخوذين من JWT claims، وليس من بيانات مرسلة من العميل. تعرف من غيّر ومتى ولماذا.',
    icon: <History size={22} />,
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

// ─── 3. VALUE PROPOSITION ────────────────────────────────────────────────────

const VALUE_CARDS = [
  {
    icon: <Shield size={20} />,
    title: 'RBAC فعلي: Role + Module + Action',
    body: 'النظام لا يعتمد على "Role" فقط. كل endpoint يمكن حمايته بـ [RequirePermission("Module", "action")]. الصلاحيات الدقيقة تأتي من PermissionsJson (module -> actions). عند غيابها: fallback على AllowedModules legacy لضمان التوافق العكسي.',
  },
  {
    icon: <KeyRound size={20} />,
    title: 'Password Policy + BCrypt = أمان حقيقي',
    body: 'كلمة المرور الجديدة يجب أن تحتوي: ٨ أحرف كحد أدنى + حرف كبير + صغير + رقم + رمز خاص. التخزين مشفر BCrypt workFactor=12، وليس hash بسيط. الحسابات القديمة لها مسار ترقية أثناء تسجيل الدخول.',
  },
  {
    icon: <Building2 size={20} />,
    title: 'Tenant Isolation ضد IDOR',
    body: 'كل عمليات حساسة في Settings تمر عبر RequireCompanyMatchAsync. أي companyId لا يطابق tenant في JWT يُرفض فوراً. حتى تحديث/حذف مستخدم لديه guard إضافي (CompanyId must match tenant). بيانات الشركات معزولة فعلياً.',
  },
  {
    icon: <UserCog size={20} />,
    title: 'AppUser منفصل عن Employee',
    body: 'تصميم Decoupled IAM: بيانات الدخول والصلاحيات في AppUser، وبيانات HR/Payroll في Employee. الربط اختياري عبر EmployeeId. نفس الموظف يمكن ربطه بحساب واحد فقط (unique). أو يمكنك إنشاء حساب إداري بدون أي سجل رواتب.',
  },
  {
    icon: <Users size={20} />,
    title: 'Roles قابلة للتعيين بأمان',
    body: 'Tenant admin لا يستطيع إنشاء SuperAdmin. الأدوار المسموحة: Admin, Manager, Moderator, Marketer, Staff فقط. أي Role خارج القائمة مرفوض فوراً مع رسالة واضحة. يقلل التصعيد غير المقصود للصلاحيات.',
  },
  {
    icon: <EyeOff size={20} />,
    title: 'Deactivate user = سحب الوصول فوراً',
    body: 'حذف المستخدم هنا soft-delete ذكي: IsActive=0 + PasswordHash=null + AllowedModules=null + PermissionsJson=null. الحساب يبقى لأغراض التدقيق التاريخي، لكن لا يستطيع تسجيل الدخول إطلاقاً.',
  },
  {
    icon: <History size={20} />,
    title: 'Audit Logs موثوقة من JWT claims',
    body: 'Endpoint audit/log يتجاهل userId/username القادم من العميل. يقرأهما مباشرة من ClaimTypes.NameIdentifier وClaimTypes.Name داخل JWT. هذا يمنع انتحال الهوية في سجلات التدقيق ويجعل كل أثر موثوقاً قانونياً.',
  },
  {
    icon: <Cloud size={20} />,
    title: 'Cloud Sync & Smart Archive',
    body: 'الإعدادات ليست أمان فقط. لديك smart archive لنقل الطلبات النهائية الأقدم من N يوم إلى الأرشيف، مع دعم مزامنة بيانات النظام. هذا يقلل ضغط الجداول الحية ويحسّن الأداء مع نمو البيانات.',
  },
  {
    icon: <HardDrive size={20} />,
    title: 'Backup & Restore بمسار آمن',
    body: 'Export/Import CSV ZIP يتحقق من اسم الملف عبر ValidateExportFileName ويمنع directory traversal. فقط plain filename داخل ExportBaseDir. حماية قوية ضد استغلال paths الخبيثة.',
  },
  {
    icon: <AlertTriangle size={20} />,
    title: 'Danger Zone مع تحقق كلمة Admin',
    body: 'عمليات مدمرة (clear orders, factory reset, replace table) تتطلب admin password. لا ضغطات خاطئة. يوجد مستويات reset منفصلة، ورسائل نجاح/فشل صريحة تساعدك تتصرف بسرعة وقت الطوارئ.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Report Preferences مركزية',
    body: 'سيناريوهات التقارير مثل default delivery rate وdefault scenario تُدار مركزياً من settings API. أي تغيير ينعكس على التقارير التشغيلية والمالية تلقائياً بدون تعديل يدوي في كل شاشة.',
  },
  {
    icon: <RefreshCcw size={20} />,
    title: 'Settings Cache + Invalidation ذكي',
    body: 'إعدادات الشركة تُخزَّن في MemoryCache لمدة ٣٠ دقيقة لتسريع القراءة. عند أي تعديل: RemoveCompanySettingsCache يُفرغ الكاش فوراً. تجمع بين الأداء والدقة بدون stale values.',
  },
]

function ValueProposition() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <motion.div variants={fadeUp()} className="flex justify-center mb-3">
            <SectionLabel>لماذا الإعدادات عندنا مختلفة؟</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white mb-4">
            لأن الأمان ليس "زر" —
            {' '}
            <span style={{ color: ACCENT_HEX }}>إنه بنية كاملة على مستوى الكود.</span>
          </motion.h2>
          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 max-w-2xl mx-auto text-base leading-relaxed">
            من السياسة الصارمة لكلمات المرور إلى عزل التينانتات، ومن سجل تدقيق موثوق إلى
            تحكم دقيق بكل إجراء لكل وحدة. هذه الصفحة تجمع كل أدوات الحوكمة والإدارة
            التي يحتاجها أي SaaS جاد.
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
    id: 'users',
    label: 'المستخدمون والصلاحيات',
    icon: <Users size={16} />,
    steps: [
      {
        title: 'أنشئ مستخدماً وربطه بموظف HR (اختياري)',
        body: 'عند إنشاء AppUser يمكنك اختيار EmployeeId لربط الحساب بسجل HR. يتحقق النظام أن الموظف موجود في نفس الشركة ولم يُربط بحساب آخر. هذا يضمن one-to-one link ويوحد الهوية عبر النظام.',
      },
      {
        title: 'اختر Role قابل للتعيين فقط',
        body: 'الأدوار المسموحة للعميل: Admin/Manager/Moderator/Marketer/Staff. أي محاولة لتعيين SuperAdmin مرفوضة. للـ Admin: AllowedModules = "All" تلقائياً. لا حاجة لتكوين يدوي.',
      },
      {
        title: 'PermissionsJson أدق من AllowedModules',
        body: 'إذا زودت permissions الدقيقة (مثلاً Sales: [view,create] وExpenses:[view]) يتم حفظها JSON وتصبح المرجع الأساسي في التحقق. AllowedModules يُشتق من مفاتيحها للتوافق مع الشاشات القديمة.',
      },
      {
        title: 'إلغاء مستخدم بدون فقدان التاريخ',
        body: 'Delete لا يمسح السجل: يجمد الحساب (IsActive=0) ويلغي credentials والصلاحيات. يبقى للمراجعة التاريخية. لا يمكن حذف حساب admin الرئيسي ولا تعديل حالته — حماية من lockout الكارثي.',
      },
    ],
    imgSrc: './assets/set-2-list.png',
    imgAlt: 'إدارة المستخدمين والصلاحيات الدقيقة وربط المستخدم بالموظف',
  },
  {
    id: 'security',
    label: 'الأمان متعدد الشركات',
    icon: <ShieldCheck size={16} />,
    steps: [
      {
        title: 'JWT + Claims كأساس كل قرار',
        body: 'UserId وRole وTenantId مأخوذة من JWT. كل endpoint حساس يقرأ claims مباشرة. لا ثقة في قيم العميل المتغيرة. التوكن هو مصدر الحقيقة الوحيد للهوية والسياق.',
      },
      {
        title: 'RequireCompanyMatchAsync ضد IDOR',
        body: 'قبل أي تعديل/قراءة tenant-scoped: مقارنة companyId المطلوب مع tenant في السياق. mismatch = رفض فوري. حتى لو المستخدم حاول تغيير companyId في query string، لا يمكنه القفز لبيانات شركة أخرى.',
      },
      {
        title: 'RequirePermission لكل Action حساس',
        body: 'الفلتر يفحص: هل المستخدم Admin/SuperAdmin؟ إذا لا، يفحص PermissionsJson للفعل المطلوب داخل الوحدة. عند عدم وجود JSON: fallback AllowedModules. النتيجة: granular authorization مع backward compatibility.',
      },
      {
        title: 'IDOR Guard داخل الخدمة نفسها',
        body: 'SettingsService يضيف guard ثانية: عند update/delete/toggle user يُطلب أن CompanyId للمستخدم = tenant الحالي. طبقة API + طبقة service معاً = دفاع متعدد الطبقات (defense in depth).',
      },
    ],
    imgSrc: './assets/set-3-action.png',
    imgAlt: 'حماية الأمان متعددة الشركات والتحقق من الصلاحيات',
  },
  {
    id: 'backup',
    label: 'النسخ والبيانات',
    icon: <Database size={16} />,
    steps: [
      {
        title: 'Backup محلي + Restore',
        body: 'إنشاء نسخة احتياطية محلية، تنزيل export كـ ZIP، واستعادة قاعدة البيانات من ملف backup. API يعيد رسائل واضحة success/failure لكل خطوة لسهولة تشغيل العمليات من الواجهة.',
      },
      {
        title: 'CSV ZIP Import/Export مع حماية Path',
        body: 'قبل أي استيراد/تصدير CSV ZIP: ValidateExportFileName يتحقق أن الاسم plain filename وأن المسار النهائي داخل ExportBaseDir. يحبط أي directory traversal مثل ../../secret.db.',
      },
      {
        title: 'Auto Backup Settings',
        body: 'تفعيل النسخ الدوري (daily/weekly) مع max count. عند التخطي: حذف أقدم النسخ تلقائياً. لديك endpoint run-if-due لتشغيل النسخ تلقائياً عند فتح النظام وقت الاستحقاق.',
      },
      {
        title: 'Danger Zone بمستويين Reset',
        body: 'Level-based factory reset مع admin password. يوجد clear-orders منفصل، وreplace-table، وfactory reset. كل عملية مدمرة تمر بتحقق واضح ورسائل جلية تمنع أخطاء التشغيل.',
      },
    ],
    imgSrc: './assets/set-4-details.png',
    imgAlt: 'النسخ الاحتياطي والاستيراد والاستعادة ودنجر زون',
  },
  {
    id: 'ops',
    label: 'العمليات والمراقبة',
    icon: <ClipboardList size={16} />,
    steps: [
      {
        title: 'Company Profile مركزي',
        body: 'تحديث بيانات الشركة (Name/Phone/Address/Tax/Currency) من endpoint واحد. تستخدم عبر النظام في الوثائق والتقارير والطباعة. لا تكرار يدوي للإعدادات في أكثر من مكان.',
      },
      {
        title: 'Report Preferences متقدمة',
        body: 'تحديد default scenario وdelivery rate وliquidation% من settings APIs. هذا يضمن أن تحليلات الفرق المختلفة متسقة، ولا تختلف النتائج بسبب default مختلف لكل مستخدم.',
      },
      {
        title: 'Smart Archive لتحسين الأداء',
        body: 'نقل الطلبات النهائية الأقدم من N يوم من الجداول الحية إلى الأرشيف (copy ثم delete). قاعدة بيانات أخف، صفحات أسرع، وتقارير تاريخية ما زالت متاحة في الأرشيف.',
      },
      {
        title: 'Audit & Forensics جاهزة',
        body: 'استعلام audit logs بفلترة user/action/date مع pagination (limit/offset). عند حادث أمني أو حذف غير مصرح: تصل للحقيقة خلال دقائق، لا ساعات. الحوكمة الفعلية تعتمد على أثر رقمي موثوق.',
      },
    ],
    imgSrc: './assets/set-5-extras.png',
    imgAlt: 'الإعدادات التشغيلية وتدقيق العمليات وسجل الأمان',
  },
]

function WalkthroughSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 border-t border-ocean-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <motion.div variants={fadeUp()} className="flex justify-center mb-3">
            <SectionLabel>كيف تعمل المنظومة؟</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white">
            من إنشاء الحساب إلى
            {' '}
            <span style={{ color: ACCENT_HEX }}>سياسة أمان قابلة للتدقيق</span>
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
                  : 'border-ocean-700 text-ocean-400 hover:border-sky-500/40 hover:text-sky-400'
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
    q: 'كيف تتأكدون أن مستخدم شركة ما لا يصل لبيانات شركة أخرى؟',
    a: 'هناك حماية مزدوجة. في الـ Controller: RequireCompanyMatchAsync يتحقق أن companyId في الطلب يساوي tenant من JWT. في الـ Service: update/delete/toggle للمستخدمين فيها IDOR guard يفرض CompanyId == tenant. أي mismatch يُرفض قبل تنفيذ أي عملية.',
  },
  {
    q: 'هل AllowedModules وحده كافٍ للأمان؟',
    a: 'AllowedModules هو fallback legacy فقط. المسار الحديث هو PermissionsJson: قاموس module -> actions مثل view/create/edit/delete/admin/settle/closeDay. RequirePermission يفحص JSON أولاً. إذا غير موجود يرجع للـ fallback لضمان عدم كسر الحسابات القديمة.',
  },
  {
    q: 'ما الذي يمنع انتحال الهوية في سجل التدقيق؟',
    a: 'Endpoint audit/log يتجاهل userId وusername المرسلين من الـ client ويستخرج الهوية من JWT claims مباشرة (NameIdentifier + Name). لا يمكن للواجهة أن تكتب log باسم شخص آخر حتى لو حاولت.',
  },
  {
    q: 'هل يمكن ربط نفس الموظف بأكثر من حساب مستخدم؟',
    a: 'لا. عند SaveUserAsync إذا تم تمرير EmployeeId، النظام يتحقق أن هذا الموظف غير مرتبط مسبقاً بأي AppUser آخر. لو مرتبط بالفعل، العملية تُرفض برسالة واضحة: employee already linked.',
  },
  {
    q: 'كيف تُحمى كلمات المرور؟',
    a: 'عند إنشاء أو تغيير كلمة المرور: PasswordPolicy يفرض 8+ أحرف مع upper/lower/digit/special. بعدها يتم hash بـ BCrypt workFactor=12 قبل التخزين. كلمة المرور الخام لا تُحفظ إطلاقاً.',
  },
  {
    q: 'ماذا يعني Delete user في النظام الحديث؟',
    a: 'Delete هو deactivation آمن: IsActive=0، PasswordHash=null، AllowedModules=null، PermissionsJson=null. يبقى السجل للـ audit ولا يستطيع المستخدم تسجيل الدخول. هذا يوفر تتبع تاريخي بدون مخاطر وصول.',
  },
  {
    q: 'كيف تمنعون ثغرات path traversal في الاستيراد/التصدير؟',
    a: 'أي اسم ملف يأتي من العميل يمر عبر ValidateExportFileName: يقبل plain filename فقط، ثم يبني المسار داخل ExportBaseDir ويتأكد أن path النهائي لا يخرج خارج المجلد المحدد. أي محاولة ../ أو مسارات مطلقة تُرفض بـ 400.',
  },
  {
    q: 'هل الإعدادات بطيئة عند كثرة القراءة؟',
    a: 'لا. GetSettingsAsync تستخدم MemoryCache لمدة 30 دقيقة لكل tenant. وعند أي تعديل SetSetting/SetSettingsMany يتم إزالة cache مباشرة RemoveCompanySettingsCache، فيعود النظام يقرأ القيم الأحدث بدون stale data.',
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
            أمان قابل للتدقيق —
            {' '}
            <span style={{ color: ACCENT_HEX }}>بأدلة من الكود نفسه.</span>
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
    href: '/features/staff',
    icon: <Users size={20} />,
    title: 'فريق العمل والموارد البشرية',
    body: 'AppUser يمكن ربطه اختيارياً بـ EmployeeId. هذا يضمن أن هوية المستخدم وصلاحياته منفصلة عن بيانات الرواتب، مع رابط مرجعي دقيق بين الأمن والـ HR.',
  },
  {
    href: '/features/reports',
    icon: <BarChart3 size={20} />,
    title: 'التقارير',
    body: 'تفضيلات التقارير الافتراضية (scenario/delivery-rate/liquidation) تُدار من Settings. التقارير تستخدم هذه القيم تلقائياً لضمان اتساق القراءة المالية بين الفرق.',
  },
  {
    href: '/features/expenses',
    icon: <Database size={20} />,
    title: 'المصروفات والخزينة',
    body: 'Danger Zone وعمليات reset تؤثر على جداول المعاملات المالية. وجود صلاحيات دقيقة على Settings يحميك من مسح مصروفات أو قيود خزينة عن طريق الخطأ.',
  },
  {
    href: '/features/dashboard',
    icon: <Search size={20} />,
    title: 'لوحة القيادة',
    body: 'التحكم الدقيق في view/create/edit يحدد من يستطيع رؤية مؤشرات الأداء العامة في الـ Dashboard. الموظف يرى فقط ما يحتاجه لعمله — لا أكثر.',
  },
  {
    href: '/features/ads',
    icon: <Bell size={20} />,
    title: 'الإعلانات',
    body: 'صلاحيات Ads (مثل settle أو edit) تُدار من نفس محرك RBAC في Settings. يمكنك السماح للماركيتر بقراءة الأداء فقط دون تعديل الحملات أو المصروفات.',
  },
  {
    href: '/features/debts',
    icon: <AlertTriangle size={20} />,
    title: 'الديون والمستحقات',
    body: 'بيانات الديون شديدة الحساسية. بفضل permissions الدقيقة، يمكن للمحاسبة الوصول الكامل بينما فريق التشغيل يمتلك view فقط أو لا يمتلك وصولاً أصلاً.',
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
            الإعدادات تحكم المنظومة كلها —
            {' '}
            <span style={{ color: ACCENT_HEX }}>وليس صفحة منفصلة</span>
          </motion.h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {RELATED.map((r) => (
            <motion.div key={r.href} variants={fadeUp()}>
              <Link
                to={r.href}
                className="group relative flex flex-col gap-3 rounded-2xl border border-ocean-700/50 bg-ocean-900/60 p-6 overflow-hidden transition-all duration-300 hover:border-sky-500/40 hover:-translate-y-1 hover:shadow-lg block"
                style={{ textDecoration: 'none' }}
              >
                <div className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, transparent, ${ACCENT_HEX}, transparent)` }} />
                <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: ACCENT_DIM, color: ACCENT_HEX }}>
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
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative flex flex-col items-center gap-6">
          <div
            className="pointer-events-none absolute w-[520px] h-[260px] rounded-full blur-3xl opacity-[0.13] -z-10"
            style={{ background: `radial-gradient(ellipse, ${ACCENT_HEX} 0%, transparent 70%)` }}
          />

          <motion.div variants={fadeUp()}>
            <SectionLabel>ابدأ الآن</SectionLabel>
          </motion.div>

          <motion.h2 variants={fadeUp(0.05)} className="text-3xl sm:text-4xl font-black text-white leading-tight">
            جاهز تبني نظام
            {' '}
            <span style={{ color: ACCENT_HEX }}>يضمن لك السيطرة الكاملة؟</span>
          </motion.h2>

          <motion.p variants={fadeUp(0.1)} className="text-ocean-300 text-base max-w-xl leading-relaxed">
            موظف يرى ما يحتاجه فقط. مدير يغيّر ما يملكه فقط. وكل إجراء حساس مسجل ويمكن
            مراجعته. بإعدادات Maly OBS، الأمان ليس وعد تسويقي — هو سلوك مُنفَّذ داخل كل API.
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
              { icon: <CheckCircle2 size={15} />, text: 'RBAC دقيق لكل إجراء' },
              { icon: <CheckCircle2 size={15} />, text: 'عزل شركات متعدد المستأجرين' },
              { icon: <CheckCircle2 size={15} />, text: 'سجل تدقيق كامل وموثوق' },
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

export default function SettingsPage() {
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
