import React, { useState } from "react";

const withUser = (OriginalComponent) => {
  return (props) => {
    const [counter, setCounter] = useState(1);

    const addCounter = () => {
      setCounter((counter) => counter + 1);
    };

    return (
      <OriginalComponent {...props} counter={counter} addCounter={addCounter} />
    );
  };
};

export default withUser;
