const router = require('express').Router();



// Import the model (cat.js) to use its database functions.
var burger = require("../model/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.SelectAll(function (data) {
      var hbsObject = {
          burgers: data
      }
      console.log(hbsObject)
      res.render("index", hbsObject)
  })
})

router.post("/", function (req, res) {
  burger.InsertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function (result) {
      //Send back the ID
      console.log(result)
      res.json({ id: result.insertId })
  })
})

router.put("/:id", function(req, res){
  var condition = "id = " + req.params.id

  console.log("condition", condition)

  burger.UpdateOne(
      {
          devoured: req.body.devoured
      },
      condition,
      function(result) {
          if (result.changedRows === 0){
              //if zero, ID must not exist
              return res.status(404).end()
          }
          res.status(200).end()
      }

  )
})


// Export routes for server.js to use.
module.exports = router;


