import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export type ModuleLayout = 'classic' | 'modern'

export interface ModuleTheme {
  /** Prefix for dynamic rgba, e.g. `'rgba(20,184,166,'` */
  rgba: string
  hex: string
  dim: string
  /** Gradient end color for buttons */
  dark: string
  glow: string
  /** Secondary hero ambient blob color */
  heroBlobSecondary?: string
  /** Modern layout: Tailwind classes for link/button hovers */
  linkHoverClass?: string
  relatedHoverBorderClass?: string
  relatedHoverTextClass?: string
}

export interface ModuleMicroStatClassic {
  value: string
  label: string
  suffix?: string
}

export interface ModuleMicroStatPill {
  icon: LucideIcon
  label: string
}

export interface ModuleHeroConfig {
  badgeIcon: LucideIcon
  badgeLabel: string
  title: ReactNode
  description: string
  microStatsClassic?: ModuleMicroStatClassic[]
  microStatsPills?: ModuleMicroStatPill[]
  primaryCtaLabel: string
  /** Classic hero primary button hover glow via inline style */
  primaryCtaHoverGlow?: boolean
  secondaryCtaLabel: string
  secondaryCtaToFeatures?: boolean
  /** Classic layout: Tailwind classes for secondary hero CTA hover */
  secondaryCtaClassName?: string
  image: {
    src: string
    alt: string
    width: number
    height: number
    loading?: 'eager' | 'lazy'
  }
  imageAnimation?: 'classic' | 'modern'
}

export interface ModulePainStat {
  icon: LucideIcon
  value: string
  label: string
}

export interface ModuleValueCard {
  icon: LucideIcon
  title: string
  desc: string
  color: string
}

export interface ModuleWalkthroughStep {
  title: string
  desc: string
}

export interface ModuleWalkthroughTab {
  id: string
  label: string
  icon: LucideIcon
  imgSrc: string
  imgAlt: string
  imgW: number
  imgH: number
  steps: ModuleWalkthroughStep[]
}

export interface ModuleFaqItem {
  q: string
  a: string
}

export interface ModuleRelatedItemClassic {
  id: string
  icon: LucideIcon
  color: string
  bg: string
  title: string
  desc: string
}

export interface ModuleRelatedItemModern {
  to: string
  icon: LucideIcon
  title: string
  body: string
}

export interface ModuleCtaTrustBadge {
  icon: LucideIcon
  text: string
}

export interface ModulePageConfig {
  layout: ModuleLayout
  theme: ModuleTheme
  back: {
    label: string
    linkToFeatures?: boolean
  }
  hero: ModuleHeroConfig
  pain: {
    stats: ModulePainStat[]
    footnote?: string
  }
  value: {
    sectionLabel: string
    title: string
    subtitle: string
    cards: ModuleValueCard[]
  }
  walkthrough: {
    sectionLabel: string
    title: string
    subtitle: string
    tabs: ModuleWalkthroughTab[]
  }
  faq: {
    title: ReactNode
    subtitle: string
    items: ModuleFaqItem[]
  }
  related:
    | {
        layout: 'classic'
        title: ReactNode
        subtitle?: string
        items: ModuleRelatedItemClassic[]
      }
    | {
        layout: 'modern'
        title: ReactNode
        subtitle?: string
        items: ModuleRelatedItemModern[]
      }
  cta: {
    layout: 'classic' | 'modern'
    icon: LucideIcon
    eyebrow?: string
    title: ReactNode
    description: string
    primaryLabel: string
    secondaryLabel: string
    secondaryToFeatures?: boolean
    trustBadges?: ModuleCtaTrustBadge[]
  }
}
