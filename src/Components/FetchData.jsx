import React from "react";
import useFetchData from "../Hooks/useFetchData";

const FetchData = () => {
  const fetchData = useFetchData();

  const [data, isLoading, isError] = fetchData;

  return isError ? (
    "Error .."
  ) : (
    <div>
      {isLoading
        ? "Loading..."
        : data.map((item) => (
            <p key={item.id}>
              {item.id}. {item.title}
            </p>
          ))}
    </div>
  );
};

export default FetchData;
