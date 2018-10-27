const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type:String,required:true},
    tele: {type: Number, required: true},
    addr_street1: {type: String, required: true},
    addr_street2: String,
    addr_state: {type: String, required: true},
    addr_zip: {type: Number, required:true},
    service_id: {type: String}
});

let Requests = mongoose.model('Request', requestSchema);

module.exports = Requests;