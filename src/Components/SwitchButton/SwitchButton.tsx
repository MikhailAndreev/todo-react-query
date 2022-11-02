import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SwitchCheckIcon from "../../Assets/Icons/check.svg";
import SwitchCrossIcon from "../../Assets/Icons/cross.svg";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 52,
  height: 37,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px) translateY(6px)",
    "& + .MuiSwitch-track": {
      backgroundColor: "#366EFF",
    },
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px) translateY(6px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(${SwitchCheckIcon})`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#10C200",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    backgroundColor: "#F4F4F4",
    width: 22,
    height: 22,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${SwitchCrossIcon})`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

export default function SwitchButton() {
  const hendleChange = (e: any) => {
    e.stopPropagation();
    console.log("clicked");
  };
  return (
    <MaterialUISwitch
      sx={{ m: 1 }}
      defaultChecked
      inputProps={{ "aria-label": "Switch A" }}
      onChange={(e) => hendleChange(e)}
      onClick={(e) => hendleChange(e)}
    />
  );
}
