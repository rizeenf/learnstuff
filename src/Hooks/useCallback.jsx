import React, { useCallback, useState } from "react";
import TestCallback from "../Components/TestCallback";

const Callback = () => {
  const [counter, setCounter] = useState(0);
  const [isShowData, setIsShowData] = useState(false);

  const GetCounterData = useCallback(() => {
    return [counter * 2, counter * 3, counter * 4];
  }, [counter]);

  const GetRandomData = useCallback(() => {
    const data = Math.floor(Math.random() * 100);
    return [data * 2, data * 3, data * 4];
  }, []);

  return (
    <div>
      <p>Add counter : {counter} </p>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Add Counter
      </button>
      <br />
      <p>Show Data : {isShowData.toString()} </p>
      <button onClick={() => setIsShowData(!isShowData)}>Set Show Data</button>

      <TestCallback GetData={GetRandomData} />
    </div>
  );
};

export default Callback;
