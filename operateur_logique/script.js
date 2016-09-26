// on va utiliser l'opérateur "et"
var heure = 10;

if (heure >= 0 && heure < 12 == true) {
  //on teste si le contenu de var heure est supérieur ou égale à 0 et si il est inférieur à 12
  alert("C'est le matin")
}
else if (heure === 12 == true) {
  //on teste si heure est égale à 12
  alert("il est midi pile");
}
else if (heure > 12 && heure <= 24 == true) {
  /*on teste si le contenu de la variable heure est strictement supérieur à 12
  et si le contenu de notre variable est inférieur à 24*/
  alert("c'est l'apres midi ou le soir")
}
else{
  //si la variable ne contient pas un nombre entre 0 et 24 on alerte que la valeur n'est pas valable
  alert("La valeur entrée ne semble pas valide")
}

// on va utiliser l'opérateur "ou"
var heure1 = 26;

if (heure1 < 0 || heure1 > 24 == true) {
  // si heure1 est inférieur à 0 ou supérieur à 24, on alerte "l'heure est invalide". C'est le cas dans cet exemple.
  alert("L'heure est invalide");
}
else{
  alert("L'heure semble valide");
}

//on va utiliser l'opérateur logique contraire

var heure2 = 18;
if (!(heure2 <= 16) == true){
/*on dit qu'on veut nier le résultat envoyé par javascript,il renvoit false puisque 18 est supérieur à 16
et n'est pas inférieur ou égale à 16. On transforme donc le false en true et on aura bien true = true
et on va retourner il est plus de 16h*/
  alert("Il est plus de 16h");
}
else{
  alert("il est moins de 16h");
}
