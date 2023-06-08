function volumeCone (parameterOne, parameterTwo) {
    const result = 3.14*parameterOne*parameterOne*(parameterTwo / 3)

    return result;
}
// Formula for Volume of cone is: V=πr^2h/3
//parameterOne = radius
//parameterTwo = height

// 2. Function Invocation
const volNumber1 = volumeCone(2,3);
console.log("The volume of a cone with radius of 2 and height of 3 is: ", volNumber1);
