"use strict";
let a = document.querySelectorAll(".mancare");
let isDebugg = true;
a.forEach(function (elem) {
    elem.addEventListener("click", () => {
        const img = elem.children[0];
        let path = img.src;
        extragereDinPath(path);
    });
});
function extragereDinPath(path) {
    let newPath = "";
    let countBars = 0;
    let isWriting = false;
    for (let i = 0; i < path.length; i++) {
        if (path[i] == "%") {
            countBars += 1;
        }
        if (countBars == 1) {
            isWriting = true;
        }
        if (isWriting) {
            newPath += path[i];
        }
    }
    const encodedPath = encodeURIComponent(newPath);
    if (isDebugg) {
        window.location.href = `produs.html?${encodedPath}`;
    }
    else {
        window.location.href = `/nutripro/dist/explore/produs.html?${encodedPath}`;
    }
}
