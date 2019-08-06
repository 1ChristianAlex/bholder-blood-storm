export interface IUser {
  _id?: string;
  name: string;
  userName: string;
  pass?: string;
  email: string;
  createDate?: string;
  guild?: string;
  rank?: string;
  playerRef?: string[];
  masterRef?: string[];
}

export interface IUserToken {
  token: IUser;
}
export interface ILogin {
  userName: string;
  pass: string;
  email: string;
}
