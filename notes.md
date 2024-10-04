09/11/2024
working for the GitHub homework
There is setup, commit, pushup and pull.

## markdown
https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

## example to connect server from terminal
➜  ssh -i ~/keys/production.pem ubuntu@53.104.2.123

## http to https
This link show us how to swap http to https using Caddy
https://learn.cs260.click/page/webServers/https/https_md

## Really useful site to learn basic code grammar
[https://www.w3schools.com/html/html_images.asp](https://www.w3schools.com/html/default.asp)

## This is good site for the HTML Input element
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

## HTML media
If we want to get the address for image or video, if it is in the chrome you can right-click and choose "copy image|video address"

## Project Update: Sharenote Web Pages

## Pages Created:
- **about.html**: Provides information about Sharenote, explaining its purpose and how users can share to-do lists and notes.
- **createroom.html**: A page where users can create a room with a password, allowing them to invite family and friends to collaborate.
- **index.html**: The main landing page of the Sharenote website, linking to other key pages.
- **setting.html**: A page that allows users to adjust their account or room settings.
- **sharenote.html**: The main functionality page where users can share lists and notes between family and friends in real-time.

## Features Added:
- All pages are interconnected with navigation links.
- A GitHub link is added in the footer section of each page for easy access to the project repository.
- The pages are deployed using a script (`deployFiles.sh`) on my domain, ensuring easy updates and deployment of changes.

## css and flex (example code how to use it)
```
* {
  font-family: sans-serif;
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
}

header {
  flex: 0 50px;
  font-size: 20px;
  background: hsl(223, 57%, 38%);
  color: white;

  display: flex;
  align-items: center;
}

main {
  flex: 1;
  font-size: 30px;

  display: flex;
  flex-direction: column; /*make it as column*/
  align-items: center;
  justify-content: center;
}

div {
  padding: 0 0.5em; /*this code makes space*/ between word
}

footer {
  flex: 0;
  background: green;
  color: white;
  display:flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}


## Deployment:
- The project is deployed via the `deployFiles.sh` script, which automates the process of uploading files to my domain.
```
