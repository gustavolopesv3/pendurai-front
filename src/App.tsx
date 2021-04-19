import { useEffect, useState } from "react";
import style from "./app.module.scss";
import { Dashboard } from "./components/dashboard";
import { NavBar } from "./components/navbar";
import { LatestSales } from "./components/satestSales";
import { api } from "./services/api";

interface ClientsData {
  name: string;
  cpf: string;
}

function App() {
  const [clientes, setClientes] = useState<ClientsData[]>([]);

  useEffect(() => {
    getClients();
  }, []);
  const getClients = async () => {
    const response = await api.get("/cliente");
    setClientes(response.data);
    console.log(response.data);
  };
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
