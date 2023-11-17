const Service = require("../models/services");

// Get All services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({
      status: "success",
      results: services.length,
      data: {
        services,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
}

// Get Single service by ID
const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        service,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Create a New service
const createService = async (req, res) => {
  try {
    const newService = await Service.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        service: newService,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Update service by ID
const patchService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!service) {
      return res.status(404).json({ error: "service not found" });
    }
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const putService = async (req, res) => {
  try {
    const service = await Service.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    )

    if (!service) {
      return res.status(404).json({ error: "service not found" });
    }

    res.json(service);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
}


// Delete service by ID
const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
}

module.exports = {
  getAllServices,
  getServiceById,
  createService,
  patchService,
  putService,
  deleteService,
};
