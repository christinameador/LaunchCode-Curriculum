const assert = require('assert');
const Rover = require('../rover.js');

describe("default values", function() {
    it("constructor sets position and default values for mode and generatorWatts", function() {
        let firstObject = new Rover(11);
        assert.strictEqual(firstObject.mode, 'NORMAL');
        assert.strictEqual(firstObject.generatorWatts, 110);
    });
});

describe("name of message", function() {
    it("response returned by receiveMessage contains name of message", function() {
        let secondObject = new Rover(12);
        let secondVariable = secondObject.receiveMessage('MOVE');
        expect(secondVariable).toEqual({ completed: true, position: 12 });
    });
});

describe("two results/two commands", function() {
    it("response returned by receiveMessage includes two results, if two commands are sent in message", function() {
        let thirdObject = new Rover(13);
        let thirdVariable = thirdObject.receiveMessage('MODE_CHANGE', 'LOW_POWER');
        expect(thirdVariable).toEqual({ completed: true });
    });
});

describe("status check", function() {
    it("responds correctly to status check", function() {
        let fourthObject = new Rover(14);
        let fourthVariable = fourthObject.receiveMessage('STATUS_CHECK');
        expect(fourthVariable).toEqual({ completed: true, mode: 'NORMAL', generatorWatts: 110, position: 14 });
    });
});

describe("MODE_CHANGE correct status", function() {
    it("responds with correct status after MODE_CHANGE", function() {
        let fifthObject = new Rover(15);
        let fifthVariable = fifthObject.receiveMessage('MODE_CHANGE', 'LOW_POWER');
        expect(fifthVariable).toEqual({ completed: true });
    });
});

describe("LOW_POWER restriction", function() {
    it("responds with false completed value, if attempt to move while in LOW_POWER mode", function() {
        let sixthObject = new Rover(16);
        let sixthVariable = sixthObject.receiveMessage('MOVE', 'LOW_POWER');
        expect(sixthVariable).toEqual({ completed: false, position: 16 });
    });
});

describe("MOVE command position", function() {
    it("responds with position for move command", function() {
        let seventhObject = new Rover(17);
        let seventhVariable = seventhObject.receiveMessage('MOVE');
        expect(seventhVariable).toEqual({ completed: true, position: 17 })
    });
});