# Salifu & Master — Blog Articles

Each article covers a game feature + the tech behind it. Articles are written as markdown drafts here, then published to the landing page blog and shared on Twitter weekly.

## Publishing Pipeline

1. Write draft in this folder (markdown with frontmatter)
2. Review and finalize content
3. Commit triggers CI to build blog pages on the landing site
4. Weekly Twitter bot picks the next unpublished article and posts a thread

## Article Status

- `draft` — Writing in progress
- `review` — Ready for review
- `ready` — Approved, waiting for publish date
- `published` — Live on blog and tweeted

## Frontmatter Format

```yaml
---
title: "Article Title"
slug: article-slug
category: core-gameplay | characters | routes | vehicles | competition | progression | events | modes | tech
status: draft
publishDate: null
twitterThread: null
tags: [tag1, tag2]
summary: "One-line summary for social media"
---
```
