//const math = require('mathFunctions'); //in node_modules, used for external dependencies
const math = require('./mathFunctions'); // in local folder
const {PI} = require('./mathFunctions'); // uses destructuring, name has to match
//const mathWithExp = require('./mathFunctionsWithExportStatements');

let foo = math.subNums(44, 2)
console.log(`foo = ${foo} and ${PII}`);
