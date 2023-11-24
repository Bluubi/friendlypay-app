import { ComponentProps } from "react";
import "./svg.css";

type SvgProps = ComponentProps<"img">;

export const Svg = ({ src, alt }: SvgProps) => {
  return (
    <div className={"svg"}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Svg;
