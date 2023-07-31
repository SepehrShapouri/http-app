import { useEffect, useState } from "react";
import "./App.css";
import Comment from "./Comment";
import { getAllComments } from "../services/getAllComments";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Comments = () => {
  const [comment, setComment] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComment(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    getComments();
  }, []);

  const renderComments = () => {
    let renderedValue = <p>Loading...</p>;
    if (error) {
      renderedValue = <p>Fetching data failed!</p>;
      toast.error("hi");
    }
    if (comment && !error) {
      renderedValue = comment.map((c) => (
        <Link to={`/comment/${c.id}`} key={c.id}>
          <Comment name={c.name} email={c.email} />
        </Link>
      ));
    }
    return renderedValue;
  };
  return <section className="App">{renderComments()}</section>;
};

export default Comments;
