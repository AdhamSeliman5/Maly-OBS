import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  color: string
}

export default function SectionLabel({ children, color }: SectionLabelProps) {
  return (
    <span
      className="inline-block px-4 py-1.5 rounded-full border text-xs font-bold tracking-wide mb-6"
      style={{
        color,
        backgroundColor: color + '1A',
        borderColor: color + '4D',
      }}
    >
      {children}
    </span>
  )
}
