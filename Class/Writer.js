const fs = require('fs');
const util = require('util');

class Writer{
    constructor() {
        this.write = util.promisify(fs.writeFile);
    }

    CreatePath(path){
        fs.promises.mkdir(path, { recursive: true }).catch(console.error);
    }

    async Write(filename, data) {
        try {
            await this.write(filename, data);
            return console.log('Html create successfully');
        } catch (e) {
            return console.log('Html create failed')
        }
    }
}

module.exports = Writer;