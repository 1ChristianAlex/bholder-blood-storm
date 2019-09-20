import PlayerController from '../controller/playerController';
import { NextFunction, Request, Response } from 'express';

export default class PlayerRoutes {
  private playerC = new PlayerController();

  public async GetPlayer(req: Request, res: Response, next: NextFunction) {
    let playerId = req.params.id;

    res.json({ mensage: 'error' });
    next();
  }

  public async CreatePlayer(req: Request, res: Response, next: NextFunction) {
    let { player, user } = req.body;

    let playerResult = await this.playerC.createPlayer(player, user);

    res.json(playerResult);
    next();
  }

  public async UpdatePlayer(req: Request, res: Response, next: NextFunction) {
    let { id, player } = req.body;

    let playerResult = await this.playerC.UpdatePlayer(id, player);

    res.json(playerResult);
    next();
  }

  public async DeletePlayer(req: Request, res: Response, next: NextFunction) {
    let { player, user } = req.body;

    let playerResult = await this.playerC.deletePlayer(player.id, user);

    res.status(playerResult.status).json(playerResult);
    next();
  }
}
