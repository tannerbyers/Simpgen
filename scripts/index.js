const fs = require("fs");
const postMethods = require("./posts");
const config = require("./config");
const addHomePage = require("./homepage");
const addBlogPage = require("./blogpage");
const { rmDir, copyDir } = require("./util");
const path = require("path");

const cleanUpPublic = () => {
  const contentImgFolder = path.join(config.dev.contentdir, "/assets");
  const publicImgFolder = path.join(config.dev.outdir, "/assets");

  console.log(publicImgFolder);

  // Delete old post, images, and homepage/blogpage from public after every build
  if (fs.existsSync(config.dev.outdir)) rmDir(config.dev.outdir);

  // Copy images over to public flder or create public folder if not present
  if (!fs.existsSync(config.dev.outdir))
    fs.mkdirSync(config.dev.outdir, { recursive: true });
  copyDir(contentImgFolder, publicImgFolder);
};

const posts = fs
  .readdirSync(config.dev.postsdir)
  .map((post) => post.slice(0, -3))
  .map((post) => postMethods.createPost(post))
  .sort(function (a, b) {
    return b.attributes.date - a.attributes.date;
  });

const setup = () => {
  cleanUpPublic();
  postMethods.createPosts(posts);
  addBlogPage(posts);
  addHomePage(posts);
};
setup();
