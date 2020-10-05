const {
    helloWorld,
    helloName,
    helloWorldFromArray,
    doStuffWithVariable,
    findAndFixTheTypo,
    reverseTheString,
} = require('./index');
const { expect } = require('chai');

describe('Vim blindfold challenge tests', () => {
    it('helloWorld', () => {
        expect(helloWorld()).to.equal("hello world");
    });

    it('helloName', () => {
        expect(helloName("bob")).to.equal("hello bob");
    });

    it('helloWorldFromArray', () => {
        expect(helloWorldFromArray()).to.equal("hello world");
    });

    it('doStuffWithVariable', () => {
        expect(doStuffWithVariable(2)).to.equal(12);
    });

    it('findAndFixTheTypo', () => {
        expect(findAndFixTheTypo()).to.equal("good day kind sir my name is steve and I have an offer for you on this fine day!");
    });

    it('reverseTheString', () => {
        expect(reverseTheString("hats")).to.equal("stah");
    });
});
