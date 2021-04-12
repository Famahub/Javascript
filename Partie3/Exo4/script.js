
var password = document.getElementById('password');
var confirm  = document.getElementById('confirm');
//  if(password.value == ''|| confirm.value == '') {
//  alert('Veuillez remplir les champs');
// }
function validatePassword() {
  if (password.value != confirm.value) {
    document.getElementById('password').style.border = '2px solid red'; 
    document.getElementById('confirm').style.border = '2px solid red'; 

    
  } else {
    document.getElementById('password').style.border = '2px solid green'; 
    document.getElementById('confirm').style.border = '2px solid green'; 

  }
}

