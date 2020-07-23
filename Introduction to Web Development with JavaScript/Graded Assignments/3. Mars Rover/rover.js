class Rover {
    constructor(position) {
        this.position = position;
        this.mode = 'NORMAL';
        this.generatorWatts = 110;
        this.completed = true;
    }
    receiveMessage(firstMessage, secondMessage = '0') {
        if (firstMessage === 'MOVE') {
            if (secondMessage === 'LOW_POWER') {
                this.completed = false;
            }
            return { completed: this.completed, position: this.position };
        } else if (firstMessage === 'STATUS_CHECK') {
            return { completed: this.completed, mode: this.mode, generatorWatts: this.generatorWatts, position: this.position };
        } else if (firstMessage === 'MODE_CHANGE') {
            this.mode = secondMessage;
            return { completed: this.completed };
        }
    }
}

module.exports = Rover;