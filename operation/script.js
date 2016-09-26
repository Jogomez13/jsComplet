var x = 5, y = 10, z = -2;

x = x +1; // x est égale à 5 + 1 soit 6
x = x - 2; // x est égale à 6 - 2 soit 4

y = y * 2; // y est égale à 10x2 soit 20

var mult = x * y; // la derniere valeur connu de x est 4 et celle de y est 20 donc 4x20 = 80

var divi= y / z; // 20 divisé par -2 = -10

/*On va calculer le modulo, cela représente le reste de la division entiere d'un nombre par un autre
Par exemple si on divise 13 par 3, le résultat est 4 et il reste 1. 1 est donc le modulo. 4x3=12 +1=13
*/

var modulo = 13 % 3;

// Pour afficher les résultats on crée une alerte

alert("Variable mult :" + mult +
"\nVariable divi :" + divi +
"\nVariable modulo :" + modulo);

/*Les priorités de calcul : ce sont les memes qu'en maths. Les parentheses sont prioritaire sur les opérations.
Ensuite viennent la multiplication, la division et le modulo et finalement l'addition et la soustraction qui
ne sont pas prioritaire
*/
var a = 5, b = 10, c = -2;
var priorite = a + b / ( 4 + c) % 3;

alert(priorite);

/* On commence par calculer ce qui est entre parenthese soit 4+c donc 4-2=2
Ensuite la division b / 2 soit 10/2 donc 5
Apres 5%3, 5 est une fois dans 3 et on a 2 en reste. Car 5 = 3x1 +2
Et on ajoute a à 2 donc 5+2 = 7
*/

// Pour simplifier la syntaxe

a +=2; // meme chose que a = a + 2;
a -=3; // meme chose que a = a - 3;

b *= x; // b = b * a;
b /= 2; // b = b / 2;

b %= a; // b = b % a;
