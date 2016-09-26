//utilisation de la boucle while, en français = tan que
/*var x = 0;

while(x < 10){
  //on sort de la boucle à la valeur 10
  alert("x contient la valeur :" + x);
  x++;
  //x++ est équivalent à x+1, c'est l'incrémentation.
  //Pour enlever 1 à la valeur d'une variable il suffit d'écrire : x--
}

// utilisation de la bouche do while
*/
var y = 0;

//meme si la valeur de y n'est pas supérieur à 10 on va quand meme effectué un passage dans la boucle while
do{
  alert('y vaut :' + y);
  y--;
}
while (y > 10);

// mainteant la boucle for

var i = "";

for(i=0; i < 10; i++){
/*on initialise notre variable i=0 ensuite i<10 correspond a notre test. Tant que i est inférieur à 10 on alerte
"i contient la valeur" + la valeur de i à ce moment. i vaut donc 0, puis 1, 2,3,4,5,6,7,8,9 et une fois a la valeur 10
on sort de la boucle
*/
  alert('i contient la valeur :' + i);
}
