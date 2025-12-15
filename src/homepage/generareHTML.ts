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

let imgPath: string[] = [
    "mancare1", "mancare2", "mancare3", "mancare4", "mancare5", "mancare6",
    "mancare7", "mancare8", "mancare9", "mancare10", "baton1", "baton2", "baton3",
    "shake1", "shake2", "shake3", "shake4"
];

let titlu: string[] = [
    "Paste cu carne de pui", "Carne de pui cu orez", "Carne de peste cu legume",
    "Carne de pui cu mazare", "Somon cu legume", "Carne de pui cu legume", "Carne de pui cu legume",
    "Carne de vita cu legume", "Orez cu carne de pui", "Carne de pui cu legume", "Baton cu caramel",
    "Baton cu banana", "Baton cu ciocolata", "Shake cu caramel", "Shake cu banane", "Shake cu ciocolata",
    "Shake cu cocos"
];

let descriere: string[] = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in earum repellat velit quasi debitis, dolore libero, commodi voluptas nostrum provident facere cum harum soluta nesciunt architecto ad ea quia, praesentium quis quam tempora quas neque. At voluptatum, odit dignissimos quam doloribus excepturi minus asperiores quisquam ab ut velit assumenda."
];

for(let i: number = 0; i < 18; i++){
    if(fileName == `${imgPath[i]}.webp`){
        produsImg.src = `../../assets/poze mancare/${imgPath[i]}.webp`;
        TitliProdus.textContent = titlu[i];
        descriereProdus.textContent = descriere[i];
    }
}