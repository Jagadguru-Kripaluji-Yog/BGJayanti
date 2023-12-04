import AwesomeSlider, { AwesomeSliderProps } from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import withCaptions from "./captioned-hoc";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const AutoplaySlider = withCaptions(withAutoplay(AwesomeSlider));

export interface HeroProps {
  autoplay?: boolean;
  transitionDelay?: number;
  screens: {
    media: string;
    caption: React.ReactNode;
    captionStyles?: React.CSSProperties;
    captionTextStyles?: React.CSSProperties;
  }[];
}
export function Hero({ autoplay, transitionDelay, screens }: HeroProps) {
  return (
    <AutoplaySlider
      play={!!autoplay}
      transitionDelay={transitionDelay}
      cancelOnInteraction={false}
      slider
      bullets={false}
      organicArrows={false}
      screens={screens}
    />
  );
}
