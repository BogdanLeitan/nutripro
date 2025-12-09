"use strict";
let a = document.querySelectorAll(".mancare");
a.forEach(function (elem) {
    elem.addEventListener("click", () => {
        const img = elem.children[0];
        let path = img.src;
        console.log(path);
    });
});
