---
title: Dr. Panie
slug: dr-panie
banner: /characters/dr-panie-happy.png
category: characters
status: ready
publishDate: null
twitterThread: twitter-drafts/dr-panie-thread.md
tags:
  - npc
  - vendor
  - medicine
  - health
summary: 'The roadside pharmacist. Paracetamol, herbal mixtures, he keeps you alive.'
---

# Dr. Panie

## What It Is

Every Ghanaian knows him. The man with the table by the roadside, the small wooden stall, the bottles lined up like soldiers. Painkillers, herbal mixtures, the little blue and red pills wrapped in foil. He is not a hospital, he is not a chemist with a degree on the wall, but ei, when your head is splitting at one o'clock and the pharmacy is closed for prayers, the man with the stall is the one you run to. In Salifu & Master, that man is Dr. Panie.

The "Dr." is a title of respect, not of medical school. Out here on the streets, anyone who can stop your suffering for ten cedis earns the title small small. He is the keeper of the health meter, and the health meter, charley, the health meter is the one you cannot afford to ignore. Hunger you can survive a long time. Sanity you can stretch. But health, when health drops, the day starts to fall apart in ways that hurt your pocket.

You know how it is. You drive all morning under the sun, you breathe in the dust from the road, you skip lunch because the work was busy. By afternoon your back is aching, your eyes are burning, and the world has slowed down. That is when Dr. Panie's stall starts to look less like a roadside table and more like a clinic.

## How It Works

Dr. Panie sells three items, each one giving health in different doses. Like Amelia, he is positioned at certain points on the route, and you visit him by tapping when his prompt opens.

| Item | Cost | Health restored |
|---|---|---|
| Energy drink | GHC 15 | +20 |
| Paracetamol | GHC 20 | +30 |
| Herbal mixture | GHC 40 | +70 |

Look at the prices and you will see something. Compared to Amelia, Dr. Panie is cheaper. Fifteen cedis for the energy drink is the cheapest item any vendor sells in the game. That is on purpose. Health drains slightly slower than hunger (you lose about eighty-five points across a full route instead of ninety), and the warning thresholds are gentler. Forty-five for warning, twenty for critical. So you have a small bit more breathing room before the punishment kicks in. But do not let that fool you, oo. When health is gone, it is gone.

The energy drink is your quick top-up. Twenty points for fifteen cedis. Use it when health is fine but slipping, just to keep the bar comfortable. Paracetamol is the middle option, thirty points for twenty cedis, the workhorse. Most days, paracetamol is what you reach for. Herbal mixture is the heavy artillery, forty cedis for seventy points. When the bar is in the red and you need to come back from the brink, the herbal mixture is the only sensible choice. It costs more, but it pulls you all the way back into the safe zone.

There is a temptation, of course. Why not buy the cheapest thing every time? Because cheap and small adds up. Three energy drinks at fifteen cedis is forty-five cedis for sixty health points. One herbal mixture at forty cedis gives you seventy. So if you know you are going to need plenty of health restoration, the herbal mixture is the better deal cedi for cedi. But if you only need a small top-up, the energy drink is the smart move. Match the medicine to the wound. As the elders would say, you do not bring an axe to kill a fly.

And here is one thing to remember. Dr. Panie does not stack with other vendors on the same stop. You are either visiting Amelia or visiting him. So plan your route knowing where each vendor is positioned. A run through the centre of the city might give you two food stops and one medicine stop. A run through the suburbs might be the reverse. Knowing the map is knowing the game.

## The Tech Behind It

Dr. Panie is built on the same foundation as every other vendor in the game. The same data shape, the same purchase flow, the same interaction window. We talked about this in the article on Amelia, and we will say it again here because the principle is important: every vendor in this game is just a small bundle of data with a price tag and an effect. No bespoke code per character. If we wanted to add a fourth vendor tomorrow, a sachet water seller for example, it would take fifteen minutes, not fifteen days.

What makes Dr. Panie a little different from Amelia under the hood is which resource his items affect. Amelia is hardcoded to hunger only, three items, all hunger. Dr. Panie is hardcoded to health, three items, all health. The system itself does not care about this. We could give him an item that restores sanity, or one that gives money, or one that does all three at once. The flexibility is sitting there waiting for design decisions to use it. Sometimes the best engineering work is the work you do not do, the doors you leave open without walking through them.

The health meter, the same machinery runs hunger and sanity. Each meter has a maximum of one hundred, a starting value of one hundred, a drain rate per second, and two threshold lines for warning and critical states. When a meter crosses a threshold, an event is broadcast to the rest of the game. The HUD listens and changes colour, the audio system listens and may play a small alert, the input system listens and adjusts your reaction window. Loose coupling, single source of truth, easy to reason about.

Health drains at roughly thirty-four points per minute. Hunger and sanity drain at thirty-six. Small differences, but they matter over a one hundred and fifty second route. By the time the day ends, you should have used at least one item from each vendor on a normal run, sometimes two from the same vendor on a hard one. The numbers are tuned to make this true without making it punishing.

## What's Next

We have ideas for Dr. Panie that we are still chewing.

We want him to refuse service if you have visited him too many times in one day. The man is not a hospital, he is one stall with one stock, and after the third paracetamol he should fold his arms and say "wait, you are killing yourself with these things, go and rest." This would push players towards Serwaa or sleep cycles, which we will introduce when sanity gets its full rework.

We also want different stalls in different cities. The Cape Coast Dr. Panie should sell coconut water alongside paracetamol, the Kumasi one should have palm wine. Same vendor identity, regional flavour. The data model already supports it, we just need the art and the items.

And we want him to remember. If you have spent a lot of cedis at his stall over many days, his prices should drop a small small for you. A loyalty discount, the way every Ghanaian uncle eventually starts doing for the regulars. The data is there, we just have not built the relationship layer yet.

For now, when the bar turns red, you know who to find. Pay him, take your medicine, and get back on the road. The day is not waiting.
