const express = require('express');
const AstrologerModel = require('../Models/astrologer.model');

const AstrologerController = express.Router();

AstrologerController.post('/create', async (req, res) => {
  try {
    const { name, rating } = req.body; 
    const newAstrologer = new AstrologerModel({ name, rating });
    await newAstrologer.save();
    res.status(201).json(newAstrologer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = AstrologerController;
