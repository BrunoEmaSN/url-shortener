import { User, UserServer } from '../models/user';

export const createAddaptedUser = (userServer: UserServer): User => {
  const data: User = {
    id: userServer.user._id,
    name: userServer.user.name,
    email: userServer.user.email,
    token: userServer.token,
  }

  return data;
}