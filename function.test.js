const {stringLength, reverseString} = require('./function');

test('stringLength should return the correct lenth of the string', () => {
    //Arrange
    const inputString = "nahid";
    const inputStringLength = inputString.length;
    
    //Act
    const formulaOutput = stringLength(inputString);

    //Assert
  expect(formulaOutput).toBe(inputStringLength);
});

test('the formula should return the rverse order of the letter of the original string', () =>{
    //Arrange
    let string = 'JavaScriptJest';
    let outputStr = 'tseJtpircSavaJ';

    // Act 
    const revStrResult = reverseString(string);

    //Assert
    expect(revStrResult).toBe(outputStr);
})