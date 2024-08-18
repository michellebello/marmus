import axios from "axios";
import "./styles/index.css";
import Login from "./components/Login.jsx";

function App() {
  axios.get("http://localhost:5443").then((res) => console.log(res.data));
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
