const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BookingSchema = new Schema({
    items: {
        type: Array,
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

const Booking = mongoose.model('Booking', BookingSchema)

module.exports = Booking