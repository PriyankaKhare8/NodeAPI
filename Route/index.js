var employeeController = require('../Controller/employeeController');

module.exports = (app) => {

    app.route('/getAllEmployeeDetails').get(employeeController.getEmployees);

    app.route('/AddEmployeeDetails').post(employeeController.AddEmployee);

    app.route('/deleteEmployeeDetails').delete(employeeController.deleteEmployee);

}
