import { createAddaptedShortLink } from "../adapters/shortLinkAdapter";
import axiosInstance from "../interceptors/axiosInterceptor"
import { ShortLink } from "../models/shortLink"

export const findAllByEmail = async (email: string, currentPage: number = 1, elements: number = 10) => {
  try {
    const result = await axiosInstance.post('/find-shorturls', {
      email,
      currentPage,
      elements,
    });
    const data = result.data;

    if(data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

export const createShortLink = async (newShortLink: ShortLink) => {
  try {
    const result = await axiosInstance.post('/create-shorturl', newShortLink);
    const data = result.data;

    if(data) {
      return createAddaptedShortLink(data);
    }
  } catch (error) {
    console.log(error)
  }
}