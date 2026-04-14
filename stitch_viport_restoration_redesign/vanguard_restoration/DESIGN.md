# THE DESIGN SYSTEM: EDITORIAL RESTORATION

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Architectural Guardian."** 

In the restoration industry, the visual language is often cluttered and reactive. This system shifts that narrative toward an authoritative, editorial experience. We are moving away from the "template" look of basic grids and thin borders. Instead, we utilize **Intentional Asymmetry** and **Tonal Depth** to create a digital environment that feels as sturdy as a rebuilt foundation and as premium as a high-end architectural firm. 

The design rejects the standard "boxy" layout. By utilizing generous whitespace and overlapping elements (e.g., imagery breaking the container bounds), we create a sense of movement and professional precision. This is not just a utility; it is a premium service experience.

---

## 2. Colors: Tonal Authority
We move beyond flat hex codes to a system of depth. The palette is anchored in deep navies and charcoals to establish "Trust," with "Safety Orange" used sparingly as a high-precision surgical tool.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be defined solely through background color shifts or tonal transitions.
*   *Example:* A `surface-container-low` (#eef4ff) section should sit directly against a `surface` (#f8f9ff) background to define its start and end.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use the Material tiers to define importance through "Stacking":
*   **Base:** `surface` (#f8f9ff)
*   **Sub-sections:** `surface-container-low` (#eef4ff)
*   **Primary Cards:** `surface-container-lowest` (#ffffff)
*   **Elevated Details:** `surface-container-highest` (#cfe4ff)

### The "Glass & Gradient" Rule
To achieve a "Custom" feel, floating elements (like Navigation bars or Mobile Menus) must use **Glassmorphism**. Apply `surface-container-lowest` at 80% opacity with a `20px backdrop-blur`. 

### Signature Textures
Main CTAs and Hero backgrounds should not be flat. Use subtle linear gradients transitioning from `primary` (#001b31) to `primary_container` (#09304e) at a 135-degree angle. This adds a "metallic" sheen and premium polish that flat colors lack.

---

## 3. Typography: Editorial Precision
The system pairs the architectural strength of **Plus Jakarta Sans** with the functional clarity of **Inter**.

*   **Display & Headlines (Plus Jakarta Sans):** Used for high-impact messaging. The tight kerning and geometric structure convey modern authority. Use `display-lg` (3.5rem) for hero statements to demand attention.
*   **Title & Body (Inter):** Inter provides a neutral, high-legibility counterpart. It feels technical and trustworthy.
*   **Hierarchy as Identity:** By using a drastic scale jump between `display-lg` and `body-lg`, we create an editorial "magazine" feel that distinguishes the brand from the generic layouts seen in the reference image.

---

## 4. Elevation & Depth
Depth is achieved through physics-based layering rather than artificial ornamentation.

*   **The Layering Principle:** Avoid shadows where possible. Achieve "lift" by placing a `surface-container-lowest` card (Pure White) on a `surface-container` (#e4efff) background. The natural contrast creates the elevation.
*   **Ambient Shadows:** When a float is required (e.g., a "Request Quote" modal), shadows must be extra-diffused. 
    *   *Spec:* `0px 20px 40px rgba(0, 29, 52, 0.06)`. 
    *   *Note:* The shadow color is a tint of `on_surface`, never pure black.
*   **The "Ghost Border" Fallback:** If a container requires definition against a similar background, use a "Ghost Border": `outline-variant` (#c3c7ce) at **15% opacity**.
*   **Glassmorphism:** Use for persistent UI elements. A `backdrop-blur` of 12px combined with a semi-transparent `surface_variant` allows background content to bleed through, making the UI feel integrated into the environment.

---

## 5. Components: Sharp & Purposeful

### Buttons (The Tactical Edge)
*   **Primary:** Solid `secondary` (#855300) with `on_secondary` (#ffffff) text. Use `md` (0.375rem) roundedness for a "sharp" professional look.
*   **Secondary:** Ghost style. `outline` color for the label, with the "Ghost Border" (15% opacity) for the container.
*   **States:** On hover, primary buttons should shift to `on_secondary_container` to create a "deepening" effect.

### Input Fields (High Contrast)
*   **Styling:** Forbid the standard "boxed" input. Use a `surface-container-lowest` background with a bottom-only 2px stroke of `outline-variant`.
*   **Active State:** The bottom stroke transitions to `secondary` (#855300).

### Cards & Lists (The Space Rule)
*   **Constraint:** Forbid divider lines. 
*   **Solution:** Separate list items using the spacing scale (e.g., 24px vertical gap) or alternating tonal backgrounds between `surface` and `surface-container-low`.
*   **Restoration Specifics:** Create "Case Study Cards" using overlapping image-to-text layouts. The image should occupy 60% of the card, with the text container offset by -20px to break the grid.

### New Component: The "Urgency Banner"
*   A slim, full-width component using `tertiary_container` (#003702) for 24/7 emergency status. It sits at the very top of the viewport, using `label-sm` for a technical, precise feel.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins. If the left margin is 80px, try a right margin of 120px for editorial interest.
*   **Do** use "Plus Jakarta Sans" for all numerical data (e.g., "99% Success Rate") to emphasize precision.
*   **Do** ensure high contrast between `on_background` and `background` for accessibility.

### Don't:
*   **Don't** use 100% opaque, high-contrast borders. They make the design feel "cheap" and "templated."
*   **Don't** use standard drop shadows (e.g., `0px 2px 4px black`).
*   **Don't** use more than one accent color per component. If you use `secondary` (Orange) for a button, do not use `tertiary` (Green) in the same cluster.
*   **Don't** crowd the content. If a section feels full, double the whitespace. High-end brands "waste" space intentionally.