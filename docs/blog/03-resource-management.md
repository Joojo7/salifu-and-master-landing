---
title: Resource Management
slug: resource-management
category: core-gameplay
status: ready
publishDate: null
banner: /blog-images/03-resource-management.png
twitterThread: twitter-drafts/resource-management-thread.md
tags:
  - gameplay
  - hunger
  - health
  - sanity
summary: 'Three resource bars drain as you drive. Let any hit zero and you collapse.'
---

# Resource Management

You know how it is when you are working under the sun all day. You have not eaten since morning. Your body is there but your mind has already checked out. Now imagine that, but you are hanging off a moving trotro trying to collect fares and not miss a single stop.

That is the life of a mate in Salifu & Master, and the game does not let you forget it. Three bars sit at the top of your screen: Hunger, Health, and Sanity. All three are draining from the moment the day starts. As the elders say, if a bird does not fly, it goes hungry. But in this game, even while you are flying, you are still going hungry.

## How It Works

All three resources start at 100 and decay every second you are on the road. The drain is constant, quiet, and easy to ignore until it is too late.

| Resource | Drain Rate | What Happens at Zero |
|----------|-----------|---------------------|
| **Hunger** | 0.6/sec | Starving notification, you are running on empty |
| **Health** | 0.57/sec | You collapse. Day over. Earnings gone. |
| **Sanity** | 0.6/sec | Mind wanders, random bus stops (starts at critical: 20) |

Health is the one that kills you. Literally. If health reaches zero, Salifu collapses and the day ends immediately. All your earnings? Zero. Master does not pay a mate who cannot stand up.

But the sneaky one is hunger. Let hunger run out and you are operating on nothing. The game warns you: "Starving! Find food quickly!" And the longer you stay empty, the worse everything feels. You see what I am saying?

Sanity is its own kind of trouble. Drop below 20 and the bus starts stopping on its own. Every 30 seconds there is a chance your mind just wanders and the bus halts for 3 seconds. On a timed run, those random stops can cost you everything.

## The Pressure Builds

The drain rates above? Those are the base rates on an easy route with an empty bus. The real game is much less kind.

**Passengers make it worse.** Every passenger you carry adds to the load stress. A full bus drains your resources 50% faster than an empty one. The formula is simple:

```
loadStress = 1 + (passengers / capacity) x 0.5
```

So the same tension from the driving system appears here. You need passengers to make money, but passengers are literally draining your life. Is it not so?

**Difficulty scales hard.** On the hardest routes, hunger drains at 5x the base rate. Health at 2.5x. Sanity at 4x. The scaling is not linear either. Hunger and sanity use quadratic curves, so the jump from medium to hard is much steeper than easy to medium.

**Bigger buses drain faster.** That Etalon A079 with 30 seats looks attractive until you realise the bus capacity itself scales the drain. A bus with triple the capacity of the starter VW means your resources are melting three times faster, even before passengers board.

## How to Fight Back

You are not helpless. Three people in this city can save your day, but none of them work for free.

**Amelia the food vendor** handles hunger. She sells waakye and jollof from her stall, and the portions matter:

| Item | Cost | Hunger Restored |
|------|------|----------------|
| Waakye Small | 25 GHC | +30 |
| Waakye Large | 50 GHC | +65 |
| Jollof | 70 GHC | +100 (full restore) |

**Dr. Panie** is your health man. Energy drinks, paracetamol, herbal mixtures. You know how Ghanaians trust the herbal mixture to fix anything? In this game it actually works:

| Item | Cost | Health Restored |
|------|------|----------------|
| Energy Drink | 15 GHC | +20 |
| Paracetamol | 20 GHC | +30 |
| Herbal Mixture | 40 GHC | +70 |

**Serwaa**, your girlfriend, is the only one who can fix your sanity. Visit her, bring a small gift (5 GHC), and she restores your sanity completely. But here is the catch: every visit costs you 5 hunger. Please, even love has a price oo.

Every cedi you spend on staying alive is a cedi that does not go towards your daily target. And Master does not care why you are short. That is the tradeoff the game forces on you constantly.

## Resources Talk to Each Other

This is the part that makes it serious. The three bars are not independent. They are connected, and when one drops, it drags the others down.

**Any low resource darkens your screen.** When any bar drops past its warning threshold, a red vignette starts creeping in at the edges of your screen. The system picks whichever resource is in the worst shape and scales the intensity from there. Below warning, a gentle red tint. Below critical, it pulses. At zero, you are squinting through a red screen trying to tap at the right moment. Health warning is 45, hunger is 35, sanity is 40, so health triggers the vignette first.

**Low hunger and sanity shrink your stop windows.** Below 35 hunger, your stop window loses 25%. Below 40 sanity, another 25% gone. Both critical at the same time? The penalties multiply: `0.75 x 0.75 = 0.5625`. The game floors it at 50% so it never becomes impossible, but a one-second window on a hard route with bad vitals is no joke.

Everything feeds into everything else. You skip eating to save money, then hunger drops, then your stop windows shrink, then you miss a fare, then you cannot afford food at the next vendor. Herh, the game does not forgive.

## Upgrades That Help

As you level up, you can invest in upgrades that slow the bleeding:

| Upgrade | Cost | Level Required | Effect |
|---------|------|---------------|--------|
| Stamina I | 1,500 GHC | Level 3 | Hunger decay: 0.85x |
| Stamina II | 4,000 GHC | Stamina I | Hunger decay: 0.7x |
| Health I | 2,000 GHC | Level 4 | Health decay: 0.85x |
| Health II | 5,000 GHC | Health I | Health decay: 0.7x |
| Sanity I | 2,500 GHC | Level 5 | Sanity decay: 0.8x |
| Sanity II | 6,000 GHC | Sanity I | Sanity decay: 0.6x |

At max upgrades, hunger and health drain at 70% of base, and sanity at 60%. It does not remove the pressure, but it gives you room to breathe. The difference between a fully upgraded mate and a fresh one on a hard route is the difference between managing the day and watching everything collapse by the halfway mark.

## The Tech Behind It

The resource system runs every frame inside the game loop. Each tick calculates the drain using a layered multiplier stack:

```
decay = baseRate x decayMultiplier x loadStress x delta
```

The `decayMultiplier` is calculated once when the day starts. It folds together three things: route difficulty, upgrade reductions, and bus capacity stress (`capacity / starterCapacity`). The `loadStress` is the only part that changes per frame, because it depends on how many passengers are currently aboard.

We track resource values in a Zustand store but the actual tick logic runs outside React state using a plain variable cache. The store only updates when the integer value changes, which is what the UI displays. This keeps the game loop lean. You do not want 60 state updates per second for a number that the player only notices in whole numbers.

The interaction penalties (stop window shrinking, sanity causing random stops, the danger vignette) run as separate systems that read from the resource store. The sanity stop system uses a probability check every 30 seconds: `stopChance = 0.4 x (1 - sanity/35)`. At zero sanity, that is a 40% chance of a random 3-second stop every half minute. At 17 sanity, it is about a 20% chance. The randomness makes it feel unpredictable, which is exactly the point. When your sanity is gone, you cannot trust your own bus.

## What's Next

We are looking at food variety, where different meals give different buffs beyond just filling the hunger bar. We are also exploring environmental effects: Harmattan weather draining sanity faster, night routes affecting health. The resource system is built to layer on new pressures without changing the core loop.

The three bars are simple to understand but deep to manage. Every run is a negotiation between your body, your mind, and your wallet. That is what makes each day feel earned.

---

*Salifu & Master is free to play in your browser. No download needed.*
