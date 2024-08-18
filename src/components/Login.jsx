import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      username: credentials.username,
      password: credentials.password,
    };
    axios
      .post("http://localhost:5443", userInfo)
      .then(console.log("OK"))
      .catch((err) => console.log({ err }));
  };

  return (
    <div className="signIn">
      <p className="signLabel"> Sign up </p>
      <input
        className="inputSignIn"
        type="text"
        value={credentials.username}
        name="username"
        placeholder="i.e. John Doe"
        onChange={handleChange}
      ></input>
      <input
        className="inputSignIn"
        type="text"
        value={credentials.password}
        name="password"
        placeholder="************"
        onChange={handleChange}
      ></input>
      <button className="signButton" onClick={handleSubmit}>
        Go!
      </button>
    </div>
  );
}
