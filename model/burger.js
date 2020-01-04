const orm = require('../config/orm');

module.exports = {
    findAll: function (callback) {
        orm.findAll("burgers", callback)
    },
   
    InsertOne: function (cols, vals, cb) {
        orm.InsertOne("burgers", cols, vals, function (res) {
            cb(res)
        })
    },

    UpdateOne: function (objColVals, condition, cb) {
        orm.UpdateOne("burgers", objColVals, condition, function (res) {
            cb(res)
        })
    }


}