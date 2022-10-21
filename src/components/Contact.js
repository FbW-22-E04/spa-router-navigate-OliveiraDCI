import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [state, setState] = useState("");

  useEffect(() => {
    if (state) navigate(state);
  });

  return (
    <>
      <h1>Contact</h1>
      <Link to="/">
        <button onClick={() => setState("/home")}>submit</button>
      </Link>
    </>
  );
};

export default Contact;
