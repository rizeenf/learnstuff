import React, { useEffect } from "react";

const TestCallback = ({ GetData }) => {
  useEffect(() => {
    console.log("Rerender");
  }, [GetData]);

  const data = GetData();

  return (
    <div>
      {data.map((item, idx) => (
        <p key={idx}>{item}</p>
      ))}
    </div>
  );
};

export default TestCallback;
