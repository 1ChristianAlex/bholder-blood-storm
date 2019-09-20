import { IInventorie } from '../interfaces/IInventorie';
import { InventoriePlayer } from '../models/InventoriePlayer';
import { InventorieRoom } from '../models/InventorieRoom';

export class InventorieController {
  private inventorieModel = InventorieRoom;
  constructor(modelName: string) {
    modelName == 'room' ? (this.inventorieModel = InventorieRoom) : (this.inventorieModel = InventoriePlayer);
  }
  public async createInventorie(Inventorie?: IInventorie) {
    let inventorieBuild: IInventorie = {
      ...Inventorie,
      current_weight: 0
    };
    const InventorieResult = await this.inventorieModel.create(inventorieBuild);
    return InventorieResult;
  }
  public async updateInventorie(_id, Inventorie) {
    const update = await this.inventorieModel.update(Inventorie, {
      where: {
        id: _id
      }
    });
    return update;
  }
  public async findInventorie(_id) {
    const findResult = await this.inventorieModel.findByPk(_id);
    return findResult;
  }
  public async deleteInventorie(_id) {
    const deleteResult = await this.inventorieModel.destroy({
      where: {
        id: _id
      }
    });
    return deleteResult;
  }
}
