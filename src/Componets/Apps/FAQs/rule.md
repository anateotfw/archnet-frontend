# UI Guidelines for ArchNet Components

## Color Palette

### Primary Colors
- Main Purple: `#6d4aff` (--faq-accent-color)
- Secondary Purple: `#507aff`
- Light Purple: `#9e77ff`

### Background Colors
- Dark Background Start: `#1E2530` (--faq-dark-bg-start)
- Dark Background End: `#15191E` (--faq-dark-bg-end)

### Text Colors
- Primary Text: `rgba(255, 255, 255, 0.9)` (--faq-text-light)
- Secondary Text: `rgba(255, 255, 255, 0.7)` (--faq-text-secondary)

### UI Element Colors
- Card Background: `rgba(255, 255, 255, 0.03)` (--faq-card-bg)
- Card Border: `rgba(255, 255, 255, 0.06)` (--faq-card-border)
- Glow Effect: `rgba(109, 74, 255, 0.6)` (--faq-glow-color)

### Navigation Colors
- Light Theme Nav: `rgba(255, 255, 255, 0.9)`
- Dark Theme Nav: `rgba(0, 0, 0, 0.2)`
- Nav Border Light: `rgba(0, 0, 0, 0.1)`
- Nav Border Dark: `rgba(255, 255, 255, 0.1)`

### Theme Handling
- Use `isDarkTheme` prop for theme switching
- Dark theme colors use `--faq-dark-*` variables
- Light theme colors use `--faq-light-*` variables
- Theme-specific text colors:
  - Dark: `rgba(255, 255, 255, 0.9)`
  - Light: `rgba(0, 0, 0, 0.9)`
- Auto-adjusting UI elements based on theme
- Smooth theme transition: 0.3s all ease-in-out

## Typography

### Font Family
- Primary Font: 'Yekan' (Persian)
- Font Weights Used:
  - Regular: 400
  - Medium: 500
  - Semi-bold: 600
  - Bold: 700
  - Extra Bold: 800

### Font Sizes
- Main Title: 3.5rem (Desktop) / 2.2rem (Tablet) / 1.8rem (Mobile)
- Subtitle: 1.25rem (Desktop) / 1.1rem (Tablet) / 0.9rem (Mobile)
- Question Text: 1.1rem (Desktop) / 1rem (Mobile)
- Answer Text: 1rem
- Secondary Text: 0.9rem
- Navigation Text: 0.95rem

### Mobile Title Spacing
- Title top margin: 6rem (to avoid header overlap)
- Title bottom margin: 2.5rem
- Inter-section gap: 4rem
- Title to content gap: 3rem
- Responsive padding adjustments:
  - Top padding: 7rem
  - Bottom padding: 2rem
  - Side padding: 1.25rem
- Minimum spacing between stacked elements: 2rem

## Spacing System

### Padding
- Section Padding (Desktop): 8rem 0 5rem 0
- Section Padding (Tablet): 8rem 0 3rem 0
- Section Padding (Mobile): 7rem 0 1.5rem 0
- Container Width: 92% (max-width: 1400px)
- Card Padding: 1.5rem (Desktop) / 1.25rem (Mobile)
- Content Gap: 3rem

### Margins
- Header Margins (Desktop): 4rem bottom
- Header Margins (Tablet): 3rem top, 3rem bottom
- Header Margins (Mobile): 4rem top, 3rem bottom
- Item Gap: 1.5rem
- Text Margins: 0.5rem - 1.5rem
- Navigation Item Gap: 1rem

## Visual Effects

### Gradients
1. Background:
   ```css
   linear-gradient(135deg, #1E2530 0%, #15191E 100%)
   ```
2. Title:
   ```css
   linear-gradient(to right, #ffffff, #b8b8ff)
   ```
3. Active Card:
   ```css
   linear-gradient(135deg, rgba(109, 74, 255, 0.12) 0%, rgba(30, 37, 48, 0.9) 100%)
   ```

### Shadows
- Text Shadow: `0 10px 30px rgba(0, 0, 0, 0.3)`
- Card Shadow: `0 4px 15px rgba(0, 0, 0, 0.1)`
- Active Card Shadow: `0 15px 40px rgba(0, 0, 0, 0.2)`
- Floating Elements: `0 8px 24px rgba(109, 74, 255, 0.3)`

### Blur Effects
- Backdrop Blur: 12px-16px
- Decorative Blobs: 80px blur
- Navigation Blur: 8px

## Animations

### Timing Functions
- Smooth: `cubic-bezier(0.4, 0, 0.2, 1)`
- Bounce: `cubic-bezier(0.175, 0.885, 0.32, 1.275)`

### Animation Types
1. Float Animation:
   - Duration: 6s
   - Style: ease-in-out infinite
   - Transform: translateY(-20px)

2. Card Hover:
   - Duration: 0.4s
   - Transform: translateX(-8px)
   - Border Color Change
   - Shadow Enhancement

3. Blob Animations:
   - Move: 20-25s ease-in-out infinite
   - Pulse: 15s ease-in-out infinite
   - Scale: 1 to 1.2
   - Opacity: 0.15 to 0.1

## Responsive Breakpoints

### Desktop (>1200px)
- Full layout with side-by-side content
- Maximum visual effects
- Largest text sizes
- Horizontal navigation menu

### Tablet (768px - 1200px)
- Stacked layout
- Padding: 8rem top
- Header margin: 3rem top
- Adjusted font sizes
- Hamburger menu

### Mobile (<768px)
- Minimal layout
- Padding: 7rem top
- Header margin: 4rem top
- Smallest font sizes
- Simplified animations
- Compact cards
- Full-width elements

## Navigation System

### Desktop Navigation
- Horizontal menu
- Visible links
- Hover effects
- Active state indicators

### Mobile Navigation
- Hamburger menu
- Dropdown panel
- Adaptive background:
  - Light theme: `rgba(255, 255, 255, 0.9)`
  - Dark theme: `rgba(0, 0, 0, 0.2)`
- Blur effect: 8px
- Border: 1px solid (theme dependent)

## Accessibility

### Color Contrast
- Text maintains minimum 4.5:1 contrast ratio
- Interactive elements use 3:1 minimum
- Navigation elements adapt to background

### Interactive Elements
- Minimum touch target: 44px
- Clear focus states
- Hover/active states
- Visible navigation on all backgrounds

### RTL Support
- Full RTL layout support
- Right-aligned text
- Mirrored icons and decorations
- RTL-aware animations

## Component States

### Default State
- Subtle background
- Regular border
- Standard opacity
- Visible on all themes

### Hover State
- Elevated position
- Enhanced shadow
- Border highlight
- Direction-aware movement

### Active State
- Gradient background
- Stronger border
- Inner shadow
- Visual feedback

## Best Practices

1. Maintain consistent spacing using the defined system
2. Use provided color variables for theme consistency
3. Ensure all interactive elements have proper states
4. Follow RTL guidelines for text and layout
5. Implement responsive breakpoints properly
6. Use provided animation timings
7. Ensure navigation visibility across themes
8. Test touch targets on mobile
9. Verify contrast ratios
10. Maintain proper spacing on mobile

## File Structure
```
ComponentName/
├── ComponentName.js
├── ComponentName.css
└── rule.md
``` 