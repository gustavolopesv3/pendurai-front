import style from "./app.module.scss";
import { Dashboard } from "./components/dashboard";
import { NavBar } from "./components/navbar";
import { LatestSales } from "./components/satestSales";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
