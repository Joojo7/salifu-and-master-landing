# TrotroLoader

Animated VW T3 trotro loader for a Ghanaian trotro mate game.

## Install

Drop these two files into your Vite/React project (e.g. `src/components/`):
- `TrotroLoader.jsx`
- `TrotroLoader.css`

No dependencies beyond React.

## Use

```jsx
import TrotroLoader from "./components/TrotroLoader";

// inline, sized
<TrotroLoader size={400} />

// fullscreen (use as splash / route loader)
{loading && <TrotroLoader fullscreen />}

// custom caption
<TrotroLoader size={320} label="Boarding..." />

// no progress bar
<TrotroLoader size={320} showProgress={false} />
```

## Props

| Prop          | Type    | Default               | Notes                                              |
|---------------|---------|-----------------------|----------------------------------------------------|
| `size`        | number  | `440`                 | Pixel width; height auto-scales (16:10.18).        |
| `fullscreen`  | bool    | `false`               | Cover viewport, fixed-position, z-index 9999.      |
| `label`       | string  | `"Loading the trotro"`| Caption under the badge. Pass `""` to hide.        |
| `showProgress`| bool    | `true`                | Toggle the gradient progress bar.                  |

Palette: hot pink (`#ff3b8b`), cyan (`#1ad6ff`), plum (`#5b1a8a`), sunset orange (`#ff7a3a`).
