import mongoose from "mongoose";

const TokenModel = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'Admin'}
})

export default mongoose.model('token', TokenModel);