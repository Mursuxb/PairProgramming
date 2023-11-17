const Tour = require('./../models/tours');

// Get All tours
const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
}

// Get Single tour by ID
const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Create a New tour
const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Update tour by ID
const patchTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!tour) {
      return res.status(404).json({ error: "tour not found" });
    }
    res.json(tour);
  }
  catch (err) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

const putTour = async (req, res) => {
  try {
    const tour = await Tour.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!tour) {
      return res.status(404).json({ error: "tour not found" });
    }

    res.json(tour);
  }
  catch (err) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

// Delete tour by ID

const deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) {
      return res.status(404).json({ error: "tour not found" });
    }
    res.status(200).json({ message: "tour deleted successfully" });
  }
  catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
        });
  }
}

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  patchTour,
  putTour,
  deleteTour,
};