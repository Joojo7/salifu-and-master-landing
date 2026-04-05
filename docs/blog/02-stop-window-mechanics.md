---
title: "Stop Window Mechanics"
slug: stop-window-mechanics
category: core-gameplay
status: ready
publishDate: null
banner: /blog-images/02-stop-window-mechanics.png
twitterThread: null
tags: [gameplay, mechanics, passengers]
summary: "Timed boarding and dropoff at each stop. Miss the window, miss the passengers."
---

# Stop Window Mechanics

If you have ridden a trotro before, you know the drill. The bus slows down, the mate shouts the destination, and passengers either jump on or jump off. You have seconds. Hesitate and the driver pulls away. Nobody is waiting for you.

That pressure, that is what the stop window system captures. It is the heartbeat of every run in Salifu & Master.

## What Happens at a Stop

When the bus gets close enough to a stop, a prompt appears on screen. You get a short window to tap and complete the action. Miss it and the passenger is gone, your fare is gone, and your "perfect day" bonus is gone with it.

But here is the part most people do not notice at first: drop-offs come before pickups. Always. Just like a real trotro, you let people out before new ones come in. If you have three passengers to drop and two waiting to board, all three drop-offs process first, one tap at a time. Only then do the pickups begin.

This is not random. This is how the mate works.

## The Window Duration

So how long do you actually get? That depends on four things working together:

```
Window Duration = Base Time x Difficulty x Upgrades x Vitals
```

Here is what each one does:

| Factor | What It Does | Range |
|--------|-------------|-------|
| **Base Time** | Starting duration | 2 seconds |
| **Difficulty** | Route difficulty scales it down | 0.4x to 1.2x |
| **Upgrades** | Reaction upgrades extend it | 1.0x and above |
| **Vitals** | Low hunger or sanity shrinks it | 0.5x to 1.0x |

On an easy route with no upgrades and full health, you get about 2.4 seconds. On a hard route with critical hunger and sanity, that drops to under a second. Lmao, you better be ready.

The vitals penalty is worth understanding. If your hunger drops to critical, you lose 25% of your window. If your sanity drops too, you lose another 25%. Both at critical? The penalties multiply: `0.75 x 0.75 = 0.5625`. The game floors it at 50% so it never becomes impossible, but it comes close.

## Skip or Commit

You do not have to pick up every passenger. There is a skip button for a reason. Sometimes the bus is nearly full and the short-trip passenger is not worth the speed penalty. Sometimes you need to save capacity for a higher-paying passenger at the next stop.

When you skip, that passenger leaves. They do not come back. The window moves on to the next person at that stop, or if nobody else is waiting, the bus moves on.

You can also skip all remaining passengers at once. The game handles it cleanly: it checks if anyone aboard still needs to drop off at this stop first, then clears the rest.

## The Tech Behind It

The detection system works in normalised route space. Every position on the route is a number between 0 and 1, where 0 is the start and 1 is the end. The bus tracks its own progress along this line. When the distance between the bus and a stop drops below the approach threshold (about 0.2% of the route length), the window opens.

```
isNearStop = |busProgress - stopProgress| < 0.002
```

This is deliberately tight. You do not want the window popping up when the bus is still far away.

One problem we had to solve: what if the same stop name appears twice on a route? In Accra, the bus might pass through Circle on the way out and again on the way back. A passenger going to "Circle" at 30% of the route should not accidentally match "Circle" at 80%. We handle this with a progress-matching threshold of 0.1, which is generous enough for slight path variations but tight enough to separate duplicate stops.

The timer itself runs outside React state. We track the precise time in a plain variable and only push updates to the store when the displayed ratio changes (at tenths precision). This avoids creating a new state object every single frame, which would be wasteful for a countdown that ticks 60 times a second.

```
displayedRatio = Math.floor(timeRemaining x 10)
// Only update store when this value changes
```

There is also a re-trigger guard. The system tracks which stop instance it last opened a window for (both stop ID and route progress). If the bus oscillates near a stop boundary, it will not keep firing the same window over and over.

## What's Next

We are exploring ways to make stops feel even more alive. Visual feedback when you nail a pickup at the last second, combo rewards for chaining perfect stops, and better mobile controls for one-thumb play.

The stop window is where the game lives. Two seconds to make a decision. That is trotro life.

---

*Salifu & Master is free to play in your browser. No download needed.*
