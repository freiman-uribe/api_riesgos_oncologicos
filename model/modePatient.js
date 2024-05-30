const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    risk: {type: String, required: true}
})

const Patient = mongoose.model('Patient', PatientSchema)

module.exports = Patient