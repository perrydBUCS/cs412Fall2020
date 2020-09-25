//functions are first-class objects in js

const getOperator = operator => {
    switch (operator) {
        case '+':
            return (left, right) => left + right; //this is a function
            break;
        case '-':
            return (left, right) => left - right; //this is a function
            break;
    }
}

const mathFunction = getOperator('-');
console.log(`${mathFunction}`);
console.log(`${mathFunction(6,7)}`);

console.log(`The better way: ${getOperator('+')(40,2)}`); //funcs are executed with ( )

