let myAdder;
myAdder = adder; //hoisted in this case

function adder(left, right) {
    return left + right;
}

let subber = function (right, left) {
    return right - left;
}
console.log(`${subber(5,6)}`)

console.log(`The value is: ${myAdder(30,12)} left!`);

console.log('The non-interpolated value is: ', adder(30,12), 'right?');


//.using const for function declarations

const mult =    function (left, right) {
   return left*right;
}
console.log(`5*6 = ${mult(5,6)}`);

//string interpolation


//New syntax for functions using => (fat arrow)
//Came from CoffeeScript (macro language)

const mult2 = (left, right) => left * right; //implicit return of single line

const mult3 = (left, right) => {
    left*=2;
    return left*right;
}
console.log(`this is mult2: ${mult2(8,6)}`);
console.log(`this is mult3: ${mult3(8,6)}`);

//One arg, one arg only...(the hunt for krasnaya octobray
//
const halve = value => value/2;

//No args
const arrrgh = () => 'arrrgh';
const arrrgh2 = _ => 'arrrgh2';

const lotsaargs = (right, left, ...theOtherStuff) => {
    console.log(`theOtherStuff: ${theOtherStuff} has ${theOtherStuff.length} items`);
    for (let item of theOtherStuff) {
        console.log(item);
    }
    return right*left;
}
const foo = lotsaargs(5,6,7,8,9,2,4,5);


//Destructuring

// let [left, right] = [5,6]
// [right, left] = [left, right]
//const bar = lotsaargs(left: 7, right: 9)
console.log('Done');
