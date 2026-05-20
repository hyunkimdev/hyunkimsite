# Stripe

## Mission
Create implementation-ready, token-driven UI guidance for Stripe that is optimized for consistency, accessibility, and fast delivery across marketing site.

## Brand
- Product/brand: Stripe
- URL: https://stripe.com/
- Audience: online shoppers and consumers
- Product surface: marketing site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=sohne-var`, `font.family.stack=sohne-var, SF Pro Display, sans-serif`, `font.size.base=16px`, `font.weight.base=300`, `font.lineHeight.base=20px`
- Typography scale: `font.size.xs=10px`, `font.size.sm=12px`, `font.size.md=14px`, `font.size.lg=16px`, `font.size.xl=18px`, `font.size.2xl=20px`, `font.size.3xl=22px`, `font.size.4xl=26px`
- Color palette: `color.text.primary=#50617a`, `color.text.secondary=#533afd`, `color.text.tertiary=#061b31`, `color.text.inverse=#ffffff`, `color.surface.base=#000000`, `color.surface.strong=#e3ecf7`
- Spacing scale: `space.1=2px`, `space.2=5.5px`, `space.3=6px`, `space.4=11.5px`, `space.5=12px`, `space.6=12.5px`, `space.7=13.5px`, `space.8=14.5px`
- Radius/shadow/motion tokens: `radius.xs=4px` | `motion.duration.instant=100ms`, `motion.duration.fast=200ms`, `motion.duration.normal=240ms`, `motion.duration.slow=300ms`, `motion.duration.slower=400ms`, `motion.duration.step6=800ms`, `motion.duration.step7=1200ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: cards (429), links (181), buttons (133), navigation (6), lists (5).


## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
