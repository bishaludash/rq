import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "./api/posts";

const CreatePost = () => {
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createPostMutation.mutate({
      title: "Lorem, ipsum dolor.",
      body: "Lorem ipsum dolor sit amet.",
    });
  };
  // used to show loading button
  console.log(createPostMutation.isPending);
  return (
    // {createPostMutation.isError && }
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title : <input type="text" />
        </div>
        <div>
          Body : <input type="text" />
        </div>
        <button disabled={createPostMutation.isPending}>
          {createPostMutation.isPending ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
