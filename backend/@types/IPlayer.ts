interface ILife {
  current: string;
  max: string;
}
interface IAttribute {
  atributeName: {
    type: string;
  };
  atributeValue: {
    type: any;
  };
}
interface IAbiliity {
  abiliityName: string;
  abiliityValue: any;
}
export interface IPlayer {
  playerName: string;
  class: string;
  breed: string;
  level: string;
  life: ILife;
  atribute: IAttribute;
  abiliity: IAbiliity;
  alignment: string;
  background: string;
  experience_points: number;
  inspiration: number;
  proficiency_bonus: number;
  travel_speed: number;
  initiative: number;
  playerImage: string;
  inventorie_ref: string;
  accessLevel: string;
}
