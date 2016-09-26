var heure = 19, bon = "";

bon = (heure <= 18) ? "Bonjour" : "Bonsoir";
/*On teste si notre variable heure est inférieur ou égale à 18. Si c'est le cas on stocke dans la variable bon, la string
situé juste après le "?" et avant les ":", c'est a dire la valeur "Bonjour". Dans le cas contraire on va stocké la valeur
après les ":" c'est à dire "Bonsoir" dans cet exemple on stocke donc ?? "Bonsoir" évidemment.
*/
alert(bon);
