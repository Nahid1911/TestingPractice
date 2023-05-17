const stringLength = require('./function');

test('stringLength should return the correct lenth of the string', () => {
    //Arrange
    const inputString = "nahid";
    const inputStringLength = inputString.length;
    
    //Act
    const formulaOutput = stringLength(inputString);

    //Assert
  expect(formulaOutput).toBe(inputStringLength);
});