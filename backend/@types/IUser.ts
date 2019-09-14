export interface IUser {
  _id?: string;
  name: string;
  description?: string;
  userName: string;
  email: string;
  password?: string;
  guild?: string;
  elo?: string;
  enable?: string;
  Player_id?: string;
  Master_id?: string;
  Map_RPG_id?: string;
  Items_id?: string;
}

export interface IUserToken {
  token: IUser;
}
export interface ILogin {
  userName: string;
  password: string;
  email: string;
}
