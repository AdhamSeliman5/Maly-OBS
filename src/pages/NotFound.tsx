import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Home, ArrowLeft } from 'lucide-react'
import { SITE_NAME } from '../utils/seo'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>الصفحة غير موجودة | {SITE_NAME}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section
        className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center"
        aria-labelledby="not-found-heading"
      >
        <p
          className="mb-3 text-8xl font-black tabular-nums text-brand-teal/20 sm:text-9xl"
          aria-hidden="true"
        >
          404
        </p>
        <h1
          id="not-found-heading"
          className="mb-4 text-3xl font-black text-white sm:text-4xl"
        >
          الصفحة غير موجودة
        </h1>
        <p className="mb-10 max-w-md text-base leading-relaxed text-slate-400">
          الرابط الذي طلبته غير صحيح أو أن الصفحة نُقلت. يمكنك العودة إلى الصفحة الرئيسية
          لمتابعة استكشاف مالي-OBS.
        </p>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-brand-teal to-teal-700 px-8 py-4 text-sm font-extrabold text-ocean-950 shadow-[0_0_28px_rgba(20,184,166,0.35)] transition-all duration-200 hover:scale-[1.03] active:scale-100"
        >
          <Home size={16} aria-hidden="true" />
          العودة للرئيسية
          <ArrowLeft
            size={14}
            className="transition-transform duration-200 group-hover:-translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </section>
    </>
  )
}
