import "./App.css";
import React from "react";
import MoneyChanger from "./Components/HOC/MoneyChanger";
import Money2Changer from "./Components/HOC/Money2Changer";
import Callback from "./Hooks/useCallback";
import FetchData from "./Components/FetchData";

const App3 = () => {
  return (
    <div>
      {/* <MoneyChanger />
      <Money2Changer /> */}

      <FetchData />
    </div>
  );
};

export default App3;
