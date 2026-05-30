import ModulePageTemplate from '../components/modules/ModulePageTemplate'
import { dashboardModuleConfig } from '../content/modules/dashboard'

export default function DashboardPage() {
  return <ModulePageTemplate {...dashboardModuleConfig} />
}
