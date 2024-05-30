const mongoose = require('mongoose')

const RiskRecordSchema = new mongoose.Schema({
    typeRisk: {type: String, required: true},
    patientId: {type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    riskFactor: {type: String, required: true},
    resultsTest: {type: String, required: true},
    description: {type: String, required: true}
})

const RiskRecord = mongoose.model('RiskRecord', RiskRecordSchema)

module.exports = RiskRecord