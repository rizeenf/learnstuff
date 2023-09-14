import React, { useState } from "react";
// import UpdatedComponent from "./HOC";
import withUser from "../../HOC/withUser";

const Money2Changer = ({ counter, addCounter }) => {
  return (
    <div>
      <h3>Money2Changer right now {counter} juta rupiah </h3>
      <button onClick={addCounter}>Tingkatkan</button>
    </div>
  );
};

export default withUser(Money2Changer);
