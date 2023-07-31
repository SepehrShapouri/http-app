import { useState } from "react";
import { postComments } from "../services/postComments";
import { getAllComments } from "../services/getAllComments";
import { useNavigate } from "react-router";
const NewComment = ({ setComments }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setComment({ ...comment, [id]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await postComments({ ...comment, postId: 1 });
      navigate("/homepage");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="newcomment">
      <form onSubmit={submitHandler} className="commentform">
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
