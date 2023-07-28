import Url from "../models/urlModel.js";

const urlShortener = async (req, res) => {
  try {
    const originalUrl = req.body;
    const objectUrl = await Url.create(originalUrl);
    const shortUrl = "http://localhost:8000/" + objectUrl.hash;
    res.status(201).json({
      url: shortUrl
    });
  } catch(err) {
    res.status(400).json(err.message);
  }
} 

const redirectUrl = async (req, res) => {
  try {
    const { hash } = req.params;
    const objectUrl = await Url.findOne({ "hash": hash });
    res.status(302).redirect(objectUrl.originalUrl);
  } catch(err) {
    res.status(400).json(err.message);
  }
}

export { urlShortener, redirectUrl };