type FunctionalPropsType = {
  change: () => void;
  currentColor: string;
};

export const FunctionalTrafficLight = (props: FunctionalPropsType) => {
  const { change, currentColor } = props;

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div
          className={`circle ${currentColor !== "red" ? "black" : "red"}`}
        ></div>
        <div
          className={`circle ${currentColor !== "yellow" ? "black" : "yellow"}`}
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
};
