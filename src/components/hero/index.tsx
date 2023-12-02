import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import withCaptions from "./captioned-hoc";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const AutoplaySlider = withCaptions(withAutoplay(AwesomeSlider));

export interface HeroProps {
  autoplay?: boolean;
  screens: {
    media: string;
    caption: React.ReactNode;
    captionStyles?: React.CSSProperties;
    captionTextStyles?: React.CSSProperties;
  }[];
}
export function Hero({ autoplay, screens }: HeroProps) {
  return (
    <AutoplaySlider
      play={!!autoplay}
      cancelOnInteraction={false}
      slider
      bullets={false}
      fillParent
      organicArrows={false}
      screens={screens}
    />
  );
}
