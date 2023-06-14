import { useEffect, useState } from "react";
import "./App.css";
import Comment from "./Comment";
import FullComment from "./FullComment";
import NewComment from "./NewComment";
import axios, { Axios } from "axios";
import { toast } from 'react-toastify';
const Discussion = () => {
  const [comment, setComment] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get("http://localhost:3020/comments");
        setComment(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    getComments();
  }, []);
  const submitHandler = (e, comment) => {
    e.preventDefault();
    axios
      .post("http://localhost:3020/comments", {
        ...comment,
        postId: 1,
      })
      .then((res) => axios.get("http://localhost:3020/comments"))
      .then((res) => setComment(res.data))
      .catch((err) => console.log(err));
  };
  const selectedCommentHandler = (id) => {
    setSelectedId(id);
  };
  const deleteHandler = (e) => {
    axios
      .delete(`http://localhost:3020/comments/${selectedId}`)
      .then((res) => axios.get("http://localhost:3020/comments"))
      .then((res) => setComment(res.data))
      .catch();
  };
  const renderComments = () => {
    let renderedValue = <p>Loading...</p>;
    if (error) {renderedValue = <p>Fetching data failed!</p>;
  toast.error("hi")}
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
      <FullComment commentId={selectedId} deleteHandler={deleteHandler} />
      <NewComment newCommentBtn={submitHandler} />
    </section>
  );
};

export default Discussion;
