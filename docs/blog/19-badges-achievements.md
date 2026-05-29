---
title: "Badges & Achievements"
slug: badges-achievements
category: progression
status: ready
publishDate: null
twitterThread: null
banner: /resource-icons-svg/money-3star.svg
tags: [badges, achievements, milestones, mastery]
summary: "Six badges. Five tiers each. Small symbols that tell the story of a mate's career."
---

# Badges & Achievements

## What It Is

When you have driven trotros for a long time, the older mates can tell by looking at you. The way you carry your money. The way you call destinations. The way you handle a difficult passenger without raising your voice. Experience leaves marks on people, and other experienced people read those marks immediately.

Badges in Salifu & Master are the visible version of that. They are small symbols you earn through play, and they sit on your profile telling a story about what you have done in the game. Not the story of one good day. The story of many runs, many cedis, many small choices added up over time. A mate with five gold badges is not the same as a mate with five bronze badges, and other players can see that at a glance.

There are six badges in the system at launch. Each one tracks a different aspect of the work. Each one has five tiers, from the small first achievement to the rare top one that only a few players will ever earn. The badges are not random. Each one rewards a specific behaviour, and over time they paint a picture of what kind of mate you are.

## How It Works

Here is what each badge measures.

| Badge | Counts | Tiers |
|---|---|---|
| Runner | Total runs completed across all routes | 10, 50, 100, 500, 1000 |
| Earner | Total money earned across your whole career | 1K, 10K, 50K, 100K, 500K |
| Perfectionist | Perfect days, where you finished with high resources left | 1, 5, 25, 100, 250 |
| Independent | Runs completed without visiting any vendor | 1, 10, 50, 100, 250 |
| Mastered Routes | Routes you have completed at least fifty times | 1, 2, 3, 4, 5 |
| Dedicated | Days played in a row, your current daily streak | 7, 14, 30, 60, 100 |

Each badge has five tiers. The first tier is bronze, then silver, then gold, then a tier we call "platinum" inside our heads, then a top tier we have not yet named publicly. Each tier asks for substantially more than the one before. The Runner badge wants ten completions to reach the first tier and one thousand completions to reach the top. The gap is intentional. The first tier should feel like a small acknowledgement of effort. The top tier should feel like a serious mountain to climb.

The Earner badge is the most universal. Almost every mate will reach the first tier within a few good days of play. The fifth tier, half a million cedis earned, will take a long career and a lot of patience. Earner is the badge that says you have played a lot of game.

The Perfectionist badge is for mates who care about more than just finishing. A perfect day means you completed the route with most of your resource bars still filled at the end. It is a measure of efficiency, of foresight, of knowing when to push and when to coast. A mate with the top tier in this badge has done that two hundred and fifty times. That is not luck.

The Independent badge is the opposite of buying your way through the game. Every run, you have the option to visit Amelia for food or Dr. Panie for health or Serwaa for sanity. The Independent badge rewards the runs where you finished without visiting any of them. You went the whole route on what you started with. Some of the hardest routes in the game are nearly impossible to complete without vendor visits, which makes the top tier of this badge rare and proud.

The Mastered Routes badge is special because the maximum is just five. Five mastered routes is the top tier, period. To master a route, you must have completed it fifty times. So the top of this badge requires you to have driven five different routes fifty times each. Two hundred and fifty completions, spread across half a dozen routes. It is a badge for the deep player.

The Dedicated badge tracks your current daily play streak. The fire icon on the leaderboard we mentioned in the streaks article comes from this badge. Reaching the top tier means you have shown up every day for a hundred days in a row. That is the kind of dedication that wins championships in any sport.

## The Tech Behind It

The badge system is interesting because it does not actually live inside the run-submission flow. We thought about putting it there. It would have been the most obvious place. Every time a run is finished, walk every badge, check whether the player has crossed a tier threshold, update accordingly. That would work, but it would couple every new badge directly to the run-submission code. Adding a new badge would mean changing the run flow. We did not want that.

Instead, the badges are computed on demand from the underlying stats. The system stores no badge records. It does not need to. The badges are derivations. When the game wants to show your badges, it asks: given your route stats, your total earnings, your daily streak, your run count, what badges do you currently hold? The answer is computed in milliseconds and shown on the profile. If we add a new badge tomorrow, no migration is needed. The new badge just starts being computed alongside the old ones, against the same stats that were already being tracked.

This is the same idea as the route stats feeding the badges feeding the profile screen. Each layer pulls from the layer below. The bottom is the truth (the runs themselves). The next layer up is the aggregate (the route stats). The next layer up from that is the derivation (the badges). The top is the presentation (the icons on the profile). Each layer has a single job. The data only ever flows in one direction.

Each badge is described by a small definition that says what it counts, where to find that count in the player state, and what the tier thresholds are. The definitions live together in one place, and the computation engine walks them in order. We added all six badges in roughly the same week because the framework made each new badge a small data addition, not a big code change. This is one of the parts of the codebase we are proudest of, and we expect the badge list to grow significantly over time without much engineering work.

The icons themselves come from a public icon library, which means we did not have to draw six original icons just for this feature. Each badge gets a specific icon that suggests its meaning (a footstep for Runner, a wallet for Earner, a flame for Dedicated). When a badge has been earned at any tier, the icon shows with a small number next to it indicating the tier. When it has not been earned yet, the icon shows greyed out. The player always sees the full set, including the badges they have not yet earned, because that is part of the motivation.

You know what the elders say? Show me your scars and I will tell you your story. The badges are scars in the good sense. Each one is the visible mark of work done over time.

## What's Next

We are excited about the badge system because it is one of the easiest places to add more content.

We want **secret badges**. Badges that do not show in the badge list until you have earned them. Hidden achievements for surprising behaviour, like completing a run while every resource is below ten percent (we call this "the survivor"), or running ten routes without selecting any consumable boost. The list of secret badges should be a surprise that players discover on their own and brag about in the chat.

We want **route-specific badges**. Right now the badges are global. We want some that are tied to specific routes. A "Castle Loop Specialist" badge for fifty completions of Castle Loop. A "Coastal Sweep Conqueror" badge for ten three-star completions of Coastal Sweep. Specialists deserve specialist badges.

We want **event badges**. When we run themed events, the players who participate should be able to earn a permanent badge from that event. The Independence Day Mate. The Christmas Eve Run survivor. These would not be tier-based, just earned once, but they would carry the memory of when you played and what you did.

We want **a yearly badge**. The mate of the year. Each year, the player with the highest total earnings, or the most weekly wins, or some weighted combination, gets a unique badge that nobody else can earn that year. This would be the rarest badge in the game by definition.

And we want **badge collections**. Earning every tier of Runner unlocks something. Earning every badge in the game unlocks something rare. We are not sure yet what those somethings should be, but we know we want completion to mean completion.

For now, look at your profile, see which badges you have, and which are close. The numbers tell you the rest. The work, like always, is the work.
