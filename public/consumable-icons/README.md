# Consumable Icons

11 hex-framed SVG icons for the game's consumables. Each file uses `viewBox="-100 -100 200 200"` and scales cleanly from 32px to 512px.

## Use in Vite + React

### Option 1 — as URLs (simplest)

```jsx
import ironStomachUrl from './icons/iron-stomach.svg';

<img src={ironStomachUrl} alt="Iron Stomach" width={64} height={64} />
```

### Option 2 — as React components (recommended)

Install [`vite-plugin-svgr`](https://github.com/pd4d10/vite-plugin-svgr):

```bash
npm i -D vite-plugin-svgr
```

`vite.config.ts`:
```ts
import svgr from 'vite-plugin-svgr';
export default { plugins: [svgr()] };
```

Then:
```jsx
import IronStomach from './icons/iron-stomach.svg?react';

<IronStomach width={64} height={64} />
```

### Option 3 — id → component map

```jsx
import IronStomach from './icons/iron-stomach.svg?react';
import CoolHead from './icons/cool-head.svg?react';
// ...etc

export const ICONS = {
  'iron-stomach': IronStomach,
  'cool-head': CoolHead,
  'slow-burn': SlowBurn,
  'second-wind': SecondWind,
  'second-meal': SecondMeal,
  'quick-hands': QuickHands,
  'bargain-hunter': BargainHunter,
  'patient-crowd': PatientCrowd,
  'overtime': Overtime,
  'masters-mercy': MastersMercy,
  'serwaa-blessing': SerwaaBlessing,
};

// usage:
function ConsumableIcon({ id, size = 64 }) {
  const Icon = ICONS[id];
  return <Icon width={size} height={size} />;
}
```

## Files

| ID | Category |
|---|---|
| iron-stomach | survival |
| cool-head | survival |
| slow-burn | survival |
| second-wind | survival |
| second-meal | survival |
| quick-hands | gameplay |
| bargain-hunter | gameplay |
| patient-crowd | gameplay |
| overtime | gameplay |
| masters-mercy | earnings |
| serwaa-blessing | earnings |
