import { NextFunction, Request, Response } from 'express';
import PostsController from '../controller/postsController';
import { IPost } from '../@types/IPost';
export default class PostRouter {
  private postC = PostsController;

  public async createPostRouter(req: Request, res: Response, next: NextFunction) {
    let { post, user } = req.body;
    let postResult = await this.postC.createPost(post, user.id);
    res.json(postResult);
    next();
  }
  public async listPostRouter(req: Request, res: Response, next: NextFunction) {
    let { limit } = req.body;
    let postResult = await this.postC.listPost(limit);
    res.status(postResult.status).json(postResult.content);
    next();
  }
  public async updatePostRouter(req: Request, res: Response, next: NextFunction) {
    let { id, post } = req.body.post;
    let postResult = await this.postC.updatePost(id, post);
    res.json(postResult);
    next();
  }
  public async deletePostRouter(req: Request, res: Response, next: NextFunction) {
    let id = req.params.id;
    let postResult = await this.postC.deletePost(id);
    res.status(postResult.status).json(postResult);
    next();
    next();
  }
}
