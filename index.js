const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const connectDB = require('./config/connectMongo');
connectDB();

const patientRoutes = require('./routes/patient');
const riskRoutes = require('./routes/risks');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/patients', patientRoutes)
app.use('/risks', riskRoutes)

const PORT = process.env.PORT || 3000
console.log('🚀 ~  process.env.PORT:',  process.env.PORT)

app.listen(PORT, ()=> console.log(`Runing in port http://localhost:${PORT}`))