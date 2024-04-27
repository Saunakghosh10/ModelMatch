import { Button } from "@mui/material";

const FrameComponent2 = () => {
  const defaultValue = `
  name (string)
  age (number)
  location (string)
  occupation (string)
`;
  return (
    //   <section className="self-stretch rounded-sm bg-gray-200 flex flex-col items-start justify-start py-5 pr-8 pl-5 box-border gap-[10px] max-w-full text-left text-base text-white font-clash-grotesk">
    //   <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
    //     <div className="relative leading-[24px] font-semibold inline-block min-w-[127px]">
    //       Prompt template
    //     </div>
    //     <Button
    //       className="h-[42px] w-[120px]"
    //       disableElevation={true}
    //       variant="contained"
    //       sx={{
    //         textTransform: "none",
    //         color: "#000",
    //         fontSize: "18",
    //         background: "#fff",
    //         borderRadius: "23px",
    //         "&:hover": { background: "#fff" },
    //         width: 120,
    //       }}
    //     >
    //       Quick run
    //     </Button>
    //   </div>
    //   <img
    //     className="w-[940.5px] relative max-h-full max-w-full shrink-0"
    //     loading="lazy"
    //     alt=""
    //     src="/]"
    //   />
    //   <div className="self-stretch rounded-3xs bg-black flex flex-row items-start justify-start p-2.5 shrink-0 text-sm">
    //     <div className="relative leading-[24px] font-light">
    //       <p className="m-0">
    //         You are an expert at extracting entities from incoming user
    //         messages. Users will introduce themselves with their
    //       </p>
    //       <textarea
    //         className="m-0 font-inherit text-inherit pl-[19px] bg-gray-200 h-[271px] w-auto [outline:none] self-stretch rounded-3xs box-border flex flex-row items-start justify-start p-5 font-clash-grotesk font-light text-base text-white border-[1px] border-solid border-white"
    //         defaultValue="name (string)\nage (number)\nlocation (string)\noccupation (string)"
    //         rows={14}
    //         cols={21}
    //       />
    //       <p className="m-0">{`You are expected to respond with a JSON object, which has the above keys and corresponding entities. If an entity is missing, respond with nullUser: (fuser_message)}`}</p>
    //     </div>
    //   </div>
    // </section>
    <section className="self-stretch rounded-sm bg-gray-200 flex flex-col items-start justify-start py-5 pr-8 pl-5 box-border gap-[10px] max-w-full text-left text-base text-white font-clash-grotesk">
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
        <div className="relative leading-[24px] font-semibold inline-block min-w-[127px]">
          Prompt template
        </div>
        <Button
          className="h-[42px] w-[120px]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "18",
            background: "#fff",
            borderRadius: "23px",
            "&:hover": { background: "#fff" },
            width: 120,
          }}
        >
          Quick run
        </Button>
      </div>
      <img
        className="w-[940.5px] relative max-h-full max-w-full shrink-0"
        loading="lazy"
        alt=""
        src="/]"
      />
      <div className="self-stretch rounded-3xs bg-black flex flex-row items-start justify-start p-2.5 shrink-0 text-sm">
        <div className="relative leading-[24px] font-light">
          <p>
            You are an expert at extracting entities from incoming user
            messages. Users will introduce themselves with their
          </p>
          <ul className="m-0 font-inherit text-inherit pl-5">
            <li className="mb-0">
              Name:{" "}
              <textarea
                className="border-2 border-gray-300 p-2 rounded-md resize-none inline-block w-20 h-5"
                defaultValue=""
              />
            </li>
            <li className="mb-0">
              Age:{" "}
              <textarea
                className="border-2 border-gray-300 p-2 rounded-md resize-none inline-block w-20 h-5"
                defaultValue=""
              />
            </li>
            <li className="mb-0">
              Location:{" "}
              <textarea
                className="border-2 border-gray-300 p-2 rounded-md resize-none inline-block w-20 h-5"
                defaultValue=""
              />
            </li>
            <li className="mb-0">
              Occupation:{" "}
              <textarea
                className="border-2 border-gray-300 p-2 rounded-md resize-none inline-block w-20 h-5"
                defaultValue=""
              />
            </li>
          </ul>
          <p className="m-0">
            You are expected to respond with a JSON object...
          </p>
          <p className="m-0">{`You are expected to respond with a JSON object, which has the above keys and corresponding entities. If an entity is missing, respond with nullUser: (fuser_message)}`}</p>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
