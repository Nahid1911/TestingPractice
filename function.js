function stringLength(string) {
    if(string.length !== 0 && string.length < 10){

        return string.length
    }else {
        return 'the string is not in range';
    }
  }
  module.exports = stringLength;