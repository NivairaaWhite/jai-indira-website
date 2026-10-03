IMAGE GUIDE — Jai Indira Agro Engineering

Replace placeholder images with real photography before launch.

STRUCTURE
---------
public/images/
  hero.webp                          ← Homepage hero (wide field + machine shot)
  machines/
    [slug]/
      main.webp                      ← Primary product image (required)
      front.webp                     ← Optional angles
      side.webp
      rear.webp
      field.webp                     ← Machine working in field
      detail.webp                    ← Close-up / PTO / blades
  factory/                           ← Workshop, assembly, exterior
  team/                              ← People photos
  applications/                      ← Application-specific imagery

NAMING
------
Use the machine slug from data/machines.js.
Example: public/images/machines/jiae-shakthi-6x42/main.webp

FORMAT
------
Prefer WebP or AVIF. Keep originals archived separately.
Recommended width: 1600–2400px for hero/product; 1200px for cards.

AFTER ADDING IMAGES
-------------------
1. Update the `image` and `gallery` arrays in data/machines.js
2. No code changes needed for new files that match the paths already listed
3. Run `npm run build` to verify

DO NOT use generic stock photos of farmers if authentic company photography is available.
