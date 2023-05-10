import Url from "../models/urlModel.js";

const urlShortener = async (req, res) => {
  try {
    const originalUrl = req.body;
    const objectUrl = await Url.create(originalUrl);
    const shortUrl = "http://localhost:3000/" + objectUrl.hash;
    console.log(objectUrl, shortUrl)
    res.status(201).json(shortUrl);
  } catch(err) {
    res.status(400).json(err.message);
  }
}

const redirectUrl = async (req, res) => {
  try {
    const { hash } = req.params;
    const objectUrl = await Url.findOne({ "hash": hash });
    console.log(objectUrl)
    res.status(302).redirect(objectUrl.originalUrl);
  } catch(err) {
    res.status(400).json(err.message);
  }
}
export { urlShortener, redirectUrl };