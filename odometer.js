function subtractNumber (parameterOne, parameterTwo) {
    const result = ((parameterTwo - parameterOne)*.15);
//parameterOne is Odometer reading before trip
//parameterTwo is Odometer reading after trip
//.15 is cost per mile

    const resultTwo = ((parameterTwo - parameterOne)*3.64);
    return result;
}
const diffNumber1 = subtractNumber(7500,7523);
console.log("Cost of gas for this trip at $0.15 per mile", diffNumber1);

const diffNumber2 = subtractNumber(7500,7523);
console.log("Cost of gas for this trip at $3.64 per gallon")
//Need help with 3.64 at 28mpg
