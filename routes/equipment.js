var express = require('express');
var router = express.Router();
const models = require('../models')
const bcrypt = require('bcrypt'); 
const checkAuth = require('../checkAuth');
const equipment = require('../models/equipment');


//creat equipment
router.post('/', (req,res) => {
    if(!req.body || !req.body.name|| !req.body.model || !req.body.serial || !req.body.calibration || !req.body.due || !req.body.owner){
        res.status(400).json({
            error: 'Please submit all required fields'
        })
        return ;
    }
    const { name, model, serial, calibration, due, owner} = req.body

    models.Equipment.create({
        name: name,
        model: model,
        serial: serial,
        calibration: calibration,
        due: due,
        owner: owner
    })
    .then(equipment => {
        res.status(201).json(equipment)
    })
})

// Edit equipment
router.patch('/:id', (req,res) => {
    const { id } = req.params
    const updateObject = {}
    if(!req.body && !req.body.name && !req.body.model && !req.body.serial && !req.body.calibration && !req.body.due && !req.body.owner){
        res.status(400).json({
            error: 'Please pick a field to change'
        })
        return ;
    }
    
    const { name, model, serial, calibration, due, owner} = req.body
    const params = { name, model, serial, calibration, due, owner }
    Object.keys(params).forEach(key => {params[key] ? updateObject[key] = params[key] : '' })
    // Allows to edit just one selection of equipment form
    models.Equipment.update(updateObject,{
        where: {
            id
        }
    })
    .then(updatedEquipment => {
        updatedEquipment && updatedEquipment[0] > 0 ?
        res.status(202).json({
            success: 'equipment updated'
        })
    :
        res.status(404).json({
            error: 'Equipment could not be updated'
        })
    })
    .catch((e) => {
        res.status(500).json({
            error: 'Database error occurred' + e
        })
    })
})

// Get all equipment
router.get('/', function (req, res) {
    models.Equipment.findAll()

    .then((equipment) => {
        res.json(equipment)
    })
})
// Get all equipment by ID
router.get('/:id', function (req, res) {
    const { id } = req.params;
    models.Equipment.findOne({
        where: { id }
    })

    .then((equipment) => {
        res.json(equipment)
    })
    .catch(e => {
        res.status(500).json({
            error: 'Database error occurred' + e
        })
    })
})



module.exports = router;