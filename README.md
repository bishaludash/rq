### Queries : useQuery gettting data from api [GET]

- automatic retries if fails
- query Keys style idea

```
  posts -> ["posts"]
  posts/1 -> ["posts", post.id]
  posts?authorId=1 -> ["posts", {authoId :1}]
  posts -> ["posts", post.id, "comments"]
```

```js
// Example usecase
import { useQuery } from "@tanstack/react-query";

const getposts = async (queryKey) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json(),
  );
  return res;
};

const posts = useQuery({
  queryKey: ["posts"],
  queryFn: (queryKey) => getposts(queryKey),
});

if (posts.isLoading) {
  return <div>loading....</div>;
}

if (posts.isError) {
  return <div>{JSON.stringify(posts.error)}</div>;
}

return (
  <div>
    {posts.data.map((post) => (
      <div key={post.id}>{post.title}</div>
    ))}
  </div>
);
```

### Mutation : useMutation changing some type of data [POST]

```js
// Example usecase
import { useMutation, useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();

const newPostMutation = useMutation({
  mutationFn: async (data) => {
    return await axios.post("https://jsonplaceholder.typicode.com/posts", data);
  },
  onSuccess: () => {
    queryClient.invalidateQueries(["posts"]);
  },
});

const testData = {
  userId: 1,
  title: "Bishal test",
  body: "Bishal test123",
};

return (
  <div>
    <button onClick={() => newPostMutation.mutate(testData)}>Add post</button>
  </div>
);
```
