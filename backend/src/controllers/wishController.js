const Wish = require('../models/Wish');

const createWish = async (req, res) => {
  try {
    console.log("POST /api/wishes");

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

    return res.status(201).json({
      success: true,
      data: newWish,
    });

  } catch (error) {

    console.log("CREATE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getWishes = async (req, res) => {
  try {

    console.log("GET /api/wishes");

    const wishes = await Wish.find().sort({ createdAt: -1 });

    console.log("FOUND:", wishes.length);

    return res.json({
      success: true,
      data: wishes,
    });

  } catch (error) {

    console.log("GET ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createWish,
  getWishes,
};
