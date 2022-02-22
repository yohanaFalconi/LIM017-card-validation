import validator from './validator.js';

//pantallas
let firstScreen = document.getElementById("firstScreen");
let userForm = document.getElementById("userForm");
let studentProfileScreen = document.getElementById("studentProfileScreen");
let cardInformationScreen= document.getElementById("cardInformationScreen");
let cardValidationScreen= document.getElementById("cardValidationScreen");


// aparezca la pantalla de form- segunda pantalla
let buttonShiftForm = document.getElementById('buttonShiftSecondScreen');
buttonShiftForm.addEventListener('click', formAppear);
function formAppear(){
  firstScreen.style.display = 'none';
  userForm.style.display ='block'
}
// formulario de inicio de sesión 
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const warningMessageParagraph = document.getElementById("warningMessage");
const buttonSignIn = document.getElementById("buttonSignIn");
buttonSignIn.addEventListener("click", e=>{ // function (e){}
  e.preventDefault(); //para q no se envie por default
  let regexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/; //expresiones regurales
  let warningMessage = ""
  let successfulSignIn= true;
  if(userName.value.length<3){
    warningMessage += `El nombre no es válido <br>`;
    successfulSignIn = false;
  }
  /* test() : ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. 
  Devuelve un boolean,*/ 
  //regexEmail.test(userEmail.value) al ingresar correc = true
  if(!regexEmail.test(userEmail.value)){
    warningMessage += `El email no es válido <br>`;
    successfulSignIn = false;
  }
  if(userPassword.value.length<6){
    warningMessage += `La contraseña no <br>`;
    successfulSignIn = false;
  }
  if(successfulSignIn==false){
    warningMessageParagraph.innerHTML = warningMessage;
  } else{ 
    // aparezca la pantalla de studentProfileScreen - tercera pantalla
    userForm.style.display ='none';
    studentProfileScreen.style.display = 'block';
    const welcomeMessage = document.getElementById("welcome"); 
    welcomeMessage.innerHTML = `Bienvenidx, `+ userName.value;
  }
})
// showing the password
let displayPassword = document.getElementById('showPassword');
displayPassword.addEventListener('click', showPassword_);
function showPassword_(){
  if(userPassword.type == "password"){
    userPassword.type = "text";
  }else{
    userPassword.type = "password";
  }
}

//aparezca card Information Screen
let buttonShiftCardInformation= document.getElementById('buttonAddFunds');
buttonShiftCardInformation.addEventListener('click', fourthScreenAppear);
function fourthScreenAppear(){
  studentProfileScreen.style.display = 'none';
  cardInformationScreen.style.display ='block';
}
let selectMonth = document.querySelector("#selectMonth")

// Tarjeta dinámica
// Mes generado dinámicamente
for(let i = 1; i <= 12; i++){
  let options = document.createElement("option");
  options.value = i; // el valor será igual a 1 y se ejecutará 12 veces
  options.innerHTML = i; //lo que irá dentro la opction
  //cardInformationUser.selectMonth ->defino para acceder a select q es id
  selectMonth.appendChild(options);
  //poner dentro del select la option que creamos
}
// Año generado dinámicamente
const actualYear = new Date().getFullYear();
let selectYear = document.querySelector("#selectYear") //id
for(let i = actualYear; i <= actualYear + 8; i++){
	let options = document.createElement('option');
  options.value = i;
	options.innerText = i;
	selectYear.appendChild(options);
}
// el mes se refleje en la imagen de tarjeta
const expirationMonth = document.querySelector(".cardImage #cardExpirationId .monthExpiration");
selectMonth.addEventListener("change", (e) =>{
  expirationMonth.textContent = e.target.value;
})
// el año se refleje en la imagen de tarjeta
const expirationYear = document.querySelector(".cardImage #cardExpirationId .yearExpiration");
selectYear.addEventListener("change", (e) =>{
  expirationYear.textContent = e.target.value.slice(2); // corta de 2 en adelante y crea un string
})
// condiciones al ingresar el número de la tarjeta
const cardNumberFixed = document.getElementById("inputCardNumber");
cardNumberFixed.addEventListener('keyup', (e) => {
  let  inputValue= e.target.value; //accedemos al elemento que recibe
  cardNumberFixed.value = inputValue
  // Eliminamos espacios en blanco
	.replace(/\s/g, '')
  // Eliminar las letras
	.replace(/\D/g, '')
  // el número se refleje en la imagen de tarjeta
  let cardImageNumber = document.querySelector(".cardImage .cardImageNumber"); //class
  //accedemos al contenido dentro de la tarj igualando al valor
  cardImageNumber.textContent = inputValue;
  //para que ## aparezcan por default
  if(inputValue == ''){
		cardImageNumber.textContent = '#### #### #### ####';
	}
})

// el nombre se refleje en la imagen de tarjeta
const cardNameFixed = document.getElementById("nameInput");
cardNameFixed.addEventListener('keyup', (e) => {
  let  inputValue= e.target.value; //accedemos al elemento que recibe
  cardNameFixed.value = inputValue.replace(/[0-9]/g, ''); 

  // el número se refleje en la imagen de tarjeta
  let cardImageName = document.querySelector(".cardImage .cardImageName"); //class
  cardImageName.textContent = inputValue;
});

let message = document.getElementById("message");
let maskNumber = document.querySelector(".maskNumber");
let validationMessage = document.getElementById("validationMessage");
let buttonValidation = document.getElementById("buttonValidation");
buttonValidation.addEventListener("click", playButton); 

function playButton(){
  //capturar el input y almacenarlo
  const cardNumber = document.getElementById("inputCardNumber").value;
  
  if (cardNumber.length <= 15){
    message.innerHTML=`Número incompleto`;
  } else{
    message.innerHTML=`<span style="color:black;">Número completo`;
    let cardNumberValidation = validator.isValid(cardNumber);
    let cardNumberMask= document.getElementById("inputCardNumber").value;
    maskNumber = validator.maskify(cardNumberMask);
    
    if(cardNumberValidation == true){
      cardInformationScreen.style.display = 'none';
      cardValidationScreen.style.display ='block';

      validationMessage.innerHTML=`Tarjeta válida <br>`+  maskNumber;
    } else{
      cardInformationScreen.style.display = 'none';
      cardValidationScreen.style.display ='block';
      /*validationMessage.innerHTML=`Tarjeta inválida ${validator.maskify(cardNumberMask)}`*/
      validationMessage.innerHTML=`Tarjeta inválida <br>`+  maskNumber;
    }
  }
}


