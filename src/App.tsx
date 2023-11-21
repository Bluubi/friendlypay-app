import { Outlet } from "react-router";
import Svg from "./features/shared/Svg/Svg.tsx";
import "./App.css";

const App = () => {
  return (
    <section className={"container"}>
      <Svg src={"src/assets/imgs/Larry-sharing-payment.svg"} alt={""} />
      <Outlet />
    </section>
  );
};

export default App;
