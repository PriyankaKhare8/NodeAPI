const crypto = require('crypto');

const { json } = require("express");
var fs = require("fs");

module.exports = {

    //Get employee list
    getEmployees() {
        return new Promise((resolve, reject) => {
            fs.readFile(__dirname + "/" + "employeeData.json", 'utf8', function (err, data) {
                console.log(data);
                resolve(data)
            });
        }).catch((err) => {
            reject(err);
        });

    },

    //Add employee details
    addEmployee: (name, profession, location, contact, emailId, id, cb) => {

        var obj = [];
        return new Promise((resolve, reject) => {

            if (name != '' || name != null && profession != '' || profession != null) {
                var json = JSON.stringify(obj);

                fs.readFile(__dirname + "/" + "employeeData.json", 'utf8', function readFileCallback(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        obj = JSON.parse(data); //now it an object
                        obj.push({
                            name: name,
                            profession: profession,
                            location: location,
                            contact: contact,
                            emailId: emailId,
                            id: id

                        }); //add some data
                        json = JSON.stringify(obj); //convert it back to json
                        fs.writeFile(__dirname + "/" + "employeeData.json", json, 'utf8', function cb() {

                            resolve(true);
                        });
                    }
                });

                resolve(true);
            }
            else {
                reject(true);
            }

        })

    },

    // Remove employee
    deleteEmployee: (employeeId) => {
        return new Promise((resolve, reject) => {
            if (employeeId != '' || employeeId != null || employeeId != undefined || employeeId != 'undefined') {


                fs.readFile(__dirname + "/" + "employeeData.json", 'utf8', function (err, data) {

                    var json = JSON.parse(data);

                    json = json.filter((user) => { return user.id !== parseInt(employeeId) });

                    const jsonContent = JSON.stringify(json);

                    fs.writeFile(__dirname + "/" + "employeeData.json", jsonContent, 'utf8', function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        resolve(true)
                        console.log("The file was saved!");
                    });
                });

            }
            else {
                reject(true);
            }


        });
    }

}