export interface IUser {
  _id?: string;
  name: string;
  lastName: string;
  userName: string;
  pass?: string;
  email: string;
  tel?: string;
  birthday?: string;
  createDate?: string;
}

export interface IUserToken {
  token: IUser;
}
export interface ILogin {
  userName: string;
  pass: string;
  email: string;
}
