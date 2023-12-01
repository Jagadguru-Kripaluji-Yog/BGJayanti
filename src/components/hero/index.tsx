import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const AutoplaySlider = (withAutoplay(AwesomeSlider));

export function Hero() {
  return (
    <AutoplaySlider play cancelOnInteraction={false}>
      <div className="bg-primary">1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </AutoplaySlider>
  );
}
