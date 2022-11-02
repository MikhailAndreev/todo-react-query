import { combineContexts } from "../Utils/combineContexts";
import { AppModalContextProvider } from "./AppUIContext";
import { TasksContextProvider } from "./TasksContext";

const providers = [AppModalContextProvider, TasksContextProvider];

export const AppContextProvider = combineContexts(...providers);
