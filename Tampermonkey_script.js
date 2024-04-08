// ==UserScript==
// @name         YT remove recommendation under video
// @namespace    https://www.youtube.com/
// @version      1.0
// @description  Remove the recommendation section below the video
// @author       RustiX
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Specify the id of the element you want to hide
    var elementId = 'primary';
    var commentsId = 'secondary';

    // Function to apply style to hide the element
    function hideElement() {
        var element = document.getElementById(elementId);
        if (element) {
            // Apply style directly to hide the element and override any other styles
            element.style.display = 'none';
            element.style.visibility = 'hidden';

            var comments = document.getElementById(commentsId);
            comments.style.width = '1280px';
        }
    }

    // Function to apply the effect after 2 seconds of page load
    function applyEffect() {
        console.log('applyEffect function triggered');
        hideElement();
    }

    // Add event listener for window.onload to trigger the effect after page load
    window.onload = function() {
        setTimeout(applyEffect, 2000); // 2000 milliseconds = 2 seconds
    };
})();
