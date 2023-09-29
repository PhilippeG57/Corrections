/*

Exercice : Créez une classe "Sortilege"

Créez une classe Sortilege qui représente un sortilège magique du monde de Harry Potter.

Chaque sortilège doit avoir les propriétés suivantes :
-nom : Le nom du sortilège.
-niveau : Le niveau de difficulté du sortilège 
(par exemple, "Débutant", "Intermédiaire", "Avancé").
-effet : La description de l'effet du sortilège.

Ensuite, créez quelques instances de la classe Sortilege pour 
représenter différents sorts magiques de Harry Potter. 
Par exemple, vous pouvez créer un sortilège "Expelliarmus" avec un niveau "Intermédiaire" 
et un effet "Désarme l'adversaire".

*/

class Sortilege{
    constructor(nom, niveau, effet){
        this.nom = nom;
        this.niveau = niveau;
        this.effet = effet;
    }

    afficherDetails(){
        console.log(`Nom : ${this.nom}`);
        console.log(`Niveau : ${this.niveau}`);
        console.log(`Effet : ${this.effet}`);
    }
}


let sortilege1 = new Sortilege("Expelliarmus", "Intermédiaire", "Désarme l'adversaire");
let sortilege2 = new Sortilege("Avada kedavra", "Expert", "Tue l'adversaire");

sortilege2.afficherDetails()
