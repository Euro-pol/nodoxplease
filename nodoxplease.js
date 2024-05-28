// ==UserScript==
// @name         NoDoxPlease
// @namespace    http://hypixel.lol
// @version      2024-05-28
// @description  Removes Google's "Results for" section from search results and your location from the footer of the page.
// @author       Euro-pol
// @match        https://www.google.com/search*
// @icon         https://www.github.com/Euro-pol/nodoxplease/raw/main/icon.png
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {

    const elements = ["#taw", "#footcnt", "#oFNiHe"]

    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    observer.disconnect();
                    resolve(document.querySelector(selector));
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    for (const element of elements) {
        waitForElm(element).then(elm => {
            elm.remove();
        });
    }

})();