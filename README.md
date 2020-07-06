#Gwen Recommends

Gwen Recommends is a blog page with a forest a crows theme. There is a section for random things that I, Gwen, find interest. The goal is for this page to grow overtime with different and varied “Shinies” and for Places to go to become Places I’ve been, and for new things to go into Places to Go. There is a Cawntact Me page where people can submit ideas for things for either section. 

##UX

This page is mean to be an interesting and fun distraction. The plan is for people to go into the Shinies section and hopefully see something they like and maybe learn something they didn’t know before. In places maybe they’ll see somewhere they didn’t think on visiting before.

Please see the main folder for wireframes for this page. 

##Features
In this page there are 4 main pages:
-The Nest: Which is the introduction page
-Shinies: Which is an eclectic mix of a few different things that caught my interest over the last few months
-Places: Which includes 2 places to visit in Ireland, when it is safe to do so, and a map that shows the location of those 2 places
-Cawntact Me: Which is a standard contact page.

The side menu is collapsible by clicking the header and will be auto collapsed when the screen is below a certain size. There are a few headers that also do this, not out of anything necessary, just for a bit of fun. In the tablet and mobile size there is even a Secret Shiny hidden in the footer in the form of a crow icon. It leads to the Octocat website. In future there will be more of these EasterEggs tucked throughout the site. 

###In future… 
I also plan on having the side menu panel completely collapsible. I plan to have a books section with a goodreads api, a youtube non-music playlist via api, and a youtube music playlist via api. 

There will also be a mailinglist sign up on the bottom of the page with associated social media. At this time, I do not have public social media that I feel comfortable sharing however I plan on changing this. 

I will need to add a cookies banner or pop-up when the site is operational. 

##Technologies Used

In addition to HTML and CSS I used:
-[JQuery]( https://jquery.com/): To increase responsiveness and allow for sections to be toggled. There will be increased use of JQuery at a later date.
-[FontAwesome]( https://fontawesome.com/): allowed icons to be added to the page.
-Javascript via [GoogleMaps]( https://developers.google.com/maps/documentation) : to allow for maps to be added to the Places to Go page. I used the tutorial provided by Code Institute.
##Testing
For testing I used the following pages as well as manual testing.
[W3C Markup Validation Service]( https://validator.w3.org/) for HTML
[W3C CSS Validation Service]( https://jigsaw.w3.org/css-validator/) for CSS

and JShint for Javascript and JQuery. Though this one did show errors, I did manual testing and verified the script I used with both the example script from Code Institute and the Google maps tutorial. The code preformed as it is supposed to and did not show errors when used. 

Using Chrome Developer features I played with the screen size to ensure that the menus were collapsible and not cumbersome at different sizes and that the text is visible. 

The only problem noted is that the bottom of the page slips higher on larger screens for the Nest and Cawntact pages. Added a temporary solution of a background colour that suits the existing colours while I investigate on sticking footer to the bottom of the screen without disrupting the rest of the page. 

##Deployment

To clone this project from GitHub:
1.	Follow this link to the [Gwen Recommends]( https://github.com/Gwen-of-lynn/GwenRecs).
2.	Under the repository name, click "Clone or download".
3.	In the Clone with HTTPs section, copy the clone URL for the repository.
4.	In your local IDE open Git Bash.
5.	Change the current working directory to the location where you want the cloned directory to be made.
6.	Type git clone, and then paste the URL you copied in Step 3.
git clone https://github.com/USERNAME/REPOSITORY
7.	Press Enter. Your local clone will be created.
Further reading and troubleshooting on cloning a repository from GitHub [here]( https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

##Credits
###Content
-Code for 404.html, maps.js, sendEmail.js were copied and adjusted from the 404.html in Code Institute’s Resume Tutorial
-many other smaller sections of code still resemble aspects of the resume page in the code institute tutorial as that was often used to figure out related elements on these pages.
-Fonts used are from Google Fonts. 

####Places
-The Wild Ireland description is partially paraphrased from information available on their website, however it is not a direct quote.
-The Rathcroghan description is a directly copied quote from the Rathcroghan Visitor information website and is acknowledged as such.
###Media
-forestpath.jpg is a picture I took myself by Lough Ree
-crow clipart was found at https://dlpng.com/png/7086311

###Acknolodgements
This page was created as a Milestone Project for Code Institute. 
