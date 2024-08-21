import React from "react";
import Button from "./Button.jsx";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Button linkTo="signup">I want to create an account </Button>
        <Button linkTo="signin"> I already have an account </Button>
      </div>
    );
  }
}

export default MainPage;
