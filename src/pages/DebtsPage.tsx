import ModulePageTemplate from '../components/modules/ModulePageTemplate'
import { debtsModuleConfig } from '../content/modules/debts'

export default function DebtsPage() {
  return <ModulePageTemplate {...debtsModuleConfig} />
}
