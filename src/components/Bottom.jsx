const Bottom = () => {
  const scrollToTop = () => {
    const scrollHeight = window.scrollY;
    const scrollStep = Math.PI / (500 / 15);
    const cosParameter = scrollHeight / 2;
    let scrollCount = 0;
    let scrollMargin;
    let scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        scrollCount = scrollCount + 1;
        scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
        window.scrollTo(0, (scrollHeight - scrollMargin));
      } else clearInterval(scrollInterval);
    }, 15);
  };

  return (
    <div className="self-stretch box-border flex flex-row items-start justify-between pt-[18px] px-24 pb-5 max-w-full gap-[20px] text-left text-smi text-gray-800 font-caption-regular border-t-[1px] border-solid border-gray-1000 mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-12 mq750:pr-12 mq750:box-border mq1050:flex-wrap">
      <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
        <div className="relative leading-[20px]">
          © 2024 Model match PVT Limited Company
        </div>
      </div>
      <div className="w-[418px] flex flex-row items-start justify-start gap-[40px] max-w-full mq450:flex-wrap mq450:gap-[20px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[217px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[15.6px]">
            <div className="relative leading-[20px] inline-block min-w-[104px]">
              Terms of Service
            </div>
            <div className="h-[18.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
              <div className="w-px h-[18px] relative box-border border-r-[1px] border-solid border-gray-1000" />
            </div>
            <div className="relative leading-[20px] inline-block min-w-[86px]">
              Privacy Policy
            </div>
            <div className="h-[18.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
              <div className="w-px h-[18px] relative box-border border-r-[1px] border-solid border-gray-1000" />
            </div>
            <div className="relative leading-[20px] inline-block min-w-[44px]">
              English
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              loading="lazy"
              alt=""
              src="/chevron-down.svg"
            />
          </div>
        </div>
        <div
          className="h-11 w-11 rounded-13xl bg-gray-900 box-border flex flex-row items-center justify-center p-1.5 border-[1px] border-solid border-gray-1000"
          onClick={scrollToTop}
        >
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/arrow-up.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
