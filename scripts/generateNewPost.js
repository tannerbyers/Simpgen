const config = require("./config");
const fs = require("fs");
const path = require("path");

if (process.argv.length < 3) {
  console.log("Please specifiy article file name as a param");
  return console.log("Like so: npm run genPosts SamplePostName");
}

const basicMarkdownPost = `---
title: Post Name
date: ${new Date().toISOString().slice(0, 10)}
description: Sample Description for your article
---

# This is an amazing blog post.
Really it’s just great
`;

if (fs.existsSync(path.join(config.dev.postsdir, process.argv[2]) + ".md")) {
  return console.log(
    "Article already exists with this name! Think up a better name"
  );
}
fs.writeFile(
  path.join(config.dev.postsdir, process.argv[2]) + ".md",
  basicMarkdownPost,
  function (err) {
    if (err) return console.log(err);
    console.log("new post generated at " + config.dev.postsdir);
  }
);
