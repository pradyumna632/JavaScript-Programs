// Regular Expression Brackets Examples:

// Finding characters inside the brackets

//It will find all "s" characters inside the text
let text = "Is this all there is?";
let pattern = /[s]/g;
let result = text.match(pattern);
console.log(result);

//It will find characters in between "a" to "m" inside the text
let text2 = "Is this all there is?";
let pattern2 = /[a-m]/gi;
let result2 = text.match(pattern2);
console.log(result2);

//It will find characters in between "A" to "z" inside the text
let text3 = "Is this all there is?";
let pattern3 = /[A-z]/gi;
let result3 = text.match(pattern3);
console.log(result3);

//It will find characters in between "A" to "Z" inside the text
let text4 = "Is this all there is?";
let pattern4 = /[A-Z]/gi;
let result4 = text.match(pattern4);
console.log(result4);

//It will find all "abc" characters inside the text
let text5 = "Is this all there is?";
let pattern5 = /[abc]/g;
let result5 = text.match(pattern5);
console.log(result5);