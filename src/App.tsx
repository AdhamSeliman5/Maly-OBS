import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ModuleDetail from './pages/ModuleDetail'
import PreparationPage from './pages/Preparation'
import InventoryPage from './pages/InventoryPage'
import ManufacturingPage from './pages/ManufacturingPage'
import ShippingPage from './pages/ShippingPage'
import ExpensesPage from './pages/ExpensesPage'
import DebtsPage from './pages/DebtsPage'
import DashboardPage from './pages/DashboardPage'
import ReportsPage from './pages/ReportsPage'
import AdsPage from './pages/AdsPage'
import StaffPage from './pages/StaffPage'
import SettingsPage from './pages/SettingsPage'
import OrderEntryPage from './pages/OrderEntryPage'
import POSPage from './pages/POSPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

/**
 * App — root with HashRouter for GitHub Pages compatibility.
 *
 * HashRouter uses the URL hash (#) for routing so GitHub Pages always
 * serves index.html and the client handles the path — zero 404s on reload.
 *
 * Layout:
 *   <Navbar>  — fixed, appears on every route
 *   <Routes>  — swapped content per route
 *   <Footer>  — appears on every route
 */
export default function App() {
  return (
    <HashRouter>
      <div className="font-cairo min-h-screen bg-ocean-900" dir="rtl">
        <Navbar />
        <main>
          <ScrollToTop />
          <Routes>
            {/* ── Home / Landing page ── */}
            <Route path="/" element={<Home />} />

            {/* ── Dedicated module pages (must be registered before the generic fallback) ── */}
            <Route path="/features/preparation" element={<PreparationPage />} />
            <Route path="/features/inventory" element={<InventoryPage />} />
            <Route path="/features/manufacturing" element={<ManufacturingPage />} />
            <Route path="/features/shipping" element={<ShippingPage />} />
            <Route path="/features/expenses" element={<ExpensesPage />} />
            <Route path="/features/debts" element={<DebtsPage />} />
            <Route path="/features/dashboard" element={<DashboardPage />} />
            <Route path="/features/reports" element={<ReportsPage />} />
            <Route path="/features/ads" element={<AdsPage />} />
            <Route path="/features/staff" element={<StaffPage />} />
            <Route path="/features/settings" element={<SettingsPage />} />
            <Route path="/features/order-entry" element={<OrderEntryPage />} />
            <Route path="/features/pos" element={<POSPage />} />

            {/* ── Generic module detail fallback ── */}
            <Route path="/features/:moduleId" element={<ModuleDetail />} />

            {/* ── Fallback: redirect anything unknown back to Home ── */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

