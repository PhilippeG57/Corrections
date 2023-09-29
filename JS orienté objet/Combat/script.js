/* 
-créer une classe "Combattant"
-créer un constructeur avec les parametres nom, pointsDevie et force pour cette classe
-créer une fonction attaquer, subirDegats et estVivant pour cette classe

-Créer une fonction pour simuler un combat, avec le personnage1 et le personnage2 en paramètres
(tant que les deux ont des points de vie, faire attaquer un après l'autre)

-Créer deux instances : Musk et Zuckerberg
(en attribuant le nom, les points de vie et la force voulue pour chacun)

-Démarrer le combat (en faisant appel a la fonction combat, avec Musk et 
Zuckerberg en paramètres)
*/

class Combattant {
    constructor(nom, pointsDeVie, force) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.force = force;
    }

    attaquer(cible){
        let forceAleatoire = Math.floor(Math.random() * this.force);
        console.log(`${this.nom} attaque ${cible.nom} avec une force de ${forceAleatoire}.`);
        cible.subirDegats(forceAleatoire);
        console.log(`Il reste ${cible.pointsDeVie} points de vie à ${cible.nom}.`);
    }

    subirDegats(degats){
        this.pointsDeVie -= degats;
        console.log(`${this.nom} subit ${degats} points de dégâts.`);
    }

    estVivant(){
        return this.pointsDeVie > 0;
    }
}

// Fonction pour simuler un combat
function combat(personnage1, personnage2){
    console.log(`Le combat commence : ${personnage1.nom} vs ${personnage2.nom}`)

    while(personnage1.estVivant() && personnage2.estVivant()){
        // Personnage 1 attaque Personnage 2
        personnage1.attaquer(personnage2);

        // Vérifier si Personnage 2 est toujours vivant
        if(!personnage2.estVivant()){
            console.log(`${personnage1.nom} remporte le combat !`);
            break;
        }

        // Personnage 2 attaque Personnage 1
        personnage2.attaquer(personnage1);

        // Vérifier si Personnage 1 est toujours vivant
        if(!personnage1.estVivant()){
            console.log(`${personnage2.nom} remporte le combat !`);
            break;
        }
    }
}

// Créer les instances Musk et Zuckerberg
const Musk = new Combattant("Musk", 100, 50);
const Zuckerberg = new Combattant("Zuckerberg", 100, 50);
const Mario = new Combattant("Mario", 100, 50);
const ChuckNorris = new Combattant("ChuckNorris", 10000000, 5000000);

// On met les combattants dans un array
let tableauCombattants=[Musk, Zuckerberg, Mario, ChuckNorris];

//On choisit aléatoirement le combattant 1 et le combattant 2 (en les récuperant dans le tableau)
let combattant1 = tableauCombattants[Math.floor(Math.random() * tableauCombattants.length)];
let combattant2 = tableauCombattants[Math.floor(Math.random() * tableauCombattants.length)];

combat(combattant1, combattant2);
