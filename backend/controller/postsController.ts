import postM from '../models/posts';
import { IPost } from '../@types/IPost';

class PostController {
  private postM = postM;

  public async createPost(post: IPost, id: string) {
    let postComplete: IPost = {
      ...post,
      userRef: id
    };
    const postResult = await this.postM.create(postComplete);
    return postResult;
  }
  public async listPost() {
    const listPost = await this.postM.find();
    return listPost;
  }
}

export default new PostController();
