import "./App.css";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import ImcViewHome from "./views/ImcViewHome";
import CircleViewHome from "./views/CircleViewHome";

function App() {
  return (
    <Router>
      <div className="all-container">
        <nav>
          <h1>Atividade Final</h1>
          <ul>
            <li>
              <Link to="/">Imc</Link>
            </li>
            <li>
              <Link to="/circulo">Área do círculo</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ImcViewHome />} />
          <Route path="/circulo" element={<CircleViewHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
