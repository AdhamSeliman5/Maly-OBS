import ModulePageTemplate from '../components/modules/ModulePageTemplate'
import { shippingModuleConfig } from '../content/modules/shipping'

export default function ShippingPage() {
  return <ModulePageTemplate {...shippingModuleConfig} />
}
