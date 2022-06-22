// using the prompt method 
const a = parseFloat(prompt('enter your first letter'))
const b = parseFloat(prompt('enter your second letter'))
var value = prompt('Operations, Enter 1:SUM 2:SUB 3:DIVIDE 4:MULTIPLY', );

try {
    if (value === '1') {
        var result = a + b;
        alert(`'the sum of ${a} and ${b} = ${result}'`)
    } else if (value === '2') {
        var result = a - b
        alert(`'the subtraction of ${a} and ${b} = ${result}'`)
    } else if (value === '3') {
        var result = a / b;
        alert(`'the division of ${a} and ${b} = ${result}'`)
    } else if (value === '4') {
        var result = a * b
        alert(`'the multiplication of ${a} and ${b} = ${result}'`)
    } else {
        alert('invalid user input ')
    }
} catch (error) {
    alert('something went wrong', error)
}



// BASIC CALCULATOR USING FUNCTIONS
function Operations(a, b) {

    addition = () => {
        var result = a + b
        console.log(`addition : ${result}`);
        subtraction()

    }

    subtraction = () => {
        var result = a - b
        console.log(`subtraction : ${result}`);
        multiplication()

    }

    multiplication = () => {
        var result = a * b
        console.log(`multiplication : ${result}`);
        division()

    }

    division = () => {
        var result = a / b
        console.log(`division : ${result}`);
        mod()

    }

    mod = () => {
        var result = a % b
        console.log(`mod : ${result}`);

    }
    addition()

}
Operations(5, 5);