// Finding characters that are not inside the brackets

let text = "Is this all there is?";
let pattern2 = /[^s]/g;
let result2 = text.match(pattern2);
console.log(result2);