/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

 /*
 O - boolean
 I - a string
 C - will ignore non bracket text
 E - string is empty then it should return true
 */

var balancedParens = function(input) {
    var opening = [];
    var closing = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    for (var i = 0; i < input.length; i++) {
        if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
            opening.push(input[i]);
        } else if (input[i] === ')' || input[i] === '}' || input[i] === ']') {
            if (opening[opening.length - 1] === closing[input[i]]) {
                opening.pop()
            } else {
                return false;
            }
        }
    }
    if (opening.length > 0) {
        return false;
    }

    return true;
};

//////////////////////////
//        Tests         //
//////////////////////////

var assertEquals = function(actual, expected, testnumber) {
    if (actual === expected) {
        console.log(testnumber, ': passed');
    } else {
        console.log('test'+ testnumber, ': failed. Expected ' + actual + ' to equal ' + expected)
    }
}

var test1 = balancedParens('(');  // false
var test2 = balancedParens('()'); // true
var test3 = balancedParens(')(');  // false
var test4 = balancedParens('(())');  // true
// Step 2:
//   make your solution work for all types of brackets
var test5 = balancedParens('[](){}'); // true
var test6 = balancedParens('[({})]');   // true
var test7 = balancedParens('[(]{)}'); // false
// Step 3:
// ignore non-bracket characters
var test8 = balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
var test9 = balancedParens(' var hubble = function() { telescopes.awesome();'); // false

//test if empty
var test10 = balancedParens(''); // true

assertEquals(test1, false, 1);
assertEquals(test2, true, 2);
assertEquals(test3, false, 3);
assertEquals(test4, true, 4);

assertEquals(test5, true, 5);
assertEquals(test6, true, 6);
assertEquals(test7, false, 7);

assertEquals(test8, true, 8);
assertEquals(test9, false, 9);
assertEquals(test10, true, 10);