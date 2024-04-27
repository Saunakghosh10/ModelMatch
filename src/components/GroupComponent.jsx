import { useMemo } from "react";
import { useRef } from "react";

const GroupComponent = ({ propAlignSelf, propFlex, propTextShadow }) => {
  const spanRef = useRef();

  const copyToClipboard = () => {
    const textToCopy = spanRef.current.textContent;
    navigator.clipboard.writeText(textToCopy);
  };
  const groupDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const nameJohnDoeContainerStyle = useMemo(() => {
    return {
      textShadow: propTextShadow,
    };
  }, [propTextShadow]);

  return (
    <div
      className="self-stretch rounded-3xs bg-black flex flex-col items-start justify-start pt-[37.9px] pb-[15.2px] pr-[15.5px] pl-[19.5px] gap-[2.9px] z-[1] text-left text-base text-white font-clash-grotesk"
      style={groupDivStyle}
    >
      <div className="w-[310px] h-[212px] relative rounded-3xs bg-black hidden" />
      <div
        className="h-[130px] relative font-light flex items-center shrink-0 z-[1]"
        style={nameJohnDoeContainerStyle}
      >
        <span ref={spanRef}>
          <p className="m-0 whitespace-pre-wrap">{`1            {`}</p>
          <p className="m-0 whitespace-pre-wrap">2 "name": "John Doe",</p>
          <p className="m-0 whitespace-pre-wrap">3 "age": 26,</p>
          <p className="m-0 whitespace-pre-wrap">4 "location": null,</p>
          <p className="m-0 whitespace-pre-wrap">
            5 "occupation": "real estate"
          </p>
          <p className="m-0 whitespace-pre-wrap">{`6          }`}</p>
        </span>
      </div>
      <img
        className="absolute top-[748px] left-[910px] w-6 h-[21px] overflow-hidden cursor-pointer"
        loading="lazy"
        alt=""
        src="/duplicate1streamlineultimate.svg"
        onClick={copyToClipboard}
      />
      <img
        className="absolute top-[748px] left-[1290px] w-6 h-[21px] overflow-hidden cursor-pointer"
        loading="lazy"
        alt=""
        src="/duplicate1streamlineultimate.svg"
        onClick={copyToClipboard}
      />
    </div>
  );
};

export default GroupComponent;
