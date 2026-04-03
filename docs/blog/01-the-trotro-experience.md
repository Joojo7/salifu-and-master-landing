---
title: The Trotro Experience
slug: the-trotro-experience
category: core-gameplay
status: ready
publishDate: null
banner: /blog-images/01-the-trotro-experience.png
twitterThread: twitter-drafts/the-trotro-experience-thread.md
tags:
  - gameplay
  - trotro
  - conductor
summary: >-
  You're a mate on a real Ghanaian minibus. Pick up passengers, manage fares,
  survive the route.
---

# The Trotro Experience

If you have ever taken a trotro in Accra, you know the energy. The mate hanging out the door, calling destinations. Passengers squeezing in. The driver weaving through traffic like he has somewhere very important to be. That energy, that is what we are building.

In Salifu & Master, you are not the driver. You are the mate, the conductor. Your job? Fill the bus, collect the fares, and make sure Master gets his money before the day ends. Simple right? Let me tell you, it is not simple at all.

## How a Day Works

Every route gives you about two minutes. The bus drives itself along a fixed path through real Accra neighbourhoods: Madina, Legon, Atomic, Circle, Kaneshie. Your job is to handle the passengers.

When the bus reaches a stop, a window pops up. You have roughly two seconds to tap and pick up or drop off. Miss it, and the bus moves on. The passenger is gone. Your money? Also gone.

Drop-offs happen first, then pickups, just like a real trotro. And fares depend on distance. A passenger going from Madina all the way to Kaneshie pays more than someone hopping off at the next stop. So the game becomes about decisions. Do you pick up the short trip or wait for a longer one?

At the end of the day, Master takes his cut. For the starter VW T3, that is 20% of everything you earned. If you did not hit the target, there is a failure tax on top. Herh, the man does not play.

## The Thing About the Bus

Here is where it gets interesting. Every passenger you carry slows the bus down. The starter bus loses about 3% speed per passenger. So a full bus with 10 people is moving at 70% of its normal speed.

This is the core tension of the game. You need passengers to make money, but passengers slow you down, which means fewer stops, which means less money. As the elders say, the tortoise carries its house on its back, and you must learn to move with the weight.

Bigger buses carry more people but are slower to begin with. Smaller buses are quick but the money will not reach. Every trotro in the game has this tradeoff baked in.

## The Tech Behind It

We built the route system on grid-based waypoints. Each route is defined as a JSON file with anchor coordinates on a 30x30 grid. These anchors get converted into a smooth Catmull-Rom spline that the bus follows.

The bus tracks its position as a single number called `routeProgress`, from 0 to 1. Each frame, it advances based on speed times delta time. The 3D position and rotation are interpolated from the spline, and even the door position is calculated relative to the bus body so passengers board at the right spot.

One thing we are proud of: the passenger spawn system uses square root scaling. A bus with double the capacity does not get double the passengers, it gets about 1.4 times more. This prevents large buses from making the game too easy. The math keeps things balanced without the player ever noticing.

Fares use a simple formula: `fare = min + floor(distanceRatio × (max - min))`. The distance ratio is how far the passenger travels relative to the full route. Clean, predictable, and it rewards players who think about which passengers to pick up.

## What's Next

We are working on more routes across new cities. Cape Coast is already live with forest trails and coastal roads. Kumasi is coming. Each city brings new stops, new challenges, and new energy.

The trotro fleet is also growing. Right now we have 10 vehicles, from the classic VW T3 to the massive Etalon A079. Each one plays differently, and choosing the right bus for the right route, that is where the mastery comes in.

Come and try it. Pick up your first passenger. Make your first sale. And when Master takes his cut at the end of the day, you will understand what this game is about.

---

*Salifu & Master is free to play in your browser. No download needed.*
