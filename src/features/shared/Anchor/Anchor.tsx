import { Link } from "react-router-dom";
import "./anchor.css";

export const Anchor = ({ link, label }: { link: string; label: string }) => {
  return (
    <Link className={"anchor"} to={link}>
      {label}
    </Link>
  );
};
