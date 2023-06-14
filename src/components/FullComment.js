import { useEffect, useState } from "react";
import http from "../services/httpService";
import { getAllComments } from "../services/getAllComments";
import { deleteComments } from "../services/deleteComments";
import { getSingleComment } from "../services/getSingleComment";
const FullComment = ({ commentId, setComments, setSelectedId }) => {
  const [fullComment, setFullComment] = useState(null);
  const deleteHandler = async (e) => {
    try {
      await deleteComments(commentId);
      const { data } = await getAllComments();
      setComments(data);
      setSelectedId(null);
      setFullComment(null);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (commentId) {
      getSingleComment(commentId, setFullComment);
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
