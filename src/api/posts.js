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

export const createPost = async (data) => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

export function getPostsPaginated(page) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=10`)
    .then((res) => res.data);
}
