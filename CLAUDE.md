# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

The UpVibez marketing landing page. One page, static, hosted on AWS Amplify.

UpVibez is music scheduling software for hotel and restaurant groups. Venues schedule music weeks or months ahead, down to the minute, per room, and the player keeps running offline. Billing is a monthly fee per venue.

**Purpose of this site right now:** it convinces the non-technical leadership of a hotel or restaurant group — someone who thinks in properties and a portfolio, not a single room — that UpVibez is worth a look. Not an engineer, not a partnerships contact. The register is elegant and aspirational, closer to a hospitality group's own site (think Dubai Holding's hospitality pages) than a casual consumer pitch: confident and polished, never slangy or overselling. It leans on photography and scale more than on mechanism. It still isn't a hard signup funnel; the waitlist is the low-commitment ask, and pricing/a free trial stay off the page unless asked for.

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

**Photography.** Elegant, aspirational photos of properties, pitched at the register a hospitality group would use for its own brand photography, not casual snapshots and never a nightlife/club scene. Every playlist/album/track shown in the product mock gets a real square photo standing in for cover art. A photo behind text always carries a canvas-to-transparent scrim for legibility.

**Surfaces.** Flat at rest. Border and tone carry structure. No gradients, no glass, no glow as decoration, except the wordmark's own gradient (fixed asset, never recreated) and a legibility scrim over a photo.

**Corners.** `0.2rem` precise, `0.75rem` controls, `1.25rem` panels, `999px` pills.

**Spacing scale.** 0.25 / 0.5 / 0.75 / 1 / 1.5 / 2rem. Stay on it.

**Motion.** State transitions 140 to 200ms. Sections and photo cards use a single shared `.reveal` pattern (soft fade + rise, 700ms, via IntersectionObserver in `main.js`) the first time they scroll into view, once each, never re-triggering. The venue-strip cards stagger slightly; the energy-band photo has a subtle scroll-linked parallax. Honour `prefers-reduced-motion`: both are fully disabled (CSS forces `.reveal` to its final state; the parallax listener never attaches).

## Page content

Sections, in order. Keep it to this unless asked.

1. **Hero.** A photo that reads as a landmark property, paired with a short headline pitched at portfolio scale. The schedule mechanism is proven later, not up front.
2. **Scheduling.** How easy it is to set up across a whole group, in plain language, with the live scheduler mock as proof for anyone who wants to poke at it.
3. **Playback.** Multiple devices, rooms, and properties, framed as "it just runs," not as an infrastructure claim.
4. **Compliance.** Licensed playback and a record of what played where. Kept honest and plain even though the tone elsewhere is more elevated.
5. **Waitlist.** For groups that want early access, separate from the main contact ask.
6. **Contact.** One clear action to start a conversation.

## Writing

Sentence case throughout. Active voice. Short sentences a busy group executive can read in ten seconds. No em dashes, no exclamation marks — composed, not excitable.

Speak to the person who owns or runs the group, not the schedule engine underneath it, and write at the scale they operate at: properties and a portfolio, not one room. Save mechanism-level detail (minute-level scheduling, offline caching) for Scheduling/Playback/Compliance, and keep it plain and honest there too — a more polished voice is not a license to invent a capability the product doesn't have. Avoid anything that reads as slang or overly casual; say the same thing plainly and with more polish instead.

Avoid the generated-page tells: all caps eyebrow labels above headings, meta strings joined with middle dots, arrows appended to button text, numbered markers on content that is not a sequence.

## Quality floor

Responsive to mobile. Visible keyboard focus, violet ring, 2px, 2px offset. Reduced motion respected. Semantic HTML. Contrast checked against the dark canvas, and against any scrim over a photo. Every stock photo used should look like it belongs on a hospitality group's own site: elegant and aspirational, never a staged corporate handshake shot and never a casual nightlife/club scene.

## Before you finish

Read the page as the non-technical leadership of a hotel or restaurant group, skimming it on a phone between meetings. If it doesn't read as polished and portfolio-scale within a few seconds, and feel like the product would just work without anyone thinking about it, the page hasn't done its job yet.
