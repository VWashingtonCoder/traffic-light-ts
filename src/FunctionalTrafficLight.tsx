import { PropsType } from "./App";

export const FunctionalTrafficLight = (props: PropsType) => {
  const { allColors, change, currentColor } = props;

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        {allColors.map((color) => {
          const colorClass = color === currentColor ? color : "black";
          return <div className={`circle ${colorClass}`} key={color}></div>;
        })}
      </div>
      <button className="next-state-button" onClick={change} value="functional">
        Next State
      </button>
    </div>
  );
};
