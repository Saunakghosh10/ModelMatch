import { useCallback } from "react";
import FrameComponent1 from "./FrameComponent1";

const EntityExtraction = () => {
  const onMainContainerClick = useCallback(() => {
    // Please sync "The Nord AI" to the project
  }, []);

  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
      <form className="m-0 flex-1 rounded-sm bg-gray-300 flex flex-col items-start justify-start p-[18px] box-border gap-[24px] max-w-full">
        <FrameComponent1 />
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <button className="cursor-pointer py-3 px-[30px] bg-[transparent] w-[87px] rounded-36xl box-border flex flex-row items-start justify-start border-[1px] border-solid border-white">
            <div className="overflow-hidden flex flex-row items-start justify-start w-6 h-6">
              <img className="h-6 w-6 relative" alt="" src="/vector-21.svg" />
            </div>
          </button>
        </div>
        <FrameComponent1 />
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div
            className="w-[87px] rounded-36xl bg-gray-300 box-border flex flex-row items-start justify-start py-3 px-[30px] cursor-pointer border-[1px] border-solid border-white"
            onClick={onMainContainerClick}
          >
            <div className="h-6 w-6 flex flex-col items-center justify-center py-2.5 px-0 box-border">
              <img
                className="w-[21px] h-[3px] relative"
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default EntityExtraction;
