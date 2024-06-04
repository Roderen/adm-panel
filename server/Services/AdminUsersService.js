import bcrypt from "bcrypt";
import AdminUsersModel from '../Models/AdminUsersModel.js';
import TokenService from '../Services/TokenService.js';
import AdminUserDto from '../dtos/admin-user-dto.js';
import {MongoAPIError} from "mongodb";
import tokenService from "../Services/TokenService.js";
import UsersModel from "../Models/UsersModel.js";

class AdminUsersService {
  async registration(username, password) {
    const candidate = await AdminUsersModel.findOne({ username });
    if (candidate) {
      return 'Администратор с таким именем уже существует';
    }
    const hashPassword = await bcrypt.hashSync(password, 3);
    console.log(hashPassword)
    const user = await AdminUsersModel.create({ username, password: hashPassword });

    const userDto = new AdminUserDto(user);
    const tokens = TokenService.generateToken({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async login(username, password) {
    const user = await AdminUsersModel.findOne({ username });
    if (!user) {
      throw new Error('Username not found');
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw new Error('Wrong password');
    }
    const userDto = new AdminUserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto }
  }

  async getAll() {
    const admins = await AdminUsersModel.find();
    return admins;
  }
}

export default new AdminUsersService();