//Pretty much every file is=n JS is a 'module'
export const addNums = (left, right) => { //this is a feature we can use in Angular, apparently not in 14.6.0 of Node

    return (right === null) ? null : left + right;
}

export const subNums = (left, right) => left - right;

const divideNums = (left, right) => left / right; //not visible outside the file

export const PI = 3.14159;

//uses export on individual items
