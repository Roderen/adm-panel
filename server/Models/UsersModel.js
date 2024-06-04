import mongoose from 'mongoose';

const UsersModel = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  role: { type: String, required: true },
}, { collection: 'users' });

export default mongoose.model('users', UsersModel);
