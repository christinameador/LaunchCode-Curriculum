const whoWon = require('../RPS.js');
const assert = require('assert');

describe("whoWon", function() {

    it("should return 'TIE' when two inputs are equal", function() {
        let output = whoWon('rock', 'rock');
        assert.strictEqual(output, 'TIE!');
    });

    it("should return 'Player 2 wins!' when first input is 'scissors' and second input is 'rock'", function() {
        let output = whoWon('scissors', 'rock');
        assert.strictEqual(output, 'Player 2 wins!');
    });

    it("should return 'Player 2 wins!' when first input is 'paper' and second input is 'scissors'", function() {
        let output = whoWon('paper', 'scissors');
        assert.strictEqual(output, 'Player 2 wins!');
    });

    it("should return 'Player 2 wins!' when first input is 'scissors' and second input is 'rock'", function() {
        let output = whoWon('scissors', 'rock');
        assert.strictEqual(output, 'Player 2 wins!');
    });

    // it("should return 'Invalid Input' when first input is 'paper' and second input is 'hello'", function(){
    //   let output = whoWon('paper', 'hello');
    //   assert.strictEqual(output, 'Invalid Input');
    // });

});