# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot


![screenshot](./images/screenshot.PNG "screenshot")

### Links

- Solution URL: [Github]()
- Live Site URL: [Live Github]()

## My process

### Built with

- Semantic HTML5 markup
- Sass/SCSS
- jQuery/Javascript
- Mobile-first workflow


### What I learned

- I decided to go by a url format help site, as it's been a while since I looked at url formats. I used the recommend format to come up with the regular expression that is used to detect if the url is valid format. See link 1.
- I tried to find ways to integrate my code with the cleanuri.api. I tried using fetch() as well as XMLHttpRequest() , both caused CORS errors. Then I read about using a proxy server (for instance, CORS anywhere) to circumvent the CORS error.
  This did not work either as also CORS anywhere was no longer functional. See link 2.
- netlify course , see link 3

  

### Continued development

- Daily tutorials and projects in HTML5, CSS3, Javascript, Bootstrap, Sass/SCSS. For now, in time I will go re-learn React ect.

### Useful resources

 [url format guidelines](https://help.zscaler.com/zia/url-format-guidelines)
 [CORS anywhere](https://github.com/Rob--W/cors-anywhere/issues/301)
 [Reddit post git error](https://www.reddit.com/r/git/comments/krp2iy/couldnt_find_remote_ref_master/)
 [nodemon global install](https://stackoverflow.com/questions/40359590/nodemon-command-is-not-recognized-in-terminal-for-node-js-server)





## Author

- Website - [One of my latest codepens](https://codepen.io/cynthiab72/pen/oNybYON)
- Frontend Mentor - [@cmb347827](https://www.frontendmentor.io/profile/cmb347827)

