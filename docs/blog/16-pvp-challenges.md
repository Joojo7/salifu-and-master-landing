---
title: "PvP Challenges"
slug: pvp-challenges
category: competition
status: ready
publishDate: null
twitterThread: null
banner: /screenshots/pick-up-passengers-at-stops.png
tags: [pvp, multiplayer, challenges, head-to-head]
summary: "Same route. Same bus. Same loadout. Whose mate is sharper?"
---

# PvP Challenges

## What It Is

The weekly leaderboard tells you how you compare against the whole world. The Hall of Fame tells you how you compare across history. But these are big, cold numbers. They cannot give you the small satisfaction of beating your cousin by two hundred cedis on a run he was sure he had won.

That is what PvP challenges are for. Direct, one against one, head to head. You pick a friend. You pick a route. You both drive it under exactly the same conditions. Same bus. Same loadout. Same difficulty. When you both finish, the system compares your earnings, your stars, your passenger count, your time. Whoever did better wins. Whoever lost has to listen to it until next time.

This is the bukom boxing version of the game. The big boards are tournaments. The PvP challenge is a fight in your local junction. Less prestige, more pride, much more talking.

## How It Works

A PvP challenge starts when one mate finishes a run and decides to challenge another mate to beat it. From the day-end screen, you can pick a player from a small list of suggested rivals and send them the challenge. The challenge carries your run with it: the route you drove, the trotro you were in, the loadout you brought, and the score you posted. When your friend opens the game, the challenge is waiting in their inbox.

Now the work begins. Your friend has a limited window of time to accept and run the same route. The challenge enforces fairness on the inputs.

- **Same route.** They must drive exactly the route you drove. No swapping for a shorter or easier one.
- **Same trotro.** They must use the same bus class. Your VW T3 cannot be matched against their Etalon A079.
- **Same difficulty.** If you ran the route on hard, they run it on hard.
- **Same loadout.** Whatever boosts and consumables you used, the system carries them over.

Everything that can be controlled, is controlled. The only thing that is different is the driving. That is the whole point.

When your friend submits their run, the system compares the two scores side by side. Earnings is the primary measure. Whoever earned more wins the challenge. If earnings are tied (which is rare but happens), the tiebreaker goes to stars. If stars are also tied, the tiebreaker is passenger count. If somehow all three are exactly tied, the time is the final word. The mate who finished faster wins.

The challenge expires if the opponent does not accept and complete it within the window. Expired challenges are not penalised. We do not want a feature that forces somebody to play when they do not have time. The system just quietly closes the matchup and the original score stands as your best on that route.

Winning a PvP challenge does not affect your weekly leaderboard standing. The earnings from your challenge run already counted toward your week when you posted them. The PvP system is its own little side track, with its own little record book. We will see in a moment what we want to do with that record book.

## The Tech Behind It

A head to head challenge looks simple from the player's side. You submit a score, the other person submits a score, the system compares them. But under the hood, there are several quiet pieces of work happening to make sure the comparison is honest.

The first piece is **input pinning**. When you create a challenge, the system records exactly what you ran with: the route identifier, the trotro identifier, your loadout, the difficulty, and the specific resources you started the run with. These are saved as part of the challenge itself. When your opponent accepts, the game enforces these inputs by setting up their run with the same configuration. They cannot accidentally start the challenge in the wrong bus or with the wrong food in their bag. The system handles it.

The second piece is **score validation**. The same rules that protect the weekly leaderboard from cheating protect PvP challenges. When the opponent submits their score, the server checks it against what is physically possible for that route, that bus, that loadout. If the numbers look impossible (too much earnings in too short a time, more passengers than the bus can hold), the score is rejected and the challenge stays open. We do not announce the validation thresholds, but they are strict.

The third piece is **lifecycle tracking**. A challenge moves through five states: pending (sent, not yet accepted), accepted (the opponent agreed to run it), completed (both scores are in and the system has picked a winner), expired (the window ran out without acceptance), and declined (the opponent rejected outright). These states matter because they affect what shows up in your inbox and what the system can do next. A completed challenge cannot be re-run. A pending challenge can still be cancelled by the challenger if they change their mind. An expired challenge is dead.

The fourth piece is **integrity guarantees**. We use database constraints to enforce things that should never happen: a player cannot challenge themselves, a completed challenge must have valid scores from both sides, an opponent's score can only land on a challenge they actually accepted. These constraints sit at the lowest level of the system, in the database itself. They are slow to write but they catch everything. Even if a bug in the higher layers tries to do something invalid, the database refuses.

The fifth piece is **cleanup**. Expired challenges accumulate, and they need to go away. A small background job runs on a schedule, finds challenges that have passed their window without being accepted, and marks them as expired. We do not delete them, oo. We keep the record so a player can see "I sent this person three challenges last month, they accepted none." That information is useful for the bantering, and we are nothing if not pro-bantering.

You know what the old people say? When two cocks fight in the same yard, the chickens watch. We built the system so that the fight is fair, the result is clear, and the watching is fun.

## What's Next

PvP challenges are one of our favourite systems to think about because there is so much we want to do with them.

We want a **rivalries layer**. If you challenge the same friend often, the system should notice. It should track your head-to-head record. After ten challenges, it might say "you and Yaw have played ten times. You won six. He won four. Average earnings difference: GHC 850." This kind of record turns casual matches into a proper rivalry over time.

We want **multi-player tournaments**. A challenge between two people is great. A bracket with eight people is greater. We are working on a tournament mode where you put together a small group, agree on a route, and the system runs a knockout structure. Quarterfinals, semifinals, final. Bigger stakes, more drama.

We want **public challenges**. Right now you challenge a specific friend. We want a mode where you post a public challenge ("Coastal Sweep on the Hiace, my score is GHC 7,200, anyone who can beat me wins twenty cowries"). Anybody who is online can accept. First to beat the score takes the prize.

We want **handicap challenges**. Not every friend is at the same skill level. A handicap mode would let the stronger player choose a worse loadout, or a less suitable trotro, to give the weaker player a fairer fight. The strong player could even agree to skip a consumable. This is how friends play in real life, the better player gives a small chance.

And we want a **streamer mode** where a PvP challenge can be watched live by spectators. Real-time race, both mates running the route at the same time, the audience seeing both screens side by side. We are not there technically yet, but it is in the long-term plan.

For now, send a challenge. Trash talk your friend. Send another challenge when they beat you. That is how the game finds its rhythm. That is how friendships hold themselves together.
