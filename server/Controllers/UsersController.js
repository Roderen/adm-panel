import UsersService from "../Services/UsersService.js";
import UsersModel from "../Models/UsersModel.js";

class UsersController {
  async getAll(req, res) {
    try {
      const posts = await UsersService.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const post = await UsersService.getOne(req.params.id)
      return res.json(post)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async create(req, res) {
    try {
      const {username} = req.body;
      const candidate = await UsersModel.findOne({username});
      if (candidate) {
        return res.status(400).json({message: "Такой username уже существует"});
      }
      const post = await UsersService.create(req.body);
      res.json(post)
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async update(req, res) {
    try {
      const {username} = req.body;
      const candidate = await UsersModel.findOne({username});
      if (candidate) {
        return res.status(400).json({message: "Такой username уже существует"});
      }
      const updatedPost = await UsersService.update(req.body);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const post = await UsersService.create(req.params.id);
      return res.json(post)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new UsersController();
