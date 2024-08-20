import axios from "axios";
import "./styles/index.css";
import Signup from "./components/Signup.jsx";

function App() {
  axios.get("http://localhost:5443").then((res) => console.log(res.data));
  return (
    <div>
      <Signup />
    </div>
  );
}

export default App;
