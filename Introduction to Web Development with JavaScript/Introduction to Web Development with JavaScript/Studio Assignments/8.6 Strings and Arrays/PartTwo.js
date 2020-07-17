let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

//Pt. 1
console.log(protoArray1.split(',').reverse().join(','));
//Pt. 2
console.log(protoArray2.split(';').sort().join('-'));
//Pt. 3
console.log(protoArray3.split(' ').sort().reverse().join(' '));
//Pt. 4
console.log(protoArray4.split(', ').reverse().join(','));