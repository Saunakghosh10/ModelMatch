import { useCallback } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import GroupComponent from "./GroupComponent";

const FrameComponent1 = () => {
  const onGroupButtonClick = useCallback(() => {
    // Please sync "The Nord AI" to the project
  }, []);

  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-left text-base text-white font-clash-grotesk">
      <div className="flex-1 rounded-sm bg-gray-200 flex flex-col items-start justify-start p-[18px] box-border gap-[24px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[266px] max-w-full">
            <textarea
              className="bg-gray-200 h-[271px] w-auto [outline:none] self-stretch rounded-3xs box-border flex flex-row items-start justify-start p-5 font-clash-grotesk font-light text-base text-white border-[1px] border-solid border-white"
              placeholder="User Propmpt Here |"
              rows={14}
              cols={21}
            />
            <Button
              className="self-stretch h-[42px] mq450:pl-5 mq450:pr-5 mq450:box-border"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "18",
                background: "#fff",
                borderRadius: "23px",
                "&:hover": { background: "#fff" },
                height: 42,
              }}
            >
              Run this prompt
            </Button>
          </div>
          <div className="w-[352px] rounded-3xs bg-gray-200 box-border flex flex-col items-start justify-start pt-6 px-5 pb-[17px] gap-[26px] max-w-full border-[1px] border-solid border-stroke">
            <div className="w-[352px] h-[339px] relative rounded-3xs bg-gray-200 box-border hidden max-w-full border-[1px] border-solid border-stroke" />
            <FormControl
              className="self-stretch h-14 font-clash-grotesk font-medium text-lg text-gray-100 w-auto z-[1]"
              variant="standard"
              sx={{
                borderColor: "#676767",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#1d1c20",
                borderRadius: "8px",
                width: "88.06818181818183%",
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
                  fontSize: 18,
                  fontWeight: "Medium",
                  fontFamily: "Clash Grotesk",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "22px",
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
                    src="/vector.svg"
                    style={{ marginRight: "22px" }}
                  />
                )}
              >
                <MenuItem>gpt-4</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <GroupComponent />
          </div>
          <div className="w-[352px] rounded-3xs bg-gray-200 box-border flex flex-col items-start justify-start pt-6 pb-[17px] pr-[19px] pl-5 gap-[26px] max-w-full border-[1px] border-solid border-stroke">
            <div className="w-[352px] h-[339px] relative rounded-3xs bg-gray-200 box-border hidden max-w-full border-[1px] border-solid border-stroke" />
            <FormControl
              className="self-stretch h-14 font-clash-grotesk font-medium text-lg text-gray-100 w-auto z-[1]"
              variant="standard"
              sx={{
                borderColor: "#363538",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#1d1c20",
                borderRadius: "0px 0px 0px 0px",
                width: "88.06818181818183%",
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
                  fontSize: 18,
                  fontWeight: "Medium",
                  fontFamily: "Clash Grotesk",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "22px",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="12px"
                    height="8.4px"
                    src="/vector-1.svg"
                    style={{ marginRight: "22px" }}
                  />
                )}
              >
                <MenuItem>gpt-4</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
              <GroupComponent
                propAlignSelf="unset"
                propFlex="1"
                propTextShadow="1px 0 0 #363538, 0 1px 0 #363538, -1px 0 0 #363538, 0 -1px 0 #363538"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-[52px] flex flex-row items-start justify-center py-0 px-5 box-border">
          <Button
            className="self-stretch w-[87px] cursor-pointer"
            endIcon={<img width="24px" height="24px" src="/vector-2.svg" />}
            disableElevation={true}
            variant="outlined"
            sx={{
              borderColor: "#fff",
              borderRadius: "55px",
              "&:hover": { borderColor: "#fff" },
              width: 87,
            }}
            onClick={onGroupButtonClick}
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
