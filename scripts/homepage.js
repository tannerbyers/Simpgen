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

/* Type writer styles */
.typewriter h2 {
  width: 22vw;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid black; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 2s steps(25, end),
    blink-caret 1s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 22vw }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: black }
}

</style>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

<div class="typewriter" style="position: absolute; top: 30vh; width:100%; text-align: center; line-height: 2em">
<h1 style="margin-bottom: -5px" >Tanner Byers</h1>
<img height="80px" width="120px" src="./assets/code.png"/>
<h2 style="font-weight: lighter">Developer / Problem Solver</h2>
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
