/*
Exercice : Système de vote

Vous devez créer une fonction calculerRésultatVote qui prend en entrée un tableau d'électeurs 
et détermine le résultat d'un vote politique simple.
Chaque électeur peut voter pour l'un des deux candidats : "Candidat A" ou "Candidat B".

Votre fonction doit renvoyer le candidat gagnant ou "Match nul" s'il y a une égalité.

Le tableau d'électeurs est une liste d'objets avec les propriétés suivantes :
-nom : Le nom de l'électeur.
-vote : Le candidat pour lequel l'électeur a voté (par exemple, "Candidat A" ou "Candidat B").

BONUS : ajouter un console.log du nombre de votants et du nombre de votes blancs 
        (vide ou qui ne correspond pas à un electeur)
*/

function calculerRésultatVote(electeurs){
    // On crée deux compteurs (A et B) qu'on initialise à 0
    let candidatA = 0;
    let candidatB = 0;
    let nombreVotants = 0;
    let votesBlancs = 0;

    // On crée une boucle qui reprends tous les votants pour ajouter des points aux candidats concernés
    for(const electeur of electeurs){
        if(electeur.vote === "Ibrahim"){
            candidatA++;
        }
        if(electeur.vote === "Christopher"){
            candidatB++;
        }
        // Si le vote ne correspond ni a Christopher, ni à Ibrahim...
        if(electeur.vote !== "Christopher" && electeur.vote !== "Ibrahim"){
            votesBlancs++
        }
        // J'ajoute dans tous les cas +1 au nombre de votants à chaque tour de ma boucle
        nombreVotants++;
    }
    console.log(`Nombre de votants : ${nombreVotants}`);
    console.log(`Nombre de votes blancs : ${votesBlancs}`);
    console.log(`Nombre de voies pour Ibrahim : ${candidatA}`);
    console.log(`Nombre de voies pour Christopher : ${candidatB}`)
    // On compare les deux compteurs qui correspondent aux voies pour les candidats A et B
    if(candidatA > candidatB){
        return "Ibrahim"
    }else if(candidatB > candidatA){
        return "Christopher"
    }else{
        return "Match nul"
    }
}

let electeurs = [
    { nom: "Ibrahim", vote: "Ibrahim" },
    { nom: "Christelle", vote: "Ibrahim" },
    { nom: "JimmyB", vote: "Christopher" },
    { nom: "Khadija", vote: "Christopher" },
    { nom: "Lamine", vote: "Christopher" },
    { nom: "Sofian", vote: "Christopher" },
    { nom: "Omar", vote: "Christopher" },
    { nom: "Wilfrid", vote: "Ibrahim" },
    { nom: "Alain", vote: "Ibrahim" },
    { nom: "Corelia", vote: "Ibrahim" },
    { nom: "Christopher", vote: "Christopher" },
    { nom: "Fakih", vote: "Ibrahim" },
    { nom: "JimmyP", vote: "Christopher" },
    { nom: "Ivana", vote: "Ibrahim" },
    { nom: "Tanguy", vote: "ertertert" },
]

let resultat = calculerRésultatVote(electeurs);

// On écrit le nom du candidat gagnant
console.log(`Le gagnant est : ${resultat}`);