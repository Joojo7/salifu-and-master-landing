---
title: "The Financial Logbook"
slug: financial-logbook
category: core-gameplay
status: ready
publishDate: null
twitterThread: null
banner: /blog-images/04-financial-logbook.png
tags: [economy, logbook, earnings]
summary: "Every fare in, every cedi out. The day's whole P&L on one page, before Master takes his cut."
---

# The Financial Logbook

Anybody who has ever run a small small business in Ghana knows the same lesson. The money came in, that you remember. But where it went? That, you cannot always tell. By the end of the week, the till is empty and you are asking yourself, "Chale, where did the money go?"

That feeling, that is the one we wanted to fix in Salifu & Master. Every day in this game, you collect fares from passengers, you branch by Amelia for waakye, you stop at Dr. Panie when your head is spinning, and you bring small gifts when you visit Serwaa. Then Master comes at the end of the day to take his cut. So at the close of business, where exactly did the money go?

The Financial Logbook is the answer. One page, every cedi, no hiding.

## What You See

Open the logbook and you see the whole day in three sections.

**Passengers Delivered.** Every fare you collected, with the stop name attached. Madina to Achimota, 18 GHC. Circle to Kaneshie, 12 GHC. The full list, in the order they were paid. At the bottom, the count and the gross total. So if you had fifteen passengers and 240 cedis, the book tells you fifteen and 240 cedis. Plain and simple.

**Vendor Purchases.** Grouped by vendor. Amelia's stall here, Dr. Panie's pharmacy there. If you ate two waakye in one day, the book does not write waakye twice, it writes "Waakye Small, 2x, 50 GHC." The book is intelligent, it consolidates as you go.

**Gifts to Serwaa.** Every visit, every cedi. Was it a small flower or a serious gesture? The book remembers the mood and the amount.

Then below, the **Net Summary**. Gross fares, total spent, Master's Cut, and if your day failed, the Failure Penalty too. At the bottom, in bold: **Net to Bank**. Green if you finished on top. Red if Master ate you, my friend.

## When You Can Open It

You can open the logbook two ways.

The first is from the pause menu, mid-day. The bus is moving, you are wondering whether to skip the next short trip and save room for a fatter fare, you pause and check the book. "Ah, I have already done 180 cedis, target is 250, let me push small more." That kind of decision.

The second is at the day-end screen, after Master has already taken his cut. The day is settled, the numbers are final, and you are looking at the receipt. Sometimes that is when the lessons come. "Ei, I spent 80 cedis at Amelia today? I need to upgrade my stamina."

You see what I am saying? The book is not just a record. It is a teacher.

## Master's Cut Is Not a Flat Number

Here is where the game gets interesting. Master takes a percentage, not a fixed amount. And the percentage depends on which trotro you are driving.

| Trotro | Price | Master's Cut |
|--------|-------|-------------|
| Volkswagen T3 | Free | 30% |
| Renault Estafette | Free | 30% |
| Bedford CF | Free | 29% |
| Peugeot J5 | Free | 29% |
| Toyota Hiace | 8,000 GHC | 27% |
| Sprinter 315 CDI | 10,000 GHC | 26% |
| Iveco Daily | 15,000 GHC | 25% |
| Hyundai County | 25,000 GHC | 23% |
| Tulaga MA3 | 30,000 GHC | 22% |
| Etalon A079 | 40,000 GHC | 20% |

The starter VW takes 30% off the top. Earn 200 cedis, Master pockets 60 before you see anything. But save up for the Etalon and you push that down to 20%. Same 200 cedis, Master only takes 40. That is real money over time.

This is the whole reason to upgrade your trotro. Yes, the bigger ones carry more passengers, but the real prize is the smaller cut. As our elders would say, the one who sharpens his cutlass is not the one who chops the most wood, but the one whose hands hurt the least. Buy the better trotro, and over many days, the savings reach.

## And Then There Is the Failure Tax

If you do not hit your daily target, Master is not a happy man. He has bills too oo. So he charges a Failure Penalty on top of his usual cut.

The penalty is not small. On easier routes, it is 20% of what was left after Master's cut. On the toughest routes, it climbs to 60%. So a failed day on a hard route can wipe out almost everything.

The math goes in this order:

```
masterCut    = floor(grossFares × masterCutRate)
afterMaster  = grossFares − masterCut
failureTax   = failed ? floor(afterMaster × failureTaxRate) : 0
netEarnings  = afterMaster − failureTax
```

So even if you collected 250 cedis, missed your target on a hard route with the starter VW, the receipt could read:

- Gross Fares: 250
- Master's Cut (30%): 75
- After Master: 175
- Failure Penalty (60%): 105
- **Net to Bank: 70**

Herh, 250 cedis collected, only 70 sees your account. That is why the book matters. It does not lie to you about the day.

## Vendor Money Is Different from Master's Money

Notice something. The money you spend at Amelia, at Dr. Panie, with Serwaa, that comes off your wallet during the day, in real time. By the time the day ends, it is already gone. So when the logbook calculates Net to Bank, it shows you:

```
Net to Bank = Gross Fares − Total Spent − Master's Cut − Failure Tax
```

The "Total Spent" is on you. You decided to eat that jollof. You decided to bring Serwaa flowers. The "Master's Cut" and the "Failure Tax" are taken from what is left. Two different debts, both real, both visible.

This separation matters because it shows you where the leak is. A player whose Net to Bank is shrinking can look and see: "I am spending too much at vendors" or "I keep failing, and the tax is killing me." The book makes the diagnosis honest.

## The Tech Behind It

The logbook lives in its own Zustand store, a small in-memory ledger called `useDayLogStore`. It tracks four things: passengers, purchases, gifts, and the closing entries (Master's Cut and Failure Tax).

The store is not persisted. Every time `startDay` runs, the ledger calls `resetLedger()` and the day starts blank. This matches how the player thinks about it: each day is a closed book, and yesterday's receipts are not your problem today.

The writes come through a thin facade in `src/systems/money/ledger.ts`. There are exactly five functions that touch the day-log:

- `earnFare(fare, stopName)` — passenger paid, called from the stop window when a drop-off succeeds
- `spendOnPurchase(vendorId, itemId, cost)` — vendor purchase, called from Amelia and Dr. Panie's flows
- `spendOnGift(amount, mood, source)` — Serwaa visit, called from the NPC interaction store
- `recordMasterCut(amount)` — settlement closing entry
- `recordFailureTax(amount)` — settlement closing entry, only when the day failed

This narrow interface is on purpose. Anything that affects the day's money has to go through one of these five functions, and each one writes to two places: the player's wallet and the day-log. No silent debits. No mystery deductions. If a cedi moved, it is in the book.

When the logbook opens, it reads the raw entries from the store and runs them through `getDaySummary()`, which computes the totals on the fly. The reduce is trivial:

```
grossFares  = passengers.reduce((sum, p) => sum + p.fare, 0)
totalSpent  = purchases.sum + gifts.sum
netToBank   = grossFares − totalSpent − masterCut − failureTax
```

We compute on read instead of caching the totals. The list is rarely more than 30 entries, the summary is microsecond work, and we never have to worry about a totals field falling out of sync with the entries.

The purchase aggregation is the one bit of cleverness. When `addPurchase` sees a (vendorId, itemId) pair that already exists, it merges: bumps quantity by one and adds to the cost. Two waakye purchases become one row. This keeps the receipt readable, especially on long days where someone might eat four times.

## What's Next

We are looking at expanding what the book records. Right now it shows the day. Soon we want a weekly view, where you can see the rhythm of your earnings. Best day, worst day, average Master's cut, where the money is leaking. The same lesson, but at the scale of a working week.

There is also room for export. A simple text summary you can copy and share, so when you tell your friend "I did 320 cedis today net," you can prove it.

The logbook started as a quality-of-life feature, but it has become the soul of the economy. Every cedi accounted for. No surprises. That is what I am saying.

---

*Salifu & Master is free to play in your browser. No download needed.*
