import PlayerController from '../controller/playerController';
import { NextFunction, Request, Response } from 'express';

export default class PlayerRoutes {
  private playerC = new PlayerController();

  public async findPlayerRouter(req: Request, res: Response, next: NextFunction) {
    let playerid = req.params.id;

    // let playerResult = await this.playerC.findPlayer(playerid);

    res.json({ mensage: 'error' });
    next();
  }
  public async createPlayerRouter(req: Request, res: Response, next: NextFunction) {
    let { player, user } = req.body;

    let playerResult = await this.playerC.createPlayer(player, user);

    res.json(playerResult);
    next();
  }
  public async updatePlayerRouter(req: Request, res: Response, next: NextFunction) {
    let { id, player } = req.body;
    let playerResult = await this.playerC.updatePlayer(id, player);
    res.json(playerResult);
    next();
  }
  public async deletePlayerRouter(req: Request, res: Response, next: NextFunction) {
    let { player, user } = req.body;
    let playerResult = await this.playerC.deletePlayer(player.id, user);
    res.status(playerResult.status).json(playerResult);
    next();
  }
}
