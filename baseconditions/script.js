var x = 7, y = 14;

var vrai = x < y; // ici le js va analyser 7 inferieur à 14 et va normalement retourner true
var faux = 14 <= 7; // ici le js va analyser 14 inferieur ou égal à 7 et va retourner false

var egalval = 4 == "4"; //on va tester si 4 est égal en valeur à la chaine de caractere 4. Le js devrait renvoyer true

/*Ci-dessous on stocke 4 égal en valeur et en type a la string "4". Le js devrait stocké le booléan false
car le js va comparé le nombre 4 avec la string "4" en valeur et en type. Les types sont différent donc ce sera false.
*/
var egalvaltype = 4 === "4";

/*On peut également comparer les différences ici le js va comparé si le nombre 4 est bien différent en valeur de la string
"4" comme ce n'est pas le cas le js va renvoyer false*/
var difval = 4 != "4";

//si on fait pareil sur le type le js renvoit true car le chiffre 4 est bien différent en type de la string "4"
var difvaltype = 4 !== "4";

alert("vrai stocke : " + vrai +
"\nfaux stocke : " + faux +
"\negalval stocke :" + egalval +
"\negalvaltype stocke :" + egalvaltype +
"\ndifval stocke : " + difval +
"\ndifvaltype stocke :" + difvaltype);
