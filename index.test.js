const {
  helloWorld,
  helloName,
  helloWorldFromArray,
  doStuffWithVariable,
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
});
