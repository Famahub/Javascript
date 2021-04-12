//METHODE 1
// function displayGreen(){
//  document.getElementById('text').style.color = 'green';

// }

// function green(){
//     document.getElementById("text").style.color='green';
// }

// function red(){
//     document.getElementById("text").style.color='red';
// }

// function blue(){
//     document.getElementById("text").style.color='blue';
// }

//METHODE 2
// Je créer une fonction à laquelle j'ai donner 2 paramètres.
function displayChangeColor(id,color){
//J'applique à mon élément portant un id, la couleur que je passe en argument
    document.getElementById(id).style.color = color;
}
var text = 'Hello world'
console.log ('bonjour'); //Chaine de caractère
console.log (text); // Variables

