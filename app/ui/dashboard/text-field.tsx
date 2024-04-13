import { ComponentProps } from "react";

export default function TextField(props: ComponentProps<"input">) {
  return (
    <input
      className={`w-full rounded-md bg-transparent px-4 py-2 text-white transition
    duration-200 ease-in-out border border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500
    ${props.className}`}
      {...props}
    />
  )
}
