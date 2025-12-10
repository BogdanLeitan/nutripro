"use strict";
let url = window.location.href;
let countBars = 0;
let isWriting = false;
let x = "";
for (let i = 0; i < url.length; i++) {
    if (url[i] == "%") {
        countBars += 1;
    }
    if (countBars == 2) {
        isWriting = true;
    }
    if (isWriting) {
        x += url[i];
    }
}
console.log("Path primit:", x);
