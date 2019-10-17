import { NextFunction, Request, Response } from 'express';
import PostsController from '../../controller/Post/postsController';
import { IPost } from '../../interfaces/IPost';
export default class PostRouter {
  private postC = PostsController;

  public async CreatePost(req: Request, res: Response, next: NextFunction) {
    let { post, user } = req.body;
    let posCreationtResult = await this.postC.CreatePost(post, user.id);

    res.json(posCreationtResult);
    next();
  }

  public async ListPost(req: Request, res: Response, next: NextFunction) {
    let { limit } = req.body;
    let postListResult = await this.postC.listPost(limit);

    res.status(postListResult.status).json(postListResult.content);
    next();
  }

  public async UpdatePost(req: Request, res: Response, next: NextFunction) {
    let { id, post } = req.body.post;
    let postUpdateResult = await this.postC.UpdatePost(id, post);

    res.json(postUpdateResult);
    next();
  }

  public async DeletePost(req: Request, res: Response, next: NextFunction) {
    let id = req.params.id;
    let postDeleteResult = await this.postC.deletePost(id);

    res.status(postDeleteResult.status).json(postDeleteResult);
    next();
  }
}
