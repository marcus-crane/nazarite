# Nazarite

## Que?

What happens if you take someone who isn't the greatest at front end design and get them to create a site for a song release? That's what this is ;)

The actual design of the site was thought up by [Silas McClintock aka Bobandii](https://www.facebook.com/iambobandii/).

It's already "open source" in the sense that it's just HTML, CSS and JS but it's good to release it properly anyway.

## What did you learn?

Well, I was no stranger to media queries before but I think this project really nailed them into my skull.

The main trouble I had was getting the parallax to work properly as I hadn't really needed to use z-indexes. Most, if not all, of the examples of parallax I could find were comprised of elements stacked on top of one another. This project utilized transparency so that some layer would move faster or slower than others right below them.

I also had trouble with parallax on iOS as apparently mobile webkit can often have trouble. I ended up swapping from rellax.js to stellar.js which actually fixed quite a few bugs.

We also kinda struggled to compromise between rendering nice art assets and having to compress them so use on super slow networks. There could probably be a few improvements done in this area.

Oh yeah, I never knew [pngcrush](https://pmt.sourceforge.io/pngcrush/) was a thing although I prefer [TinyPNG](https://tinypng.com) myself.

## What's it running on?

Nothing special, it's on a basic Ubuntu box that serves static assets using nginx. It's also got Cloudflare in front just to speed up some of the assets but it's debatable how helpful it is.
