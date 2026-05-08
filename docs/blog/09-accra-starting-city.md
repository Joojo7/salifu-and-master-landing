---
title: 'Accra, the Starting City'
slug: accra-starting-city
category: routes
status: ready
publishDate: null
twitterThread: twitter-drafts/accra-starting-city-thread.md
tags:
  - map
  - accra
  - routes
  - ghana
summary: Where every mate begins. Routes through the heart of the capital.
---

# Accra, the Starting City

## What It Is

If you grew up in Accra, you do not need anyone to explain it to you. The traffic, the noise, the long hot afternoons when Circle is one big traffic jam and the trotro mates are calling destinations like a market crier. The city wakes up at five in the morning and refuses to sleep until midnight. Accra is the centre of everything in this our country, and in Salifu & Master, it is also where every player begins.

We chose Accra as the starting city for one simple reason. It is the city we grew up in. The Accra in this game is not a perfect map of every street, that would be impossible and also a small bit boring. It is the Accra we remember. Madina to Kaneshie, the long N1 corridor through Atomic and Circle, the bustling suburbs of Lapaz and Achimota, the industrial sprawl out towards Tema and Ashaiman. The places where, if you have ever taken a trotro in this our capital, you have a story. We took those stories and turned them into routes.

When you first start the game, you will run a short tutorial route to learn the basics. After that, the city opens up. Several full routes, easy to hard, each one based on a real corridor. Pick a starter bus, fill her with passengers, and find out for yourself what every Accra mate already knows. The work, it is not easy. But the work, it is not boring either.

## How It Works

Accra has seven unlockable routes, plus a tutorial. Each route is rated easy, medium, or hard, and the rating is honest. Easy routes have shorter distances, fewer hard turns, and gentler passenger spawns. Hard routes are long, complicated, and unforgiving. We will not insult you by claiming the hard routes are for everyone. They are not. They are for the mate who has practised, who has upgraded, and who is ready to take Master's biggest targets.

Here is the full list, in roughly the order you will unlock them.

| Route | Difficulty | What it is |
|---|---|---|
| Madina ↔ Kaneshie | easy | The iconic cross-city run through the N1, Atomic, Circle, with the return through Lapaz and Achimota. The route every player learns first. |
| Lapaz ↔ Achimota | medium | The bustling northern suburban loop. Plenty of stops, plenty of decisions. |
| Madina ↔ Tema | medium | The eastern corridor out to the industrial port city. Long stretches between stops, fares add up if you play it right. |
| Tema ↔ Ashaiman | hard | The tight industrial twin-city shuttle. Fast turnover, narrow margins. |
| Kasoa ↔ Mallam | hard | The western corridor through Weija and Dansoman. A tough loop with passengers who want to go everywhere. |
| Afienya ↔ Odorkor | hard | The epic cross-city marathon, from the Aflao highway through Tema all the way west. Master's biggest target sits here. |
| Grand Tour Accra | hard | The ultimate Accra experience. A massive serpentine through the whole city. For the player who has nothing left to prove. |

The Madina ↔ Kaneshie run is where you start. It is the best-known trotro corridor in the city, the one most Accra people have taken at least once in their lives. We built it as the introduction route on purpose. It teaches you the rhythm of the game without overwhelming you.

The first time you run any new route in Accra, the game gives you a small assist. Passengers wait longer before they leave the stop in frustration, the stop windows are slightly more generous, and your resource meters drain a small small slower than normal. This is not a permanent crutch, oo. After that first run, the assist is gone, and the route is back to its full difficulty. We did this because the first time on a new road is always the hardest, and we wanted you to have a fair shot at learning before the route really tests you.

Across all the routes, the city itself stays consistent. The same characters, the same vendors, the same Master at the end of the day. What changes is the geography. Madina ↔ Kaneshie crosses the heart of the city. Tema ↔ Ashaiman is industrial and tight. Kasoa ↔ Mallam runs through the western suburbs where the houses get smaller and the road gets less smooth. Each route has its own feel, its own pace, its own rhythm of stops.

You know what the old people say? Different waters need different fishing. The same trotro, the same mate, but each route asks something different from you. The starter bus that does well on Madina ↔ Kaneshie may struggle on the Grand Tour. Adapt, upgrade, switch buses, learn the road. That is the work.

## The Tech Behind It

Each route in Accra is described by a small data file. Inside that file are the bones of the route: a list of grid coordinates that mark its shape, a difficulty rating, an unlock requirement, and the first-run assist values. That is it. No code per route. Just data.

The grid is thirty by thirty cells, which is the foundation of the entire Accra world. Every route is a sequence of anchor points on that grid. When the bus drives the route, the system smooths the anchors into a continuous curve so the trotro does not snap from one corner to the next. The smoothing uses a standard spline technique that gives natural-looking turns without us having to hand-paint every corner. Drop a new anchor in the file, the curve adjusts. Edit a coordinate, the route reshapes. Routes are content, not code, and that distinction is one of the things we are most proud of in this build.

The stops are similarly data-driven. Each stop is a name, a position on the grid, and a list of route IDs it belongs to. A stop can be shared between many routes, which is how Circle and Achimota end up appearing on multiple runs. There is one stop registry, the routes pull from it, and if we ever rename a stop or move its position, every route that uses it updates automatically.

Difficulty is not a magic number. It is a label that maps to a set of multipliers. A "hard" route has more passengers waiting at each stop, a higher daily target, and tighter turn timings than an "easy" route. The same route shape could be run on different difficulties if we wanted, but for now we have hand-picked one difficulty per route to match its character. Tema ↔ Ashaiman feels hard because it is hard, not because we labelled it that way.

The first-run assist is a small but important detail. We wanted the first time on a new road to feel like learning, not like a wall. So when the system detects you have never run this route before, it temporarily widens passenger patience by close to double, gives you about thirty per cent more time on each stop window, and slows resource drain by roughly thirty per cent. After the first successful run, the assist is removed and the route plays at its full difficulty. We did not put a big "tutorial mode" badge on screen on purpose. We wanted it to feel like the road just being kinder on day one, the way the road sometimes is.

## What's Next

We have plenty more we want to do with Accra.

We want night runs. The same routes, but at midnight, when the city is darker and the passengers are different. The trotro goes silent except for hiplife on the radio, and the streetlights flicker. The economy of a night run would be different. Fewer passengers but bigger fares per head, because the people out at that hour are paying for the rare ride. The mood would be different too. We have done early experiments with the lighting and ah, it looks beautiful.

We want weather. Harmattan dust in January, heavy rain in May, the kind of thunderstorm that turns Spintex Road into a small river. Each weather state would change the route's feel, the passenger spawns, the fare prices, even the music.

We want more routes. The ones we have cover the major corridors, but Accra is bigger than seven routes. There is no Spintex Road, no Adenta-Madina, no Lapaz-Apenkwa. We have a list. They will come.

And we want events. Football match days when crowds spawn around the stadium. Independence Day with a parade route. Christmas Eve with extra passengers headed to relatives. The city should feel like a city, with rhythms beyond just easy-medium-hard.

For now, start where every mate starts. Pick the Madina ↔ Kaneshie run, fill the bus, and learn the road. Accra is not going anywhere. Neither is the work.
