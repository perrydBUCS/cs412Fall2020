//Promises - a placeholder for an async value
//avoiding callback hell

const stringLength = (strval) => {   //assume this is async
    return new Promise((resolve, reject) => {
        console.log(`In the promise, strval is ${strval}`);
        let reversedStringLength = strval.split('').reverse().join('').length;
        if (reversedStringLength < 8) {
            resolve(strval.length); //end the Promise and call the resolve function
        } else {
            reject('String is too long');
        }
    });
};

//let foo = stringLength('this is my string') //foo is just a promise.,.,.,
//call the promise, and then call its 'then' function

stringLength('this')
    .then(
        value => {
        console.log(`My string had length ${value}`); //this is the 'resolve' function
    },
    error => {
        console.log(error);
    })
    .finally(_ => { //executed after the Promise settles
        console.log(`Operation complete`);
    })
console.log('end');

