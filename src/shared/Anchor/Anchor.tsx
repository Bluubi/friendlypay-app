import { Link } from "react-router-dom";
import { ComponentProps } from "react";
import styles from "./anchor.module.css";

export type AnchorProps = ComponentProps<"a"> & {
  link: string;
  theme: "primary" | "secondary";
};
export const Anchor = ({ link, theme, ...props }: AnchorProps) => {
  return (
    <Link className={styles[theme]} to={link}>
      {props.children}
    </Link>
  );
};
