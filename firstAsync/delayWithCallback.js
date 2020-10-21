const delay = (timeout, callback) => {
    setTimeout(
        () => {
            console.log(`Inside handler`);
            let foo = 42;
            callback(foo);
        },
        timeout
    );
}

console.log(`Starting...`)

delay(
    4000,
    value => {
        console.log(`Value of foo is: ${value}`)
    }
);
console.log(`Done`)
