let url: string = window.location.href;

let countBars: number = 0;
let isWriting: boolean = false;
let x: string = "";

for(let i:number = 0; i < url.length; i++){
    if(url[i] == "%"){
        countBars += 1;
    } if(countBars == 2){
        isWriting = true;
    } if(isWriting){
        x += url[i];
    }
}

console.log("Path primit:", x);