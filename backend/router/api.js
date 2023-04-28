
var express = require('express')
var router = express.Router()

// Add API Routes here

const test = (req, res, next) => {
    next();
}

router.get('/test', test, (req, res) => {
    res.status(200).json({
        message: 'Hello World!',
        data : "sucess"
    })
})
module.exports = router;
