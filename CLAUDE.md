# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

The UpVibez marketing landing page. One page, static, hosted on AWS Amplify.

UpVibez is music scheduling software for hotel and restaurant groups. Venues schedule music weeks or months ahead, down to the minute, per room, and the player keeps running offline. Billing is a monthly fee per venue.

**Purpose of this site right now:** it convinces a venue owner or manager — hotel, restaurant, bar, spa — that UpVibez is worth a look. Assume the reader is not technical and is busy: a general manager, not an engineer or a partnerships contact. It leans on photography and energy more than on mechanism. It still isn't a hard signup funnel; the waitlist is the low-commitment ask, and pricing/a free trial stay off the page unless asked for.

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

## Design system: Archify Vibe

The full system is in `design.md` and it is authoritative. Read it before touching visual code. It supersedes the original all-mono, one-accent Archify Web system — that version was built for a technical partnerships reader; this one is for a non-technical venue owner. Summary of what binds now:

**Colors.** Dark first, palette drawn from the UpVibez wordmark. Canvas `#050318`, panels `#0F0B2E`, borders `#241C4D`. Text ladder: `#FFFFFF` ink, `#A79BD1` muted, `#59508C` dim.

Saturated UI color (chips, blocks, buttons, focus rings) is still semantic: violet `#7C3AED` primary/focus, blue `#2F8FF0` live/confirmed, magenta `#E06FC4` stored/persisted, cyan `#3FC6E8` licensing/compliance. Up to two of these per viewport is fine now (was one). Photography's natural color doesn't count against that budget at all.

**Type.** Two families. Poppins for anything read as a sentence — headlines, body, buttons. JetBrains Mono for anything read as data — timestamps, room/venue labels, state chips. Display `clamp(2.5rem,6vw,4.25rem)/700`, section `1.75rem/700`, lede `1.1875rem/500`, body `1rem/400`, meta `0.75rem/700` uppercase mono.

Where a paragraph needs to be read rather than scanned, keep it at body scale and under about 68 characters per line. The Legibility Floor rule still applies: meta size is for metadata, not sentences.

**Photography.** Real, candid-feeling photos of venues and guests, not staged corporate stock. Every playlist/album/track shown in the product mock gets a real square photo standing in for cover art. A photo behind text always carries a canvas-to-transparent scrim for legibility.

**Surfaces.** Flat at rest. Border and tone carry structure. No gradients, no glass, no glow as decoration, except the wordmark's own gradient (fixed asset, never recreated) and a legibility scrim over a photo.

**Corners.** `0.2rem` precise, `0.75rem` controls, `1.25rem` panels, `999px` pills.

**Spacing scale.** 0.25 / 0.5 / 0.75 / 1 / 1.5 / 2rem. Stay on it.

**Motion.** State transitions 140 to 200ms. One orchestrated moment at most. Honour `prefers-reduced-motion`. No fade-and-slide on every section.

## Page content

Sections, in order. Keep it to this unless asked.

1. **Hero.** A photo that makes a venue owner feel the vibe, paired with a short, warm headline. The schedule mechanism is proven later, not up front.
2. **Scheduling.** How easy it is to set up, in plain language, with the live scheduler mock as proof for anyone who wants to poke at it.
3. **Playback.** Multiple devices, rooms, and venues, framed as "it just runs," not as an infrastructure claim.
4. **Compliance.** Licensed playback and a record of what played where. Kept honest and plain even though the tone elsewhere is warmer.
5. **Waitlist.** For venues that want early access, separate from the main contact ask.
6. **Contact.** One clear action to start a conversation.

## Writing

Sentence case throughout. Active voice. Short sentences a busy general manager can read in ten seconds. No em dashes.

Speak to the person who runs the venue, not the schedule engine underneath it. Save mechanism-level detail (minute-level scheduling, offline caching) for Scheduling/Playback/Compliance, and keep it plain and honest there too — a warmer voice is not a license to invent a capability the product doesn't have. Exclamation marks are fine in small doses where the energy is real; don't force one onto every line.

Avoid the generated-page tells: all caps eyebrow labels above headings, meta strings joined with middle dots, arrows appended to button text, numbered markers on content that is not a sequence.

## Quality floor

Responsive to mobile. Visible keyboard focus, violet ring, 2px, 2px offset. Reduced motion respected. Semantic HTML. Contrast checked against the dark canvas, and against any scrim over a photo. Every stock photo used should look like a real moment, not a staged corporate handshake shot.

## Before you finish

Read the page as a venue owner with no technical background, skimming it on a phone between tasks. If it doesn't make them smile within a few seconds and feel like the product would just work without them thinking about it, the page hasn't done its job yet.
