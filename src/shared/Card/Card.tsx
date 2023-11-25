import { ComponentProps } from "react";
import styles from "./card.module.css";

type CardProps = ComponentProps<"article">;

export const Card = ({ ...props }: CardProps) => {
  return <article className={styles.card}> {props.children}</article>;
};
