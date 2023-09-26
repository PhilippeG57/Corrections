/* Méthode Omar
let chaineOriginale = prompt("Entrez votre chaîne de caractères");
let rev = chaineOriginale.split("").reverse().join("");
console.log(rev) */

/*Méthode Philippe*/

let chaineOriginale = prompt("Entrez votre chaîne de caractères");
let chaineInversee = inverserChaine(chaineOriginale);

function inverserChaine(chaine){
    let chaineRetourne = "";

    for(let i = chaine.length-1; i>=0; i--){
        chaineRetourne += chaine[i]
        /*Si ma chaine a 6 caractère, 
        ca renvoie chaine[5]+chaine[4]+chaine[3]+chaine[2]+chaine[1]+chaine[0]*/
    }

    return chaineRetourne
}

console.log("Chaine entrée : "+chaineOriginale);
console.log("Chaîne inversée : "+chaineInversee);


/* Méthode Jimmy 
function inverserChaine(chaine) {
    const tableau = chaine.split("");
    tableau.reverse("");
    return tableau.join("");
}
const chaineOriginale = prompt("Entrez une chaine de caractère");
const chaineInverse = inverserChaine(chaineOriginale);
console.log(chaineInverse);
*/