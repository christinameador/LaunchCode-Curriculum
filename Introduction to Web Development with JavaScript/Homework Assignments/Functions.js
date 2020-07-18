// Rectangles
// 1. Write a function makeLine(size) that returns a line with exactly size hashes.
function makeLine(size) {
    let hashline = '';
    for (let i = 0; i < size; i++) {
        hashline += "#";
    }
    return hashline;
}

console.log(makeLine(5));

// 2. Write a function makeSquare(size) that returns an size by size square of hashes. Use your makeLine function to do this.
// function makeSquare(size) {
//   let hashSquare = '';
//   for (let height = 0; height<size; height++) {
//     if (height == size-1) {
//       hashSquare += (makeLine(size));
//     } else {
//       hashSquare += (makeLine(size) + '\n');
//     }
//   }
//   return hashSquare;
// }

// console.log(makeSquare(5));

// 3. Write a function makeRectangle(width, height) that returns a rectangle with the given width and height. Use your makeLine function to do this.
function makeRectangle(width, height) {
    let hashRectangle = '';
    for (let rHeight = 0; rHeight < height; rHeight++) {
        if (rHeight == height - 1) {
            hashRectangle += (makeLine(width));
        } else {
            hashRectangle += (makeLine(width) + '\n');
        }
    }
    return hashRectangle;
}

console.log(makeRectangle(3, 5));

// 4. Now, go back and rewrite makeSquare to use makeRectangle.
function makeSquare(size) {
    return makeRectangle(size, size);
}

console.log(makeSquare(5));

// Triangles
// 1. Write a function makeDownwardStairs(height) that prints the staircase pattern shown below, with the given height. Use your makeLine function to do this.
function makeDownwardStairs(height) {
    let hashStairs = '';
    for (let i = 1; i <= height; i++) {
        if (i == height) {
            hashStairs += (makeLine(i));
        } else {
            hashStairs += (makeLine(i) + '\n');
        }
    }
    return hashStairs;
}

console.log(makeDownwardStairs(5));

// 2. Write a function makeSpaceLine(numSpaces, numChars) that returns a line with exactly the specified number of spaces, followed by the specified number of hashes, followed again by numSpaces more spaces.
function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = '';
    for (let j = 0; j < numSpaces; j++) {
        spaceLine += ' ';
    }
    return spaceLine + makeLine(numChars) + spaceLine;
}

console.log(makeSpaceLine(3, 5));

// 3. Write a function makeIsoscelesTriangle(height) that returns a triangle of the given height.
function makeIsoscelesTriangle(height) {
    let counter = height;
    height = height * 2;
    let isoTriangle = '';
    for (let k = 0; k <= height; k++) {
        if (k % 2 == 1) {
            isoTriangle += (makeSpaceLine(counter, k) + '\n');
            counter--;
        }
    }
    return isoTriangle;
}

console.log(makeIsoscelesTriangle(5));

// Diamonds
// 1. Write a function makeDiamond(height) that returns a diamond where the triangle formed by the top portion has the given height.
function makeDiamond(height) {
    let hashDiamond = '';
    let topHalf = makeIsoscelesTriangle(height);
    let bottomHalf = '';
    let counter = 2;
    for (let l = height + 2; l >= 0; l--) {
        if (l % 2 == 1) {
            bottomHalf += (makeSpaceLine(counter, l) + '\n');
            counter++;
        }
    }
    return topHalf + bottomHalf;
}

console.log(makeDiamond(5));

// Bonus Mission
// Refactor your functions so that they take a single character as a parameter, and draw the shapes with that character instead of always using '#'. Make the new parameter optional, with default value '#'.