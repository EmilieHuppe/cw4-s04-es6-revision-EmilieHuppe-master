[main]: _readme/main.png
[fellow1]: _readme/fellowship_1.png
[perso]: _readme/perso.png
[fellow2]: _readme/fellowship_2.png

# Semaine 04 - Exercice 01 - Révision des notions ES6

L'objectif du cours de cette semaine est de mettre en application les notions ES6 que nous avons appris jusqu'à présent. Nous vous fournissons les grandes lignes de ce qui doit se retrouver dans chacune de vos classes.

## **Consignes de l'exercice**

À la suite de chaque classe, vous aurez une capture d'écran qui vous donne la solution. Comme c'est un exercice qui ne compte pas, il n'y a aucune plus value à tout recopier ce qu'il y a dans la solution.

`Arrêter tout suite l'exercice si c'est ce que vous avez l'intention de faire vous perdez votre temps. Investissez-le plutôt dans votre TP ou Among Us /s`.

<br><br>

## `Classes que nous aurons besoin pour ce projet`

- Main
- Fellowship
- Perso

<br><br>

## `Classe Main`

1. La classe doit contenir le code montré pour être une classe
1. La classe doit avoir une méthode `init`
   - Sélectionnez l'élément avec l'attribut data-component qui a la valeur `Fellowship`
   - S'il y a un élément
      - faite une nouvelle instance de votre classe `Fellowship`

<br>
<details>
<summary>Cliquez-ici pour voir la classe Main</summary>

![alt Capture de la classe Main][main]

</details>
<br><br>

## `Classe Fellowship`

1. La classe doit contenir le minimum pour être une classe
1. Éléments à créer :
   - une variable globale `element` qui contient l'élément HTML en paramètre du constructeur
   - une variable globale `army` qui est de type tableau
1. La classe doit avoir une méthode `init`
   - une variable `persos` qui sélectionne tous les éléments HTML data-army qui ont la valeur `perso`
   - Faire une boucle dans tous les éléments de la variable `persos`
     - Créer une variable `element` qui contiendra l'élément en cours dans l'itération de la boucle. _Pensez i._
     - Créer une variable `perso` qui créera une nouvelle instance de votre classe Perso en lui passant en paramètre la variable `element`.
     - Ajouter votre variable `perso` dans votre tableau(array) `army`

<br>
<details>
<summary>Cliquez-ici pour voir la classe Fellowship</summary>

![alt Capture de la classe Fellowship][fellow1]

</details>
<br><br>

## `Classe Perso`

1. La classe doit contenir le minimum pour être une classe
1. Éléments a créer:
   - une variable globale `element` qui contient l'élément HTML en paramètre du constructeur
   - une variable globale `name` qui est correspond au texte du h2 de l'élément
   - une variable globale `isActive` avec la valeur à faux;
1. La classe doit avoir une méthode `init`
   - Ajouter un `click` sur votre variable `element` qui appelle la méthode addToArmy();
     - _N'oubliez pas le bind_
1. Créer une méthode addToArmy

- Inverser la valeur de votre variable `isActive`
- Alterner la class `active` en utilisant une méthode de classList sur votre variable `element`

1. Créer une méthode warCry()

- Si la valeur de votre variable `isActive` est vraie :
  - Faite un console.log qui affiche :
    'Moi, nomDeLaPersonne, m'en vais en guerre pour détruire l'armée des Antis-Web.'
    - _Un templateString serait sans doute une superbe solution pour remplacer nomDeLaPersonne par votre variable `name`_

<br>
<details>
<summary>Cliquez-ici pour voir la classe Perso</summary>

![alt Capture de la classe Perso][perso]

</details>
<br><br>

## `Classe Fellowship`

1. Dans votre méthode init :
   - Créer une variable `button` qui sélectionne `button` dans votre document html
   - Ajouter un clique sur `button` qui appelle la méthode `goToWar`

1. Créer une méthode `goToWar` :
   - Nettoyer la console JavaScript
   - Faites une boucle dans toutes les personnages de votre armée _(indice votre tableau)_
      - Créer une variable `perso` qui contiendra l'élément en cours dans l'itération de la boucle.
      - Apellez la méthode `warCry` de votre personnage

Une fois terminé, vous devriez avoir un console.log avec chaque membre de votre armée qui fait son cri de guerre.

<br>
<details>
<summary>Cliquez-ici pour voir la classe Fellowship</summary>

![alt Capture de la classe Fellowship][fellow1]

</details>
<br><br>

# Bravo vous avez maintenant complété l'exercice de cette semaine.

<br><br>

# Stack de développement frontend TimTools

C'est quoi un stack de développement frontend? C'est un ensemble d'outil qui permet d'automatiser certaines tâches redondantes et plus complexe afin de d'accélérer et d'optmiser le développement d'un site web ou une application.

## Après avoir cloné un projet pour la 1ère fois

- `npm install` afin d'installer les dépendances (dossier node_modules)

## Tâches

Afin de démarrer le stack de développement, utilisez les commandes suivantes dans la console ou utilisez la tâche `start`

| Commandes disponibles | Description                                                                                                 |
| :-------------------- | :---------------------------------------------------------------------------------------------------------- |
| `npm start`           | Génère un environnement de développement, démarre un serveur web et va attendre des changements de fichiers |
| `npm build`           | Compile production code                                                                                     |
