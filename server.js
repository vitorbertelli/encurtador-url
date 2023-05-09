import app from "./src/app.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

const url = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.connect(url)
  .then(() => {
    console.log('Connected!!')
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`)
});