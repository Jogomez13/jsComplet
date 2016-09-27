//nous allons voir la méthode push
var prenoms = ['Jonathan','Sarah','Henri','Alex'], p ='';

/*la méthode push va nous permettre d'ajouter des éléments en fin de tableau et qui va également retourner la nouvelle
taille du tableau
On va faire les 2 opérations d'un coup on va utiliser la méthode push et on va récuperer les infos qu'elle va renvoyer
dans une variable taille*/
var taille = prenoms.push('Leila','Leia');

//on affiche le nouveau tableau

for(var i= 0; i < prenoms.length; i++){
  p+= 'Prenom numero' + (i+1) + ' : ' + prenoms[i] + '\n';
}

alert('Le tableau contient ' + taille + ' éléments \n\n' + p);

/* Nous allons maintenant voir la méthode pop qui va permettre de supprimer le dernier élément d'un tableau et
qui ne va donc pas avoir besoin d'argument*/

var suppr = prenoms.pop();//je vais donc supprimer Leia
alert(p+ '\n\n Je supprime  ' + suppr + '  du tableau');


/*Nous allons maintenant voir comment ajouter et supprimer des éléments cette fois ci plus en fin de tableau mais
en début de tableau. Pour cela on va utiliser unshift qui va comme push retourner la nouvelle taille du tableau.
Tandis que shift comme pop va retourner la valeur supprimé sous forme de string. */

//unshift va ajouter Milan et Anakin en début de tableau.
var taille1 = prenoms.unshift('Milan','Anakin');
for(var i= 0; i < prenoms.length; i++){
  p+= 'Prenom numero ' + (i+1) + ' : ' + prenoms[i] + '\n';
}

alert('notre tableau contient ' + taille1 + ' prénoms \n\n ' + p);

//shift
var prenoms1 = ['Jonathan','Sarah','Henri','Alex'], p1 = '';
for(var i= 0; i < prenoms1.length; i++){
  p1+= 'Prenom numero ' + (i+1) + ' : ' + prenoms1[i] + '\n';
}
var suppr1 = prenoms1.shift();//je vais donc supprimer Jonathan
alert('nouveau tableau :  \n '   + p1 + ' \n\n  Prénom supprimé : ' + suppr1);

//La méthode splice pour ajouter ou supprimé des éléments choisis dans un tableau

var noms = ['Gomez','Dray','Gomis','Vainqueur'], n = '';

noms.splice(1,0,'Thauvin','Diarra');
/*Je met 1 entre parenthese car je vais ajouter les noms Thauvin et Diarra juste avant l'indice 1. Ensuite on précise
le nombre d'éléments que l'on veut supprimé soit 0. Ensuite j'entre les noms que je veux ajouter.*/
for(var i= 0; i < noms.length; i++){
  n+= 'Nom numero ' + (i+1) + ' : ' + noms[i] + '\n';
}
//Nous allons avoir un nouveau tableau avec Thauvin et Diarra
alert('Nouveau tableau : \n\n' + n);

/*Nous allons voir maintenant comment classer les éléments dans un tableau avec la méthode sort, cette méthode va
nous permettre de trier les valeurs d'un tableau selon l'odre alphabetique de leurs valeurs. Attention à la casse c'est a
dire à l'utilisation de majuscule et de miniscule. Les valeurs commençant par des majuscule vont etre classé avant
celles qui commencent par une miniscule*/

var joueurs = ['Pele','Fanni','fanni','pele'], j='';

joueurs.sort();
for(var i= 0; i < joueurs.length; i++){
  j+= 'Joueur numero ' + (i+1) + ' : ' + joueurs[i] + '\n';
}
alert('Nouveau tableau : \n\n' + j);

//Pour inverser l'odre il suffit d'utiliser reverse, exemple : joueurs.sort(); puis joueurs.reverse();

/*Methode suivant : join. Cela va retourner les différentes valeurs d'un tableau sous forme de chaine de caractere.
On va pouvoir choisir le type de séparateur des éléments de notre tableau*/

var chaine = joueurs.join('-')
// je donne en parametre le séparateur choisi
alert('Notre tableau : \n' + j +
'\n\n La chaine renvoyée par join : ' + chaine);

/*La méthode slice va nous permettre de créer un nouveau tableau en extrayant les éléments du tableau de base.
Cette méthode va avoir besoin de 2 parametres une position de départ et une position de fin pour couper*/
var joueurs2 = ['Hubocan','Fanni','Gomis','Njie'], j2='';
var attaquant = joueurs2.slice(0,2)
//je vais extraire les deux attaquants Gomis et Njie
for(var i= 0; i < joueurs2.length; i++){
  j2+= 'Joueur numero ' + (i+1) + ' : ' + joueurs2[i] + '\n';
}
alert('Notre tableau de base: \n\n' + joueurs2 +
'\n\n Le tableau crée par slice(): ' + attaquant);

/* La méthode concat qui va nous permettre de fusionner des tableaux pour en créer un nouveau. Cette méthode va prendre
comme argument les tableaux que l'on souhaite fusionner*/

var europe = ['France','Espagne'];
var afrique = ['Mali','Senegal','Algerie'];

var ea = europe.concat(afrique);
var ae = afrique.concat(europe);
//on précise en argument afrique dans le premier cas et europe dans le 2eme puisqu'on veut fusionner les tableaux

alert('valeurs du tableau europe : ' + europe +
'\n valeurs du talbeau afrique : ' + afrique +
'\n valeurs du talbeau ea : ' + ea +
'\n valeurs du talbeau ae : ' + ae);
