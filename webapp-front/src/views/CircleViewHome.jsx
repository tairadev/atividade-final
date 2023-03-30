import CircleView from "./CircleView";
import CircleController from "../controllers/CircleController";
import { useState } from "react";

export default function CircleViewHome() {

  const [area, setArea] = useState(null)

  const calculateCircle = async () => {
    const raioElem = document.querySelector("#raio");
  
    if (!raioElem) throw Error("raio is required!");
  
    const raio = Number(raioElem.value);
  
    const ctrl = new CircleController();
    const result = await ctrl.calculate(raio);
  
    console.log(result);
    setArea(result.area);
  }

  return (
    <div className="container">
      <div className="data">
        <div className="form">
          <div className="row">
          </div>
          <hr />
          <div className="row">
            <label>Raio(cm):</label>
            <input id="raio" placeholder="0.00" />
          </div>
          <button type="button" onClick={calculateCircle} className="action">
            Calcular
          </button>
        </div>
      </div>
      <hr />
      <div>
        <CircleView className="data" area={area} />
      </div>
    </div>
  )
}