import UsersModel from "../Models/UsersModel.js";

class PostService {
  async create(post) {
    const createdPost = await UsersModel.create({...post});
    return createdPost;
  }

  async getAll() {
    const posts = await UsersModel.find();
    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('не указан ID')
    }
    const post = await UsersModel.findById(id);
    return post;
  }

  async update(post) {
    if (!post.id) {
      throw new Error('не указан ID')
    }
    const updatedPost = await UsersModel.findByIdAndUpdate(post.id, post, {new: true})
    return updatedPost;
  }
}


export default new PostService();