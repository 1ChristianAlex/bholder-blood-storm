import { NextFunction, Request, Response } from 'express';
import PostsController from '../controller/postsController';
import { IPost } from '../@types/IPost';
export default class PostRouter {
  private postC = PostsController;

  public async createPostRouter(req: Request, res: Response, next: NextFunction) {
    let { post, user } = req.body;
    console.log(user);
    let postResult = await this.postC.createPost(post, user._id);

    res.json(postResult);
    next();
  }
  public async listPostRouter(req: Request, res: Response, next: NextFunction) {
    let { limit } = req.body;
    let postResult = await this.postC.listPost(limit);
    res.json(postResult);
    next();
  }
  public async updatePostRouter(req: Request, res: Response, next: NextFunction) {
    let { _id, post } = req.body.post;
    let postResult = await this.postC.updatePost(_id, post);
    res.json(postResult);
    next();
  }
  public async deletePostRouter(req: Request, res: Response, next: NextFunction) {
    let { _id } = req.body.post;
    let postResult = await this.postC.deletePost(_id);
    res.json(postResult);
    next();
  }
}
