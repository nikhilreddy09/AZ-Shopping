const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const listSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

const List = mongoose.model('List', listSchema)

module.exports = List