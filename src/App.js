import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { AllRoutes } from "./routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
