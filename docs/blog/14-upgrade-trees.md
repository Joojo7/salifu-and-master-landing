---
title: "Upgrade Trees"
slug: upgrade-trees
category: vehicles
status: ready
publishDate: null
twitterThread: null
banner: /in-game-screenshots/upgrade-shop.png
tags: [upgrades, progression, capacity, speed, stamina]
summary: "Capacity, speed, stamina, health, sanity, reaction. Six trees, fourteen upgrades, one career."
---

# Upgrade Trees

## What It Is

The bus you start with is not the bus you finish with. Even before you can afford a bigger trotro, you can make the one you already have better. Stronger engine. Wider doors. A more patient mate who is harder to tire out. A driver who reads the road faster. The game calls these upgrades, but in our heads, they are the small investments every mate makes in himself and his bus across a long career.

There are fourteen upgrades in the game right now. They are organised into six trees: capacity, speed, stamina, health, sanity, and reaction. Each tree improves something specific. Capacity gives the bus extra seats. Speed makes her move quicker. Stamina, health, and sanity reduce how fast Salifu gets tired, hurt, or stressed during a run. Reaction widens the window you have to catch passengers at stops. Each tree has two or three tiers, and each tier is more expensive and more powerful than the one before.

The upgrades, like the buses, are a money sink with purpose. You earn money on the road, and you spend it on the things that make the road easier. You cannot buy your way past skill, but you can buy your way out of bad habits. Always running out of stamina? There is a tree for that. Always missing the stop window? There is a tree for that too. The upgrades are honest about what they fix, and the player learns over time which trees fit their style.

## How It Works

Each upgrade has three things attached to it: a cost in cedis, a list of requirements, and a list of effects.

The cost is what you pay. The requirement is what you must already have. The effect is what changes when you buy it. A tier one capacity upgrade costs three thousand cedis, requires you to be at least player level two, and adds three seats to whatever bus you are driving. A tier two capacity upgrade is more expensive, requires you to first own tier one, and adds four more seats on top. A tier three is more expensive still, requires both tier two AND level eight, and adds five more seats. The pattern is the same across every tree. Climb a tier, get a bigger benefit, pay more for it.

Here is what each tree does. Look at the table small small. There is real strategy in here.

| Tree | What it improves | Tiers | What full investment gives you |
|---|---|---|---|
| Capacity | Extra seats on the bus | 3 | Up to 12 more passengers on any bus you drive |
| Speed | Base speed multiplier | 3 | Bus moves at 1.35x base speed |
| Stamina | Slower hunger decay | 2 | Hunger drops 30% slower than normal |
| Health | Slower health decay | 2 | Health drops 30% slower than normal |
| Sanity | Slower sanity decay | 2 | Sanity drops 40% slower than normal |
| Reaction | Wider stop windows | 2 | 30% more time to catch passengers at each stop |

The capacity tree is the most dramatic. A fully upgraded capacity tree adds twelve seats. That is a Hyundai County converted into something close to an Etalon, without paying Etalon prices. The speed tree is also strong but expensive. A fully upgraded speed tree multiplies your base speed by one point three five, which means a fully loaded VW T3 is suddenly moving like a starter Toyota Hiace.

The mate-side upgrades (stamina, health, sanity, reaction) cost less than the bus-side upgrades but they matter more on the hard routes. A long run through Coastal Sweep or Grand Tour will not kill you because the bus is too slow. It will kill you because Salifu collapses from hunger, or his sanity hits zero, or he misses three stop windows in a row because the master's shouting threw off his rhythm. Stamina, health, and sanity buy you time. Reaction buys you forgiveness.

Most upgrades have **level requirements** on top of the chain requirement. Tier one capacity wants level two, tier two capacity wants you to already have tier one, and tier three capacity wants tier two AND level eight. The level gates exist so a new player cannot just dump their starting money into the most powerful upgrade and skip the early game. You have to earn your level by completing runs, and then the deeper upgrades open up.

## The Tech Behind It

The upgrade system uses the exact same requirement language as the route unlock chain. Every upgrade describes its prerequisites as a structured object, and the same checker that opens routes also opens upgrades. That sharing was deliberate. We did not want two parallel progression systems with two sets of rules. If a future feature needs to be gated by something more complex, like "must have completed Castle Loop AND owns at least tier two of speed", the checker already supports it. The same combinators that work for routes work for upgrades.

The effects are also data, not code. When you buy an upgrade, the system records that you own it. When the game needs to compute, say, your bus's effective capacity at the start of a run, it walks every upgrade you own, collects every effect, applies them in order, and gives you the final number. Capacity upgrades stack additively (plus three, plus four, plus five becomes plus twelve). Speed upgrades multiply (one point one, one point two, one point three five). Resource decay upgrades multiply down toward zero. Stop window upgrades multiply up away from one. Each effect type has its own combination rule, and that rule is the same across every consumer.

This separation between "what an upgrade is" and "how it stacks" is one of the parts we are proudest of. A designer can add a new upgrade, give it an effect type that already exists, and the math just works. We do not have to write new code unless we are introducing a brand new kind of effect. New tiers, new costs, new requirements: all data.

The previous-tier link is also data. Every upgrade above tier one points back to the tier it replaces. This lets the UI render the trees correctly (showing the chain from tier one to tier three in order) and lets the server check that you have not skipped a step. If somebody forges their save and tries to buy tier three capacity without owning tier two, the server says no. The same chain that walks the requirement checker walks the upgrade tree.

The costs themselves are kept in a central balance file, not scattered through the upgrade definitions. That choice came from painful experience. Game balance changes often during development. Every time we adjusted the economy, we wanted to be able to retune costs without hunting through dozens of upgrade definitions. So the cost lives with the upgrade now, but the prices and the multipliers themselves come from the same balance file that controls the trotro prices and the master's cut percentages. One file, one source of truth, and any change there ripples through the whole economy consistently.

You know what the elders say? A wise man checks the price tag before he reaches for his pocket. We built the system with the same caution. Every upgrade has a clear cost, a clear effect, a clear gate. Nothing hidden.

## What's Next

The upgrade trees cover the core game today, but there is plenty of room to grow.

We want **route-specific upgrades**. Imagine an upgrade that only applies on coastal routes (faster acceleration on flat ground) or only on hill routes (better climbing on slopes). This would push players to plan their loadout for the road they are about to drive, the way a real driver chooses tyres for the weather.

We want **mate-specific upgrades** that change Salifu's behaviour. A "calm voice" upgrade that makes Master complain less. A "sharp eye" upgrade that highlights vendors more clearly. These are more about feel than raw numbers, but they would deepen the connection between the player and the mate.

We want **respec**. Right now, an upgrade you bought is yours forever. We want to introduce a small cedis cost to undo an upgrade and reclaim a portion of what you spent. This would help players who upgraded the wrong tree early and feel stuck. The cost should not be free (otherwise nobody commits) but it should not be punishing either.

We want **set bonuses**. Buying all three tiers of speed gets you one thing. Buying all of speed AND all of capacity together unlocks a small bonus on top. This rewards the player who specialises and gives a reason to fully complete a tree instead of dabbling across all of them.

And we want **prestige tiers**. Once a player has fully upgraded every tree in the game, what then? We want a fourth tier on the most popular trees, a prestige level that is dramatically more expensive but provides a small extra edge. For the top players who have already done everything else, this gives them something to chase.

For now, look at your trees. Spend on the one that hurts you most. The trotro will thank you. So will Master. So will your weekly leaderboard rank.
