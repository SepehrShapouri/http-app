const FullComment = ({ name, email, body }) => {
  return (
    <div className="fullcomment">
      <p>{name}</p>
      <p>{email}</p>
      <p>{body}</p>
    </div>
  );
};

export default FullComment;
