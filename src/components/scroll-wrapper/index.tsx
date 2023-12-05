import { FaChevronDown } from "react-icons/fa";

export interface ScrollWrapperProps {
  children: React.ReactElement;
  scrollTo: string;
  arrowStyles?: React.CSSProperties;
}
export function ScrollWrapper({ scrollTo }: ScrollWrapperProps) {
  return (
    <div className="absolute w-full h-full flex z-10 top-0 left-0">
      <a
        href={scrollTo}
        className="hover:cursor-pointer absolute bottom-0 md:ml-[45%] ml-[50%] mb-10 md:text-[100px] text-[30px] text-white animate-bounce"
      >
        <FaChevronDown />
      </a>
    </div>
  );
}
