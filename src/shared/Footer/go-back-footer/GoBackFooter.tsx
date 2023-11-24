import { Anchor, AnchorProps } from "../../Anchor/Anchor.tsx";

const props = {
  link: "/",
  theme: "secondary",
} as AnchorProps;
export const GoBackFooter = () => {
  return (
    <Anchor {...props}>
      <span> Go back </span>
    </Anchor>
  );
};
