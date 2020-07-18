// Question One
let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.
console.log(dna);

//a) Use the .trim() method to remove the leading and trailing whitespace, then print the result.
let newDna = dna.trim();
console.log(newDna);

//b) Change all of the letters in the dna string to UPPERCASE, then print the result.
let uppercaseDna = newDna.toUpperCase();
console.log(uppercaseDna);

//c) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.
dna = uppercaseDna;
console.log(dna);

// Question Two
let dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//a) Replace the gene "GCT" with "AGG", and then print the altered strand.
let replacedDna = dna.replace("GCT", "AGG");
console.log(replacedDna);

//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
if (replacedDna.indexOf("CAT")) {
    console.log("CAT gene found");
} else {
    console.log("CAT gene NOT found");
}

//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
let slicedDna = replacedDna.slice(16, 19);
console.log(slicedDna);

//d) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dna.length} characters long.`);

//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
let tacoCatDna = dna.slice(4, 7) + "O" + dna.slice(40, 43);
console.log(tacoCatDna);