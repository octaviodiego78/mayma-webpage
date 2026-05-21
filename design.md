---
version: alpha
name: YLLW
description: A stark, editorial real-estate system with oversized condensed headlines, minimal chrome, and a muted beige accent.
colors:
  primary: "#000000"
  secondary: "#212121"
  tertiary: "#cac7b4"
  neutral: "#ffffff"
  surface: "#ffffff"
  on-surface: "#212121"
  border: "#e5e7eb"
  muted-surface: "#cac7b4"
  overlay: "#f5f5f5"
  error: "#d92d20"
typography:
  headline-display:
    fontFamily: "Gd Grio Vf"
    fontSize: "57px"
    fontWeight: 700
    lineHeight: "68px"
    letterSpacing: "0px"
  headline-lg:
    fontFamily: "Gd Grio Vf"
    fontSize: "43px"
    fontWeight: 400
    lineHeight: "54.432px"
    letterSpacing: "-0.567px"
  headline-md:
    fontFamily: "Gd Grio Vf"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: "36px"
    letterSpacing: "-0.4px"
  headline-sm:
    fontFamily: "Gd Grio Vf"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "29px"
    letterSpacing: "-0.16px"
  body-lg:
    fontFamily: "Gd Grio Vf"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "27px"
    letterSpacing: "0px"
  body-md:
    fontFamily: "Gd Grio Vf"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0px"
  body-sm:
    fontFamily: "Gd Grio Vf"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "21px"
    letterSpacing: "0px"
  label-lg:
    fontFamily: "Gd Grio Vf"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "24px"
    letterSpacing: "0px"
  label-md:
    fontFamily: "Gd Grio Vf"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "20px"
    letterSpacing: "0px"
  label-sm:
    fontFamily: "Gd Grio Vf"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0px"
  caption:
    fontFamily: "Gd Grio Vf"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
    letterSpacing: "0px"
rounded:
  none: 0px
  sm: 2px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 8px
  sm: 20px
  md: 40px
  lg: 64px
  xl: 160px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.overlay}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
    height: "40px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
    height: "40px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  chip:
    backgroundColor: "{colors.overlay}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
---

# YLLW

## Overview
YLLW feels like a bold editorial brand built for a professional audience in real estate, renovation, and space transformation. The tone is confident, minimalist, and slightly industrial, with a lot of white space and very large type that makes the experience feel premium and decisive. The visual language is sparse rather than decorative, so each element carries weight and supports a clear conversion path.

## Colors
- **Primary (#000000):** Pure black is the dominant ink for headlines, navigation, and core UI text. It gives the site its sharp, high-contrast editorial attitude.
- **Secondary (#212121):** A softer near-black used for body copy and supporting text. It preserves readability while feeling less severe than pure black.
- **Tertiary (#cac7b4):** A muted beige-gray accent used for the primary button and warm tonal surfaces. It softens the system without introducing a bright brand color.
- **Neutral (#ffffff):** Clean white is the main canvas color and the default page background. It reinforces openness, clarity, and spaciousness.
- **Surface (#ffffff):** Card and panel surfaces stay white to maintain a restrained, layered hierarchy.
- **On-surface (#212121):** Default text on containers uses the near-black body color for comfortable contrast.
- **Border (#e5e7eb):** Light gray borders create subtle containment without heavy shadowing.
- **Mutated-surface (#cac7b4):** The beige accent also works as a broader tonal fill for banners or contextual blocks.
- **Overlay (#f5f5f5):** A very light neutral fill can be used for hover states, chips, or subdued UI areas.
- **Error (#d92d20):** Reserved for validation and destructive messaging; it should remain rare so it does not dilute the calm palette.

## Typography
The system is anchored in a single custom family, **Gd Grio Vf**, which gives the brand a tall, condensed, editorial feel. Headings are intentionally large and often set with tight tracking, creating a striking poster-like hierarchy.

- **Headline display and headings:** `headline-display`, `headline-lg`, `headline-md`, and `headline-sm` are designed for dramatic page titles and section leads. The strongest display style is bold, while the rest are lighter-weight but still visually assertive.
- **Body copy:** `body-lg`, `body-md`, and `body-sm` handle paragraph content, descriptions, and supporting context. The tone stays clean and readable, with generous line heights that match the spacious layout.
- **Labels and controls:** `label-lg`, `label-md`, and `label-sm` support navigation, buttons, and small utility text. Button text is medium-weight rather than bold, which keeps actions polished instead of loud.
- **Caption:** The `caption` style is reserved for small metadata, footnotes, and secondary UI details.
- There is no visible uppercase or all-caps system; emphasis comes primarily from scale, weight, and contrast rather than letter-case changes.

## Layout & Spacing
The layout is fluid and full-bleed, with content centered inside a broad desktop canvas rather than constrained to a narrow fixed container. The hero composition uses extremely large vertical breathing room, making the page feel premium and uncluttered.

Spacing follows a restrained but emphatic rhythm:
- `xs` at 8px for compact internal gaps and micro-adjustments.
- `sm` at 20px for navigation and inline spacing.
- `md` at 40px for standard section separation.
- `lg` at 64px for major structural breaks.
- `xl` at 160px for dramatic page-scale breathing room, especially around the hero.

Cards and panels should keep internal padding modest, typically 16px to 20px, so the overall system stays airy. The top banner, navigation row, and cookie panel all rely on clear horizontal alignment and generous whitespace rather than dense grid packing.

## Elevation & Depth
Depth is intentionally minimal. The interface uses flat surfaces, subtle borders, and tonal separation instead of dramatic shadows or layered blur effects. The strongest depth cue is the cookie panel/card treatment, which relies on a white surface and light border to lift it off the background without breaking the calm visual tone.

The brand’s hierarchy comes from contrast, scale, and spacing first, then borders and small tonal fills. Shadows should generally stay absent unless a component must be visually separated from a very pale background.

## Shapes
The shape language is understated and mostly rectangular. Interactive elements use a small 2px radius for a crisp, almost architectural feel, while content cards can relax to 8px for a slightly softer container.

Overall, the system feels precise rather than friendly. Rounded corners should be used sparingly and consistently so the UI doesn’t drift into a soft, generic SaaS look.

## Components
**Buttons**
- Primary buttons use `button-primary`: beige fill, black text, compact 2px rounding, and 12px by 20px padding with a 40px height.
- Secondary buttons use `button-secondary`: transparent background, black text, and the same compact sizing, ideal for neutral actions.
- Link-style actions use `button-link` with no container chrome and underlined text.
- Hover states should remain subtle; `button-primary-hover` can shift to a lighter neutral fill rather than introducing a new bright color.
- Buttons should feel firm and rectangular, not pill-shaped.

**Cards**
- Use the `card` style for cookie notices, information panels, and any inset content blocks.
- Cards should remain white with a light gray border and modest padding.
- Avoid deep shadows; containment should be achieved through borders and spacing.

**Inputs**
- Inputs should use `input` styling: white background, near-black text, compact rounding, and clear padding.
- Fields should feel simple and functional, with border treatment consistent with the card system.
- Focus states should be visible through contrast or border emphasis rather than decorative glow.

**Chips**
- Use `chip` for tags, filters, and compact metadata.
- Chips should be light-toned, full-rounded, and small enough to remain secondary to the typography.

**Navigation**
- Navigation is text-first and minimally boxed.
- Current or primary navigation actions may use the beige button treatment for emphasis, while most links remain unadorned black text.

**Cookie/consent panel**
- The consent dialog should appear as a white card with clear hierarchy: title, short explanatory copy, then three aligned actions.
- The accept action is the strongest visual button; the other actions should remain visually quieter but still obvious.

## Do's and Don'ts
- Do use oversized, condensed headlines to create the brand’s signature dramatic first impression.
- Do keep backgrounds mostly white and let black typography carry the hierarchy.
- Do use the beige tertiary color sparingly for key actions and warm tonal accents.
- Do preserve generous whitespace around major sections and hero content.
- Don't introduce colorful gradients, heavy illustrations, or decorative shadows.
- Don't round buttons into pills or increase corner radii beyond the restrained system.
- Don't make body copy too small or too tight; readability should remain calm and open.
- Don't let secondary UI compete with the main headline scale and contrast.