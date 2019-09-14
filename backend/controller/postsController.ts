import { Post } from '../models/post';
import { IPost } from '../@types/IPost';

class PostController {
  private postM = Post;

  public async createPost(post: IPost, id: string) {
    let postComplete: IPost = {
      ...post,
      userRef: id
    };
    const postResult = await this.postM.create(postComplete);
    return postResult;
  }
  public async listPost(limit = 10) {
    const listPost = await this.postM.findAll({
      limit
    });
    return listPost;
  }
  public async updatePost(_id, post) {
    const update = await this.postM.update(post, {
      where: {
        id: _id
      }
    });
    return update;
  }
  public async deletePost(_id) {
    const deleteResult = await this.postM.destroy({
      where: {
        id: _id
      }
    });
  }
}

export default new PostController();
