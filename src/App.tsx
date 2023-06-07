import { useState, MouseEvent } from "react";
import "./App.css";
import { ClassTrafficLight } from "./ClassTrafficLight";
import { FunctionalTrafficLight } from "./FunctionalTrafficLight";

type StateType = {
  [functional: string]: string;
  class: string;
};

export type PropsType = {
  change: (e: MouseEvent<HTMLButtonElement>) => void;
  color: string;
}

const lightColorStates: StateType = {
  functional: "red", 
  class: "red" 
};

function App() {
  const [lightColor, setLightColor] = useState(lightColorStates);

  const changeColors = (e: React.MouseEvent<HTMLButtonElement>) => {
    const colors: string[] = ["red", "yellow", "green"];
    const lightKey: string = e.currentTarget.value;
    const currentColor: string = lightColor[lightKey]
    const currentColorIdx: number = colors.findIndex(color => color === currentColor);
    const nextColor = currentColorIdx !== 2 
      ? colors[currentColorIdx + 1]
      : colors[0] 

    setLightColor({ ...lightColor, [lightKey]: nextColor });
  }

  return (
    <>
      <main>
        <h1>Traffic light App</h1>
        <div className="container">
          <div className="left">
            <FunctionalTrafficLight 
              change={changeColors}
              color={lightColor.functional}
            />
          </div>
          <div className="right">
            <ClassTrafficLight 
              change={changeColors}
              color={lightColor.class}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
