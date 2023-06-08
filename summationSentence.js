function addNumber (parameterOne,parameterTwo) {
    const result = parameterOne + parameterTwo;

    return result;
//console.log inside function
    const sumNumber1 = addNumber();
    console.log("The sum of [num1] and [num2] is [result]", sumNumber1);
}
//console.log outside of function
    const sumNumber1 = addNumber(1,2);
    console.log("The sum of [num1] and [num2] is [result]", sumNumber1);