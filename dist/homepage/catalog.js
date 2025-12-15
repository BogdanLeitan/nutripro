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
    const fileName = path.split("/").pop();
    /*if (isDebugg) {
        window.location.href = `produs.html?${fileName}`;
    } else {
        window.location.href = `/nutripro/dist/explore/produs.html?${fileName}`;
    }*/
    window.location.href = `/nutripro/dist/Catalog/produs.html?produs=${fileName}`;
}
