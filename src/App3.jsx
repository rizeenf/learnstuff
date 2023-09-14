import "./App.css";
import React from "react";
import MoneyChanger from "./Components/HOC/MoneyChanger";
import Money2Changer from "./Components/HOC/Money2Changer";
import Callback from "./Hooks/useCallback";
import Ref from "./Hooks/useRef";
import FetchData from "./Components/FetchData";

const App3 = () => {
  return (
    <div>
      {/* <MoneyChanger />
      <Money2Changer /> */}

      {/* <FetchData /> */}

      <Ref />
    </div>
  );
};

export default App3;
