import axios from "axios";
import "./styles/index.css";
import MainPage from "./components/MainPage.jsx";
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import RedirectPage from "./components/RedirectPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  { path: "/redirectpage", element: <RedirectPage /> },
]);
function App() {
  axios.get("http://localhost:5443").then((res) => console.log(res.data));
  return <RouterProvider router={router} />;
}

export default App;
