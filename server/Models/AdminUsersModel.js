import mongoose from 'mongoose';

const AdminUsersModel = new mongoose.Schema({
  login: { type: String, unique: true, required: true },
  password: { type: String, required: true },
}, { collection: 'adminUsers' });

export default mongoose.model('adminUsers', AdminUsersModel);
