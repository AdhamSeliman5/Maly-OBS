import Hero from '../components/Hero'
import SystemPreview from '../components/SystemPreview'
import PlatformPower from '../components/PlatformPower'
import Features from '../components/Features'
import Pricing from '../components/Pricing'

/**
 * Home — the public landing page.
 * Assembled from the three phase components; rendered at route "/".
 */
export default function Home() {
  return (
    <>
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
