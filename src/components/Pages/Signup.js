import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3000/signup", {
          email,
          password,
        })
        .then((res) => {
          if ((res.data = "exist")) {
            alert("user already exists");
          } else if ((res.data = "notexist")) {
            history("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <h1>Signup</h1>
      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name=""
          id=""
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          name=""
          id=""
        />
        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/">Login Page</Link>
    </div>
  );
};

export default Login;
