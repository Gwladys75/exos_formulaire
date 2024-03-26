let myForm = document.querySelector('form');
let inputPseudo = document.getElementById('pseudo');
let inputEmail = document.getElementById('email');
let inputPassword = document.getElementById('password');
let error = document.getElementById('error');


let inputs = document.querySelectorAll('input');

myForm.addEventListener('submit', function(event) {

    event.preventDefault();  // L'interface Event interface représente un évènement qui se produit dans le DOM.

    // L'interface Event contient les propriétés et méthodes qui sont communes à l'ensemble des évènements.

    // La méthode preventDefault(), empêche l'action par défaut d'être exécutée comme elle l'est normalement.

    //////////// les valeurs des champs 
    let valuePseudo = inputPseudo.value.trim();
    let valueEmail = inputEmail.value.trim();
    let valuePassword = inputPassword.value.trim();
    let regexMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let regexMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/;
    

    //////// les tailles de chaque valeur de champ
    let lengthPseudo = valuePseudo.length;

    // console.log(event.target[0].value);
    console.log(lengthPseudo);

    // les validations des champs

    let donnees = [valuePseudo, valueEmail, valuePassword];

    // première façon de faire afin de vérifier si tout les champs sont vides
        // for (let i = 0; i < inputs.length; i++) {
            
        //     if (inputs[i].value == '') {
        //             error.innerHTML += "<p> Tout les champs sont requis !</p>";
        //           error.classList.add('error'); 
        //         break;
        //     }  
        // }
             
    // Deuxième façon de faire afin de vérifier si tout les champs sont vides

    if (donnees.includes('')) {

        error.innerHTML += "<p> Tout les champs sont requis !</p>";
        error.classList.add('error');
        
    }else{
        error.innerHTML = '';
        if (lengthPseudo < 5 || lengthPseudo > 15 ) {
            // le pseudo n'est pas valide 
            
            // error.innerHTML =error.innerText = "<p> le pseudo n'est pas valide</p> " + "<p> le pseudo n'est pas valide</p> ";
    
            // ou 
    
            // error.innerText = "<p> le pseudo n'est pas valide </p> "; 
            error.innerHTML += "<p> Le pseudo n'est pas valide</p>";
            error.classList.add('error');
        }
        // la méthode test() vérifie  s'il y'a une correspondance entre le contenu de la variable mail et l'exresseion régulière
        if (!regexMail.test(valueEmail)) { 
    
            error.innerHTML += "<p> Le mail n'est pas valide</p>";
            error.classList.add('error');
            
        }
        if (!regexMdp.test(valuePassword)) { 
    
            error.innerHTML += "<p> Le mot de passe n'est pas valide</p>";
            error.classList.add('error');
            
        }



    }
 
});

// Affichage du mot de passe
 console.log(inputPassword.type);

 // 1ère méthode
function showMdp(){
    if(inputPassword.type == 'password'){

        inputPassword.type = 'text';

    }else{

        inputPassword.type= 'password';

    }


}

// 2éme méthode
let show =  document.getElementById('show');

show.addEventListener('click', ()=>{


    if(inputPassword.type == 'password'){

        inputPassword.type = 'text';
        show.innerHTML = '<i class="bi bi-eye-fill"></i>';

    }else{

        inputPassword.type= 'password';
        show.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';

    }




});





