// var name = prompt('Name:','John');
// var lastName = prompt('Last Name:','Doe');
// var city = prompt ('City:','New York');
// // alert(info)

// Crée une fonction qui me permet de récupérer et d'afficher mes valeurs dans les prompts
function displayCivility(){
var name = document.getElementById('name').value;
var lastName = document.getElementById('lastName').value;
var city = document.getElementById('city').value;
var info = name + lastName + city;
if('info') { 
    
alert('Your name is:' + name + '\n' + 'Your lastname is:' + LastName + '\n' + city + 'Your city is:' + city);
    } else{ 
        alert(info)
    }
}
