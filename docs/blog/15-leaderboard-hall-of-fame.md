---
title: "Weekly Leaderboard & Hall of Fame"
slug: leaderboard-hall-of-fame
category: competition
status: ready
publishDate: null
twitterThread: null
banner: /screenshots/mobile-in-game/leaderboard.png
tags: [leaderboard, ranking, competitive, hall-of-fame]
summary: "Every Sunday the board resets. The mates who finish on top join the legends."
---

# Weekly Leaderboard & Hall of Fame

## What It Is

There is a saying in the football, that the league table does not lie. You can have one good match, you can have one bad match, but after thirty-eight games, the table tells the truth about who is who. We borrowed that idea for Salifu & Master. Every player can have a great run on a Tuesday afternoon, can earn ten thousand cedis in a single trip and feel like the king of Accra. But over a whole week, day after day, route after route, the leaderboard tells you who really put in the work.

The weekly leaderboard is the heart of the competitive side of the game. It is a public, global ranking of every mate's total earnings across the week. Sunday to Saturday, all routes, all cities, all difficulty levels added up into one honest number. Whoever earned the most across all the work they did sits at the top. Whoever earned the second most sits below. And so on, down to wherever you yourself are sitting today.

Then on Sunday, the board resets. Earnings go back to zero. Last week's top mate starts again from scratch like everybody else. This is the rhythm. New week, fresh slate, new chance to climb.

The Hall of Fame is what happens after the board resets. Every mate who finished number one for that week gets a star added to their permanent legend. Two stars means you have won the weekly twice. Five stars means you have won five times in your career. Some mates have never had a number one week. A few mates have many. The Hall of Fame ranks players not by money, but by how many times they have stood on top of the weekly mountain. That, my friend, is a different kind of pride.

## How It Works

Every run you complete adds its earnings to your weekly total. The total is computed live. You can open the leaderboard during the middle of the week, see your current standing, see who is just above you, see who is just below. It updates with every submitted run. We do not hide the standings. We want you to know exactly how close you are to climbing one rank, or how close the mate behind you is to overtaking you.

Here is the rhythm.

| Day | What happens |
|---|---|
| Sunday morning | Last week's board closes. The number one mate is added to the Hall of Fame. New week begins, everyone at zero. |
| Sunday to Saturday | Earnings accumulate live across every run, every player, every route. |
| Saturday night | Last few hours of the week. People who have been close to the top all week put in long shifts. |
| Sunday morning | Reset again. |

Top three mates each week receive a cowries prize. Number one gets the most, number two gets less, number three gets enough to feel proud. The prize is small in terms of cedis but it is real in terms of cowries, which means real boosts on next week's runs. Win this week and you have a small head start on next week.

The Hall of Fame is the bigger long-term flex. It does not reset. The board there ranks everyone by total weekly wins, ever. The mate with twelve weekly wins is above the mate with eight, regardless of when they earned them. A new player who joins the game today and starts winning weeks can climb the Hall of Fame quickly. A veteran who has not won a week in two months will still sit high if they have a long career of wins behind them.

We deliberately separated these two systems because they reward different things. The weekly leaderboard rewards consistent grinding inside a short window. The Hall of Fame rewards long-term excellence across many windows. A mate could be very consistent and earn second place every week for a year, and not appear in the Hall of Fame at all because they never quite hit number one. Another mate could play sporadically, only show up when an event rolls around, win the week each time they play, and end up high in the Hall of Fame. Both are legitimate. The board is honest about what each one is measuring.

## The Tech Behind It

The leaderboard is the most read part of the game. People open it constantly. Players check their rank multiple times a day during a tight week. So the system had to be fast above all else.

Every successful run pushes a small update to a per-week, per-route, per-user record. That record stores the total earnings and the total runs for that combination. When we want the leaderboard for the week, we sum across routes for each user and rank them. The structure looks like a big spreadsheet behind the scenes: rows for users, columns for the week and route, cells for the running totals. Reading the leaderboard is a sum-and-sort. Writing to it is an upsert against one cell.

Because reads are so frequent, we cache the result in the server's memory for a short time. The cache is per-week. When you open the board, if the cache is fresh, you get the answer in milliseconds. If the cache is stale, the server runs the sum query, caches it, and serves it. The cache has a short lifetime so that any new run completed in the last minute or two shows up on the next read. We chose this short lifetime deliberately. We want the board to feel live without hammering the database every time somebody checks their rank.

The Hall of Fame works differently. It does not need to be live. Whoever wins this Sunday is the legend for this week, and once that decision is made, it does not change until next Sunday. So we compute the Hall of Fame once per week and store the result. Opening the Hall of Fame is a single quick read against a small precomputed table. No sums. No sorts. The work was already done when the week closed.

Fairness was the second design pillar. Every run that contributes to the leaderboard is validated on the server when it is submitted. The client cannot just say "I earned ten million cedis on that last run." The server checks the run against the bus you were driving, the route you ran, the time it took, and the rules of the game. If the numbers do not match what is possible, the run is rejected and your leaderboard total does not move. We do not advertise the validation rules because the people who would try to abuse them are reading this too, but the rules are real and they are strict.

The third pillar was making it impossible to lose progress. Every run is written before any leaderboard total is updated. If anything fails midway, the run is still recorded, but the leaderboard is recomputed on the next submission. We never end up in a state where a player's leaderboard total includes a run we cannot find.

You know what the elders say? A market that does not weigh the goods properly is no market at all. A leaderboard that does not measure honestly is no competition at all. We took that seriously.

## What's Next

The leaderboard is a foundation. We have many things we want to build on top of it.

We want **seasonal leagues**. Right now there is one global leaderboard. We want to introduce leagues based on player level or career duration. A new player should compete with other new players, not with veterans who have been at it for months. The veterans should compete in a higher league with bigger prizes and more demanding entry rules. Same rhythm, but stratified.

We want **per-route weeklies**. The current leaderboard is global. We are working on per-route boards too, which is the subject of a separate article. Imagine being the number one Coastal Sweep specialist for the week. Different kind of pride.

We want **a friends-only leaderboard**. Add a few of your friends in the game, see the same weekly board with only the players you know. Most players do not care about the global number one. They care about beating their cousin. We want to give them that.

We want **richer Hall of Fame entries**. Right now the Hall of Fame records who won how many weeks. We want to add the details: which week they won, what their winning total was, on which routes, with which trotro. Each Hall of Fame entry should tell a small story, not just a count.

And we want **a Hall of Shame**. Half a joke, half real. The mate who collapsed the most this week. The mate who had the worst single-run earning. The mate who paid the most to the master in one route. Small honours for small disasters. The Ghanaian sense of humour does not let pride run unchecked. The Hall of Shame would keep things grounded.

For now, check your rank, do the work, come back on Sunday. The board is open. The legend is waiting.
