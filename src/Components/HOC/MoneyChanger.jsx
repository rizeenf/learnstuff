import React, { useState } from "react";
import UpdatedComponent from "./HOC";

const MoneyChanger = ({ money, handleAdd }) => {
  return (
    <div>
      <h3>Money right now {money} juta rupiah </h3>
      <button onClick={handleAdd}>Tingkatkan</button>
    </div>
  );
};

export default UpdatedComponent(MoneyChanger);
