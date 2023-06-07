import { Component } from "react";
import { PropsType } from "./App";

export class ClassTrafficLight extends Component<PropsType> {
  render() {
    const { allColors, change, currentColor } = this.props;

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          {allColors.map((color) => {
            const colorClass = color === currentColor ? color : "black";
            return <div className={`circle ${colorClass}`} key={color}></div>;
          })}
        </div>
        <button className="next-state-button" onClick={change} value="class">
          Next State
        </button>
      </div>
    );
  }
}
