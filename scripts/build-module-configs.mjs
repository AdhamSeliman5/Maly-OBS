/**
 * Generates src/content/modules/*.ts from src/pages/*.tsx + module-metadata.mjs
 * Run: node scripts/build-module-configs.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { MODULES } from './module-metadata.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const pagesDir = path.join(root, 'src', 'pages')
const outDir = path.join(root, 'src', 'content', 'modules')

function extractBlock(source, varName) {
  const startRe = new RegExp(`const\\s+${varName}\\s*(?::[^=]+)?\\s*=\\s*\\[`, 'm')
  const startMatch = source.match(startRe)
  if (!startMatch) throw new Error(`Could not find ${varName} in source`)
  const startIdx = startMatch.index + startMatch[0].length - 1
  let depth = 0
  for (let i = startIdx; i < source.length; i++) {
    const ch = source[i]
    if (ch === '[') depth++
    else if (ch === ']') {
      depth--
      if (depth === 0) return source.slice(startIdx, i + 1)
    }
  }
  throw new Error(`Unclosed array for ${varName}`)
}

function iconToName(part) {
  const m = part.match(/<(\w+)\s+size=/)
  return m ? m[1] : part.match(/icon:\s*(\w+)/)?.[1] ?? null
}

function parseClassicPain(block) {
  const items = []
  const re = /\{\s*icon:\s*(\w+),\s*value:\s*'((?:\\'|[^'])*)',\s*label:\s*'((?:\\'|[^'])*)'/gs
  let m
  while ((m = re.exec(block))) items.push({ icon: m[1], value: m[2], label: m[3] })
  return items
}

function parseModernPain(block) {
  const items = []
  const re = /\{\s*stat:\s*'((?:\\'|[^'])*)',\s*text:\s*'((?:\\'|[^'])*)',\s*icon:\s*<(\w+)/gs
  let m
  while ((m = re.exec(block))) items.push({ icon: m[3], value: m[1], label: m[2] })
  return items
}

function parseValueClassic(block) {
  const items = []
  for (const part of block.split(/\},\s*\{/)) {
    const icon = part.match(/icon:\s*(\w+)/)?.[1]
    const title = part.match(/title:\s*'((?:\\'|[^'])*)'/)?.[1]
    const desc = part.match(/desc:\s*'((?:\\'|[^'])*)'/)?.[1]
    const color = part.match(/color:\s*'((?:\\'|[^'])*)'/)?.[1]
    if (icon && title && desc && color) items.push({ icon, title, desc, color })
  }
  return items
}

function parseValueModern(block) {
  const items = []
  for (const part of block.split(/\},\s*\{/)) {
    const icon = iconToName(part)
    const title = part.match(/title:\s*'((?:\\'|[^'])*)'/)?.[1]
    const body = part.match(/body:\s*'((?:\\'|[^'])*)'/)?.[1]
    if (icon && title && body) items.push({ icon, title, desc: body, color: '' })
  }
  return items
}

function parseWalkthroughClassic(block) {
  const tabs = []
  const re =
    /id:\s*'([^']+)',\s*label:\s*'((?:\\'|[^'])*)',\s*icon:\s*(\w+),\s*imgSrc:\s*'([^']+)',\s*imgAlt:\s*'((?:\\'|[^'])*)',\s*imgW:\s*(\d+),\s*imgH:\s*(\d+),\s*steps:\s*\[([\s\S]*?)\]\s*,?\s*(?=\}|$)/g
  let m
  while ((m = re.exec(block))) {
    const steps = []
    const stepRe = /title:\s*'((?:\\'|[^'])*)',\s*desc:\s*'((?:\\'|[^'])*)'/g
    let sm
    while ((sm = stepRe.exec(m[8]))) steps.push({ title: sm[1], desc: sm[2] })
    tabs.push({
      id: m[1],
      label: m[2],
      icon: m[3],
      imgSrc: m[4],
      imgAlt: m[5],
      imgW: Number(m[6]),
      imgH: Number(m[7]),
      steps,
    })
  }
  return tabs
}

function parseWalkthroughModern(block) {
  const tabs = []
  const re =
    /id:\s*'([^']+)',\s*label:\s*'((?:\\'|[^'])*)',\s*icon:\s*<(\w+)[^>]*>,[\s\S]*?steps:\s*\[([\s\S]*?)\],\s*imgSrc:\s*'([^']+)',\s*imgAlt:\s*'((?:\\'|[^'])*)'/g
  let m
  while ((m = re.exec(block))) {
    const steps = []
    const stepRe = /title:\s*'((?:\\'|[^'])*)',\s*body:\s*'((?:\\'|[^'])*)'/g
    let sm
    while ((sm = stepRe.exec(m[4]))) steps.push({ title: sm[1], desc: sm[2] })
    tabs.push({
      id: m[1],
      label: m[2],
      icon: m[3],
      imgSrc: m[5],
      imgAlt: m[6],
      imgW: 880,
      imgH: 540,
      steps,
    })
  }
  return tabs
}

function parseFaqs(block) {
  const items = []
  const re = /q:\s*'((?:\\'|[^'])*)',\s*a:\s*'((?:\\'|[^'])*)'/gs
  let m
  while ((m = re.exec(block))) items.push({ q: m[1], a: m[2] })
  return items
}

function parseRelatedClassic(block) {
  const items = []
  const re =
    /id:\s*'([^']+)',\s*icon:\s*(\w+),\s*color:\s*'((?:\\'|[^'])*)',\s*bg:\s*'((?:\\'|[^'])*)',\s*title:\s*'((?:\\'|[^'])*)',\s*desc:\s*'((?:\\'|[^'])*)'/gs
  let m
  while ((m = re.exec(block))) {
    items.push({ id: m[1], icon: m[2], color: m[3], bg: m[4], title: m[5], desc: m[6] })
  }
  return items
}

function parseRelatedModern(block) {
  const items = []
  const re =
    /to:\s*'([^']+)',\s*icon:\s*<(\w+)[^>]*>,\s*title:\s*'((?:\\'|[^'])*)',\s*body:\s*'((?:\\'|[^'])*)'/gs
  let m
  while ((m = re.exec(block))) items.push({ to: m[1], icon: m[2], title: m[3], body: m[4] })
  return items
}

function q(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function emitObject(obj, indent = 2) {
  const sp = ' '.repeat(indent)
  if (typeof obj === 'string') return `'${q(obj)}'`
  if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj)
  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]'
    return `[\n${obj.map((v) => `${sp}  ${emitObject(v, indent + 2)},`).join('\n')}\n${sp}]`
  }
  return `{\n${Object.entries(obj)
    .map(([k, v]) => `${sp}  ${k}: ${emitObject(v, indent + 2)},`)
    .join('\n')}\n${sp}}`
}

function themeToTs(theme) {
  const lines = Object.entries(theme).map(([k, v]) => `    ${k}: '${v}',`)
  return `{\n${lines.join('\n')}\n  }`
}

function generateModule(meta) {
  const source = fs.readFileSync(path.join(pagesDir, meta.page), 'utf8')
  const painBlock = extractBlock(source, meta.painArray)
  const valueBlock = extractBlock(source, meta.valueArray)
  const walkBlock = extractBlock(source, meta.walkthroughArray)
  const faqBlock = extractBlock(source, meta.faqArray)
  const relatedBlock = extractBlock(source, meta.relatedArray)

  const isClassic = meta.layout === 'classic'
  const pain = isClassic ? parseClassicPain(painBlock) : parseModernPain(painBlock)
  const valueCards = isClassic ? parseValueClassic(valueBlock) : parseValueModern(valueBlock)
  const walkTabs = isClassic ? parseWalkthroughClassic(walkBlock) : parseWalkthroughModern(walkBlock)
  const faqs = parseFaqs(faqBlock)
  const relatedItems = isClassic ? parseRelatedClassic(relatedBlock) : parseRelatedModern(relatedBlock)

  const iconSet = new Set([
    meta.hero.badgeIcon,
    meta.cta.icon,
    ...pain.map((p) => p.icon),
    ...valueCards.map((c) => c.icon),
    ...walkTabs.map((t) => t.icon),
    ...relatedItems.map((r) => r.icon),
  ])
  if (meta.hero.microStatsPills) meta.hero.microStatsPills.forEach((p) => iconSet.add(p.icon))
  if (meta.cta.trustBadges) meta.cta.trustBadges.forEach((t) => iconSet.add(t.icon))

  const icons = [...iconSet].sort()

  let file = `import type { ModulePageConfig } from '../../types/module'\nimport {\n`
  file += icons.map((i) => `  ${i},`).join('\n')
  file += `\n} from 'lucide-react'\n\n`
  file += `export const ${meta.exportName}: ModulePageConfig = {\n`
  file += `  layout: '${meta.layout}',\n`
  file += `  theme: ${themeToTs(meta.theme)},\n`
  file += `  back: ${emitObject(meta.back)},\n`
  file += `  hero: {\n`
  file += `    badgeIcon: ${meta.hero.badgeIcon},\n`
  file += `    badgeLabel: '${q(meta.hero.badgeLabel)}',\n`
  file += `    title: ${meta.hero.titleJsx},\n`
  file += `    description: '${q(meta.hero.description)}',\n`
  if (meta.hero.microStatsClassic) file += `    microStatsClassic: ${emitObject(meta.hero.microStatsClassic)},\n`
  if (meta.hero.microStatsPills) {
    file += `    microStatsPills: [\n`
    for (const p of meta.hero.microStatsPills) {
      file += `      { icon: ${p.icon}, label: '${q(p.label)}' },\n`
    }
    file += `    ],\n`
  }
  file += `    primaryCtaLabel: '${q(meta.hero.primaryCtaLabel)}',\n`
  if (meta.hero.primaryCtaHoverGlow) file += `    primaryCtaHoverGlow: true,\n`
  file += `    secondaryCtaLabel: '${q(meta.hero.secondaryCtaLabel)}',\n`
  if (meta.hero.secondaryCtaToFeatures) file += `    secondaryCtaToFeatures: true,\n`
  file += `    image: ${emitObject(meta.hero.image)},\n`
  if (meta.hero.imageAnimation) file += `    imageAnimation: '${meta.hero.imageAnimation}',\n`
  file += `  },\n`
  file += `  pain: {\n    stats: [\n`
  for (const p of pain) {
    file += `      { icon: ${p.icon}, value: '${q(p.value)}', label: '${q(p.label)}' },\n`
  }
  file += `    ],\n`
  if (meta.painFootnote) file += `    footnote: '${q(meta.painFootnote)}',\n`
  file += `  },\n`
  file += `  value: {\n`
  file += `    sectionLabel: '${q(meta.value.sectionLabel)}',\n`
  file += `    title: '${q(meta.value.title)}',\n`
  file += `    subtitle: '${q(meta.value.subtitle)}',\n`
  file += `    cards: [\n`
  for (const c of valueCards) {
    file += `      { icon: ${c.icon}, title: '${q(c.title)}', desc: '${q(c.desc)}', color: '${q(c.color)}' },\n`
  }
  file += `    ],\n  },\n`
  file += `  walkthrough: {\n`
  file += `    sectionLabel: '${q(meta.walkthrough.sectionLabel)}',\n`
  file += `    title: '${q(meta.walkthrough.title)}',\n`
  file += `    subtitle: '${q(meta.walkthrough.subtitle)}',\n`
  file += `    tabs: [\n`
  for (const t of walkTabs) {
    file += `      {\n        id: '${q(t.id)}',\n        label: '${q(t.label)}',\n        icon: ${t.icon},\n`
    file += `        imgSrc: '${q(t.imgSrc)}',\n        imgAlt: '${q(t.imgAlt)}',\n        imgW: ${t.imgW},\n        imgH: ${t.imgH},\n        steps: [\n`
    for (const s of t.steps) {
      file += `          { title: '${q(s.title)}', desc: '${q(s.desc)}' },\n`
    }
    file += `        ],\n      },\n`
  }
  file += `    ],\n  },\n`
  file += `  faq: {\n`
  if (meta.faq.titleJsx) file += `    title: ${meta.faq.titleJsx},\n`
  else file += `    title: '${q(meta.faq.title)}',\n`
  file += `    subtitle: '${q(meta.faq.subtitle ?? '')}',\n    items: [\n`
  for (const f of faqs) {
    file += `      { q: '${q(f.q)}', a: '${q(f.a)}' },\n`
  }
  file += `    ],\n  },\n`
  if (isClassic) {
    file += `  related: {\n    layout: 'classic',\n    title: '${q(meta.related.title)}',\n`
    if (meta.related.subtitle) file += `    subtitle: '${q(meta.related.subtitle)}',\n`
    file += `    items: [\n`
    for (const r of relatedItems) {
      file += `      { id: '${q(r.id)}', icon: ${r.icon}, color: '${q(r.color)}', bg: '${q(r.bg)}', title: '${q(r.title)}', desc: '${q(r.desc)}' },\n`
    }
    file += `    ],\n  },\n`
  } else {
    file += `  related: {\n    layout: 'modern',\n    title: ${meta.related.titleJsx},\n`
    if (meta.related.subtitle) file += `    subtitle: '${q(meta.related.subtitle)}',\n`
    file += `    items: [\n`
    for (const r of relatedItems) {
      file += `      { to: '${q(r.to)}', icon: ${r.icon}, title: '${q(r.title)}', body: '${q(r.body)}' },\n`
    }
    file += `    ],\n  },\n`
  }
  file += `  cta: {\n    layout: '${meta.cta.layout}',\n    icon: ${meta.cta.icon},\n`
  if (meta.cta.eyebrow) file += `    eyebrow: '${q(meta.cta.eyebrow)}',\n`
  file += `    title: ${meta.cta.titleJsx},\n`
  file += `    description: '${q(meta.cta.description)}',\n`
  file += `    primaryLabel: '${q(meta.cta.primaryLabel)}',\n`
  file += `    secondaryLabel: '${q(meta.cta.secondaryLabel)}',\n`
  if (meta.cta.secondaryToFeatures) file += `    secondaryToFeatures: true,\n`
  if (meta.cta.trustBadges) {
    file += `    trustBadges: [\n`
    for (const t of meta.cta.trustBadges) {
      file += `      { icon: ${t.icon}, text: '${q(t.text)}' },\n`
    }
    file += `    ],\n`
  }
  file += `  },\n}\n`
  return file
}

fs.mkdirSync(outDir, { recursive: true })
for (const meta of MODULES) {
  const out = generateModule(meta)
  fs.writeFileSync(path.join(outDir, `${meta.key}.tsx`), out, 'utf8')
  console.log('Wrote', meta.key + '.tsx', `(${out.split('\n').length} lines)`)
}
