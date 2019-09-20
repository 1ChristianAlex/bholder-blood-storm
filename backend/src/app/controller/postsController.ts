import { Post } from '../models/post';
import { User } from '../models/user';
import { IPost } from '../interfaces/IPost';

class PostController {
  private PostModel = Post;

  public async CreatePost(post: IPost, id: string) {
    let postComplete: IPost = {
      ...post,
      userId: parseInt(id)
    };

    const postResult = await this.PostModel.create(postComplete);

    return postResult;
  }
  public async listPost(limit = 10) {
    const listPost = await this.PostModel.findAll({
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
  public async UpdatePost(id, post) {
    const update = await this.PostModel.update(post, {
      where: {
        id: id
      }
    });

    return update;
  }
  public async deletePost(id) {
    const deleteResult = await this.PostModel.destroy({
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
