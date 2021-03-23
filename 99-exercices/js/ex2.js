//  reprendre le convertisseur Heure -> minutes de Operateurs
//  Faire une boucle: tant que l'utilisateur ne tape pas 2, on recommence la boucle
//  Dans cette boucle on met:
//  Afficher un message à l'utilisateur pour savoir s'il souhaite
//       1- Convertir
//       2- Quitter
//  Si l'utilisateur saisit 1:
//        * demander à l'utilisateur de saisir des heures
//        * demander à l'utilisateur de saisir des minutes
//        * convertir les heures en minutes
//        * afficher le resultat
//  Si l'utilisateur saisit 2:


let nb2 = 6;
/*
 à l'aide de la condition ternaire, la variable nb prendra comme valeur 42
 si :
     nb2 est égal à 6
 Sinon:
     nb sera égal à 9
*/


// Faire une fonction qui affiche 'Hello World !'


// Faire une fonction qui prend un paramètre 'prenom' et affiche Bonjour suivi du prénom


// Faire une fonction qui affiche la multiplication de 2 nombres passés en paramètres

// Faire une fonction qui renvoie la soustraction de 2 nombres passés en paramètre

//  Faire une fonction qui affiche la table de multiplication d'un nombre passé en paramètre

/*
 Faire une fonction qui convertit des heures en minutes, elle prend 2 arguments: heures et minutes.
 exemple: howManyMinute(heure, minutes): #...
 exemple d'appel: howManyMinute(1,30)  <- renvoie 90
*/

/*
 Faire une fonction qui cherche une lettre dans une chaine de caractères et qui retourne "trouvée" si la lettre a été trouvée
 et 'aucun résultat' dans le cas contraire.
        chaine.charAt(0) -> 'S'
        chaine.charAt(1) -> 'a'
 findChar(chaine, lettre) : #...
 exemple d'appel: findChar("Salut tout le monde", 'u') <- cherche la lettre 'u' dans la chaine
*/

/*
# Exercice bonus faire un rot 11
# Un rot est un algorithme qui décale les lettres pour chiffrer un message.
# "Le texte chiffré s'obtient en remplaçant chaque lettre du texte clair original par une lettre à distance fixe, toujours du même côté, dans l'ordre de l'alphabet.
# Pour les dernières lettres (dans le cas d'un décalage à droite), on reprend au début."" Wikipedia
# A + 11 = L
# Z + 11 = K
# "Salut"  devient "Dlwfe"
#  indice: charCodeAt(letter) pour convertir un caractère en nombre (table ASCII)
#  indice: String.fromCharCode(ascii) pour convertir du code ASCII en caractère
#  indice: il faut parcourir la chaine caractère par caractère et la transformer
# verifier : https://rot13.com/
# table ascii https://fr.wikibooks.org/wiki/Les_ASCII_de_0_%C3%A0_127/La_table_ASCII#Descriptif3
# chiffrement par decalage: https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage
*/