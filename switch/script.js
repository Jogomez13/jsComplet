var heure = 10;

switch (heure) {
  //on switch sur notre variable heure
  case 8 :
  /* on crée des cas. Tout d'abord le cas 8, si la variable heure contient la valeur 8, on entre dans le cas 8  et l'alerte
  contenu dans le cas 8 va etre exécuté et ainsi de suite
  */
    alert("il est 8h");
    break;
    /*Il faut absolument créer le break sauf dans le default. Si on oublie le break le switch va lire et exécuter l'alerte
    contenu dans chaque case*/
    case 9 :
      alert("il est 9h");
      break;
      case 10 :
        alert("il est 10h");
        // ci dessus l'alerte s'execute car la variable heure a une valeur de 10.
        break;
        case 11 :
          alert("il est 11h");
          break;    case 12 :
              alert("il est 12h");
              break;
              default:
              alert("rien à afficher pour cette valeur");
}
