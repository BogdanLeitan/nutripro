"use strict";
let a = document.querySelectorAll(".mancare");
let newPath = "";
a.forEach(function (elem) {
    elem.addEventListener("click", () => {
        const img = elem.children[0];
        let path = img.src;
        extragereDinPath(path);
    });
});
function extragereDinPath(path) {
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
    window.location.href = `produs.html?${encodedPath}`;
}
