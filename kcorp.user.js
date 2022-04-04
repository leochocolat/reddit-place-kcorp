// ==UserScript==
// @name         Reddit Place - Armée de Kameto
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  On va récuperer ce qui nous est du de droit.
// @author       Adcoss95
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://styles.redditmedia.com/t5_4eiiz1/styles/communityIcon_ojy24r8j90o81.jpg
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://github.com/CorentinGC/reddit-place-kcorp/raw/main/overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            document.addEventListener("keydown", function(event) {
                if(event.key == "F4"){
                    if (i.style.display === "none") {
                        i.style.display = "block";
                    } else {
                        i.style.display = "none";
                    }
                }
            });
            
            document.addEventListener('click', function(event) {
                let pixelPreview = document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-pixel-preview")[0].shadowRoot.children[0];
                if (pixelPreview) {
                    let pixelTarget = pixelPreview.querySelector('mona-lisa-target');
                    if (!pixelTarget) {
                        pixelPreview.style.width = "50%";
                        pixelPreview.style.border = "2px solid white";
                    } else {
                        pixelPreview.style.width = "100%";
                    }
                }
            });
            
            return i;
        })())
 
    }, false);
 
}
