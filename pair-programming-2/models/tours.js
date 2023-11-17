const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tourSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Tour', tourSchema)
