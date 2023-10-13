const express = require('express');
const router = express.Router(); 
const employeesController = require('../../controllers/employeesController')
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

// Chained each http method together and placed on the same route
router.route('/')
    // Run middleware authentication before allowing get to access employeesController
    .get(employeesController.getAllEmployees)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeesController.createNewEmployee)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeesController.updateEmployee)
    .delete(verifyRoles(ROLES_LIST.Admin), employeesController.deleteEmployee);

// Example of a get request with a parameter inside of the URL
router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;
