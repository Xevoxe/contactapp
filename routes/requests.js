const express = require('express');
const router = express.Router();
const request = require('../controllers/request');

//Retreive all contacts
router.route('/:id?')
.post(request.post);
    
module.exports = router;