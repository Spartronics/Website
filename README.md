# Spartronics5048.com Github Repository

This is the full contents of spartronics5048.com. Team members can feel free to edit this site through here; it will be automatically synced with the web server. Outsiders can add suggestions via pull request, but keep in mind that there's a good chance we'll reject it if it isn't up to our snuff.

**NEW!** We're using GitHub Pages as our web host. This allows us to use the [Jekyll webpage generator](https://jekyllrb.com/), which makes everything a lot easier to edit. (If needed, we can move from Jekyll to any other system in the future.)

All material, unless otherwise stated, is under copyright of their respective creators unless otherwise stated.

##Editing
#Editing Posts
It's simple.

1. Go to https://github.com/Spartronics/Website
2. Go to the file you want to edit
3. Edit that file using the text editor on the site.
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

**You should only need to do this if you're editing the styles or other low-level stuff. (You probably won't do this.)** Windows users will need to use "BASH on Windows", while macOS and Linux users can just use their terminal program. You will also need [Ruby](https://www.ruby-lang.org/en/) installed. (Windows users should install 

1. Navigate to a folder you want to save the site to (using `cd`)
2. Run `git clone https://github.com/Spartronics/spartronics.github.io`
3. Continue following the steps on https://jekyllrb.com/docs/quickstart/

##Content Guidelines

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
* DO NOT ADD VIDEOS TO THIS REPOSITORY. Upload them to Youtube and either embed it or place it's link in the gallery JSON.

###HTML
* Make sure the page validates on http://validator.w3.org. Failure to validate will cause the page to not work on some browsers, which will be bad.
* NEVER, under ANY circumstances, use the following tags:
  * FONT
  * CENTER
* Keep any visual information in CSS, preferably in 'style.css' or the STYLE tag at the top of the page.
* Keep HTML as a description of the contents of the document, not how it looks.
* If creating a new page, use the templates provided in /templates.

These guidelines are subject to change.
