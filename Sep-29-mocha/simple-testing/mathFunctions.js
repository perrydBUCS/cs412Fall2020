//Pretty much every file is=n JS is a 'module'
const addNums = (left, right) => {
    return (right === null) ? null : left + right;
}

const subNums = (left, right) => left - right;

const divideNums = (left, right) => left / right; //not visible outside the file

const PI = 3.14159;

module.exports = {addNums, subNums, PI} //these three things are visible
