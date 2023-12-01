import { Hero } from ".";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const Default = {
  render: () => (
    <div className="w-[900px] h-[500px] relative">
      <Hero />
    </div>
  ),
};
