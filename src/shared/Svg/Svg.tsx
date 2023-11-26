import { ComponentProps } from "react";
import "./svg.css";

type SvgProps = ComponentProps<"img"> & {
  width?: string;
};

export const Svg = ({ src, alt, width }: SvgProps) => {
  return (
    <div className={"svg"}>
      <img src={src} alt={alt} width={width} />
    </div>
  );
};

export default Svg;
