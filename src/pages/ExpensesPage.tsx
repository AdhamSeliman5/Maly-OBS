import ModulePageTemplate from '../components/modules/ModulePageTemplate'
import { expensesModuleConfig } from '../content/modules/expenses'

export default function ExpensesPage() {
  return <ModulePageTemplate {...expensesModuleConfig} />
}
