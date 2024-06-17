// React Import
import { useContext } from "react";

// Context Import
import { AppContext } from "../context/AppContext";

// Default Function
export default function useAppContext() {
  const context = useContext(AppContext);

  if (!context){
    throw new Error ('App Context used outside scope');
  }

  return context;
}
