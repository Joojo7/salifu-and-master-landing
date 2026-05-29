---
title: "Leveling System"
slug: leveling-system
category: progression
status: ready
publishDate: null
twitterThread: null
banner: /resource-icons-svg/money-target.svg
tags: [level, progression, unlocks, mate]
summary: "Every three routes completed, your mate goes up a level. Simple, honest, and the gate to almost everything."
---

# Leveling System

## What It Is

A mate without a level number on his profile is a mate without a story yet. He has not driven enough roads to be properly counted. The level system in Salifu & Master is the spine of every other system. It is what the upgrades use to gate their tiers. It is what the routes sometimes use to decide whether you are ready for the next gate. It is what tells other players, at a glance, how seasoned you are.

We thought a long time about what the level should mean. In some games, your level is the sum of every experience point you have ever earned, and it grows fast at the start and slow at the end. In other games, the level is tied to specific milestones, like completing a story chapter. We did not want either of those. We wanted something honest, something tied directly to the work you put in on the road.

So in our game, your level is your total route completions, divided by three. Finish three runs, you go up one level. Finish thirty runs, you are at level ten. Finish three hundred runs, level one hundred. The rate never changes. The grind never gets steeper. Every three runs equals one level, from the day you start the game until the day the game ends.

We chose this for one reason above all others. Fairness. A player who has just started should be able to see exactly what it takes to reach the next level: three more runs. A veteran should know that their next level is also three more runs away. The veteran has more runs behind them, which means they have more access to deeper upgrades and harder routes. But the path from where they are now to the next number is the same path the new player walks. Same effort. Same reward. No accelerating treadmill.

## How It Works

Your level shows up everywhere in the game. On your profile. On the upgrade shop. On the route select screen when an upgrade or a route is locked behind a level requirement.

| Level | Approximate completions needed | Typical unlock at this stage |
|---|---|---|
| 1 | 0 | Starting point, tutorial routes |
| 2 | 3 | First wave of upgrades opens (capacity tier 1, speed tier 1) |
| 3 | 6 | More mate upgrades become available (stamina tier 1) |
| 4 | 9 | Reaction upgrades unlock |
| 5 | 12 | Sanity tier 1 opens |
| 6 | 15 | Continued upgrade gates |
| 8 | 21 | Capacity tier 3 becomes available |
| 10 | 27 | Deeper progression begins |
| 20 | 57 | Well into the mid-career |
| 50 | 147 | Long-time player territory |
| 100 | 297 | Top of the experienced mates |

There is no cap. Your level keeps going up as long as you keep playing. We did not want to put an artificial ceiling on the system. If somebody plays the game for two years and reaches level four hundred, that should be visible. Their profile should carry that number proudly.

The level is read-only from the player's side. You do not spend points, you do not assign attributes, you do not pick a class. The level is purely a measure of how much work you have done. The mate who has run three hundred routes is level one hundred. The mate who has run thirty routes is level ten. Neither of them gets to "build" their level. They earn it by driving.

The level interacts with the rest of the game in two clean ways. First, it gates upgrades. Many upgrade tiers require a minimum level to purchase, which prevents a brand-new player from dumping their starting money into the most powerful upgrades on day one. Second, in some places it can gate route or content unlocks, alongside the star-based and completion-based gates. Most routes do not have a level requirement (we prefer to use stars and completions for that), but level is available as a gate type when we need it.

When you level up, the game shows a small celebration. Not a huge animation, oo, just a clean acknowledgement. The number ticks up, a notification slides in, and any newly unlocked content gets highlighted on the next menu screen. We keep the moment small because it happens often, especially in the early game. We did not want every third run to feel like a fireworks show.

## The Tech Behind It

The leveling system was one of the simplest features in the game to build, and that simplicity was the point.

Most games have an XP system with its own table of thresholds. Level one to two requires a hundred XP. Level two to three requires two hundred and fifty. Level three to four requires four hundred and eighty. Designers spend weeks tuning those curves. Players spend hours hitting plateaus where two hours of grinding barely moves the bar. We did not want that. We wanted a system the player could understand in one sentence: every three runs is a level.

The actual computation is one line. Take your total route completions across every route. Divide by three. Drop the remainder. Add one. That is your level. Level one starts at zero completions. Level two starts at three. Level three at six. The formula is so simple that we do not even cache the result. Every time the game needs your level, it computes it fresh from the underlying stats. There is no risk of the cache drifting out of sync with the truth, because there is no cache.

We made this choice deliberately, but we did not make it lightly. We discussed for a while whether to add an XP system with a proper curve, with different rewards for harder routes (you might earn more XP from Coastal Sweep than from Castle Loop, for example). In the end, we rejected that idea for two reasons.

First, it would have created perverse incentives. If hard routes gave more XP, players would grind only the hard routes for levels, and the variety of the game would suffer. We want players to drive different routes for different reasons, not all chase the same one.

Second, it would have complicated the conversation between the player and the game. "How do I level up?" should have a one-line answer. With an XP curve, the answer becomes "complete routes, earn variable XP depending on which route and how well you did, reach the threshold which varies by level..." That is not a one-line answer. With our system, the answer is "drive three more routes". That clarity is worth more than any tuning curve could give us.

The cost of this simplicity is that the level number tells you about quantity, not quality. A mate at level fifty who has been completing easy routes carelessly is at the same level as a mate at level fifty who has been three-starring hard routes. The level itself does not distinguish them. But that is fine, because the badge system and the route stats do distinguish them. The level says "this much work". The badges say "this kind of work". Together, they paint the full picture.

One thing we did invest in: the level-up notification. When you complete a run, the server checks whether the completion bumped your level. If it did, the response includes a small flag, and the client triggers the celebration. We considered making the server push a separate notification, but that would have been more network traffic for what is essentially a small UI moment. Better to ride along with the run-completion response.

You know what the elders say? The river that flows in a straight line reaches the sea quickly. Our level system is a straight line. No bends, no slowdowns, no surprise rapids. Just steady forward motion.

## What's Next

The leveling system is solid as a foundation. The places we want to grow it are mostly on top.

We want **level milestones**. Right now, the number ticks up but there is no extra recognition at round numbers. We want level ten, level twenty-five, level fifty, level one hundred to each carry a small permanent achievement. Maybe a different colour for the level number on your profile when you cross level fifty. A small badge for level one hundred. Small markers that stay with you.

We want **a "prestige" option**. Once a player has reached a very high level (let us say level two hundred), they should be able to opt into a prestige reset. The level number visible on the profile goes back to one, but the player gets a small visible "prestige one" marker. Two prestiges, two markers. Some games do this poorly. We want to do it well, but only if the demand is there. We will see.

We want **per-city levels**. Right now your level is global, computed across all your runs in all cities. We want optional per-city levels too, so you can see "level forty mate overall, but level ten specifically in Kumasi". This rewards players who spread across cities and helps newer cities feel less intimidating to enter, because you start fresh there with your own city-specific number.

We want **level-based matchmaking** for PvP challenges. Right now a level one player can challenge a level fifty player. The level one player will almost certainly lose. A future matchmaking layer would default to suggesting opponents within a few levels of your own, with the option to challenge anybody you want anyway. Better defaults, same flexibility.

And we want **a "level coach"**, a small in-game tip system that tells you, when you are close to a level threshold, "two more runs to level six". A small encouragement. Many players play without watching the number too closely. The coach would catch their eye at the right moment.

For now, finish your next three runs. The number will go up. So will the things you can do next. That, that is the whole simple beautiful idea.
