const express = require('express')
const router = express.Router()

const Risk = require('../model/modeRisk')

router.post('/', async (req, res)=> {
    try {
        const {typeRisk, patientId, riskFactor, resultsTest, description} = req.body
        const newRisk = new Risk({
            typeRisk,
            patientId,
            riskFactor,
            resultsTest,
            description
        })
        const result =  await newRisk.save();
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send('🚀 ~ router.get ~ error:', error)  
    }
});


router.post('/byID', async (req, res)=> {
    try {
        const {riskId} = req.body;
        const result =  await Risk.findOne({_id: riskId });
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send('🚀 ~ router.get ~ error:', error)  
    }
});

router.post('/riskPatient', async (req, res)=> {
    try {
        const {patientID} = req.body;
        const result =  await Risk.find({patientId: patientID });
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send('🚀 ~ router.get ~ error:', error)  
    }
});



router.put('/', async (req, res)=> {
    try {
        const {riskId, typeRisk, patientId, riskFactor, resultsTest, description} = req.body;

        const data = {typeRisk, patientId, riskFactor, resultsTest, description}
        const result =  await Risk.findByIdAndUpdate(riskId, data, {new: true} );
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send('🚀 ~ router.get ~ error:', error)  
    }
});

router.delete('/', async (req, res)=> {
    try {
        const {riskId} = req.body;
        const result =  await Risk.findByIdAndDelete(riskId);
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send('🚀 ~ router.get ~ error:', error)  
    }
});

module.exports = router;