import ModulePageTemplate from '../components/modules/ModulePageTemplate'
import { manufacturingModuleConfig } from '../content/modules/manufacturing'

export default function ManufacturingPage() {
  return <ModulePageTemplate {...manufacturingModuleConfig} />
}
