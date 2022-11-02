import Marquee from "react-fast-marquee";
import { Box } from "@mui/material";
import { useHandleChangeAppUi } from "../../Common/Context/AppUIContext";

interface ITickerProps {
  newsDescription: string;
}

export default function Ticker(props: ITickerProps) {
  const { newsDescription } = props;
  const {
    appUiOptions: { isTickerRun },
  } = useHandleChangeAppUi();

  if (!newsDescription) return null;

  return (
    <Box>
      <Marquee play={isTickerRun} speed={10} gradient={false}>
        <div className="ticker-text">{newsDescription}</div>
      </Marquee>
    </Box>
  );
}
