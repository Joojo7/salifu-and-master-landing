---
title: 'Serwaa, Your Girlfriend'
slug: serwaa-girlfriend
category: characters
status: ready
publishDate: null
twitterThread: twitter-drafts/serwaa-girlfriend-thread.md
tags:
  - npc
  - serwaa
  - sanity
  - relationship
summary: Visit her to restore sanity. The cheapest five cedis you will ever spend.
---

# Serwaa, Your Girlfriend

## What It Is

You know how it is when the day is grinding you down. The traffic, the noise, the same passenger arguing about change for the third time. Master is calling about target. Your back is aching. Your head is heavy. By midday you are not even angry any more, you are just tired in a way that sleep cannot fix. That tiredness, that quiet exhaustion that sits behind the eyes, in this game we call it sanity. And when sanity goes down, the whole day starts to feel like wading through mud.

Serwaa is the answer. She is your girlfriend. She is also the cheapest, fastest, most effective sanity restore in the game. A short visit, a small gift, a moment of softness in a hard day, and suddenly the world looks different. The colours come back. The road feels shorter. You remember why you do this work in the first place.

The Serwaa visit is different from buying waakye or paracetamol. With Amelia and Dr. Panie, you are paying for a product. With Serwaa, you are paying for time and presence. Five cedis. That is what it costs. Five. For a complete reset of your sanity meter and a small bonus to your hunger. Charley, where else in this our Accra are you finding a deal like that?

## How It Works

You will see Serwaa marked on the map at certain points on the route. When your bus enters her radius, the prompt opens for four seconds. Tap once to confirm, the visit takes another five seconds, five cedis leaves your wallet, and that is it.

What you get back is everything. Sanity goes from wherever it was, even from zero, all the way back to one hundred per cent. Not "plus seventy", not "plus fifty". Full. Reset. Maximum. And on top of that, your hunger goes up by five points, just a small bonus, like she handed you a piece of bread on the way out.

Compare this to the food and medicine vendors. Amelia's best item is jollof at seventy cedis for one hundred hunger. That is the gold standard for any meter restore. Serwaa gives the same one hundred per cent restore, on a different meter, for five cedis. Five. The economics here are not subtle. Visit Serwaa whenever you can.

Now, there is a catch. There must always be a catch. Serwaa is not at every stop. She is at specific points on certain routes, and you cannot bring her to you. So if your sanity is on the floor and your route does not pass her position, you are out of luck for that day. This means choosing your routes is itself a sanity strategy. Routes that pass through her zones are easier to survive on long hard days. Routes that do not, herh, you must manage your own mind through other means.

There is also the question of how often. Sanity drains at the same rate as hunger, about ninety points across a full route. So if you are running back-to-back routes without a Serwaa visit in between, by the third or fourth run your sanity will be hanging by a thread. The visit is so cheap that there is no reason to skip it when she is on the map. Branch in, top up, branch out. Five cedis well spent.

The relationship itself, well, it is one-sided in the current build. Serwaa is always happy to see you. She does not get tired of the same face every day. The portrait switches between two expressions, happy and sad, and right now you only see the happy one. The sad expression, that one is waiting for the day we add neglect mechanics. As the elders say, the heart that is not visited grows cold. We will get there.

## The Tech Behind It

Serwaa is built differently from the food and medicine vendors, and that difference is intentional.

When you visit Amelia or Dr. Panie, the system is essentially running a small purchase: pay this, get that resource bumped by this amount. The transaction is simple and fully described by data. Three numbers and an icon, that is the whole vendor item.

Serwaa is a "special NPC" with her own profile. The visit is not a purchase, it is an interaction with its own rules. The prompt window is its own duration, the visit itself takes a separate amount of time, and the effects are richer. One full sanity reset (described as a percentage, so the system understands "to the maximum" rather than a flat addition), one small flat hunger bonus, one fixed cost. The data shape is small but it is its own shape, separate from the vendor catalogue. We made this distinction because we wanted Serwaa to feel like a person, not a stall.

The percentage-based effect is worth a small note. When we say "restores sanity by one hundred per cent", we do not mean adding one hundred points. We mean filling the meter to its maximum, regardless of how full or empty it was. This is different from how vendor items work. A jollof always adds one hundred hunger points, capped at one hundred. If you were already at fifty, you go to one hundred. If you were already at ninety, you still go to one hundred (because of the cap), but the system briefly thought you would go to one hundred and ninety. Serwaa's interaction is cleaner. It says "set this meter to its max". One operation, no clamp.

The interaction shape is the same one we will use for future characters. Mama Adwoa at the chop bar, your grandmother in Cape Coast, the priest at the small chapel near Kaneshie. Each will have its own profile, its own duration, its own effects. The vendor system handles the simple "pay for goods" cases. The special NPC system handles the "spend time with someone" cases. Two patterns, each pulling its own weight.

## What's Next

Serwaa has the most room to grow of any character in the game. We know it, and we are excited about it.

The first thing we want is a relationship meter. Visit her often, the meter goes up, and her gifts get better. Maybe at high relationship she gives you a sanity restore plus a small money bonus. Maybe at low relationship the visit costs more, or only restores half. The skeleton is there, we just have not added the layer.

We want gifts. Real gifts, picked from a small inventory. Flowers from the market, kelewele from the corner woman, a small bottle of perfume from Makola. Each gift carries a different weight, and the visit reflects what you brought. This would turn the interaction from a vending machine into a small ritual.

We want voice lines. The same way Master will eventually speak, Serwaa should too. Her voice should be soft, warm, very Accra. Maybe she teases you about being late. Maybe she tells you about her day. Small touches, but the kind of touches that make the difference between a character and a "character".

And we want her to be more than a sanity tap. Eventually, deep into the relationship, Serwaa should give you a daily blessing, a buff that lasts the whole route. A passenger patience boost, a fare bonus, something that says "she believes in you today." That kind of thing. Not yet, but soon.

For now, five cedis. Visit her. Your sanity, and the day, will thank you.
