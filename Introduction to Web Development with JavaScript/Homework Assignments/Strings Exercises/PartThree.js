// Question One
let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
let stringConcat = language.slice(0, 1) + language.slice(4, 5);
console.log(stringConcat);

//b) Without using .slice(), use method chaining to accomplish the same thing.
let methodChained = language.replace("a", "S").substr(0, 2);
console.log(methodChained);

//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for '${language}' is '${language[0]}${language[4]}'.`);

//d) Just for fun, try chaining 3 or more methods together, and then print the result.
let forFun = language.substring(0, 4).toUpperCase().concat(" is not JavaScript");
console.log(forFun);

// Question Two
/* Some programming languages (like Python) include a "title" method to return a string with Every Word Capitalized (e.g. 'title case'.title() returns 'Title Case').  

JavaScript has no .title method, but that won't stop us!  Use the string methods you know to print 'Title Case' from 'title case'. */

let notTitle = 'title case';
let titleCase = notTitle.split('');
titleCase[0] = titleCase[0].toUpperCase();
if (titleCase.includes(' ')) {
    titleCase[titleCase.indexOf(' ') + 1] = titleCase[titleCase.indexOf(' ') + 1].toUpperCase();
}
titleCase = titleCase.join('');

console.log(titleCase)