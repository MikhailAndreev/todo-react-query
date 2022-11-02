import { useState } from "react";
import {
  IconButton,
  FormControlLabel,
  Popper,
  Typography,
  Fade,
  Switch,
  Paper,
  Box,
  Grid,
} from "@mui/material";

import { ReactComponent as SettingsIcon } from "../../Assets/Icons/settings.svg";
import { TRANSITION_TIMEOUT_POPPER_MS } from "../../Consts/consts";
import { useHandleChangeAppUi } from "../../Common/Context/AppUIContext";

export default function CustomPopover() {
  const { appUiOptions, handleChangeAppUi } = useHandleChangeAppUi();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(appUiOptions.isTickerRun);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isTickerRun = event.target.checked;
    setChecked(isTickerRun);
    handleChangeAppUi({ ...appUiOptions, isTickerRun });
  };
  const isLoading = false;

  return (
    <Box>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-end" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={TRANSITION_TIMEOUT_POPPER_MS}>
            <Paper>
              <Box p={2}>
                <Typography>News ticker manager</Typography>

                <FormControlLabel
                  control={
                    <Switch
                      disabled={isLoading}
                      checked={checked}
                      onChange={handleChange}
                    />
                  }
                  label={checked ? "Stop" : "Start"}
                />
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>

      <Grid container justifyContent="center">
        <Grid item>
          <IconButton onClick={handleClick}>
            <SettingsIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
