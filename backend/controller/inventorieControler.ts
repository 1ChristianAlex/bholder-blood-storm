import InventorieSchema from '../models/inventories';
import { IInventorie } from '../@types/IInventorie';
import { Model, Document, model } from 'mongoose';

export default class InventorieController {
  private inventorieModel: Model<Document, {}>;
  constructor(modelName: string) {
    this.inventorieModel = model(modelName, InventorieSchema);
  }
  public async createInventorie(IInventorie?: IInventorie) {
    let inventorieBuild: IInventorie = {
      ...IInventorie,
      current_weight: 0
    };
    const InventorieResult = await this.inventorieModel.create(inventorieBuild);
    return InventorieResult;
  }
  public async updateInventorie(_id, Inventorie) {
    const update = await this.inventorieModel.findByIdAndUpdate(_id, { ...Inventorie });
    return update;
  }
  public async deleteInventorie(_id) {
    const deleteResult = await this.inventorieModel.findByIdAndDelete(_id);
    return deleteResult;
  }
}
