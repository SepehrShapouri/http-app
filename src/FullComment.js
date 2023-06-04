import { useEffect, useState } from "react";
import axios from "axios";
const FullComment = ({ commentId }) => {
  const [fullComment, setFullComment] = useState(null);
  useEffect(() => {
    if(commentId){
      axios
      .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
      .then(res => setFullComment(res.data))
      .catch();
    }
  }, [commentId]);

  if (!commentId)
    return <p className="selectcomment">Please select a comment!</p>;
  return (
    <div className="fullcomment">
      <p>{fullComment.name}</p>
      <p>{fullComment.email}</p>
      <p>{fullComment.body}</p>
    </div>
  );
};

export default FullComment;
