/*
     _____                          _ _
    |_   _| __ __ _ _ __  ___ _ __ (_) | ___
      | || '__/ _` | '_ \/ __| '_ \| | |/ _ \
      | || | | (_| | | | \__ \ |_) | | |  __/
      |_||_|  \__,_|_| |_|___/ .__/|_|_|\___|
                             |_|

    Purpose:

        Transpile a handlebars generated set of JS
 */

const fs = require('fs');

module.exports = {

    transpile(filename) {
        if (!fs.existsSync(filename)) {
            throw new Error("File does not exist: " + filename);
        }

        const contents = fs.readFileSync(filename);
        const lines = contents.toString().split("\n");
        // remove first and last line
        lines.shift();
        lines.pop();

        lines.unshift(`import Handlebars from 'handlebars/runtime.js';`);

        console.log(lines.join("\n"));

    }

}


