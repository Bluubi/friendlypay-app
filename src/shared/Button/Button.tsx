import styles from "./button.module.css";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  action: () => void;
};

export const Button = ({ action, type, ...props }: ButtonProps) => {
  return (
        <button data-testid={"submit"} className={styles.primary} type={type} onClick={action}>
          {props.children}
        </button>
  );
};
