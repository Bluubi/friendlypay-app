import { Anchor, AnchorProps } from "../../Anchor/Anchor.tsx";
import styles from "./new-payment-page-footer.module.css";

const props = {
  link: "/",
  theme: "secondary",
  size: "size-25",
} as AnchorProps;
export const NewPaymentPageFooter = () => {
  return (
    <Anchor {...props}>
      <span className={styles.spacing}> Go back </span>
    </Anchor>
  );
};
