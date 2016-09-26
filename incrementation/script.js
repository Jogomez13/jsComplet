var x = 0, xprime = 0, alpha = 10, alphaprime = 10;

//l'incrémentation est prioritaire sur l'affection
var y = x++;
// y stocke la valeur 0 et x stocke maintenant la valeur 1
var beta = alpha--;
// beta stocke la valeur 10 et alpha stocke mtnt la valeur 9
var yprime = ++xprime;
// yprime stocke la valeur 1 et xprime aussi
var betaprime = --alphaprime;
//on commence par décrémenté donc betaprime stocke 9 et alphaprime également.

alert('y :' + y +
'\nx :' + x +
'\nbeta : ' + beta +
'\nalpha : ' + alpha +
'\nyprime : ' + yprime +
'\nxprime : ' + xprime +
'\nbetaprime :' + betaprime +
'\nalphaprime : ' + alphaprime);

//Il faut faire attention où l'on incrémente. Si on le fait avant ou après car cela peut changer tout un code
