class Processor {
    static Process(data){
        var a = data.split("\r\n");
        var rows = [];
        
        a.forEach(arr => {
            var row = arr.split(',')
            rows.push(row);
        })

        return rows;
    }
}

module.exports = Processor;