
console.log("____ Operateur de Arithmetiques _____");

let a = "2";
let b = "3";

//  str + str = concatenation
// str + number = concatenation
// number + number = addition
c = a + b;
console.log("c: " + c);

console.log("_____ Adddition ____ ");
// Convertion d'une chaine de caractères en nombre
// let nombre = Number("2")
// let nombre = 2
let nombre = Number(a);
// let nombre2 = +"3"
// let nombre2 = 3
let nombre2 = +b;

// let resultat = 2 + 3;
// let resultat = 5;
let resultat = nombre + nombre2;
console.log("Résultat = " + resultat);

// let resultat2 = resultat + 2;

// resultat = 5 + 2;
// resultat = 7;
resultat = resultat + 2;
console.log("Résultat = " + resultat);

// resultat = resultat + 2;
// resultat = 7 + 2;
// resultat = 9;
resultat += 2;
console.log("Résultat = " + resultat);

// resultat += 1
resultat++; // /!\ resultat++2 <- n'existe pas
console.log("Résultat = " + resultat);

console.log("_____ Soustraction ____ ");

nombre = 2;
nombre2 = 3;

resultat = nombre - nombre2;
console.log("Résultat = " + resultat);

resultat = resultat - 2;
console.log("Résultat = " + resultat);

resultat -= 2;
console.log("Résultat = " + resultat);

resultat--;
console.log("Résultat = " + resultat);

console.log("_____ Multiplication ____ ");

nombre = 2;
nombre2 = 3;

resultat = nombre * nombre2;
console.log("Résultat = " + resultat);

resultat = resultat * 2;
console.log("Résultat = " + resultat);

resultat *= 2;
console.log("Résultat = " + resultat);

// resultat**; <- erreur, n'existe pas, équivaut a x1 donc inutile

console.log("_____ Puissance ____ ");

nombre = 2;
nombre2 = 3;

resultat = nombre ** nombre2; // nombre^3 : nombre x nombre x nombre
console.log("Résultat = " + resultat);

resultat = resultat ** 2;
console.log("Résultat = " + resultat);

resultat **= 2;
console.log("Résultat = " + resultat);

console.log("_____ Division ____ ");

nombre = 2;
nombre2 = 3;

resultat = nombre / nombre2;
console.log("Résultat = " + resultat);

resultat = resultat / 2;
console.log("Résultat = " + resultat);

resultat /= 2;
console.log("Résultat = " + resultat);

console.log("_____ Division Entière ____ ");

// Arrondi à l'entier inferieur: 5.9 -> 5;  5.1 -> 5
resultat = Math.floor(11 / 2) // Division entière
console.log("Résultat = " + resultat);


console.log("_____ Modulo ____ ");

// 11 % 2 = 5 et il reste 1 <- le modulo
// 12 % 2 = 6 et il reste 0
// 13 % 2 = 6 et il reste 1
// 14 % 2 = 4 et il reste 4 <- impossible parce qu'on on peut encore diviser par 2
nombre = 11;
nombre2 = 2;

resultat = nombre % nombre2;
console.log("Résultat = " + resultat);

resultat = resultat % 2;
resultat %= 2;

console.log("____ Operateur de comparaison _____");

nombre = 7;
nombre2 = 7;

resultat = (nombre > nombre2); // true ou false
console.log("Est-ce que nombre est strictement superieur à nombre2 ? " + resultat);

resultat = (nombre >= nombre2); // true ou false
console.log("Est-ce que nombre est superieur ou égal à nombre2 ? " + resultat);

resultat = (nombre < nombre2);
resultat = (nombre <= nombre2);


// =  : Une affectation
// == : Une comparaison
resultat = (nombre == nombre2); // true ou false
console.log("Est-ce que nombre est égal à nombre2 ? " + resultat);

resultat = (nombre != nombre2); // true ou false
console.log("Est-ce que nombre est différent nombre2 ? " + resultat);


nombre = 5;
nombre2 = "5";

// == : Egalité compare uniquement la valeur
// === : Egalité Stricte compare la valeur et le type des variables
resultat = (nombre == nombre2); // true ou false
console.log("Est-ce que nombre ==  nombre2 ? " + resultat);

resultat = (nombre === nombre2); // true ou false
console.log("Est-ce que nombre === nombre2 ? " + resultat);

resultat = nombre != nombre2; // false
console.log("resultat: " + resultat);
resultat = nombre !== nombre2; // true
console.log("resultat: " + resultat);


// console.log(typeof("5"));
// console.log(typeof(+"5"));

// resultat = nombre + +nombre2;
// console.log(resultat);

// console.log( nombre.toString() ); number to string

/**
 * Les types primitifs (number, string, boolean) ne sont pas modifiables
 * Toutes les operations qu'on effectuent, creer une nouvelle valeur a partir de l'ancienne
 * il faut donc soit la stockée soit l'utiliser directement
 * mais la variable "originelle" ne sera pas modifiée. */
nombre2 = +nombre2;
console.log(typeof(nombre2))

console.log("____ Structure condtionnelle ___");

let age = 43;

/**
 * Si l'age de l'utilisateur est inferieur a 18, alors on affiche le message:
 *  "Vous ne pouvez pas louer de voiture";
 */
if (age < 18) { // true 
    // bloc d'instruction executé si et seulement si la condition est vraie
    console.log("Vous ne pouvez pas louer de voiture");
} 
console.log("La suite");

/**
 * Si l'age de l'utilisateur est inferieur a 18, alors on affiche le message:
 *  "Vous ne pouvez pas louer de voiture";
 * Sinon (Dans tous les autres cas) on affiche
 *  "Quel modèle voulez-vous ?"
 */
 if (age < 18) {
    console.log("Vous ne pouvez pas louer de voiture");
} else {
    console.log("Quel modèle voulez-vous ?");
}


age = 42;

if (age <= 18) {
    console.log("Reduction moins de 18ans");
} else if (age <= 25) {
    console.log("Reductionn Jeune");
} else {
    console.log("Pas de réduction");
}

console.log("Difference entre if et else if");

age = 12;
// C'est l'un ou l'autre, jamais les deux
if (age <= 18) {
    console.log("if-elseif: Reduction moins de 18ans");
} else if (age <= 25) {
    console.log("if-elseif: Reductionn Jeune");
}


// Les deux if sont indépendants, on peut entrer dans les deux, un seul ou aucun
if (age <= 18) {
    console.log("if-if: Reduction moins de 18ans");
} 
if (age <= 25) {
    console.log("if-if: Reductionn Jeune");
}

console.log("La suite.");

// if: peut exister tout seul
// else et elseif ne peuvent pas existé tout seul
if(age < 18) { } else { }
// else if (age < 18) {}