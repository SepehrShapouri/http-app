import { useEffect, useState } from "react";
import "./App.css";
import Comment from "./Comment";
import FullComment from "./FullComment";
import NewComment from "./NewComment";
import { getAllComments } from "../services/getAllComments";
import { toast } from "react-toastify";
const Discussion = () => {
  const [comment, setComment] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
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

  const selectedCommentHandler = (id) => {
    setSelectedId(id);
  };
  const renderComments = () => {
    let renderedValue = <p>Loading...</p>;
    if (error) {
      renderedValue = <p>Fetching data failed!</p>;
      toast.error("hi");
    }
    if (comment && !error) {
      renderedValue = comment.map((c) => (
        <Comment
          name={c.name}
          email={c.email}
          body={c.body}
          key={c.id}
          onClick={() => selectedCommentHandler(c.id)}
        />
      ));
    }
    return renderedValue;
  };
  return (
    <section className="app">
      <div className="App">{renderComments()}</div>
      <FullComment
        setComments={setComment}
        commentId={selectedId}
        setSelectedId={setSelectedId}
      />
      <NewComment setComments={setComment} />
    </section>
  );
};

export default Discussion;
