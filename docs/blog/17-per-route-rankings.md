---
title: "Per-Route Rankings"
slug: per-route-rankings
category: competition
status: ready
publishDate: null
twitterThread: null
banner: /map-icons-svg/madina-kaneshie.svg
tags: [ranking, stats, best-times, mastery]
summary: "Every route keeps its own book. Best stars, best earnings, fastest run, perfect days, no-vendor runs."
---

# Per-Route Rankings

## What It Is

Some mates are good at everything. Most mates are great at one or two roads in particular. There is the mate who knows Coastal Road like the back of his hand because that is where he learned the game. There is the mate who has run Castle Loop a hundred times and could probably drive it with his eyes closed (please do not actually). There is the mate who hates the Mountain Loop and refuses to touch it, but the Hilltop Express is his playground.

Per-route rankings give each of these mates a way to be the best at their thing.

For every route in the game, the system keeps a detailed personal record. How many times you have run it. How many times you completed it. How many times you failed. The most stars you ever earned on a single run. How many three-star completions you have. The most money you ever made on it. The fastest you ever finished it. The total passengers you have ever delivered on it. The number of perfect days, where you finished with high resources still left. The number of runs you completed without ever buying from a vendor.

These numbers add up to a portrait of you on each route. Not your weekly total. Not your global rank. Your personal best, route by route, set against your own past. Which is the most honest form of competition there is, oo.

## How It Works

Every time you finish a run, the system updates your route's record book. Some of these updates are simple counters: total runs goes up by one, completions goes up by one if you finished. Some are maximums: best stars only updates if your stars this run are higher than your previous best. Some are minimums: fastest completion only updates if you beat your previous best time. Some are sums: total passengers grows by however many people you carried this run.

The full ledger for each route looks like this.

| Stat | What it tracks |
|---|---|
| Total runs | Every attempt, finished or not |
| Completions | Runs where you reached the end of the route |
| Failures | Runs where you collapsed or ran out of resources |
| Best stars | The most stars you have ever earned on this route |
| Three-star completions | How many times you got the full three stars |
| Best earnings | The most money you have ever made on a single run |
| Fastest completion | Your quickest run from start to finish |
| Total passengers delivered | The lifetime sum of every passenger you carried on this route |
| Total money earned | The lifetime sum of everything you have ever earned on this route |
| Perfect days | Runs you finished with high resources still in the tank |
| No-vendor days | Runs you finished without ever buying from a food, drink, or health vendor |

These stats are the foundation of the badges system, which is the subject of its own article. They are also the foundation of "mastery". A route counts as mastered when you have completed it fifty times. The number is firm because we wanted mastery to mean real practice, not a single lucky stretch. Fifty completions of Coastal Sweep is something. Fifty completions of Hilltop Express is even more something.

You can see all of your per-route stats from your profile in the game. The board shows every route you have ever touched, with all of its numbers in one place. It is one of the most checked screens in the game. Players love to scroll through and watch the numbers climb. The route you have run two hundred times sits proudly at the top. The route you have only tried once sits humbly at the bottom. Both are honest.

The per-route numbers also feed into PvP challenges and the weekly leaderboard, but their main job is just to tell you about yourself. When you start playing a new route, the numbers are all zero. The route is new ground. As you play, you watch them tick up, run by run. That, that is satisfaction.

## The Tech Behind It

The per-route record book is one of the densest pieces of state in the game. Every player has a row for every route they have ever played. That is a lot of rows. We had to build it to be cheap to update on every run completion, and cheap to read when the player opens their profile or the leaderboard.

The structure is what database people call an upsert table. The key is the combination of player identity and route identity. When a run finishes, the server takes the result and updates that row. If the row does not exist yet (because this is your first time on this route), the system creates it. If it exists, the system applies the changes in place. One write per finished run.

Each kind of stat has its own update rule, and the rules are intentionally simple.

- Counters (total runs, completions, failures, perfect days, no-vendor days, three-star completions) add the new value to the old.
- Maximums (best stars, best earnings) take the larger of the new run and the old record.
- Minimums (fastest completion) take the smaller, but with a small twist: a fastest completion of zero means "no time yet recorded", so the first valid time wins regardless.
- Sums (total passengers delivered, total money earned) add the new run's value to the running total.

Mixing these rule types in a single update query takes some care. We had to make sure the database does not accidentally store a worse value as the best, or a slower time as the fastest. We tested that small thing a lot, because if a single update overwrites a player's record incorrectly, there is no recovering it without a full audit.

The reads are interesting. When you open your profile and look at every route, that is a single query against the route stats. The database is indexed on player identity, so finding all the rows for a player is fast even if you have played fifty different routes across the game's lifetime. The data is dense but the access pattern is straightforward.

We also use route stats as the input to the badge system. When the game wants to know whether you have earned a particular badge, it does not re-scan every run you have ever finished. It looks at the route stats, sees that you have, say, two hundred and forty completions across all your routes, and answers immediately. The aggregate work is already done. The badge check is just a comparison.

You know what the elders say? The book of accounts must agree with the box of money. The route stats are the book. The runs are the money. We update them together, and they tell the same story.

## What's Next

The per-route ranking system is robust today, but there are layers we want to add on top.

We want a **per-route global leaderboard**. Right now the global weekly board is aggregated across all routes. We want each route to have its own weekly board. The number one mate on Coastal Sweep this week. The number one on Madina to Kaneshie. Specialists deserve their own podium.

We want **time-attack leaderboards**. The fastest completion time stat is already tracked per player. The natural next step is a global "fastest ever" ranking per route. The mate who completed Castle Loop in the lowest time gets bragging rights for that route forever, or until somebody beats them.

We want **friend comparison overlays**. Open Coastal Road's stats page, see not just your own numbers, but how you compare against three or four chosen friends. The Ghanaian way of competition is direct. We want the screen to invite that.

We want **stat goals**. Player-set targets like "I want to complete Hilltop Express twenty more times" with a small progress bar. The numbers are already there. The motivation layer on top would help players who play casually find personal goals to chase.

And we want a **route mastery ceremony**. Right now, hitting fifty completions on a route is silent. We want it to be a moment. A small popup, a sound effect, maybe a notification to your friends that you have mastered the route. The stats deserve their celebration.

For now, open your profile, look at your numbers, see what they say about you. The route stats do not lie. Neither do we.
