import { Meta, StoryObj } from "@storybook/react";
import { ScrollWrapper, ScrollWrapperProps } from ".";

export default {
  component: ScrollWrapper,
  title: "Components/ScrollWrapper",
  args: {
    scrollTo: "#section-2",
  },
} as Meta<ScrollWrapperProps>;

export const Default: StoryObj<ScrollWrapperProps> = {
  render: (args) => (
    <ScrollWrapper {...args}>
      <div className="h-[300px] max-h-[300px] w-[900px] bg-green-200 overflow-scroll">
        <section id="section-1" className="h-full w-full">
          Hero section
        </section>
        <section id="section-2">Some other section</section>
      </div>
    </ScrollWrapper>
  ),
};
