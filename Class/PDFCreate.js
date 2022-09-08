const pdf = require('html-pdf');

class PDFCreate {
    static CreatePDF (filename, html) {
        pdf.create(html,{}).toFile(filename, (err, res) => {
            if (err) {
                console.log('PDF create Failed! '+ err);
            } else {
                console.log('PDF create Success!')
            }
        })
    }     
}

module.exports = PDFCreate;