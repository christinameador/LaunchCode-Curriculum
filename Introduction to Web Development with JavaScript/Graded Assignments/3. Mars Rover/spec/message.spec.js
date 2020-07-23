const assert = require('assert');
const Message = require('../message.js');

describe("Message class", function() {
    it("throws error if name NOT passed into constructor", function() {
        assert.throws(
            function() {
                new Message();
            }, {
                message: 'Name required'
            }
        );
    });
});

describe("constructor sets name", function() {
    it("constructor in the Message class correctly sets the name property to a new message object", function() {
        let object = new Message('first Object');
        assert.strictEqual(object.name, 'first Object');
    });
});

describe("second argument", function() {
    it("contains commands passed into constructor as 2nd argument", function() {
        let secondObject = new Message('second Object', 'commands');
        assert.strictEqual(secondObject.commands, 'commands');
    });
});