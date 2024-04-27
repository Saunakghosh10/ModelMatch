const Content = () => {
  return (
    <div className="self-stretch rounded-t-11xl rounded-b-none [backdrop-filter:blur(60px)] flex flex-row items-start justify-between py-24 pr-24 pl-[100px] box-border max-w-full gap-[20px] text-left text-lg text-white font-advent-pro lg:flex-wrap mq450:pt-[46.09999999999991px] mq450:px-5 mq450:pb-[62px] mq450:box-border mq750:pl-[50px] mq750:pr-12 mq750:box-border">
      <div className="h-7 w-[141px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[4px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/autumn.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
            <h3 className="m-0 self-stretch relative text-inherit font-semibold font-inherit">
              Modelmatch
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[90.33333333333331px] max-w-[720px] text-smi text-gray-700 font-caption-regular mq450:gap-[90.3px_23px] mq750:gap-[90.3px_45px] mq750:max-w-full mq1050:flex-wrap">
        <div className="w-[101px] flex flex-col items-start justify-start">
          <div className="self-stretch h-10 rounded-3xs flex flex-row items-start justify-start p-2.5 box-border gap-[8px] text-sm text-white">
            <div className="h-[22px] w-0.5 relative box-border border-r-[2px] border-solid border-gray-900" />
            <div className="relative leading-[20px] font-medium inline-block min-w-[61px]">
              Products
            </div>
          </div>
          <div className="rounded-3xs flex flex-row items-start justify-start py-2.5 px-5">
            <div className="relative leading-[20px] inline-block min-w-[51px] hover:text-blue-800 cursor-pointer text-white">
              Courses
            </div>
          </div>
          <div className="rounded-3xs flex flex-row items-start justify-start py-2.5 px-5">
            <div className="relative leading-[20px] inline-block min-w-[53px] hover:text-blue-800 cursor-pointer text-white">
              Tutorials
            </div>
          </div>
          <div className="rounded-3xs flex flex-row items-start justify-start py-2.5 px-5">
            <div className="relative leading-[20px] inline-block min-w-[53px] hover:text-blue-800 cursor-pointer text-white">
              Pricing
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="h-10 rounded-3xs flex flex-row items-start justify-start p-2.5 box-border gap-[8px] text-sm text-white">
            <div className="h-[22px] w-0.5 relative box-border border-r-[2px] border-solid border-gray-900" />
            <div className="relative leading-[20px] font-medium inline-block min-w-[64px]">
              Company
            </div>
          </div>
          <div className="rounded-3xs flex flex-row items-start justify-start py-2.5 px-5">
            <div className="relative leading-[20px] inline-block min-w-[68px] hover:text-blue-800 cursor-pointer text-white">
              About Us
            </div>
          </div>
          <div className="rounded-3xs flex flex-row items-start justify-start py-2.5 px-5">
            <div className="relative leading-[20px] inline-block min-w-[78px] hover:text-blue-800 cursor-pointer text-white">
              Contact Us
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="h-10 rounded-3xs flex flex-row items-start justify-start p-2.5 box-border gap-[8px] text-sm text-white">
            <div className="h-[22px] w-0.5 relative box-border border-r-[2px] border-solid border-gray-900" />
            <div className="relative leading-[20px] font-medium inline-block min-w-[71px]">
              Resources
            </div>
          </div>
          <div className="rounded-3xs flex flex-row items-start justify-start py-2.5 px-5">
            <div className="relative leading-[20px] inline-block min-w-[69px] hover:text-blue-800 cursor-pointer text-white">
              Downloads
            </div>
          </div>

          <div className="rounded-3xs flex flex-row items-start justify-start py-2.5 px-5">
            <div className="relative leading-[20px] inline-block min-w-[71px] hover:text-blue-800 cursor-pointer text-white">
              Community
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px] text-sm text-white">
          <div className="h-10 rounded-3xs flex flex-row items-start justify-start py-2.5 pr-5 pl-0 box-border gap-[8px]">
            <div className="h-[22px] w-0.5 relative box-border border-r-[2px] border-solid border-gray-900" />
            <div className="relative leading-[20px] font-medium inline-block min-w-[82px]">
              FOLLOW US
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[10px] opacity-[0.6]">
            <div className="h-button-size w-button-size rounded-13xl bg-gray-800 hover:bg-gray-700 shadow-[0px_1px_0px_rgba(0,_0,_0,_0.05),_0px_4px_4px_rgba(0,_0,_0,_0.05),_0px_10px_10px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 border-[1px] border-solid border-gray-900 cursor-pointer">
              <img
                className="h-button-icon-size w-button-icon-size relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/facebook--logo.svg"
              />
            </div>
            <div className="h-button-size w-button-size rounded-13xl bg-gray-800 hover:bg-gray-700 shadow-[0px_1px_0px_rgba(0,_0,_0,_0.05),_0px_4px_4px_rgba(0,_0,_0,_0.05),_0px_10px_10px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 border-[1px] border-solid border-gray-900 cursor-pointer">
              <img
                className="h-button-icon-size w-button-icon-size relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/x--logo.svg"
              />
            </div>
            <div className="h-button-size w-button-size rounded-13xl bg-gray-800 hover:bg-gray-700 shadow-[0px_1px_0px_rgba(0,_0,_0,_0.05),_0px_4px_4px_rgba(0,_0,_0,_0.05),_0px_10px_10px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 border-[1px] border-solid border-gray-900 cursor-pointer">
              <img
                className="h-button-icon-size w-button-icon-size relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/instagram--logo.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;