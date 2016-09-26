// on va retourner bonjour si l'heure est inferieur a 18h

var heure = 15; // on stocke la valeur 15 donc le js retourne true et alerte bonjour

//exemple avec if pour 15h
if(heure <=18 == true){
  alert("Bonjour")
}

//exemple avec if pour 21h
var heure1 = 21;// on stocke la valeur 21 donc le js retourne false et alerte bonsoir
if(heure1 <=18 == false){
  alert("Bonsoir")
}

//on va utiliser else. heure2 est inférieur à 18 donc le js retourne bonjour
var heure2 = 16;

if (heure2 <= 18 == true){
  alert("Bonjour")
}else{
  alert("Bonsoir");
}

/* ci-dessous utilisation de if, else if et else. On fini toujours par else.
Imaginons qu'on demande aux visiteurs de rentrer l'heure qu'il souhaite. On peut flirter le type de données reçu
*/
var heure3 = 9; // vu qu'il est 9h cela va retourner "c'est le matin",le visiteur a rentrer les données de la bonne façon

if (typeof(heure3) == "number" == true) {
  if (heure3 < 12 == true) {
  alert("c'est le matin");
}
else if (heure3 == 12 == true) {
  alert("il est midi");
}
else if (heure3 <= 18 == true) {
  alert("c'est l'après midi");
}
else {
  alert("c'est le soir");
}
}
else {
  alert("mauvais type de valeur");
}

//si le visiteur ne rentre pas l'heure en chiffre, on reçoit le message "mauvais type de valeur"

var heure4 = "cinq";

if(typeof(heure4)== "number" == true) {
  if (heure4 <12 == true) {
  alert("c'est le matin");
}
else if (heure4 == 12 == true) {
  alert("il est midi");
}
else if (heure4 <= 18 == true) {
  alert("c'est l'après midi");
}
else{
  alert("c'est le soir");
}
}
else{
  alert("mauvais type de valeur");
}
