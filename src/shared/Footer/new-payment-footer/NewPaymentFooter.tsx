import { Anchor, AnchorProps } from "../../Anchor/Anchor.tsx";

const Props = {
  link: "new/payment",
  theme: "primary",
} as AnchorProps;
export const NewPaymentFooter = () => {
  return (
    <Anchor {...Props}>
      <span> Share a new payment </span>
    </Anchor>
  );
};
