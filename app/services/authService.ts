import axios from "axios";
import { UserRegister } from "../models/user";
import { createAddaptedUser } from "../adapters/userAdapter";
import { ToastError, ToastSuccess } from "../ui/toast";
import { jwtDecode } from "jwt-decode";
import Cookies from "cookies-ts";

const cookies = new Cookies();

export const registerUser = async (newUser: UserRegister) => {
  try {
    const url = process.env.NEXT_PUBLIC_BASE_URL + "/auth/register";
    const result = await axios.post(url, newUser);
    const data = result.data;

    if (data) {
      const user = createAddaptedUser(data);
      const token = user.token;
      const tokenDecode = jwtDecode(token);

      cookies.set("token", token, { expires: tokenDecode.exp });
      ToastSuccess("Create new account");

      return user;
    }

    throw new Error("Could not create new account");
  } catch (error) {
    console.log(error);
    ToastError(error as string);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const url = process.env.NEXT_PUBLIC_BASE_URL + "/auth/login";
    const result = await axios.post(url, {
      email,
      password,
    });
    const data = result.data;

    if (data) {
      const user = createAddaptedUser(data);
      const token = user.token;
      const tokenDecode = jwtDecode(token);

      cookies.set("token", token, { expires: tokenDecode.exp });
      ToastSuccess("Login");

      return user;
    }

    throw new Error("Could not login");
  } catch (error) {
    console.log(error);
    ToastError(error as string);
  }
};

export const logoutUser = () => {
  try {
    cookies.remove("token");
  } catch (error) {
    console.log(error);
    ToastError(error as string);
  }
};

export const refrehsToken = async () => {
  try {
    const oldToken = sessionStorage.getItem("token");
    const url = process.env.NEXT_PUBLIC_BASE_URL + "/auth/refresh-token";
    const result = await axios.post(url, { token: oldToken });
    const data = result.data;

    if (data) {
      const newToken = data.token;
      const tokenDecode = jwtDecode(newToken);
      cookies.set("token", newToken, { expires: tokenDecode.exp });

      return newToken;
    }

    throw new Error("Could not refresh token");
  } catch (error) {
    console.log(error);
    ToastError(error as string);
  }
};
