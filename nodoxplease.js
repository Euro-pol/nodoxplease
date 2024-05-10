// ==UserScript==
// @name         NoDoxPlease
// @namespace    http://hypixel.lol
// @version      2024-04-01
// @description  Removes Google's "Results for" section from search results and your location from the footer of the page.
// @author       Euro-pol
// @match        https://www.google.com/search*
// @icon         https://www.github.com/Euro-pol/nodoxplease/raw/main/icon.png
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function() {

    function waitForElm(selector) {
        return new Promise(resolve => {
            const observer = new MutationObserver(mutations => {
                const target = document.querySelector(selector);
                if (target) {
                    observer.disconnect();
                    resolve(target);
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    waitForElm("#rhs").then(elm => {
        const resultsForSection = elm.querySelector("#extabar");
        if (resultsForSection) {
            resultsForSection.remove();
        }
    });

    waitForElm("#footcnt").then(elm => {
        const locationSection = elm.querySelector("#swml");
        if (locationSection) {
            locationSection.remove();
        }
    });

})();
