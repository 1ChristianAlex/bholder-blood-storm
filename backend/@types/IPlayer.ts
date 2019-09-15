interface ILife {
  current_life: string;
  life: string;
}
interface IAttribute {
  atributeName: {
    type: string;
  };
  atributeValue: {
    type: any;
  };
}

export interface IPlayer {
  id?: number;
  name?: string;
  description?: string;
  level?: number;
  breed?: string;
  class?: string;
  life?: ILife;
  attributes?: string;
  expertise?: string;
  alignment?: string;
  background?: string;
  icon_image?: string;
  p_access?: string;
  inventoriePlayerId?: number;
}
