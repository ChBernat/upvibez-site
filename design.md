---
name: Archify Web
description: Archify adapted from diagram instrument to a single marketing page for UpVibez.
colors:
  canvas: "#050318"
  mask: "#0F0B2E"
  ink: "#FFFFFF"
  muted: "#A79BD1"
  dim: "#59508C"
  border: "#241C4D"
  scheduled: "#7C3AED"
  playing: "#2F8FF0"
  cached: "#E06FC4"
  licensed: "#3FC6E8"
  silent: "#59508C"
typography:
  display:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "clamp(2rem, 5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  section:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.005em"
  body:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  meta:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0.1em"
rounded:
  precise: "0.2rem"
  control: "0.5rem"
  panel: "1rem"
  pill: "999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  section: "6rem"
  page: "2rem"
layout:
  measure: "62ch"
  column: "1120px"
  gutter: "clamp(1.5rem, 5vw, 4rem)"
components:
  primary-action:
    backgroundColor: "{colors.scheduled}"
    textColor: "{colors.canvas}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.25rem"
    height: "2.75rem"
  quiet-action:
    backgroundColor: "transparent"
    borderColor: "{colors.border}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.25rem"
    height: "2.75rem"
  panel:
    backgroundColor: "{colors.mask}"
    borderColor: "{colors.border}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "1.5rem"
  schedule-block:
    backgroundColor: "{colors.mask}"
    borderColor: "{colors.border}"
    typography: "{typography.meta}"
    rounded: "{rounded.precise}"
    height: "2rem"
  state-chip:
    backgroundColor: "transparent"
    borderColor: "{colors.border}"
    textColor: "{colors.muted}"
    typography: "{typography.meta}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.625rem"
---

# Design System: Archify Web

## Overview

**Creative north star: the schedule is the hero.**

Archify was built as an instrument for reading architecture diagrams. This adaptation keeps its discipline, its midnight canvas, and its single mono voice, and points them at one job: convincing a partnerships manager or a chain operations lead, in under a minute, that UpVibez is a serious piece of infrastructure.

The page stays dark, flat, and precise, because the product it describes is scheduling software that runs unattended in hundreds of venues. It should feel closer to a control surface than to a SaaS brochure. The one thing a visitor should remember is a timeline of music blocks laid out across a day, with rooms stacked underneath it.

**What changes from Archify:**

- Type scales up. Diagram metadata sizes are unreadable as prose, so the ladder is rebuilt for a page that people read rather than scan.
- The semantic palette is re-mapped from diagram node categories to product states. The colors and their scarcity are unchanged; what they mean is.
- Scroll and section rhythm replace the toolbar and canvas chrome.
- Color still never decorates. On a marketing page this is the discipline that keeps it from turning into a gradient deck. The one exception is the wordmark itself, which keeps its own native gradient as a brand mark — nowhere else on the page uses one.

## Colors

The palette is drawn from the UpVibez wordmark: a deep indigo canvas, four signals lifted from the mark's own blue-to-violet-to-magenta run, and a lavender-tinted text ladder. Nothing else.

### Surfaces

- **Canvas** `#050318`, the page.
- **Mask** `#0F0B2E`, panels, the schedule grid, cards.
- **Border** `#241C4D`, every hairline. One pixel, always.

### Text

- **Ink** `#FFFFFF`, headlines and primary copy.
- **Muted** `#A79BD1`, secondary copy and supporting lines.
- **Dim** `#59508C`, metadata, timestamps, footnotes.

### Semantic signals

Each one maps to a product state and appears only where that state is being shown.

- **Scheduled** `#7C3AED`. The primary path: a programmed block, the main action, focus rings, links. This is the wordmark's own dominant violet. Its scarcity is what creates hierarchy, so if it is on more than a fifth of the page it is being used as decoration.
- **Playing** `#2F8FF0`. Live state, confirmation, the offline cache holding. The wordmark's top-of-mark blue.
- **Cached** `#E06FC4`. Stored and persisted things: the week of downloaded audio, playback history, the record of what played where. The wordmark's magenta.
- **Licensed** `#3FC6E8`. Rights and compliance. This is the section partners read first, and this cyan is the only place it appears. The wordmark's lightest, coolest blue.
- **Silent** `#59508C`. An unprogrammed slot. Not a color so much as an absence, and worth showing, because empty slots are what the product exists to fill.

### Named rules

**The semantic color rule.** A saturated color states that something is scheduled, playing, cached, or licensed. If it is not saying one of those four things, it does not appear.

**The one accent per section rule.** A section carries at most one semantic color plus the neutral ladder. Two saturated colors in one viewport means the meaning has stopped being legible.

**The gradient exception.** The wordmark is the only place a gradient appears anywhere on the page. It is dropped in as a fixed asset, never recreated in CSS, and never echoed elsewhere: no button, panel, or heading picks up a gradient fill just because the logo has one.

## Typography

**One family: JetBrains Mono**, with system monospace fallbacks. No second face, no serif for contrast. A single mono voice is what makes the page read as authored by engineers rather than assembled from a template, and it earns its place because half the content on the page is time.

### Hierarchy

- **Display** `clamp(2rem, 5vw, 3.25rem)` / 700 / 1.08 / -0.03em. The hero line, once per page.
- **Section** `1.375rem` / 600 / 1.25. Section headings.
- **Lede** `1.0625rem` / 400 / 1.6. The one paragraph under a heading that has to land.
- **Body** `0.9375rem` / 400 / 1.7. Everything else that is read.
- **Meta** `0.75rem` / 700 / 0.1em, uppercase. Times, room names, state labels, footer. Never a sentence.

### Named rules

**The legibility floor rule.** Meta size is for data. The moment it forms a clause, promote it to body.

**The measure rule.** Prose stops at 62 characters. Mono is wide, so a line that looks short in a serif is already too long here.

**No caps eyebrows.** Uppercase belongs on data labels inside the interface language, not stacked above every heading as decoration.

## Layout

A single column, 1120px maximum, left aligned. Centered text is for the hero line only, and even there, left is the safer choice.

Sections are separated by 6rem of vertical space and nothing else. No dividers, no alternating background bands. The canvas is continuous; the panels are the structure.

```
┌──────────────────────────────────────────────┐
│  upvibez                          contact    │  56px bar, border-bottom
├──────────────────────────────────────────────┤
│                                              │
│  Schedule music to the minute,               │  display
│  months ahead, room by room.                 │
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │ 06  09  12  15  18  21  24             │  │  the hero: a live schedule
│  │ Lobby   ▓▓▓▓▓░░░░▓▓▓▓▓▓▓▓░░░▓▓▓▓        │  │
│  │ Restaurant  ░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓         │  │
│  │ Spa     ▓▓▓▓▓▓▓▓░░░░░░░░░░░░            │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  6rem                                        │
│                                              │
│  Scheduling                                  │  section + lede + body
│  ...                                         │
└──────────────────────────────────────────────┘
```

The hero schedule is the only element on the page allowed to be visually ambitious. Everything below it is quiet.

## Components

### The schedule grid

The signature element. A horizontal time axis in meta type, rooms stacked as rows, blocks drawn as `schedule-block` rectangles at `0.2rem` corners. Programmed blocks carry scheduled violet at low fill with a one pixel border; unprogrammed stretches use silent lavender-gray. A single block may show playing blue to indicate now.

Draw it in inline SVG or CSS grid, not as an image, and keep it accurate to the product: minute granularity, rooms independent, a venue default row when no rooms exist.

### Panels

Mask background, one pixel border, `1rem` corners, `1.5rem` padding. Flat. No shadow at rest.

Do not chop the page into a grid of identical panels. A panel is for content that is genuinely a bounded object, such as the offline cache state or the compliance record. Prose lives directly on the canvas.

### Actions

One primary action on the page, violet fill on canvas text. Everything else is a quiet action, transparent with a border. Buttons say what happens. No arrows appended to the label.

### State chips

Bordered pills at meta size for things like a room name or a cache status. A chip carries the semantic color of the state it names, or stays muted. Never icon only.

## Motion

State transitions 140 to 200ms. One orchestrated moment on the page, and it belongs to the schedule grid: blocks drawing in across the timeline, once, on load, finishing in under a second.

No scroll triggered fades on every section. No hover lift on cards. `prefers-reduced-motion` renders the schedule in its final state immediately.

## Writing

Sentence case. Active voice. No em dashes. No exclamation marks.

Describe the mechanism, not the benefit. "Caches a week of music and keeps playing when the connection drops" is the line. "Never miss a beat" is not.

Use the venue's vocabulary: venue, room, zone, schedule, slot, playlist, licence. Avoid platform, solution, seamless, elevate, curate as a verb applied to us.

The compliance section is the one that closes partners. Be plain and specific there: what is licensed, who holds the licence, what evidence of playback we produce.

## Do and don't

### Do

- Let the schedule grid be the memorable thing and keep everything else disciplined.
- Keep every saturated color tied to one of the four product states.
- Hold prose to 62 characters and body size or larger.
- Ship visible keyboard focus, a two pixel violet ring at two pixel offset.
- Check contrast against the canvas, particularly dim text on mask panels.

### Don't

- Don't add a fifth accent, a glass panel, or a glow. Don't recreate the wordmark's gradient anywhere else on the page; it stays a fixed asset, and everything else stays flat.
- Don't build a grid of identical feature cards with the same shadow under each.
- Don't put a tracked out uppercase eyebrow above every heading.
- Don't animate sections in as the user scrolls.
- Don't add pricing, a trial, or a signup funnel. This page opens a conversation with a partner.
- Don't invent product capability in copy. If the product cannot do it yet, it does not go on the page.
