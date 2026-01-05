import { IUser } from './user.interface';

export interface IAuthResponse {
  token: string;
  expires: Date;
  user: IUser;
}