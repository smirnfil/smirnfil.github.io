---
title: List of things you need to do to comfortably develop a web-site
date: 2015-05-09
template: post.hbt
---

I've started this blog for several reasons. One of them - to refresh my skills in web development. Last time I developed web sites in 2009 
but many things changed in the last 5 years. This is the main reason why I'm not using a blog platform or social network or even CMS. 


I think that for developer stand-alone blog build using static site generator is a great choice. You have a complete control over your site,
yet adding a post to your blog isn't harder than writing a text file. The caveat - you need to set up the whole thing. Each step 
that I'll list is easy (it takes a couple of minutes if you know what to do, ten minutes if you don't and google for solution and a half an hour if something goes
completely wrong). The problem is - there are so many of them.


Here is the list of things that I've done to set up this blog. In the future I'll probably write in depth about each step, but now it is only a list. Not all
of the steps are necessary, but there are reasons why I did it this way. I'll try to keep the list up to date with other things I added to the site. 


0. Set up a text editor & command line.
1. Install git
2. Create an account on github.com
3. Crete a repo for Github pages
4. Set up certificate based authentication to github
5. Set up a local repo for development
6. Set up two branches - one for source code, one for published site
7. Install nvm 
8. Install nodejs
9. Install node packages needed for site development 
   - metalsmith
      - metalsmith-serve
      - metalsmith-markdown
      - metalsmith-templates
      - metalsmith-collections
      - metalsmith-permalinks 
   - handlebars
   - bower
   - stdio
10. Install bower packages
   - waypoints
11. Npm scripts set up. One command for each of the following things:
   - Build site
   - Run site locally
   - Publish site to the web
12. Development
   - Templates for pages
   - Templates for posts
   - Waypoints javascript for cool header
   
 You see that even very basic set up with carefully chosen technologies(Git pages hosts with out my intervention, metalsmith is one of the easiest to use static site
 generators) it takes many steps to create a stand-alone blog. 
   