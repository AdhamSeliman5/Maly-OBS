/** Section IDs on the home landing page (must match element `id` attributes). */
export type HomeScrollTarget = 'home' | 'features' | 'pricing' | 'contact'

export type HomeScrollState = {
  scrollTo?: HomeScrollTarget
}

export function scrollToSectionState(scrollTo: HomeScrollTarget): HomeScrollState {
  return { scrollTo }
}
