# Salifu & Master Landing Page - Coding Guidelines

## Project

Landing page for the Salifu & Master trotro driving game. Next.js (App Router), TypeScript, SCSS Modules, Bootstrap utilities.

## Styling

- **Always use Bootstrap classes first** before resorting to custom SCSS
- SCSS should be a last resort when Bootstrap classes cannot achieve the desired styling
- Leverage Bootstrap's utility classes for spacing, flexbox, grid, colors, etc.

## Code Organization

- **Interfaces should never be defined in component files**
- All interfaces and types should be placed in the appropriate file under `src/types/`
- Component files should only contain component logic and JSX

## File Structure

- Types: `src/types/<feature>.ts`
- Components: `src/components/<component-name>/<component-name>.tsx`
- Component styles: `src/components/<component-name>/<component-name>.module.scss`
- Constants: `src/lib/constants.ts`

## Code Conventions

### Consistency

- **Keep things consistent with existing patterns** - Align new code to how similar things are done in the codebase
- Before implementing something new, look for similar patterns in the codebase and follow them

### Design Principles

**SOLID / DRY / KISS:**

- **Single Responsibility** - Each module/component does one thing well
- **Don't Repeat Yourself** - Extract shared logic into reusable functions/utilities
- **Keep It Simple** - Prefer simple solutions over clever ones
- Use constants for magic values that appear in multiple places
- Prefer composition over copy-paste

### File Size Limit

- **Maximum 250 lines per file** - Break larger files into smaller, focused modules
- Follow Single Responsibility Principle - each file should do one thing well

## Comments

- **Let the code speak for itself** - use clear, descriptive names instead of comments
- Only use comments to explain "why" when the reasoning isn't apparent from context
- Delete commented-out code; version control keeps history

## Workflow

- **Avoid refactoring as part of a task** - Keep changes focused on the requested task
- **Constants over magic strings** - All repeated values in `src/lib/constants.ts`
- **One component per file** - Component files contain only component logic and JSX
