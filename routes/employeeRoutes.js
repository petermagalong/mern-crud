const express = require('express');
const Router = express.Router();
const Employees = require('../models/employeeModel');

function add(a,b){
    return(a+b)
}
//get the employee records from the database
Router.get('/', async (req, res) => {
    await Employees
    .find()
    .then(employees => res.json(employees));
});
//posts a single empoyee to the database
Router.post('/', (req, res) => {
    const  { name, position, email, phone } = req.body;

    const newEmployee = new Employees({
        name: name,
        position: position,
        email: email,
        phone: phone,
    });

    newEmployee
        .save()
        .then((employee) => res.json({ employee }))
        .catch((err) => res.json({ success: false}));
});
// delete a single employee from the database
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Employees
     .findById(id)
     .then((employee) => employee.remove().then(() => res.json({ success: true })))
     .catch((err) => res.json({ success: true }));
});

module.exports = Router;