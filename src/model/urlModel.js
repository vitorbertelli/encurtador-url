import mongoose from "mongoose";
import crypto from "crypto";

const urlSchema = new mongoose.Schema({
  hash: {
    type: String,
    // immutable: true,
    unique: true,
    default: () => crypto.randomBytes(3).toString('base64').slice(0, 6)
    // default: "000000"
  },
  urlOriginal: {
    type: String,
    require: [true, 'Informe a url original.'],
    // immutable: true,
    lowercase: true
  }
});

const Url = mongoose.model('Url' ,urlSchema);

export default Url;