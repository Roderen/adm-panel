import AdminUsersService from '../Services/AdminUsersService.js';
import UsersService from "../Services/UsersService.js";

class AdminUsersController {
  async registration(req, res) {
    try {
      const { username, password } = req.body;
      const userData = await AdminUsersService.registration(username, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const userData = await AdminUsersService.login(username, password);
      console.log(userData);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      console.log(e)
    }
  }

  async logout(req, res, next) {
    try {

    } catch (e) {

    }
  }

  async getAll(req, res) {
    try {
      const posts = await AdminUsersService.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new AdminUsersController();