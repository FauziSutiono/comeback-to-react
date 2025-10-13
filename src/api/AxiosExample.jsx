import axios from "axios";
import { useEffect, useState } from "react";

const AxiosExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          signal: controller.signal,
        });
        setData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(`Error: ${error.response?.status || "Network Error"}`);
        } else {
          setError("Unexpecteed Error");
        }
        console.error("Error fething data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default AxiosExample;
