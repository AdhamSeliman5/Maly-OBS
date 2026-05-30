import type { ReactNode } from 'react'
import { isValidElement } from 'react'

export const SITE_NAME = 'مالي OBS'
export const DEFAULT_TITLE = `${SITE_NAME} — أحكم السيطرة على متجرك`
export const DEFAULT_DESCRIPTION =
  'مالي-OBS — نظام ERP وPOS متكامل لإدارة متجرك الإلكتروني. أحكم السيطرة على طلباتك، مخزونك، وفريقك من مكان واحد.'
export const DEFAULT_OG_IMAGE_PATH = 'og-image.jpg'

/** Absolute URL for Open Graph images (required by most crawlers). */
export function getOgImageUrl(): string {
  const base = import.meta.env.BASE_URL
  const path = base.endsWith('/') ? `${base}${DEFAULT_OG_IMAGE_PATH}` : `${base}/${DEFAULT_OG_IMAGE_PATH}`
  if (typeof window !== 'undefined') {
    return `${window.location.origin}${path.startsWith('/') ? path : `/${path}`}`
  }
  return path
}

/** Flatten ReactNode (e.g. hero titles with <br />) into plain text for meta tags. */
export function plainTextFromReactNode(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(plainTextFromReactNode).filter(Boolean).join(' ')
  if (isValidElement(node)) return plainTextFromReactNode(node.props.children)
  return ''
}
