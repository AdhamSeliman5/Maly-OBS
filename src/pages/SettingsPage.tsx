import ModulePageTemplate from '../components/modules/ModulePageTemplate'
import { settingsModuleConfig } from '../content/modules/settings'

export default function SettingsPage() {
  return <ModulePageTemplate {...settingsModuleConfig} />
}
