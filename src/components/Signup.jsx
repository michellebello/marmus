import { useState } from "react";
import axios from "axios";
import eye from "./eye.png";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const toggleVisibility = () => {
    setPasswordVisibility(passwordVisibility ? false : true);
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      username: credentials.username,
      password: credentials.password,
    };
    try {
      const res = await axios.post("http://localhost:5443/signup", userInfo);
      if (res.status === 201) {
        window.location = "/redirectpage";
      } else {
        window.location = "/";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sign">
      <p className="signLabel"> Sign up </p>
      <div className="passwordContainer">
        <input
          className="inputSign"
          type="text"
          value={credentials.username}
          name="username"
          placeholder="johndoe"
          onChange={handleChange}
        ></input>
      </div>
      <div className="passwordContainer">
        <input
          className="inputSign"
          type={passwordVisibility ? "text" : "password"}
          value={credentials.password}
          name="password"
          placeholder="************"
          onChange={handleChange}
        ></input>
        <img
          className="eye"
          src={eye}
          alt="eye"
          onClick={toggleVisibility}
        ></img>
      </div>
      <button className="signButton" onClick={handleSubmit}>
        Go!
      </button>
    </div>
  );
}
