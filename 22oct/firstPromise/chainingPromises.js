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

stringLength('fred')
    .then(stringLength => {    //.then returns a Promise
        console.log(`RESOLVE: length is ${stringLength}`);
        throw new Error(`there was some problem here`)
        //return (stringLength);
    })
    .then(secondStringLength => {
        console.log(`In second then`);
        return secondStringLength * 2;
    })
    .then(thirdStringLength => {
        console.log(`In third then, value is ${thirdStringLength}`);
    })
    .catch(error => {
        console.log(`Caught an error: ${error.message}`);
    })
    .finally(_ => {
        console.log(`Done!`);
    })

console.log(`End of file`);
