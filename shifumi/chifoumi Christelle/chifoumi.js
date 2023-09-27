// let rock = document.getElementById('rock');
// let paper = document.getElementById('paper');
// let scissors = document.getElementById('scissors');
// let items = ['rock', 'paper', 'scissors'];
// function getRandomInt(max) {
//   return Math.floor(Math.random() * (max+1));
// }
// let computerChoice = getRandomInt(items.length);
// console.log(items[computerChoice]);


// Récupérer tous les éléments nécessaires :

let message = document.getElementById('message');
let nextBtn = document.getElementById('next');

// les boutons du joueurs :
//ByClassName récupère un NodeList mais on veut récupérer les valeurs sous forme
//de tableau = [], on utilise donc le spreadOperator ...
let btnJoueur = [...document.getElementsByClassName('btn-joueur')];

//les 3 boutons du choix ordi
let opierreBtn = document.getElementById('opierre');
let ofeuilleBtn = document.getElementById('ofeuille');
let ociseauxBtn = document.getElementById('ociseaux');

let scoreJoueur = document.getElementById('score-joueur');
let scoreOrdinateur = document.getElementById('score-ordinateur');

let resetBtn = document.getElementById('reset');

//on veut récupérer la div sauf que event a une valeur différente si on 
// clique sur <p> ou <img> ou <div> donc closest()
//La méthode closest() traverse l'élément courant et ses parents (en direction de
// la racine) jusqu'à trouver un nœud qui correspond aux sélecteurs exprimés par 
//la chaîne de caractères passée en argument.Elle renverra l'élément ou l'ancêtre
// le plus proche qui correspond.Si aucun élément ne correspond, la méthode renvoie null.
const jouerManche = (e) => {
  // console.log(e.target);//renvoie 3 éléments selon où on clique
  let choix = e.target.closest('.btn-joueur');
  console.log(e.target)
  //on désactive l'event des boutons et on change des class pour "désactiver" les btn
  btnJoueur.forEach(btn => {
    btn.classList.add('desactivated');
    btn.removeEventListener('click', jouerManche);
  })

  choix.classList.remove('desactivated');
  choix.classList.add('active');

  //on récupère la valeur du choix cliqué
  let choixJoueur = choix.id;

  //on récupère le choix aléatoire de l'ordi : fonction qui va générée le choix
  let choixOrdi = faireChoixOridnateur();

  verifierGagnant(choixJoueur, choixOrdi);
  nextBtn.style.display = "block";
}

//on déclare des variables pour que quelle que soit l'écriture, la valeur soit récupérée
const PIERRE = "pierre";
const FEUILLE = "feuille";
const CISEAUX = "ciseaux";

const faireChoixOridnateur = () => {
  //0=pierre ; 1=feuille; 2=ciseaux
  let nbAleatoire = Math.floor(Math.random() * 3);

  switch (nbAleatoire) {
    case 0:
      opierreBtn.classList.add('active');
      return PIERRE;
      break;
    case 1:
      ofeuilleBtn.classList.add('active');
      return FEUILLE;
      break;
    default:
      ociseauxBtn.classList.add('active');
      return CISEAUX;
      break;
  }
};

const verifierGagnant = (choixJoueur, choixOrdi) => {

  if (choixJoueur === choixOrdi) {
    message.textContent = "Egalité";
    return
  }

  if (choixJoueur == PIERRE) {
    if (choixOrdi == FEUILLE) {
      return victoireOrdinateur();
    }
    else if (choixOrdi == CISEAUX) {
      return victoireJoueur();
    }
  }

  if (choixJoueur == FEUILLE) {
    if (choixOrdi == CISEAUX) {
      return victoireOrdinateur();
    }
    else if (choixOrdi == PIERRE) {
      return victoireJoueur();
    }
  }

  if (choixJoueur == CISEAUX) {
    if (choixOrdi == PIERRE) {
      return victoireOrdinateur();
    }
    else if (choixOrdi == FEUILLE) {
      return victoireJoueur();
    }
  }

};

const victoireOrdinateur = () => {
  message.textContent = "L'ordinateur gagne ...";
  scoreOrdinateur.textContent++;
};

const victoireJoueur = () => {
  message.textContent = "Vous avez gagné !!";
  scoreJoueur.textContent++;
};

const preparerNouvelleManche = () => {
  btnJoueur.forEach(btn => {
    btn.classList.remove('desactivated');
    btn.classList.remove('active');

    btn.addEventListener('click', jouerManche);
  });
  nextBtn.style.display = "none";
  opierreBtn.classList.remove('active');
  ofeuilleBtn.classList.remove('active');
  ociseauxBtn.classList.remove('active');

  message.textContent = "A vous de jouer !";
  
};

nextBtn.addEventListener('click', preparerNouvelleManche);

btnJoueur.forEach(btn => btn.addEventListener('click', jouerManche));

resetBtn.addEventListener('click', () => {
  scoreJoueur.textContent = 0;
  scoreOrdinateur.textContent = 0;
  preparerNouvelleManche();
})