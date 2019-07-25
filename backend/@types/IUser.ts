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
export interface ITokenAuth {
  token: string;
}
export interface IUserToken {
  myUser: IUser;
  token: ITokenAuth;
}
export interface ILogin {
  userName: string;
  pass: string;
  email: string;
}
