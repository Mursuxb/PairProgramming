const mongoose = require('mongoose')

const Schema = mongoose.Schema

const serviceSchema = new Schema({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Service', serviceSchema)
