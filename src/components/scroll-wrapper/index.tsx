import { FaChevronDown } from "react-icons/fa";

export interface ScrollWrapperProps {
  children: React.ReactElement;
  scrollTo: string;
  arrowStyles?: React.CSSProperties;
}
export function ScrollWrapper({ children, scrollTo }: ScrollWrapperProps) {
  return (
    <div className="relative w-full h-full flex z-10">
      {children}
      <a
        href={scrollTo}
        className="hover:cursor-pointer absolute bottom-0 ml-[40%] mr-[40%] mb-10 text-[100px] text-white animate-bounce"
      >
        <FaChevronDown />
      </a>
    </div>
  );
}
