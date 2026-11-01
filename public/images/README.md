# Image Asset Replacement Mapping

This document provides the mechanical replacement mapping for swapping placeholder images with real client-supplied photographs during **Phase 4**.

All image containers in the application enforce strict aspect ratio guards (`aspect-[4/5]` for portraits, `aspect-square` for macro eye close-ups) along with a subtle luxury warm-tone CSS overlay filter. This ensures that even smartphone-quality client photos blend seamlessly into the warm luxury aesthetic.

---

## 1. Asset Mapping Table

| File Name (Destination in `/public/images/`) | Target Aspect Ratio | Recommended Resolution | Description & Content Guidelines |
| :--- | :---: | :---: | :--- |
| `hero-master.jpg` | `4:5` (portrait) | 1200 × 1500 px | Hero section: Warm-lit portrait of the master at work or holding styling tweezers. Clean neutral background. |
| `about-master.jpg` | `4:5` (portrait) | 1200 × 1500 px | About section: Professional master portrait with certificates/awards or studio ambiance in background. |
| `ba-classic-before.jpg` | `1:1` (square) | 1000 × 1000 px | Before/After #1 (Before): High-contrast macro shot of natural lashes before Classic 1:1 extensions. |
| `ba-classic-after.jpg` | `1:1` (square) | 1000 × 1000 px | Before/After #1 (After): Matching angle macro shot of finished Classic 1:1 extensions. |
| `ba-volume-before.jpg` | `1:1` (square) | 1000 × 1000 px | Before/After #2 (Before): Natural eyes/lashes before 2D/3D Volume set. |
| `ba-volume-after.jpg` | `1:1` (square) | 1000 × 1000 px | Before/After #2 (After): Matching angle shot of fluffy 2D/3D Volume set. |
| `ba-brow-before.jpg` | `1:1` (square) | 1000 × 1000 px | Before/After #3 (Before): Sparse or unruly natural brows before styling. |
| `ba-brow-after.jpg` | `1:1` (square) | 1000 × 1000 px | Before/After #3 (After): Matching angle shot of symmetrical laminated and tinted brows. |
| `portfolio-1.jpg` | `1:1` (square) | 900 × 900 px | Portfolio Item: Classic 1:1 lash macro close-up. |
| `portfolio-2.jpg` | `1:1` (square) | 900 × 900 px | Portfolio Item: 3D Light Volume fluffy lash texture. |
| `portfolio-3.jpg` | `1:1` (square) | 900 × 900 px | Portfolio Item: Brow lamination feathered texture. |
| `portfolio-4.jpg` | `1:1` (square) | 900 × 900 px | Portfolio Item: Lash lift & keratin deep black tint result. |
| `portfolio-5.jpg` | `1:1` (square) | 900 × 900 px | Portfolio Item: Mega Volume dense black fan display. |
| `portfolio-6.jpg` | `1:1` (square) | 900 × 900 px | Portfolio Item: Brow architecture geometry & ombré tint. |
| `og-preview.jpg` | `1.91:1` | 1200 × 630 px | OpenGraph preview card for Telegram and Instagram links sharing. |

---

## 2. Mechanical Replacement Procedure

1. Rename the client's original image files to match the exact names above (e.g. `hero-master.jpg`, `ba-classic-after.jpg`).
2. Copy the renamed files directly into `/public/images/placeholders/` (overwriting the placeholders) or into `/public/images/`.
3. If files are placed in `/public/images/`, update the paths in `lib/config.ts` from `/images/placeholders/<name>` to `/images/<name>`.
4. Run `npm run build` to verify Next.js image optimization compiles cleanly without missing asset warnings.

---

## 3. Warm Luxury Filter Guard

The application wraps all images in a luxury warm grading class (`warm-luxury-image`):
- Soft warm temperature boost (`sepia-[0.06] brightness-[1.01] contrast-[1.02]`).
- Smooth vignette border radius.
- Prevents harsh phone flash highlights and disparate lighting temperatures between different treatment sessions.
