import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Youtube, Facebook, Linkedin } from 'lucide-react'
import { WHATSAPP_CTA_URL } from '../constants'

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  { label: 'الرئيسية', to: '/' },
  { label: 'المميزات', to: '/' },
  { label: 'الأسعار',  to: '/' },
] as const

const YEAR = new Date().getFullYear()

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-ocean-950 overflow-hidden scroll-mt-20"
    >
      {/* ── Dot-grid texture ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />

      {/* ── Top hairline separator ───────────────────────────────────────── */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent" />

      {/* ── Central ambient glow ─────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 45% at 50% 0%, rgba(20,184,166,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ════════════════════════════════════════════════════════════════════
             CTA BAND — The Closer
             Heavily highlights WhatsApp as primary contact action.
        ════════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.72, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="
            mt-16 mb-16
            relative rounded-3xl overflow-hidden
            bg-gradient-to-br from-ocean-700/60 to-ocean-800/40
            border border-white/[0.07]
            p-8 sm:p-12
          "
        >
          {/* Corner glows */}
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at top right, rgba(20,184,166,0.12) 0%, transparent 65%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-56 h-56 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at bottom left, rgba(34,197,94,0.07) 0%, transparent 65%)',
            }}
          />

          {/* Inner layout: text + buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">

            {/* Text block */}
            <div className="flex flex-col gap-2 text-center sm:text-right">
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                جاهز لتحويل فوضى متجرك إلى نظام؟
              </h2>
              <p className="text-slate-400 text-base max-w-md leading-relaxed">
                تواصل مع فريق المبيعات الآن وسنرسل لك نسختك التجريبية خلال 24 ساعة.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 shrink-0">

              {/* ── Primary: WhatsApp ── */}
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative inline-flex items-center justify-center gap-2.5
                  px-7 py-3.5 rounded-full overflow-hidden
                  bg-gradient-to-l from-brand-teal to-brand-teal-dark
                  text-ocean-950 font-extrabold text-sm
                  hover:shadow-[0_0_36px_rgba(20,184,166,0.55)]
                  hover:scale-[1.04] active:scale-100
                  transition-all duration-200
                  whitespace-nowrap
                "
              >
                {/* Shimmer overlay on hover */}
                <span className="absolute inset-0 bg-gradient-to-l from-brand-green to-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <MessageCircle
                  size={18}
                  strokeWidth={2}
                  className="relative z-10 shrink-0"
                  aria-hidden="true"
                />
                <span className="relative z-10">تواصل مع المبيعات عبر واتساب</span>
              </a>

              {/* ── Secondary: Email ── */}
              <a
                href="mailto:asoliman548@gmail.com"
                className="
                  inline-flex items-center justify-center gap-2.5
                  px-7 py-3.5 rounded-full
                  border border-slate-600/50 text-slate-300
                  hover:border-brand-teal/50 hover:text-brand-teal hover:bg-brand-teal/5
                  hover:scale-[1.04] active:scale-100
                  transition-all duration-200 font-bold text-sm
                  whitespace-nowrap
                "
              >
                <Mail size={16} strokeWidth={2} className="shrink-0" aria-hidden="true" />
                للاقتراحات والتحسينات راسلنا عبر البريد
              </a>
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════════════════════
             MAIN FOOTER GRID
             4 columns on desktop, 2 on tablet, 1 on mobile (RTL order):
               Col 1 (rightmost in RTL): الشركة   — Brand + description + ©
               Col 2: روابط سريعة                — Site Nav
               Col 3: شروحات النظام              — YouTube
               Col 4 (leftmost  in RTL): تابعنا   — Social
        ════════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.62, ease: 'easeOut', delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10"
        >

          {/* ── Col 1: الشركة ─────────────────────────────────────────────── */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <Link to="/" aria-label="الرئيسية" className="inline-block w-fit">
              <img
                src="./assets/logo_splash_light.png"
                alt="Maly OBS"
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-[260px]">
              نظام ERP وPOS متكامل مُصمَّم للمتاجر المصرية.
            </p>

            <p className="text-slate-500 text-xs">
              © {YEAR} Maly-OBS. جميع الحقوق محفوظة.
            </p>
          </div>

          {/* ── Col 2: روابط سريعة ────────────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">
              روابط سريعة
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="روابط سريعة">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.to + link.label}
                  to={link.to}
                  className="
                    group inline-flex items-center gap-2
                    text-sm text-slate-400 hover:text-white
                    transition-colors duration-150 w-fit
                  "
                >
                  {/* Teal bullet that scales in on hover */}
                  <span
                    className="
                      w-1 h-1 rounded-full bg-brand-teal
                      opacity-0 scale-0
                      group-hover:opacity-100 group-hover:scale-100
                      transition-all duration-200 shrink-0
                    "
                  />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Col 3: شروحات النظام ──────────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">
              شروحات النظام
            </p>

            <a
              href="https://www.youtube.com/@Maly-OBS"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center gap-3
                px-4 py-3 rounded-xl w-fit
                border border-white/[0.07] bg-white/[0.03]
                hover:border-red-500/40 hover:bg-red-500/[0.06]
                text-slate-400 hover:text-red-400
                transition-all duration-200
              "
            >
              <Youtube
                size={18}
                strokeWidth={1.8}
                className="shrink-0 group-hover:scale-110 transition-transform duration-200"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-bold leading-tight">فيديوهات شرح النظام</span>
                <span className="text-[10px] text-slate-600 leading-tight font-mono">@Maly-OBS</span>
              </div>
            </a>
          </div>

          {/* ── Col 4: تابعنا ─────────────────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">
              تابعنا
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href="https://www.facebook.com/MalyOBS"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-3
                  px-4 py-3 rounded-xl w-fit
                  border border-white/[0.07] bg-white/[0.03]
                  hover:border-blue-500/40 hover:bg-blue-500/[0.06]
                  text-slate-400 hover:text-blue-400
                  transition-all duration-200
                "
              >
                <Facebook
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 group-hover:scale-110 transition-transform duration-200"
                  aria-hidden="true"
                />
                <span className="text-sm font-bold">فيسبوك</span>
              </a>

              <a
                href="https://www.tiktok.com/@maly.obs"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-3
                  px-4 py-3 rounded-xl w-fit
                  border border-white/[0.07] bg-white/[0.03]
                  hover:border-pink-500/40 hover:bg-pink-500/[0.06]
                  text-slate-400 hover:text-pink-400
                  transition-all duration-200
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0 group-hover:scale-110 transition-transform duration-200"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="text-sm font-bold">تيك توك</span>
              </a>

              <a
                href="https://www.linkedin.com/company/maly-obs"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-3
                  px-4 py-3 rounded-xl w-fit
                  border border-white/[0.07] bg-white/[0.03]
                  hover:border-sky-500/40 hover:bg-sky-500/[0.06]
                  text-slate-400 hover:text-sky-400
                  transition-all duration-200
                "
              >
                <Linkedin
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 group-hover:scale-110 transition-transform duration-200"
                  aria-hidden="true"
                />
                <span className="text-sm font-bold">لينكد إن</span>
              </a>
            </div>
          </div>

        </motion.div>

        {/* ── Bottom bar ──────────────────────────────────────────────────── */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600 text-center sm:text-right">
            It&apos;s not just about money, It&apos;s{' '}
            <span className="text-brand-teal font-bold">CONTROL.</span>
          </p>
          <p className="text-xs text-slate-500 text-center">
            Crafted with <span className="text-brand-teal">♥</span> for Egyptian e-commerce
          </p>
        </div>

      </div>
    </footer>
  )
}
