---
name: Archify Vibe
description: Archify's precision loosened up with warmth, color, and elegant real photography for the non-technical leadership of hotel and restaurant groups.
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
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  section:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: "normal"
  body:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  meta:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0.08em"
rounded:
  precise: "0.2rem"
  control: "0.75rem"
  panel: "1.25rem"
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
  measure: "68ch"
  column: "1120px"
  gutter: "clamp(1.5rem, 5vw, 4rem)"
components:
  primary-action:
    backgroundColor: "{colors.scheduled}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.875rem 1.5rem"
    height: "3rem"
  quiet-action:
    backgroundColor: "transparent"
    borderColor: "{colors.border}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.875rem 1.5rem"
    height: "3rem"
  panel:
    backgroundColor: "{colors.mask}"
    borderColor: "{colors.border}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "1.5rem"
  photo-card:
    rounded: "{rounded.panel}"
    borderColor: "{colors.border}"
    overlayFrom: "rgba(5,3,24,0.85)"
    overlayTo: "rgba(5,3,24,0)"
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

# Design System: Archify Vibe

## Overview

**Creative north star: this feels like a landmark hospitality group's own site, not a piece of scheduling software.**

The original Archify was a control-panel aesthetic built for a partnerships manager reading a credibility page. That reader has changed twice now: first to a single non-technical venue owner, then refined further to the non-technical leadership of a hotel or restaurant group running a portfolio of properties — someone who thinks in brand standards, guest experience, and consistency across locations, not in schedules and compliance records. They are not impressed by an instrument panel, and they are not won over by a casual, clubby tone either. They are convinced by imagery and language pitched at the same register as a groups like Four Seasons or Dubai Holding's hospitality arm use to describe themselves: elegant, confident, a little aspirational, never overselling. Think landmark properties, not a night out.

So the page keeps its midnight canvas, its logo-derived palette, and its honest, no-invented-capability spine — but it now shows real venues and real guests, uses a warm display typeface instead of an all-mono voice, and lets color and photography carry energy instead of only meaning.

**What changes from the original Archify Web:**

- A second typeface arrives. Poppins carries headlines, body copy, and buttons — warm, rounded, easy to read at a glance. JetBrains Mono is demoted to what it's genuinely good at: timestamps, room labels, state chips, the schedule grid. It's now a supporting accent, not the whole voice.
- Photography becomes a first-class material. Real, candid-feeling photos of venues and guests carry the emotional weight the copy used to carry alone.
- Color loosens. The four signal colors still mean what they meant, but the strict "one accent per viewport" rule is relaxed to two, and photography is not counted against that budget at all — a photo is not a decorative color choice.
- The schedule grid is no longer the only visually ambitious thing on the page. It shares that role with the hero photo and the energy section. It is still the proof the product works; it is no longer the only reason to keep scrolling.
- Copy gets shorter, plainer, and warmer. Sentences a busy general manager can read in the ten seconds between tasks. Exclamation marks are allowed now, in small doses, where the energy is real.

## Colors

Same wordmark-derived palette as before. What changes is how liberally it's allowed to appear.

### Surfaces

- **Canvas** `#050318`, the page.
- **Mask** `#0F0B2E`, panels, cards, the schedule grid.
- **Border** `#241C4D`, every hairline. One pixel, always.

### Text

- **Ink** `#FFFFFF`, headlines and primary copy.
- **Muted** `#A79BD1`, secondary copy and supporting lines.
- **Dim** `#59508C`, metadata, timestamps, footnotes.

### Semantic signals

- **Scheduled** `#7C3AED`. The primary path: the main action, focus rings, links, a programmed block.
- **Playing** `#2F8FF0`. Live state, confirmation.
- **Cached** `#E06FC4`. Stored and persisted things.
- **Licensed** `#3FC6E8`. Rights and compliance.
- **Silent** `#59508C`. An unprogrammed slot. Still not really a color — an absence.

### Named rules

**The semantic color rule, loosened.** A saturated color still states one of the four product states when it appears on UI chrome (chips, blocks, buttons, focus rings). That rule is unchanged. What's gone is the ban on any other color anywhere: photography brings its own natural color into the page, and that's welcome.

**Two accents per section.** Where the old system allowed one saturated UI color per viewport, this one allows two, because the page now has more going on (a photo plus a live product mock, say). Three or more in one viewport still reads as noise.

**The gradient exception, extended.** The wordmark keeps its gradient as a fixed asset, unrecreated elsewhere in UI chrome. Photographs may carry a dark scrim gradient (canvas to transparent) purely for text legibility over an image — that's a functional overlay, not a decorative gradient, and it's the one other place a gradient is allowed.

## Typography

**Two families now.** Poppins for anything a person reads as a sentence: headlines, ledes, body copy, buttons, nav. JetBrains Mono for anything that reads as data: timestamps, room and venue labels inside the product mock, state chips, the schedule axis. If it would make sense on a wristwatch, it's mono. If it would make sense in a conversation, it's Poppins.

### Hierarchy

- **Display** `clamp(2.5rem, 6vw, 4.25rem)` / 700 / 1.05 / -0.02em. Poppins. The hero line, once per page.
- **Section** `1.75rem` / 700 / 1.2. Poppins. Section headings.
- **Lede** `1.1875rem` / 500 / 1.55. Poppins. The paragraph under a heading that has to land.
- **Body** `1rem` / 400 / 1.7. Poppins. Everything else that is read.
- **Meta** `0.75rem` / 700 / 0.08em, uppercase. JetBrains Mono. Times, room names, state labels, footer. Never a sentence.

### Named rules

**The legibility floor rule.** Meta size is for data. The moment it forms a clause, promote it to body.

**The measure rule.** Prose stops at 68 characters, a touch looser than before since Poppins is narrower than mono.

**No caps eyebrows.** Uppercase belongs on data labels inside the product mock, not stacked above every heading as decoration.

## Photography

The single biggest change in this revision. Photos do the emotional work copy used to do alone.

- **Subject.** Elegant, well-composed moments inside the kind of properties UpVibez actually serves: a landmark restaurant dining room, a hotel lounge at golden hour, an elevated rooftop bar, a spa. Aspirational and polished, in the register of a hospitality group's own brand photography — never a casual snapshot, never a rowdy night-out or club scene, never an obviously staged stock-photo smile at the camera.
- **Treatment.** Full color, no duotone or brand-color wash required. Corners match the panel or control radius depending on size. A photo used as a background behind text always carries a canvas-to-transparent scrim strong enough to hold body-size text at full contrast.
- **Playlist covers.** Every playlist, album, or track shown anywhere in the product mock gets a real square photo standing in for its cover art, not an icon or a two-letter monogram. This is one of the most concrete ways the page shows the product is about real music in real rooms.
- **Captions.** Meta type, dim color, brief. A caption names the place or moment, it doesn't sell it — the photo already did that.

## Layout

A single column, 1120px maximum, left aligned except the hero, which may center or split against a photo. Sections are separated by 6rem of vertical space. The canvas is continuous; panels and photos are the structure.

The hero now pairs the display headline with a photo — full-bleed behind it, or side by side, but a photo is present in the hero. The schedule timeline moves to its own moment inside the product section rather than sitting inside the hero.

## Components

### The schedule grid

Still the signature proof-of-product element: a horizontal time axis in meta type, rooms or a single room's day stacked as rows, blocks drawn as `schedule-block` rectangles. Programmed blocks carry scheduled violet at low fill; unprogrammed stretches use silent lavender-gray; a block may show playing blue to indicate now.

### Panels

Mask background, one pixel border, generous corners, comfortable padding. A panel is for content that's genuinely a bounded object — the product mock, a stat, a form. Prose lives directly on the canvas.

### Photo cards

A photo in a rounded frame, optionally with a caption below or a scrim and copy on top. Used for the hero, the venue-type strip, and the energy section.

### Actions

One primary action per page, violet fill, ink-colored text. Everything else is a quiet action, transparent with a border. Buttons say what happens in plain words. Exclamation marks are fine here if the moment earns it — "Get on the list!" is fine; forcing one onto every button is not.

### State chips

Bordered pills at meta size for room names, cache status, playback state. Carries the semantic color of the state it names, or stays muted.

## Motion

State transitions 140 to 200ms. The schedule grid still draws itself in once on load.

**Scroll reveal.** A deliberate, later addition to this system: each section, and each photo card in the venue strip, carries a `.reveal` class — opacity 0 and translateY(28px) at rest, animating to its resting state the first time it scrolls into view (IntersectionObserver, 700ms, an easing curve with a soft overshoot-free deceleration). It fires once per element and never re-triggers on scroll back up. The venue-strip cards stagger by 120ms each, so they arrive as a small cascade rather than all at once. The energy-band photo has a subtle parallax, scaled slightly larger than its frame and nudged by scroll position, so it drifts rather than sitting static.

This reveal is restrained on purpose: one movement per element, no bounce, no rotation, no staggering longer than three items. It should read as quality, not as a template effect. `prefers-reduced-motion` disables both the reveal (elements render in their final state immediately, no transition) and the parallax (the scroll listener never attaches) — this is non-negotiable, not a nice-to-have.

## Writing

Sentence case. Active voice. No em dashes. No exclamation marks — the register here is composed, not excitable. Short sentences a non-technical group executive can read in ten seconds between meetings.

Speak to the person who owns or runs the group, not the software running the schedule, and write at the scale they operate at: properties and a portfolio, not one room. "Set it up once, and the right atmosphere plays itself, in every room, across every property" beats a sentence about blocks and slots. Save the mechanism-level detail (minute-level scheduling, offline caching) for the one section that has to prove it works, and keep it plain and honest there too.

Use the vocabulary of a hospitality group describing itself: property, portfolio, room, guest, standard. "Venue" still appears where it reads naturally, but "property" and "portfolio" are what signal scale. Avoid platform, solution, seamless, elevate, curate as a verb applied to us, and avoid anything that reads as slang or overly casual ("zero babysitting," "walk away") — say the same thing plainly and with more polish instead.

Don't invent product capability in copy — a more polished voice is not a license to promise something the product doesn't do.

## Do and don't

### Do

- Open with a photo that reads as a landmark property, before they've read a word.
- Give every playlist a real photo cover, everywhere it appears.
- Keep the schedule grid as proof, once the reader is already interested.
- Hold prose to 68 characters and body size or larger.
- Ship visible keyboard focus, a two pixel violet ring at two pixel offset.
- Check contrast against the canvas, and against any scrim over a photo.

### Don't

- Don't use a stiff, obviously-staged stock photo, and don't use a casual nightlife or club shot either. If it wouldn't sit comfortably on a hospitality group's own investor site, pick a different one.
- Don't put more than two saturated UI colors in one viewport, on top of whatever a photo brings in naturally.
- Don't add a tracked-out uppercase eyebrow above every heading.
- Don't recreate the wordmark's gradient as decoration; scrims over photos are the only other sanctioned gradient.
- Don't add pricing or a hard signup funnel outside the waitlist. This page opens a conversation, it doesn't try to close a sale.
- Don't invent product capability in copy. If the product cannot do it yet, it does not go on the page.
