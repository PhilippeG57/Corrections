/* Je récupere ma div class container */
let container = document.querySelector(".container");

/* Je crée une div et je lui ajoute les class row et text-center */
let row = document.createElement("div");
row.classList.add("row");
row.classList.add("text-center")

/* Je place ma div class row dans ma div class container */
container.appendChild(row);

for(let i=1 ; i<4; i++){
    /*Créer grace a une boucle mes 3 div class col
    et mes balises div class bg-primary p-2, h2 et p */
    let col = document.createElement("div");
    col.classList.add("col-12");
    col.classList.add("col-md-4");

    let bg = document.createElement("div");
    bg.classList.add("bg-primary");
    bg.classList.add("p-2");

    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    
    /*Préparer la source de l'image */
    img.src = `./img/image${i}.png`

    /*Mettre du innerHTML dans mes balises h2 et p*/
    /* h2.textContent = "Compétence "+i; */
    h2.textContent = `Compétence ${i}`;
    p.textContent = `Maitrise de la compétence ${i}`;

    /*Mettre les balises les unes dans les autres grace à appendChild*/
    bg.appendChild(img);
    bg.appendChild(h2);
    bg.appendChild(p);

    col.appendChild(bg);
    row.appendChild(col);
}