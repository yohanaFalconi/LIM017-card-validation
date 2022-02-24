const validator = {

  isValid: function(creditCardNumber){
    
    let cardNumberArray = Array.from(creditCardNumber).reverse();
    for ( let i = 0; i< cardNumberArray.length; i++){
      if( i%2 != 0) {
        cardNumberArray[i] = cardNumberArray[i]*2;
        if(cardNumberArray[i] >= 10){
          cardNumberArray[i] = cardNumberArray[i]-9;
        }
      }
    } 
    let sum = 0;
    for ( let i = 0; i< cardNumberArray.length; i++){
      sum += parseInt(cardNumberArray[i]);
    }
    if(sum % 10 == 0){
      return true;
      } else{
      return false;
    }
    
  },
  maskify: function(creditCardNumber){
    let hiddenNumbers = "";
    for (let j=0; j< creditCardNumber.length; j++){
      if( j< creditCardNumber.length-4){
        hiddenNumbers +='#';
      } else{
        hiddenNumbers += creditCardNumber[j];
      }
    }
    return hiddenNumbers; 
  },
     
};
  
  export default validator;



