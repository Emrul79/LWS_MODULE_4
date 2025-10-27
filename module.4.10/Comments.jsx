import React, { useEffect } from "react";
import { fetchComments } from "./fetchComments";

export default function Comments({ postId }) {
  const [comments, setComments] = React.useState([]);
  console.log(comments);

  useEffect(() => {
    let ignore = false;
    const allComments = async () => {
      const myComments = await fetchComments(postId);
      if (!ignore) {
        setComments(myComments);
      }
    };

    allComments();

    //claenUp
    return () => {
      ignore = true;
    };
  }, [postId]);
  return (
    <div>
      <ul className="p-20">
        {comments.map((comment) => (
          <li className="p-10 bg-slate-50 " key={comment.id}>
            {comment.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
