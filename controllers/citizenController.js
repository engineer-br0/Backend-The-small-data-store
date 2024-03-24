const Citizen = require("../models/Citizen");

// Get all citizens
exports.getAllCitizens = async (req, res) => {
  try {
    const citizens = await Citizen.find();
    res.json(citizens);
    console.log("citizens:", citizens);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new citizen
exports.createCitizen = async (req, res) => {
  console.log("createCitizen", req.body);
  const citizen = new Citizen({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
  });

  try {
    const newCitizen = await citizen.save();
    console.log("newCitizen", newCitizen);
    res.status(201).json(newCitizen);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

// Update a citizen
exports.updateCitizen = async (req, res) => {
  console.log("updateCitizen", req.body);
  try {
    const updatedCitizen = await Citizen.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCitizen);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a citizen
exports.deleteCitizen = async (req, res) => {
  console.log("deleteCitizen", req.body);
  try {
    await Citizen.findByIdAndDelete(req.params.id);
    res.json({ message: "Citizen deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
