import { useState } from "react";
import "./App.css";
import Comment from "./Comment";
import FullComment from "../FullComment";
import NewComment from "./NewComment";
const App = () => {
  const [comment, setComment] = useState([
    {
      name: "ali",
      email: "ali.gmail.com",
      body: "lorem ipsum is a self created robot that plant are usualyy afraid of beong drainded in the sun of sam the famous serial killer",
    },
    {
      name: "sali",
      email: "sali.gmail.com",
      body: "lorem ipsum is a self created robot that plant are usualyy afraid of beong drainded in the sun of sam the famous serial killer",
    },
    {
      name: "sepi",
      email: "sepi.gmail.com",
      body: "lorem ipsum is a self created robot that plant are usualyy afraid of beong drainded in the sun of sam the famous serial killer",
    },
    {
      name: "reza",
      email: "reza.gmail.com",
      body: "lorem ipsum is a self created robot that plant are usualyy afraid of beong drainded in the sun of sam the famous serial killer",
    },
  ]);
  return (
    <section className="app">
      <div className="App">
        {comment.map((p) => {
          return <Comment name={p.name} email={p.email} />;
        })}
      </div>
      <FullComment
        name="sepehr"
        email="sepehrshapouri@gmail.com"
        body="lorem ipsum is a random generated text by the cows that barely milk fe"
      />
      <NewComment />
    </section>
  );
};

export default App;
gi