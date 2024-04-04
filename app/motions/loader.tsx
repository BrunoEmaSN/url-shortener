import { Ring } from "@uiball/loaders";

interface LoaderProps {
  className?: string;
}

export const Loader = (props: LoaderProps) => {
  return (
    <div className={`${props.className}`}>
      <Ring size={22} speed={2} color="white" lineWeight={5} />
    </div>
  );
};