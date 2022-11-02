import { Modal, Box } from "@mui/material";
import { useHandleChangeAppUi } from "../../Common/Context/AppUIContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type CustomModalProps = {
  children: JSX.Element;
};

export const CustomModal = ({ children }: CustomModalProps) => {
  const {
    appUiOptions: { isModalOpen },
    appUiOptions,
    handleChangeAppUi,
  } = useHandleChangeAppUi();

  const handleModal = () => {
    handleChangeAppUi({ ...appUiOptions, isModalOpen: false });
  };

  return (
    <Modal
      open={isModalOpen}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};
