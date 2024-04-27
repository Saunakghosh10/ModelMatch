import { useCallback } from "react";

const Section = () => {
  const onSectionLinkClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='link']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="mt-[-1311px] mb-[16.09999999999991px] self-stretch flex flex-col items-center justify-start pt-[51px] px-5 pb-[116.79999999999995px] gap-[111px] bg-[url('/public/section@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 [debug_commit:f6aba90] text-center text-53xl text-gray-100 font-clash-display-variable lg:pt-[33px] lg:pb-[76px] lg:box-border mq450:gap-[28px_111px] mq750:gap-[55px_111px] mq750:pt-[21px] mq750:pb-[49px] mq750:box-border">
    <header className="w-full h-6 flex flex-row items-center justify-center py-0 pr-0 pl-3 box-border top-0 z-50 max-w-full text-left text-lg text-white  font-clash-display">
      <div className="self-stretch w-[1089.5px] flex flex-row items-start justify-between gap-[20px] max-w-full">
        <div className="self-stretch w-[141px] flex flex-row items-start justify-start gap-[4px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
            loading="lazy"
            alt=""
            src="/autumn.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
            <h3 className="m-0 self-stretch relative text-inherit font-semibold font-inherit whitespace-nowrap z-[1] cursor-pointer">
              Modelmatch
            </h3>
          </div>
        </div>
        <div className="w-[220.5px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border text-center text-sm text-darkgray font-caption-regular">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative leading-[20px] font-medium inline-block min-w-[125.3px] whitespace-nowrap z-[1] cursor-pointer">
              hey@empirical.run
            </div>
            <div className="w-[51.7px] relative leading-[20px] font-medium flex items-center justify-center shrink-0 min-w-[51.7px] z-[1] cursor-pointer">
              Discord
            </div>
          </div>
        </div>
      </div>
    </header>
      <div className="w-[1252px] flex flex-col items-start justify-start gap-[66.5px] max-w-full mq450:gap-[17px] mq750:gap-[33px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1025.7px] flex flex-col items-end justify-start gap-[52.7px] max-w-full mq750:gap-[26px]">
            <h1 className="m-0 self-stretch relative text-inherit font-inherit mq450:text-24xl mq1050:text-39xl">
              <span className="font-medium">Choose the Right</span>
              <span className="font-semibold"> LLM</span>
              <span>{` `}</span>
              <span className="font-medium">for your</span>
              <span>{` `}</span>
              <span className="font-semibold">Use-Case</span>
            </h1>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-xl text-gray-500 font-clash-grotesk">
              <div
                className="w-[259.8px] rounded-lg bg-white box-border flex flex-row items-end justify-start py-2.5 pr-5 pl-7 whitespace-nowrap cursor-pointer border-[1px] border-solid border-white"
                onClick={onSectionLinkClick}
              >
                <div className="flex-1 relative leading-[24px] font-medium">
                  Try Now
                </div>
                <img
                  className="h-[23.7px] w-[23.7px] relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/svg.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="h-[674px] flex-1 relative shadow-[0px_0px_0px_1px_rgba(255,_255,_255,_0.08)] rounded-2xl bg-midnightblue overflow-hidden max-w-full">
            <img
              className="absolute w-[calc(100%_-_18.5px)] top-[13.3px] right-[11.2px] left-[7.3px] rounded-8xs max-w-full overflow-hidden h-[651.5px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/screenshot-20240306-at-648-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
