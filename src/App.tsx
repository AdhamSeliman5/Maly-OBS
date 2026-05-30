import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const ModuleDetail = lazy(() => import('./pages/ModuleDetail'))
const PreparationPage = lazy(() => import('./pages/Preparation'))
const InventoryPage = lazy(() => import('./pages/InventoryPage'))
const ManufacturingPage = lazy(() => import('./pages/ManufacturingPage'))
const ShippingPage = lazy(() => import('./pages/ShippingPage'))
const ExpensesPage = lazy(() => import('./pages/ExpensesPage'))
const DebtsPage = lazy(() => import('./pages/DebtsPage'))
const DashboardPage = lazy(() => import('./pages/DashboardPage'))
const ReportsPage = lazy(() => import('./pages/ReportsPage'))
const AdsPage = lazy(() => import('./pages/AdsPage'))
const StaffPage = lazy(() => import('./pages/StaffPage'))
const SettingsPage = lazy(() => import('./pages/SettingsPage'))
const OrderEntryPage = lazy(() => import('./pages/OrderEntryPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

function RouteFallback() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center"
      role="status"
      aria-label="جاري التحميل"
    >
      <div
        className="h-10 w-10 rounded-full border-2 border-brand-teal/25 border-t-brand-teal animate-spin"
        aria-hidden="true"
      />
    </div>
  )
}

/**
 * App — root with HashRouter for GitHub Pages compatibility.
 *
 * HashRouter uses the URL hash (#) for routing so GitHub Pages always
 * serves index.html and the client handles the path — zero 404s on reload.
 *
 * Layout:
 *   <Navbar>  — fixed, appears on every route
 *   <Routes>  — swapped content per route (lazy-loaded per page)
 *   <Footer>  — appears on every route
 */
export default function App() {
  return (
    <HashRouter>
      <div className="font-cairo min-h-screen bg-ocean-900" dir="rtl">
        <a href="#main-content" className="skip-link">
          تخطي إلى المحتوى الرئيسي
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              {/* ── Home / Landing page ── */}
              <Route path="/" element={<Home />} />

              {/* ── Module detail pages ── */}
              {/* e.g. /#/features/orders  /#/features/hr  etc. */}
              <Route path="/features/:moduleId" element={<ModuleDetail />} />

              {/* ── Dedicated preparation page ── */}
              <Route path="/features/preparation" element={<PreparationPage />} />

              {/* ── Dedicated inventory page ── */}
              <Route path="/features/inventory" element={<InventoryPage />} />

              {/* ── Dedicated manufacturing page ── */}
              <Route path="/features/manufacturing" element={<ManufacturingPage />} />

              {/* ── Dedicated shipping page ── */}
              <Route path="/features/shipping" element={<ShippingPage />} />

              {/* ── Dedicated expenses page ── */}
              <Route path="/features/expenses" element={<ExpensesPage />} />

              {/* ── Dedicated debts page ── */}
              <Route path="/features/debts" element={<DebtsPage />} />

              {/* ── Dedicated dashboard page ── */}
              <Route path="/features/dashboard" element={<DashboardPage />} />

              {/* ── Dedicated reports page ── */}
              <Route path="/features/reports" element={<ReportsPage />} />

              {/* ── Dedicated ads page ── */}
              <Route path="/features/ads" element={<AdsPage />} />

              {/* ── Dedicated staff page ── */}
              <Route path="/features/staff" element={<StaffPage />} />

              {/* ── Dedicated settings page ── */}
              <Route path="/features/settings" element={<SettingsPage />} />

              {/* ── Dedicated order entry page ── */}
              <Route path="/features/order-entry" element={<OrderEntryPage />} />

              {/* ── Explicit 404 for unknown routes ── */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
