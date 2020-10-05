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

// Level 5
// There is a type in the string being returned, find it and fix it...
function findAndFixTheTypo(){
    return "good day kind sir my name is steve and I habe an offer for you on this fine day!";
}

// Level 6
// Take the input string and reverse it...
function reverseTheString(input){
    return "";
}

module.exports = {
    helloName,
    helloWorld,
    helloWorldFromArray,
    doStuffWithVariable,
    findAndFixTheTypo,
    reverseTheString,
};
