import { Component } from "react";

type ClassPropsType = {
  change: () => void;
  currentColor: string;
};

export class ClassTrafficLight extends Component<ClassPropsType> {
  render() {
    const { change, currentColor } = this.props;

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div
            className={`circle ${currentColor !== "red" ? "black" : "red"}`}
          ></div>
          <div
            className={`circle ${
              currentColor !== "yellow" ? "black" : "yellow"
            }`}
          ></div>
          <div
            className={`circle ${currentColor !== "green" ? "black" : "green"}`}
          ></div>
        </div>
        <button className="next-state-button" onClick={change}>
          Next State
        </button>
      </div>
    );
  }
}
