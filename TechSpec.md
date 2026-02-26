# Technical Specification

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Installation |
|-----------|---------|--------------|
| Button | CTAs, navigation actions | `npx shadcn add button` |
| Card | Property cards, service cards, blog cards | `npx shadcn add card` |
| Badge | Property labels, tags | `npx shadcn add badge` |
| Input | Search fields, contact forms | `npx shadcn add input` |
| Separator | Visual dividers | `npx shadcn add separator` |

### Third-Party Registry Components
None required - custom implementations preferred for this design.

### Custom Components
| Component | Purpose | Location |
|-----------|---------|----------|
| MagneticButton | CTA with magnetic cursor pull effect | `components/MagneticButton.tsx` |
| ParallaxImage | Image with scroll-based parallax | `components/ParallaxImage.tsx` |
| TextReveal | Animated text reveal on scroll | `components/TextReveal.tsx` |
| PropertyCard | Property listing card with hover effects | `components/PropertyCard.tsx` |
| TestimonialCarousel | 3D cylinder testimonial slider | `components/TestimonialCarousel.tsx` |
| ServiceCard | Service item with grid line animations | `components/ServiceCard.tsx` |
| ScrollProgress | Circular progress indicator | `components/ScrollProgress.tsx` |

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero Split Line Diagonal Wipe | GSAP | Clip-path animation with ScrollTrigger | High |
| Hero Heading Word Slide + Unmask | GSAP + SplitType | Text split into words, y-axis translate with overflow hidden mask | Medium |
| Hero Image Scale + Blur | GSAP | scale and filter blur animation on load | Low |
| CTA Magnetic Button | Custom React Hook | useMousePosition hook with transform calculation | Medium |
| Hero Image Liquid Distortion | Three.js | WebGL fragment shader with mouse position uniform | High |
| About Image Mask Reveal | GSAP | clip-path: inset() animation left to right | Medium |
| About Text Card Slide Up | GSAP | y translate + opacity with ScrollTrigger | Low |
| Stats Staggered Pop | GSAP | scale with Back.easeOut easing, staggered delay | Low |
| Text Card 3D Tilt | Custom React | onMouseMove transform calculation with perspective | Medium |
| Properties Horizontal Scroll | GSAP ScrollTrigger | Pin section, translateX based on scroll progress | High |
| Property Card Skew Velocity | GSAP | skewX based on scroll velocity (inertia) | Medium |
| Property Card Hover Effects | CSS + GSAP | Image scale, title slide, price bounce | Medium |
| Services Grid Line Draw | GSAP | SVG stroke-dashoffset animation | Medium |
| Service Card Diagonal Fill | CSS | ::after pseudo-element with clip-path diagonal | Medium |
| Service Icon Rotate | CSS | transform rotate on hover | Low |
| Testimonials 3D Cylinder | Three.js | Cylinder geometry with rotated planes | High |
| Testimonial Drag Rotation | GSAP Draggable | Rotation based on drag delta | Medium |
| Blog Magazine Layout | CSS Grid | Asymmetric grid with featured post | Low |
| Blog Image Parallax | GSAP | Inner image translateY on scroll | Low |
| CTA Overlay Opacity Shift | GSAP | opacity animation tied to scroll | Low |
| CTA Text Scale | GSAP | scale animation on scroll | Low |
| Smooth Scroll | Lenis | Integration with GSAP ScrollTrigger | Medium |
| Navigation Scroll Effects | GSAP | Background opacity and height reduction | Low |

## Animation Library Choices

### GSAP (GreenSock Animation Platform)
**Rationale**: Industry-standard for complex web animations. Excellent performance, precise timing control, and robust scroll-triggered animations via ScrollTrigger plugin.

**Use Cases**:
- All scroll-triggered animations
- Text reveal effects
- Complex timeline sequences
- Horizontal scroll pinning

### Lenis
**Rationale**: Lightweight smooth scroll library that integrates seamlessly with GSAP ScrollTrigger. Provides the "buttery" scroll feel essential for luxury websites.

**Use Cases**:
- Global smooth scrolling
- Scroll damping
- Integration with GSAP

### Three.js
**Rationale**: Standard WebGL library for 3D graphics in the browser. Required for the hero liquid distortion and testimonial cylinder effects.

**Use Cases**:
- Hero image fluid distortion shader
- Testimonial 3D cylinder carousel

### SplitType
**Rationale**: Lightweight utility for splitting text into lines, words, and characters - essential for text reveal animations.

**Use Cases**:
- Hero heading animation
- Section title animations

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── about-image.jpg
│   │   ├── property-1.jpg
│   │   ├── property-2.jpg
│   │   ├── property-3.jpg
│   │   ├── testimonial-1.jpg
│   │   ├── testimonial-2.jpg
│   │   ├── testimonial-3.jpg
│   │   └── cta-bg.jpg
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── input.tsx
│   │   │   └── separator.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── ParallaxImage.tsx
│   │   ├── TextReveal.tsx
│   │   ├── PropertyCard.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── Navigation.tsx
│   ├── hooks/
│   │   ├── useMousePosition.ts
│   │   ├── useScrollProgress.ts
│   │   └── useInView.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Properties.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Blog.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Dependencies to Install

### Core Dependencies (via init script)
- react
- react-dom
- typescript
- vite
- tailwindcss
- @radix-ui/react-* (various)
- class-variance-authority
- clsx
- tailwind-merge
- lucide-react

### Animation Dependencies (manual install)
```bash
npm install gsap @studio-freight/lenis three @types/three split-type
```

### Font Dependencies
```bash
# Google Fonts via CDN in index.html
# Cormorant Garamond (400, 500, 600, 700)
# Lato (300, 400, 700)
```

## Color Configuration (Tailwind)

```javascript
// tailwind.config.js extend colors
colors: {
  primary: '#f9e492',      // Yellow
  secondary: '#f9a78e',    // Coral
  dark: '#1a1a1a',         // Black
  light: '#f7f7f7',        // Light Gray
}
```

## Typography Configuration

```javascript
// tailwind.config.js extend fontFamily
fontFamily: {
  display: ['Cormorant Garamond', 'serif'],
  body: ['Lato', 'sans-serif'],
}
```

## Implementation Priority

### Phase 1: Foundation
1. Initialize project with webapp-building skill
2. Install animation dependencies
3. Configure Tailwind with brand colors/fonts
4. Set up global styles and CSS variables
5. Create utility hooks (useMousePosition, useScrollProgress)

### Phase 2: Core Components
1. Build Navigation component
2. Build MagneticButton component
3. Build TextReveal component
4. Build ParallaxImage component
5. Build ScrollProgress component

### Phase 3: Sections (in order)
1. Hero section (most complex - WebGL + GSAP)
2. About section (parallax + stats)
3. Properties section (horizontal scroll)
4. Services section (grid animations)
5. Testimonials section (3D carousel)
6. Blog section (magazine layout)
7. CTA section (immersive overlay)
8. Footer section

### Phase 4: Polish
1. Add reduced-motion support
2. Optimize images
3. Test responsive behavior
4. Performance audit
5. Build and deploy

## Performance Targets

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Performance: > 90
- Cumulative Layout Shift: < 0.1

## Responsive Breakpoints

- Mobile: < 768px (disable WebGL, simplify animations)
- Tablet: 768px - 1024px (reduced parallax)
- Desktop: > 1024px (full experience)
