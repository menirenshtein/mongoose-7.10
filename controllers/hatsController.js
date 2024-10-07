import hatsModel from "../models/hatModel.js";


export const getAllHats = async (req, res) => {
  try {
    const allHats = await hatsModel.find();
    res.status(200).json({ data: allHats, success: true });
  } catch (error) {
    res.status(400).json({massage: 'cant get',success: false });
  }
};

export const createHat = async (req, res) => {
  res.send("post request");
};
