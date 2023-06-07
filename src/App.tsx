import { useState, MouseEvent } from "react";
import "./App.css";
import { ClassTrafficLight } from "./ClassTrafficLight";
import { FunctionalTrafficLight } from "./FunctionalTrafficLight";

type StateType = {
  [functional: string]: string;
  class: string;
};

const lightColorStates: StateType = {
  functional: "red",
  class: "red",
};

export type PropsType = {
  allColors: string[];
  change: (e: MouseEvent<HTMLButtonElement>) => void;
  currentColor: string;
};

const trafficLightColors = ["red", "yellow", "green"];

function App() {
  const [lightColor, setLightColor] = useState(lightColorStates);

  const changeColors = (e: React.MouseEvent<HTMLButtonElement>) => {
    const lightKey: string = e.currentTarget.value;
    const currentColor: string = lightColor[lightKey];
    const currentColorIdx: number = trafficLightColors.findIndex(
      (color) => color === currentColor
    );
    const nextColor =
      currentColorIdx !== 2
        ? trafficLightColors[currentColorIdx + 1]
        : trafficLightColors[0];

    setLightColor({ ...lightColor, [lightKey]: nextColor });
  };

  return (
    <>
      <main>
        <h1>Traffic light App</h1>
        <div className="container">
          <div className="left">
            <FunctionalTrafficLight
              allColors={trafficLightColors}
              change={changeColors}
              currentColor={lightColor.functional}
            />
          </div>
          <div className="right">
            <ClassTrafficLight 
              allColors={trafficLightColors}
              change={changeColors} 
              currentColor={lightColor.class} 
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
