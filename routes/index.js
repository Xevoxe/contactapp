const express = require('express');
const requestRouter = require('./requests');


const router = express.Router();

router.use('/requests',requestRouter);



module.exports = router;