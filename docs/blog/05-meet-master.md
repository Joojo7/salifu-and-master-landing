---
title: Meet Master
slug: meet-master
category: characters
status: ready
publishDate: null
twitterThread: twitter-drafts/meet-master-thread.md
banner: /blog-images/05-meet-master.png
tags:
  - npc
  - master
  - story
summary: 'Your boss, the bus owner. He takes his cut and he''s not happy when you fail.'
---

# Meet Master

## What It Is

Every trotro has an owner. The mate hustles, the passengers pay, and at the end of the day, somebody is waiting to collect what is theirs. In Salifu & Master, that somebody is Master.

He is your boss. He owns the bus. You drive it, you fill it, you sweat for the fares, and when the sun goes down, he takes his cut before anything reaches your pocket. That is the job. That is the deal. Master, he is not the villain of the story, but he is also not your friend. He is the man whose face you must answer to when the day is done.

You know how it is in this our Accra. The bus owner sits at the station with his book and his calculator. You can have a thousand passengers, but if the day's takings do not reach his target, the conversation will be short. As our elders would say, the goat does not own the rope around its neck. Master, he holds the rope.

## How It Works

Here is how Master enters your day.

In the morning, he gives you your assignment. The route, the bus, the expectation. Three different briefings depending on what you are driving:

- Small bus? "My bus is small but quick, keep the passenger turnover high. Make frequent stops and don't come back with empty pockets."
- Medium bus? "My bus has decent room, fill those seats and make every stop count. I want my cut, so don't waste time."
- Big rig? "Pack them in. With this many seats, there's no excuse for missing target. Make me proud."

You see the pattern? The bigger the bus, the higher the expectation. He is not unreasonable, but he is not soft either.

Then you go and work. Stops, passengers, vendors at the roadside, the Lord's name being called when traffic stops you cold. All day long, money is moving in and out. By evening, you settle.

The settlement is where Master shows his face. Literally. On the day-end screen, his portrait is right there, and his mood, chale, his mood will tell you exactly how the day went before you even read the numbers. Six different faces:

- **Happy** when you smashed it
- **Smirk** when you did well
- **Annoyed** when you were just average
- **Sad** when the day was poor
- **Tired** when it was very poor
- **Furious** when you failed completely

If you see the furious face, you know something. You know the next words on the screen will be: **"Master is not happy. Try again."**

And then there is the cut. The money. His percentage, painted in red on the breakdown so you cannot miss it. On the starter bus, the Volkswagen T3, he takes thirty per cent. *Thirty.* Out of every cedi, three pesewas leave your hand the moment you collect the fare. The Renault Estafette? Same thirty. The Bedford CF, he comes down small to twenty-nine. The Peugeot J5, also twenty-nine.

But here is where it gets interesting. As you climb the fleet, his cut comes down:

| Bus | Master's cut |
|---|---|
| Volkswagen T3, Renault Estafette | 30% |
| Bedford CF, Peugeot J5 | 29% |
| Toyota Hiace | 27% |
| Sprinter 315 CDI | 26% |
| Iveco Daily | 25% |
| Hyundai County | 23% |
| Tulaga MA3 | 22% |
| Etalon A079 | 20% |

You see what I am saying? Buy the big bus, pay him less. The Etalon A079, the king of the fleet, only twenty per cent goes to Master. Eighty per cent is yours. That is real money.

But please, do not fail. If you fail the day completely (zero stars), Master takes his cut as usual, then a **failure tax** of forty per cent comes for whatever is left. So a thousand cedi day on a thirty per cent bus becomes seven hundred after Master, then two hundred and eighty more is gone to the failure tax, and you walk home with four hundred and twenty. Less than half. Herh.

There is one mercy in this whole thing, and it is called "Master's Mercy". It is a consumable boost. Buy it before a run and Master takes only half his usual cut for that one day. On the starter bus, that is fifteen per cent instead of thirty. Use it on a day you know will be big.

## The Tech Behind It

For the developers reading, here is what is happening under the hood.

Every percentage in our economy is stored as basis points, which is just a fancy way of saying ten-thousandths. Thirty per cent is three thousand basis points. Why all this trouble? Because money in this game is whole cedis only, no fractions floating around to surprise you. By keeping the percentages as basis points and rounding down at every step, we never end up with a half pesewa lying somewhere causing confusion. Integer in, integer out. Clean.

The settlement is calculated in the same way on your phone and on our server. We compute it twice on purpose, once on the device so you see the numbers immediately when the day ends, and once on the server when the run is officially recorded. The server's word is the final word. If somebody tries to be clever and tamper with the device, the server quietly disagrees and the books still balance. The order of operations is fixed: first we add up the gross earnings from your fares, then we take Master's cut from that, then if you failed the day we apply the failure tax to whatever was left, and only the final figure reaches your bank.

Master's mood on the day-end screen is decided from one number, the ratio of what you earned to what the route was targeting. That ratio walks across a few thresholds and picks one of the six portraits. No animation rig, no fancy state machine, no complicated mood engine. Just six images that swap based on a single comparison. Sometimes the simple solution is the right solution.

The "Master's Mercy" boost plugs in the same way. When the boost is active, we apply a single multiplier to his cut before settling. Half mercy means half the cut. The settlement code does not even need to know which boost was used or why, it just multiplies. That is the beauty of keeping these things small and predictable. Easy to extend if we ever add a "Master's Wrath" event that doubles the cut. (Do not give us ideas oo.)

## What's Next

The bones are there, but Master can do more.

We want to give him voice lines, not just text. Imagine starting a run and hearing his actual voice, in that classic uncle tone, telling you not to come back empty-handed. We want more dialogue variety, so the same three briefings do not repeat for a hundred days. And maybe, eventually, a relationship system, where consistent good performance softens his cut over time, the way a real boss starts to trust you small small.

For now, he stays the way Ghanaians know bosses to be: fair when you produce, hard when you do not, and always, always counting his money. Respect him, work hard, and when the failure tax comes for somebody, let it not be you.

That is what I am saying.
