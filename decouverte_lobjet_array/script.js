/* array = tableau
On va créer un tableau prénom.*/

// on crée une variable prénom et on stocke 4 valeurs
var prenoms = ['Jonathan','Alex','Leila','Sarah','Henri']
//Jonathan est associé à la clé 0, Alex 1, Leila 2, Sarah 3, Henri 4(non ce n'est pas le roi lol)

//j'affiche sur la page le prénom Alex grace à la clé 1.
document.write(prenoms[1]);

//pour savoir combien d'élément il y a dans notre tableau. On va utiliser la propriété length

alert('notre tableau contient : ' + prenoms.length + ' éléments ');

// On va rajouter 2 éléments en fin de tableau

prenoms[prenoms.length] = 'Milan';
prenoms[prenoms.length] = 'Leia';

alert('on a ajouté ' + prenoms[5] + ' et' + prenoms[6]);

//pour parcourir un tableau et afficher toutes ses valeurs on utilise une boucle for
var p = '';
//on initialise notre boucle for sur les indices de notre tableau. i correspond aux indices de notre tableau
for(var i= 0; i < prenoms.length; i++){
  p+= 'Prénom numéro' + (i+1) + ':' + prenoms[i] + '\n';
//on commence par initialiser i à 0 puis on sort de la boucle à i strictement inférieur à la valeur de prenoms.length
}

alert(p);

// on va créer un objet littéral. pour parcourir un objet littéral on va utiliser la boucle for in

var noms = {
  nom1 : 'Gomez',
  nom2 : 'Zerti',
  nom3 : 'Dray',
}, n = ' ';

//ci dessous clefs est un alias. On peut etre mettre ce qu'n veut comme alias
for (var clefs in noms){
  n+= clefs + ' : ' + noms[clefs] + '\n';
  //a chaque fois on va stocker dans n les noms, nom1 au premier passage, puis nom2 etc
}

alert(n);
