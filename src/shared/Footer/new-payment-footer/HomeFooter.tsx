import { Anchor, AnchorProps } from "../../Anchor/Anchor.tsx";

const Props = {
  link: "new/payment",
  theme: "primary",
  align: "center",
  size: "size-50"
} as AnchorProps;

export const HomeFooter = () => {
  return (
    <Anchor {...Props}>
      <span> Share a new payment </span>
    </Anchor>
  );
};
