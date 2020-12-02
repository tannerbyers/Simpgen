# Simpgen

My personal Static Site Generator created to make my own simple custom
website.

Stack: NodeJs, HTML, CSS, Markdown

## To Start
``` npm run build ```
This will delete all files in public and convert the markdown files in the posts directory into html files in the public directory. 

```npx serve ./public/```
This will serve the public folder locally

Opinions:
---
* Simplicity over trends
* No frontend javascript
* CSS is defined in inline css to make changes easier/quicker
* Posts are written in Markdown with YAML frontmatter for configurations
* All posts, webpages, and images are deleted and created in public folder on build
 
To Do
--- 
 * Fix HighlightJs in marked.js. Codeblocks are shown but not getting the proper classnames. 
 * Add more CSS for website
 * Make Two Seperate Repos (one for template and one for my own)
 * 