//on déclare la fonction
function multiplication(x,y) {
  alert(x*y);
}

//on appelle la fonction
multiplication(5,10);
multiplication(-5,1444);

/*Les fonctions n'ont pas obligatoirement besoin de parametres mais les parentheses sont obligatoire
Pour savoir si notre fonction a besoin de parametres posez-vous la question :
De quoi ma fonction a-t-elle besoin pour fonctionner ?

Si notre fonction utilise une partie variable dans son code, c'est a dire des nombres à multiplier ou un message à
afficher etc... Alors elle aura certainement besoin de parametres. On parle de parametres lorsque l'on crée la fonction
car un parametre n'est qu'un "témoin". Ici par exemple x et y sont des parametres.

Lorsqu'on passe ensuite de vrais valeurs à notre fonction on parle d'argument. Ici par exemple 5 et 10.
*/

//autre syntaxe
function multipli(a,b){
  return a * b;
  //tout ce qui est après le return sera ignoré car il met fin a l'exécution d'une fonction
}

var resultat1 = multipli(6,7);
var resultat2 = multipli(-48,2);

resultat1 += 2;
alert(resultat1);
