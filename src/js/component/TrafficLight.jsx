import React from "react";
import { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const lightOn = (colorOn) => {
    setColor(colorOn);
  };
  return (
    <>
      <div className="traffic-base bg-dark"></div>
      <div className="body-light container bg-dark d-flex flex-column align-items-center justify-content-center rounded">
        <div
          className={`red-light btn btn-danger rounded-circle mt-1 ${
            color == "red" ? "redOn" : ""
          }`}
          onClick={() => lightOn("red")} //Aqui se ejecuta la función lightOn y se pasa la palabra "red" como parametro (colorOn).
        ></div>
        <div
          className={`yellow-light btn btn-warning rounded-circle mt-1 ${
            color == "yellow" ? "yellowOn" : ""
          }`}
          onClick={() => lightOn("yellow")} //Aqui se ejecuta la función lightOn y se pasa la palabra "yellow" como parametro (colorOn).
        ></div>
        <div
          className={`green-light btn btn-success rounded-circle mt-1 ${
            color == "green" ? "greenOn" : ""
          }`}
          onClick={() => lightOn("green")} //Aqui se ejecuta la función lightOn y se pasa la palabra "green" como parametro (colorOn).
        ></div>
      </div>
    </>
  );
};

export default TrafficLight;
