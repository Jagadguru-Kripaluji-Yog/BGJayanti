import * as React from "react";

export interface HeroSlideProps extends React.ComponentPropsWithRef<"div"> {
  children: React.ReactNode;
}
export function HeroSlide({ children, ...props }: HeroSlideProps) {
  return <div {...props}>{children}</div>;
}
