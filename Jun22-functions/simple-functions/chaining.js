//reverse a string

const someString = 'This is a relatively long string';

//old school
const stringArray = someString.split('');
const reversedStringArrary = stringArray.reverse();
const joinedArray = reversedStringArrary.join('');

//javascript way (with chaining)
console.log(
    'This is a relatively long string'.split('').reverse().join('')
)

//console.table(joinedArray);
