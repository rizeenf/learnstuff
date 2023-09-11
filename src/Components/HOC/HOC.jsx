import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
  return (props) => {
    const [money, setMoney] = useState(10);
    const handleAdd = () => {
      setMoney((prev) => prev + 1);
    };

    return <OriginalComponent {...props} money={money} handleAdd={handleAdd} />;
  };
};

export default UpdatedComponent;
