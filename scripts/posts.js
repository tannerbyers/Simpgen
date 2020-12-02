const config = require("./config");
const fm = require("front-matter");
const marked = require("./marked.js");
const fs = require("fs");

const posthtml = (data) => `
<!DOCTYPE html>
<html style="font-family: Lato,Helvetica,sans-serif; font-weight: 400">
    <head>
<style>

/* GLOBAL STYLES */
body {
  background: #fff;
  padding-top: 5em;
  display: flex;
  justify-content: center;
}

</style>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="${data.attributes.description}" />
<title>${data.attributes.title}</title>
    </head>
    <div style="">
        <div style="display: flex; position: absolute; top: 0; left: 0">
    <a style="color:black; text-decoration: none" href="./index.html">
        <h4 style="margin: 1rem">Home</h4>
    </a>
<!--  </div>
<div style="display: flex; position: absolute; top: 0; right: 0"> 
-->
    <a style="color:black; text-decoration: none" href="https://github.com/tannerbyers" target="_blank" >
        <h4 style="margin: 1rem">Projects</h4>
    </a>
    <a style="color:black; text-decoration: none" href="./blog.html">
        <h4 style="margin: 1rem">Blog</h4>
    </a>
</div>
    </div> 
    <div class="content">
            <h1>${data.attributes.title}</h1>
        <p>${data.attributes.date.toDateString()}</p>
        <hr />
        ${data.body}
    </div>
<div style="position: absolute; bottom: 1rem; width: 100%; height: 2.5rem; text-align: center; font-family: Merriweather,Georgia,serif;">
    <i> <p>If code won't fix it, why am I here?</p></i>
</div>
</html>
`;

const createPost = (postPath) => {
  const data = fs.readFileSync(`${config.dev.postsdir}/${postPath}.md`, "utf8");
  const content = fm(data);
  content.body = marked(content.body);
  content.path = postPath;
  return content;
};

const createPosts = (posts) => {
  posts.forEach((post) => {
    if (!fs.existsSync(`${config.dev.outdir}/${post.path}`))
      fs.mkdirSync(`${config.dev.outdir}/${post.path}`);

    fs.writeFile(
      `${config.dev.outdir}/${post.path}/index.html`,
      posthtml(post),
      (e) => {
        if (e) throw e;
        console.log(`${post.path}/index.html was created successfully`);
      }
    );
  });
};

module.exports = {
  createPost: createPost,
  createPosts: createPosts,
};
