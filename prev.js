// ==UserScript==
// @name         Auto Agree+Skip YouTube Consent/Sign-in Pages
// @namespace    https://greasyfork.org/en/users/85671-jcunews
// @version      1.1.2
// @license      AGPLv3
// @author       jcunews
// @description  Automatically click on the "I Agree" button on YouTube's consent page, the "No thanks" link on YouTube's sign-in popup, or the "I understand and wish to proceed" button on YouTube's video page.
// @match        https://consent.youtube.com/*
// @match        https://www.youtube.com/*
// @match        https://www.music.youtube.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

((a, t) => {

  const waitTime = 10; //how many seconds to wait for any sign-in popup to appear after fresh-loading a web page

  switch (location.hostname) { // hostname or domain of current page.
    case "consent.youtube.com": if (a = document.querySelector('[type="submit"]')) {a.click();} break;
    case "www.music.youtube.com":
    case "www.youtube.com":
      addEventListener("load", h => { //set event listener for the "load" event
        t = (new Date).getTime();
        h = setInterval(() => { //set timer and will execute the code within the timer at regular intervals (100 milliseconds in this case). The timer will continue to run until it has been running for the number of seconds specified by waitTime
          if (a = document.querySelector(
            'yt-upsell-dialog-renderer tp-yt-paper-button[aria-label="No thanks"],'+
'.yt-player-error-message-renderer tp-yt-paper-button[aria-label="I understand and wish to proceed"],'+
'.yt-spec-button-shape-next.yt-spec-button-shape-next--filled.yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--size-m'

          )) {a.click();}
          // yt-spec-touch-feedback-shape__fill
          if (((new Date).getTime() - t) > (waitTime * 1000)) clearInterval(h)
        }, 100);
      })
      break;
  }
})()
