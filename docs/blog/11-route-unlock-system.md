---
title: Route Difficulty & Unlock System
slug: route-unlock-system
category: routes
status: ready
publishDate: null
twitterThread: twitter-drafts/route-unlock-system-thread.md
banner: /in-game-screenshots/route-select-wide.png
tags:
  - progression
  - routes
  - unlock
  - stars
summary: >-
  Easy to hard, route by route. The progression chain that keeps every player
  honest.
---

# Route Difficulty & Unlock System

## What It Is

Every mate's career follows the same arc. You start on a route the master trusts you with, you prove yourself, you graduate to something harder. Nobody hands a fresh mate the Grand Tour on day one. You earn the right to drive the long roads, and the way you earn it is by doing the short roads well.

Salifu & Master works the same way. When you boot the game for the first time, you do not see every route in every city. You see Madina to Kaneshie, the friendly cross-Accra run that every Ghanaian has taken at least once. That is your starter. From there, the map opens up small small. Finish a route, that route's neighbour unlocks. Hit the right combination of stars, the harder routes appear. Earn enough across a whole city, the next city becomes available.

We thought hard about how to do this. We did not want a game where you grind for ten hours to see the second route. We also did not want everything dumped on the player from minute one. The chain we built sits in between. It is fast enough that you feel progress every couple of runs, but slow enough that when you finally drive the Grand Tour, you feel you have earned it. That balance, it is everything.

## How It Works

The progression chain has three layers, and each layer asks something different from you.

The first layer is **route completions**. Some routes unlock simply because you finished the one before them. Coastal Road in Cape Coast opens up the moment you have completed Castle Loop, regardless of how many stars you earned. The game just wants to see you have done the work. This layer is forgiving. It does not punish you for collapsing on your first attempt or missing your daily target. It only asks "have you driven this route from end to end?"

The second layer is **star mastery**. The harder routes do not unlock from completion alone. They want stars. A route can give you up to three stars per run, awarded based on how much you earned against the daily target and how much resource you had left at the end. To unlock Hilltop Express, the system might check that you have driven Castle Loop at least once and earned at least two stars on it. The harder the next route, the more stars the gate asks for. This is where the game starts separating the mate who plays carefully from the mate who just shows up.

The third layer is **map mastery**. To move from one city to another, the game looks at your total stars across the whole previous city. Kumasi does not unlock until you have earned six stars across all of Cape Coast. Not six stars on one route. Six stars added up across every Cape Coast route you have run. This forces you to spread your skill across the city, not just master one easy route and run it forever.

The result is a network of gates that pushes you forward without pulling you in any one direction. You can chase stars on the routes you love, you can grind completions on the routes you tolerate, you can explore a whole new city when you are ready. The chain is flexible enough that two players who start on the same day can end up at very different points in the map after a week, depending on what they chose to focus on.

One important detail, oo. The chain only ever opens forward. Once a route is unlocked, it stays unlocked. Once a city is open, it stays open. The system never takes away what you have earned. If you go three weeks without playing, your stars do not expire, your unlocks do not lock again. The mate who comes back after a break finds the city exactly the way he left it.

## The Tech Behind It

The whole unlock system is built around one core idea: requirements are data, not code.

When we set out to design this, the temptation was to write a big function full of if-else statements. "If the route is Hilltop Express, check stars on Castle Loop. If the route is Mountain Loop, check completions on Forest Trail." That kind of code works on day one and becomes a nightmare by day fifty. Every new route is another branch. Every change is a hunt through tangled logic. We did not want that.

So we made each route's unlock condition a small structured object. The object names a type, the type names the kind of check the game should run, and the rest of the fields are the parameters of that check. "Route completions of route X at least N times." "Route mastery of three stars on route Y." "Map mastery of six stars across map Z." These are the basic building blocks. There are six or seven of them in total, and between them they cover every gate in the game.

What makes the system powerful is composition. We can combine requirements with two combinators. The first says "all of these must be true." The second says "any one of these is enough." That gives us the ability to express almost any unlock condition without writing new code. A route can require "you have earned three stars on Castle Loop AND completed Forest Trail twice" or "you have earned two stars on EITHER Coastal Road OR Hilltop Express." Designers describe the gate, the system checks it, and no engineer has to touch a function.

The checker itself is a small piece of logic that walks the requirement object and answers true or false. It runs against the player's current state: how many times they have completed each route, how many stars they have on each, what their level is, which upgrades they own. The state is the truth. The requirement is the question. The checker compares them.

We also added one safety net for fairness. Every route checks its unlock condition not only on the client, where the player sees it, but also on the server, where progress is saved. If somebody tried to forge their save and play a route they have not earned, the server would notice and reject the run. We did not build this because we expected cheating. We built it because once the leaderboards became real, fairness became real. The same chain that gates the menu also gates the books.

You know what the old people say? A child who climbs a tree must climb the lower branches first. The route chain enforces that on the design side. The dual client/server check enforces it on the engineering side. Both serve the same idea: every mate earns the same way.

## What's Next

The unlock system is solid, but it has plenty of room to grow.

We want **event-gated routes**. Special weekend-only or holiday-only routes that ignore the standard chain. Imagine a Christmas Eve route that only opens between the twenty-third and twenty-fifth of December, and only if your daily streak is at least three days. The combinator system already supports time-based requirements in theory. We just have not wired the calendar in yet.

We want **mate-skill gates**. Right now the chain is based on what you have driven and earned. We want it to also start checking your stat upgrades. A route through Hilltop Express on a heavy bus could require at least one tier of speed upgrade. This would push players to spend their hard-earned money on the right upgrades for the road, not just hoard.

We want **alternate paths through the chain**. Right now Cape Coast unlocks linearly, route by route, with a few small branches. We want some routes in larger cities to have two or three different unlock paths. A patient player who grinds completions could open it one way. A skilled player who hunts stars could open it another way. Same destination, different journeys.

And we want **hidden routes**. Routes that do not appear in the menu until you have done something unexpected, like reach the harbour at midnight, or pass a vendor without buying anything for ten runs in a row. The chain framework can express these conditions. The fun is in the discovery.

For now, the chain you see is the chain we shipped. Play through it. Earn the stars. The harder routes are not hidden from you, they are waiting for you. Come and meet them.
