# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

The UpVibez marketing landing page. One page, static, hosted on AWS Amplify.

UpVibez is music scheduling software for hotel and restaurant groups. Venues schedule music weeks or months ahead, down to the minute, per room, and the player keeps running offline. Billing is a monthly fee per venue.

**Purpose of this site right now:** it is the credibility surface we point licensing and distribution partners at, Soundtrack first. It is not a signup funnel. Assume the reader is a partnerships manager or a chain operations lead, not a consumer. Do not add pricing, a product tour, or a free trial unless asked.

## Stack

Plain HTML, CSS, and vanilla JS. No framework, no bundler, no build step.

```
/index.html
/styles.css
/main.js          only if a section genuinely needs behaviour
/assets/          fonts, images, favicon
/amplify.yml
```

Do not introduce React, Tailwind, Astro, or a package manager without being asked. If a task seems to need one, say so first.

There is no backend. The contact path is a `mailto:` link or a third party form endpoint. Never add an API, a database, or an Amplify backend category.

## Deploy

Amplify Hosting builds from the connected branch. `amplify.yml`:

```yaml
version: 1
frontend:
  phases:
    build:
      commands: []
  artifacts:
    baseDirectory: /
    files:
      - '**/*'
  cache:
    paths: []
```

Local preview: `python3 -m http.server 8080`.

## Design system: Archify

The full system is in `design.md` and it is authoritative. Read it before touching visual code. Summary of what binds:

**Colors.** Dark first, palette drawn from the UpVibez wordmark. Canvas `#050318`, panels `#0F0B2E`, borders `#241C4D`. Text ladder: `#FFFFFF` ink, `#A79BD1` muted, `#59508C` dim.

Saturated color is semantic, never decorative. On this page the only ones that should appear are violet `#7C3AED` for the primary path and focus, blue `#2F8FF0` for live or confirmed state, magenta `#E06FC4` for stored or persisted things, cyan `#3FC6E8` for licensing and compliance. If a color is not carrying meaning, do not use it.

**Type.** JetBrains Mono everywhere, with system mono fallbacks. One family only. Headline 1.5rem/700, title 0.875rem/600, body 0.75rem/400, label 0.625rem/700 uppercase with 0.12em tracking.

Body at 0.75rem is tight for marketing prose. Where a paragraph needs to be read rather than scanned, promote it to body scale at a comfortable size and keep the line length under 80 characters. The Legibility Floor rule applies: label size is for metadata, not sentences.

**Surfaces.** Flat at rest. Border and tone carry structure. Shadows only for floating panels or active focus, using the vocabulary in `design.md`. No gradients, no glass, no glow as decoration, except the wordmark itself, which keeps its own native gradient as a fixed brand asset and is never recreated in CSS.

**Corners.** `0.2rem` precise, `0.5rem` controls, `1rem` panels, `999px` pills.

**Spacing scale.** 0.25 / 0.5 / 0.75 / 1 / 1.5 / 2rem. Stay on it.

**Motion.** State transitions 140 to 200ms. One orchestrated moment at most. Honour `prefers-reduced-motion`. No fade-and-slide on every section.

## Page content

Sections, in order. Keep it to this unless asked.

1. **Hero.** What UpVibez does, in one line a chain operator would recognise. The most characteristic thing about the product is the schedule itself, so the hero should show a schedule rather than describe one.
2. **Scheduling.** Minute level, months ahead, per room, with a venue default when no rooms are defined.
3. **Playback.** Desktop and tablet apps, external volume control, per room output, one week of music cached and looping when the connection drops.
4. **Compliance.** Licensed playback and a record of what played where. This is the section partners care about most.
5. **Contact.** One clear action for partnership enquiries.

## Writing

Sentence case throughout. Active voice. Plain verbs. No em dashes.

Say what the product does, do not sell it. "Schedule music to the minute, months ahead" beats "revolutionise your venue's sonic identity". Name things the way a venue manager would.

Avoid the generated-page tells: all caps eyebrow labels above headings, one word in a headline picked out in an accent color, meta strings joined with middle dots, arrows appended to button text, numbered markers on content that is not a sequence.

## Quality floor

Responsive to mobile. Visible keyboard focus, cyan ring, 2px, 2px offset. Reduced motion respected. Semantic HTML. Contrast checked against the dark canvas. No decorative divs.

## Before you finish

Read the page as a partnerships manager at a licensing company. If nothing on it tells them what we would need from them and what we bring, the page has not done its job yet.
