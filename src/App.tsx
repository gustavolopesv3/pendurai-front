import style from "./app.module.scss";
import { Dashboard } from "./components/dashboard";
import { NavBar } from "./components/navbar";
import { LatestSales } from "./components/satestSales";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <div className="content">
          <Dashboard />

          <div className={style.sales}>
            <LatestSales />
            <LatestSales />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
