import { useState, MouseEvent } from "react";
import "./App.css";
import { ClassTrafficLight } from "./ClassTrafficLight";
import { FunctionalTrafficLight } from "./FunctionalTrafficLight";

function App() {
  const [classColor, setClassColor] = useState("red");
  const [functionalColor, setFunctionalColor] = useState("red");
  const trafficLightColors = ["green", "yellow", "red"];

  const changeClassColor = () => {
    const currentIdx = trafficLightColors.findIndex(
      (color) => color === classColor
    );
    const nextColor =
      currentIdx !== 2
        ? trafficLightColors[currentIdx + 1]
        : trafficLightColors[0];
    setClassColor(nextColor);
  };

  const changeFunctionalColor = () => {
    const currentIdx = trafficLightColors.findIndex(
      (color) => color === functionalColor
    );
    const nextColor =
      currentIdx !== 2
        ? trafficLightColors[currentIdx + 1]
        : trafficLightColors[0];
    setFunctionalColor(nextColor);
  };

  return (
    <>
      <main>
        <h1>Traffic light App</h1>
        <div className="container">
          <div className="left">
            <FunctionalTrafficLight
              change={changeFunctionalColor}
              currentColor={functionalColor}
            />
          </div>
          <div className="right">
            <ClassTrafficLight
              change={changeClassColor}
              currentColor={classColor}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
