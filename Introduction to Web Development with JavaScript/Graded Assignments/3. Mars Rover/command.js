class Command {
    constructor(commandType, value) {
        this.commandType = commandType;
        if (commandType !== 'MODE_CHANGE' || commandType !== 'MOVE') {
            throw Error('Invalid type');
        }
        this.value = value;
    }
}

module.exports = Command;