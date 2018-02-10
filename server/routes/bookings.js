var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");

var db = mongojs("mongodb://pooladmin:pool01user@ds131698.mlab.com:31698/pool", ["bookings"]);

router.get("/bookings", function(req, res, next){
    db.bookings.find(function(err,bookings){
        if(err){
            res.send(err);
        }
        res.json(bookings);
    })
});

module.exports = router;