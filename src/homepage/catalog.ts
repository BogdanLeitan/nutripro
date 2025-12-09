let a = document.querySelectorAll<HTMLElement>(".mancare");

a.forEach(function(elem: HTMLElement){
    elem.addEventListener("click", () => {
        const img = elem.children[0] as HTMLImageElement;
        let path = img.src;
        console.log(path);
        extragereDinPath(path);
    });
});

function extragereDinPath(path: string){
    //ramas
}