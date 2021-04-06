// var firstNumber = prompt('First Number:');
// var secondNumber = prompt('Second Number:');
// result = (firstNumber + secondNumber); 
// alert("result")
// = document.getElementById('name').value;
// Je déclare une var qui contient de la multiplication récupérer dans les imput
// sur laquelle j'applique la fonction parseInt qui va  convertir ma chaine de caractère string  en intier (integer)
function displayResult(){
var firstNumber = document.getElementById('inputFirstNumber').value;
var secondNumber = document.getElementById('inputSecondNumber').value;
var result = firstNumber * secondNumber;

 //CONDITIONS
if (result){
alert ('Result is ' + result);
    }else{

alert ('Ohhh noo¡!¡');
    }

}
console.log (info);