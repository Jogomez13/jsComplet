var primitive = "Je suis une variable primitive";
var type_prim= typeof(primitive);// on va vérifier le type de la variable primitive

var chaine = new String("Je suis un objet");//voila comment on crée un objet
var type_chai = typeof(chaine);// on va vérifier le type de la variable chaine

alert('Type de ma variable primitive :' + type_prim +
'\n Type de chaine :' + type_chai);

/*on va utiliser la propriété length et la méthode toUpperCase pour prouver que JS traite les valeurs primitives
comme des objets.
*/
var primitive2 = "Je suis une variable primitive moi aussi";
var longueur_prim = primitive2.length;
var maj_prim = primitive2.toUpperCase();

var chaine2 = new String("Je suis un objet aussi");
var longueur_chaine = chaine2.length;
var maj_chaine = chaine2.toUpperCase();
alert('Longueur de primitive :' + longueur_prim +
'\n Primitive en Majuscule :' + maj_prim +
'\n Longueur de chaine :' + longueur_chaine +
'\n Chaine en Majuscule :' + maj_chaine);
