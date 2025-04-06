const db = require('../models');
const Vehicle = db.Vehicle;

exports.findAll = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();
    res.json(vehicles);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const vehicle = await Vehicle.findByPk(id);
    if (!vehicle) return res.status(404).send({ message: "Vehicle not found" });
    res.json(vehicle);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json(vehicle);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};