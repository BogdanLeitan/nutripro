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
    let newPath: string = "";
    let countBars: number = 0;
    let isWriting: boolean = false;

    for(let i:number = 0; i < path.length; i++){
        if(path[i] == "%"){
            countBars += 1;
        } if(countBars == 1){
            isWriting = true;
        } if(isWriting){
            newPath += path[i];
        }
    }

    const encodedPath: string = encodeURIComponent(newPath);

    if(isDebugg){
        window.location.href = `produs.html?${encodedPath}`;
    } else{
        window.location.href = `/nutripro/dist/explore/produs.html?${encodedPath}`;
    }
}