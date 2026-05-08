---
title: "Your Trotro Fleet"
slug: trotro-fleet
category: vehicles
status: ready
publishDate: null
twitterThread: null
tags: [trotro, vehicles, capacity, speed]
summary: "Ten vehicles from the classic VW T3 to the massive Etalon A079. Every bus is different."
---

# Your Trotro Fleet

## What It Is

The trotro, charley, the trotro is not just a bus. It is a character. Every Ghanaian who has ridden one knows this. The old VW transporter that wheezes up Achimota Hill like an asthmatic uncle. The big Hyundai County that swallows fifteen passengers without complaint. The Sprinter with the door that someone welded shut and no one ever fixed. Each one has a personality, a story, a set of small problems and small mercies that you learn to live with.

In Salifu & Master, we built ten of them. Real models, named after the actual buses you see on Ghana's roads. From the humble Volkswagen T3, the starter bus every player begins with, to the mighty Etalon A079, the king of the fleet. Each one is different. Different capacity, different speed, different penalty when you fill her up, different cut for Master at the end of the day. The bus you choose is half the strategy.

The fleet is your career path through the game. You start with what they give you, you save your cedis day by day, and eventually you trade up. The first paid bus, the Toyota Hiace, costs eight thousand cedis. The Etalon A079 at the top costs forty thousand. That is a long road, oo. But the road is the point.

## How It Works

Here is the full fleet. Look at the numbers small small. There is a story in every row.

| Bus | Price | Capacity | Speed | Penalty per passenger | Master's cut |
|---|---|---|---|---|---|
| Volkswagen T3 | Free | 9 | Standard | 2.0% | 30% |
| Renault Estafette | Free | 7 | Fastest of starters | 2.5% | 30% |
| Bedford CF | Free | 11 | Slower | 1.7% | 29% |
| Peugeot J5 | Free | 10 | Quick | 1.8% | 29% |
| Toyota Hiace | GHC 8,000 | 15 | Steady | 1.2% | 27% |
| Sprinter 315 CDI | GHC 10,000 | 17 | Steady | 1.0% | 26% |
| Iveco Daily | GHC 15,000 | 19 | A small bit slower | 0.9% | 25% |
| Hyundai County | GHC 25,000 | 26 | Slower still | 0.6% | 23% |
| Tulaga MA3 | GHC 30,000 | 33 | Heavy and steady | 0.5% | 22% |
| Etalon A079 | GHC 40,000 | 45 | Slowest of all | 0.4% | 20% |

The first thing to notice. Four of these buses are free. Volkswagen T3, Renault Estafette, Bedford CF, Peugeot J5. You can switch between them from the start, no money required. Each one teaches you a different lesson. The VW is balanced. The Renault is small but fast and has the highest passenger penalty (every person you pick up slows you down by two and a half per cent). The Bedford carries one extra seat over the VW but is heavier on the road. The Peugeot is the all-rounder. Try all four. Fast fast.

The second thing to notice. As you climb the fleet, three things happen at once. Capacity goes up. Speed comes down. Passenger penalty drops sharply. This is the central tension of every choice. A bigger bus carries more people, which is more money, but it moves slower and takes longer to complete the route. The penalty per passenger drops, which means you can fill it without getting too slow, but the base speed itself is lower. So you are always choosing between many small fast trips or fewer big slow trips.

The Etalon A079 is the extreme case. Forty-five passengers, but the slowest base speed in the fleet. Each passenger only slows you down by 0.4 per cent, which means a fully loaded Etalon is still moving at eighty-two per cent of her base speed. That is the magic of the big buses. They feel sluggish empty, but they handle a full load like nothing.

There is also Master to think about. As we explained in the article on him, Master's cut comes down as you climb the fleet. The starter buses give him thirty per cent of every cedi. The Etalon gives him only twenty per cent. So eighty per cent of the take comes home with you, which on a big day with a big bus is real money. As the elders say, the patient cat catches the fattest mouse. Save up, buy big, keep more.

Now, here is the thing nobody tells you on day one. The cheapest path to the top is not the path you think. The Toyota Hiace at eight thousand cedis is the first paid bus, and she pays for herself within ten or fifteen good days. The Sprinter at ten thousand is barely two thousand more, but the upgrade is significant. So the early career is fast. The hard part is later. From the Hyundai County to the Tulaga to the Etalon, the prices climb steeply. Twenty-five, thirty, forty thousand. To buy the Etalon, you must have done the work, and you must have done it well.

## The Tech Behind It

The fleet is built on a single shared definition. Each bus is described by a small set of numbers: capacity, base speed, the speed penalty per passenger, the price, and Master's cut. Everything else (the way the bus drives, how the doors open, where the passengers sit, how it interacts with stops) is the same code for every bus. We did not write a "VW driver" and a "Sprinter driver". One driver, ten different vehicles, and the difference between them is data only.

The percentages are stored in basis points. We mentioned this in the meet-master article and we will mention it again here because it is one of the small foundations of the whole game. A basis point is one ten-thousandth. Three thousand basis points is thirty per cent. Two hundred basis points per passenger is two per cent. Storing the numbers this way means there are no fractions floating around to surprise us. Cedis are whole numbers. Speed multipliers are computed from whole numbers. Rounding happens once, at the end. Clean.

For the visuals, each bus has its own three-dimensional model and its own positioning configuration. Some buses sit higher off the road than others (the Tulaga MA3 is a tall machine, the VW T3 is small). Some have their doors on different sides. The model and the gameplay numbers are kept separate on purpose. We can re-skin a bus without changing how she drives, or change her stats without re-doing her artwork. This separation has saved us many headaches as the fleet has grown.

The speed system itself is simple in its core. The bus has a base speed. Each passenger you pick up multiplies that speed by a small reduction factor. So a fully loaded VW T3 with nine passengers is moving at roughly eighty-two per cent of her base speed (one minus nine times two per cent). A fully loaded Etalon A079 with forty-five passengers is moving at roughly eighty-two per cent of her base speed too (one minus forty-five times 0.4 per cent). The numbers were tuned so that, at full load, every bus loses about the same percentage of her speed. The difference is what speed she had to begin with, and how many passengers she could fit before getting there.

The fare a passenger pays is independent of the bus. A passenger going from Madina to Circle pays the same whether she is in your VW or your Etalon. So the value of a bigger bus is not bigger fares, it is more fares per route. This is a deliberate design decision. We did not want pay-to-win economics where richer players make more per passenger. We wanted scale. The bigger bus carries more, the smaller bus carries less, the fare itself stays honest.

## What's Next

The fleet is in a good place, but we are not done.

We want a "personality" layer. Each bus should have small quirks. The Bedford that occasionally backfires when you start her. The Sprinter whose horn is louder than every other vehicle on the road. The Etalon that idles like a generator. None of these affect gameplay, but they affect feel, and feel is what turns a vehicle into a character.

We want maintenance. Eventually, every bus you own should require small upkeep. New tyres after a certain mileage, fuel between routes, the occasional repair when a passenger does something stupid to your seats. This adds a money sink and another reason to choose between buses. The Etalon's maintenance would be punishing, the VW's maintenance would be cheap.

We want cosmetics. Paint jobs, slogans on the back window, religious messages in the windshield, those little colourful flags that flap in the wind. The trotros you see on Ghana's roads are decorated, every one different. The fleet in our game should be the same. We have done early experiments with paint variations and we are excited about it.

And we want a few more buses. There is a Toyota Coaster missing from this list. There are conversions like the Mitsubishi Rosa. There are old British double-deckers that briefly served as student buses in the eighties. The Ghanaian roads have seen a lot of metal in their time, and we want to honour as much of it as we can.

For now, start with the VW T3. Drive her. Fill her. Save your cedis. The Etalon is waiting, but the road to her is long. Enjoy the journey, oo.
