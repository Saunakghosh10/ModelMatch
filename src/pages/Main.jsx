import Section from "../components/Section";
import FrameComponent from "../components/FrameComponent";
import Content from "../components/Content";
import Bottom from "../components/Bottom";

const Main = () => {
  return (
    <div className="w-full h-[2512px] relative bg-gray-600 overflow-hidden flex flex-col items-start justify-start pt-[1299px] px-0 pb-0 box-border leading-[normal] tracking-[normal] lg:h-auto">
      <Section />
      <FrameComponent />
      <footer className="self-stretch bg-gray-300 flex flex-col items-start justify-start shrink-0 [debug_commit:1de1738] max-w-full z-[2] mt-[-26.1px]">
        <Content />
        <Bottom />
      </footer>
    </div>
  );
};

export default Main;
