/*
Réalisez un programme en JavaScript qui demande à l'utilisateur un mot de passe.
Contrôlez la force du mot passe.
Créez votre propre algorithme qui déterminera si le mot de passe saisi est sécurisé ou pas.
Nous avons quatre cas possibles:
-Très sécurisé
-Sécurisé
-Moyen
-Dangereux

Verifier si présence de Majuscule, minuscule, chiffre et caractère spécial
Donc la force du mot de passe ira de 0 à 4
*/
function forceMdp(){
    let regexMaj = new RegExp("[A-Z]");
    let regexMin = new RegExp("[a-z]");
    let regexChiffre = new RegExp("[0-9]");
    let regexSpecial = new RegExp("\\W");
    let message = document.getElementById("message");
    let mdp = document.getElementById("mdp").value;
    let compteurForce = 0;

    /* Ajouter au compteur selon les rexeg validées */
    if(regexMaj.test(mdp)){
        compteurForce++;
    }
    if(regexMin.test(mdp)){
        compteurForce++;
    }
    if(regexChiffre.test(mdp)){
        compteurForce++;
    }
    if(regexSpecial.test(mdp)){
        compteurForce++;
    }

    /* Verifier tous les cas des valeurs que peut prendre mon compteur */
    switch(compteurForce){
        case 0:
            message.innerText="Dangereux !";
            message.style.color="red";
        break;
        case 1:
            message.innerText="Dangereux !";
            message.style.color="red";
        break;
        case 2:
            message.innerText="Moyen !";
            message.style.color="orange";
        break;
        case 3:
            message.innerText="Sécurisé !";
            message.style.color="lightgreen";
        break;
        case 4:
            message.innerText="Très sécurisé !";
            message.style.color="green";
        break;
        default:
            message.innerText="";
    }
}