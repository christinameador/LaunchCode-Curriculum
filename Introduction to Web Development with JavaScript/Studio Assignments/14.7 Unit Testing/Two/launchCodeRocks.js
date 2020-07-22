function launchOutput(entry) {
    if (entry % 2 === 0) {
        if (entry % 3 === 0) {
            if (entry % 5 === 0) {
                return 'LaunchCode Rocks!';
            } else {
                return 'LaunchCode!';
            }
        } else if (entry % 5 === 0) {
            return 'CodeRocks!';
        } else {
            return 'Launch!';
        }
    }

    if (entry % 3 === 0) {
        if (entry % 5 === 0) {
            return 'Code Rocks!'
        } else {
            return 'Code!'
        }
    }

    if (entry % 5 === 0) {
        return 'Rocks!';
    }

    if ((entry % 2 !== 0) && (entry % 3 !== 0) && (entry % 5 !== 0)) {
        return "Rutabagas! That doesn't work.";
    }
}

module.exports = launchOutput;