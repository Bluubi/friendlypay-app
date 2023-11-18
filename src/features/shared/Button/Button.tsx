import "./button.css";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  action?: () => void;
  label: string;
};
export const Button = ({ action, label }: ButtonProps) => {
  return (
    <button className={"button"} onClick={action}>
      {label}
    </button>
  );
};
