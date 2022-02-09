import validator from './validator.js';
console.log(validator);

//solo permite recibir números
inputCardNumber.addEventListener('keypress', function(event){
  return (event.charCode >= 48 && event.charCode <= 57);
})

let message = document.getElementById("message");
let validationMessage = document.getElementById("validationMessage");

let button1 = document.getElementById("buttonValidation");
button1.addEventListener("click", playButton); 

function playButton(){
  //capturar el input y almacenarlo
  var cardNumber = document.getElementById("inputCardNumber");
  cardNumber = cardNumber.value; 
  console.log(cardNumber);
  let arrayCard=Array.from(cardNumber).reverse();
 //aplicación de la operación
 for ( let i = 0; i< arrayCard.length; i++){
   if( i%2 != 0) {
     arrayCard[i] = arrayCard[i]*2;
     if(arrayCard[i] >= 10){
       arrayCard[i] = arrayCard[i]-9;
      }
    }
  }

  let sum = 0;
  for ( let i = 0; i< arrayCard.length; i++){
    sum += parseInt(arrayCard[i]);
  }
  if(sum % 10 == 0){
    return true;
    } else{
    return false;
  }
}
// return masked string





  /*
  // envíen un msm de número incompleto ¿cuándo solo ingresa <9?
  // envía un msm si ingresa e, signo o un campo vacío al final
  if( isNa0N(cardNumber) ){
    document.getElementById("message").innerHTML=`Número incompleto, debes insertar 9 caracteres`;
  } else if(cardNumber==''){
    // si no ingresa ningún carácter   
    message.innerHTML=`Campo vacío`;
  } else{
    message.innerHTML=`Número completo`;
  } */