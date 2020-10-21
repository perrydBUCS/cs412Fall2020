//This will execute a delay
const delay = _ => {
    setTimeout(
        () => {
            console.log(`NOT returning the value`);
            let foo = 42;
            console.log(`foo is now: ${foo}`)

        },
        2000
    );
}

//JS does not wait.
//JS has ONE main thread of execution
console.log(`Starting...`)
// let returnedValue = delay();
// console.log(`Received: ${returnedValue}`)
// delay();
// delay();
// console.log(`After a lengthy delay: ${returnedValue}`)

delay();

//CLOSURE -> everything you need to complete
