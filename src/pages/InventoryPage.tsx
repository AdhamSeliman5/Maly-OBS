import ModulePageTemplate from '../components/modules/ModulePageTemplate'
import { inventoryModuleConfig } from '../content/modules/inventory'

export default function InventoryPage() {
  return <ModulePageTemplate {...inventoryModuleConfig} />
}
