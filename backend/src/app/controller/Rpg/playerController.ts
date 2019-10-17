import { Player, User } from '../../models';
import { InventorieController } from './inventorieControler';
import { IPlayer } from '../../interfaces/IPlayer';
import { IUser } from '../../interfaces/IUser';
import { IInventorie } from '../../interfaces/IInventorie';

export default class PlayerController {
  private InventoriePlayer = new InventorieController('player');

  public async CreatePlayer(player: IPlayer, user: IUser) {
    const inventorie = await this.InventoriePlayer.CreateInventorie();
    let inventoriePlayerId: IInventorie = inventorie.toJSON();

    let playerBuild: IPlayer = {
      ...player,
      inventoriePlayerId: parseInt(inventoriePlayerId.id)
    };

    const playerCreating = await Player.create(playerBuild);

    let myPlayer: IPlayer = playerCreating.toJSON();

    User.update(
      { playerId: myPlayer.id },
      {
        where: {
          id: user.id
        }
      }
    );

    return myPlayer;
  }
  public async GetPLayer(id?: string) {
    try {
      let playerQuery = await User.findAll({
        where: {
          id
        }
      });
      return playerQuery;
    } catch (error) {
      console.log(error);
    }
  }
  public async UpdatePlayer(player: IPlayer, newPlayer: IPlayer) {
    try {
      let updatePlayer = await User.update(newPlayer, {
        where: {
          id: player.id
        }
      });
      return updatePlayer;
    } catch (error) {
      console.log(error);
    }
  }

  public async DeletePlayer(id, user: IUser) {
    const deleteResult = await Player.destroy({
      where: {
        id: id
      }
    });
    User.update(
      { playerId: id },
      {
        where: {
          id: user.id
        }
      }
    );
    if (deleteResult == 0) {
      return { mensage: `Not Found`, status: 404 };
    }
    return { mensage: `Success`, status: 200 };
  }
}
