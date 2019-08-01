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
    let postResult = await this.postC.listPost();
    res.json(postResult);
    next();
  }
}
