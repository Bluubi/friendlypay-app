import Svg from "./shared/Svg/Svg.tsx";
import "./App.css";
import SVG from "./core/svg.ts";

const App = () => {
  return (
    <section className={"container"}>
      <Svg src={SVG.LARRY_SHARING_PAYMENT} alt={""} />
    </section>
  );
};

export default App;
