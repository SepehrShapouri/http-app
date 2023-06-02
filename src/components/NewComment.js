import { useState } from "react";

const NewComment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const submitHandler = () => {};
  const changeHandler = () => {};
  return (
    <section className="newcomment">
      <form onSubmit={submitHandler} className="commentform">
        <span>
          <label for="name">name</label>
          <input
            type="text"
            defaultValue={name}
            onChange={changeHandler}
            id="name"
          />
        </span>
        <span>
          <label for="email">email</label>
          <input
            type="text"
            defaultValue={email}
            onChange={changeHandler}
            id="email"
          />
        </span>
        <span>
          <label for="body">body</label>
          <input
            type="textarea"
            defaultValue={body}
            onChange={changeHandler}
            id="body"
          />
        </span>
        <button className="addbtn">add</button>
      </form>
    </section>
  );
};

export default NewComment;
