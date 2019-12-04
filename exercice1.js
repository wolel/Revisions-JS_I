var btnAdd = document.getElementById('btnAdd');
var btn5 = document.getElementById('btn5');
var btn3 = document.getElementById('btn3');
var btnDel = document.getElementById('btnDel');
var btnDelAll = document.getElementById('btnDelAll');
var btnAleatoire = document.getElementById('btnAleatoire');

var txt =  document.getElementById('txt');




/**
 * 1) Récuperer la valeur entré par l'utilisateur lors du click sur le bouton
 */
btnAdd.addEventListener('click', function () {
    tab.push(txt.value);
    tabField.innerHTML = tab;
    //console.log(tabField);
});
/**
 * 2) Stocker cette valeur dans un tableau
 */
var tab = [];
var tabField = document.getElementById('tabField');
//tabField.length = txt.value.length;


/**
 * 3) Lorsque l'utilisateur a entré au moins 10 valeurs, afficher dans un élément div une entrée du tableau
 choisie au hasard
 */
//c'est deja fait avec la div 'tabField

/**
 * 4) Dans un autre div, afficher à l'utilisateur la 5 eme entrée du tableau
 */

var entreNr5 = document.createElement('div');
document.getElementById('tabField5').appendChild(entreNr5);
entreNr5.innerHTML.toUpperCase();


btn5.addEventListener("click", function () {
    entreNr5.innerHTML  = tab[4];

    if (tab.length <= 3){
        alert('entrez au moins 5 valeurs');
        console.log(tabField);

    }
    else{
        alert('votre 4 éme element est ' + entreNr5.innerHTML.toUpperCase() );
    }

});

btn3.addEventListener("click", function () {
   entreNr5.innerHTML = tab[2];
   alert('votre 5 éme element est ' + entreNr5.innerHTML.toUpperCase() )

});

/**
 * 5) Tant que l'utilisateur n'a pas entré au moins 10 valeurs, afficher dans l'élément div le message suivant
 "entrez au moins 10 valeurs"
 */

//deja fait avec la condition if (tab.lenght <= 4)

/**
* 6) Ajouter un bouton permettant à l'utilisateur d'afficher une entrée aléatoire du tableau.
*/

var mots_aleatoire;
var random;

btnAleatoire.addEventListener("click", function () {
    random = Math.floor(Math.random()*tab.length);


    for (var i = 0; i < tab.length; i++ ){
        mots_aleatoire = tab[random];
      entreNr5.innerHTML = tab[random];
    }
});
/**
 8) Ajouter un bouton permettant de supprimer le dernier élément du tableau
 */

btnDel.addEventListener('click',function () {
    tab.pop(txt.value);
    tabField.innerHTML = tab;
    console.log(tabField)
});

/**
 9) Ajouter un bouton permettant de supprimer tout les éléments du tableau
 */

btnDelAll.addEventListener('click',function () {
    for (var i = 0; i < tab.length; i++){
        tab.splice(txt.value);
        tab = [];
        tabField.innerHTML = tab;
            console.log(tabField)
        }

});