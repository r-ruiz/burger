//Set up use cases for DB requets
// =============================================================

var connection = require("./connection.js");

var orm = {
    selectAll: function(cb){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(burger, cb){
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    },
    
    updateOne: function(id, cb){
        var queryString = "UPDATE burgers SET devoured = TRUE WHERE id = ?";
        connection.query(queryString, [id], function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    }
};

//export orm for use
// =============================================================
module.exports = orm;