export type User = {
  id: number;
  name: string;
  email: string;
  token: string;
}

export type UserRegister = {
  name: string;
  email: string;
  password: string;
}

export type UserServer = {
  user: {
    _id: number;
    name: string;
    email: string;
  },
  token: string;
}