import React from "react";
import "./Snow.css";

const Snowflake = (props) => {
  return (
    <p className="Snowflake" id={`item${props.id}`} style={props.style}>
      *
    </p>
  );
};

class Snow extends React.Component {
  snow = () => {
    let animationDelay = "0s";
    let fontSize = "120px";
    let arr = Array.from(
      "Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!"
    );
    return arr.map((el, i) => {
      animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
      fontSize = `${Math.floor(Math.random() * 20) + 20}px`;
      let style = {
        animationDelay,
        fontSize,
      };
      return <Snowflake key={i} id={i} style={style} />;
    });
  };

  render() {
    return <>{this.snow()}</>;
  }
}

export default Snow;
