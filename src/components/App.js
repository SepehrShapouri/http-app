import { useEffect, useState } from "react";
import "./App.css";
import Comment from "./Comment";
import FullComment from "../FullComment";
import NewComment from "./NewComment";
import axios, { Axios } from "axios";
const App = () => {
  const [comment, setComment] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setComment(res.data.slice(0, 5)))
      .catch((res) => console.log(res));
  }, []);
  const selectedCommentHandler = (id) => {
    setSelectedId(id);
  };
  return (
    <section className="app">
      <div className="App">
        {comment ? (
          comment.map((c) => (
            <Comment
              name={c.name}
              email={c.email}
              body={c.body}
              key={c.id}
              onClick={() => selectedCommentHandler(c.id)}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <FullComment commentId={selectedId} />
      <NewComment />
    </section>
  );
};

export default App;
