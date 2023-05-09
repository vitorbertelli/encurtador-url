import Url from "../model/urlModel.js";

const encurtarUrl = async (req, res) => {
  try {
    const url = req.body;
    await Url.create(url);
    console.log(url)
    res.status(201).json(url);
  } catch(err) {
    res.status(400).json(err.message);
  }
}

const redirecionarUrl = async (req, res) => {
  try {
    const { hash } = req.params;
    const urlOriginal = await Url.findOne({ "hash": hash });
    res.status(200).json(urlOriginal);
  } catch(err) {
    res.status(400).json(err.message);
  }
}
export { encurtarUrl, redirecionarUrl };

// module.exports(encurtarUrl, redirecionarUrl);