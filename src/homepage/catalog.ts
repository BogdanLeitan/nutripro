let a = document.querySelectorAll<HTMLElement>(".mancare"); 
let isDebugg: boolean = false;

a.forEach(function(elem: HTMLElement){
    elem.addEventListener("click", () => {
        const img = elem.children[0] as HTMLImageElement;
        let path = img.src;
        extragereDinPath(path);
    });
});

function extragereDinPath(path: string){
    const newPath: string = decodeURIComponent(path);

    if (isDebugg) {
        window.location.href = `produs.html?${newPath}`;
    } else {
        window.location.href = `/nutripro/dist/explore/produs.html?${newPath}`;
    }
}