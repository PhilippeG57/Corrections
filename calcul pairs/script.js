/*
-Demander à l'utilisateur un nombre
-Récuperer tous les nombres pairs inférieur à ce nombre et faire la somme
de ces nombes pairs
*/

/*let monNombre = prompt("Entrez un nombre");
// J'utilise la fonction pour calculer la somme des nombres pairs
let resultat = sommeNombresPairs(monNombre);

function sommeNombresPairs(n){
    let somme = 0;
    // Utiliser une boucle for pour répeter à travers les nombres de 1 à n.
    for(let i=1; i<=n; i++){
        if(i % 2 === 0){
            //Si le nombre est pair, 
            somme+=i
        }
    }

    //Renvoie la somme des nombres pairs
    return somme
}

//Afficher le résultat dans la console
console.log(`La somme des nombres pairs de 1 à ${monNombre} est : ${resultat}`)*/


/* Méthode Jimmy */
function main() {
    const nombre = Number(prompt("Entrez un nombre : "));
    let somme = 0;
    for (let i = 1; i <= nombre; i++) {
        if (i % 2 === 0) {
        somme += i;
        }
    }
    console.log("La somme des nombres pairs inférieurs ou égal à", nombre, "est", somme);
}
main();