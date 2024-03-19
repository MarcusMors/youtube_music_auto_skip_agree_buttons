// ==UserScript==
// @name        Auto skip I understand and wish to proceed message - music.youtube.com
// @namespace   marcusmors.com
// @match       https://music.youtube.com/watch
// @grant       none
// @version     1.0.0
// @author      Jose Vilca <@marcusmors>
// @description skips the annoying content warning of youtube music
// @license     AGPLv3
// @run-at      document-end
// ==/UserScript==

// based on this great script https://greasyfork.org/en/scripts/425136-auto-agree-skip-youtube-consent-sign-in-pages

((a, t) => {

  const waitTime = 10; //how many seconds to wait for any sign-in popup to appear after fresh-loading a web page

  addEventListener("load", h => { //set event listener for the "load" event
    t = (new Date).getTime();
    h = setInterval(() => { //set timer and will execute the code within the timer at regular intervals (100 milliseconds in this case). The timer will continue to run until it has been running for the number of seconds specified by waitTime
    const YTMusicUnderstandSelector = ".style-scope.yt-button-renderer.style-primary"
    let button = document.querySelector(YTMusicUnderstandSelector)
      if (button) {button.click();}
      if (((new Date).getTime() - t) > (waitTime * 1000)) clearInterval(h)
    }, 100);
  })

})()
