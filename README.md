# Simpgen

My personal Static Site Generator created to make my own simple custom
webpages for my website.

Stack: NodeJs 

## To Start
``` npm run build ```
This will convert the markdown files in the posts directory into html files in the public directory. 

```npx serve ./public/```
This will serve the homepage locally (with linked posts)

Opinions:
---
* Posts are written in Markdown with YAML frontmatter for configurations
 
To Do
--- 
 * Fix HighlightJs in marked.js. Codeblocks are shown but no highlighting css. 
 * Add CSS for website