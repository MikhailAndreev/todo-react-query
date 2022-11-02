import React, { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import { queryClient } from "./Common/ReactQuery";
import { AppContextProvider } from "./Common/Context/AppContextProvider";
import { MainPage } from "./Pages/MainPage";

dayjs.extend(isToday);

function App() {
  return (
    <React.Suspense fallback={null}>
      <AppContextProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </Router>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </AppContextProvider>
    </React.Suspense>
  );
}

export default App;
