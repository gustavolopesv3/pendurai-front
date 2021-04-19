import { Dashboard } from "../../components/dashboard";
import { LatestSales } from "../../components/satestSales";
import style from "./home.module.scss";
export function Home() {
  return (
    <div className="content">
      <Dashboard />

      <div className={style.sales}>
        <LatestSales />
        <LatestSales />
      </div>
    </div>
  );
}
