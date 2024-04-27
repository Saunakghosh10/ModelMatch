import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";

const TheNordAI = () => {
  const navigate = useNavigate();

  const onModelmatchTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-400 overflow-hidden flex flex-col items-center justify-start pt-[39px] px-5 pb-[134px] box-border gap-[64px] leading-[normal] tracking-[normal] text-left text-lg text-white font-clash-display mq450:gap-[16px] mq600:gap-[32px]">
      <div className="w-[1196.8px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
        <div className="flex flex-row items-start justify-start gap-[4px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/autumn.svg"
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div
              className="relative font-semibold inline-block min-w-[113px] cursor-pointer"
              onClick={onModelmatchTextClick}
            >
              Modelmatch
            </div>
          </div>
        </div>
        <div className="w-[243.8px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border text-center text-sm text-darkgray font-caption-regular">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative leading-[20px] font-medium whitespace-nowrap">
              hey@Modelmatch.run
            </div>
            <div className="relative leading-[20px] font-medium inline-block min-w-[52px]">
              Discord
            </div>
          </div>
        </div>
      </div>
      <main className="w-[1200px] flex flex-col items-start justify-start gap-[10px] max-w-full">
        <FrameComponent2 />
        <FrameComponent1 />
      </main>
    </div>
  );
};

export default TheNordAI;
