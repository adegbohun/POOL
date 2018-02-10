var express = require("express");
var router = express.Router();

router.get("/bookings", function(req, res, next){
    res.send("POOL HOME SCREEN");
});

module.exports = router;