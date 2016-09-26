var heure = 18;

if (heure > 12 == true) {
  alert("il est midi passé");
}

// Voici ci-dessous une façon plus simple d'écrire la meme chose

var heure1 = 19
if (heure1 > 12) {
  alert("il est midi passé je t'ai dit");
}

// autre exemple en utilisant l'opérateur logique contraire
var heure2 = 20
if (!(heure2 < 12)) {
  alert("Il est midi passé");
}

// autre exemple
var x = 8;

/* if (x == true){
  alert("x est évaluée à true par le JS");
}
 On peut l'écrire plus simplement voir ci dessous
 */

if (x){
  alert("x est évaluée à true par le JS");
}
