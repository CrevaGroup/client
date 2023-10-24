import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";

function App() {

  return (
    <div className="font-orkney">
      <Routes>
        <Route
          path="/"
          element = {<Home/>}
        />
      </Routes>
    </div>
  );
}

export default App
