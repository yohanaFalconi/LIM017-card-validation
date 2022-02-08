import validator from './validator.js';
console.log(validator);

//solo permite recibir números
inputCardNumber.addEventListener('keypress', function(event){
  return (event.charCode >= 48 && event.charCode <= 57);
})

let message = document.getElementById("message");
let button1 = document.getElementById("buttonValidation");
button1.addEventListener("click", playButton);

function playButton(){
  //capturar el input y almacenarlo
  var inputCardNumber = document.getElementById("inputCardNumber");
  inputCardNumber = inputCardNumber.value; 
  console.log(inputCardNumber);




}
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