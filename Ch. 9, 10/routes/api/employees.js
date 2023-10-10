const express = require('express');
const router = express.Router(); 
const employeesController = require('../../controllers/employeesController')

// Chained each http method together and placed on the same route
router.route('/')
    .get(employeesController.getAllEmployees)
    .post(employeesController.createNewEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee);

// Example of a get request with a parameter inside of the URL
router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;
