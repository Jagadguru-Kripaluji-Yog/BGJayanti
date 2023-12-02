import { Meta, StoryObj } from "@storybook/react";
import { Hero, HeroProps } from ".";
export default {
  title: "Components/Hero",
  component: Hero,
  args: {
    autoplay: false,
  },
} as Meta<HeroProps>;

export const Default: StoryObj<HeroProps> = {
  render: (args) => (
    <div className="w-[900px] h-[500px] relative">
      <Hero
        {...args}
        screens={[
          {
            media: "/bg-1.png",
            caption: <span className="p-10">Jai sia ram!</span>,
            captionStyles: { margin: 100 },
          },
          {
            media: "/bg-2.png",
            caption: "Jai shree radhe!",
          },
        ]}
      />
    </div>
  ),
};
