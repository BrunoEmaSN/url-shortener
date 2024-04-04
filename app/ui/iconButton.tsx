interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function IconButton (props: IconButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`flex rounded-full hover:scale-110 transition duration-200 ease-in-out ${props.className}`}
    >
      {props.icon}
    </button>
  );
};