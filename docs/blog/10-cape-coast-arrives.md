---
title: "Cape Coast Arrives"
slug: cape-coast-arrives
category: routes
status: ready
publishDate: null
twitterThread: null
banner: /map-icons-svg/cape-coast.svg
tags: [map, cape-coast, routes, biomes]
summary: "Seven routes through forest, hills, coast, and the historic castle district. The old capital joins the map."
---

# Cape Coast Arrives

## What It Is

Cape Coast, the old capital. Before Accra became the centre of things in this our country, Cape Coast was where everything happened. The castle by the water, the schools that taught generations of leaders, the fishing harbours that fed the colony. To this day, when you mention Cape Coast to a Ghanaian, they straighten their posture a small small. Respect for history is deep here.

So when we sat down to add a second city to Salifu & Master, the question was not really a question. Cape Coast had to come next. We did not want a second Accra, a second clone of busy streets and identical traffic. We wanted somewhere with its own feel, its own pace, its own visual personality. A city that would make the player say "ah, this place is different oo, this place is its own thing." Cape Coast gave us all of that.

Where Accra is fast and dense and concrete, Cape Coast is open. The roads run beside the sea. The hills rise up behind the town and look down on everything. The forest sits between the hills and the coast, thick and quiet. The historic centre, with the castle and the old buildings, is small but full of weight. Drive through Cape Coast and you are not just running a route. You are passing through four different worlds in one journey.

## How It Works

Cape Coast launches with seven full routes, each one running through a different mix of the city's biomes. The names are honest. If a route says Coastal Road, you will see the sea. If it says Forest Trail, you will drive through trees thick enough to block the sun.

| Route | Difficulty | Where it goes |
|---|---|---|
| Castle Loop | medium | The historic core. Tight turns around the castle, fishing harbour, and the old stone streets. |
| Coastal Road | medium | The long shoreline run. Sea on one side, town on the other. Smooth speed, generous stops. |
| Forest Trail | medium | Inland through the green belt. Quieter passengers, longer gaps between stops. |
| Coastal Sweep | hard | The full coastline corridor end to end. Master's biggest coastal target. |
| Hilltop Express | hard | The climb up Pedu Heights and OLA Ridge. Slower trotro, harder turns, better view. |
| Mountain Loop | hard | The full hills circuit through Abura, Pedu, Kakumdo. For when the flat roads bore you. |
| Grand Tour | hard | Every biome, every district, one long run. Castle to coast, coast to forest, forest to hills, back home. |

The Castle Loop is the route most new arrivals try first. It is medium difficulty, but the medium of Cape Coast is not the medium of Accra. The roads turn more, the streets are narrower, the buildings are closer to the road. You will feel the difference in your hands within the first thirty seconds.

To unlock Cape Coast itself, you do not need anything special. The city is available from day one, sitting next to Accra in your map list. Pick it whenever you are ready. The progression chain inside Cape Coast is what makes you work. Start with the medium routes, earn your stars, then the hard routes open up one by one. Kumasi, our third city, requires you to first earn six stars across Cape Coast. So even if Cape Coast is not the gate, it is the bridge.

Each route in Cape Coast has its own personality because each one mixes the four biomes differently. Castle Loop is mostly historic with a touch of coast. Coastal Road is all coast all the way. Forest Trail is mostly forest with a small hills section at the end. Grand Tour is all four. The game does not announce these things to you. You discover them by driving.

## The Tech Behind It

A whole new city is more work than a whole new route, but maybe not as much as you would expect. The hardest part is not the road. The hardest part is the look.

The world Cape Coast lives on is a twenty by twenty grid, smaller than Accra's thirty by thirty. We chose smaller on purpose. Cape Coast in real life is a more compact city, and we wanted the geography to feel that way. Twenty by twenty gives us four hundred grid cells to work with, which is plenty when each cell can hold a building, a tree, a stop, or nothing at all. The cell size is bigger than Accra's, so the world still feels open even though the grid is denser.

The city is divided into zones, and each zone is tagged with one of four biomes: hills, forest, historic, or coast. The biome is the most important piece of metadata in the city. When the world generator draws a zone, it asks the biome what should be there. Hills means sparse buildings, scattered trees, more elevation, fewer people. Forest means dense vegetation, narrow paths, almost no buildings. Historic means stone walls, the castle, the kind of older architecture you only see in towns with hundreds of years of history. Coast means open ground, palm trees, water in the background.

The routes are drawn the same way as Accra. A list of grid coordinates that anchor the road, a difficulty tag, a list of stops along the way. We use the same spline smoothing so the bus does not snap from corner to corner. The route data does not need to know about biomes at all. It just lays down its anchors, and whatever biome those anchors pass through is what the player sees.

The asset theme is what ties it all together. Each city carries its own asset theme, a small block of data that tells the renderer which building models to use, which tree models, which ground textures, and how to scale them. Accra has tall office buildings, dense compound housing, concrete walls. Cape Coast has shorter buildings, more colonial-era stone, more grass, more sand. The same world generator runs in both cities, but the assets it pulls from are different, and the result feels like two different worlds.

You know what the elders say? You can recognise a town from its dust. The colour of the soil, the slope of the road, the kind of trees that line the path. The eye knows before the mind catches up. We built Cape Coast to feel that way before any text on screen tells you where you are.

## What's Next

Cape Coast launched as one of the most ambitious additions to the game so far, but we are not done with her.

We want a night version of Coastal Road. The sea by night, the lights of the fishing boats blinking in the distance, the streetlights flickering through the palm trees. Different passenger mix at that hour. Different music. The Coastal Road at night could be one of the most beautiful runs in the game.

We want weather. The Atlantic brings heavy rain to Cape Coast, the kind of rain that turns the coastal road into a small river. Hilltop Express in heavy rain would be a serious test. Forest Trail in fog would change the whole feel of the route.

We want more stops in the historic centre. Right now the castle and the harbour and a few old streets carry the historic biome. We want to add the Cape Coast University area, the Elmina road heading west, the small fishing villages just outside town. These are corridors that did not make the launch cut but should be in the next batch of routes.

And we want a special event around the castle. A heritage day, a route that opens only on certain weekends, with passengers who pay more and Master who takes less because of the occasion. Cape Coast carries weight. The game should honour that, not just drive through it.

For now, set down your trotro at Castle Loop and learn the ground. Cape Coast is waiting.
