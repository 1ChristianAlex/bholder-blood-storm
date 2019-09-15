import { Post } from '../models/post';
import { User } from '../models/user';
import { IPost } from '../@types/IPost';

class PostController {
  private postM = Post;

  public async createPost(post: IPost, id: string) {
    let postComplete: IPost = {
      ...post,
      userId: parseInt(id)
    };

    const postResult = await this.postM.create(postComplete);
    return postResult;
  }
  public async listPost(limit = 10) {
    const listPost = await this.postM.findAll({
      limit,
      include: [
        {
          model: User,
          attributes: ['name']
        }
      ]
    });
    if (listPost.length == 0) {
      return { status: 404, content: 'not found' };
    }
    return { status: 202, content: listPost };
  }
  public async updatePost(id, post) {
    const update = await this.postM.update(post, {
      where: {
        id: id
      }
    });
    return update;
  }
  public async deletePost(id) {
    const deleteResult = await this.postM.destroy({
      where: {
        id: id
      }
    });
    if (deleteResult == 0) {
      return { mensage: `Not Found`, status: 404 };
    }
    return { mensage: `Success`, status: 200 };
  }
}

export default new PostController();
