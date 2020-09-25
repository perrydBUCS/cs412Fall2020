
const doOperation = (value, operation) => operation(value); //decorator pattern

const decoratedValue = doOperation(
    42,
    (value) => value * 42
)
console.log(`decorated: ${decoratedValue}`);

const anotherDecoratedValue = doOperation(
    'hey now',
    (value) => value.length
    )
console.log(`decorated: ${anotherDecoratedValue}`);
//callbacks
