import { useEffect, useState } from "react";
import axios from "axios";
const FullComment = ({ commentId, deleteHandler }) => {
  const [fullComment, setFullComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3020/comments/${commentId}`)
        .then((res) => setFullComment(res.data))
        .catch();
    }
  }, [commentId]);

  let commentDetail = <p className="selectcomment">Please select a comment!</p>;
  if (commentId) commentDetail = <p className="selectcomment">Loading...</p>;
  if (fullComment)
    commentDetail = (
      <div className="fullcomment">
        <p className="name">{fullComment.name}</p>
        <p className="email">{fullComment.email}</p>
        <p className="body">{fullComment.body}</p>
        <button onClick={deleteHandler} className="deletebtn">
          Delete
        </button>
      </div>
    );
  return commentDetail;
};

export default FullComment;
