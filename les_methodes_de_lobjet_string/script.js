var texte = "LE JAVASCRIPT c'est dur lol";

// Méthode miniscule et majuscule
var texteMin = texte.toLowerCase(); //ceci met cette phrase en miniscule
var texteMaj = texte.toUpperCase(); //cela met cette phrase en majuscule

alert('Texte de base :' + texte +
'\n texte en miniscule :' + texteMin +
'\n texte en majuscule :' + texteMaj);

var pos1 = texte.charAt(1);//pour récupérer le 2ème caractere de la phrase. Le premier étant indexé à 0.
var pos3 = texte.charAt(3);// pour récupérer le 4ème caractere.
var pos10 = texte.charAt(10);// pour récup le 10ème


//Méthode charAt
alert('Position 1 :' + pos1 +
'\n position 3 : ' + pos3 +
'\n position 10 :' + pos10);

//Méthode index of et last index of
var texte1 = "Bonjour je m'appelle Jonathan"

var premiere = texte1.indexOf('p');//pour trouver la premiere "p" dans la phrase
var derniere = texte1.lastIndexOf('p');// pour trouver le dernier "p"
var sequence = texte1.indexOf('le');// pour trouver le premier "le"

alert('premier "p" trouvé en position :' + premiere +
'\n dernier "p" trouvé en position:' + derniere +
'\n premier "le" trouvé en position :' + sequence);

//ceci est sensible a la cass si on cherche un J majuscule il faudra le mentionné en majuscule

// on va remplacer du texte avec remplace

var texte3 = " J'aime le football"

alert(texte3.replace("football","tennis"));// je vais remplacer football par tennis

// maintenant on va voir slice

var texte4 = "Je suis supporter de l'Olympique de Marseille"
alert(texte4.slice(23,45)); // je vais extraire que Olympique de Marseille grace au position des lettres entre parenthese


// et enfin nous allons voir la méthode trime. Cette méthode va supprimer les espaces superflus en début et à la fin.

var texte5 = "                        Jonathan Gomez                       ";

var texteNettoye = texte5.trim();

alert('texte avant nettoyage :' + texte5 +
'\n texte nettoyé : ' + texteNettoye);
