import { useState } from "react";
import axios from "axios";
const NewComment = ({ newCommentBtn }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setComment({ ...comment, [id]: value });
  };

  return (
    <section className="newcomment">
      <form onSubmit={(e) => newCommentBtn(e, comment)} className="commentform">
        <span>
          <label htmlFor="name">name</label>
          <input type="text" onChange={handleInputChange} id="name" />
        </span>
        <span>
          <label htmlFor="email">email</label>
          <input type="text" onChange={handleInputChange} id="email" />
        </span>
        <span>
          <label htmlFor="body">body</label>
          <input type="textarea" onChange={handleInputChange} id="body" />
        </span>
        <button className="addbtn">add</button>
      </form>
    </section>
  );
};

export default NewComment;
