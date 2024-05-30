const express = require('express')
const router = express.Router()

const Patient = require('../model/modePatient')


router.get('/', async (req, res)=> {
    try {
        const result =  await Patient.find();
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send('🚀 ~ router.get ~ error:', error)  
    }
});

router.post('/byID', async (req, res)=> {
    try {
        const {patientID} = req.body;
        const result =  await Patient.findOne({_id: patientID });
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send('🚀 ~ router.get ~ error:', error)  
    }
});

router.post('/', async (req, res)=> {
    try {
        const {code, name, description, risk} = req.body
        const newPatient = new Patient({
            code,
            name,
            description,
            risk
        })
        const result =  await newPatient.save();
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send('🚀 ~ router.get ~ error:', error)  
    }
});

module.exports = router;