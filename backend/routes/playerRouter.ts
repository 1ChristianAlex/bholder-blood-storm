import PlayerController from '../controller/playerController';
import { NextFunction, Request, Response } from 'express';

export default class PlayerRoutes {
  private playerC = new PlayerController();

  public async findPlayerRouter(req: Request, res: Response, next: NextFunction) {
    let player_id = req.params.id;

    let playerResult = await this.playerC.findPlayer(player_id);

    res.json(playerResult);
    next();
  }
  public async createPlayerRouter(req: Request, res: Response, next: NextFunction) {
    let { player, user } = req.body;

    let playerResult = await this.playerC.createPlayer(player, user);

    res.json(playerResult);
    next();
  }
  public async updatePlayerRouter(req: Request, res: Response, next: NextFunction) {
    let { _id, player } = req.body;
    let playerResult = await this.playerC.updatePlayer(_id, player);
    res.json(playerResult);
    next();
  }
  public async deletePlayerRouter(req: Request, res: Response, next: NextFunction) {
    let { player, user } = req.body;
    let playerResult = await this.playerC.deletePlayer(player._id, user);
    res.json(playerResult);
    next();
  }
}
