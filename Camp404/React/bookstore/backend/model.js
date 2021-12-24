const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        pengarang : {type: String, required: true},
        judul : {type: String, required: true},
        harga : {type: Number, required: true},
        stock : {type: Number, required: true},
    },
    {
        collection: "kolesiBuku"
    }
);

module.exports = mongoose.model("BukuModel", bookSchema);