import { Link } from "react-router-dom";
import { ComponentProps } from "react";
import styles from "./anchor.module.css";

export type AnchorProps = ComponentProps<"a"> & {
  link: string;
  theme: "primary" | "secondary";
  align: "center" | "left" | "right";
  size: "size-25" | "size-50";
};
export const Anchor = ({ link, theme, align, size, ...props }: AnchorProps) => {
  return (
    <Link
      className={`${styles[theme]} ${styles[align]} ${styles[size]}`}
      to={link}
    >
      {props.children}
    </Link>
  );
};
