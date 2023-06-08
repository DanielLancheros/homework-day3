//Math Operator: Modulus (integer way)
const numberOne = 16;
const numberTwo = 5;
console.log("16 / 5 has a remainder of: ", numberOne % numberTwo);

//Function to get remainder
function modularNumber (parameterOne, parameterTwo){
    const result = parameterOne % parameterTwo;

    return result;
}

const remainderNumber1 = modularNumber(20,3);
console.log("The remainder of 20 / 3 is:", remainderNumber1);
