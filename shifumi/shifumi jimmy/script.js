const choixJoueurs = [
    "pierre",
    "papier",
    "ciseaux",
    "puit",
];

// Je crée tous mes scénarios où je suis gagnant
const gagnants = [
    ["pierre", "ciseaux"],
    ["ciseaux", "papier"],
    ["papier", "pierre"],
    ["puit", "pierre"],
    ["puit", "ciseaux"],
];

const choixJoueur = prompt("Choisissez votre coup (pierre, papier,ciseaux ou puit) :");

const choixOrdinateur = choixJoueurs[Math.floor(Math.random() * choixJoueurs.length)];

document.write("Vous avez choisi : "+choixJoueur+"<br>");
document.write("L'ordinateur a choisi : "+choixOrdinateur+"<br>");

// J'initialise gagnant à FALSE
let gagnant = false;

for (let i = 0; i < gagnants.length; i++) {
    const gagnantPossible = gagnants[i];
    // Je fais une boucle qui vérifie si on tombe sur un de mes scénarios gagnants
    if (gagnantPossible[0] === choixJoueur && gagnantPossible[1] === choixOrdinateur) {
        gagnant = true;
        break; // Sort de la boucle dès qu'un gagnant est trouvé
    }
}

if (gagnant) {
    document.write("Vous avez gagné !");
} else if (choixJoueur === choixOrdinateur) {
    document.write("Match nul !");
} else {
    document.write("Vous avez perdu !");
}