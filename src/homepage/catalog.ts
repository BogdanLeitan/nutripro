let a = document.querySelectorAll<HTMLElement>(".mancare"); 
let isDebugg: boolean = true;

a.forEach(function(elem: HTMLElement){
    elem.addEventListener("click", () => {
        const img = elem.children[0] as HTMLImageElement;
        let path = img.src;
        extragereDinPath(path);
    });
});

function extragereDinPath(path: string){
    const fileName = path.split("/").pop()!;

    /*if (isDebugg) {
        window.location.href = `produs.html?${fileName}`;
    } else {
        window.location.href = `/nutripro/dist/explore/produs.html?${fileName}`;
    }*/
   window.location.href = `/nutripro/dist/Catalog/produs.html?produs=${fileName}`;
}