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
  

  module.exports = {stringLength, reverseString};