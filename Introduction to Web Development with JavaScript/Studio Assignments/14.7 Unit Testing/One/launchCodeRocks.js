function launchOutput(num) {
    if (num % 2 === 0) {
        if (num % 3 === 0) {
            if (num % 5 === 0) {
                return 'LaunchCode Rocks!';
            } else {
                return 'LaunchCode!';
            }
        } else if (num % 5 === 0) {
            return 'CodeRocks!';
        } else {
            return 'Launch!';
        }
    }

    if (num % 3 === 0) {
        if (num % 5 === 0) {
            return 'Code Rocks!'
        } else {
            return 'Code!'
        }
    }

    if (num % 5 === 0) {
        return 'Rocks!';
    }

    if ((num % 2 !== 0) && (num % 3 !== 0) && (num % 5 !== 0)) {
        return "Rutabagas! That doesn't work.";
    }
}

module.exports = launchOutput;