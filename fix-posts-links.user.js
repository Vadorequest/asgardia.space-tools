// ==UserScript==
// @name         Asgardia Forum
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bugfix and enhancements
// @author       Vadorequest <https://github.com/vadorequest>
// @match        https://asgardia.space/*/forum/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Find all posts contents
    var posts = document.querySelectorAll('div.post-content');
    for(var i = 0; i < posts.length; i++){
        var post = posts[i];
        var links = post.querySelectorAll('a');
        
        for(var j = 0; j < links.length; j++){
            var link = links[i];
            
            if(link){
                var fixedUrl = decodeURIComponent(link.getAttribute('href'));
                link.href = fixedUrl; // Replace broken link.
                link.target = '_blank'; // Open link in a new page.
            }
        }
    }
})();
