import { Link } from "react-router-dom";

const NoComment = () => {
  return (
    <aside>
      <p>
        No available comments,<Link to={"/newcomment"}>Add one?</Link>
      </p>
    </aside>
  );
};

export default NoComment;
