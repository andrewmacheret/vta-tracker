# vta-tracker

![Bus image](bus.png?raw=true "Bus image")

Track VTA buses using [andrewmacheret/vta-tracker-server](https://github.com/andrewmacheret/vta-tracker-server), [Google Maps API](https://developers.google.com/maps/), and [jQuery](https://jquery.com/).

See it running at [http://andrewmacheret.com/projects/vta-tracker](http://andrewmacheret.com/projects/vta-tracker).

Prereqs:
* [andrewmacheret/vta-tracker-server](https://github.com/andrewmacheret/vta-tracker-server)
* A web server (like [Apache](https://httpd.apache.org/)).

Installation steps:
* `git clone <clone url>`
* Modify the top of `index.js` to change `url` and `interval` as needed.

Test it:
* Open `index.html` in a browser.
 * For testing purposes, if you don't have a web server, running `python -m SimpleHTTPServer` in the project directory and navigating to [http://localhost:8000](http://localhost:8000) should do the trick.
* After loading, you should a google map of the San Jose, California area litered with bus images.
* To troubleshoot, look for javascript errors in the browser console.

