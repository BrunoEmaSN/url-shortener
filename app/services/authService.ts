import axios from "axios";
import { UserRegister } from "../models/user";
import { createAddaptedUser } from "../adapters/userAdapter";
import { ToastError, ToastSuccess } from "../ui/toast";

export const registerUser = async (newUser: UserRegister) => {
  try {
    const url = process.env.NEXT_PUBLIC_BASE_URL + "/auth/register";
    const result = await axios.post(url, newUser);
    const data = result.data;

    if (data) {
      const user = createAddaptedUser(data);
      localStorage.setItem('token', user.token);
      ToastSuccess('Create new account');

      return user;
    }

    throw new Error("Could not create new account");
  } catch (error) {
    console.log(error);
    ToastError(`${error}`);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const url = process.env.NEXT_PUBLIC_BASE_URL + "/auth/login";
    const result = await axios.post(url, {
      email,
      password
    });
    const data = result.data;

    if(data) {
      const user = createAddaptedUser(data);
      localStorage.setItem('token', user.token);
      ToastSuccess('Login');

      return user;
    }

    throw new Error("Could not login");
  } catch (error) {
    console.log(error);
    ToastError(`${error}`);
  }
}

export const logoutUser = () => {
  try {
    localStorage.removeItem('token');
  } catch (error) {
    console.log(error);
  }
}

export const refrehsToken = async () => {
  try {
    const oldToken = localStorage.getItem('token');
    const url = process.env.NEXT_PUBLIC_BASE_URL + '/auth/refresh-token';
    const result = await axios.post(url, {token: oldToken});
    const data = result.data;

    if(data) {
      const newToken = data.token;
      localStorage.setItem('token', newToken);

      return newToken;
    }

    throw new Error("Could not refresh token");
  } catch (error) {
    console.log(error);
    ToastError(`${error}`);
  }
}
