// import playerModel from '../models/player';
import playerInventorie from './inventorieControler';
import userController from './usersController';
import { IPlayer } from '../@types/IPlayer';
import { IUser } from '../@types/IUser';

export default class PlayerController {
  private playerModel = playerModel;
  private playerInventorie = new playerInventorie('playerInventorie');
  private userController = new userController();

  public async createPlayer(player: IPlayer, user: IUser) {
    const inventorie = await this.playerInventorie.createInventorie();
    let playerBuild: IPlayer = {
      ...player,
      inventorie_ref: inventorie._id
    };
    const playerCreating = await this.playerModel.create(playerBuild);

    let playerRef = user.playerRef;
    if (playerRef == undefined) {
      playerRef = [];
    }
    playerRef.push(playerCreating.id);
    let userInventorie: IUser = {
      ...user,
      playerRef
    };
    this.userController.updateUser(user, userInventorie);

    return playerCreating;
  }
  public async findPlayer(_id) {
    let player: any = await this.playerModel.findById(_id);
    let playerInventorie = await this.playerInventorie.findInventorie(player.inventorie_ref);
    let playerFind = {
      player,
      playerInventorie
    };
    console.log(playerFind);
    return playerFind;
  }
  public async updatePlayer(_id, player: IPlayer) {
    await this.playerModel.findOneAndUpdate({ _id }, player);
    return { mensage: `Player update` };
  }

  public async deletePlayer(_id: string, user: IUser) {
    const playerResult = await this.playerModel.findByIdAndDelete({ _id });
    this.userController.updateUser(user, {
      ...user,
      playerRef: user.playerRef.filter(playID => playID != _id)
    });

    return { mensage: `Player ${playerResult._id} deleted` };
  }
}
