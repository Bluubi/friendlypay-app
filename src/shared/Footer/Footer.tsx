import "./footer.css";
import { useLocation } from "react-router";
import { FooterContainerFactory } from "./footer-factory/FooterFactory.tsx";

export const Footer = () => {
  function presenter() {
    const { pathname } = useLocation();
    return FooterContainerFactory(pathname);
  }

  return <footer>{presenter()}</footer>;
};
