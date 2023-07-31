import { useEffect, useState } from "react";
import http from "../services/httpService";
import { getAllComments } from "../services/getAllComments";
import { deleteComments } from "../services/deleteComments";
import { getSingleComment } from "../services/getSingleComment";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

const FullComment = ({ match, setComments, setSelectedId }) => {
  const commentId = match.params.id;
  const [fullComment, setFullComment] = useState(null);
  const navigate = useNavigate();
  const deleteHandler = async (e) => {
    try {
      await deleteComments(commentId);
      const { data } = await getAllComments();
      navigate("/homepage");
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
        <Link to={"/homepage"}>Return home?</Link>
      </div>
    );
  return commentDetail;
};

export default withRouter(FullComment);
