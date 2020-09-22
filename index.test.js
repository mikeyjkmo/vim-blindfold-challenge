const { helloWorld, helloWorldFromArray } = require('./index');
const { expect } = require('chai');

describe('Vim blindfold challenge tests', () => {
  it('helloWorld', () => {
    expect(helloWorld()).to.equal("hello world");
  });

  it('helloWorldFromArray', () => {
    expect(helloWorldFromArray()).to.equal("hello world");
  });
});
