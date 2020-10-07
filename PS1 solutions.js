const p1 = str => str.split('').sort().reverse().join();

const p2a = ([left, operator, right]) => {
    switch (operator) {
        case '+': return (expression) => Number(left) + Number(right); break;
        case '-': return (expression) => Number(expression.charAt(0)) - Number(expression.charAt(2)); break;
        case '*': return (expression) => Number(expression.charAt(0)) * Number(expression.charAt(2)); break;
        case '/': return (expression) => Number(expression.charAt(0)) / Number(expression.charAt(2)); break;
    }
}
p2a('1+2')()
const p2 = expression => {
    const operator = expression.charAt(1)
    switch (operator) {
        case '+': return (expression) => Number(expression.charAt(0)) + Number(expression.charAt(2)); break;
        case '-': return (expression) => Number(expression.charAt(0)) - Number(expression.charAt(2)); break;
        case '*': return (expression) => Number(expression.charAt(0)) * Number(expression.charAt(2)); break;
        case '/': return (expression) => Number(expression.charAt(0)) / Number(expression.charAt(2)); break;
    }
}

const p3 = (str, func) => func(str)

const p31 = p3('supercalifragilisticexpialidocious',
    str => str.replace(/c/g, "*c").split('*'))

const p32 = str => {

    return {
        originalString: str,
        modifiedString: str.replace(/a/g, 'A'),
        numberReplaced: str.match(/a/g).length,
        length:         str.length
    };
}

console.log(`P1: ${p1('supercalifragilisticexpialidocious')}`);
const p21 = p2('5*6')
console.log(`P2: ${p2('4-2')('4-2')}`)
console.log(`P3-1: ${p31}`)
console.log(`P3-2: ${JSON.stringify(p32('supercalifragilisticexpialidocious'),null,2)}`)

