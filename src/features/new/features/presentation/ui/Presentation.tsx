import styles from "./presentation.module.css";

export const Presentation = () => {
  return (
    <article className={styles.presentation}>
      <h1> Welcome to FriendlyApp! </h1>
      <p className={styles.margin}>
        {" "}
        Stop worrying about annoying calculates. Note down here everything you
        want to share your payments.{" "}
      </p>
    </article>
  );
};
