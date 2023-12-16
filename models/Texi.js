const mongoose = require('mongoose')

const TexiSchema = new mongoose.Schema({
  specialName: {type: String, required: true,},
  placeToDeliver: {type: String, required: true,},
  numberPlate: {type: String, required: true,},
  number: {type: Number, required: true,},
  // fa: {type: Boolean, required: true,}
})

module.exports = mongoose.model('Texi', TexiSchema, 'tasks')