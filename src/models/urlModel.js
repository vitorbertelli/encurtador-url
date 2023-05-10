import mongoose from "mongoose";
import crypto from "crypto";

const urlSchema = new mongoose.Schema({
  hash: {
    type: String,
    unique: true,
    default: () => crypto.randomBytes(3).toString('base64').slice(0, 6)
  },
  originalUrl: {
    type: String,
    required: [true, 'The URL must be informed.']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Url = mongoose.model('Url' ,urlSchema);

export default Url;