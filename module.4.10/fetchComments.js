export const fetchComments = async (commentId = 1) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${commentId}/comments`
  );

  return response.json();
};
