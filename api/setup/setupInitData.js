var moment = require('moment');
var User = require('../models/userModel');
var currentUTC = moment().utc().toDate();


// Populate the initial data
exports.setupInitData = function(req, res) {

    User.collection.drop(function(error) {

        var adminUser = new User({
            "firstName": "Admin",
            "lastName": "PowerUser",
            "userName": "admin",
            "userPwd": "1234",
            "userEmails": [{
                "desc": "work",
                "email": "admin.puser@gmail.com"
            }, {
                "desc": "home",
                "email": "admin.puser@gmail.com"
            }],
            "userPhones": [{
                "desc": "mobile",
                "number": "0989898987"
            }, {
                "desc": "home",
                "number": "020000000"
            }],
            "authRules": {
                "isAdmin": "true",
                "isWareHouseManager": "true",
                "isDispatcherManager": "true",
                "isAtmTechnician": "true",
                "isAtmVaulter": "true"
            },
            "created": currentUTC
        })

        adminUser.save(function(error) {

            if (error)

                res.json({
                "sucess": false,
                "message": error.errmsg
            });

            else
                res.json({
                    "success": true,
                    "message": "succesfully insert admin user"
                });
        });
    });
};