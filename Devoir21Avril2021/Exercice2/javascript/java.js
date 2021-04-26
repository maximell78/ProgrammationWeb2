// java.js
// Programmé par : Maxime Lacroix-Lemire
// Dernière Mise À  Jour :  2021/04/25

class Voiture {
    constructor(modele, anneeConst, couleur, transmission, puissance){
        this.modele = modele;
        this.anneeConst = anneeConst;
        this.couleur = couleur;
        this.transmission = transmission;
        this.puissance = puissance;
    }
}
var voiture1 = new Voiture("Mazda", 2011, "Blanche", "Manuel", "V4");
console.log(voiture1);

class Employe {
    constructor(nom, emploi, salaire, dateEmbauche, typeHoraire,typeContrat){
        this.nom = nom;
        this.emploi = emploi;
        this.salaire = salaire;
        this.dateEmbauche = dateEmbauche;
        this.typeHoraire = typeHoraire;
        this.typeContrat = typeContrat;
        }    
}

var employe1 = new Employe("Maxime Lacroix-Lemire", "Programmeur Front End", "50 000$/année", "10/04/2021", "Temps plein", "1 an");
console.log(employe1);

class Stylo{
    constructor(marque, couleur, taille, poids, materiaux){
        this.marque = marque;
        this.couleur = couleur;
        this.taille = taille;
        this.poids = poids;
        this.materiaux = materiaux;
    }
}

var stylo1 = new Stylo("Bic", "Bleu", "13 cm", "5.8 g", "Laiton")
console.log(stylo1);