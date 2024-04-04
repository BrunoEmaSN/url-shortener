import { ComponentProps } from "react";

export default function TextField(props: ComponentProps<"input">) {
  return (
    <input
      className={`w-full rounded-md bg-midnightLight px-4 py-2 text-white transition
    duration-200 ease-in-out focus:border-none focus:outline-none focus:ring-1 focus:ring-neutral-500
    ${props.className}`}
      {...props}
    />
  )
}
