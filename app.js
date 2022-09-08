const Reader = require('./class/Reader');
const Writer = require('./class//Writer')
const PDFCreate = require('./class/PDFCreate')
const Processor = require('./class/Processor')
const Table = require('./class/Table')
const HtmlParser = require('./class/HtmlParser')

var reader = new Reader();
var writer = new Writer();

async function main() {
    var data = await reader.Read('./example.csv');
    
    var processData = Processor.Process(data);
    
    var table = new Table(processData);

    var html = await HtmlParser.Parse(table);

    writer.CreatePath('./HTML-Converted!');

    await writer.Write(`./HTML-Converted!/${Date.now()}.html` , html);
    PDFCreate.CreatePDF(`./PDF-Converted!/${Date.now()}.PDF` , html);
}

main();