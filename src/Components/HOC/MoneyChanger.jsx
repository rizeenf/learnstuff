import React, { useState } from "react";
import UpdatedComponent from "./HOC";
import withUser from "../../HOC/withUser";

const MoneyChanger = ({ counter, addCounter }) => {
  return (
    <div>
      <h3>Money right now {counter} juta rupiah </h3>
      <button onClick={addCounter}>Tingkatkan</button>
    </div>
  );
};

export default withUser(MoneyChanger);
