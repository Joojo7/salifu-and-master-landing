---
title: Biomes
slug: biomes
category: routes
status: ready
publishDate: null
twitterThread: twitter-drafts/biomes-thread.md
banner: /map-icons-svg/coastal-road.svg
tags:
  - environment
  - forest
  - coast
  - hills
  - historic
summary: >-
  Every grid cell carries a biome. The biome decides what you see, what you
  hear, and how the road feels.
---

# Biomes

## What It Is

When you drive a trotro in real Ghana, you do not need anyone to tell you where you are. The buildings tell you. The trees tell you. The colour of the ground tells you. Spintex Road does not look like Cape Coast. Cape Coast does not look like Suame. The eye knows.

We wanted the same in Salifu & Master. A player on Coastal Road in Cape Coast should not feel like the same player on Madina to Kaneshie in Accra. The bus might be the same, the master might be the same, the mate might be the same, but the world outside the window should be a different world. That is what biomes do.

A biome, in our game, is a kind of region. Forest, coast, hills, historic, urban. Each biome has its own visual language. The trees are different, the buildings are different, the ground is a different colour, the road feels different under the wheels. The biome is not a tile, it is not a single object, it is the whole personality of an area. When you cross from one biome into another, you can see and feel the change immediately, even if no signpost ever told you you had crossed a line.

## How It Works

The map is built on a grid, and every cell in the grid belongs to a biome. The biomes are chosen by us when we design a city. Cape Coast has four: hills, forest, historic, and coast. They each take up a chunk of the map and they have hard boundaries with their neighbours. Drive far enough in one direction and you will leave one biome and enter another, the same way you would leave the city centre and find yourself in the suburbs.

Each biome has a personality the player learns to recognise.

**Forest** is dense. Trees crowd the road on both sides. The light is greener because it filters through leaves. Buildings are rare, and the few you see are wooden, half-hidden, almost shy. Passengers in forest zones are fewer and they tend to wait longer at stops because they have nowhere else to be. The road through forest is narrower than the others, and a careless mate who is used to flat coastal driving will overshoot a turn here.

**Coast** is open. The sea is to one side. Palm trees, low buildings, sand on the road, fishing boats in the background. Coast routes feel fast because there is nothing visually blocking your view ahead. The wind sound is louder, the music tones change.

**Hills** is elevated. The terrain rises and falls, the buildings cling to slopes, the trees are scattered and shorter. Stops on hills are spaced farther apart because the geography forces them to be. The bus feels a small bit heavier on uphill stretches if you have not upgraded your engine. A patient driver loves hills. An impatient one does not.

**Historic** is old. Stone walls, narrow streets, the kind of buildings that have been standing since before our grandparents were born. Cape Coast Castle sits in this biome. The roads here are tighter than anywhere else in the game, the turns are sharper, and the passengers carry a different mood. People who live in historic districts walk slowly, and they board slowly, and the game reflects that.

**Urban** is dense, fast, crowded. This is Accra's biome by default, though some Cape Coast zones touch it too. Tall buildings, more cars on the road in the background, more people at every stop, faster passenger turnover, less time to think. Urban biomes reward sharp reflexes and punish hesitation.

The biome does not just decide what you see. It also influences gameplay in small ways. Passenger spawn rates are slightly different across biomes. Resource decay can be tuned per biome. Stop spacing varies because the world is built around what makes sense for that kind of place. None of these adjustments are huge, but together they make each biome feel like its own world, not just a different paint job.

## The Tech Behind It

The biome system started with one decision: separate the geometry from the look.

A grid cell does not say "I am a building." It says "I am a sparse cell" or "I am a dense cell." It carries a label that describes what kind of place it is. The renderer is the one that asks "given this cell, given the biome it sits in, what should I draw here?" That separation means we can change what a biome looks like without touching a single grid cell, and we can change where biomes are placed without touching any visual asset.

The biome lives in zone data. We divide a city into zones, and each zone covers a rectangle of grid cells. The zone carries the biome tag, plus a few other useful pieces of metadata like the zone's label (Abura Hills, Pedu Heights, the Castle District) and its density. When the renderer needs to draw a cell, it first checks which zone the cell belongs to, then it asks the biome what to do.

Each biome has its own rule book. The forest rule book says "use these tree models, scatter them densely, leave gaps for the road, never spawn the tall office buildings." The coast rule book says "use palm trees, leave most cells empty, the ground tile is sandy." The historic rule book says "use stone wall segments, allow tall thin buildings, the road texture is older cobblestone." These rule books are small and human-readable. Anybody on the team can add a new biome without writing engine code.

The asset theme of the city plays a role too. Cape Coast and Accra both have a "coast" biome, but the assets that fill those coast biomes are different. Cape Coast coast uses one set of palm tree models, one set of fishing boat models. A future coastal city like Takoradi could use the same biome with completely different assets and still feel like coast. The biome is the structure. The assets are the dressing.

We use a deterministic random pattern to scatter assets within a cell. That is a small thing, but it matters. Deterministic means if you load the same map twice, you get the exact same trees in the exact same places. The world is consistent run to run. Players will start to recognise specific buildings, specific trees, specific stretches of road. That recognition is what makes a place feel like a place, not like a randomly generated wallpaper.

The boundaries between biomes are not hard cuts on screen. We blend slightly at the edges. A few palm trees from the coast biome creep into the historic biome where the two meet. A few hills trees scatter into the forest where their zones touch. This blending is small but it removes the worst of the "wall of forest suddenly becomes wall of beach" feeling that some grid-based games suffer from. The world flows.

You know what the elders say? Where the river meets the sea, there is no straight line. We borrowed that idea. Our biomes meet softly.

## What's Next

Biomes are one of the systems we are most excited to keep growing.

We want **a lake biome**. Cape Coast has a small lagoon on its eastern edge that we have not yet built. A proper lake biome would include water cells the road has to drive around, fishing nets visible on the surface, water birds in the background, a different sound profile. Other cities in Ghana like Lake Volta region would lean heavily on this biome when we add them.

We want **a market biome**. A dense, chaotic, stall-packed biome with the loudest passenger spawns in the game. Lapaz market, Kantamanto, Kejetia in Kumasi. These are not just dense urban, they are their own animal. A market biome should feel almost dangerous to drive through, with vendors crowding the road and Master shouting because he hates losing time to traffic.

We want **night versions of every biome**. Forest at night, with the headlights cutting through trees. Coast at night, with the moon on the water. Historic at night, with the castle floodlit. The lighting system would handle the change. The biome rule books would not need to change much.

We want **weather effects per biome**. Harmattan dust in the hills. Heavy rain on the coast. Fog in the forest. Each weather state would interact with the biome it landed in differently, and a Hilltop Express route in dry season feels nothing like Hilltop Express in Harmattan.

Most of all, we want **more biomes for future cities**. Tamale in the north would need a savannah biome. The volta region would need lake and river biomes. The mountain towns up by Kwahu would need an actual mountain biome with proper elevation. Each city we add should bring at least one new biome with it. That is the rule we set for ourselves. New city means new world.

For now, take a drive through Coastal Road, then a drive through Forest Trail, then Hilltop Express. Pay attention to what changes when the zone changes. The work is in the detail. That is what we are saying.
