const router = require('express').Router();
const Burgers = require('../model/burger');

router.get("/", function (req, res) {
    Burgers.findAll(function (err, data) {
        if (err) throw err;

        console.log(data)

        res.render('pages/index')
    })

})
// router.post("/", function (req, res) {
//     Burgers.create(req.body.burger_name, function (err, data) {
//         if (err) throw err;

//         console.log(data)

//         res.render('pages/index')
//     })

// })

router.get("/name/:name", function (req, res) {
    Burgers.findByName(req.params.name, function (err, data) {
        if (err) throw err;

        console.log(data)

        res.render('pages/index')
    })
})

router.get("/id/:id", function (req, res) {
    Burgers.findById(req.params.id, function (err, data) {
        if (err) throw err;

        console.log(data)

        res.render('pages/index')
    })
})

module.exports = router;