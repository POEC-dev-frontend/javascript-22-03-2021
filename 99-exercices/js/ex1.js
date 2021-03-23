/*
 * Déclarer une variable 'nombre' qui contiendra un nombre entier, et lui affecter la valeur 13. 
 */
var nombre = 13;

/*
* Déclarer une variable nombre2 qui, contiendra le nombre flottant/réel/virgule:  15,5
*/
let nombre2 = 15.5;

/* Déclarer une variable 'b', qui prendra la valeur : true */
let b = true;

/* Déclarer une variable 'langage', qui prendra la valeur : 'Javascript' */
let langage = 'Javascript';

/*
* Déclarer une variable nombre3 qui ne pourra plus changer de valeur après lui avoir
* donner la valeur 60.
*/
const NOMBRE3 = 60;


/*
* Déclarer deux variables qui s'appellent nb et nb2 qui auront pour valeur 7 et 6
*/
let nb = 7, nb2 = 6;


/* afficher le message 'hello world' si nombre est supérieur ou égal à 4 */
if (nombre >= 4) {
    console.log("Hello World !");
}

/*
* Réaliser un switch qui prend nb2 et qui affiche: 
*        - "a" si nb2 est égal à 3 
*        - "b" si nb2 est égal à 5 
*        - "c" si nb2 est égal à 7 
*        - "d" si nb2 est égal à autre chose.
*/
switch(nb2) {
    // if (nb2 === 3) {}
    case 3:
        console.log("a");
        break;
    case 5:
        console.log("b");
        break;
    case 7:
        console.log("c");
        break;
    default:
        console.log("d");
}

//  demander à l'utilisateur de saisir un 1er nombre
//  demander à l'utilisateur de saisir un 2ème nombre
//  additionner les nombres et afficher le résultat
nombre = prompt('saisir un 1er nombre: ');
nombre = Number(nombre);
nombre2 = prompt('saisir un 2ème nombre: ');
nombre2 = +nombre2;

let resultat = nombre + nombre2;
console.log(nombre + " + " + nombre2 + " = " + resultat);

// TP: Convertir des pouces en centimetres
//  demander à l'utilisateur de saisir des pouces
//  1" (1 pouce) = 2,54 centimètres 
//  https://www.pouce-cm.fr/
let pouces  = +prompt('Saisir des pouces: ');
resultat = pouces * 2.54;

console.log(pouces + "\" = " + resultat + "cm");


// TP: Convertir des heures en minutes
//  demander à l'utilisateur de saisir des heures
//  demander à l'utilisateur de saisir des minutes
//  convertir les heures & minutes en minutes
let heures = +prompt('saisir des heures: ');
let minutes = +prompt('saisir des minutes: ');
resultat = heures * 60 + minutes;
console.log(heures + "h" + minutes + " = " + resultat + " minutes");


// TP: Convertir des degres Celcius en degrès Fahrenheit
//  https://www.metric-conversions.org/fr/temperature/fahrenheit-en-celsius.htm
//  demander à l'utilisateur de saisir des degres celcius
//  convertir les °C en °F
let celcius  = +prompt('Saisir des °C: ');
fahrenheit = celcius * 1.8 + 32;

console.log(celcius + "°C = " + fahrenheit + "°F ");

//  TP
//  Afficher un message à l'utilisateur pour savoir s'il souhaite
//      1- Convertir des pouces en centimètres
//      2- Convertir des centimètres en pouces 
//      3- Quitter
//  Si l'utilisateur saisit 1:
//       * Demander a l'utilisateur de saisir un nombre: "Nombre de pouces: "
//       * on convertit
//       * on affiche le resultat
//  Si l'utilisateur saisit 2:
//       * Demander a l'utilisateur de saisir un nombre: "Nombre de centimètre: "
//       * on convertit
//       * on affiche le resultat
// Sinon on affiche:
//       *Je n'ai pas compris
choix = prompt('Voici le menu:\n' +
'\t1- Convertir des pouces en centimètres\n' +
'\t2- Convertir des centimètres en pouces\n' + 
'\t3- Quitter\n');

switch(choix) {
    case "1":
        let pouces  = +prompt('Saisir des pouces: ');
        resultat = pouces * 2.54;
        console.log(pouces + "\" = " + resultat + "cm");
        break;
    case "2":
        let cm  = +prompt('Saisir des centimetres: ');
        resultat = cm / 2.54;
        console.log(cm + "cm = " + resultat + "\"");
        break;
    default:
        console.log("Je n'ai pas compris");
        break;
}

// Bonus:
// En partant d'une heure et de minutes données
// ex: heure = 2 et minutes = 45
// Si on ajoute 30 minutes, au minutes, on obtient 3h15

heures = 2;
minutes = 45;
nombre = +prompt('Combien de minutes voulez-vous ajouter ?');

resultat = nombre + minutes; // 30 + 45 = 75 / 60 = 1 et il reste 15
let new_heures = heures + Math.floor(resultat / 60) // 2 + 1 = 3
let new_minutes = (resultat % 60) // 120 % 60 = 15

console.log(heures + "h" + minutes + " + " + nombre + " minutes = " + new_heures + "h" + new_minutes + "minutes");
console.log(`${heures}h${minutes} + ${nombre}minutes = =${new_heures}h${new_minutes}minutes`);