# Spartronics5048.com Github Repository

This is the full contents of spartronics5048.com. Team members can feel free to edit this site through here; it will be automatically synced with the web server. Outsiders can add suggestions via pull request, but keep in mind that there's a good chance we'll reject it if it isn't up to our snuff.

**NEW!** We're using GitHub Pages as our web host. This allows us to use the [Jekyll webpage generator](https://jekyllrb.com/), and the Prose.io editor, which makes everything a lot easier to edit. (If needed, we can move from Jekyll to any other system in the future.)

All material, unless otherwise stated, is under copyright of their respective creators unless otherwise stated.

#Editing
We use http://prose.io as our editor. It's really nice because it just lets you type and have words come out and onto the website instantly.

To use prose.io to edit the website...

1. Make sure you have a GitHub account with commit access to this repository. If you aren't (or don't know if you are), shoot an email over to somebody listed at https://github.com/orgs/Spartronics/people.
2. Go to http://prose.io and sign in with your GitHub account
3. Go to http://prose.io/#Spartronics/spartronics.github.io
4. Edit stuff!

Most pages use [Markdown](https://daringfireball.net/projects/markdown/syntax) for formatting. Note that for advanced stuff (links, tables, etc.) you can use [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) as well.

## Includes
You can include some special elements to your page super simply! These save you from typing and unnecesary technical knowledge.

### Sponsor logos
`{% include sponsors.html %}`

Insert the above command anywhere on the page to insert the sponsor logos, as displayed on the Home and Sponsors pages.

### Sectional navigation bars
`{% include th_nav.html %}`
`{% include about-nav.html %}`

These two includes are intended as stop-gap temporary measues until I can get an automatic navbar generated. Until then, include `th_nav.html` in all the Team Hub pages and `about-nav.html` in all the About pages. (If you add a new page, you will need to edit these files in the `_includes/` folder via GitHub.)

### Gallery
`{% include gallery.html %}`

This inserts a gallery at the given spot on the page. **Note that this include is very complicated, so ask [me](https://github.com/aahancoc) or [somebody else](https://github.com/orgs/Spartronics/people) if you need help.**

Note that right now switching between galleries in a viewer is not supported. I'm working on that.

The gallery contents are specified by the pages "metadata". On prose.io, click the "metadata" icon on the right side of the screen on the page you wish to insert a gallery on. In that will pop up a window asking for "raw metadata". In that window, insert something like the following:

    viewers:
        -
            thumbnails: true
            banner: false
            autoscroll: false
            galleries: 
                -
                   name: "2015"
                   path: "/images/gallery/2015.json"
                   images: "/images/gallery/2015/"
                -
                   name: "2014"
                   path: "/images/gallery/2014.json"
                   images: "/images/gallery/2014/"
                   
Generally speaking, this allows you to define multiple "viewers" (visible pictures) with multiple "galleries" (groups of pictures) with multiple pictures. This is in YAML format, so look that up if you need help with the syntax.

For the `viewers` section, there are four attributes. `thumbnails` determines whether or not to show the thumbnail strip at the bottom. `banner` makes the gallery display like the banner on the home page. `autoscroll` makes the image change to the next one every 5 seconds. And `galleries` is a list of galleries.

In `galleries`, there are three attributes. `name` is the name of the gallery, used for buttons. `path` is the path to the gallery description JSON file. (That is what defines which pictures to use and what their description text/thumnails are. Just copy/paste an existing one and edit the contents.) `images` is the folder that the gallery's images are stored in.

Again, **this is very complicated. Ask [me](https://github.com/aahancoc) for help if needed.** I'm working on ways to simplify this, but hopefully this is usable enoguh.

#Viewing Offline

**This is hard and scary, but you only need to do this if you're editing the styles or other low-level stuff. (You probably won't do this.)** 

Windows users will need to use "BASH on Windows", while macOS and Linux users can just use their built-in terminal program. You will also need [Ruby](https://www.ruby-lang.org/en/) installed. (Windows users should install Ruby via the apt-get command in BASH.)

1. Navigate to a folder you want to save the site to (using `cd`)
2. Run `git clone https://github.com/Spartronics/spartronics.github.io`
3. Continue following the steps on https://jekyllrb.com/docs/quickstart/

#Content Guidelines

##Text
* Use proper grammar.
* Keep things relatively short. This is the internet, after all.

##Pictures
* Keep filesizes small. Aim for less than 100kb/pic. We want everyone to view this website, even if they have a 1GB smartphone plan
* Keep picture dimensions small. General rule of thumb is less than 1000x1000, and definitely less than 2000x2000.
* Make sure pictures are high quality. That means no duplicates, no blurry pictures, etc.
* Don't upload every picture you have. Keep the amount small to avoid reader fatigue from too many pictures from the same event.
* Keep all images in the /images directory, under a subdirectory that describes the page the image is to be used on.

##Videos
* DO NOT ADD VIDEOS TO THIS REPOSITORY. Upload them to Youtube and embed it in the page.

These guidelines are subject to change.
