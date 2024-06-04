import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import cookieParser from "cookie-parser";

const PORT = 3001;
const DB_URL = 'mongodb+srv://roderen:jq0A7M8VJd7IFkvf@cluster0.pq4meop.mongodb.net/admin-panel?retryWrites=true&w=majority';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(express.json())
app.use(cookieParser());
app.use(express.static('static'))
app.use('/api', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`server started!${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();