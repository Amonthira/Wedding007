const Wish = require('../models/Wish');

const createWish = async (req, res, next) => {
  try {
    console.log("POST /api/wishes BODY:", req.body);

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

  } catch (error) {
    console.error("CREATE WISH ERROR:", error);
    next(error);
  }
};

const getWishes = async (req, res, next) => {
  try {
    console.log("GET /api/wishes CALLED");

    const wishes = await Wish.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: wishes,
    });

  } catch (error) {
    console.error("GET WISH ERROR:", error);
    next(error);
  }
};

module.exports = {
  createWish,
  getWishes,
};
