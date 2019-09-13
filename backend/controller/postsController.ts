// import postM from '../models/posts';
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
  public async listPost(limit = 10) {
    const listPost = await this.postM.find().limit(limit);
    return listPost;
  }
  public async updatePost(_id, post) {
    const update = await this.postM.findByIdAndUpdate(_id, { ...post });
    return update;
  }
  public async deletePost(_id) {
    const deleteResult = await this.postM.findByIdAndDelete(_id);
    return deleteResult;
  }
}

export default new PostController();
