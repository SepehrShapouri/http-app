import { useEffect } from "react";
import axios from "axios";
const FullComment = ({ commentId }) => {
  if (!commentId)
    return <p className="selectcomment">Please select a comment!</p>;
  return (
    <div className="fullcomment">
      <p>name</p>
      <p>email</p>
      <p>body</p>
    </div>
  );
};

export default FullComment;
