import { useEffect, useState } from "react";
import "./App.css";
import Comment from "./Comment";
import FullComment from "./FullComment";
import NewComment from "./NewComment";
import axios, { Axios } from "axios";
const App = () => {
  const [comment, setComment] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComment(data.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);

  const selectedCommentHandler = (id) => {
    setSelectedId(id);
  };
  const deleteHandler = (e)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/comments/${selectedId}`).then(res=>{
    }).catch()
  }
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
      <FullComment commentId={selectedId} deleteHandler={deleteHandler}/>
      <NewComment />
    </section>
  );
};

export default App;
