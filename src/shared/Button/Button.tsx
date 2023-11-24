import styles from "./Button.module.css";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  action?: () => void;
};

export const Button = ({ action, type, ...props }: ButtonProps) => {
  return (
    <>
      {action === undefined ? (
        <button className={styles.primary} type={type}>
          {" "}
          {props.children}
        </button>
      ) : (
        <button className={styles.primary} type={type} onClick={action}>
          {" "}
          {props.children}{" "}
        </button>
      )}{" "}
    </>
  );
};
