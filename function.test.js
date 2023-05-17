const {stringLength, reverseString, Calculator, capitalize} = require('./function');

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


describe('return a calculation',() => {
    test ('the result of the addition should be 30', () => {
    //Arrange
    let myCalculator = new Calculator;
    let firstNumb = 20;
    let secondNumb = 10;
    let addition = 30;

    //Act
    let sumResult = myCalculator.add(firstNumb, secondNumb);

    //Assert
    expect(sumResult).toBe(addition);

    })

    test ('the result of the subtraction should be 10', () => {
        //Arrange
        let myCalculator = new Calculator;
        let firstNumb = 20;
        let secondNumb = 10;
        let subtraction = 10;
    
        //Act
        let subtractResult = myCalculator.subtract(firstNumb, secondNumb);
    
        //Assert
        expect(subtractResult).toBe(subtraction);
    
    })

    test ('the result of the division should be 3', () => {
        //Arrange
        let myCalculator = new Calculator;
        let firstNumb = 30;
        let secondNumb = 10;
        let division = firstNumb/secondNumb;
        
        //Act
        let divisionResult = myCalculator.divide(firstNumb, secondNumb);
        
        //Assert
        expect(divisionResult).toBe(division);
        
    })
})

test('the function should return the string with capital first letter', ()=> {
     //Arrange
    let inputText = "nahid";
    let outputText = "Nahid";

    //Act 

    let formulaAppliedOutput = capitalize(inputText);

    //Assert
    expect(formulaAppliedOutput).toBe(outputText);
})
