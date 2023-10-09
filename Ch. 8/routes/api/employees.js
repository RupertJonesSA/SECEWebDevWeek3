const express = require('express');
const router = express.Router(); 
const data = {}; 
data.employees = require('../../data/employees.json');

// Chained each http method together and placed on the same route
router.route('/')
    .get((req, res) => {
        res.json(data.employees);
    })
    .post((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        });
    })
    .put((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        });
    })
    .delete((req, res) => {
        res.json({"id": req.body.id})
    });
// Example of a get request with a parameter inside of the URL
router.route('/:id')
    .get((req, res) => {
        res.json({"id":req.params.id});
    });

module.exports = router;
