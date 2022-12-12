
module.exports = {

    //Get all employee list
    getEmployees: (req, res, next) => {

        let employeeModule = require('../Module/employeeModule');

        employeeModule.getEmployees().then((result) => {
            res.send(result);

        }).catch((err) => {
            res.send(err);
        });

    },


    //Add employee
    AddEmployee: (req, res, next) => {

        let name = req.body.name;
        let location = req.body.location;
        let profession = req.body.profession;
        let contact = req.body.contact;
        let emailId = req.body.emailId;
        let id = parseInt(req.body.id);


        let employeeModule = require('../Module/employeeModule');

        employeeModule.addEmployee(name, profession, location, contact, emailId, id).then((result) => {
            res.send("Data Added Successfully");


        }).catch((err) => {
            res.send(err);
        });

    },

    //Remove employee details
    deleteEmployee: (req, res, next) => {

        let employeeId = req.query.id;

        let employeeModule = require('../Module/employeeModule');

        employeeModule.deleteEmployee(employeeId).then((result) => {
            res.send(result);

        }).catch((err) => {
            res.send(err);
        });

    },

}