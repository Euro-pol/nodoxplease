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
    'use strict';

    const selectors = ["#taw", "#footcnt", "#oFNiHe"];
    let observer;

    function removeElements() {
        selectors.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.remove();
            }
        });
    }

    function setupObserver() {
        observer = new MutationObserver(mutations => {
            removeElements();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            removeElements();
            setupObserver();
        });
    } else {
        removeElements();
        setupObserver();
    }

})();
