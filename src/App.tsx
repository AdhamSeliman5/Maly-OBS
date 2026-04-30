import { HashRouter, Routes, Route } from 'react-router-dom'
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

            {/* ── Fallback: redirect anything unknown back to Home ── */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

