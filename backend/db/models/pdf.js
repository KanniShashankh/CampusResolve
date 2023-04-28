const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var PdfModel = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user",
      },
    pdfMetadata : { type: Blob, required: true },
},{ timestamps: true })


module.exports = mongoose.model("pdfBlob", PdfModel);