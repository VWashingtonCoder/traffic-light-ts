import { PropsType } from "./App";

export const FunctionalTrafficLight = (props: PropsType) => {
  const { change, color } = props;

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className="circle black"></div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
      </div>
      <button className="next-state-button" onClick={change} value="functional">
        Next State
      </button>
    </div>
  );
};
