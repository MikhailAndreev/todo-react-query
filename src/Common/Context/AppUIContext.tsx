import React, { createContext, useState, useContext } from "react";
import noop from "lodash/noop";

const AppUIContext = createContext({
  appUiOptions: { isModalOpen: false, isTickerRun: true },
  handleChangeAppUi: noop,
});

const AppModalContextProvider = ({ children }: any) => {
  const [appUiOptions, handleChangeAppUi] = useState({
    isModalOpen: false,
    isTickerRun: true,
  });

  const value = React.useMemo(
    () => ({
      appUiOptions,
      handleChangeAppUi,
    }),
    [appUiOptions]
  );

  return (
    <AppUIContext.Provider value={value}>{children}</AppUIContext.Provider>
  );
};

const useHandleChangeAppUi = (): {
  appUiOptions: any;
  handleChangeAppUi: (options: any) => void;
} => {
  const context = useContext(AppUIContext);
  if (!context) {
    throw Error("useToggle must be used within a AppModalContextProvider");
  }

  const { appUiOptions, handleChangeAppUi: setOptions } = context;

  const handleChangeAppUi = (value: any) => {
    setOptions(value);
  };

  return { appUiOptions, handleChangeAppUi };
};

export { AppModalContextProvider, useHandleChangeAppUi };
