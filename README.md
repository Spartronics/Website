# Spartronics5048.com Github Repository

This is the full contents of spartronics5048.com (or will be, once we upload this and replace the old one.) Team members feel free to edit this site; it will hopefully be automatically synced with the web server once I figure out how to set that up. Outsiders can add suggestions, but keep in mind that there's a good chance we'll reject it if it isn't up to our snuff.

All material, unless otherwise stated, is under copyright of their respective creators. (We may change this in the future to be Creative Commons or the like; it's something we've gotta discuss.)

##Editing
While it is totally and 100% possible to edit the site from Github.com, it's the last thing we'd recommend. What you should do is use git to copy the site to your computer and update is automatically.

To get Git running and download the site's files:

1. Install git from http://git-scm.com/downloads
2. Open a 'git bash' window
3. Run 'git config --global user.name "YOUR USERNAME"
4. Run 'git config --global user.email "YOUR EMAIL ADDRESS"
5. Use 'ls' and 'cd' to navigate to where you'd like to place the website files.
6. Use 'md' to make a folder to place the website in.
7. Use 'cd' to enter that folder.
8. Run 'git clone https://github.com/Spartronics/Website.git' to copy the site to that folder.

You will probably want to update your copy of the website on a regular basis. To update files:

1. Open a bash window and navigate to where the site is
2. Run 'git pull origin master'

To edit files and upload them:

1. Get permission from the repository's owners to edit the site (first time only)
2. Open a bash window and navigate to where the website is.
3. Update the site's files with 'git pull origin master'
4. Edit the files as you normally would with your favorite HTML (or whatever) editor
5. For each file you've edited, type 'git add [FILENAME]'.
6. Run 'git push origin master'. Type your username and password when prompted.

There's a lot of other cool things you can do with git, but those are the basics on getting started.

##Viewing Offline

Due to some weird Javascript and orgainzational stuff going on, you'll probably want to run a web server on your computer and view it from that. Thankfully, that is a stupidly easy process.

1. Install Python 3.x from http://python.com
2. Open a Command Prompt window and use 'dir' and 'cd' to navigate to where the website is located.
3. Run the command 'python -m http.server'. This will start python's built in web server.
4. Open a web browser and navigate to 'http://localhost:8000'. The website will appear.

##Content Guidelines
We won't take garbage. That being said as of right now our standards are rather low.

###Text
* Use proper grammar.
* Keep things relatively short. This is the internet, after all.

###Pictures
* Keep filesizes small. Aim for less than 100kb/pic. We want everyone to view this website, even if they have a 1GB smartphone plan
* Keep picture dimensions small. General rule of thumb is less than 1000x1000, and definitely less than 2000x2000.
* Make sure pictures are high quality. That means no duplicates, no blurry pictures, etc.
* Don't upload every picture you have. Keep the amount small to avoid reader fatigue from too many pictures from the same event.
* Keep all images in the /images directory, under a subdirectory that describes the page the image is to be used on.

###Videos
* DO NOT COMMIT VIDEOS TO THIS REPOSITORY. Upload them to Youtube and either embed it or place it's link in the gallery JSON.

###HTML
* Make sure the page validates on http://validator.w3c.org. Failure to validate will cause the page to not work on some browsers, which will be bad.
* NEVER, under ANY circumstances, use the following tags:
  * FONT
  * CENTER
* Keep any visual information in CSS, preferably in 'style.css' or the STYLE tag at the top of the page.
* Keep HTML as a description of the contents of the document, not how it looks.
* If creating a new page, use the templates provided in /templates.

###CSS
Don't edit style.css unless everyone agrees it's okay to do so. Because this file effects every site on the page, simply altering the colors will alter the entire website. If you need to add a special element to a page though, feel free to use CSS within the page however you feel.

###Javascript
Be extremely careful editing the gallery JS. It could break very easily, and I'll admit it's not the most well-documented thing in the world.

Do not include any other Javascript unless it is absolutely vital to the operation of the page. And no, jQuery animations are not vital. Use CSS for that kind of stuff.

These guidelines are subject to change.
