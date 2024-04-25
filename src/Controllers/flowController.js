const express = require('express');
const AstrologerModel = require('../Models/astrologer.model');

const FlowController = express.Router();

FlowController.post('/distribute', async (req, res) => {
  try {
    const users = req.body.users; 
    const astrologers = await AstrologerModel.find().sort({ rating: -1 }); 
    const numAstrologers = astrologers.length;
    let userIndex = 0;

    const distributedUsers = astrologers.map(astrologer => {
      const userIds = [];
      for (let i = 0; i < astrologer.rating; i++) 
      { 
        if (userIndex < users.length) {
          userIds.push(users[userIndex++]._id);
        }
      }
      return { astrologerId: astrologer._id, userIds };
    });

    res.status(200).json(distributedUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

FlowController.put('/astrologers/:astrologerId/flow', async (req, res) => {
  try {
    const astrologerId = req.params.astrologerId;
    const newRating = req.body.newRating; 
    const astrologer = await AstrologerModel.findById(astrologerId);
    astrologer.rating = newRating;
    await astrologer.save();
    res.status(200).json({ message: 'Flow adjusted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = FlowController;