const Request = require('../models/request');

function post (req,res,next){
    console.log("Posting");
    console.log(req.body);
    Request.create(req.body)
    .then((request)=>{
        console.log("Creating");
        //handle created item
        res.statusCode = 201;
        res.send(request);
    }, (err)=> next(err))
    .catch((err)=> next(err));
}

module.exports.post = post;