function displayAge() {
    var age = document.getElementById('age').value;
    if (isNaN(age)==false && age > 0){
    //Si la var est supérieu ou égal à 18 alors
        if ( age >= 18){
        alert("Vous êtes majeur");
    // alors la modale affiche ceci
    }else{
    // dans le cas contraire la modale affiche ceci:
        alert('Vous êtes mineur');
    }
    // Si la condition ligne n'est valide la modale affiche ceci:
    }else{
        alert('Please enter a valide age');
    }
    }
