export interface IUser {
  id?: string;
  name: string;
  description?: string;
  userName?: string;
  email?: string;
  password?: string;
  guild?: string;
  elo?: string;
  enable?: string;
  Playerid?: string;
  Masterid?: string;
  Map_RPGid?: string;
  Itemsid?: string;
}

export interface IUserToken {
  token: IUser;
}
export interface ILogin {
  userName: string;
  password: string;
  email: string;
}
