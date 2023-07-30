import {NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="homepage">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="newcomment">New Comment</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
