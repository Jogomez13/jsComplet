//on déclare une variable primitive
var primitive = "Je suis une valeur primitive";

// la variable va contenir un objet avec des proprietes
var moi = {
  prenom : "Jonathan",//ceci est une propriété
  nom : "Gomez",//ceci est une propriété
  age : 24,//ceci est une propriété

/*identité est une propriété qui peut devenir une méthode car cette propriété ne stocke pas une valeur simple mais
une fonction*/
  identité : function(){
    return 'Prénom : ' + this.prenom +//on recupere mon prenom grâce à this
          '\nNom : ' + this.nom +// on recupere mon Nom
          '\nAge :' + this.age;//on recupere mon age
  }
}

alert(moi.identité());//on affiche la
