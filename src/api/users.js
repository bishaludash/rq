import axios from "axios";

export const getUser = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  return res.data;
};
