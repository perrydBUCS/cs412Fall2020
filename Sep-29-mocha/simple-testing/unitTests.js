const {addNums, subNums} = require('./mathFunctions'); // in local folder
//1. install mocha and chai with npm install
//2. Write the tests

const {describe, it} = require('mocha');
const {expect} = require('chai');

describe('Really simple test', () => {
    console.log(`Doesn't do much except print`);
})

describe('High level addition tests', () => {
    it('should return 42 when passed 40 and 2', () => {
        let sum = addNums(40, 2);
        expect(sum).to.be.equal(42);
//        expect(sum).equal(42);
    });
    it('should return 42 when passed 2 and 40', () => {
        let sum = addNums(2, 40);
        expect(sum).to.be.equal(42);

    });
    it('should return a Number type', () => {
        let sum = addNums(2, 40);
        expect(sum).to.be.not.NaN;
    })
})

const foo = {
    name: 'Perry',
    department: 'BUCS'
}

describe('High level object tests', () => {

    it('should have a property named department', () => {
        expect(foo).to.have.property('department');
        expect(foo.department).to.be.equal('BUC');
    })
})

