import { IInventorie } from '../../interfaces/IInventorie';
import { InventoriePlayer, InventorieRoom } from '../../models';
import { ModelCtor } from 'sequelize/types';

export class InventorieController {
  private InventorieModel: ModelCtor<any>;

  constructor(modelName: string) {
    if (modelName == 'room') {
      this.InventorieModel = InventorieRoom;
    } else {
      this.InventorieModel = InventoriePlayer;
    }
  }

  public async CreateInventorie(Inventorie?: IInventorie) {
    let inventorieBuild: IInventorie = {
      ...Inventorie,
      current_weight: 0
    };
    const InventorieResult = await this.InventorieModel.create(inventorieBuild);
    return InventorieResult;
  }
  public async UpdateInventorie(_id, Inventorie) {
    const update = await this.InventorieModel.update(Inventorie, {
      where: {
        id: _id
      }
    });
    return update;
  }
  public async FingInventorie(_id) {
    const findResult = await this.InventorieModel.findByPk(_id);
    return findResult;
  }
  public async DeleteInventorie(_id) {
    const deleteResult = await this.InventorieModel.destroy({
      where: {
        id: _id
      }
    });
    return deleteResult;
  }
}
