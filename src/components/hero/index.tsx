import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import withCaptions from "./captioned-hoc";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import { HeroSlide } from "./slide";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const AutoplaySlider = withCaptions(withAutoplay(AwesomeSlider));

export function Hero() {
  return (
    <AutoplaySlider
      play
      cancelOnInteraction={false}
      slider
      bullets={false}
      fillParent
      organicArrows={false}
      screens={[
        {
          backgroundColor: "#4a9c8c",
          media: "/bg-1.png",
          caption: "I want to see what you got.",
        },
        {
          backgroundColor: "#4a9c8c",
          media: "/bg-2.png",
          caption: "The answer is Dont think about it.",
        },
        // ...
      ]}
    ></AutoplaySlider>
  );
}
