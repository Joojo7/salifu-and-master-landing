---
title: Amelia the Food Vendor
slug: amelia-food-vendor
banner: /characters/amelia-happy.png
category: characters
status: ready
publishDate: null
twitterThread: twitter-drafts/amelia-food-vendor-thread.md
tags:
  - npc
  - vendor
  - food
  - amelia
summary: Waakye and jollof on the roadside. She keeps you fed.
---

# Amelia the Food Vendor

## What It Is

You know how it is when the work is hard. You wake up early, you skip breakfast, and by ten o'clock your stomach is already calling your name. In Salifu & Master, hunger is not just a feeling. It is a meter on your screen, and that meter, it does not joke. It starts at one hundred and it falls fast fast as the day rolls on. By the time you have done one full route, you have lost ninety points. Ninety. If you do not eat, you finish the day on fumes.

Amelia is the woman who saves you. She is the roadside food vendor. The big steaming pot, the dish, the spoon that does not stop moving, that is her. You will find her stationed at certain points along your route, ready to feed you when the hunger starts to bite. She is not your friend, she is not your boss, she is something better. She is the person standing between you and an empty stomach. Without her, charley, the day is finished before it begins.

In this our Accra, the food woman is a kind of saviour. The taxi driver, the mate, the office worker on lunch break, all of them know that one face that always has rice ready. As the elders say, an empty sack cannot stand. Amelia, she makes sure your sack is never empty.

## How It Works

Here is the thing about Amelia. She does not give anything for free. This is business, this is Ghana, every plate has a price. She sells three items, and each one fills your hunger meter by a different amount.

| Item | Cost | Hunger restored |
|---|---|---|
| Waakye (small) | GHC 25 | +30 |
| Waakye (large) | GHC 50 | +65 |
| Jollof | GHC 70 | +100 |

Look at the numbers small small. The small waakye is twenty-five cedis for thirty hunger points. The large waakye is fifty cedis for sixty-five points, so cedi for cedi, the large one carries slightly better value. But jollof, ah, jollof is the showstopper. Seventy cedis fills the meter completely. From the red zone to full. If your hunger is on the floor and you have the cash, jollof is the move.

When you approach her position, a window opens. You tap, you pick what you want, the cedis leave your wallet, the hunger climbs. Simple. The whole thing takes a few seconds, exactly like real life. The trotro is waiting, the road is calling, you cannot stand around chopping for too long.

But here is where the strategy enters. The hunger meter has two warning lines. Below thirty-five, a warning fires and the colour shifts. Below fifteen, you are in critical territory and the screen will not let you forget. Hit zero, herh, then the day starts to punish you. So timing your visit is half the game. Some players run a tight schedule and branch to her once at the midway point of every run. Others wait until the warning lights come on and then make a strategic choice between the cheap waakye and the full jollof, depending on how much money the day has been earning.

And please, do not forget about the budget. Spending seventy cedis on jollof when you have made only one hundred and fifty for the day is, how do they say, not the wisest move. Master is still going to take his cut at the end. The mathematics must reach. As the old people would say, the one who eats too much in the morning has no fufu in the evening.

## The Tech Behind It

For the developers reading, here is what is happening when you visit Amelia.

Every item Amelia sells is described as a small piece of data, three things only: a price in cedis, the resource it affects, and how much it adds to that resource. There is no special code path for waakye versus jollof. The same machinery handles them both, and the same machinery handles every other vendor in the game. We learned early on that if every NPC needed bespoke logic, we would drown in special cases. So we made the abstraction strict. You describe what the vendor sells, the system does the rest.

When you tap to buy, three things happen in order, and they happen as a single unit. First we check that you have enough money. If not, the purchase quietly fails and nothing changes. Second we deduct the cost. Third we apply the resource effect, and that effect is clamped to one hundred so you cannot end up with one hundred and twenty per cent hunger. If any step fails, the whole thing rolls back. We do not want a state where the money is gone but the hunger did not climb. Atomic, predictable, no surprises.

The interaction window itself, that is where some of the most careful work lives. We want the player to feel a small bit of urgency without feeling cheated. So the prompt has a fixed duration, and the system queues it the moment your bus enters her radius. If you are paying attention, you have time. If you are distracted, you miss it. Just like life.

One more thing worth mentioning. The vendor's stock never runs out. We considered making waakye sell out as the day progresses, the way real Ghanaian food vendors do (try buying jollof at five in the evening, ei, you will see). But we decided against it for now, because it adds a layer of unpredictability that does not benefit the core loop. Maybe one day we will revisit it, especially for special events.

## What's Next

Amelia is not finished. We have plans.

We want to expand her menu. Kenkey and fish, fufu and light soup, banku and tilapia, the full Ghanaian cookbook. Different items could affect different resources. Kenkey for endurance, fufu for full belly, light soup for a small sanity bump. The menu would tell its own story about the day.

We also want her to react to you. If you have visited her three days in a row, she should greet you by name. If your hunger is on the floor when you arrive, her face should show concern. The portrait system is already in place, she has six different expressions waiting in the game. We just need to wire up more dialogue triggers.

And eventually, we would love to give Amelia an arc of her own. Maybe she has a daughter writing exams. Maybe one day she is not at her usual spot, and you wonder where she went. The vendors should not just be vending machines. They should be people. That is what we are working towards.

For now, treat her well, pay her promptly, and never, ever skip breakfast. That is what I am saying.
