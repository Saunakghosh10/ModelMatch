import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onLinkClick = useCallback(() => {
    navigate("/the-nord-ai");
  }, [navigate]);

  return (
    <section className="self-stretch h-[803.1px] relative shrink-0 [debug_commit:1de1738] mt-[-26.1px]">
      <div className="absolute top-[767px] left-[0px] [filter:blur(50.4px)] bg-indigo w-[1440px] h-[26px]" />
      <img
        className="absolute h-full top-[0px] bottom-[0px] left-[401px] max-h-full w-[637.4px] overflow-hidden object-cover z-[1]"
        alt=""
        src="/pricingglowwebp@2x.png"
      />
      <form className="m-0 absolute top-[121px] left-[94px] rounded-13xl bg-gray-700 w-[1252px] h-[449px] z-[2]">
        <div className="absolute top-[0px] left-[0px] rounded-13xl bg-gray-700 w-full h-full hidden" />
        <h1 className="m-0 absolute top-[61px] left-[59.8px] text-23xl font-semibold font-clash-display text-white text-left z-[3] mq450:text-6xl mq1050:text-15xl">
          Explore comparisons
        </h1>
        <h3 className="m-0 absolute top-[127px] left-[59.8px] text-xl font-normal font-clash-grotesk text-white text-left inline-block w-[560.5px] z-[3] mq450:text-base">
          Compare LLMs on converting natural language questions to SQL queries
          on the Spider dataset.
        </h3>
        <h2 className="m-0 absolute top-[239px] left-[59.8px] text-5xl leading-[20px] font-medium font-clash-grotesk text-white text-left z-[3] mq450:text-lgi mq450:leading-[16px]">
          Select two models to compare
        </h2>
        <FormControl
          className="absolute top-[301px] left-[59.8px] font-clash-grotesk font-medium text-xl text-white z-[3]"
          variant="standard"
          sx={{
            borderColor: "#fff",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#1d1c20",
            borderRadius: "8px",
            width: "33.626198083067095%",
            height: "56px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "56px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "56px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "56px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "56px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#fff",
              fontSize: 20,
              fontWeight: "Medium",
              fontFamily: "Clash Grotesk",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "16px",
            },
          }}
        >
          <InputLabel color="success" />
          <Select
            color="success"
            disableUnderline
            displayEmpty
            IconComponent={() => (
              <img
                width="12px"
                height="8.4px"
                src="/vector-1.svg"
                style={{ marginRight: "37.799999999999955px" }}
              />
            )}
          >
            <MenuItem>gpt-3.5-turbo</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className="absolute top-[301px] left-[522.8px] font-clash-grotesk font-medium text-xl text-gray-100 z-[3]"
          variant="standard"
          sx={{
            borderColor: "#fff",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#1d1c20",
            borderRadius: "8px",
            width: "33.626198083067095%",
            height: "56px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "56px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "56px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "56px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "56px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#fafafa",
              fontSize: 20,
              fontWeight: "Medium",
              fontFamily: "Clash Grotesk",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "16px",
            },
          }}
        >
          <InputLabel color="success" />
          <Select
            color="success"
            disableUnderline
            displayEmpty
            IconComponent={() => (
              <img
                width="12px"
                height="8.4px"
                src="/vector-1.svg"
                style={{ marginRight: "37.80000000000001px" }}
              />
            )}
          >
            <MenuItem>gpt-4</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <Button
          className="absolute top-[306px] left-[1005.8px] [backdrop-filter:blur(16px)] cursor-pointer z-[3]"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "16",
            background: "#fff",
            border: "rgba(255, 255, 255, 0.08) solid 1px",
            borderRadius: "32px",
            "&:hover": { background: "#fff" },
            width: 186.4,
            height: 46,
          }}
          data-scroll-to="link"
          onClick={onLinkClick}
        >
          Compare
        </Button>
      </form>
    </section>
  );
};

export default FrameComponent;
