const checkFive = require('../checkFive.js');
const assert = require('assert');

describe("checkFive", function() {

    it("should return the input is less than 5", function() {
        let output = checkFive(2);
        assert.strictEqual(output, "2 is less than 5.");
    });

    it("should return the input is equal to 5", function() {
        let output = checkFive(5);
        assert.strictEqual(output, "5 is equal to 5.");
    });

    it("should return the input is greater than 5", function() {
        let output = checkFive(10);
        assert.strictEqual(output, "10 is greater than 5.");
    });

});