const launchOutput = require('../launchCodeRocks.js');
const assert = require('assert');

describe("launchOutput", function() {

    it("should return 'Launch!' when a number divisible by 2 is entered", function() {
        let output = launchOutput(4);
        assert.strictEqual(output, "Launch!");
    });

    it("should return 'Code!' when a number divisible by 3 is entered", function() {
        let output = launchOutput(9);
        assert.strictEqual(output, "Code!");
    });

    it("should return 'Rocks!' when a number divisible by 5 is entered", function() {
        let output = launchOutput(25);
        assert.strictEqual(output, "Rocks!");
    });

    it("should return 'LaunchCode!' when a number divisible by 2 and 3 is entered", function() {
        let output = launchOutput(6);
        assert.strictEqual(output, "LaunchCode!");
    });

    it("should return 'CodeRocks!' when a number divisible by 2 and 5 is entered", function() {
        let output = launchOutput(10);
        assert.strictEqual(output, "CodeRocks!");
    });

    it("should return 'LaunchCode Rocks!' when a number divisible by 2, 3 and 5 is entered", function() {
        let output = launchOutput(30);
        assert.strictEqual(output, "LaunchCode Rocks!");
    });

    it("should return 'Rutabagas! That doesn't work.' when a number that is not divisible by 2, 3 or 5 is entered", function() {
        let output = launchOutput(1);
        assert.strictEqual(output, "Rutabagas! That doesn't work.");
    });

});