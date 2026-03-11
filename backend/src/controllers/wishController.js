const Wish = require('../models/Wish');
const asyncHandler = require('../utils/asyncHandler');

const createWish = asyncHandler(async (req, res) => {

  let { guestName, message } = req.body;

  guestName = guestName?.trim();
  message = message?.trim();

  if (!guestName || !message) {
    return res.status(400).json({
      success: false,
      message: 'Guest name and message are required',
    });
  }

  const newWish = await Wish.create({
    guestName,
    message,
  });

  res.status(201).json({
    success: true,
    data: newWish,
  });

});

const getWishes = asyncHandler(async (req, res) => {

  const wishes = await Wish.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    data: wishes,
  });

});

module.exports = {
  createWish,
  getWishes,
};
