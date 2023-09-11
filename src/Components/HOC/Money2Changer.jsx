import React, { useState } from "react";
import UpdatedComponent from "./HOC";

const Money2Changer = ({ money, handleAdd }) => {
  return (
    <div>
      <h3>Money2Changer right now {money} juta rupiah </h3>
      <button onClick={handleAdd}>Tingkatkan</button>
    </div>
  );
};

export default UpdatedComponent(Money2Changer);
