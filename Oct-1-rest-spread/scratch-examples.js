// let funcs = [];
// //num ends up here
// for (let num=0; num<4; num++) {  //the let sets up a closure
//     funcs.push(
//         () => console.log(`Num: ${num}`)
//     )
// }
// console.log(`${funcs[2]}`);
// funcs[2]();
// funcs[1]();
//

// let spr = (a, b, c, ...d) => {
//     console.log(a,b,c);
//     for (let item of d) { console.log(`${item}`);}
// }
// let anArray = [1,2,3,4,5,6,5];
// spr(...anArray);
//
// let foo = {       //this is a POJO or DAO => Plain Old JavaScript Object, Data Access Object
//     color: 'red',
//     size: 'large'
// //    setColor: (color) => this.color = color
// };
// for (const val in foo) {
//     console.log(val);
// }

// let x = 0;
// console.log(x == false);
// //From YDKJ
// function foo(x,y) {
//     x = x || 11;
//     y = y || 31;
//
//     console.log( x + y );
// }
//
// foo(0,31);

//
// function foo(x,y) {
//     x = (x !== undefined) ? x : 11;
//     y = (y !== undefined) ? y : 31;
//
//     console.log( x + y );
// }
//
// foo( 0, 42 );            // 42
// foo( undefined, 6 );    // 17

// //
// let bar = (a, b=22) => a + b;
//
// console.log(
//     bar(20,undefined)
// )
//

let bar = (a , b=baz(a=12)) => a + b;

let baz = a => a*2;

console.log(
    bar()
)





