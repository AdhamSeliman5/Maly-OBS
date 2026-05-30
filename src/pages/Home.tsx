import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, getOgImageUrl } from '../utils/seo'
import SystemPreview from '../components/SystemPreview'
import PlatformPower from '../components/PlatformPower'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import type { HomeScrollState } from '../navigation/homeScroll'

/**
 * Home — the public landing page.
 * Assembled from the three phase components; rendered at route "/".
 */
export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const scrollTo = (location.state as HomeScrollState | null)?.scrollTo
    if (!scrollTo) return

    const frame = requestAnimationFrame(() => {
      const el = document.getElementById(scrollTo)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }

      // Clear scroll intent so refresh / back does not re-scroll
      navigate(location.pathname, { replace: true, state: null })
    })

    return () => cancelAnimationFrame(frame)
  }, [location.key, location.pathname, location.state, navigate])

  const ogImage = getOgImageUrl()

  return (
    <>
      <Helmet>
        <title>{DEFAULT_TITLE}</title>
        <meta name="description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={DEFAULT_TITLE} />
        <meta property="og:description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={DEFAULT_TITLE} />
        <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      {/* ── Phase 1 ── */}
      <Hero />

      {/* ── System Preview — browser mockup carousel ── */}
      <SystemPreview />

      {/* ── Platform Power — operational USPs (PWA, Sync, RBAC) ── */}
      <PlatformPower />

      {/* ── Phase 2 ── */}
      <Features />

      {/* ── Phase 3 ── */}
      <Pricing />
    </>
  )
}
