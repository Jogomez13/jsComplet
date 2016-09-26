//on va utiliser 5 propriétés de l'objet number
var min = Number.MIN_VALUE;
var max = Number.MAX_VALUE;
var infneg = Number.NEGATIVE_INFINITY;//Pour infini du coté négatif
var infpos =Number.POSITIVE_INFINITY;
var notnumber = Number.NaN;//cela va représenter une valeur qui n'est pas un nombre

alert('Min : ' + min +
'\nMax : ' + max +
'\n Infini négatif : ' + infneg +
'\n Infini positif : ' + infpos +
'\n Pas un nombre : ' + notnumber);

// on va maintenant voir 5 méthodes de l'objet number

//toString
var x = 10;

var t = x.toString();//on va stocker x dans t et le transformer en type string

alert('Type x : ' + typeof(x) +
'\nType t : ' + typeof(t));

/* toFixed
cette methode va changer le nombre de décimal d'un nombre et va le transformer en chaine de caractere.*/

var y = 14.1245645852;

var d = y.toFixed(3);//on va vouloir stocké la valeur 14.124 on veut stoké 3 décimale.

alert('valeur de d : ' + d +
'\ntype de d : ' + typeof(d));

/* toPrecision
cette méthode va nous permettre de définir la taille du nombre qui doit etre renvoyé et qui va le retouner sous forme
de chaine de caractere*/

var z = 12.1423698;

var q = z.toPrecision(4)// on va vouloir affiché les 4 premiers chiffre est donc 12.14
alert('valeur de q : ' + q +
'\ntype de q : ' + typeof(q));

/* toExponential
cette méthode va nous permettre de choisir le nombre de décimal d'un nombre et qui va le retourner sous forme de chaine
de caractere en utilisant une notation sous forme de nombre exponentiel*/

var a = 12.1423698;

var b = a.toExponential(2)// on va vouloir affiché 2 décimales
alert('valeur de b : ' + b +
'\ntype de b : ' + typeof(b));

//////////////////////// présentation des méthodes globales ///////////////////////

// on les voit mais on les expliquera plutard dans un autre dossier
var t = true;
var f = false;
var d1 = new Date();

alert('True : ' + Number(t) +
'\nFalse : ' + Number(f) +
'\nDate' + Number(d1));

/* parseInt et parseFloat, qui vont respectivement retourner un nombre entier et un nombre entier ou décimal a partir
d'une chaine de caractere*/

var j = "10.758977"
var int = parseInt(j);//int pour integer qui veut dire entier
var dec =  parseFloat(j);//float veut dire décimal

alert('parseInt() : ' + int + ' - ' + typeof(int) +
'\n parseFloat() : ' + dec + ' - ' + typeof(dec));
