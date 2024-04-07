import { Slide, ToastOptions, toast } from "react-toastify";

const config: ToastOptions = {
  position: "bottom-right",
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Slide,
}

export function ToastError(message: string = 'Error') {
  return toast.error(message, config);
}

export function ToastSuccess(message: string = 'Success') {
  return toast.success(message, config);
}