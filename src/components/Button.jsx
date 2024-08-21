import React from "react";
import { Link } from "react-router-dom";

class Button extends React.Component {
  render() {
    let { linkTo } = this.props;
    return (
      <div className="totalbutton">
        <p className="label">{this.props.children}</p>
        {linkTo !== null ? (
          <Link to={linkTo}>
            <div className="smallbutton">
              <p className="arrow">&#x2192;</p>
            </div>
          </Link>
        ) : (
          <div className="smallbutton">
            <p className="arrow">&#x2192;</p>
          </div>
        )}
      </div>
    );
  }
}

export default Button;
