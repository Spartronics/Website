# Spartronics5048.com Github Repository

This is the full contents of spartronics5048.com. Team members feel free to edit this site through here; it will be automatically synced with the web server on the hour. Outsiders can add suggestions via pull request, but keep in mind that there's a good chance we'll reject it if it isn't up to our snuff.

All material, unless otherwise stated, is under copyright of their respective creators. (We may change this in the future to be Creative Commons or the like; it's something we've gotta discuss.)

##Editing
#Editing HTML
It's simple.

1. Go to https://github.com/Spartronics/Website
2. Go to the file you want to edit
3. Edit that file using the text editor on the site. If you need to edit it offline, follow the instructions for Viewing Offline.
4. Save your edits. Keep editing other files if you need.
5. Once done, press Commit and add a comment.

#Uploading files
Also simple.

1. Go to https://github.com/Spartronics/Website
2. Go to the folder you want to upload files to.
3. Drag the file from your computer to the Gihub page
4. Add a comment and press Commit.
5. Make sure the files are linked to from the website. (You'll need to edit the HTML for the page you want to add the link to.)

##Viewing Offline

Due to some weird Javascript and orgainzational stuff going on, you'll probably want to run a web server on your computer and view it from that. Thankfully, that is a stupidly easy process.

1. Download the site's contents as a zip from the Github page
1. Install Python 3.x from http://python.org/downloads/
2. Open a Command Prompt window and use 'dir' and 'cd' to navigate to where the website is located.
3. Run the command 'python -m http.server'. This will start python's built in web server.
4. Open a web browser and navigate to 'http://localhost:8000'. The website will appear.

##Content Guidelines
We won't take garbage. That being said as of right now we don't have many standards.

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
* Make sure the page validates on http://validator.w3.org. Failure to validate will cause the page to not work on some browsers, which will be bad.
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
