import axios from "axios";

export const getPosts = async (queryKey) => {
  const res = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data);
  return res;
};

export const getPost = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return res.data;
};
