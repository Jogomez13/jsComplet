var prenom = 'Jonathan', espace = ' ', nom ='Gomez';

var moi  = prenom + espace + nom; // soit Jonathan Gomez

var toi = 'Alex Gomez';

var sport = 'le football';

var loisir = "J'aime " + sport;

alert("Contenu de la variable moi : " + moi +
"\nContenu de la variable toi :" + toi +
"\nContenu de la variable loisir :" + loisir);

var x = 4 + 2 + "1"; /*4 + 2 =6 ne va pas s'additionner à "1" car c'est une chaine de caractere.
ça donne 6 et 1. 61 à l'affichage mais ce n'est pas le chiffre*/
var y = "1" + 2 + 4; // idem ça donne 124 mais pas le chiffre plutot 1 et 24 collé.
var z = 2 + "un" + 4; // ce qui nous donne 2un4

alert("Variable x : " + x + typeof(x) + // le type de ma variable x est bien une string
"\nVariable y : " + y +
"\nVariable z :" + z);
