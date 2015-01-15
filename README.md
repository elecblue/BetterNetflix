# Better Netflix

Better Netflix is a Chrome extension designed to improve the user experience of the Netflix web app. It allows users to change various aspects of the web app, including section reorganization, page actions, presentation, and plenty of other things.

### Features
 + Change "poster" click behavior to go to title detail page instead of resuming video playback.
 + Display movie/TV show reviews from IMDB, Rotten Tomatoes, and/or Metacritic on hover infobox and/or title detail page.
 + Toggle _Cinema Mode_, which modifies presentation of the web app to improve the experience when being used at a distance (like watching on your TV from the couch). 
 + Toggle _Dark Mode_, which presents the app in, well, darker colors.
 + Use a customised design for the experimental HTML5 player.
 + Hide sections, expand them to display inline on multiple rows, or enable a more traditional scrolling behavior (like being able to use a mouse wheel/scroll gestures instead of the default and painfully slow hover arrows).
 + Fade titles you've already watched or hide them altogether, including the ability to manually mark titles as watched if you've watched them outside of Netflix (or on another account). You can also hide titles independent of this setting, if you'd prefer not to see a specific title at all. 
 + Hide duplicate titles when they're displayed in different sections.
 + Hide episode synopses in hover infoboxes and/or within the in-player browser _(latter only available in the experimental HTML5 player)_.
 + Customise the title details page: 
    - Hide or collapse user review section by default.
    - Hide or collapse show details column.
    - Hide content ratings and/or streaming details.
 + Hide social features (recommend links, infoboxes, "Watched By", et cetera).
 + Hide minor UI elements:
    - Don't show DVD link in header if you're not subscribed to the DVD service.
    - Hide the footer section that contains links to non-media sections of Netflix website.
 + Enable incremental (half-star) ratings.
 + Add personal notes to titles.
 + Display links to the title on Wikipedia and IMDB.
 + Explore your adventurous side by playing an entirely random title, or random titles within a certain scope, like a random episode of a specific show and/or season, or a random title from the "More Like" suggestions.

#### Potential features

 + Mask your geographic location to view region-locked content.
  - I'm located within the US, so obviously a Netflix user located in another country they service would have to contribute to this to truly implement this sort of thing. This feature would also be subject to (quote probable) technical restrictions that I have yet to look into.
 + Take screenshots of the video _output_. Possibly implement a feature to facilitate "capturing" the output.
  - The former will probably only work in the experimental HTML5 player.
  - Capturing (i.e. _recording_) the output would certainly require external software to handle the actual capturing given the technical limitations of both Chrome's extension APIs and browser-based JavaScript in general. 
  - Audio/video capture also runs into the obvious copyright issues associated with software of that kind. If we can even manage to leap over the technical hurdles and actually impliment this feature, this would require the project to be forked into two variants as Google would certainly not _**play**_ (insert rimshot) along and allow the version with that feature to stay on the Chrome webstore. Not being in the webstore introduces an additional problem for Windows users as a result of Google's new third-party extension ~~shenanigans~~ policy that prevents the use of non-webstore extensions on non-Canary channels. Personally, I have much to say regarding Google's insulting lack of faith in the intelligence of their Windows customers, but I'll hold my tongue for now.

***

### Current version
| Channel | Version |
| ------ | ------- |
| Stable | No stable version |
| Development | 0.1.0 |

### Third-party code

Sprinkled throughout Better Netflix is code from other open source projects. This allows us to focus on fleshing out the features of the extension itself without spending unnecessary time and effort on the technology behind the features. Since the web development world is blessed with a massive community of wonderful open source developers and the brilliant libraries they've crafted, leveraging their code makes it much easier to get the most out of your own projects. Here's what you'll find in Better Netflix:

* [AngularJS] 
* [jQuery]
* [keymaster.js]

In addition to those libraries, Better Netflix also impliments code from some userscripts. As UserScripts.org has shuffled off its mortal coil, there's no active repo for most of these, so the relevant links instead point to a mirror of their most recent update prior to UserScripts.org's death.

* [Netflix Queue Sorter](http://userscripts-mirror.org/scripts/review/35183)
* [Netflix Notes](http://userscripts-mirror.org/scripts/show/30744)
* [Netflix Ratings](http://userscripts-mirror.org/scripts/review/175635)
* [Open Netflix Movies as Detail View](http://userscripts-mirror.org/scripts/review/142921)
* [Netflix Collapsed History](http://userscripts-mirror.org/scripts/review/479878)
* [Friendly Netflix Scrolling](https://userstyles.org/styles/98441/friendly-netflix-scrolling) _(The userscript implimentation.)_
* [Netflix Rating Granulizer](http://userscripts-mirror.org/scripts/review/8118)

Note that the code from the above userscripts aren't used in their entirety, and for the most part, their code isn't used at all and were only used as a model for our own methods.

### Installation

Better Netflix will be available on the Chrome webstore once it becomes relatively stable and feature-rich. At that point it can be installed in the usual two-click manner.

Until then, if you're a developer or just want to test development versions, you'll have to install it manually. Luckily, the process is still relatively straightforward.

##### Installing the packed extension (.crx)

 1. Download the latest packed development version [here](http://github.com/vicegirls/BetterNetflix/releases/dev/latest).
 2. Open Chrome's extension management page:
    - On OS X, open the "Chrome" menubar menu and click "Preferences", then click the "Extensions" tab on the right side.
    - On Windows, open the Chrome menu by clicking the "hamburger" icon under the window controls, scroll down to "More tools" and select "Extensions".
    - _Easiest method that works on all platforms, just open a new tab, type "chrome://extensions" (sans-quotes, obviously), and hit enter._
 3. Open the folder in which you saved the extension file (.crx) and drag it to the extension page.
 4. Click "Allow" or whatever similar option on the inevitable security prompt.

##### Installing the unpacked extension (for developers)

 1. Clone the repo via Git or download a zip of the latest development release:
    - via command line:  
    ``` git
    git clone http://github.com/vicegirls/BetterNetflix.git -b dev --single_branch <local directory>
    ```
    - or download a zip [here](http://github.com/vicegirls/BetterNetflix/zipball/dev) and extract it to a folder of your choice.
 2. Open Chrome's extension management page and make sure the "Development Mode" box is checked.
 3. Click the "Load unpacked extension..." box and choose the directory from step 1. The extension should now be listed among the other extensions on that page.

_Remember that, as a result of a recent Google policy change, you must be using Chrome Canary in order to use non-webstore extensions on Windows. I rarely use Windows, nor is this extension currently published through the webstore, so I'm not yet sure whether or not pre-release versions of webstore extensions distributed externally can be installed on standard Chrome by signing the dev version with the credentials from the webstore. Because 99.9% of my time is spent on OS X, I'll have to be honest and admit that ensuring dev versions work on standard Chrome for Windows is not going to be something I'll actively worry about._