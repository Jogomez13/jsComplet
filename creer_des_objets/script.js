// Nous allons voir 3 manieres de procéder créer des objets en Javascript

/*METHODE 1 :
creer un objet avec le mot clef new, notons qu'il est déconseillé de creer un objet de cette façon pour des raisons
de performances du code, nous allons le voir à titre indicatif*/

//on créer un objet avec le constructeur string
var obj_string = new String("Je suis un objet");

//Nous allons faire la meme chose en utilisant cette fois ci le constructeur object
var obj_cree = new Object();

/*On se souvient que l'objet native string a des propriétés et des méthodes qui sont prete a l'emploi, pour y accéder
on utilise un point. Par exemple :  */
obj_string.length;



//Ci-dessous nous allons définir nous meme des propriétés. Par exemple nous allons créer une propriété prénom.
obj_cree.prenom = "Jonathan";//on stocke la valeur Jonathan. On lie la valeur Jonathan à la propriété prénom.
obj_cree.nom ="Gomez";
obj_cree.age = 24;

//on utilise alerte pour démontrer que Jonathan est bien lié à prénom
alert(obj_cree.prenom);

/*METHODE 2 :
creer un objet litéral c'est la manière la plus recommandé et la plus simple
*/
var moi = {
  //on définit les propriétés prénom1, nom1 et age1
  prenom1 : "Jonathan",
  nom1 : "Gomez",
  age1 : 24,

  //on peut également définir des méthodes. RAPPEL : les méthodes sont avant tout stocké dans des propriétés
  id : function(){
    return this.prenom1 + ' ' + this.nom1;
  }
};
alert(moi.id());

/* METHODE 3 :
Creer des objets à partir d'un constructeur. On utilise cette maniere la pour des gros projets dans lesquels nous
devrons créer beaucoup d'objets similaire.
PS: Il y a des constructeur native exemple : String que nous avons déjà vu pour créer des objets de type String
le constructeur number pour les objets de type number, le constructeur booléans, le constructeur array,
le constructeur regExp qui nous sert à créer des objets de type expression réguliere, le constructeur function,
le constructeur date...etc */

/*On va d'abord créer notre constructeur. Un constructeur est avant tout une fonction, dans cette fonction on va
définir des propriétés et des méthodes*/

function Identite(p,n,a){
// majuscule au nom de la fonction, p pour prénom, n pour nom et a pour age
this.prenom2 = p;
this.nom2 = n;
this.age2 = a;
//ci dessous ce sont 3 propriétés, this sert a faire référence aux objets sur lesquels on va travailler
}

//on crée un objet a partir de notre constructeur
var jonathan = new Identite("Jonathan","Gomez",24);
var sarah = new Identite("Sarah","Dray",22);

//Pour accéder aux valeurs de ... on va utiliser alerte
alert('Age de Jo :' + jonathan.age2 +
'\nAge de Sarah :' + sarah.age2);

/*Nous allons mtnt voir l'identité des objets, on accède aux objets par référence et non pas par valeur au contraire
des valeurs primitive. Ainsi on ne peut pas ni comparer ni copier un objet car cela n'a aucun sens.
Exemple ci-dessous : */

var x = 10;//variable primitive
var y = x;
y += 10;// y va stocké 20 soit 10 + 10

alert('valeur de x :' + x +
'\n valeur de y :' + y);

/*On voit ci-dessous que lorsque l'on travaille avec des valeurs primivite on peut créer "des copies" de ces variables
ici y commence par stocker le contenu de x, c'est une "copie". Puis ensuite on peut modifier cette copie sans que cela
impacte la valeur contenu dans la variable original (x). Avec les objets cela va etre completement différent, on va pas
créer de copie mais plutot une autre référence. Exemple ci dessous : */


function Identite1(p1,n1,a1){
this.prenom3 = p1;
this.nom3 = n1;
this.age3 = a1;
}

// je crée l'objet alex
var alex = new Identite1("Alex","Gomez",20);

//on créer un deuxieme objet maddy

var maddy = alex;
//si on modifie la valeur relative a la propriete prenom de maddy
maddy.prenom3 = 'eoeoeoeoeooddde';// c'est ici que ça passe j'ai mis n'importe quoi volontairement

alert('prenom de Alex :' + alex.prenom3 +
'\n prenom de maddy :' +maddy.prenom3);

/*vous allez constaté que la valeur qui était lié a la propriete prenom d'alex a été modifié également
cela nous permet de comprendre que maddy est en faite une référence qui pointe vers le meme objet. Lorsqu'on
modifie une référence on modifie toutes les références du meme objet. Il faut faire ATTENTION a ce point
*/
