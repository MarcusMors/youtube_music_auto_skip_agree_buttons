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
      addEventListener("load", h => {
        t = (new Date).getTime();
        h = setInterval(() => { //set timer and will execute the code within the timer at regular intervals (100 milliseconds in this case). The timer will continue to run until it has been running for the number of seconds specified by waitTime

        const YTNoThanksSelector = 'yt-upsell-dialog-renderer tp-yt-paper-button[aria-label="No thanks"],'
        const YTUnderstandSelector = '.yt-player-error-message-renderer tp-yt-paper-button[aria-label="I understand and wish to proceed"],'
        const YTMusicUnderstandSelector = '.style-scope.yt-button-renderer.style-primary'
        // let button = document.querySelector(`${YTNoThanksSelector}, ${YTUnderstandSelector}, ${YTMusicUnderstandSelector}`)
        let button = document.querySelector(`${YTUnderstandSelector}, ${YTMusicUnderstandSelector}`)
          if (button) {button.click();}
          if (((new Date).getTime() - t) > (waitTime * 1000)) clearInterval(h)
        }, 100);
      })
      break;
  }
})()
