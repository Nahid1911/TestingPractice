function stringLength(string) {
    if(string.length !== 0 && string.length < 10){

        return string.length
    }else {
        return 'the string is not in range';
    }
  }


  function reverseString(string) {
    let arrOfString = string.split('');
    let revString = [];
    for(let i = arrOfString.length-1; i >= 0; i -= 1){
      revString.push(arrOfString[i])
    }
    return revString.join('');
  }
  
  class Calculator {
    add (x,y) {
      return x+y;
    }
    
    subtract (x,y){
      return x-y;
    }
    
    divide (x,y) {
      return x/y;
    }
      
    multiply (x,y) {
      return x*y;
    }
    }

    function capitalize(string) {
    const firstChar = string.charAt(0).toUpperCase();
    const remainingStr = string.slice(1);
    return firstChar + remainingStr;
    }

  module.exports = {stringLength, reverseString, Calculator, capitalize};