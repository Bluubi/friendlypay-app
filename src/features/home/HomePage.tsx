import { Presentation } from "../new/features/presentation/ui/Presentation.tsx";
import Svg from "../../shared/Svg/Svg.tsx";
import SVG from "../../core/svg.ts";

const HomePage = () => {
  return (
    <>
      <section className={"container"}>
        <Svg src={SVG.LARRY_SHARING_PAYMENT} alt={""} />
        <Presentation />
      </section>
    </>
  );
};

export default HomePage;
