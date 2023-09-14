import "./App.css";
import React from "react";
import MoneyChanger from "./Components/HOC/MoneyChanger";
import Money2Changer from "./Components/HOC/Money2Changer";
import Callback from "./Hooks/useCallback";

const App3 = () => {
  return (
    <div>
      {/* <MoneyChanger />
      <Money2Changer /> */}

      <Callback />
    </div>
  );
};

export default App3;
