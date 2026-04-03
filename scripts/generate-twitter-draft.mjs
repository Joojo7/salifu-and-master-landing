/**
 * Generates Twitter/X thread drafts for all ready/published blog posts
 * that don't have a draft yet (twitterThread: null in frontmatter).
 *
 * Idempotent: running it multiple times produces the same result.
 * Already-drafted posts are skipped.
 *
 * Usage: node scripts/generate-twitter-draft.mjs
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "docs", "blog");
const DRAFTS_DIR = path.join(BLOG_DIR, "twitter-drafts");
const SITE_URL = "https://salifuandmaster.com";
const MAX_TWEET_LENGTH = 280;

function findEligiblePosts() {
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("README") && !f.startsWith("STYLE"));

  const eligible = [];

  for (const fileName of files) {
    const filePath = path.join(BLOG_DIR, fileName);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);

    const isPublishable = data.status === "ready" || data.status === "published";
    const notYetDrafted = !data.twitterThread;

    if (isPublishable && notYetDrafted && data.slug && data.title) {
      eligible.push({ fileName, filePath, data, raw });
    }
  }

  return eligible;
}

function generateThread(post) {
  const { title, summary, slug, category, tags } = post;
  const url = `${SITE_URL}/en/news/${slug}`;
  const hashtags = (tags || [])
    .slice(0, 3)
    .map((t) => `#${t.replace(/[^a-zA-Z0-9]/g, "")}`)
    .join(" ");

  const tweet1 = [
    `${title}`,
    "",
    summary,
    "",
    `Read more: ${url}`,
  ].join("\n");

  const tweet2 = [
    `This one covers the ${category.replace("-", " ")} side of Salifu & Master.`,
    "",
    "We talk about what the feature is, how it works in the game, and the tech behind it.",
    "",
    "If you are building games or just curious about how we do things, come and see.",
  ].join("\n");

  const tweet3 = [
    `Play the game: ${SITE_URL}`,
    "",
    hashtags,
    "#gamedev #indiegame #ghana #salifuandmaster",
  ].join("\n");

  return { tweet1, tweet2, tweet3 };
}

function truncateTweet(text) {
  if (text.length <= MAX_TWEET_LENGTH) return text;
  return text.slice(0, MAX_TWEET_LENGTH - 3) + "...";
}

function generateDraft(post) {
  const { filePath, data, raw } = post;
  const thread = generateThread(data);

  const draftFileName = `${data.slug}-thread.md`;
  const draftPath = path.join(DRAFTS_DIR, draftFileName);

  if (fs.existsSync(draftPath)) {
    console.log(`Skipped (draft exists): ${data.title}`);
    return;
  }

  const draftContent = [
    `# Twitter Thread Draft: ${data.title}`,
    "",
    `**Article:** ${SITE_URL}/en/news/${data.slug}`,
    `**Generated:** ${new Date().toISOString().slice(0, 10)}`,
    `**Status:** Ready to post`,
    "",
    "---",
    "",
    "## Tweet 1 (Main)",
    "",
    "```",
    truncateTweet(thread.tweet1),
    "```",
    "",
    `Characters: ${thread.tweet1.length}/${MAX_TWEET_LENGTH}`,
    "",
    "## Tweet 2 (Context)",
    "",
    "```",
    truncateTweet(thread.tweet2),
    "```",
    "",
    `Characters: ${thread.tweet2.length}/${MAX_TWEET_LENGTH}`,
    "",
    "## Tweet 3 (CTA)",
    "",
    "```",
    truncateTweet(thread.tweet3),
    "```",
    "",
    `Characters: ${thread.tweet3.length}/${MAX_TWEET_LENGTH}`,
    "",
    "---",
    "",
    "*Copy each tweet block above and post as a thread. Edit for voice and timing.*",
    "",
  ].join("\n");

  fs.writeFileSync(draftPath, draftContent);

  const { content } = matter(raw);
  const newFile = matter.stringify(content, {
    ...data,
    twitterThread: `twitter-drafts/${draftFileName}`,
  });
  fs.writeFileSync(filePath, newFile);

  console.log(`Draft generated: ${data.title}`);
}

function run() {
  if (!fs.existsSync(DRAFTS_DIR)) {
    fs.mkdirSync(DRAFTS_DIR, { recursive: true });
  }

  const posts = findEligiblePosts();

  if (posts.length === 0) {
    console.log("No new articles need drafts.");
    return;
  }

  for (const post of posts) {
    generateDraft(post);
  }

  console.log(`Done. Processed ${posts.length} article(s).`);
}

run();
