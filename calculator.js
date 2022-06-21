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