let url: string = window.location.href;

let countBars: number = 0;
let isWriting: boolean = false;
let x: string = "";

let n = url.split("/").pop()!;
const fileName = n.split("?").pop()!;

console.log(fileName);

let produsImg = document.getElementById("produsImg") as HTMLImageElement;
let TitliProdus = document.getElementById("TitluProdus") as HTMLElement;
let descriereProdus = document.getElementById("descriereProdus") as HTMLElement;
let pretNou = document.getElementById("pretNou") as HTMLElement;
let pretVechi = document.getElementById("pretVechi") as HTMLElement;

let imgPath: string[] = [
    "mancare1", "mancare2", "mancare3", "mancare4", "mancare5", "mancare6",
    "mancare7", "mancare8", "mancare9", "mancare10", "baton1", "baton2", "baton3",
    "shake1", "shake2", "shake3", "shake5"
];

let titlu: string[] = [
    "Paste cu carne de pui", "Carne de pui cu orez", "Carne de peste cu legume",
    "Carne de pui cu mazare", "Somon cu legume", "Carne de pui cu legume", "Carne de pui cu legume",
    "Carne de vita cu legume", "Orez cu carne de pui", "Carne de pui cu legume", "Baton cu caramel",
    "Baton cu banana", "Baton cu ciocolata", "Shake cu caramel", "Shake cu banane", "Shake cu ciocolata",
    "Shake cu ciocolata"
];

let descriere: string[] = [
    "Paște cu carne de pui și ciuperci 450g 72g proteine, 521 ckal. Conține macaroane cu sos de tomate și piept de pui la cuptor, și salata cu ciuperci.",
    "Carne de pui cu legume 480g, 58g proteine, 395 ckal. Conține piept de pui la grătar, dovlecel la grătar, roșii și orez cu legume.",
    "Peste al cuptor cu legume 430g, 7g proteine, 481 ckal. Conține peste la cuptor, conopida, păstăi, salata și roșii.",
    "Carne de pui cu mazăre 470g, 62g proteine, 385 ckal. Contine piept de pui la cuptor, dovlecel la grătar, mazăre și ciuperci.",
    "Carne de peste cu legume 450g, 55g proteine, 421 ckal. Conține somon la grătar cu salata, morcovi și conopida.",
    "Carne de pui cu legume 480g, 68g proteine, 415 ckal. Conține carne de pui la grătar cu salata de castraveți, roși, gogoșari, ridichi și porumb.",
    "Carne de pui cu salata 430g, 59g proteine, 378 ckal. Conține pui la cuptor și salata cu păstăi.",
    "Carne de porc cu legume 460g, 71g proteine, 395 ckal. Conține carne de porc la grătar cu salata de rosi, castraveți, gogoșari, porumb și ridichi.",
    "Carne de pui cu orez și legume 500g, 65g proteine, 543 ckal. Conține piept de pui, orez și salata de legume cu dovlecel la grătar.",
    "Carne de pui cu legume 480g, 60g proteine, 386 ckal. Conține piept de pui la grătar cu fasole și salata.",
    "Baton cu ciocolată 80g, 22g proteine, 170 ckal, Conține cacao, unt de arahide, lapte, ovăz, ciocolata amară,  semințe de chia și pudra proteica.",
    "Baton cu banane 80g, 22g proteine, 170 ckal. Conține banane, unt de arahide, lapte, ovăz, ciocolata amară,  semințe de chia și pudra proteica.",
    "Baton cu caramel 80g, 22g proteine, 170 ckal. Conține caramel, unt de arahide, lapte, ovăz, semințe de chia și pudra proteica.",
    "Shake cu căpșuni 500ml, 40g proteine, 358 ckal. Conține căpșuni, lapte, pudra proteica, siropuri.",
    "Shake cu banane 500ml, 40g proteine, 396 ckal. Conține banane, lapte, pudra proteica, siropuri.",
    "Shake cu caramel 500ml, 40g proteine, 325 ckal. Conține caramel, lapte, pudra proteica, siropuri.",
    "Shake cu ciocolata 500ml, 40g proteine, 411 ckal. Conține ciocolata, lapte, pudra proteica, siropuri."
];

let pretn: string[] = [
    "32,00 RON", "28,00 RON", "28,00 RON", "25,00 RON", 
    "34,00 RON", "20,99 RON", "28,00 RON", "34,00 RON",
    "28,00 RON", "28,00 RON", "5,00 RON", "5,00 RON", "5,00 RON",
    "10,00 RON", "10,00 RON", "10,00 RON", "10,00 RON"
];

let pretv: string[] = [
    "37,99 RON", "34,99 RON", "34,99 RON", "31,99 RON", 
    "39,99 RON", "40,00 RON", "34,99 RON", "39,99 RON",
    "34,99 RON", "34,99 RON", "7,00 RON", "7,00 RON", "7,00 RON",
    "13,00 RON", "13,00 RON", "13,00 RON", "13,00 RON"
];

for(let i: number = 0; i < 18; i++){
    if(fileName == `produs=${imgPath[i]}.webp`){
        produsImg.src = `../../assets/poze mancare/${imgPath[i]}.webp`;
        TitliProdus.textContent = titlu[i];
        descriereProdus.textContent = descriere[i];
        pretVechi.textContent = pretv[i];
        pretNou.textContent = pretn[i];
    }
}