---
title: "Streaks"
slug: streaks
category: progression
status: ready
publishDate: null
twitterThread: null
banner: /assets/flaming-knuckle.png
tags: [streaks, daily, consecutive, motivation]
summary: "Two flames burn in the game. One for showing up every day. One for finishing without failing."
---

# Streaks

## What It Is

The mate who shows up every day is not always the best mate. But over time, the mate who shows up every day will pass the mate who is more talented but only shows up sometimes. This is a truth of any trade in this our country. Consistency wins races. The trotro driver who is on the road by five every morning, including Sundays, ends the month with the most fares. The mate who only does the busy shifts but skips the early mornings ends the month with stories. The streak system in Salifu & Master is built around this idea.

There are two streaks, and they reward different kinds of consistency.

The first streak is your **daily play streak**. Every calendar day you complete at least one run, the streak grows by one. Two days in a row, the streak is two. Two weeks in a row, the streak is fourteen. Miss a day, the streak resets to zero. The next time you play, you start again from one. This streak does not care how well you played or how much you earned. It only cares that you showed up.

The second streak is your **consecutive success streak**. Every time you complete a run successfully, this streak grows by one. Three good runs back to back, the streak is three. Ten in a row, ten. Fail a run (collapse, miss the target, run out of resources), the streak resets to zero. The next successful run starts you again at one. This streak does not care how often you play. It cares how well you play, run by run, without a stumble.

Together, these two streaks measure two different kinds of mate. The dedicated mate who plays every day. The careful mate who never fails. The best mates manage to be both at the same time, and their streaks are something to behold.

## How It Works

When you finish a run, the system looks at the calendar and your previous play history to update your daily streak. If you played yesterday and you played today, the streak grows by one. If you played yesterday but it is now two days later (you skipped one), the streak resets to zero and starts over at one for today. If today is the same calendar day as your last play (you played a second run already today), the streak does not change. It only grows once per day, regardless of how many runs you stack inside that day.

The cutoff is the calendar day in your local time zone. We chose local time over server time for one simple reason: a mate playing in Accra and a mate playing in London should both experience the streak as their day. We did not want a player to lose their streak because the server clock crossed midnight while they were eating fufu.

The consecutive success streak is even simpler. It looks at the run you just finished. If you completed the route and hit your daily target, the streak grows. If you failed (the run ended because you collapsed, ran out of time, or did not meet the conditions), the streak resets to zero.

Both streaks also track a **best ever** value alongside them. Your current streak might be two, but your all-time best might be eighteen. The all-time best does not reset when the current streak does. So even if you broke your streak yesterday, the record of your longest run is still there, sitting in your profile, daring you to beat it. Many players come back specifically to break their old best.

Streaks show up in two visible places. On your profile, you can see both streaks with their current and best-ever values. On the leaderboard, players with active streaks of seven days or more carry a small fire icon next to their name. Players with consecutive success streaks of seven or more carry a small bolt icon. The icons are intentionally subtle. If you have ever seen them next to somebody else's name, you know that mate has been putting in the work.

## The Tech Behind It

The streak math looks simple on paper but it has a few subtle traps that we had to work through during development.

The first trap is time zones. Streaks must respect local time, not server time. A player in Accra playing at midnight should not have their streak rolled to the next day yet, even if it is already morning on a server somewhere else. So we treat every play as happening in the player's local time zone, and the day boundary is the player's local midnight. This adds a small bit of complexity but it is the right call.

The second trap is what "yesterday" means. When the server checks your streak, it does not look at your last run's exact timestamp. It looks at the calendar date of your last play, and the calendar date of today. The difference between those two dates is either zero (same day), one (consecutive day), or more (you missed). This is the kind of thing that sounds obvious but requires you to be careful with the date library so you do not accidentally treat 11:59 PM on Monday and 12:01 AM on Tuesday as the same calendar event.

The third trap is the order of writes. When a run is submitted, the server has to update many things: the route stats, the leaderboard total, the streaks, the badges. These cannot all happen at once, and if something fails midway, we do not want some of them to have updated and others not. So the streak update is part of the same atomic transaction as the rest of the run-completion work. Either all of it happens, or none of it does. The streak number is never out of step with the run record.

The consecutive success streak is even cleaner because it does not involve dates at all. It just looks at the result of the run you just submitted and increments or resets. The work is over before the timestamp matters.

We store both streaks as small whole numbers in your progress record. Current daily streak, current consecutive success streak, best daily ever, best consecutive ever. Four numbers. We chose this minimal storage on purpose. The streak feature is everywhere in the UI and we wanted reads to be near free. Four numbers fit on a finger. The server fetches them in the same query as the rest of your progress and they are available everywhere without a second query.

You know what the elders say? A small drop of water that does not stop falling will eventually break a stone. The streak system is the same. One run a day does not look like much. Thirty in a row is something. A hundred in a row, ah, that is a different mate entirely.

## What's Next

The streak system is solid but it is a foundation we want to build on.

We want **streak protection**. A small one-time-use item, earned through play, that protects your daily streak if you miss a day. We do not want to make streaks too forgiving (then they lose their meaning), but we know real life happens. A way to spend a small reward to save a long streak when you have a genuine bad day would be welcome. Maybe two protections per year.

We want **streak rewards**. Right now the streaks are their own reward, the pride of seeing the number grow. We want to add small bonuses at certain milestones. Daily streak hits seven, you get a free consumable. Hits thirty, you get a small cowries bonus. Hits a hundred, you get a permanent fire icon next to your name that is just a small bit brighter than everyone else's. Small recognition, not pay-to-win.

We want **route-specific streaks**. The current consecutive success streak is across all routes. We want to add a route-specific version: how many times in a row have you completed this specific route without failing? Some routes are so hard that a streak of three on them is impressive. This gives specialists their own kind of streak to chase.

We want a **streak leaderboard**. The Hall of Fame ranks players by weekly wins. We want a parallel board that ranks players by current daily streak. See the mates who have been at it for forty days straight. See the mates who have run a hundred runs without failing.

And we want **streak storytelling**. When a streak breaks, the game should mark the moment. A small "your streak of 23 days has ended on the Coastal Sweep" message. Not punishment, just acknowledgement. Streaks deserve their funerals, the way they deserve their celebrations.

For now, play tomorrow. Then the day after. Watch the number climb. You will see what we mean small small.
