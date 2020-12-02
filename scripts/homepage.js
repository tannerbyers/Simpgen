const fs = require("fs");
const config = require("./config");

const homepage = (posts) => `
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
<meta name="description" content="${config.blogDescription}" />
<title>${config.blogName}</title>
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

<div style="position: absolute; top: 30vh; text-align: center; width: 30vw; ">
<h1>${config.authorName}</h1>
<img width="20%" src="./assets/code.png"/>
<h2 style="font-weight: lighter" >${config.authorTitle}</h2>
</div>
<div style="position: absolute; bottom: 1rem; width: 100%; height: 2.5rem; text-align: center; font-family: Merriweather,Georgia,serif;">
    <i> <p>If code won't fix it, why am I here?</p></i>
</div>
</html>
`;

const addHomePage = (posts) => {
  fs.writeFile(`${config.dev.outdir}/index.html`, homepage(posts), (e) => {
    if (e) throw e;
    console.log(`index.html was created successfully`);
  });
};

module.exports = addHomePage;
