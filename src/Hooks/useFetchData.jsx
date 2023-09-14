import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const GetData = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/todos";
      const res = await axios.get(url);
      setData(res.data);

      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      console.log(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    GetData();
    console.log(data);
  }, []);

  return [data, isLoading, isError];
};

export default useFetchData;
