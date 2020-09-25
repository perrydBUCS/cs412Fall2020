// //Destructured variable assignments
// let [left, right] = [40, 2];
//
// //Really it is
// //let left = 40;
// //let right = 2;
//
// console.log(`left: ${left}`);
//let foo = 27
 //   [right, left] = [17, 8]
// console.log(`left: ${left}`);
//
// [right, left] = [left, right]
// console.log(`left: ${left}`);

//
//
// const lotsaargs = (right, left, ...theOtherStuff) => {
//     console.log(`theOtherStuff: ${theOtherStuff} has ${theOtherStuff.length} items`);
//     console.log(`Type of theOtherStuff is ${typeof (theOtherStuff)}`);
//     for (let item of theOtherStuff) {
//         console.log(item);
//     }
//     console.table(theOtherStuff)
//     return right*left;
// }
// const foo = lotsaargs(5,6,7,8,9,2,4,5);

//Object destructuring

let employee = {
    name: 'Perry',
    department: 'BUCS',
    salary: '200000',
    manager: 'Matta',
    managers: {
        one: 'bob',
        two: 'fred'
    }
}
//matches the name of the key
const printName = ({name, manager}) => console.log(`${name} reports to ${manager}`);
printName(employee)
const doSomethingComplicated = ({city, state, salary}) => city //what if this is a lib function
//let bar = doSomethingComplicated('MA', 'Boston' ) //instead, do:

let bar = doSomethingComplicated({state: 'MA', city: 'Boston'} )

console.log(bar);
let {salary} = employee;
console.log(salary);
