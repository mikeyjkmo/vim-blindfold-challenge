/*
 *
 * This is the BLINDFOLD VIM CHALLENGE - how well do you Vim?
 *
 */

// Level 1
// Return "hello world"
function helloWorld() {
}

// Level 2
// Return `hello ${name}`
function helloName(name) {
  return "hello";
}

// Level 3
// Return "hello world"
function helloWorldFromArray() {
  return ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'l', 'd'].join("");
}

// Level 4
// Fix this function
function doStuffWithVariable(variable) {
  let a = wrongVariable + 1;
  let b = wrongVariable + 2;
  let c = wrongVariable + 3;
  return a + b + c;
}

module.exports = {
  helloName,
  helloWorld,
  helloWorldFromArray,
  doStuffWithVariable,
};
