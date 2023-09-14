import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";

const Ref = () => {
  const [couint, setCouint] = useState(0);
  const rendered = useRef(0);

  useEffect(() => {
    rendered.current += 1;

    console.log("rendered");
  });
  return (
    <div>
      <button onClick={() => setCouint((couint) => couint + 1)}>
        Renderedd : {couint}
        <br />
      </button>
      rendered : {rendered.current}
    </div>
  );
};

export default Ref;
